import React, { useState, useRef, useEffect } from 'react';
import styles from './styles.module.css'
import Link from 'next/link';


function CollapsibleText() {
  return (
    <div style={{paddingTop: 30}}>
      <COLLAPSE1 />
      <COLLAPSE2 />
      <COLLAPSE3 />
      <COLLAPSE4 />
      <COLLAPSE5 />
      <COLLAPSE6 />
    </div>
  );
};

function COLLAPSE1() {
  const [isExpanded, setExpanded] = useState(false);
  const [contentHeight, setContentHeight] = useState(0);
  const contentRef = useRef<HTMLDivElement>(null);
  const {
    container, collapsibleContainer, toggleButton, additionalText, expanded, icon,
    expandedIcon
  } = styles;

  useEffect(() => {
    if (contentRef.current) {
      setContentHeight(contentRef.current.scrollHeight);
    }
  }, [isExpanded]);

  const handleToggle = () => {
    setExpanded(!isExpanded);
  };

  return (
    <div className={container}>
      <div className={toggleButton} style={{borderTop:"0px solid rgba(0,0,0,0)"}} onClick={handleToggle}>
        <span className={`${icon} ${isExpanded && expandedIcon}`}>{isExpanded ? '-' : '+'}</span>
        <p>WHAT IS LFC?</p>
      </div>
      <div
        className={`${collapsibleContainer} ${isExpanded ? expanded : ''}`}
        style={{ maxHeight: isExpanded ? `${contentHeight}px` : '0' }}
      >
        <div className={additionalText} ref={contentRef}>
          The L.O.G.I.C Foundation Class is a four (4) week intensive development program aimed at driving in the foundational doctrines of our faith, and unveiling who we are and all that we have in Christ.
        </div>
      </div>
    </div>
  );
};

