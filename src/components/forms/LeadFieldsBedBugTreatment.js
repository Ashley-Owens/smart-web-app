import { Grid } from '@material-ui/core';
import Controls from "../controls/Controls";
import { Typography } from '@mui/material';


export default function LeadFieldsBedBugTreatment(props) {

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
                        name="unitNums"
                        label="Unit Numbers"
                        value={values.unitNums || ""}
                        isDisabled={formDisabled}
                        onChange={handleInputChange}
                        error={errors.unitNums}
                    />
                </Grid>
            </Grid>
            <Grid container>
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
