import React from 'react';
import IdolProductList from './components/IdolProductList/IdolProductList';
import IdolList from './components/IdolList/IdolList';
import EnterpriseList from './components/IdolList/EnterpriseList';

function App() {
  return (
    <div className="App">
      {/* <IdolProductList /> */}
      <EnterpriseList></EnterpriseList>
    </div>
  );
}

export default App;
