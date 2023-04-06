import React from 'react'
import Banner from '../../components/Banner'
import Sidebar from '../../components/Sidebar'
import './home.css'
import ProductList from '../../components/ProductList'
import Footer from '../../components/Footer'
import Navbar from '../../components/Navbar'
export default function Home() {
    return (
        <div>
            <Navbar/>
            <Banner />
            <div className='main-content'>
                <Sidebar />
                <ProductList />
            </div>
            <Footer />
        </div>
    )
}
