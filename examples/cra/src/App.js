import React from "react";

import { Ripple, TextButton } from "behive-components";

class App extends React.Component {
    constructor() {
        super();
    }

    ok = () => {
        console.log("123");
    };

    render() {
        return (
            <div>
                <Ripple />
                <TextButton callback={this.ok} />
            </div>
        );
    }
}

export default App;
