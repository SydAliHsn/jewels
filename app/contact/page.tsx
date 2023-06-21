import { NextPage } from 'next';

import { BsWhatsapp } from 'react-icons/bs';
import { AiOutlinePhone } from 'react-icons/ai';
import Preloader from '@/components/Preloader';

export const metadata = {
  title: 'Contact Us',
};

const Contact: NextPage = ({}: {}) => {
  return (
    <div className="contact">
      <Preloader />
      <div className="container">
        <section className="map-section">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d27209.378271843805!2d74.32990126977353!3d31.51942778397734!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391904f882882933%3A0x2e3a0b6cac8e6026!2sGulberg%2C%20Lahore%2C%20Punjab%2C%20Pakistan!5e0!3m2!1sen!2s!4v1687288584918!5m2!1sen!2s"
            style={{ border: 'none', width: '100%', height: '100%' }}
            loading="lazy"
          ></iframe>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.1839490173174!2d-73.98811752507156!3d40.757978734801235!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25855c6480299%3A0x55194ec5a1ae072e!2sTimes%20Square!5e0!3m2!1sen!2s!4v1687290752786!5m2!1sen!2s"
            style={{}}
            loading="lazy"
          ></iframe>
        </section>

        <section className="info-section">
          <div>
            <h3>Contact Us</h3>

            <div className="contact-item">
              <div>
                <AiOutlinePhone
                  className="icon"
                  style={{ color: 'var(--primary)' }}
                />{' '}
                /{' '}
                <BsWhatsapp
                  className="icon"
                  style={{ color: '#2AD066' }}
                />{' '}
                :
              </div>
              <p className="contact-content">+92 345 8188928 & +92 345 1234568</p>
            </div>

            <div className="contact-item">
              Email :<p className="contact-content">contact@sadeemsjewels.com</p>
            </div>

            <div className="contact-item">
              Address (Main) :<p className="contact-content">Main Market, Gulberg III, Lahore, Pakistan</p>
            </div>

            <div className="contact-item">
              Address II :<p className="contact-content">Bond Market, Manhattan, New York, USA</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Contact;
