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


export default function Carrinho({ carrinho, handleProductsRemove }) {
    return (
        <Container>
            <Title>Carrinho</Title>
           
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
                    <TableHead>
                        <TableRow>
                            <TableCell align="right">Id</TableCell>
                            <TableCell align="right">Name</TableCell>
                            <TableCell align="right">Quantidade</TableCell>
                            <TableCell align="right">Preço</TableCell>
                            <TableCell align="right"></TableCell>
                        </TableRow>
                    </TableHead>

                    <TableBody>
                        { carrinho.map(itemCarrinho => <ItemCarrinho
                            key={ carrinho.id }
                            itemCarrinho={ itemCarrinho }
                            handleProductsRemove={handleProductsRemove} />) 
                        }
                    </TableBody>
                </Table>
            </TableContainer>
            
            <div className="button-clean-shopping">
                <Button variant="outlined">Limpar Carrinho</Button>    
            </div>
        </Container>
    );
}
