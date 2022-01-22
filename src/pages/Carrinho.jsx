import { Container } from "@mui/material";
import Title from '../components/Title'
import ItemCarrinho from '../components/ItemCarrinho'

import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

import { Button } from "@mui/material";

import '../styles/carrinho.css'


export default function Carrinho({ carrinho, handleProductsRemove, HandleProductsClear, HandleProductsUpdate }) {
    return (
        <Container>
            <Title>Carrinho</Title>
            
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
                    <TableHead>
                        <TableRow>
                            <TableCell align="right"><strong>Id</strong></TableCell>
                            <TableCell align="right"><strong>Name</strong></TableCell>
                            <TableCell align="right"><strong>Quantidade</strong></TableCell>
                            <TableCell align="right"><strong>Preço</strong></TableCell>
                            <TableCell align="right"></TableCell>
                        </TableRow>
                    </TableHead>

                    <TableBody>
                        { carrinho.map(itemCarrinho => <ItemCarrinho
                            key={ carrinho.id }
                            itemCarrinho={ itemCarrinho }
                            handleProductsRemove={ handleProductsRemove }
                            HandleProductsUpdate={ HandleProductsUpdate } />) 
                        }
                    </TableBody>
                </Table>
            </TableContainer>
            
            <div className="info-carrinho">
                <span>
                    <p>Quantidade de itens: {carrinho.reduce((a, item) => a + item.quantidade, 0)} </p>
                    <p>Preço Total: {carrinho.reduce((a, item) => a + item.preco * item.quantidade, 0).toFixed(2)} </p>
                </span>

                <Button
                    size="small"
                    onClick={ () => {
                        window.alert("Compra realizada com sucesso") 
                        HandleProductsClear()
                    }}
                    variant="contained" color="success">
                    Realizar compra
                </Button> 
            </div>

            <Button variant="outlined" onClick={ HandleProductsClear }>
                Limpar Carrinho
            </Button>    
        </Container>
    );
}
