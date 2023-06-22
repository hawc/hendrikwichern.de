'use client';

import { Box } from '@/components/box';
import { motion } from 'framer-motion';
import { forwardRef } from 'react';


const Component = forwardRef((props: { children: React.ReactElement[] | React.ReactElement | string, dashed?: boolean, highlighted?: boolean }, ref: React.Ref<any> | undefined) => {
  return <Box ref={ref} {...props}>{props.children}</Box>;
});
Component.displayName = "MotionBox";

export const MotionBox = motion(Component);
