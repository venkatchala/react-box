import React from "react";
import AddUserList from "./AddUserList";

class AddUser extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            userdetail: null
        }

    }
    onChangeHandler = (e) => {
        let name = e.target.name;
        let val = e.target.value;
        this.setState({ ...this.state })
        if (name === "age") {
            if (val != "" && !Number(val)) {
                alert("Invalid input , Your age must be a Number");
            }
        }
        if (name === "gender") {
            if (val == "") {
                alert("Please select your Gender")
            }
        }
        this.setState({ userdetail: { ...this.state.userdetail, [name]: val } })

    }
    //  users = {};
    clickEventHandler = (e) => {
        e.preventDefault();
        // let user = { [e.target]: val }
        this.setState({ ...this.state, updatedDetails: this.state.userdetail })
        this.setState({ ...this.state, userdetail: null })
    }
    render() {
        return (

            <div>
                <div style={{ display: "flex" }}>
                    {this.state.updatedDetails && <AddUserList userdetail={this.state.updatedDetails}></AddUserList>}
                </div>


                <form onSubmit={this.clickEventHandler}>
                    <label>
                        Enter your Name:
                        <input type="text" name="userName" onChange={this.onChangeHandler} />
                    </label><br />
                    <label>
                        Enter your age:
                        <input type="text" name="age" onChange={this.onChangeHandler} />
                    </label><br />
                    <label>
                        Select your gender:
                        <select name="gender" onChange={this.onChangeHandler}>

                            <option></option>
                            <option>Male</option>
                            <option>Female</option>
                            <option>Transgender</option>
                        </select>
                    </label>
                    <label>
                        <input type="submit"></input>
                    </label>
                </form>
            </div>

        );
    }
}

export default AddUser;