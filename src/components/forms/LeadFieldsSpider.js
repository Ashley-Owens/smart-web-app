import { Grid } from '@material-ui/core';
import Controls from "../controls/Controls";
import { Typography } from '@mui/material';


export default function LeadFieldsSpider(props) {

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
                        name="sprayHours"
                        label="Spray Hours"
                        value={values.sprayHours || ""}
                        isDisabled={formDisabled}
                        onChange={handleInputChange}
                        error={errors.sprayHours}
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
