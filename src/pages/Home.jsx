import { useEffect, useState } from 'react';
import axios from 'axios'

import { Container } from "@mui/material";

import Title from "../components/Title";
import ListProducts from '../components/ListProducts';


export default function Home() {
    const [products, setProducts] = useState([])

    useEffect(() => {
        const fetchProducts = async () => {
        const { data } = await axios.get('/api/fruit/all');
        setProducts(data);
        } 

        fetchProducts()
    }, [])

    return (
        <Container>
            <Title>Listagem das frutas</Title>
            <ListProducts products={ products } />
        </Container>
    );
}
