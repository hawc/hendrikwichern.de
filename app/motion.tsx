'use client';

import { Box } from '@/components/box';
import { motion } from 'framer-motion';
import { forwardRef } from 'react';


const Component = forwardRef((props: { children: React.ReactElement[] | React.ReactElement | string, dashed?: boolean, highlighted?: boolean }, ref: React.Ref<any> | undefined) => {
  return <Box ref={ref} {...props}>{props.children}</Box>;
});
Component.displayName = "MotionBox";

const MotionComponent = motion(Component);

export function MotionBox(props: { children: React.ReactElement[] | React.ReactElement | string, dashed?: boolean, highlighted?: boolean }): React.ReactElement {
  return (
    <MotionComponent
      initial={{ x: -(Math.random() * 20), opacity: 0.5 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.5, type: "easeOut" }}
      {...props}>
      {props.children}
    </MotionComponent>
  );
}
