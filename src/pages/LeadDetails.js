import { useParams, useNavigate } from 'react-router-dom';
import NavBar from '../components/NavBar';
import { useState, useEffect } from 'react'
import { Paper } from '@mui/material';
import { makeStyles } from '@material-ui/core';
import LeadForm from '../components/LeadForm';
import axios from 'axios';
import moment from 'moment';


const useStyles = makeStyles(theme => ({
    pageContent: {
        margin: theme.spacing(3),
        padding: theme.spacing(3)
    }
}));

function LeadDetails () {

    // we'll use id in url param to form requests to API
    const { id } = useParams();
    console.log('url param:', id);
    const formData = {};
    
    axios.get(`https://smartpestapi.wn.r.appspot.com/lead/${id}`)
        .then(response => {
            // handle success
            console.log('entity:', response.data);
            const entity = response.data;

            formData = {
                id: entity.id,
                propertyName: entity.propertyName,
                service: entity.service,
                address: entity.address,
                state: entity.state,
                technician: entity.technician,
                dateCreated: moment(entity.dateCreated).format('MM/DD/YYYY'),
                status: entity.status,
            };
        })
        .catch(error => {
            // handle error
            console.log(error);
        });

    const classes = useStyles();


    return (
        <>
            <NavBar />
            <h1>Lead Details</h1>
            <Paper className={classes.pageContent}>
                <LeadForm formData={formData} />
            </Paper>
        </>
    );
};

export default LeadDetails;