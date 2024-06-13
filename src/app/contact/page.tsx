"use client"
import React, { useState, useEffect } from 'react';
import HeadComponent from '@/dependencies/components/Head/HeadComponent'
import Image from 'next/image'
import styles from './styles.module.css'
import useWindowSize from '@/dependencies/windowsize';
import GradientCard from '@/dependencies/gradientCard'
import { LocationIcon } from '@/dependencies/icons/location';
import Line from '@/dependencies/Line';

export default function Home() {
  return (
    <main className={styles.container}>
      <HeadComponent />
      <HomeCard />
    </main>
  )
}

function HomeCard(params: any) {
  const size = useWindowSize();
  const {
    AddressContainer, AddressContainer_, AddressContainer_smallInfo, AddressContainer_col,
    Contact, Contact_, welcome_img,
    Carousel_container,
  } = styles;
  return (
    <div>

      <div className={Contact}>
        <div className={`${Contact_} row`}>
          <div className={` col-md-4`}>
            <Carousel />
          </div>
          <div className={` col-md-8`}>
            <ContactForm />
          </div>
        </div>
      </div>

      {/* <div className={AddressContainer}>
        <div className={`${AddressContainer_} row`}>
          <div className={`${AddressContainer_col} col-md-7`}>
            <Line style={{ width: "100%"}} lineWidth={"130%"} rightEclips leftEclips={size.width < 767.98 ? true : false}/>
            <h2>
              Join us Every Sunday!
            </h2>
            <h4>
              <LocationIcon /> Location
            </h4>
            <p>
              4, Oriwu Street,<br />
              Besides Petrocam Fueling Station,<br />
              Lekki phase 1 Lagos.
            </p>
            <p className={AddressContainer_smallInfo}>
              You can also send us an an email and we would surely reply to you.
            </p>
            <p>
              E-mail:  info@thelogicchurch.org
            </p>
            <Line style={{ width: "100%", marginTop: 20}} lineWidth={"130%"}/>
          </div>
          <div className={`${Carousel_container} col-md-5`}>
            <Carousel />
          </div>
        </div>
      </div> */}


    </div>
  )
}


const ContactForm = () => {
  const {
    ContactForm_, ContactForm_feild
  } = styles;

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    website: '',
    message: ''
  });

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    // You can add your submission logic here, e.g., sending data to backend API
  };

  return (
    <div className={ContactForm_}>
      <h3>If you need quick contact please fill the online form below</h3>
      <p>
        We&apos;re thrilled that you&apos;re interested in reaching out to us. Whether you have questions,
        feedback, or just want to say hello, we&apos;re here to listen and assist you. Our team is dedicated
        to providing you with the support and information you need.
      </p>
      <form onSubmit={handleSubmit}>
        <div className={ContactForm_feild}>
          <label htmlFor="name">Name</label>
          <input type="text" id="name" name="name" placeholder="Your name" value={formData.name} onChange={handleChange} required />
        </div>
        <div className={ContactForm_feild}>
          <label htmlFor="email">Email</label>
          <input type="email" id="email" name="email" placeholder="Your email address" value={formData.email} onChange={handleChange} required />
        </div>
        <div className={ContactForm_feild}>
          <label htmlFor="website">Website</label>
          <input type="url" id="website" name="website" placeholder="Your website (optional)" value={formData.website} onChange={handleChange} />
        </div>
        <div className={ContactForm_feild}>
          <label htmlFor="message">Message</label>
          <textarea id="message" name="message" placeholder="Your message" value={formData.message} onChange={handleChange}></textarea>
        </div>
        <button type="submit">Submit Message</button>
      </form>
      <p>
        Feel free to use the form above to send us a message. Please provide as much detail as possible so
        that we can respond to your inquiry promptly and effectively. Your feedback is valuable to us, and
        we strive to ensure that every interaction with us is meaningful and productive.
      </p>
      <p>
        Thank you for choosing to connect with us. We look forward to hearing from you soon!
      </p>
    </div>
  );
};

const Carousel = () => {
  const size = useWindowSize();
  const [currentSlide, setCurrentSlide] = useState(0);
  const { Carousel, Carousel_, Carousel_Img } = styles;
  const images = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const delay = 4000; const delay_ = 700;
  const smallScreenWidth = size.width*0.9

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentSlide((prevSlide) =>
        prevSlide >= (images.length - 1) ? 0 : prevSlide + 1
      );
    }, currentSlide >= (images.length - 1) ? delay_ : delay);

    return () => clearInterval(intervalId);
  }, [currentSlide, images.length, delay]);

  return (
    <div className={Carousel}>
      <div className={Carousel_} style={{
        width: size.width > 575.98 ? `${images.length * 500}px` : `${images.length * smallScreenWidth}px`,
        left: size.width > 575.98 ?  `-${currentSlide * 500}px` : `-${currentSlide * smallScreenWidth}px`,
        transition: currentSlide === 0 ? "0s ease-in-out" : '0.5s ease-in-out',
      }}>
        {images.map((image, index) => (
          <img
            key={index}
            src={`/assets/img/contact/slide/img${image === images.length ? images[0] : image}.png`}
            alt={`Slide ${image === images.length ? images[0] : image}`}
            className={Carousel_Img}
          />
        ))}
      </div>
    </div>
  );
};





