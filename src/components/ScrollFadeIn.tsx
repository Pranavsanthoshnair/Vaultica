import React, { PropsWithChildren } from 'react';
import { motion, HTMLMotionProps } from 'framer-motion';

interface ScrollFadeInProps extends HTMLMotionProps<'div'> {
  once?: boolean;
  delay?: number;
  distance?: number;
}

/**
 * Simple wrapper that fades & slides children upward when they enter the viewport.
 * Keeps default framer‐motion props open so caller can override if desired.
 */
const ScrollFadeIn: React.FC<PropsWithChildren<ScrollFadeInProps>> = ({
  children,
  once = true,
  delay = 0,
  distance = 30,
  ...rest
}) => (
  <motion.div
    initial={{ opacity: 0, y: distance }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8, delay }}
    viewport={{ once, amount: 0.2 }}
    {...rest}
  >
    {children}
  </motion.div>
);

export default ScrollFadeIn;
