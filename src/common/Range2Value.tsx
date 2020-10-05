import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Slider from '@material-ui/core/Slider';

type PropsType = {
    value: Array<number>
}

const useStyles = makeStyles({
    root: {
        width: 300,
        textAlign: "center",
        paddingLeft: "40%"
    },
});

export const RangeSlider = (props: PropsType) => {
    const classes = useStyles();
    const [value, setValue] = React.useState<number[]>(props.value);

    const handleChange = (event: any, newValue: number | number[]) => {
        setValue(newValue as number[]);
    };

    return (
        <div className={classes.root}>
            <Slider
                value={value}
                onChange={handleChange}
                valueLabelDisplay="auto"
            />
        </div>
    );
}