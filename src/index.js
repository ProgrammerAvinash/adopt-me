import React from "react";
import { createRoot } from "react-dom/client";

const App = () => {
  return (
    <div className="App">
      <h1>ADOPT_ME!</h1>
      <p>hello from avinash</p>
    </div>
  );
};

const root = createRoot(document.getElementById("root"));
root.render(<App />);

export default App;
