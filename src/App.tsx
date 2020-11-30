import React, { useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Layout } from './components/Layout';
import { Auth } from './pages/Auth';
import { Home } from './pages/Home';
import { unsplash } from './utils/unsplash';
import { toJson } from 'unsplash-js';
import { applyMiddleware, createStore } from 'redux';
import { rootReducer } from './store/reducer';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import { Provider, useDispatch } from 'react-redux';
import { setToken } from './store/actions';
import { loadState, saveState } from './utils/localStorage';
import { Photo } from './pages/Photo';

const persistedState = loadState();

const store = createStore(
  rootReducer,
  persistedState,
  composeWithDevTools(applyMiddleware(thunk)),
);

store.subscribe(() => {
  return saveState({
    token: store.getState().token,
  });
});

function App() {
  return (
    <Router>
      <Provider store={store}>
        <Layout>
          <header>
            <p>Header</p>
          </header>
          <Switch>
            <Route exact path='/'>
              <Auth/>
            </Route>
            <Route path='/auth'>
              <Home/>
            </Route>
            <Route path='/photo/:id'>
              <Photo/>
            </Route>
          </Switch>
        </Layout>
      </Provider>
    </Router>
  );
}

export default App;
