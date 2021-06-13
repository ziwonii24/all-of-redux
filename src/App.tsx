import React from 'react';
import { Link, Route, BrowserRouter } from 'react-router-dom';
import Counter from './component/Counter';
import Home from './component/Home';

const App: React.FC = () => {
  return (
    <div>
      <BrowserRouter>
        <header>
          <Link to="/">
            <button>home</button>
          </Link>
          <Link to="/counter">
            <button>counter</button>
          </Link>
        </header>
        <hr />
        <main>
          <Route exact path="/" component={Home} />
          <Route path="/counter" component={Counter} />
        </main>
      </BrowserRouter>
    </div>
  );
};

export default App;
