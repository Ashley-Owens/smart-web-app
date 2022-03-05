import { Grid } from '@material-ui/core';
import Controls from "../controls/Controls";


export default function LeadFieldsBirdTrapping(props) {

    const {
        values,
        formDisabled,
        handleInputChange,
        errors,
    } = props;

    const getBoolean = ()=>([
        { id: '1', title: 'true' },
        { id: '2', title: 'false' },
    ]);

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
                        name="numTraps"
                        label="Number of Traps"
                        value={values.numTraps || ""}
                        isDisabled={formDisabled}
                        onChange={handleInputChange}
                        error={errors.numTraps}
                    />
                </Grid>
            </Grid>
            <Grid container>
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
                <Grid item xs={4}>
                    <Controls.Select
                        name="excessHeight"
                        label="Excessive Height"
                        value={Object.keys(values).includes('excessHeight') ? values.excessHeight : ""}
                        isDisabled={formDisabled}
                        onChange={handleInputChange}
                        options={getBoolean()}
                        error={errors.excessHeight}
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
