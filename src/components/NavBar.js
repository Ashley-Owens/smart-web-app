import AppBar from '@mui/material/AppBar';
import Button from '@mui/material/Button';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import smartPestLogo from '../images/smart-pest-logo.png';

function NavBar () {
    return (
        <AppBar
            position="static"
            color="default"
            elevation={0}
            sx={{ borderBottom: (theme) => `1px solid ${theme.palette.divider}` }}
        >
            <Toolbar sx={{ flexWrap: 'wrap' }}>
                <Typography variant="h6" color="inherit" noWrap sx={{ flexGrow: 1 }}>
                    <Link
                        href="/"
                    >
                        <img src={smartPestLogo} alt="smart-pest-logo" />
                    </Link>
                    
                </Typography>
                
                <Button href="#" variant="outlined" sx={{ my: 1, mx: 1.5 }}>
                    Logout
                </Button>
            </Toolbar>
        </AppBar>
    )
}


export default NavBar;