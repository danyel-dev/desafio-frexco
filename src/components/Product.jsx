import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';

import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

import '../styles/Card.css'

export default function Product({ product }) {
    return (
        <Grid item md={4} xs={12} sm={6}>
            <Card sx={{ minWidth: 275 }}>
                <CardContent>
                    <Typography className='card-center-text' sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                        Genus: { product.genus }
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

                <CardActions>
                    <Button size="small">Mais detalhes</Button>
                    
                </CardActions>
            </Card>
        </Grid>
    );
}
