import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

import '../styles/box.css'

export default function ModalBox({ product }) {
    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 400,
        bgcolor: 'background.paper',
        border: '2px solid #000',
        boxShadow: 24,
        p: 4,
    };

    return (
        <Box sx={style}>
            <Typography className='modal-box' id="modal-modal-title" variant="h6" component="h2">
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
            </Typography>
        </Box>
    );
}
