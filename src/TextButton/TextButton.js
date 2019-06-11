import React from "react";
import * as PropTypes from "prop-types";
import * as styles from "../constants";
import { Loader } from "../Loader";

import TextButtonStyles from "./TextButton.css";

const TextButton = (props) => {
    const {
        loading,
        disabled,
        content,
        callback,
        backgroundColor,
        textColor,
        border,
        width,
        height,
        hoverColor,
        hoverBGColor
    } = props;

    return (
        <>
            <style>
                {TextButtonStyles.toString()}
                {`.text-button{
                        color: ${!disabled ? textColor : styles.IRON};
                        background-color: ${!disabled ? backgroundColor : styles.WHISPER_WHITE};
                        border: ${!disabled ? border : `1px solid ${styles.WHISPER_WHITE}`};
                      }
                      
                      .text-button:hover{
                         color: ${!disabled ? hoverColor : styles.IRON};
                         background-color: ${!disabled ? hoverBGColor : styles.WHISPER_WHITE};
                      }
                    
                `}
            </style>
            <div
                className="text-button"
                style={{
                    height,
                    width,
                }}
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
    backgroundColor: PropTypes.string,
    hoverColor: PropTypes.string,
    hoverBGColor: PropTypes.string,
    textColor: PropTypes.string,
    border: PropTypes.string,
    width: PropTypes.number,
    height: PropTypes.number,
    loading: PropTypes.bool,
    disabled: PropTypes.bool
};

TextButton.defaultProps = {
    content: "Button",
    backgroundColor: styles.MAIN_THEME_COLOR,
    hoverBGColor: styles.MAIN_THEME_COLOR,
    textColor: styles.WHITE,
    hoverColor: styles.WHITE,
    border: `1px solid ${styles.WHITE}`,
    width: styles.BUTTON_WIDTH,
    height: styles.BUTTON_HEIGHT
};

export default TextButton;
