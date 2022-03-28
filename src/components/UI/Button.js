import React from "react";
import { motion } from "framer-motion";

const Button = function (props) {
  return (
    <motion.button
      whileHover={{
        scale: 1.1,
        textShadow: "0px 0px 8px #333",
        boxShadow: "0px 0px 8px 0px #333",
        transition: {
          duration: 0.3,
          yoyo: Infinity,
        },
      }}
      initial={props.initial}
      animate={props.animate}
      transition={props.transition}
      onClick={props.onClick}
    >
      {props.children}
    </motion.button>
  );
};

export default Button;
