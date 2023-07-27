import React from 'react';
import { AnimatePresence, motion } from 'framer-motion';

export const AnimatedComponent = ({ children }) => {
    const variants = {
        hidden: {
            y: '100%', // Start position, hidden below the screen
            opacity: 0,
        },
        visible: {
            y: 0, // End position, at the top of the screen
            opacity: 1,
        },
    };

    return (
        <AnimatePresence>
            <motion.div initial="hidden" animate="visible" variants={variants}>
                    {children}
            </motion.div>
        </AnimatePresence>
    );
};

export default AnimatedComponent;
