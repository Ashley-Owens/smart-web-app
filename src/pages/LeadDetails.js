import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import NavBar from '../components/NavBar';
import { Grid, Paper } from '@mui/material';
import { makeStyles, Container } from '@material-ui/core';
import LeadFormRoachAssessment from '../components/forms/LeadFormRoachAssessment';
import axios from 'axios';
import moment from 'moment';


const useStyles = makeStyles(theme => ({
    pageContent: {
        // margin: theme.spacing(3),
        padding: theme.spacing(3)
    }
}));

function LeadForm ({ formData }) {
    if (formData.service === 'Roach Assessment') {
        return <LeadFormRoachAssessment formData={formData} />;
    } else {
        return <div>Unknown Service Type</div>;
    }
};

function LeadDetails () {

    // we'll use id in url param to form requests to API
    const { id } = useParams();
    const [formData, setFormData] = useState(null);
    
    useEffect(async () => {
        await axios.get(`https://smartpestapi.wn.r.appspot.com/lead/${id}`)
        .then(response => {
            // handle success
            const entity = response.data;
            entity.dateCreated = moment(entity.dateCreated).format('MM/DD/YYYY')
            setFormData(entity);
        })
        .catch(error => {
            // handle error
            console.log(error);
        });
    }, []);

    const classes = useStyles();

    return (
        <>
            <NavBar />
            {
                formData ? (
                    <Container maxWidth="lg" component="main">
                        <Grid container>
                            <Grid item xs={8}>
                                <h2>Lead Details</h2>
                                <h3>Status: {formData.status}</h3>
                            </Grid>
                            <Grid item xs={4} align="right" sx={{ pt: 3, pb: 1 }}>
                                <div><strong>Date Created:</strong> {formData.dateCreated}</div>
                                <div><strong>Made Contact:</strong> {formData.madeContact ? 'Yes' : 'No'}</div>
                                <div><strong>Technician:</strong> {formData.technician}</div>
                            </Grid>
                        </Grid>
                        <Paper className={classes.pageContent}>
                            {formData ? <LeadForm formData={formData} /> : <div>...loading</div>}
                        </Paper>
                    </Container>
                ) : <div>loading...</div>
            }
        </>
    );
};

export default LeadDetails;