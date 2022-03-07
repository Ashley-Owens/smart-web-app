import { Grid } from '@material-ui/core';
import Controls from "../controls/Controls";
import { Typography } from '@mui/material';


export default function LeadFieldsBedBugInspection(props) {

    const {
        values,
        formDisabled,
        handleInputChange,
        errors,
    } = props;

    const getInspectionTypes = ()=>([
        { id: '1', title: 'visual inspection' },
        { id: '2', title: 'full inspection' },
        { id: '3', title: 'k9 inspection' },
    ]);

    const getReasons = ()=>([
        { id: '1', title: 'cluttered' },
        { id: '2', title: 'moveout' },
        { id: '3', title: 'health & safety' },
        { id: '4', title: 'other' },
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
                        name="inspectionType"
                        label="Inspection Type"
                        value={values.inspectionType || ""}
                        isDisabled={formDisabled}
                        onChange={handleInputChange}
                        options={getInspectionTypes()}
                        error={errors.inspectionType}
                    />
                </Grid>
            </Grid>
            <Grid container>
                <Grid item xs={4}>
                    <Controls.Select
                        name="reason"
                        label="Reason"
                        value={values.reason || ""}
                        isDisabled={formDisabled}
                        onChange={handleInputChange}
                        options={getReasons()}
                        error={errors.reason}
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
