import React from 'react';
import { Link, Route, BrowserRouter } from 'react-router-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import Thunk from 'redux-thunk';
// import createSagaMiddleware from 'redux-saga';

// import rootReducer, { rootSaga } from './reduxStore';
import rootReducer from './reduxStore';
import toolkitStore from './toolkitStore';

import Home from './component/Home';

import Counter from './component/without_toolkit/Counter';
import Shop from './component/without_toolkit/Shop';

import CounterWithToolkit from './component/with_toolkit/Counter';

// const sagaMiddleware = createSagaMiddleware();
const reduxStore = createStore(rootReducer, applyMiddleware(Thunk));
// const reduxStore = createStore(rootReducer, applyMiddleware(sagaMiddleware));
// sagaMiddleware.run(rootSaga);

const App: React.FC = () => {
  return (
    <div>
      <BrowserRouter>
        <header>
          <Link to="/">
            <button>home</button>
          </Link>
          &nbsp;&nbsp;|&nbsp;&nbsp;
          {/** without toolkit */}
          <Link to="/counter">
            <button>counter</button>
          </Link>
          <Link to="/shop">
            <button>shop</button>
          </Link>
          &nbsp;&nbsp;|&nbsp;&nbsp;
          {/** with toolkit */}
          <Link to="/toolkit/counter">
            <button>toolkit/counter</button>
          </Link>
        </header>
        <hr />
        <main>
          <Route exact path="/" component={Home} />
          {/** without toolkit */}
          <Provider store={reduxStore}>
            <Route path="/counter" component={Counter} />
            <Route path="/shop" component={Shop} />
          </Provider>
          {/** with toolkit */}
          <Provider store={toolkitStore}>
            <Route path="/toolkit/counter" component={CounterWithToolkit} />
          </Provider>
        </main>
      </BrowserRouter>
    </div>
  );
};

export default App;
