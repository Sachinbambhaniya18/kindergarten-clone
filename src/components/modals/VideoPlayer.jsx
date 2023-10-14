import React from 'react'
import { motion as m } from 'framer-motion';
// import { faClose } from '@fortawesome/free-solid-svg-icons';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
const dropIn = {
  hidden: {
    y: "10vh",
    opacity: 0
  },
  visible: {
    y: "0vh",
    opacity: 1,
    transition: {
      duration: '0.7',
      ease: 'easeInOut'
    }
  },
  exit: {
    y: "-10vh",
    opacity: 0
    // visibility: "hidden"
  }
}
const VideoPlayer = ({ onClose, itemLink }) => {
  return (
    <div className='Modal' onClick={onClose}>
      <div className="Embed-Holder"
      >
        <div className="Modal-off">
          <button className="Modal-Close" onClick={onClose}></button>
        </div>
        <div className="Embed">
          <m.iframe
          title="Demo-Video"
          width="100%" 
          height="100%"
          src={itemLink} 
          frameborder="0"
          variants={dropIn}
          initial="hidden"
          animate="visible"
          exit="exit">
          </m.iframe>
        </div>
      </div>
    </div>
  )
}

export default VideoPlayer;