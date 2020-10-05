import React, {useState} from "react";
import style from "./Range.module.css"

type PropsType = {
    minValue: number
    maxValue: number
    step: number
    value: number
}

const Range = React.memo((props: PropsType) => {

    const [changeRange, setChangeRange] = useState<number>(props.value)

    return (
        <div className={style.slider}>
            <input className={style.fader} type="range" min={props.minValue} max={props.maxValue} value={changeRange}
                   step={props.step} onChange={(e: any) => setChangeRange(e.currentTarget.value)}/>
            <div className={style.output}>Value: {changeRange}</div>
        </div>
    )
})

export default Range;