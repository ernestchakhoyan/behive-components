import React from "react";
import styles from "./Ripple.css";

const Ripple = props => (
  <>
    <style>{styles.toString()}</style>
    <div className="lds-css ng-scope" style="width: 200px; height: 200px;">
      <div style="width:100%;height:100%" className="lds-ripple">
        <div />
        <div />
      </div>
    </div>
  </>
);

export default Ripple;
