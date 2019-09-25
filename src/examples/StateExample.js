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
            <div>
                <h2>State example:</h2>
                <h3>{`I'm a counter: ${this.state.counter}`}</h3>
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
        );
    }
}

export default StateExample;
