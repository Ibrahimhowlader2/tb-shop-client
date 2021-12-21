import React from 'react';
import loading_gif from '../images/loading.gif';;

const Loading = () => {

    const textStyle = {
        width: "85vw",
        textTransform: "capitalize",
        textAlign: "center",
        margin: "0 auto",
        marginTop: "10rem"
    }
    const imgStyle = {
        width: "10rem",
        margin: "0 auto"
    }


    return (
        <div style={textStyle}>
            <h2>Loading...</h2>
            <img style={imgStyle} src={loading_gif} alt="" />
        </div>
    );
};

export default Loading;