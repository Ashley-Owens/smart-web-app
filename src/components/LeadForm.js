import React, { useState, useEffect } from 'react'
import { Grid } from '@material-ui/core';
import Controls from "./controls/Controls";
import { useForm, Form } from './useForm';
import { Typography } from '@mui/material';


export default function EmployeeForm({ formData }) {

    const initialFieldValues = formData;
    console.log('initialFieldValues:', initialFieldValues);

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

    const handleSubmit = e => {
        e.preventDefault();
        if (validate()){
            // TODO: submit if form values are valid
        }
    };

    // TODO: add all states?
    const getStates = ()=>([
        { id: '1', title: 'AZ' },
        { id: '2', title: 'NV' },
    ]);

    return (
        <Form onSubmit={handleSubmit}>
            <Typography
                variant="h6"
                color="textSecondary"
                component="h2"
                gutterBottom
            >
                Contact Details
            </Typography>
            <Grid container>
                <Grid container>
                    <Grid item xs={4}>
                        <Controls.Input
                            name="propertyName"
                            label="Property Name"
                            value={values.propertyName}
                            onChange={handleInputChange}
                            error={errors.propertyName}
                        />
                    </Grid>  
                    <Grid item xs={4}>
                        <Controls.Input
                            name="contactName"
                            label="Contact Name"
                            value={values.contactName}
                            onChange={handleInputChange}
                            error={errors.contactName}
                        />
                    </Grid>
                    <Grid item xs={4}>
                        <Controls.Input
                            name="contactTitle"
                            label="Contact Title"
                            value={values.contactTitle}
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
                            onChange={handleInputChange}
                            error={errors.address}
                        />
                    </Grid>  
                    <Grid item xs={4}>
                        <Controls.Input
                            name="city"
                            label="City"
                            value={values.city}
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
                                    onChange={handleInputChange}
                                    options={getStates()}
                                    error={errors.state}
                                />
                            </Grid>
                            <Grid item xs={5}>
                                <Controls.Input
                                    name="zip"
                                    label="Zip Code"
                                    value={values.zip}
                                    onChange={handleInputChange}
                                    error={errors.zip}
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
            >
                Roach Assessment
            </Typography>
            <Grid container>
                <Grid item xs={4}>
                    <Controls.Input
                        name="buildingNums"
                        label="Building Numbers"
                        value={values.buildingNums}
                        onChange={handleInputChange}
                        error={errors.buildingNums}
                    />
                </Grid>
                <Grid item xs={4}>
                    <Controls.Input
                        name="unitNums"
                        label="Unit Numbers"
                        value={values.unitNums}
                        onChange={handleInputChange}
                        error={errors.unitNums}
                    />
                </Grid>
                <Grid item xs={4}>
                    <Controls.Input
                        name="notes"
                        label="Notes"
                        value={values.notes}
                        onChange={handleInputChange}
                        error={errors.notes}
                    />
                </Grid>
            </Grid>
            <Grid container>
                <Grid item xs={12}>
                    <div>
                        <Controls.Button
                            text="Edit Lead"
                            color="default"
                            onClick={resetForm} 
                        />
                        <Controls.Button
                            type="submit"
                            text="Create Bid" 
                        />
                    </div>
                </Grid>
            </Grid>
        </Form>
    );
};