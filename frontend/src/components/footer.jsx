import React from "react"
import logoBunny from '../assets/logoBunny.png'
const Footer = React.forwardRef((props, ref) => {
  return (
    <footer ref={ref} id="footer" className="text-gray-600 body-font bg-zinc-200 w-full h-3">
      <div className=" container px-5 py-3 mx-auto  md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col hidden sm:block">
        <div className=" w-64 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left md:mt-0 mt-10 md:items-center md:justify-center">
          <a className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
          <div className="w-9 h-9 p-2 bg-celeste rounded-full overflow-hidden">
              <img
                className="w-full h-full object-cover"
                src={logoBunny}
                alt=""
              />
            </div>
            <a href="clearbunny.tech" className="ml-3 text-md hover:text-gray-500">Powered by ClearBunny</a>
          </a>
          
        </div>
      </div>
      <div className="bg-gray-100 ">
        <div className="container mx-auto p-1 flex flex-wrap flex-col sm:flex-row">
          <p className="text-gray-500 text-sm text-center sm:text-left">
            © 2023 Porewed By ClearBunny 
            
          </p>
          <span className="inline-flex sm:ml-auto sm:mt-0 mt-2 justify-center sm:justify-start">
            <a
              href="https://wa.me/+5491166941550?text=Hola%2C%20me%20gustaría%20saber%20más%20sobre%20sus%20servicios."
              className="text-gray-500"
              target="_blank"
              rel="noopener noreferrer"
            >
              
            </a>
          </span>
        </div>
      </div>
    </footer>
  )
})

Footer.displayName = "Footer"
export default Footer
