import React from "react";
import * as PropTypes from "prop-types";
import * as styles from "../constants";
import { Loader } from "../Loader";

import TextButtonStyles from "./TextButton.css";

const TextButton = (props) => {
    const { loading, disabled, content, callback, customClassName } = props;

    const disabledClassName = disabled ? "disabled" : "";

    return (
        <>
            <style>{TextButtonStyles.toString()}</style>
            <div
                className={`text-button ${customClassName} ${disabledClassName}`}
                onClick={!disabled ? callback : null}
            >
                {loading ? <Loader color={!disabled ? styles.WHITE : styles.IRON} /> : content}
            </div>
        </>
    );
};

TextButton.propTypes = {
    callback: PropTypes.func,
    content: PropTypes.string,
    customClassName: PropTypes.string,
    loading: PropTypes.bool,
    disabled: PropTypes.bool
};

TextButton.defaultProps = {
    content: "Button",
    customClassName: "main-text-button"
};

export default TextButton;
