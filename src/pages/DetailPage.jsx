import React from 'react'
import "./detailpage.css"
import "../components/Footer"
import Footer from '../components/Footer'

function DetailPage() {
  return (
    <div>
        <div>Header</div>
        <div>BreadCrumb</div>
        <div content='detailContent' className='grid-container'>
            <div className='item1'>slider</div>
            <div className='item2'>eventdetail</div>
            <div className='item3'>ticket</div>
            <div className='item4'>location</div>
            <div className='item5'>socialmedia</div>
        </div>
        <div>
            <Footer/>
        </div>

    </div>
  )
}

export default DetailPage