function COLLAPSE2() {
  const [isExpanded, setExpanded] = useState(false);
  const [contentHeight, setContentHeight] = useState(0);
  const contentRef = useRef<HTMLDivElement>(null);
  const {
    container, collapsibleContainer, toggleButton, additionalText, expanded, icon,
    expandedIcon
  } = styles;

  useEffect(() => {
    if (contentRef.current) {
      setContentHeight(contentRef.current.scrollHeight);
    }
  }, [isExpanded]);

  const handleToggle = () => {
    setExpanded(!isExpanded);
  };

  return (
    <div className={container}>
      <div className={toggleButton} onClick={handleToggle}>
        <span className={`${icon} ${isExpanded && expandedIcon}`}>{isExpanded ? '-' : '+'}</span>
        <p>WHY SHOULD YOU ATTEND?</p>
      </div>
      <div
        className={`${collapsibleContainer} ${isExpanded ? expanded : ''}`}
        style={{ maxHeight: isExpanded ? `${contentHeight}px` : '0' }}
      >
        <div className={additionalText} ref={contentRef}>
          The LFC gives New Testament insight to frequently asked questions that believers have, through the contextual teaching of topics such as:
          <ul>
            <li>True repentance.</li>
            <li>Good works versus dead works.</li>
            <li>Repentance from dead works.</li>
            <li>The Cross as the dividing line.</li>
            <li>Grace & Faith the inseparable twins.</li>
            <li>Resurrection & judgment.</li>
            <li>Spiritual gifts.</li>
            <li>New Testament giving, honor & Christocentric prayers.</li>
            <li>Resurrection and judgment.</li>
            <li>Doctrines of baptism, spiritual gifts, laying on of hands.</li>
            <li>New Testament giving.</li>
            <li>Discipleship and honor.</li>
            <li>Christocentric prayers and the concept of Christology.</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

function COLLAPSE3() {
  const [isExpanded, setExpanded] = useState(false);
  const [contentHeight, setContentHeight] = useState(0);
  const contentRef = useRef<HTMLDivElement>(null);
  const {
    container, collapsibleContainer, toggleButton, additionalText, expanded, icon,
    expandedIcon
  } = styles;

  useEffect(() => {
    if (contentRef.current) {
      setContentHeight(contentRef.current.scrollHeight);
    }
  }, [isExpanded]);

  const handleToggle = () => {
    setExpanded(!isExpanded);
  };

  return (
    <div className={container}>
      <div className={toggleButton} onClick={handleToggle}>
        <span className={`${icon} ${isExpanded && expandedIcon}`}>{isExpanded ? '-' : '+'}</span>
        <p>WHO SHOULD REGISTER?</p>
      </div>
      <div
        className={`${collapsibleContainer} ${isExpanded ? expanded : ''}`}
        style={{ maxHeight: isExpanded ? `${contentHeight}px` : '0' }}
      >
        <div className={additionalText} ref={contentRef}>
          Every believer, Church worker, Minister in training, Church leader and Pastor.
        </div>
      </div>
    </div>
  );
};

function COLLAPSE4() {
  const [isExpanded, setExpanded] = useState(false);
  const [contentHeight, setContentHeight] = useState(0);
  const contentRef = useRef<HTMLDivElement>(null);
  const {
    container, collapsibleContainer, toggleButton, additionalText, expanded, icon,
    expandedIcon
  } = styles;

  useEffect(() => {
    if (contentRef.current) {
      setContentHeight(contentRef.current.scrollHeight);
    }
  }, [isExpanded]);

  const handleToggle = () => {
    setExpanded(!isExpanded);
  };

  return (
    <div className={container}>
      <div className={toggleButton} onClick={handleToggle}>
        <span className={`${icon} ${isExpanded && expandedIcon}`}>{isExpanded ? '-' : '+'}</span>
        <p>HOW TO REGISTER</p>
      </div>
      <div
        className={`${collapsibleContainer} ${isExpanded ? expanded : ''}`}
        style={{ maxHeight: isExpanded ? `${contentHeight}px` : '0' }}
      >
        <div className={additionalText} ref={contentRef}>
          Click the Link to Fill the Registration Form.
        </div>
      </div>
    </div>
  );
};

function COLLAPSE5() {
  const [isExpanded, setExpanded] = useState(false);
  const [contentHeight, setContentHeight] = useState(0);
  const contentRef = useRef<HTMLDivElement>(null);
  const {
    container, collapsibleContainer, toggleButton, additionalText, expanded, icon,
    expandedIcon
  } = styles;

  useEffect(() => {
    if (contentRef.current) {
      setContentHeight(contentRef.current.scrollHeight);
    }
  }, [isExpanded]);

  const handleToggle = () => {
    setExpanded(!isExpanded);
  };

  return (
    <div className={container}>
      <div className={toggleButton} onClick={handleToggle}>
        <span className={`${icon} ${isExpanded && expandedIcon}`}>{isExpanded ? '-' : '+'}</span>
        <p>Venue</p>
      </div>
      <div
        className={`${collapsibleContainer} ${isExpanded ? expanded : ''}`}
        style={{ maxHeight: isExpanded ? `${contentHeight}px` : '0' }}
      >
        <div className={additionalText} ref={contentRef}>
          The LOGIC Center
          <br /><br />
          4, Oriwu Street,
          <br /><br />
          By Petrocam Fueling Station,
          <br /><br />
          Elf Bus-Stop,
          <br /><br />
          Lekki Phase 1,
          <br /><br />
          Lagos.
        </div>
      </div>
    </div>
  );
};

function COLLAPSE6() {
  const [isExpanded, setExpanded] = useState(false);
  const [contentHeight, setContentHeight] = useState(0);
  const contentRef = useRef<HTMLDivElement>(null);
  const {
    container, collapsibleContainer, toggleButton, additionalText, expanded, icon,
    expandedIcon
  } = styles;

  useEffect(() => {
    if (contentRef.current) {
      setContentHeight(contentRef.current.scrollHeight);
    }
  }, [isExpanded]);

  const handleToggle = () => {
    setExpanded(!isExpanded);
  };

  return (
    <div className={container}>
      <div className={toggleButton} onClick={handleToggle}>
        <span className={`${icon} ${isExpanded && expandedIcon}`}>{isExpanded ? '-' : '+'}</span>
        <p>MORE QUESTIONS?</p>
      </div>
      <div
        className={`${collapsibleContainer} ${isExpanded ? expanded : ''}`}
        style={{ maxHeight: isExpanded ? `${contentHeight}px` : '0' }}
      >
        <div className={additionalText} ref={contentRef}>
          Call Pastor Lanre Olubaji: plan@thelogicchurch.org
          <br /><br />
          +23486937991
          <br /><br />
          Email: hello@thelogicchurch.org
          <br /><br />
        </div>
      </div>
    </div>
  );
};




export default CollapsibleText;