import React, { useState, useCallback } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import LifecycleExample from "./examples/LifecycleExample";
import StateExample from "./examples/StateExample";

import style from "./app.css";

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
