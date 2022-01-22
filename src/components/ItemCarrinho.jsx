import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';
import { Button } from '@mui/material';

import { useState } from 'react';


export default function ItemCarrinho({ itemCarrinho, handleProductsRemove, HandleProductsUpdate }) {
    const [input, setInput] = useState(itemCarrinho.quantidade)
    
    function handleChangeInput(e) {
        setInput(e.target.value)
        HandleProductsUpdate(Number(e.target.value), itemCarrinho.id)
    }

    return (
        <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
            <TableCell align="right">{ itemCarrinho.id }</TableCell>
            
            <TableCell align="right">{ itemCarrinho.name }</TableCell>
            
            <TableCell align="right">
                <input type="number" value={ input } onChange={ handleChangeInput } />
            </TableCell>
            
            <TableCell align="right">
                { itemCarrinho.preco * itemCarrinho.quantidade }
            </TableCell>
            
            <TableCell align="right">
                <Button variant="outlined" color="error" onClick={() => { handleProductsRemove(itemCarrinho.id) }}>
                    Remover
                </Button>
            </TableCell>
        </TableRow>      
    );
}
