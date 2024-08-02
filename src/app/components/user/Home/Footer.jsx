import React from 'react'
import InstagramIcon from '@mui/icons-material/Instagram';
import XIcon from '@mui/icons-material/X';

const Footer = () => {
  return (
    <footer className="mt-40">
      <div className="container py-8">
      <div className="grid grid-cols-1 md:flex justify-around">
      <div>hgj  </div>
      <div>hgj  </div>
      <div>hgj  </div>
      <div>hgj  </div>
      <div className="footer-links">
        <img src="https://s3-ap-southeast-1.amazonaws.com/ola-prod-website/OLA.svg"/>
        <div className="flex items-center mt-5">
          <InstagramIcon className="" style={{fontSize:40}}/>
          <XIcon className="" style={{fontSize:40}}/>
        </div>
      </div>
      <div className="footer-links">
      <h3 className='text-lg font-semibold'>Explore</h3>
        <ul className="mt-4">
        <li>
          <a href="#" className="text-grey-400 hover:text-white">Home</a>
          </li>
          <li>
          <a href="#" className="text-grey-400 hover:text-white">Careers</a>
          </li>
          <li>
          <a href="#" className="text-grey-400 hover:text-white">About Us</a>
          </li>
        </ul>
      </div>
      
        
      </div>

      </div>
    </footer>
  )
}

export default Footer