import React from "react";
import { motion } from "framer-motion";

const Page = function (props) {
  const pageVariants = {
    hidden: {
      x: "100vw",
      opacity: 0,
    },
    visible: {
      x: 0,
      opacity: 1,
      transition: { type: "spring", delay: 0.5 },
    },
    exit: {
      x: "-100vw",
      transition: { ease: "easeInOut" },
    },
  };

  return (
    <motion.div
      className={props.className}
      variants={pageVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      {props.children}
    </motion.div>
  );
};

export default Page;
