import React from 'react';
import { FormControl, InputLabel, Select as MuiSelect, MenuItem, FormHelperText } from '@material-ui/core';

export default function Select(props) {

    const { name, label, value,error=null, onChange, options, isDisabled=false } = props;

    return (
        <FormControl 
            variant="outlined"
            {...(error && {error:true})}
        >
            <InputLabel>{label}</InputLabel>
            <MuiSelect
                label={label}
                name={name}
                value={value}
                disabled={isDisabled}
                onChange={onChange}>
                <MenuItem value=""></MenuItem>
                {
                    options.map(
                        item => (<MenuItem key={item.id} value={item.title}>{item.title}</MenuItem>)
                    )
                }
            </MuiSelect>
            {error && <FormHelperText>{error}</FormHelperText>}
        </FormControl>
    );
};
