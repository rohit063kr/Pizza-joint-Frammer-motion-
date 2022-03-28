import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Order = ({ pizza, setShowModal }) => {
  const pageVariants = {
    hidden: {
      x: "100vw",
      opacity: 0,
    },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        type: "spring",
        delay: 0.5,
        when: "beforeChildren",
        mass: 0.5,
        damping: 7,
        staggerChildren: 0.4,
      },
    },
    exit: {
      x: "-100vw",
      transition: { ease: "easeInOut" },
    },
  };

  const childrenVariants = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
    },
  };

  useEffect(() => {
    setTimeout(() => {
      setShowModal(true);
    }, 3000);
  }, []);

  return (
    <motion.div
      className="container order"
      variants={pageVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <h2 exit={{ y: -1000 }}>Thank you for your order :)</h2>

      <motion.p variants={childrenVariants}>
        You ordered a {pizza.base} pizza with:
      </motion.p>
      <motion.div variants={childrenVariants}>
        {pizza.toppings.map((topping) => (
          <div key={topping}>{topping}</div>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default Order;
