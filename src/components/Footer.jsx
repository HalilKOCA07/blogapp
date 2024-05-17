import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';


function Footer() {
  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
        <Typography sx={{m:"auto", fontSize:"1.3rem"}}>
        Copyright © HK Desinger & Web-Developer
        </Typography>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default Footer;
