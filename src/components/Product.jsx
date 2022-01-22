import * as React from 'react';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Popover from '@mui/material/Popover';

import { BsCart3 } from 'react-icons/bs';

import '../styles/Card.css'
import '../styles/box.css'


export default function Product({ product, handleProductsAdittion }) {
    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const open = Boolean(anchorEl);
    const id = open ? 'simple-popover' : undefined;

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
                    <div>
                        <Button aria-describedby={id} size='small' onClick={handleClick}>
                            Mais detalhes
                        </Button>
                        <Popover
                            id={id}
                            open={open}
                            anchorEl={anchorEl}
                            onClose={handleClose}
                            anchorOrigin={{
                            vertical: 'bottom',
                            horizontal: 'left',
                            }}
                        >
                            <Typography sx={{ p: 2 }}>
                                <div className='modal-box'> 
                                    <h2 className='title-name'>{ product.name }</h2>
                                    <span className='span-nutritions'>
                                        carbohydrates: { product.nutritions.carbohydrates }
                                    </span>
                                    <span className='span-nutritions'>
                                        protein: { product.nutritions.protein }
                                    </span>
                                    <span className='span-nutritions'>
                                        fat: { product.nutritions.fat }
                                    </span>
                                    <span className='span-nutritions'>
                                        calories: { product.nutritions.calories }
                                    </span>
                                    <span className='span-nutritions'>
                                        sugar: { product.nutritions.sugar }
                                    </span>
                                </div>
                            </Typography>
                        </Popover>
                    </div>

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
