import React from "react";
import {createStyles, FormControl, makeStyles, Theme, NativeSelect} from "@material-ui/core";

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        button: {
            display: 'block',
            marginTop: theme.spacing(2),
        },
        formControl: {
            margin: theme.spacing(1),
            minWidth: 120,
        },
    }),
);

export default function ControlledOpenSelect({value, optionElement, handleChange, ...props}: any) {
    const classes = useStyles();

    return (
        <div>
            <FormControl className={classes.formControl}>
                <NativeSelect
                    value={value}
                    onChange={handleChange}
                >
                    {optionElement}
                </NativeSelect>
            </FormControl>
        </div>
    );
}