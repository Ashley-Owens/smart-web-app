import React, { useState, useEffect } from 'react'
import { Grid } from '@material-ui/core';
import Controls from "../controls/Controls";
import { useForm, Form } from './useForm';
import { Typography } from '@mui/material';
import axios from 'axios';


export default function LeadForm({ formData }) {

    const [formDisabled, setFormDisabled] = useState(true);
    const initialFieldValues = formData;

    // TODO: finish validation rules
    const validate = (fieldValues = values) => {
        let temp = { ...errors };
        if ('propertyName' in fieldValues) {
            temp.propertyName = fieldValues.propertyName ? "" : "This field is required.";
        }
        if ('contactName' in fieldValues) {
            temp.contactName = fieldValues.contactName ? "" : "This field is required.";
        }
        if ('contactTitle' in fieldValues) {
            temp.contactTitle = fieldValues.contactTitle ? "" : "This field is required.";
        }
        if ('address' in fieldValues) {
            temp.address = fieldValues.address ? "" : "This field is required.";
        }
        if ('city' in fieldValues) {
            temp.city = fieldValues.city ? "" : "This field is required.";
        }
        if ('state' in fieldValues) {
            temp.state = fieldValues.state ? "" : "This field is required.";
        }
        if ('zip' in fieldValues) {
            temp.zip = fieldValues.zip ? "" : "This field is required.";
        }
        if ('buildingNums' in fieldValues) {
            temp.buildingNums = fieldValues.buildingNums ? "" : "This field is required.";
        }
        if ('unitNums' in fieldValues) {
            temp.unitNums = fieldValues.unitNums ? "" : "This field is required.";
        }
        if ('notes' in fieldValues) {
            temp.notes = fieldValues.notes ? "" : "This field is required.";
        }
        setErrors({
            ...temp
        });

        if (fieldValues == values) {
            return Object.values(temp).every(x => x == "");
        }
    };

    const {
        values,
        setValues,
        errors,
        setErrors,
        handleInputChange,
        resetForm
    } = useForm(initialFieldValues, true, validate);

    const saveFormData = async (formData, id) => {
        await axios.put(`https://smartpestapi.wn.r.appspot.com/lead/${id}`, {...formData})
        .then(response => {
            // handle success
            console.log('PUT response:', response);
        })
        .catch(error => {
            // handle error
            console.log(error);
        });
    };

    const handleSave = async e => {
        e.preventDefault();
        if (validate()){
            saveFormData(values, values.id);
            setFormDisabled(true);
        }
    };

    const enableEditMode = e => {
        setFormDisabled(false);
    };

    // TODO: add all states?
    const getStates = ()=>([
        { id: '1', title: 'AZ' },
        { id: '2', title: 'NV' },
    ]);

    return (
        <Form onSubmit={handleSave}>
            <Typography
                variant="h6"
                color="textSecondary"
                component="h2"
                gutterBottom
            >
                General Info
            </Typography>
            <Grid container>
                <Grid container>
                    <Grid item xs={4}>
                        <Controls.Input
                            name="propertyName"
                            label="Property Name"
                            value={values.propertyName}
                            isDisabled={formDisabled}
                            onChange={handleInputChange}
                            error={errors.propertyName}
                        />
                    </Grid>  
                    <Grid item xs={4}>
                        <Controls.Input
                            name="contactName"
                            label="Contact Name"
                            value={values.contactName}
                            isDisabled={formDisabled}
                            onChange={handleInputChange}
                            error={errors.contactName}
                        />
                    </Grid>
                    <Grid item xs={4}>
                        <Controls.Input
                            name="contactTitle"
                            label="Contact Title"
                            value={values.contactTitle}
                            isDisabled={formDisabled}
                            onChange={handleInputChange}
                            error={errors.contactTitle}
                        />
                    </Grid>
                </Grid>
                <Grid container>
                    <Grid item xs={4}>
                        <Controls.Input
                            name="address"
                            label="Address"
                            value={values.address}
                            isDisabled={formDisabled}
                            onChange={handleInputChange}
                            error={errors.address}
                        />
                    </Grid>  
                    <Grid item xs={4}>
                        <Controls.Input
                            name="city"
                            label="City"
                            value={values.city}
                            isDisabled={formDisabled}
                            onChange={handleInputChange}
                            error={errors.city}
                        />
                    </Grid>
                    <Grid item xs={4}>
                        <Grid container>
                            <Grid item xs={5}>
                                <Controls.Select
                                    name="state"
                                    label="State"
                                    value={values.state}
                                    isDisabled={formDisabled}
                                    onChange={handleInputChange}
                                    options={getStates()}
                                    error={errors.state}
                                />
                            </Grid>
                            <Grid item xs={5}>
                                <Controls.Input
                                    name="zipCode"
                                    label="Zip Code"
                                    value={values.zipCode}
                                    isDisabled={formDisabled}
                                    onChange={handleInputChange}
                                    error={errors.zipCode}
                                />
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
            <Typography
                variant="h6"
                color="textSecondary"
                component="h2"
                gutterBottom
                sx={{ pt: 1 }}
            >
                Service Details
            </Typography>
            <Grid container>
                <Grid container>
                    <Grid item xs={4}>
                        <Controls.Input
                            name="service"
                            label="Service"
                            value={values.service}
                            isDisabled={formDisabled}
                            onChange={handleInputChange}
                            error={errors.service}
                        />
                    </Grid>
                    <Grid item xs={4}>
                        <Controls.Input
                            name="targetPest"
                            label="Target Pest"
                            value={values.targetPest}
                            isDisabled={formDisabled}
                            onChange={handleInputChange}
                            error={errors.targetPest}
                        />
                    </Grid>
                    <Grid item xs={4}>
                        <Controls.Input
                            name="buildingNums"
                            label="Building Numbers"
                            value={values.buildingNums}
                            isDisabled={formDisabled}
                            onChange={handleInputChange}
                            error={errors.buildingNums}
                        />
                    </Grid>
                </Grid>
                <Grid container>
                    <Grid item xs={4}>
                        <Controls.Input
                            name="unitNums"
                            label="Unit Numbers"
                            value={values.unitNums}
                            isDisabled={formDisabled}
                            onChange={handleInputChange}
                            error={errors.unitNums}
                        />
                    </Grid>
                    <Grid item xs={4}>
                        <Controls.Input
                            name="notes"
                            label="Notes"
                            isMultiline={true}
                            value={values.notes}
                            isDisabled={formDisabled}
                            onChange={handleInputChange}
                            error={errors.notes}
                        />
                    </Grid>
                </Grid>
            </Grid>
            <Grid container>
                <Grid item xs={12} align="right">
                    <div>
                        <Controls.Button
                            text="Edit"
                            color="default"
                            onClick={enableEditMode} 
                        />
                        <Controls.Button
                            type="submit"
                            text="Save"
                            onClick={handleSave}
                        />
                    </div>
                </Grid>
            </Grid>
        </Form>
    );
};