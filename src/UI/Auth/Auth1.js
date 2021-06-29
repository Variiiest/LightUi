import React from 'react'



export default function Auth1() {

  const [openTab, setOpenTab] = React.useState(1);

  
  return (
    <div>
      <section className="flex flex-col md:flex-row items-center py-12">
        <div className="w-full md:w-1/2">
          <div className="z-10 m-12 text-left">
            <h1 className="mb-2 text-3xl text-gray-800 sm:text-5xl title-font">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </h1>
            <p className="text-lg lg:block hidden text-gray-800 leading-relaxed mt-6"> Praesent mattis egestas nunc non scelerisque. Aliquam erat volutpat. Nulla auctor turpis quis mollis vehicula. Aliquam erat volutpat. Nulla posuere ac justo at iaculis.</p>
          </div>
        </div>
        <div className="w-full h-full md:max-w-md lg:max-w-full md:mx-auto md:mx-0 md:w-1/2 px-6 lg:px-16 xl:px-12 
        flex items-center justify-center">
          <div className="w-full sm:mx-8 bg-white px-8 py-8 rounded shadow-xl">

            <p className="font-medium text-indigo-800 mt-6">
              <span className="px-2 py-4 bg-gray-50 rounded border border-indigo-400">
                <button className={"" + (openTab === 1
                  ? "text-gray-100 px-4 py-2 rounded bg-indigo-700 focus:outline-none border-0"
                  : "text-gray-800 focus:outline-none px-4 py-2")
                }
                  onClick={e => {
                    e.preventDefault();
                    setOpenTab(1);
                  }}>Sign In</button>

                <button className={"" + (openTab === 2
                  ? "text-gray-100 px-4 py-2 rounded bg-indigo-700 focus:outline-none border-0"
                  : "text-gray-800 focus:outline-none px-4 py-2")
                }
                  onClick={e => {
                    e.preventDefault();
                    setOpenTab(2);
                  }}>Sign Up</button></span>
            </p>


            <div className={openTab === 1 ? "block" : "hidden"}>
              <h1 className="text-xl md:text-2xl font-bold leading-tight mt-6 text-gray-800">Log in to your account</h1>
              <form className="mt-6" action="/" method="POST">
                <div>
                  <label className="block text-gray-800">Email Address</label>
                  <input type="email"
                    id="email address"
                    name="email address"
                    placeholder="Email Address"
                    autoComplete="none" className="w-full px-4 py-3 rounded bg-gray-50 mt-2 border focus:border-indigo-500 focus:bg-white focus:outline-none" />
                </div>
                <div className="mt-4">
                  <label className="block text-gray-800">Password</label>
                  <input type="password"
                    id="password"
                    name="password"
                    placeholder="Password"
                    autoComplete="none" minLength={6} className="w-full px-4 py-3 rounded bg-gray-50 mt-2 border focus:border-indigo-500
                focus:bg-white focus:outline-none" required />
                </div>
                <div className="text-right mt-2">
                  <a href="/" className="text-sm font-semibold text-gray-800 hover:text-indigo-700 focus:text-indigo-700">Forgot Password?</a>
                </div>
                <button type="submit" className="w-full block bg-indigo-700 hover:bg-indigo-800 text-white font-semibold rounded
              px-4 py-3 mt-6">Log In</button>
              </form>
            </div>

            <div className={openTab === 2 ? "block" : "hidden"}>
              <h1 className="text-xl md:text-2xl font-bold text-gray-800 leading-tight mt-6">Sign Up to your account</h1>
              <form className="mt-6" action="/" method="POST">
                <div>
                  <label className="block text-gray-800">Username</label>
                  <input type="text" placeholder="Username" className="w-full px-4 py-3 rounded bg-gray-50 mt-2 border focus:border-indigo-500 focus:bg-white focus:outline-none" />
                </div>
                <div className="mt-4">
                  <label className="block text-gray-800">Email Address</label>
                  <input type="email" placeholder="Enter Email Address" className="w-full px-4 py-3 rounded bg-gray-50 mt-2 border focus:border-indigo-500 focus:bg-white focus:outline-none" />
                </div>
                <div className="mt-4">
                  <label className="block text-gray-800">Password</label>
                  <input type="password" placeholder="Enter Password" minLength={6} className="w-full px-4 py-3 rounded bg-gray-50 mt-2 border focus:border-indigo-500
                focus:bg-white focus:outline-none" required />
                </div>
                <div className="text-right mt-2">
                  <a href="/" className="text-sm font-semibold text-gray-800 hover:text-indigo-700 focus:text-indigo-700">Forgot Password?</a>
                </div>yarn
                <button type="submit" className="w-full block bg-indigo-700 hover:bg-indigo-800 text-white font-semibold rounded
              px-4 py-3 mt-6">Sign Up</button>
              </form>
            </div>


          </div>
        </div>
      </section>
    </div>
  )
}
