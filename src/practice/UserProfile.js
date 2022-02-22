import App2 from "./App2"

function UserProfile() {
  const user1 = { name: "Eniyan", age: 3 }
  const user2 = { name: "Aaradhana", age: 2 }
  const user3 = { name: "Athithan", age: 1 }
  return (
    <div style={{ display: "flex" }}>
      <App2 user={user1}></App2>
      <App2 user={user2}></App2>
      <App2 user={user3}></App2>


    </div>
  )
}
export default UserProfile;