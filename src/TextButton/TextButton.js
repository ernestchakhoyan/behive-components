import React from "react";
import * as PropTypes from "prop-types";
import * as styles from "../constants";
import { Loader } from "../Loader";

import TextButtonStyles from "./TextButton.css";

const TextButton = (props) => {
    const { loading, content, callback, backgroundColor, textColor, border, width, height } = props;
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
                {loading ? <Loader color={styles.WHITE} /> : content}
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
    height: PropTypes.number,
    loading: PropTypes.bool
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
