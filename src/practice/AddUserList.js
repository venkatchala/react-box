import React from "react";

class AddUserList extends React.Component {
    constructor(props) {
        super(props);
        this.state = props.userdetail;
    }
    componentDidMount(props) {
        document.title = `$(props.userdetail)`;
    }
    componentDidUpdate(props) {
        this.setState(props.userdetail);
    }
    //
    render() {
        return (
            <div style={{ width: "400px", minHeight: "250px", backgroundColor: "blue", color: "white", textAlign: "center" }}>
                <h1>{this.state.userName}</h1>
                <h1>{this.state.age} </h1>
                <h1>{this.state.gender}</h1>
            </div>
        );
    }
}

export default AddUserList;