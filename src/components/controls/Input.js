import React from 'react';
import { TextField } from '@material-ui/core';

export default function Input(props) {

    const { name, label, value,error=null, onChange, isMultiline=false, isDisabled=false } = props;
    return (
        <TextField
            variant="outlined"
            label={label}
            name={name}
            multiline={isMultiline}
            value={value}
            disabled={isDisabled}
            onChange={onChange}
            {...(error && {error:true,helperText:error})}
        />
    );
};