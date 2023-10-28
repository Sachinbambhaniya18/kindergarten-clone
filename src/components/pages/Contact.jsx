import React from 'react'
import Footer from '../others/footer/Footer'
import Header from '../others/header/Header'
import { Clock, Email, House, PhoneCall } from '../others/footer/footerSvg'
import { CaretRight } from '../cards/class-structure/CardSvg'

const Contact = () => {

  const handleSubmit = (e) => {
    e.preventDefault()
  }
  return (
    <div className='Contact-Page'>
      <Header styleProp={{ display: 'none' }} heading='Contact' secondPath='Contact' linkPathOne='/contact' />
      <div className="Contact-wrapper">
        <div className="Contact-container">
          <div className="Contact-row">
            <div className="Contact-col">
              <div className="Contact-inner-row">
                <div className="Contact-inner-col">
                  <div className="Contact-left">
                    <div className="Contact-content">
                      <h5>Contact Us</h5>
                      <h2>Keep in Touch</h2>
                    </div>
                    <form onSubmit={handleSubmit}>
                      <div className="Form-group">
                        <input type="text" name="name" placeholder='Your Name' />
                      </div>
                      <div className="Form-group">
                        <input type="text" name="email" placeholder='Your Email' />
                      </div>
                      <div className="Form-group-textarea">
                        <textarea name="comment" placeholder='Your Comment' />
                      </div>
                      <button type='submit'>
                        Send Message
                      </button>
                    </form>
                  </div>
                </div>
                <div className="Contact-inner-col">
                  <div className="Contact-right">
                    <div className="Contact-content">
                      <h2>Address</h2>
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt voluptatem praesentium sunt nulla unde cumque perspiciatis assumenda minus consequatur sequi!</p>
                    </div>
                    <div className="Contact-address">
                      <div className="Address">
                        <House />
                        <div className="Address-content">
                          <p>Address:</p>
                          <p>3366 Jefferson Street, NEW HAMPTON, IA.</p>
                        </div>
                      </div>
                    </div>
                    <div className="Contact-address">
                      <div className="Address">
                        <Email />
                        <div className="Address-content">
                          <p>Email:</p>
                          <p>
                            <a href="mailto:abcd@gmail.com">abcd@gmail.com</a>
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="Contact-address">
                      <div className="Address">
                        <PhoneCall />
                        <div className="Address-content">
                          <p>Phone Number:</p>
                          <p>+91 86374 56375</p>
                        </div>
                      </div>
                    </div>
                    <div className="Contact-address">
                      <div className="Address">
                        <Clock />
                        <div className="Address-content">
                          <p>Working Time:</p>
                          <p>Monday - Friday: 9am - 5pm</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Contact