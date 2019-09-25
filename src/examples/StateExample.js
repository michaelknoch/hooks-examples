import React, { useState } from "react";

class StateExample extends React.Component {
    state = { renderMore: false };

    render() {
        return (
            <div style={{ display: "flex", flexDirection: "column" }}>
                <div
                    style={{
                        width: "400px",
                        backgroundColor: "orange",
                        textAlign: "left",
                        padding: 10,
                    }}
                >
                    <h2>State example:</h2>
                    {this.state.renderMore && (
                        <div>
                            <p>
                                Bla bla bla bla bla bla bla bla bla bla bla bla
                                bla bla bla bla bla bla bla bla bla bla bla bla
                                bla bla{" "}
                            </p>
                            <p>
                                Even more bla bla bla bla bla bla bla bla bla
                                bla bla bla bla bla bla bla bla bla bla bla bla
                                bla bla bla bla bla{" "}
                            </p>
                        </div>
                    )}
                </div>

                <div>
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
            </div>
        );
    }
}

// functional approach

const FunctionalStateExample = () => {
    const [renderMore, setRenderMore] = useState(false);

    return (
        <div style={{ display: "flex", flexDirection: "column" }}>
            <div
                style={{
                    width: "400px",
                    backgroundColor: "orange",
                    textAlign: "left",
                    padding: 10,
                }}
            >
                <h2>State example:</h2>
                {renderMore && (
                    <div>
                        <p>
                            Bla bla bla bla bla bla bla bla bla bla bla bla bla
                            bla bla bla bla bla bla bla bla bla bla bla bla bla{" "}
                        </p>
                        <p>
                            Even more bla bla bla bla bla bla bla bla bla bla
                            bla bla bla bla bla bla bla bla bla bla bla bla bla
                            bla bla bla{" "}
                        </p>
                    </div>
                )}
            </div>

            <div>
                <button
                    onClick={() => {
                        setRenderMore(prevRenderMore => !prevRenderMore);
                    }}
                >
                    {renderMore ? "Less" : "More"}
                </button>
            </div>
        </div>
    );
};

export default FunctionalStateExample;
