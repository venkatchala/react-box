import React from "react";


class App2Class extends React.Component {
    constructor(props) {
        super(props)
        this.state = { name: props.user.name, age: props.user.age }
    }
    render() {
        return (
            <div style={{ backgroundColor: "blue", width: "250px", height: "250px", margin: "10px" }}>
                <h1 style={{ color: "white", textAlign: "center" }}>{this.state.name}</h1>
                <h2 style={{ color: "white", textAlign: "center" }}>{this.state.age}</h2>

            </div>
        );
    }

}

export default App2Class;