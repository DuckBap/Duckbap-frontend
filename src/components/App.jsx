import React from 'react';
import { Route, Switch } from 'react-router-dom';
import MainPage from './Main';
import Login from './Login';
import Mypage from './Mypage';
import Signup from './Signup';
import DetailPage from './ProductDetail';
import Header from './Header';
import IdolProductList from './IdolProductList';

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
        <Route path="/fundings/:id" component={IdolProductList} />
      </Switch>
    </div>
  );
}

export default App;
