import React from 'react';
import Dot from './Dot'
import "./radar.css";

const Radar = () => {
  return (
    <div>
    <div className="razar">
        <div className="ringbase ring1"></div>
        <div className="ringbase ring2"></div>
        <div className="ringbase ring3"></div>
        <div className='line vertical '/>
        <div className='line'/>
        <div className="pointer">
          <div></div>
        </div>
        {/* <Dot className='dot1'/> */}
        {/* <Dot className='dot1'/> */}
      </div>
    </div>
  )
}

export default Radar