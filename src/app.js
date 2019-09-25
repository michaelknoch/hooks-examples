import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "@apollo/react-hooks";

import style from "./app.css";
import LifecycleExample from "./examples/LifecycleExample";
import StateExample from "./examples/StateExample";
import ListenerExample from "./examples/ListenerExample";
import ApolloExample from "./examples/ApolloExample";

const client = new ApolloClient({
    uri: "https://graphql-pokemon.now.sh",
});

function App() {
    return (
        <ApolloProvider client={client}>
            <div className={style.wrapper}>
                <Router>
                    <Route path="/lifecycle/" component={LifecycleExample} />
                    <Route path="/state/" component={StateExample} />
                    <Route path="/listener/" component={ListenerExample} />
                    <Route path="/apollo/" component={ApolloExample} />
                </Router>
            </div>
        </ApolloProvider>
    );
}

export default App;
