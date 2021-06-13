import React from 'react';
import { Link, Route, BrowserRouter } from 'react-router-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import rootReducer from './reduxStore';

import toolkitStore from './toolkitStore';

import Counter from './component/Counter';
import Home from './component/Home';
import CounterWithToolkit from './component/CounterWithToolkit';

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
          <Link to="/counter-with-toolkit">
            <button>counter-with-toolkit</button>
          </Link>
        </header>
        <hr />
        <main>
          <Route exact path="/" component={Home} />
          {/** witout toolkit */}
          <Provider store={reduxStore}>
            <Route path="/counter" component={Counter} />
          </Provider>
          {/** with toolkit */}
          <Provider store={toolkitStore}>
            <Route path="/counter-with-toolkit" component={CounterWithToolkit} />
          </Provider>
        </main>
      </BrowserRouter>
    </div>
  );
};

export default App;
