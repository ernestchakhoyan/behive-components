import React from "react";
import PropTypes from "prop-types";

import imageHolderStyles from "./ImageHolder.css";

const ImageHolder = (props) => {
    const { backgroundImage } = props;
    return (
        <>
            <style>{imageHolderStyles.toString()}</style>
            <div
                className="image-holder"
                style={{
                    backgroundImage: `url(${backgroundImage})`
                }}
            />
        </>
    );
};

ImageHolder.propTypes = {
    backgroundImage: PropTypes.string
};

ImageHolder.defaultProps = {
    backgroundImage: ""
};

export default ImageHolder;
