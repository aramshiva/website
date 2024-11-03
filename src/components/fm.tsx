import React from 'react';
import { motion } from 'framer-motion';

interface BlurWrapperProps {
    children: React.ReactNode;
}

const BlurWrapper: React.FC<BlurWrapperProps> = ({ children }) => (
    <>
    {/*
    <motion.div
        initial={{ filter: 'blur(10px)' }}
        animate={{ filter: 'blur(0px)' }}
        transition={{ duration: 1 }}
    >
        // uncomment once framer-motion has react 19 support
    */}
        {children}
    {/*
    </motion.div>
    */}
    </>
);

export default BlurWrapper;