import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import GlobalStyles from '@mui/material/GlobalStyles';
import Container from '@mui/material/Container';
import leadStatusTypes from '../leadStatusTypes';
import { useNavigate, createSearchParams } from 'react-router-dom';


function HomeContent() {
  const navigate = useNavigate();

  function goToLeads(status) {
    const params = { status };
    navigate({
      pathname: '/leads',
      search: `?${createSearchParams(params)}`
    });
  };

  return (
    <React.Fragment>
      <GlobalStyles styles={{ ul: { margin: 0, padding: 0, listStyle: 'none' } }} />
      <CssBaseline />

      {/* Start page title */}
      <Container disableGutters maxWidth="sm" component="main" sx={{ pt: 8, pb: 6 }}>
        <Typography
          component="h1"
          variant="h2"
          align="center"
          color="text.primary"
          gutterBottom
        >
          Lead Status Types
        </Typography>
      </Container>
      {/* End page title */}

      {/* Start cards */}
      <Container maxWidth="md" component="main">
        <Grid container spacing={5} alignItems="flex-end">
          {leadStatusTypes.map((statusType) => (
            <Grid
              item
              key={statusType.field}
              xs={12}
              md={4}
            >
              <Card>
                <CardHeader
                  title={statusType.title}
                  titleTypographyProps={{ align: 'center' }}
                  sx={{
                    backgroundColor: (theme) =>
                      theme.palette.mode === 'light'
                        ? theme.palette.grey[200]
                        : theme.palette.grey[700],
                  }}
                />
                <CardContent>
                  <Box
                    sx={{
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'baseline',
                      mb: 2,
                    }}
                  >
                  </Box>
                </CardContent>
                <CardActions>
                    <Button
                      onClick={() => goToLeads(statusType.field)}
                      fullWidth variant='outlined'
                    >
                      View Leads
                    </Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
      {/* End cards */}
      
    </React.Fragment>
  );
}

export default HomeContent;