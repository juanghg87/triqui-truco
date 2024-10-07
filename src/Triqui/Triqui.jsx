import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import './triqui.scss'
import circle_icon from "../Assets/circle-icon.png"
import cross_icon from "../Assets/cross-icon.png"

const variant = {
    elementoUno: {
        initial: { x: -500, y: -600, rotate: 180 },
        animate: {
            x: [-500, -300, 0, 100, 0],
            y: [600, 300, 200, 100, 0],
            rotate: [0, -25, 360, -480, 720],
            transition: {
                // duration: 1.5,
                ease: "easeIn",
                type: "spring",
                stiffness: 50,
                damping: 5,
            }
        },
    },
    elementoDos: {
        initial: { x: 500, y: -600, rotate: 180 },
        animate: {
            x: [600, 100, -100, 0],
            y: [500, 100, -100, 0],
            rotate: [0, 360, -360, 360],
            transition: {
                ease: "easeInOut",
                type: "spring",
                stiffness: 50,
                damping: 5,
            }
        },
    },
    elementoTres: {
        initial: { x: -700, y: -500, rotate: 180 },
        animate: {
            x: [400, 200, -100, -50, 0],
            y: [500, 150, -200, -50, 0],
            rotate: [0, 180, 360],
            transition: {
                // duration: 1.3,
                ease: "backInOut",
                type: "spring",
                stiffness: 50,
                damping: 5,
            }
        },
    },
    elementoCuatro: {
        initial: { x: 660, y: 800, rotate: 0 },
        animate: {
            x: [700, 100, 0, -100, 0],
            y: [600, 300, -200, -100, 0],
            rotate: [0, -25, 360, -480, 720],
            transition: {
                ease: "linear",
                type: "spring",
                stiffness: 75,
                damping: 5,
            }
        },
    },
    elementoCinco: {
        initial: { x: -900, y: 800, rotate: 0 },
        animate: {
            x: [-900, -500, -300, 100, 0],
            y: [0, -800, -700, -400, 0],
            rotate: [0, -250, 360, -840, 720],
            transition: {
                ease: "backIn",
                type: "spring",
                stiffness: 55,
                damping: 5,
            },
        },
    },
    elementoSeis: {
        initial: { x: 650, y: 800, rotate: 0 },
        animate: {
            x: [-700, 100, -300, -100, 0],
            y: [600, 300, -200, -200, 0],
            rotate: [0, -250, 360, -480, 720],
            transition: {
                ease: "circOut",
                type: "spring",
                stiffness: 60,
                damping: 5,
            },
        },
    },
    elementoSiete: {
        initial: { x: 600, y: 0, rotate: 0 },
        animate: {
            x: [500, 100, 300, 100, 0],
            y: [600, 300, 200, 200, 0],
            rotate: [0, -250, 360, -480, 720],
            transition: {
                // duration: 1.1,
                ease: "backInOut",
                type: "spring",
                stiffness: 40,
                damping: 5,
            },
        },
    },
    elementoOcho: {
        initial: { x: -900, y: 800, rotate: 0 },
        animate: {
            x: [-700, 100, -300, -100, 0],
            y: [600, 300, -200, -200, 0],
            rotate: [0, -250, 360, -480, 720],
            transition: {
                ease: "circOut",
                type: "spring",
                stiffness: 30,
                damping: 5,
            },
        },
    },
    elementoNueve: {
        initial: { x: 700, y: 500, rotate: 0 },
        animate: {
            x: [650, -500, 200, 100, 0],
            y: [720, -800, 450, -400, 0],
            rotate: [0, -250, 360, -840, 360],
            transition: {
                ease: "easeOut",
                type: "spring",
                stiffness: 70,
                damping: 5,
            },
        },
    }
};

const variantsTwo = {
    scale: 1.3,
}

let data = ["", "", "", "", "", "", "", "", ""]

