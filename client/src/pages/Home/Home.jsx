import React from 'react'
import './Home.css'
import Hero from './Hero/Hero'
import Sale from './Sale/Sale'
// import NewIn from './NewIn/NewIn'
// import TopTrends from './TopTrends/TopTrends'
// import TopBrands from './TopBrands/TopBrands'
// import NewsLetter from '@components/NewsLetter/NewsLetter'



function Home() {
  return (
    <div className='main'>
        <Hero />
        <Sale />
        {/* <NewIn /> */}
        {/* <TopTrends /> */}
        {/* <TopBrands /> */}
        {/* <NewsLetter /> */}
    </div>
  )
}

export default Home