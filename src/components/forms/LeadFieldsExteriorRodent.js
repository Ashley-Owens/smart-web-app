import { Grid } from '@material-ui/core';
import Controls from "../controls/Controls";


export default function LeadFieldsExteriorRodent(props) {

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
                        name="numStations"
                        label="Number of Stations"
                        value={values.numStations || ""}
                        isDisabled={formDisabled}
                        onChange={handleInputChange}
                        error={errors.numStations}
                    />
                </Grid>
            </Grid>
            <Grid container>
                <Grid item xs={4}>
                    <Controls.Input
                        name="numPropertyBuildings"
                        label="Number of Property Buildings"
                        value={values.numPropertyBuildings || ""}
                        isDisabled={formDisabled}
                        onChange={handleInputChange}
                        error={errors.numPropertyBuildings}
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
                <Grid item xs={4}>
                    <Controls.Input
                        name="observations"
                        label="Observations"
                        isMultiline={true}
                        value={values.observations || ""}
                        isDisabled={formDisabled}
                        onChange={handleInputChange}
                        error={errors.observations}
                    />
                </Grid>
            </Grid>
            <Grid container>
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
