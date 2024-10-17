import React from 'react';
import './App.css';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Toaster } from 'sonner';

import Header from '@layout/Header/Header';
import Home from '@pages/Home/Home';
import ProductDetail from '@pages/ProductDetail/ProductDetail';
import WishlistProducts from '@pages/WishlistProducts/WishlistProducts';
import NotFound from '@pages/NotFound/NotFound';
import Cart from '@pages/Cart/Cart';
// import Header from './components/Header/Header';


import ScrollToTop from '@utils/useScrollToTop';


//Context Providers
import { WishlistProvider } from '@context/WishlistContext';
import { CartProvider } from '@context/CartContext';


function App() {
  return (
    <div>
      <Toaster position="bottom-center" richColors />
      <BrowserRouter>
        <ScrollToTop />
        <WishlistProvider>
        <CartProvider>
          <Header />
          <Routes>
            <Route path='/' element={<Home />} />
            {/* <Route path='/product-details/:productId' element={<ProductDetail />} /> */}
            {/* <Route path='/product-filter' element={<ProductFilter />} /> */}
            {/* <Route path='/favorite-products' element={<FavoriteProducts />} /> */}

            <Route path='/products/:productId' element={<ProductDetail />} />
            {/* <Route path='/products/filter' element={<ProductFilter />} /> */}
            <Route path='/wishlist' element={<WishlistProducts />} />
            <Route path='/checkout' element={<Cart />} />

            <Route path='/*' element={<NotFound />} />
          </Routes>
        </CartProvider>
        </WishlistProvider>
      </BrowserRouter>
    </div>
  )
}

export default App