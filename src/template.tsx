import React from 'react';
import { AnimatePresence, motion } from 'framer-motion';

interface TransitionWrapperProps {
    children: React.ReactNode;
}

const pageVariants = {
    initial: {
        opacity: 0,
        x: "-100vw",
        scale: 0.8
    },
    in: {
        opacity: 1,
        x: 0,
        scale: 1
    },
    out: {
        opacity: 0,
        x: "100vw",
        scale: 1.2
    }
};

const pageTransition = {
    type: "tween",
    ease: "anticipate",
    duration: 1.2
};

const TransitionWrapper: React.FC<TransitionWrapperProps> = ({ children }) => {
    return (
        <AnimatePresence>
            <motion.div
                key="page"
                initial="initial"
                animate="in"
                exit="out"
                variants={pageVariants}
                transition={pageTransition}
            >
                {children}
            </motion.div>
        </AnimatePresence>
    );
};

export default TransitionWrapper;
