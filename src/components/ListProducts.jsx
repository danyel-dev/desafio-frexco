import Product from './Product'

import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';


export default function ListProduct({ products }) {
    return (
        <Box sx={{ flexGrow: 2 }}>
            <Grid container spacing={2}>
                { products.map(product => <Product key={ product.id } product={ product } />) }
            </Grid>
        </Box>
    );
}
