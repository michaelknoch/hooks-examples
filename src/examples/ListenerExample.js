import React, { useEffect } from "react";

class ListenerExample extends React.Component {
    componentDidMount() {
        document.addEventListener("keydown", this.onKeyDown);
    }

    componentWillUnmount() {
        document.addEventListener("keydown", this.onKeyDown);
    }

    onKeyDown(event) {
        console.log("keydown", event.key);
    }

    render() {
        return <h2>ListenerExample (open dev tools and press some keys)</h2>;
    }
}

// functional approach

function onKeyDown(event) {
    console.log("functional keydown", event.key);
}

const FunctionalListenerExample = () => {
    useEffect(() => {
        document.addEventListener("keydown", onKeyDown);
        return () => document.addEventListener("keydown", onKeyDown);
    }, []);

    return <h2>ListenerExample (open dev tools and press some keys)</h2>;
};

export default FunctionalListenerExample;
