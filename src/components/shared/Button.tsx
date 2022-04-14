import React from "react";

interface RegisterProps {
    type?: string,
    onClick?: (e: any) => void,
}

const Button = (props: RegisterProps) => {
    return (
        <button
            onClick={props.onClick}
        >{props.type}</button>
    )
}

export default Button