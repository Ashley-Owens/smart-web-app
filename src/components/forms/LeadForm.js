import { useState } from 'react';
import { useForm, Form } from './useForm';
import { Typography } from '@mui/material';
import { Grid } from '@mui/material';
import Controls from "../controls/Controls";
import LeadFieldsGeneral from './LeadFieldsGeneral';
import LeadFieldsRoachAssessment from './LeadFieldsRoachAssessment';
import axios from 'axios';


function LeadForm ({ formData }) {

    const [formDisabled, setFormDisabled] = useState(true);
    const [editMode, setEditMode] = useState(false);

    const initialFieldValues = formData;

    // TODO: finish validation rules
    const validate = (fieldValues = values) => {
        let temp = { ...errors };
        if ('propertyName' in fieldValues) {
            temp.propertyName = fieldValues.propertyName ? "" : "This field is required.";
        }
        if ('status' in fieldValues) {
            temp.status = fieldValues.status ? "" : "This field is required.";
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
        if ('zipCode' in fieldValues) {
            temp.zipCode = fieldValues.zipCode ? "" : "This field is required.";
        }

        switch (values.service.toLowerCase()) {
            case 'roach assessment':
                if ('service' in fieldValues) {
                    temp.service = fieldValues.service ? "" : "This field is required.";
                }
                if ('targetPest' in fieldValues) {
                    temp.targetPest = fieldValues.targetPest ? "" : "This field is required.";
                }
                if ('buildingNums' in fieldValues) {
                    temp.buildingNums = fieldValues.buildingNums ? "" : "This field is required.";
                }
                if ('unitNums' in fieldValues) {
                    temp.unitNums = fieldValues.unitNums ? "" : "This field is required.";
                }
                break;
            default:
                break;
        };
        
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

    const handleSave = async e => {
        e.preventDefault();
        if (validate()){
            saveFormData(values, values.id);
            setFormDisabled(true);
            setEditMode(false);
        }
    };

    const enableEditMode = e => {
        setFormDisabled(false);
        setEditMode(true);
    };

    const cancelEditMode = e => {
        resetForm();
        setFormDisabled(true);
        setEditMode(false);
    };

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
            <LeadFieldsGeneral
                values={values}
                formDisabled={formDisabled}
                handleInputChange={handleInputChange}
                errors={errors}
            />
            <Typography
                variant="h6"
                color="textSecondary"
                component="h2"
                gutterBottom
                sx={{ pt: 1 }}
            >
                Service Details
            </Typography>
            <LeadFieldsService
                values={values}
                formDisabled={formDisabled}
                handleInputChange={handleInputChange}
                errors={errors}
            />
            <Grid container>
                <Grid item xs={12} align="right">
                    <div>
                        {
                            editMode ?
                            <>
                                <Controls.Button
                                    text="Cancel"
                                    color="default"
                                    onClick={cancelEditMode}
                                />
                                <Controls.Button
                                    type="submit"
                                    text="Save"
                                    onClick={handleSave}
                                />
                            </> :
                            <Controls.Button
                                text="Edit"
                                color="default"
                                onClick={enableEditMode}
                            />
                        }
                    </div>
                </Grid>
            </Grid>
        </Form>
    )
};

function LeadFieldsService ({ values, formDisabled, handleInputChange, errors }) {
    switch (values.service.toLowerCase()) {
        case 'roach assessment':
            return (
                <LeadFieldsRoachAssessment
                    values={values}
                    formDisabled={formDisabled}
                    handleInputChange={handleInputChange}
                    errors={errors}
                />
            );
        default:
            return <div>Unknown Service Type</div>;
            
    }
};


export default LeadForm;
