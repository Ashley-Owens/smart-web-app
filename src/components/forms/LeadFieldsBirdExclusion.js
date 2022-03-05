import { Grid } from '@material-ui/core';
import Controls from "../controls/Controls";
import { Typography } from '@mui/material';


export default function LeadFieldsBirdExclusion(props) {

    const {
        values,
        formDisabled,
        handleInputChange,
        errors,
    } = props;

    const getEquipment = ()=>([
        { id: '1', title: 'ladder' },
        { id: '2', title: 'boomlift' },
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
                    <Controls.Select
                        name="equipment"
                        label="Equipment"
                        value={values.equipment || ""}
                        isDisabled={formDisabled}
                        onChange={handleInputChange}
                        options={getEquipment()}
                        error={errors.equipment}
                    />
                </Grid>
            </Grid>
            <Grid container>
                <Grid item xs={4}>
                    <Controls.Input
                        name="spikeLength"
                        label="Length of Spike (inches)"
                        value={values.spikeLength || ""}
                        isDisabled={formDisabled}
                        onChange={handleInputChange}
                        error={errors.spikeLength}
                    />
                </Grid>
                <Grid item xs={4}>
                    <Controls.Input
                        name="nettingLength"
                        label="Length of Netting (inches)"
                        value={values.nettingLength || ""}
                        isDisabled={formDisabled}
                        onChange={handleInputChange}
                        error={errors.nettingLength}
                    />
                </Grid>
                <Grid item xs={4}>
                    <Controls.Input
                        name="nettingWidth"
                        label="Width of Netting (inches)"
                        value={values.nettingWidth || ""}
                        isDisabled={formDisabled}
                        onChange={handleInputChange}
                        error={errors.nettingWidth}
                    />
                </Grid>
            </Grid>
            <Grid container>
                <Grid item xs={4}>
                    <Controls.Input
                        name="tensionLineLength"
                        label="Length of Tension Lines (inches)"
                        value={values.tensionLineLength || ""}
                        isDisabled={formDisabled}
                        onChange={handleInputChange}
                        error={errors.tensionLineLength}
                    />
                </Grid>
                <Grid item xs={4}>
                    <Controls.Input
                        name="screenLength"
                        label="Length of Screen (inches)"
                        value={values.screenLength || ""}
                        isDisabled={formDisabled}
                        onChange={handleInputChange}
                        error={errors.screenLength}
                    />
                </Grid>
                <Grid item xs={4}>
                    <Controls.Input
                        name="screenWidth"
                        label="Width of Screen (inches)"
                        value={values.screenWidth || ""}
                        isDisabled={formDisabled}
                        onChange={handleInputChange}
                        error={errors.screenWidth}
                    />
                </Grid>
            </Grid>
            <Grid container>
                <Grid item xs={4}>
                    <Controls.Input
                        name="boomLiftHeight"
                        label="Height of Boomlift (inches)"
                        value={values.boomLiftHeight || ""}
                        isDisabled={formDisabled}
                        onChange={handleInputChange}
                        error={errors.boomLiftHeight}
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
