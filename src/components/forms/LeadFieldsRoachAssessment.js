import { Grid } from '@material-ui/core';
import Controls from "../controls/Controls";


export default function LeadFieldsRoachAssessment(props) {

    const {
        values,
        formDisabled,
        handleInputChange,
        errors,
    } = props;

    return (
        <Grid container>
            <Grid container>
                <Grid item xs={4}>
                    <Controls.Input
                        name="service"
                        label="Service"
                        value={values.service || ""}
                        isDisabled={true}
                        onChange={handleInputChange}
                        error={errors.service}
                    />
                </Grid>
                <Grid item xs={4}>
                    <Controls.Input
                        name="targetPest"
                        label="Target Pest"
                        value={values.targetPest || ""}
                        isDisabled={formDisabled}
                        onChange={handleInputChange}
                        error={errors.targetPest}
                    />
                </Grid>
                <Grid item xs={4}>
                    <Controls.Input
                        name="buildingNums"
                        label="Building Numbers"
                        value={values.buildingNums || ""}
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
                        value={values.unitNums || ""}
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
                        value={values.notes || ""}
                        isDisabled={formDisabled}
                        onChange={handleInputChange}
                        error={errors.notes}
                    />
                </Grid>
            </Grid>
        </Grid>
    );
};