"use client"
import React, { useState, useEffect } from 'react';
import HeadComponent from '@/dependencies/components/Head/HeadComponent'
import Image from 'next/image'
import styles from './styles.module.css'
import useWindowSize from '@/dependencies/windowsize';
import GradientCard from '@/dependencies/gradientCard'
import CollapsibleText from '@/dependencies/CollapsibleText';

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
    signIn, row, col_, col__, col___, col_img, col_form
  } = styles;
  return (
    <div className={signIn}>
      <div className={`${row} row`}>

        <div className={`${col_} col-md-7`}>
          <div className={col_img}>
            <h3>imesglobe.com</h3>
            <h1>Welcome back</h1>
          </div>
        </div>

        <div className={`${col__} col-md-5`}>
          <div className={col_form}>
            <ContactForm />
          </div>
        </div>

        {size.width < 767.98 &&

          <div className={`${col___} col-md-7`}>
            <div className={col_img}>
              <h3>imesglobe.com</h3>
              <h1>Welcome back</h1>
            </div>
          </div>
        }

      </div>
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
      <h3>Welcome Back! Login</h3>
      <p>
        Ready to dive back into your learning journey? Log in below to access your personalized account and
        continue your exploration of the scriptures with us. Whether you&apos;re catching up on past lessons or
        embarking on new ones, your account is your gateway to a world of spiritual growth and discovery.
      </p>
      <form onSubmit={handleSubmit}>
        <div className={ContactForm_feild}>
          <label htmlFor="email">Email</label>
          <input type="email" id="email" name="email" placeholder="Your email address" value={formData.email} onChange={handleChange} required />
        </div>
        <div className={ContactForm_feild}>
          <label htmlFor="website">Password</label>
          <input type="url" id="website" name="website" placeholder="Your website (optional)" value={formData.website} onChange={handleChange} />
        </div>
        <button type="submit">Login</button>
      </form>
      <p>
        Don&apos;t have an account yet? No problem! Sign up today to join our vibrant community of learners
        and embark on your own path of enlightenment. We can&apos;t wait to have you on board!
      </p>
    </div>
  );
};






