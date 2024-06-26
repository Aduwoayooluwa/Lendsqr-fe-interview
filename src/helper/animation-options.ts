export const dropdownAnimation = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: { opacity: 1, scale: 1 }
};


export const loginContainerVariants = {
    hidden: { opacity: 0, x: -200 },
    visible: {
        opacity: 1,
        x: 0,
        transition: { type: 'spring', stiffness: 120 }
    },
    exit: {
        x: -200,
        opacity: 0,
        transition: { ease: 'easeInOut' }
    }
};