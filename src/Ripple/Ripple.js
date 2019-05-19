import React from "react";
import styles from "./Ripple.css";

const Ripple = props => (
  <>
    <style>{styles.toString()}</style>
    <div className="lds-css ng-scope">
      <div className="lds-ripple">
        <div />
        <div />
      </div>
    </div>
  </>
);

export default Ripple;
