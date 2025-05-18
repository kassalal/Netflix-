import React from 'react'
import Header from "../../components/Header/Header";
import Footer from '../../components/Footer/Footer';
import Banner from "../../components/Banner/Banner.jsx";
import RowList from "../../Components/Rows/RowList/RowList";
function Home() {
  return (
        <div>
      <Header />
      <Banner/>
      <RowList/>
      <Footer />
      
        </div>
  )
}

export default Home;

