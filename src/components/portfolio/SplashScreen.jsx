import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Code2 } from "lucide-react";

export default function SplashScreen({ name = "", logoUrl = "", onFinish }) {
  React.useEffect(() => {
    const t = setTimeout(() => onFinish && onFinish(), 1800);
    return () => clearTimeout(t);
  }, [onFinish]);

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 1 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="fixed inset-0 z-[60] bg-slate-950 flex items-center justify-center"
        onClick={() => onFinish && onFinish()}
      >
        {/* Background blobs */}
        <div className="absolute top-1/3 left-1/2 w-80 h-80 -translate-x-1/2 -translate-y-1/2 bg-indigo-600/15 rounded-full blur-3xl" />
        <div className="absolute bottom-1/3 left-1/3 w-64 h-64 bg-violet-600/10 rounded-full blur-3xl" />

        <div className="flex flex-col items-center gap-5 select-none z-10">
          <motion.div
            className="relative"
            initial={{ scale: 0.7, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6, ease: [0.34, 1.56, 0.64, 1] }}
          >
            {/* Glow ring */}
            <div className="absolute -inset-3 bg-gradient-to-br from-indigo-500 to-violet-500 rounded-2xl opacity-30 blur-xl" />
            <div className="absolute -inset-1 bg-gradient-to-br from-indigo-400 to-violet-500 rounded-2xl opacity-50" />
            <div className="relative w-24 h-24 rounded-2xl bg-gradient-to-br from-indigo-500 to-violet-600 flex items-center justify-center shadow-[0_0_32px_rgba(99,102,241,0.5)]">
              <Code2 className="w-12 h-12 text-white" strokeWidth={2} />
            </div>
          </motion.div>

          <motion.h1
            className="text-2xl font-bold text-white"
            initial={{ y: 12, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            {name}
          </motion.h1>

          <motion.p
            className="text-sm text-indigo-400 font-medium tracking-widest uppercase"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.35 }}
          >
            Flutter Developer
          </motion.p>

          {/* Progress bar */}
          <motion.div
            className="h-0.5 w-32 bg-slate-800 rounded-full overflow-hidden mt-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            <motion.div
              className="h-full bg-gradient-to-r from-indigo-500 to-violet-500 rounded-full"
              initial={{ width: 0 }}
              animate={{ width: "100%" }}
              transition={{ duration: 1.2, ease: "easeOut", delay: 0.4 }}
            />
          </motion.div>

          <motion.p
            className="text-xs text-slate-600 mt-1"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            Tap to skip
          </motion.p>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
