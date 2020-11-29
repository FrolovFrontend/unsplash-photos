import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import { Layout } from './components/Layout';
import { Auth } from './pages/Auth';
import { Home } from './pages/Home';
import { unsplash } from './utils/unsplash';
import { toJson } from 'unsplash-js';
import { tokenContext } from './context/tokenContext';

function App() {
  const [token, setToken] = useState('');

  useEffect(() => {
    const code = window.location.search.split('code=')[1];

    if (code) {
      unsplash.auth
        .userAuthentication(code)
        .then(toJson)
        .then((json: any) => {
          unsplash.auth.setBearerToken(json.access_token);
          setToken(json.access_token);
        })
        .catch((error: Error) => {
          console.log(error);
        });
    }
  }, [token]);

  return (
    <div className="App">
      <tokenContext.Provider value={token}>
        <Router>
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
            </Switch>
            content
          </Layout>
        </Router>
      </tokenContext.Provider>
    </div>
  );
}

export default App;
