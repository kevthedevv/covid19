import React from 'react'
import Search from './Search'
import Graph from './Graph'
import TopProvinceCity from './TopProvinceCity'
import TopRegion from './TopRegion'
import Cases from './Cases'


const Content = () => {
    return (
        <div className='content-container'>
        <div className='content-topProvinceCity'>
            <Search />
            <TopProvinceCity />
        </div>

        <div className='content-cases'>
            <Cases />
        </div>

        <div className='content-topRegion'>
            <TopRegion />
        </div>

        <div className='content-graph'>
            <Graph />
        </div>
        
    </div>
    )
}

export default Content

