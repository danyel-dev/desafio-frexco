import * as React from 'react';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';

import { BsCart3 } from 'react-icons/bs';

import '../styles/Card.css'
import ModalBox from './ModalBox';


export default function Product({ product, handleProductsAdittion }) {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
        <Grid item md={4} xs={12} sm={6}>
            <Card sx={{ minWidth: 300 }}>
                <CardContent>
                    <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                        <div className='genus-price'>
                            <span>Genus: { product.genus }</span>
                            <span className='price'>R${ product.preco }</span>
                        </div>
                    </Typography>

                    <Typography className='card-center-text' sx={{ mb: 1.5 }} color="text.secondary">
                        <span className='card-text-color-black'>{ product.name }</span>
                    </Typography>

                    <Typography className='card-center-text' variant="body2">
                        Família: <span className='card-text-color-green'>{ product.family }</span>
                        <br />
                    </Typography>

                    <Typography className='card-center-text' variant="body2">
                        ordem: <span className='card-text-color-green'>{ product.order }</span>
                        <br />
                    </Typography>
                </CardContent>

                <CardActions className='card-buttons'>
                    <Button onClick={handleOpen} size="small">Mais detalhes</Button>
                    <Modal
                        open={open}
                        onClose={handleClose}
                        aria-labelledby="modal-modal-title"
                        aria-describedby="modal-modal-description"
                    >
                        <ModalBox key={ product.id } product={ product } />
                    </Modal>

                    <BsCart3
                        onClick={() => {
                            handleProductsAdittion(product)
                            window.alert('Produto adicionado no carrinho')
                        }}
                        className='car-buy'
                    />
                </CardActions>
            </Card>
        </Grid>
    );
}
