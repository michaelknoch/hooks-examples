import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import style from "./app.css";
import LifecycleExample from "./examples/LifecycleExample";
import StateExample from "./examples/StateExample";

function App() {
    return (
        <div className={style.wrapper}>
            <Router>
                <Route path="/lifecycle/" component={LifecycleExample} />
                <Route path="/state/" component={StateExample} />
            </Router>
        </div>
    );
}

export default App;
