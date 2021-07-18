import React from "react";

import Counter from "./components/Counter";

import "./styles/App.scss";

const App: React.FC = () => {
  return (
    <div className="app">
      <Counter />
    </div>
  );
};

export default App;
