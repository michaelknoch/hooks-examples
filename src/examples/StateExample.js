import React from "react";

class StateExample extends React.Component {
    state = { renderMore: false };

    render() {
        return (
            <div style={style.wrapperWrapper}>
                <div style={style.wrapper}>
                    <h2>State example</h2>
                    {this.state.renderMore && <Blah />}
                </div>

                <button
                    onClick={() => {
                        this.setState(prevState => ({
                            renderMore: !prevState.renderMore,
                        }));
                    }}
                >
                    {this.state.renderMore ? "Less" : "More"}
                </button>
            </div>
        );
    }
}

const Blah = () => <p>Bla bla bla bla bla bla bla bla bla bla bla</p>;

const style = {
    wrapperWrapper: {
        display: "flex",
        flexDirection: "column",
    },
    wrapper: {
        width: "400px",
        backgroundColor: "orange",
        textAlign: "left",
        padding: 10,
    },
};

export default StateExample;
