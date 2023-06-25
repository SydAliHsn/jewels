import { NextPage } from 'next';

import { BsWhatsapp } from 'react-icons/bs';
import { AiOutlinePhone } from 'react-icons/ai';
import Preloader from '@/components/Preloader';

export const metadata = {
  title: 'Contact Us',
};

const Contact: NextPage = ({}: {}) => {
  const phoneNumber1 = process.env.PHONE_NUMBER_1?.replaceAll('-', ' ');
  const phoneNumber2 = process.env.PHONE_NUMBER_2?.replaceAll('-', ' ');

  return (
    <div className="contact">
      <Preloader />
      <div className="container">
        <section className="map-section">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13625.43189078571!2d74.16914055541993!3d31.37669160000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3918ff91e0ef34d7%3A0x3ec9298898df996f!2sJasmine%20Mall!5e0!3m2!1sen!2s!4v1687696071150!5m2!1sen!2s"
            style={{ border: 'none', width: '100%', height: '100%' }}
            loading="lazy"
          ></iframe>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3053.6144595418095!2d-75.06795252453884!3d40.06170401419783!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c6b6aa287bd337%3A0x19df04b45e8934a1!2s1716%20Borbeck%20Ave%2C%20Philadelphia%2C%20PA%2019111%2C%20USA!5e0!3m2!1sen!2s!4v1687696185056!5m2!1sen!2s"
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
              <p className="contact-content">
                {phoneNumber1} & {phoneNumber2}
              </p>
            </div>

            <div className="contact-item">
              Email :<p className="contact-content">{process.env.EMAIL}</p>
            </div>

            <div className="contact-item">
              Address (Main) :
              <p className="contact-content">BestTogs, 2nd Floor, Jasmine Mall, Bahria Town, Lahore, Pakistan</p>
            </div>

            <div className="contact-item">
              Address II :<p className="contact-content">1716 Borbeck Avenue 19111, Philadelphia, Pensyllvania, USA</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Contact;
