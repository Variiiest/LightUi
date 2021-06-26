

import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { CompIndustry } from './CompIndustry'


export class SecondNav extends Component {
    render() {
        return (
        
                <div className="py-3 overflow-y-auto whitespace-nowrap scroll-hidden bg-gray-100 shadow font-opensans sm:px-16 sticky top-0">

                    {CompIndustry.map((data, key) =>
                        <Link key={key} className="mx-4 leading-5 text-gray-900 md:my-0" to={data.link}>{data.name}</Link>

                    )}
                </div>

        )
    }
}

export default SecondNav