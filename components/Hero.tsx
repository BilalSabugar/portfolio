'use client';
import { motion, useScroll, useTransform } from 'framer-motion';

export default function Hero() {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, 200]); // Parallax text
  const opacity = useTransform(scrollY, [0, 300], [1, 0]); // Fade out on scroll

  return (
    <section className="h-screen w-full flex flex-col justify-center items-center px-4 relative overflow-hidden">
      
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-accent opacity-[0.15] blur-[120px] rounded-full pointer-events-none" />

      <motion.div 
        style={{ y, opacity }}
        className="z-10 text-center"
      >
        <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: "circOut" }}
            className="mb-6"
        >
            <span className="py-1 px-3 border border-white/10 rounded-full text-xs font-mono text-accent bg-accent-dim">
                AVAILABLE FOR HIRE
            </span>
        </motion.div>

        <h1 className="text-6xl md:text-8xl font-bold tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white to-white/40 mb-6">
          ARCHITECTING<br />INTELLIGENCE
        </h1>
        
        <p className="text-secondary max-w-lg mx-auto text-lg md:text-xl leading-relaxed">
          I design autonomous systems, high-performance backends, 
          and immersive interfaces.
        </p>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-[10px] font-mono text-secondary tracking-[0.2em]">INITIALIZE</span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-accent to-transparent" />
      </motion.div>
    </section>
  );
}