import React from 'react'
import Highlight from 'react-highlight';
import {CopyToClipboard} from 'react-copy-to-clipboard';

const CodeCard = props => {
  const [openTab, setOpenTab] = React.useState(1);
  
  
  return (

  <div className="text-gray-300 mx-auto w-full px-5 py-6 lg:px-16">
      <div className="shadow-lg rounded-xl border dark:border-black">
        <div className="bg-gradient-to-r from-pink-400 to-blue-600 rounded dark:bg-white dark:bg-opacity-10">
     
          <div className="flex w-full">
            <button className={
              "py-2 px-6 focus:outline-none font-bold" +
              (openTab === 1
                ? "text-gray-300 bg-white bg-opacity-10"
                : "bg-white bg-opacity-5")
            }
              onClick={e => {
                e.preventDefault();
                setOpenTab(1);
              }}>
              Preview
              </button>
            <button className={
              "py-2 px-6 focus:outline-none font-bold" +
              (openTab === 2
                ? "text-gray-700 bg-white bg-opacity-10"
                : "bg-white bg-opacity-5")
            }
              onClick={e => {
                e.preventDefault();
                setOpenTab(2);
              }}>
              Code
              </button>

   
              <CopyToClipboard text={props.code} onCopy={() =>alert("Copied")}>
          <button className="px-2 py-2 focus:outline-none">  
           <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" 
           style={{fill: 'rgba(255,255,0, 1)', transform: '', msFilter: ''}}><path d="M20,2H10C8.897,2,8,2.897,8,4v4H4c-1.103,0-2,0.897-2,2v10c0,1.103,0.897,2,2,2h10c1.103,0,2-0.897,2-2v-4h4 c1.103,0,2-0.897,2-2V4C22,2.897,21.103,2,20,2z M4,20V10h10l0.002,10H4z M20,14h-4v-4c0-1.103-0.897-2-2-2h-4V4h10V14z" /></svg></button>
        </CopyToClipboard>

          </div>
          <div className="bg-gray-100">
            <div className={openTab === 1 ? "block" : "hidden"}>
              
              {props.children}

            </div>
            <div className={openTab === 2 ? "block" : "hidden"}>
              <div>
  
                <Highlight language="html" className="overflow-y-scroll scroll-hidden overflow-auto bg-white bg-opacity-90 font-medium h-screen">
      {props.code}
      </Highlight>


              </div>
            </div>
          </div>
        </div>
      </div>








    </div>
  )
}


export default CodeCard