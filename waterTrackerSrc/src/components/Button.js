import React from "react";

function Button(props) {
    const style = {
        outline: 'none'
    }
    return (
        <button className={props.className} onClick={props.click}>
            {props.children}
        </button>
    )
}