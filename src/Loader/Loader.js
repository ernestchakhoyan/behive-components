import React from "react";
import * as PropTypes from "prop-types";
import * as styles from "../constants";

import LoaderStyles from "./Loader.css";

const Loader = (props) => {
    const { size, loaderWidth, color } = props;

    const customStyles = `
        .lds-ring div {
             border-color: ${color} transparent transparent transparent;
             border-width: ${loaderWidth}px;
        }`;

    return (
        <>
            <style>{LoaderStyles.toString() + customStyles}</style>
            <div className="lds-ring" style={{ width: size, height: size }}>
                <div />
                <div />
                <div />
                <div />
            </div>
        </>
    );
};

Loader.propTypes = {
    size: PropTypes.number,
    loaderWidth: PropTypes.number,
    color: PropTypes.string
};

Loader.defaultProps = {
    color: styles.MAIN_THEME_COLOR,
    loaderWidth: styles.LOADER_WIDTH,
    size: styles.LOADER_SIZE
};

export default Loader;
