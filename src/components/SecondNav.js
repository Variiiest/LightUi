

import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { CompIndustry } from './CompIndustry'


export class SecondNav extends Component {
    render() {
        return (
        
                <div className="py-6 overflow-y-auto whitespace-nowrap scroll-hidden sm:px-16 sticky top-0 bg-blue-500">

                    {CompIndustry.map((data, key) =>
                        <Link key={key} className="mx-4 leading-5 text-white md:my-0" to={data.link}>{data.name}</Link>

                    )}
                </div>

        )
    }
}

export default SecondNav