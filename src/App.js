
function Food({fav}) {
  return <h1>I like {fav}</h1>;
}

function App() {
  return (
    <div className="App">Hello!
      <Food fav="chicken" />
      <Food fav="dessert" />
      <Food fav="cookie" />
    </div>
  );
}

export default App;
