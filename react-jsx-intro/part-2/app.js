function App() {
    return (
        <div>
            <Tweet
            name="Jerry Scienfield"
            username="@jerrysi"
            date={new Date().toDateString()}
            message="What's the deal with the new React Hooks?"
            />
            <Tweet
            name="KRAMER"
            username="@kramer"
            date={new Date().toDateString()}
            message="Giddy up"
            />
            <Tweet
            name="George Kantaza"
            username="@gkantaza"
            date={new Date().toDateString()}
            message="I WAS IN THE POOL"
            />
            <Tweet
            name="Elane Bennis"
            username="@elane"
            date={new Date().toDateString()}
            message="GET OUT OF HERE"
            />
        </div>
        );
    }
    