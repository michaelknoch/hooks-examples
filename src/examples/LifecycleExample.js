import React, { useState, useEffect } from "react";

const WrapperComponent = ({ children }) => {
    const [isMounted, setIsMounted] = useState(false);
    const [counter, setCounter] = useState(0);

    return (
        <div>
            <button
                onClick={() => {
                    setIsMounted(true);
                }}
            >
                Mount
            </button>
            <button
                onClick={() => {
                    setIsMounted(false);
                }}
            >
                Unmount
            </button>
            <button
                onClick={() => {
                    setCounter(prevCounterValue => prevCounterValue + 1);
                }}
            >
                Update
            </button>
            {isMounted ? (
                <FunctionalLifecycleExample counter={counter} />
            ) : null}
        </div>
    );
};

class LifecycleExample extends React.Component {
    componentDidMount() {
        console.log("mount");
    }

    componentDidUpdate() {
        console.log("update", this.props);
    }

    componentWillUnmount() {
        console.log("unmount");
    }

    render() {
        return (
            <div style={{ backgroundColor: "orange", padding: 50 }}>
                <h2>LifecycleExample</h2>
                <p>{`props: { counter: ${this.props.counter} }`}</p>
            </div>
        );
    }
}

const FunctionalLifecycleExample = ({ counter }) => {
    useEffect(() => {
        console.log("update", { counter });
    });

    useEffect(() => {
        return () => console.log("unmount");
    }, []);

    return (
        <div style={{ backgroundColor: "orange", padding: 50 }}>
            <h2>LifecycleExample</h2>
            <p>{`props: { counter: ${counter} }`}</p>
        </div>
    );
};

export default WrapperComponent;
