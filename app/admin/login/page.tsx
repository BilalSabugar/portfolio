'use client';
import { useState, useEffect } from 'react';
import { useAuth } from '@/lib/auth-context';
import { ShieldAlert, Terminal, Lock, ChevronRight, AlertCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function LoginPage() {
  const { login } = useAuth();
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  
  // Visual state for the "boot up" effect
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    // Simulate system initialization
    const timer = setTimeout(() => setIsReady(true), 500);
    return () => clearTimeout(timer);
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');

    try {
      await login(email, pass);
      // Success is handled by the auth-context redirect
    } catch (err: any) {
      console.error("LOGIN_FAILURE_LOG:", err);
      
      // Map Firebase errors to "System" speak
      let errorMessage = 'ACCESS DENIED: UNKNOWN ERROR';
      if (err.code === 'auth/invalid-credential') errorMessage = 'ERR_401: INVALID_CREDENTIALS';
      if (err.code === 'auth/user-not-found') errorMessage = 'ERR_404: USER_IDENTITY_UNKNOWN';
      if (err.code === 'auth/wrong-password') errorMessage = 'ERR_403: INCORRECT_KEY_SEQUENCE';
      if (err.code === 'auth/too-many-requests') errorMessage = 'ERR_429: RATE_LIMIT_EXCEEDED';

      setError(errorMessage);
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4 relative overflow-hidden">
      
      {/* 1. Background Grid & Scanline (Inherited from global but reinforced here for depth) */}
      <div className="absolute inset-0 bg-grid z-0 opacity-50" />
      
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, ease: "circOut" }}
        className="w-full max-w-md bg-[#09090b] border border-[#27272a] relative z-10 shadow-2xl"
      >
        {/* TOP BAR */}
        <div className="h-1 w-full bg-accent/20 relative overflow-hidden">
            {isLoading && (
                 <motion.div 
                    initial={{ x: "-100%" }}
                    animate={{ x: "100%" }}
                    transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
                    className="absolute top-0 left-0 h-full w-1/2 bg-accent"
                 />
            )}
        </div>

        <div className="p-8 space-y-8">
            
            {/* HEADER */}
            <div className="flex items-start justify-between">
                <div className="space-y-1">
                    <div className="flex items-center gap-2 text-accent">
                        <ShieldAlert className="w-5 h-5" />
                        <span className="font-mono text-xs tracking-[0.2em] font-bold">SECURE_GATEWAY</span>
                    </div>
                    <p className="text-[#a1a1aa] text-xs font-mono">
                        Identity verification required.
                    </p>
                </div>
                <div className="p-2 border border-[#27272a] bg-[#18181b]">
                    <Lock className="w-4 h-4 text-[#a1a1aa]" />
                </div>
            </div>

            {/* FORM */}
            <form onSubmit={handleSubmit} className="space-y-5">
                
                {/* Email Input */}
                <div className="group space-y-2">
                    <label className="text-[10px] font-mono text-[#a1a1aa] uppercase tracking-wider group-focus-within:text-accent transition-colors">
                        Operator ID
                    </label>
                    <div className="relative flex items-center">
                        <span className="absolute left-3 text-[#52525b] font-mono select-none">{'>'}</span>
                        <input
                            type="email"
                            required
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="w-full bg-[#18181b] border border-[#27272a] py-3 pl-8 pr-3 text-sm font-mono text-white placeholder-[#52525b] focus:outline-none focus:border-accent focus:bg-accent/5 transition-all"
                            placeholder="root@system.local"
                            autoComplete="username"
                        />
                    </div>
                </div>

                {/* Password Input */}
                <div className="group space-y-2">
                    <label className="text-[10px] font-mono text-[#a1a1aa] uppercase tracking-wider group-focus-within:text-accent transition-colors">
                        Access Key
                    </label>
                    <div className="relative flex items-center">
                         <span className="absolute left-3 text-[#52525b] font-mono select-none">{'>'}</span>
                        <input
                            type="password"
                            required
                            value={pass}
                            onChange={(e) => setPass(e.target.value)}
                            className="w-full bg-[#18181b] border border-[#27272a] py-3 pl-8 pr-3 text-sm font-mono text-white placeholder-[#52525b] focus:outline-none focus:border-accent focus:bg-accent/5 transition-all"
                            placeholder="••••••••••••"
                            autoComplete="current-password"
                        />
                    </div>
                </div>

                {/* Error Display */}
                <AnimatePresence>
                    {error && (
                        <motion.div 
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            className="overflow-hidden"
                        >
                            <div className="flex items-center gap-2 p-3 bg-red-500/10 border border-red-500/20 text-red-400 text-xs font-mono">
                                <AlertCircle className="w-3 h-3 flex-shrink-0" />
                                <span>{error}</span>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>

                {/* Submit Button */}
                <button
                    type="submit"
                    disabled={isLoading}
                    className="w-full bg-white text-black font-bold h-12 hover:bg-accent hover:text-black transition-all flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed group relative overflow-hidden"
                >
                    <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                    <span className="relative z-10 flex items-center gap-2 font-mono text-xs tracking-widest">
                        {isLoading ? (
                            <>Verifying Hash...</>
                        ) : (
                            <>INITIATE SESSION <ChevronRight className="w-3 h-3" /></>
                        )}
                    </span>
                </button>
            </form>

            {/* FOOTER */}
            <div className="pt-6 border-t border-[#27272a] flex justify-between items-center text-[10px] font-mono text-[#52525b]">
                <div className="flex items-center gap-1">
                    <div className={`w-1.5 h-1.5 rounded-full ${isReady ? 'bg-green-500' : 'bg-red-500'}`} />
                    <span>SYSTEM STATUS: {isReady ? 'ONLINE' : 'BOOTING'}</span>
                </div>
                <span>ENCRYPTION: AES-256</span>
            </div>
        </div>
      </motion.div>
    </div>
  );
}