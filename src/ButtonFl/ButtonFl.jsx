import React, { useState } from 'react';
import "./buttonfl.scss";
import wapp from "../Assets/wapp.png";
import mail from "../Assets/mail.png";
import github from "../Assets/github.png";
import info from "../Assets/info.png";
import menu from "../Assets/menu.png";
import { motion } from 'framer-motion';

const variant = {
  initial: {
    rotate: 0,
    scale: 1,
  },
  animate: {
    rotate: 90,
    scale: 1.5,
  },
  whileHover: {
    rotate: 180,
  },
  transition: {
    ease: 'easeIn',
    type: 'spring',
    stiffness: 50,
    damping: 5,
  },
};

const variantSlider = {
  initial: {
    width: '0',
    height: '0',
  },
  animate: {
    width: '100%',
    height: '100%',
    transition: {
      duration: 0.5,
    },
  },
};

const variantImages = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
    transition: {
      delay: 0.5,
      ease: 'easeOut',
      type: 'spring',
      stiffness: 70,
      damping: 5,
    },
  },
};

const variantInfo = {
  initial: {
    opacity: 0,
    display: 'none',
  },
  animate: {
    opacity: 1,
    display: 'block',
    transition: {
      duration: 0.5,
    },
  },
};

const ButtonFl = () => {
  const [rotateMenu, setRotateMenu] = useState(false);
  const [showMessageInfo, setShowMessageInfo] = useState(false);

  const handleClick = () => {
    setRotateMenu(!rotateMenu);
  };

  const infoClick = () => {
    setShowMessageInfo(!showMessageInfo);
  };

  return (
    <motion.div className="containerButton">
      <motion.div
        className="slider"
        onClick={handleClick}
        variants={variantSlider}
        initial="initial"
        animate={rotateMenu ? 'animate' : 'initial'}
      />
      <div className="mainContainer">
        <motion.a href="https://api.whatsapp.com/send?phone=573015018260" target="blank">
          <motion.img
            src={wapp}
            className="sliderImages"
            alt="wapp"
            onClick={handleClick}
            initial="initial"
            animate={rotateMenu ? 'animate' : 'initial'}
            variants={variantImages}
          />
        </motion.a>
        <motion.a href="https://github.com/juanghg87" target="blank">
          <motion.img
            src={github}
            className="sliderImages"
            alt="github"
            onClick={handleClick}
            initial="initial"
            animate={rotateMenu ? 'animate' : 'initial'}
            variants={variantImages}
          />
        </motion.a>
        <motion.a>
          <motion.img
            src={menu}
            alt="menu"
            onClick={handleClick}
            initial="initial"
            animate={rotateMenu ? 'animate' : 'initial'}
            className="menu"
            whileHover="whileHover"
            variants={variant}
          />
        </motion.a>

        <motion.a href="https://www.linkedin.com/in/juanghg87/" target="blank">
          <motion.img
            src={mail}
            className="sliderImages"
            alt="mail"
            onClick={handleClick}
            initial="initial"
            animate={rotateMenu ? 'animate' : 'initial'}
            variants={variantImages}
          />
        </motion.a>
        <a>
          <motion.img
            src={info}
            className="sliderImages"
            alt="info"
            onClick={infoClick}
            initial="initial"
            animate={rotateMenu ? 'animate' : 'initial'}
            variants={variantImages}
          />
        </a>
      </div>

      {showMessageInfo && (
        <motion.div
          className="messageInfo"
          initial="initial"
          animate="animate"
          variants={variantInfo}
        >
          <h2>Reglas</h2>
          <ul>
            <li>
              Solo hay un ganador, el otro es un <span>simple perdedor.</span>
            </li>
            <li>Puedes estar donde otros han estado.</li>
            <li>Sin llorar...</li>
          </ul>
        </motion.div>
      )}
    </motion.div>
  );
};

export default ButtonFl;
