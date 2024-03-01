import Image from "next/image";
import logoImg from "../../assets/logo.svg"
import NextLink from "next/link";
import { HeaderContainer } from "./styles";
import Cart from "../Cart";

export default function Header() {
    return (
        <HeaderContainer>
            <NextLink href="/">
                <Image src={logoImg} alt="" />
            </NextLink>

            <Cart />
        </HeaderContainer>
    )
}