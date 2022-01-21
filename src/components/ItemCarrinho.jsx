import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';
import { Button } from '@mui/material';

import '../styles/carrinho.css'


export default function ItemCarrinho({ itemCarrinho, handleProductsRemove }) {
    return (
        <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
            <TableCell align="right">{ itemCarrinho.id }</TableCell>
            <TableCell align="right">{ itemCarrinho.name }</TableCell>
            <TableCell align="right">1</TableCell>
            <TableCell align="right">{ itemCarrinho.preco }</TableCell>
            <TableCell align="right">
                <Button variant="outlined" color="error" onClick={() => { handleProductsRemove(itemCarrinho.id) }}>
                    Remover
                </Button>
            </TableCell>
        </TableRow>      
    );
}
