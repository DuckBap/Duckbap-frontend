import React from 'react';
import { Route, Switch } from 'react-router-dom';
import MainPage from './components/Main';
import Login from './components/Login';
import Mypage from './components/Mypage';
import Signup from './components/Signup';
import DetailPage from './components/ProductDetail';
import Header from './components/Header';
import IdolProductList from './components/IdolProductList';

function App() {
  return (
    <div className="App">
      <Header />
      <div style={{ height: '80px' }} />
      <Switch>
        <Route path="/" component={MainPage} exact />
        <Route path="/login" component={Login} />
        <Route path={['/mypage/:username?']} component={Mypage} />
        <Route path="/signup" component={Signup} />
        <Route path="/product/:productNo?" component={DetailPage} />
        <Route paht="/productList/:idol-name?" component={IdolProductList} />
      </Switch>
    </div>
  );
}

export default App;
