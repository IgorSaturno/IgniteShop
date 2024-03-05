import { AppProps } from "next/app";
import { globalStyles } from "../styles/global";
import { Container } from "../styles/pages/app";
import Header from "../components/Header";
import { CartContextProvider } from "../context/CartContext";


globalStyles()

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <CartContextProvider>
      <Container>
        <Header />
       <Component {...pageProps} />
      </Container>
    </CartContextProvider>
    
  );
}

export default MyApp