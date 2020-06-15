import React from "react";
type PropsTypeTime = {
    time:string | number
}
const Time = (props:PropsTypeTime) => {
    return (
        <div>
            {props.time}
        </div>
    )
}

export default Time;