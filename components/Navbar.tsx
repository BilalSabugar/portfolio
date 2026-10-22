'use client';
import { motion } from 'framer-motion';
import Link from 'next/link';

export default function Navbar() {
  return (
    <motion.nav 
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="fixed top-0 left-0 w-full z-50 px-8 py-6 flex justify-between items-center backdrop-blur-sm border-b border-white/5"
    >
      <div className="text-sm font-mono text-secondary tracking-widest">
        // SYSTEM_V.1.0
      </div>
      <div className="flex gap-8 text-sm font-medium text-secondary">
        {['Projects', 'Timeline', 'Blog', 'Contact'].map((item) => (
          <Link 
            key={item} 
            href={`/${item.toLowerCase()}`}
            className="hover:text-white transition-colors duration-300 relative group"
          >
            {item}
            <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-accent transition-all duration-300 group-hover:w-full" />
          </Link>
        ))}
      </div>
    </motion.nav>
  );
}