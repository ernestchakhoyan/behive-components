import React from "react";
import PropTypes from "prop-types";
import styles from "./TextButton.css";

const TextButton = (props) => {
    const { content, backgroundColor, textColor, border, width, height } = props;
    return (
        <>
            <style>{styles.toString()}</style>
            <div
                className="text-button"
                style={{
                    height,
                    width,
                    backgroundColor,
                    color: textColor,
                    border
                }}
            >
                {content}
            </div>
        </>
    );
};

TextButton.propTypes = {
    content: PropTypes.string,
    backgroundColor: PropTypes.string,
    textColor: PropTypes.string,
    border: PropTypes.string,
    width: PropTypes.number,
    height: PropTypes.number
};

TextButton.defaultProps = {
    content: "Button",
    backgroundColor: "#80A1FD",
    textColor: "#ffffff",
    border: "1px solid #ffffff",
    width: 250,
    height: 45
};

export default TextButton;
