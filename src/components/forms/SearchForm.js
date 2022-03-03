import Controls from '../controls/Controls';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { useForm, Form } from './useForm';
import BasicDatePicker from '../BasicDatePicker';
import { useState } from 'react';


export default function SearchForm ({ setPropFilters, setHaveSearched }) {

    const [startDate, setStartDate] = useState(null);
    const [endDate, setEndDate] = useState(null);

    const validate = (fieldValues = values) => {
        let temp = { ...errors };
        if ('filterProperty' in fieldValues) {
            temp.filterProperty = fieldValues.filterProperty ? "" : "This field is required.";
        }
        if ('searchValue' in fieldValues) {
            temp.searchValue = fieldValues.searchValue ? "" : "This field is required.";
        }
        
        setErrors({
            ...temp
        });

        if (fieldValues === values) {
            return Object.values(temp).every(x => x === "");
        }
    };

    const initialValues = {
        filterProperty: '', 
        searchValue: ''
    };

    const {
        values,
        setValues,
        errors,
        setErrors,
        handleInputChange,
        resetForm
    } = useForm(initialValues, true, validate);

    const getFilterProperties = ()=>([
        { id: '1', title: 'Property Name' },
        { id: '2', title: 'Technician' },
        { id: '3', title: 'Service' },
        { id: '4', title: 'Target Pest' },
        { id: '5', title: 'State' },
        { id: '6', title: 'Status' },
    ]);

    const handleSearch = async e => {
        e.preventDefault();
        if (validate()){
            let filterProperty = null;
            switch (values.filterProperty) {
                case 'Property Name':
                    filterProperty = 'propertyName';
                    break;
                case 'Technician':
                    filterProperty = 'technician';
                    break;
                case 'Service':
                    filterProperty = 'service';
                    break;
                case 'Target Pest':
                    filterProperty = 'targetPest';
                    break;
                case 'State':
                    filterProperty = 'state';
                    break;
                case 'Status':
                    filterProperty = 'status';
                    break;
            }
            let propFilters = [
                // ['dateCreated', '>=', startDate.startOf('day')],
                // ['dateCreated', '<=', endDate.endOf('day')],
                [filterProperty, '=', values.searchValue]
            ];
            if (endDate) propFilters.unshift(['dateCreated', '<=', endDate.endOf('day')]);
            if (startDate) propFilters.unshift(['dateCreated', '>=', startDate.startOf('day')]);
            setPropFilters(propFilters);
            setHaveSearched(true);
        }
    };

    return (
        <Form onSubmit={handleSearch}>
            <Grid container alignItems="center" justifyContent="center" sx={{ pt: 4, pb: 4 }}>
                <Grid item xs={12}>
                    <Typography
                        component="h1"
                        variant="h4"
                        align="center"
                        color="text.primary"
                        gutterBottom
                    >
                        Search Leads
                    </Typography>
                    <Grid container justifyContent="center" alignItems="center">
                        <Grid item xs={2}>
                            <BasicDatePicker 
                                label="Start Date"
                                value={startDate}
                                setValue={setStartDate}
                            />
                        </Grid>
                        <Grid item xs={2}>
                            <BasicDatePicker
                                label="End Date"
                                value={endDate}
                                setValue={setEndDate}
                            />
                        </Grid> 
                    </Grid>
                    <Grid container></Grid>
                    <Grid container justifyContent="center">
                        <Grid item xs={2}>
                            <Controls.Select
                                name="filterProperty"
                                label="Property to Filter"
                                value={values.filterProperty || ""}
                                onChange={handleInputChange}
                                options={getFilterProperties()}
                                error={errors.filterProperty}
                            />
                        </Grid>  
                        <Grid item xs={2}>
                            <Controls.Input
                                name="searchValue"
                                label="Search Value"
                                value={values.searchValue || ""}
                                onChange={handleInputChange}
                                error={errors.searchValue}
                            />
                        </Grid>
                    </Grid>
                    <Grid container>
                        <Grid item xs={12} align="center">
                            <div>
                                <Controls.Button
                                    type="submit"
                                    text="Search"
                                    onClick={handleSearch}
                                />
                            </div>
                        </Grid>
                    </Grid>
                </Grid>  
            </Grid>
        </Form>
    )
};
