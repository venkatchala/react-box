import React from "react"
import App2Class from "./App2Class"

class UserProfileClass extends React.Component {


    render() {
        const user1 = { name: "Eniyan", age: 3 }
        const user2 = { name: "Aaradhana", age: 2 }
        const user3 = { name: "Athithan", age: 1 }
        return (
            <div style={{ display: "flex" }}>
                <App2Class user={user1}></App2Class>
                <App2Class user={user2} />
                <App2Class user={user3} />


            </div>
        )
    }

}
export default UserProfileClass;