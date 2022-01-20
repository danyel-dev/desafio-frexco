import { useEffect, useState } from 'react';
import axios from 'axios'

import { Container } from "@mui/material";

import Title from "../components/Title";
import ListProduct from '../components/ListProduct';


export default function Home() {
    const [products, setProducts] = useState([])

    useEffect(() => {
        const fetchProducts = async () => {
        const { data } = await axios.get('/api/fruit/all');
        setProducts(data);
        } 

        fetchProducts()
    }, [])

    console.log(products)

    return (
        <Container>
            <Title>
                Listagem das frutas
            </Title>
            <ListProduct products={ products } />
        </Container>
    );
}
