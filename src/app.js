import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import style from "./app.css";
import LifecycleExample from "./examples/LifecycleExample";
import StateExample from "./examples/StateExample";
import ListenerExample from "./examples/ListenerExample";

function App() {
    return (
        <div className={style.wrapper}>
            <Router>
                <Route path="/lifecycle/" component={LifecycleExample} />
                <Route path="/state/" component={StateExample} />
                <Route path="/listener/" component={ListenerExample} />
            </Router>
        </div>
    );
}

export default App;
