import React from 'react';

type PropsTypeName = {
    name: string
}
const Name = (props: PropsTypeName) => {
    return (
        <div>
            <a href="https://vk.com/artermakov">{props.name}</a>
        </div>
    )
}

export default Name;