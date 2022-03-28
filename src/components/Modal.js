import React from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import Button from "./UI/Button";

const Modal = function (props) {
  const backDropVariants = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
    },
  };

  const modalVariants = {
    hidden: {
      opacity: 0,
      y: "-100vh",
    },
    visible: {
      opacity: 1,
      y: 200,
      transition: { delay: 0.5 },
    },
  };

  return (
    <AnimatePresence exitBeforeEnter>
      {props.showModal && (
        <motion.div
          className="backdrop"
          variants={backDropVariants}
          initial="hidden"
          animate="visible"
          exit="hidden"
        >
          <motion.div className="modal" variants={modalVariants} exit="hidden">
            <p>Want start creating again.</p>
            <Link to="/">
              <Button>Create Again</Button>
            </Link>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Modal;
