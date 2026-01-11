import React from 'react'
import TabFilmes from '../components/pages/home/TabFilmes'
import TabSeries from '../components/pages/home/TabSeries'
import Banner from '../components/pages/home/Banner'

const Home = () => {
  return (
    <div>
      <Banner />
      <TabFilmes />
      <TabSeries />
    </div>
  )
}

export default Home