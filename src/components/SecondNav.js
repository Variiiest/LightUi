

import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { CompIndustry } from './CompIndustry'


export class SecondNav extends Component {
    render() {
        return (
        
                <div className="py-3 overflow-y-auto whitespace-nowrap scroll-hidden sm:px-16 sticky top-0 bg-blue-600">

                    {CompIndustry.map((data, key) =>
                        <Link key={key} className="mx-4 leading-5 text-white text-xl md:my-0" to={data.link}>{data.name}</Link>

                    )}
                </div>

        )
    }
}

export default SecondNav