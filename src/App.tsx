import React from 'react';
import { Link, Route, BrowserRouter } from 'react-router-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import rootReducer from './reduxStore';

import Counter from './component/Counter';
import Home from './component/Home';

// const devTools = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();

const reduxStore = createStore(rootReducer);

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
          <Provider store={reduxStore}>
            <Route path="/counter" component={Counter} />
          </Provider>
        </main>
      </BrowserRouter>
    </div>
  );
};

export default App;
