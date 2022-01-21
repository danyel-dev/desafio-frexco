import { Container } from "@mui/material";

import Title from "../components/Title";
import ListProducts from '../components/ListProducts';


export default function Home({ products, handleProductsAdittion }) {
    return (
        <Container>
            <Title>Listagem das frutas</Title>
            <ListProducts products={ products } handleProductsAdittion={ handleProductsAdittion } />
        </Container>
    );
}
