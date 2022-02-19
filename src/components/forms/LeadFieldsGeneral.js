import { Grid } from '@material-ui/core';
import Controls from "../controls/Controls";


export default function LeadFieldsGeneral(props) {

    const {
        values,
        formDisabled,
        handleInputChange,
        errors,
    } = props;

    // TODO: add all states?
    const getStates = ()=>([
        { id: '1', title: 'AZ' },
        { id: '2', title: 'NV' },
    ]);

    return (
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
                    <Grid container>
                        <Grid item xs={5}>
                            <Controls.Input
                                name="contactTitle"
                                label="Contact Title"
                                value={values.contactTitle}
                                isDisabled={formDisabled}
                                onChange={handleInputChange}
                                error={errors.contactTitle}
                            />
                        </Grid>
                        <Grid item xs={5}>
                            <Controls.Input
                                name="status"
                                label="Status"
                                value={values.status}
                                isDisabled={formDisabled}
                                onChange={handleInputChange}
                                error={errors.status}
                            />
                        </Grid>
                    </Grid>
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
                                value={values.state.toUpperCase()}
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
    );
};