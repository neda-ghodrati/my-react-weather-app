import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import Weather from "./Weather";

function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="Paris" />

        <footer>
          This Project is created by Neda Ghodrati, and it is{" "}
          <a
            href="https://github.com/neda-ghodrati/my-react-weather-app"
            target="-blank"
          >
            {" "}
            Open-Sourced on GitHub
          </a>
        </footer>
      </div>
    </div>
  );
}

export default App;
