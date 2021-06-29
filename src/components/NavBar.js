import React, { Component } from 'react'

export class NavBar extends Component {
    render() {
        return (
            <div>
            

<section className="text-gray-600 body-font bg-blue-600">
  <div className="container flex flex-wrap mx-auto w-full px-5 py-6 lg:px-16 items-center">
    <div className="md:pr-12 md:py-8 mb-10 md:mb-0 pb-10">
      <h1 className="sm:text-5xl text-4xl font-medium title-font mb-2 text-white">Light UI (React + TailwindCSS)</h1>
      <p className="leading-relaxed text-base"></p>
      <a className="px-4 py-2 bg-white rounded-lg inline-flex items-center mt-4">Customize Theme
        <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
          <path d="M5 12h14M12 5l7 7-7 7"></path>
        </svg>
      </a>
    </div>
   
  </div>
</section>
            </div>
        )
    }
}

export default NavBar
