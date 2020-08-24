import React from 'react';
import { Route, Switch } from 'react-router-dom';
import MainPage from './components/MainPage/MainPage';
import Login from './components/Login';
import Mypage from './components/Mypage/Mypage';
import Signup from './components/signup';
import DetailPage from './components/ProductDetailPage/DetailPage';
import Header from './components/Header/Header';
import IdolProductList from './components/IdolProductList/IdolProductList';

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
