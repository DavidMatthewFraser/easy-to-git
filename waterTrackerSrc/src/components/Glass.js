import React from "react";

function Glass(props) {
    const sizeRatio = 0.5;
    const innerWidth = 0.5 * props.size;
    const containerStyle = {
        width: props.size,
        height: props.size,
        display: 'flex'
    }
    const glassStyle = {
        perspective: 100,
        width: props.size*sizeRatio,
        height: 1.5 * innerWidth,
        margin: 'auto'
    }
    const waterStyle = {
        width: props.width,
        height: 1.5 * innerWidth,
        transform: "rotateX(-10deg)",
        background: "#ddd",
        boxShadow: `inset 0 -${props.percent * 0.01 * innerWidth*1.5}px 0 ${props.fill}`,
        transition: 'all 200ms ease-in-out',
        margin: 'auto'
    }
    return(
        <div style={containerStyle}>
            <div className="glass" style={glassStyle}>
                <div className="water" style={waterStyle}></div>
            </div>
        </div>
    );
}

// Default props of Glass component
Glass.defaultProps = {
    percent: 0,
    fill: 'skyblue',
    size: 150
}


export default Glass;