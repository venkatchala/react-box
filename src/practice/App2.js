

function App2(props) {
    return (
        <div style={{ backgroundColor: "blue", width: "250px", height: "250px", margin: "10px" }}>
            <h1 style={{ color: "white", textAlign: "center" }}>{props.user.name}</h1>
            <h2 style={{ color: "white", textAlign: "center" }}>{props.user.age}</h2>

        </div>
    );
}

export default App2;