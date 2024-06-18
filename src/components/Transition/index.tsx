import { motion } from "framer-motion";

const Transition = () => {
  const transitionVariants = {
    initial: {
      x: "100%",
      width: "100%",
    },
    animate: {
      x: "0%",
      width: "0%",
    },
    exit: {
      x: ["100%", "100%"],
      width: ["100%", "100%"],
    },
  };
  return (
    <>
      <motion.div
        className="fixed bottom-0 right-full top-0 z-40 h-screen w-screen bg-[#0b0d0e]"
        variants={transitionVariants}
        initial="initial"
        animate="animate"
        exit="exit"
        transition={{ delay: 0.1, duration: 0.3, ease: "easeInOut" }}
      ></motion.div>
      <motion.div
        className="fixed bottom-0 right-full top-0 z-30 h-screen w-screen bg-[#0d1011]"
        variants={transitionVariants}
        initial="initial"
        animate="animate"
        exit="exit"
        transition={{ delay: 0.2, duration: 0.3, ease: "easeInOut" }}
      ></motion.div>
      <motion.div
        className="fixed bottom-0 right-full top-0 z-20 h-screen w-screen bg-[#111214]"
        variants={transitionVariants}
        initial="initial"
        animate="animate"
        exit="exit"
        transition={{ delay: 0.3, duration: 0.3, ease: "easeInOut" }}
      ></motion.div>
    </>
  );
};

export default Transition;
