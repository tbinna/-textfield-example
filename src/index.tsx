import * as React from "react";
import {render} from "react-dom";
import Textfield from "@atlaskit/textfield";

const App: React.FunctionComponent = () => {
    return (
        <div>
            <Textfield
                name="name"
                defaultValue=""
                label="Name"
                isRequired={true}
            />
        </div>
    );
};

render(<App/>, document.getElementById("root"));
