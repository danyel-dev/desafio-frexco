import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';

import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';


export default function Product({ product }) {
    return (
        <Grid item md={4} xs={12} sm={6}>
            <Card sx={{ minWidth: 275 }}>
                <CardContent>
                    <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                        { product.genus }
                    </Typography>

                    <Typography sx={{ mb: 1.5 }} color="text.secondary">
                        { product.name }
                    </Typography>

                    <Typography variant="body2">
                        { product.family }
                        <br />
                    </Typography>

                    <Typography variant="body2">
                        { product.order }
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
