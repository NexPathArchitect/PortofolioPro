"use client"; 
import { motion } from "framer-motion";
import Hero from "./Hero";

export default function HeroMotion() {
  return (
   <motion.div
      initial={{ opacity: 0, y: 150, scale: 0.85 }}   
      whileInView={{ opacity: 1, y: 0, scale: 1 }}  
      transition={{ duration: 1.5, ease: "easeOut" }} 
      viewport={{ once: true }}
    >
      <Hero />
    </motion.div>
  );
}
