import React from "react";
import { motion } from "framer-motion";

const ListItem = function (props) {
  return (
    <motion.li
      onClick={props.onClick}
      whileHover={{ scale: 1.3, originX: 0, color: "#f8e112" }}
      transition={{ type: "spring", stiffness: 120 }}
    >
      <span className={props.className}>{props.children}</span>
    </motion.li>
  );
};

export default ListItem;
