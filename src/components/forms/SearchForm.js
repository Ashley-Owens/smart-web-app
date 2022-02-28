import Controls from '../controls/Controls';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { useForm, Form } from './useForm';


export default function SearchForm ({ setPropFilters, setHaveSearched }) {

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

    const {
        values,
        setValues,
        errors,
        setErrors,
        handleInputChange,
        resetForm
    } = useForm({filterProperty: '', searchValue: ''}, true, validate);

    const getFilterProperties = ()=>([
        { id: '1', title: 'propertyName' },
        { id: '2', title: 'technician' },
        { id: '3', title: 'service' },
        { id: '4', title: 'targetPest' },
        { id: '5', title: 'state' },
        { id: '6', title: 'status' },
        { id: '7', title: 'dateCreated' }
    ]);

    const handleSearch = async e => {
        e.preventDefault();
        if (validate()){
            let propFilters = [
                [values.filterProperty, '=', values.searchValue]
            ];
            setPropFilters(propFilters);
            setHaveSearched(true);
        }
    };

    return (
        <Form onSubmit={handleSearch}>
            <Grid container alignItems="center" justifyContent="center">
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
                    <Grid container justifyContent="center">
                        <Grid item xs={4}>
                            <Controls.Select
                                name="filterProperty"
                                label="Property to Filter"
                                value={values.filterProperty || ""}
                                onChange={handleInputChange}
                                options={getFilterProperties()}
                                error={errors.filterProperty}
                            />
                        </Grid>  
                        <Grid item xs={4}>
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
