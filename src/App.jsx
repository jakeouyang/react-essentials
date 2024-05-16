import Header from "./components/Header.jsx";
import CoreConcepts from "./components/CoreConcepts.jsx";
import Example from "./components/Example.jsx";

function App() {
  return (
    <>
      <Header></Header>
      <main>
        <CoreConcepts />
        <Example />
        <h2>Time to get started!</h2>
      </main>
    </>
  );
}

export default App;
