function App() {
    return (
      <div>
        <Person
          name="Peter"
          age={45}
          hobbies={["Sports", "watching tv", "drinking beer"]}
        />
        <Person name="Brain"
         age={8} 
         hobbies={["Dog things", "fetch","writting"]} 
         />
        <Person
          name="Joe"
          age={46}
          hobbies={["Bird-Watching", "Singing","Weight-lifting"]}
        />
        <Person
          name="Quagmire"
          age={60}
          hobbies={["Avation", "Gymnastic", "Self Help"]}
        />
      </div>
    );
  }