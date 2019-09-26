import React, { useEffect } from "react";

class ListenerExample extends React.Component {
    componentDidMount() {
        document.addEventListener("keydown", this.onKeyDown);
    }

    componentWillUnmount() {
        document.removeEventListener("keydown", this.onKeyDown);
    }

    onKeyDown = event => {
        console.log("keydown", event.key);
    };

    render() {
        return <h2>ListenerExample (open dev tools and press some keys)</h2>;
    }
}

const onKeyDown = event => {
    console.log("keydown", event.key);
};

const FunctionalListenerExample = () => {
    useEffect(() => {
        document.addEventListener("keydown", onKeyDown);
        return () => document.removeEventListener("keydown", onKeyDown);
    }, []);
    return <h2>ListenerExample (open dev tools and press some keys)</h2>;
};

export default FunctionalListenerExample;
