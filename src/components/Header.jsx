import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

import { useHistory } from 'react-router-dom'


export default function ButtonAppBar() {
  const history = useHistory();

  const pageCarrinho = () => {
    history.push("/carrinho")
  }

  const pageHome = () => {
    history.push("/")
  }

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Logo
          </Typography>

          <Button color="inherit" onClick={ pageHome }>Home</Button>
          <Button color="inherit" onClick={ pageCarrinho }>Carrinho</Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
