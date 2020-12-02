import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Layout } from './components/Layout';
import { Auth } from './pages/Auth';
import { Home } from './pages/Home';
import { applyMiddleware, createStore } from 'redux';
import { rootReducer } from './store/reducer';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import { Photo } from './pages/Photo';

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk)),
);

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
