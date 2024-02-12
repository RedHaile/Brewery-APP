import React from 'react';
import logo from './logo.svg';

import Search from './components/search/Search';
import BreweryList from './components/products/BreweryList';

function App() {
  return (
  
<div className='App'>
<BreweryList />
<BreweryList></BreweryList>
<Search></Search>
</div>
  );
}
/* const App = () => {
  return (
    <div>App</div>
  )
} */

export default App