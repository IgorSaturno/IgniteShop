import Image from "next/image";
import Head from "next/head";
import NextLink from "next/link";
import { HomeContainer, Product } from "../styles/pages/home";
import { useKeenSlider } from 'keen-slider/react';


import 'keen-slider/keen-slider.min.css';
import { stripe } from "../lib/stripe";
import { GetStaticProps } from "next";
import Stripe from "stripe";
import CartButton from "../components/CartButton";
import { useCart } from "../hooks/useCarts";
import { IProduct } from "../context/CartContext";
import { MouseEvent } from "react";

interface HomeProps {
  products: IProduct[];
}

export default function Home({ products }: HomeProps) {
  const [sliderRef] = useKeenSlider({
    mode: 'snap', 
    slides: {
      perView: 'auto',
      spacing: 48
    }
  })

  const { addToCart, checkIfItemAlreadyExists } = useCart();

  function handleAddToCart(e: MouseEvent<HTMLButtonElement>, product: IProduct) {
    e.preventDefault();
    addToCart(product);
  }

  return (
    <>
      <Head>
        <title>Home | Ignite Shop</title>
      </Head>
    
      <HomeContainer ref={sliderRef} className="keen-slider flex">
        {products.map(product => {
          return (
            <NextLink legacyBehavior  href={`/product/${product.id}`} key={product.id} prefetch={false}>
              <Product className="keen-slider__slide">
              <Image src={product.imageUrl} width={520} height={480} alt="" />
              <footer>
                <div>
                  <strong>{product.name}</strong>
                  <span>{product.price}</span>
                </div>
                <CartButton disabled={checkIfItemAlreadyExists(product.id)} color='green' size='large' onClick={(e) => handleAddToCart(e, product)}/>
              </footer>
              </Product>
            </NextLink>
          )
        })}
        
      </HomeContainer>
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const response = await stripe.products.list({
    expand: ['data.default_price']
  })


  
  const products =  response.data.map(product => {
    const price = product.default_price as Stripe.Price
    return {
      id: product.id,
      name: product.name,
      imageUrl: product.images[0],
      price: new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL',
      }).format(price.unit_amount / 100),
      numberPrice: price.unit_amount / 100,
      defaultPriceId: price.id,
    }
  })

  return {
    props: {
      products,
    },
    revalidate: 60 * 60 * 2,
  }
}