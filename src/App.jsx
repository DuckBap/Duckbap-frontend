import React from 'react';
import { Route, Switch } from 'react-router-dom';
import MainPage from './components/MainPage/MainPage';
import Login from './components/Login';
import Mypage from './components/Mypage/Mypage';
import Signup from './components/signup';
import DetailPage from './components/ProductDetailPage/DetailPage';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/" component={MainPage} exact />
        <Route path="/login" component={Login} />
        <Route path={["/mypage","/mypage/:username"]} component={Mypage} />
        <Route path="/signup" component={Signup} />
        <Route path="/product/:productNo" component={DetailPage} />
      </Switch>
    </div>
  );
}

export default App;
