import { useState } from 'react';
import { useForm, Form } from './useForm';
import { Typography } from '@mui/material';
import { Grid } from '@mui/material';
import Controls from "../controls/Controls";
import LeadFieldsGeneral from './LeadFieldsGeneral';
import LeadFieldsRoachAssessment from './LeadFieldsRoachAssessment';
import LeadFieldsBedBugInspection from './LeadFieldsBedBugInspection';
import LeadFieldsBedBugTreatment from './LeadFieldsBedBugTreatment';
import LeadFieldsExtremeBedBug from './LeadFieldsExtremeBedBug';
import LeadFieldsBirdExclusion from './LeadFieldsBirdExclusion';
import LeadFieldsBirdTrapping from './LeadFieldsBirdTrapping';
import LeadFieldsDewebbing from './LeadFieldsDewebbing';
import LeadFieldsExteriorRodent from './LeadFieldsExteriorRodent';
import LeadFieldsInteriorRodent from './LeadFieldsInteriorRodent';
import LeadFieldsRodentExclusion from './LeadFieldsRodentExclusion';
import validate from './leadFormValidation';
import axios from 'axios';


function LeadForm ({ formData }) {

    const [formDisabled, setFormDisabled] = useState(true);
    const [editMode, setEditMode] = useState(false);

    const initialFieldValues = formData;

    var {
        values,
        setValues,
        errors,
        setErrors,
        handleInputChange,
        resetForm
    } = useForm(initialFieldValues, false, validate);

    const handleSave = async e => {
        e.preventDefault();
        if (validate(errors, setErrors, values)){
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
        case 'bed bug inspection':
            return (
                <LeadFieldsBedBugInspection
                    values={values}
                    formDisabled={formDisabled}
                    handleInputChange={handleInputChange}
                    errors={errors}
                />
            );
        case 'bed bug treatment':
            return (
                <LeadFieldsBedBugTreatment
                    values={values}
                    formDisabled={formDisabled}
                    handleInputChange={handleInputChange}
                    errors={errors}
                />
            );
        case 'extreme bed bug':
            return (
                <LeadFieldsExtremeBedBug
                    values={values}
                    formDisabled={formDisabled}
                    handleInputChange={handleInputChange}
                    errors={errors}
                />
            );
        case 'bird exclusion':
            return (
                <LeadFieldsBirdExclusion
                    values={values}
                    formDisabled={formDisabled}
                    handleInputChange={handleInputChange}
                    errors={errors}
                />
            );
        case 'bird trapping':
            return (
                <LeadFieldsBirdTrapping
                    values={values}
                    formDisabled={formDisabled}
                    handleInputChange={handleInputChange}
                    errors={errors}
                />
            );
        case 'dewebbing':
            return (
                <LeadFieldsDewebbing
                    values={values}
                    formDisabled={formDisabled}
                    handleInputChange={handleInputChange}
                    errors={errors}
                />
            );
        case 'exterior rodent':
            return (
                <LeadFieldsExteriorRodent
                    values={values}
                    formDisabled={formDisabled}
                    handleInputChange={handleInputChange}
                    errors={errors}
                />
            );
        case 'interior rodent':
            return (
                <LeadFieldsInteriorRodent
                    values={values}
                    formDisabled={formDisabled}
                    handleInputChange={handleInputChange}
                    errors={errors}
                />
            );
        case 'rodent exclusion':
            return (
                <LeadFieldsRodentExclusion
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
