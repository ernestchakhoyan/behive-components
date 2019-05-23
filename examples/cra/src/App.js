import React from "react";

import { Ripple, TextButton, ImageHolder } from "behive-components";

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
                <div classname="image-holder-wrapper">
                    <ImageHolder backgroundImage="https://files1.porsche.com/filestore/image/multimedia/none/ww-rangeshotcountryselector-front/normal/71b9ecff-44da-11e9-80c4-005056bbdc38/porsche-normal.jpg" />
                </div>
            </div>
        );
    }
}

export default App;
