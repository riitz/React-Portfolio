import React from 'react'
import About from './component/about/About';
import Intro from './component/intro/intro';
import ProductList from './component/productList/ProductList';

const App = () => {
  return (
    <div>
      <Intro />
      <About />
      <ProductList />
    </div>
  )
}

export default App;