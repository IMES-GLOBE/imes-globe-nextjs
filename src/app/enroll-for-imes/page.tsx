"use client"
import React, { useState, useEffect } from 'react';
import HeadComponent from '@/dependencies/components/Head/HeadComponent'
import Image from 'next/image'
import styles from './styles.module.css'
import useWindowSize from '@/dependencies/windowsize';
import Link from 'next/link';
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
      <h3>Join Us Today! Register</h3>
      <p>
        Ready to dive back into your learning journey? Log in below to access your personalized account and
        continue your exploration of the scriptures with us. Whether you&apos;re catching up on past lessons or
        embarking on new ones, your account is your gateway to a world of spiritual growth and discovery.
      </p>
      <form onSubmit={handleSubmit}>
        {/* <div className={ContactForm_feild}>
          <label htmlFor="email">Email</label>
          <input type="email" id="email" name="email" placeholder="Your email address" value={formData.email} onChange={handleChange} required />
        </div>
        <div className={ContactForm_feild}>
          <label htmlFor="website">Password</label>
          <input type="url" id="website" name="website" placeholder="Your website (optional)" value={formData.website} onChange={handleChange} />
        </div>
        <button type="submit">Login</button> */}
        <RegisterInput />
      </form>
    </div>
  );
};





const RegisterInput = (props: any) => {
  const this_ = {
    state: {
      martalSta: ""
    },
  };
  const [regLoading, set_regLoading] = useState(false);
  const [regError, set_regError] = useState(false);
  const spouseCss = this_.state.martalSta === "Legally married" ? "fadeIn" : "fadeOut";
  const { showMore, showNave, feild_8, feild_2, feild_1,
    feild_7, feild_6, feild_3, feild_4, feild_5,
    feild_9, martalSta, password, retypePassword, feild_s
  } = props;
  const spouseHeight = this_.state.martalSta === "Legally married" ? 60 : 0;




  const setState = (value: any) => { }
  const startReg_pr = () => { }



  return (
    <div className={`${styles.RegisterInput} col-md-12 animated regBox_ fadeIn`}>
      {/* <h4>{trans.header}</h4> */}
      <div className={styles.log_in_box_holder}>
        <p className="log_in_box_text">Name</p>
        <input className="log_in_box_input" type="text" onChange={(e) => { setState({ feild_1: e.target.value }) }} value={feild_1}></input>
        <p className="log_in_box_text" style={{ paddingLeft: 5 }}>Surname</p>
        <input className="log_in_box_input" type="text" onChange={(e) => { setState({ feild_2: e.target.value }) }} value={feild_2}></input>
      </div>
      <p>Date of Birth</p>
      <input className="log_in_box_input" type="date" onChange={(e) => { setState({ feild_3: e.target.value }) }} value={feild_3}></input>
      <p style={{ opacity: 0, marginBottom: 0, paddingBottom:0, paddingTop: 0, marginTop:0 }}>.</p>
      <p>Accademic level</p>
      <input className="log_in_box_input" type="text" onChange={(e) => { setState({ feild_4: e.target.value }) }} value={feild_4}></input>
      <p>Profession</p>
      <input className="log_in_box_input" type="text" onChange={(e) => { setState({ feild_5: e.target.value }) }} value={feild_5}></input>

      <p>Phone Contacts</p>
      <input className="log_in_box_input" type="text" onChange={(e) => { setState({ feild_7: e.target.value }) }} value={feild_7}></input>
      <div className={styles.log_in_box_holder}>
        <div>
          <p style={{ fontSize: 10 }}>City of Residence</p>
          <input className="log_in_box_input" type="text" onChange={(e) => { setState({ feild_8: e.target.value }) }} value={feild_8}></input>
        </div>
        <div>
          <p style={{ fontSize: 10, paddingLeft: 5 }}>Country of residence</p>
          <input className="log_in_box_input" type="text" onChange={(e) => { setState({ feild_9: e.target.value }) }} value={feild_9}></input>
        </div>
      </div>
      <p style={{ opacity: 0 }}>.</p>
      <p style={{ opacity: 0 }}>.</p>
      <p style={{ opacity: 0.9 }}>Are you legally married or cohabiting ? (Please check the box according to your choice)</p>
      <form>
        <br />
        <input className="radio_" type="radio" id="a" name="fav_language" value="Legally married" onChange={(e) => { setState({ martalSta: e.target.value }) }} />
        <label>&nbsp; Legally married</label> <br />
        <div className={"animated " + spouseCss} style={{ transition: "0.6s", height: spouseHeight, overflow: "hidden" }}>
          <p>Spouse name and surname</p>
          <input className="log_in_box_input" type="text" onChange={(e) => { setState({ feild_s: e.target.value }) }} value={feild_s}></input>
        </div>
        <input className="radio_" type="radio" id="b" name="fav_language" value="Concubinage" onChange={(e) => { setState({ martalSta: e.target.value }) }} />
        <label >&nbsp; Concubinage</label> <br />
        <input className="radio_" type="radio" id="c" name="fav_language" value="Single with no children" onChange={(e) => { setState({ martalSta: e.target.value }) }} />
        <label >&nbsp; Single with no children</label> <br />
        <input className="radio_" type="radio" id="d" name="fav_language" value="Single with children" onChange={(e) => { setState({ martalSta: e.target.value }) }} />
        <label >&nbsp;  Single with children</label> <br />
        <input className="radio_" type="radio" id="e" name="fav_language" value="Divorced / Widowed" onChange={(e) => { setState({ martalSta: e.target.value }) }} />
        <label >&nbsp; Divorced / Widowed</label> <br />
      </form>
      <p style={{ opacity: 0 }}>.</p>
      <p>Email Adress</p>
      <p style={{ fontSize: 10, }}>this Email would be verified</p>
      <input className="log_in_box_input" type="email" onChange={(e) => { setState({ feild_6: e.target.value }) }} value={feild_6}></input>
      <p>Password</p>
      <input className="log_in_box_input" type="password" onChange={(e) => { setState({ password: e.target.value }) }} value={password}></input>
      <p>Retype Password</p>
      <input className="log_in_box_input" type="password" onChange={(e) => { setState({ retypePassword: e.target.value }) }} value={retypePassword}></input>
      <p style={{ opacity: 0 }}>.</p>
      <p style={{ opacity: 0 }}>.</p>

      {/* <div className="a reg_a" onClick={() => { startReg_pr() }} style={{ cursor: "pointer", backgroundColor: "brown", width: 120, padding: 10, borderRadius: 10, textAlign: "center", paddingTop: 5 }}>
        {
          regLoading === true ?
            <i className="fa fa-circle-o-notch " style={{ animation: `spin ${1}s linear infinite` }}></i>
            :
            <p style={{ color: "white" }}>REGISTER</p>
        }
      </div> */}
      <button type="submit" style={{paddingTop: 0}}>
      {
          regLoading === true ?
            <i className="fa fa-circle-o-notch " style={{ animation: `spin ${1}s linear infinite` }}></i>
            :
            <p style={{ color: "white" }}>REGISTER</p>
        }
      </button>

      <p style={{ color: "red", fontSize: 14, marginTop: 10 }}>{regError}</p>
      <div className="LGN__" style={{ paddingTop: 15 }}>
        <p style={{ fontSize: 12, marginRight: 5 }}>Already have an account? </p>
        <Link href="/login" className={"LGN__-item "} style={{ fontSize: 12 }}>LOG IN</Link>
      </div>
      <p style={{ fontSize: 8, color: "rgba(0,0,0,0.6)", marginTop: 5 }}>
        this_ Registration Form would be emailed to you once you complete your Registration, and Finalise your payment.
        Therefore ensure that all the informations provided are accurate most especially your email address, as it would beforeour means of interraction and
        for your personal validations and future configurations.
      </p>
    </div>
  )
}





