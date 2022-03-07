import { Grid } from '@material-ui/core';
import Controls from "../controls/Controls";
import { Typography } from '@mui/material';


export default function LeadFieldsRodentExclusion(props) {

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
                        name="numPipes"
                        label="Number of Sewage Pipes"
                        value={values.numPipes || ""}
                        isDisabled={formDisabled}
                        onChange={handleInputChange}
                        error={errors.numPipes}
                    />
                </Grid>
            </Grid>
            <Grid container>
                <Grid item xs={4}>
                    <Controls.Input
                        name="numVents"
                        label="Number of T-Top Vents"
                        value={values.numVents || ""}
                        isDisabled={formDisabled}
                        onChange={handleInputChange}
                        error={errors.numVents}
                    />
                </Grid>
                <Grid item xs={4}>
                    <Controls.Input
                        name="numMeterBoxes"
                        label="Number of Meter Boxes"
                        value={values.numMeterBoxes || ""}
                        isDisabled={formDisabled}
                        onChange={handleInputChange}
                        error={errors.numMeterBoxes}
                    />
                </Grid>
                <Grid item xs={4}>
                    <Controls.Input
                        name="numEntryPoints"
                        label="Number of Entry Points"
                        value={values.numEntryPoints || ""}
                        isDisabled={formDisabled}
                        onChange={handleInputChange}
                        error={errors.numEntryPoints}
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
            {
                values.photos.length ?
                <div>
                    <Typography
                        variant="h6"
                        color="textSecondary"
                        component="h2"
                        gutterBottom
                        sx={{ pt: 1 }}
                    >
                        Photos
                    </Typography>
                    <Grid container>
                        <ul>
                        {values.photos.map((photoUrl, index) => {
                            return <li><a href={photoUrl}>Photo {index + 1}</a></li>
                        })}
                        </ul>
                    </Grid>
                </div> : <></>
            }
        </Grid>
    );
};
