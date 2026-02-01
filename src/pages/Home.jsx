import React, { useEffect } from 'react'
import TabFilmes from '../components/pages/home/TabFilmes'
import TabSeries from '../components/pages/home/TabSeries'
import Banner from '../components/pages/home/Banner'

const Home = () => {
  useEffect(() => {
    document.title = "Home"
  }, [])
  return (
    <div>
      <Banner />
      <TabFilmes />
      <TabSeries />
    </div>
  )
}

export default Home