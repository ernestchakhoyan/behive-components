import React from "react";
import PropTypes from "prop-types";
import * as styles from "../constants";

import TextButtonStyles from "./TextButton.css";

const TextButton = (props) => {
    const { content, callback, backgroundColor, textColor, border, width, height } = props;
    return (
        <>
            <style>{TextButtonStyles.toString()}</style>
            <div
                className="text-button"
                style={{
                    height,
                    width,
                    backgroundColor,
                    color: textColor,
                    border
                }}
                onClick={callback}
            >
                {content}
            </div>
        </>
    );
};

TextButton.propTypes = {
    callback: PropTypes.func,
    content: PropTypes.string,
    backgroundColor: PropTypes.string,
    textColor: PropTypes.string,
    border: PropTypes.string,
    width: PropTypes.number,
    height: PropTypes.number
};

TextButton.defaultProps = {
    content: "Button",
    backgroundColor: styles.MAIN_THEME_COLOR,
    textColor: styles.WHITE,
    border: `1px solid ${styles.WHITE}`,
    width: 250,
    height: 45
};

export default TextButton;
