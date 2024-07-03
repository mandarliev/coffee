import { motion } from "framer-motion";

export const RunningText = ({ color, align }) => {
  return (
    <motion.p
      variants={textContainer}
      initial="hidden"
      whileInView="show"
      className={`${
        color && align
          ? "text-[#7d7d7d] text-left"
          : "text-center text-gray-500"
      } mt-10 font-semibold`}
    ></motion.p>
  );
};
