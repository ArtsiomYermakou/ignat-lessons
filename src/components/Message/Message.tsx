import React from "react";
type PropsTypeMessage = {
    sms: string | number
}
const Message = (props:PropsTypeMessage) => {
    return (
        <div>
            {props.sms}
        </div>
    )
}

export default Message;