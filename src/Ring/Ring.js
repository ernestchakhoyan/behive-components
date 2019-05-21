import React from "react";
import styles from "./Ring.css";

const Ring = props => (
    <>
        <style>{styles.toString()}</style>
        <div className="lds-css ng-scope">
            <div className="lds-spinner">
                <div />
                <div />
                <div />
                <div />
                <div />
                <div />
                <div />
                <div />
                <div />
                <div />
                <div />
                <div />
            </div>
        </div>
    </>
);

export default Ring;
