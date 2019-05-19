import React from "react";
import styles from "./Ring.css";

const Ring = props => (
  <>
    <style>{styles.toString()}</style>
    <div className="lds-css ng-scope">
      <div className="lds-spinner" style="width:100%;height:100%">
        <div/>
        <div/>
        <div/>
        <div/>
        <div/>
        <div/>
        <div/>
        <div/>
        <div/>
        <div/>
        <div/>
        <div/>
      </div>
    </div>
  </>
);

export default Ring;
