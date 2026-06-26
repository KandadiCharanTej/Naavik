'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { cn } from '@/lib/utils'

export const premiumEasing = [0.16, 1, 0.3, 1] as const

export const revealVariants = {
  fadeUp: {
    hidden: { opacity: 0, y: 24 },
    visible: { opacity: 1, y: 0 },
  },
  fadeLeft: {
    hidden: { opacity: 0, x: 24 },
    visible: { opacity: 1, x: 0 },
  },
  fadeRight: {
    hidden: { opacity: 0, x: -24 },
    visible: { opacity: 1, x: 0 },
  },
  scaleIn: {
    hidden: { opacity: 0, scale: 0.95 },
    visible: { opacity: 1, scale: 1 },
  },
}

export function Reveal({
  children,
  className,
  delay = 0,
  as = 'div',
  variant = 'fadeUp',
}: {
  children: React.ReactNode
  className?: string
  delay?: number
  as?: 'div' | 'section' | 'span' | 'li'
  variant?: keyof typeof revealVariants
}) {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '0px 0px -40px 0px' })

  const MotionComponent = as === 'section'
    ? motion.section
    : as === 'span'
    ? motion.span
    : as === 'li'
    ? motion.li
    : motion.div

  return (
    <MotionComponent
      ref={ref as any}
      className={cn(className)}
      variants={revealVariants[variant]}
      initial="hidden"
      animate={inView ? 'visible' : 'hidden'}
      transition={{
        duration: 0.7,
        ease: premiumEasing,
        delay: delay / 1000,
      }}
    >
      {children}
    </MotionComponent>
  )
}

// ─── Stagger Container for Grids / Lists ────────────────────────

const staggerContainerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1,
    }
  }
}

export function StaggerContainer({
  children,
  className,
  as = 'div',
  delay = 0
}: {
  children: React.ReactNode
  className?: string
  as?: 'div' | 'ul' | 'ol'
  delay?: number
}) {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '0px 0px -40px 0px' })

  const MotionComponent = as === 'ul'
    ? motion.ul
    : as === 'ol'
    ? motion.ol
    : motion.div

  const variants = {
    ...staggerContainerVariants,
    visible: {
      ...staggerContainerVariants.visible,
      transition: {
        ...staggerContainerVariants.visible.transition,
        delayChildren: delay / 1000
      }
    }
  }

  return (
    <MotionComponent
      ref={ref as any}
      className={cn(className)}
      variants={variants}
      initial="hidden"
      animate={inView ? 'visible' : 'hidden'}
    >
      {children}
    </MotionComponent>
  )
}

export function StaggerItem({
  children,
  className,
  as = 'div',
  variant = 'fadeUp'
}: {
  children?: React.ReactNode
  className?: string
  as?: 'div' | 'li' | 'span'
  variant?: keyof typeof revealVariants
}) {
  const MotionComponent = as === 'li'
    ? motion.li
    : as === 'span'
    ? motion.span
    : motion.div

  return (
    <MotionComponent
      className={cn(className)}
      variants={revealVariants[variant]}
      transition={{
        duration: 0.6,
        ease: premiumEasing,
      }}
    >
      {children}
    </MotionComponent>
  )
}
