import React from "react";

class StateExample extends React.Component {
    state = { counter: 0 };

    updateCounter(value) {
        this.setState(oldState => ({
            counter: oldState.counter + value,
        }));
    }

    render() {
        return (
            <div style={{ display: "flex", flexDirection: "column" }}>
                <div
                    style={{
                        minWidth: "400px",
                        backgroundColor: "orange",
                        textAlign: "center",
                    }}
                >
                    <h2>State example:</h2>
                    <h3>{`I'm a counter: ${this.state.counter}`}</h3>
                </div>

                <div>
                    <button
                        onClick={() => {
                            this.updateCounter(1);
                        }}
                    >
                        Increment
                    </button>

                    <button
                        onClick={() => {
                            this.updateCounter(-1);
                        }}
                    >
                        Decrement
                    </button>
                </div>
            </div>
        );
    }
}

export default StateExample;