const Triqui = () => {
    const message = [
        "¿Eso fue todo? ¡Siguiente!",
        "¡Esforzate un poco por Dios!",
        "¡Muy fácil! ¿Así es para todo?",
        "Ah no, ¡que verguenza!",
        "Cambie de hobby, no mejor de vida.",
        "¿Ya? Sin palabras.",
        "¡Ponele lógica por Dios!",
        "¡Que verguenza! En serio.",
        "Oíste, ¿en serio?",
        "Cuando crezca lo intenta otra vez.",
        "No voltees que te están mirando, que pena.",
        "No es tu culpa, fue el ácido fólico.",
        "No, que otro juegue mejor.",
        "cuando se es enchimbado le fluye natural",
        "Buena fabrica de cromosomas",
    ]
    const randomMessage = message[Math.floor(Math.random() * message.length)];
    const [resetAnim, setResetAnim] = useState(false);
    let [count, setCount] = useState(0);
    let [lock, setLock] = useState(false);
    const [showMessage, setShowMessage] = useState(false);
    let titleRef = useRef(null);
    // let boardRef = useRef(null);
    let messageRef = useRef(null);
    let box1 = useRef(null);
    let box2 = useRef(null);
    let box3 = useRef(null);
    let box4 = useRef(null);
    let box5 = useRef(null);
    let box6 = useRef(null);
    let box7 = useRef(null);
    let box8 = useRef(null);
    let box9 = useRef(null);
    let box_array = [box1, box2, box3, box4, box5, box6, box7, box8, box9]

    const toggle = (e, num) => {
        if (lock) {
            return 0;
        }
        if (count % 2 === 0) {
            e.target.innerHTML = `<img src='${cross_icon}'>`;
            e.target.style.backgroundColor = "#15ff0068";
            e.target.style.boxShadow = "0 0 2em 0.2em  #15ff00b3";
            e.target.style.scale = "0.9";
            e.target.style.border = "0.3em solid #15ff00b3";
            e.target.style.transition = "all 0.3s ease-in";
            data[num] = "x";
            setCount(++count)
        } else {
            e.target.innerHTML = `<img src='${circle_icon}'>`;
            e.target.style.backgroundColor = "#ff00dd7a";
            e.target.style.border = "1px solid #fdbdf5bb";
            e.target.style.border = "0.3em solid #ff00dd7a";
            e.target.style.boxShadow = "0 0 2em 0.2em   rgba(247, 41, 220, 0.733)";
            e.target.style.scale = "0.9";
            e.target.style.transition = "all 0.3s ease-in";
            data[num] = "o";
            setCount(++count)
        }
        checkWin();
    }

    const checkWin = () => {
        if (data[0] === data[1] && data[1] === data[2] && data[2] !== "") {
            won(data[2]);
        } else if (data[3] === data[4] && data[4] === data[5] && data[5] !== "") {
            won(data[5]);
        } else if (data[6] === data[7] && data[7] === data[8] && data[8] !== "") {
            won(data[8]);
        } else if (data[0] === data[3] && data[3] === data[6] && data[6] !== "") {
            won(data[6]);
        } else if (data[1] === data[4] && data[4] === data[7] && data[7] !== "") {
            won(data[7]);
        } else if (data[2] === data[5] && data[5] === data[8] && data[8] !== "") {
            won(data[8]);
        } else if (data[0] === data[4] && data[4] === data[8] && data[8] !== "") {
            won(data[8]);
        } else if (data[0] === data[1] && data[1] === data[2] && data[2] !== "") {
            won(data[2]);
        } else if (data[2] === data[4] && data[4] === data[6] && data[6] !== "") {
            won(data[6]);
        }
    }

    const won = (winner) => {
        setLock(true);
        setShowMessage(true);
        if (winner === "x") {
            messageRef.current.innerHTML = `${randomMessage}`;
            titleRef.current.innerHTML = `¡<img src=${cross_icon}> sí pudo!`;
        } else {
            titleRef.current.innerHTML = `¡Uno sí pudo <img src=${circle_icon}>!`;
            messageRef.current.innerHTML = `${randomMessage}`;
        }
    }

    const reset = () => {
        data = ["", "", "", "", "", "", "", "", ""];
        setLock(false);
        setShowMessage(false);
        setResetAnim(true);
        titleRef.current.innerHTML = ' ¡A jugar <span>TRIQUI </span>Truco!';
        box_array.map(
            (e) => {
                e.current.innerHTML = "";
                e.current.style.backgroundColor = "#15ff009f";
                e.current.style.boxShadow = "none";
                e.current.style.border = "1px solid #14FF00";
                e.current.style.scale = "1";
                e.current.style.transition = "none";
            }
        );
        setTimeout(() => {
            setResetAnim(false)
        }, 100);
    }
    return (
        <div className='container'>
            <motion.h1
                className='tittle'
                ref={titleRef}
            > ¡A jugar <span>TRIQUI</span>Truco!</motion.h1>
            <motion.div
                className="messageLoser"
                ref={messageRef}
                style={{
                    opacity: showMessage ? 1 : 0,
                    visibility: showMessage ? "visible" : "hidden",
                    display: showMessage ? "flex" : "none",
                    zIndex: showMessage ? 1 : -1,
                    alignItems: "center",
                    justifyContent: "center",
                }}
                initial={{ opacity: 0 }}
                animate={{
                    opacity: showMessage ? 1 : 0,
                    transition: { duration: 0.8 }
                }}
            ></motion.div>
            
            <div className="board"
            // ref={boardRef}
            >
                <div className="row1">
                    <motion.div
                        variants={variant.elementoUno}
                        initial="initial"
                        animate={resetAnim ? "initial" : "animate"}
                        className="boxes"
                        ref={box1}
                        onClick={(e) => { toggle(e, 0) }}
                        whileHover={variantsTwo}
                        whileTap={variantsTwo}
                    ></motion.div>
                    <motion.div
                        className="boxes"
                        ref={box2}
                        onClick={(e) => { toggle(e, 1) }}
                        variants={variant.elementoDos}
                        initial="initial"
                        animate={resetAnim ? "initial" : "animate"}
                        whileHover={variantsTwo}
                        whileTap={variantsTwo}
                    ></motion.div>
                    <motion.div
                        className="boxes"
                        ref={box3}
                        onClick={(e) => { toggle(e, 2) }}
                        variants={variant.elementoTres}
                        initial="initial"
                        animate={resetAnim ? "initial" : "animate"}
                        whileHover={variantsTwo}
                        whileTap={variantsTwo}
                    ></motion.div>
                </div>
                <div className="row2">
                    <motion.div
                        className="boxes"
                        ref={box4}
                        onClick={(e) => { toggle(e, 3) }}
                        variants={variant.elementoCuatro}
                        animate={resetAnim ? "initial" : "animate"}
                        whileHover={variantsTwo}
                        whileTap={variantsTwo}
                    ></motion.div>
                    <motion.div
                        className="boxes"
                        ref={box5}
                        onClick={(e) => { toggle(e, 4) }}
                        variants={variant.elementoCinco}
                        initial="initial"
                        animate={resetAnim ? "initial" : "animate"}
                        whileHover={variantsTwo}
                        whileTap={variantsTwo}
                    ></motion.div>
                    <motion.div
                        className="boxes"
                        ref={box6}
                        onClick={(e) => { toggle(e, 5) }}
                        variants={variant.elementoSeis}
                        initial="initial"
                        animate={resetAnim ? "initial" : "animate"}
                        whileHover={variantsTwo}
                        whileTap={variantsTwo}
                    ></motion.div>
                </div>
                <div className="row3">
                    <motion.div
                        className="boxes"
                        ref={box7}
                        onClick={(e) => { toggle(e, 6) }}
                        variants={variant.elementoSiete}
                        initial="initial"
                        animate={resetAnim ? "initial" : "animate"}
                        whileHover={variantsTwo}
                        whileTap={variantsTwo}
                    ></motion.div>
                    <motion.div
                        className="boxes"
                        ref={box8}
                        onClick={(e) => { toggle(e, 7) }}
                        variants={variant.elementoOcho}
                        initial="initial"
                        animate={resetAnim ? "initial" : "animate"}
                        whileHover={variantsTwo}
                        whileTap={variantsTwo}
                    ></motion.div>
                    <motion.div
                        className="boxes"
                        ref={box9}
                        onClick={(e) => { toggle(e, 8) }}
                        variants={variant.elementoNueve}
                        initial="initial"
                        animate={resetAnim ? "initial" : "animate"}
                        whileHover={variantsTwo}
                        whileTap={variantsTwo}
                    ></motion.div>
                </div>
            </div>
            <button className="reset" onClick={() => { reset() }}>
                <span className='glowing-txt' >Rei</span>
                <span className='faulty-letter'>ni</span>
                <span>ciar</span>
            </button>
        </div>
    )
}

export default Triqui;