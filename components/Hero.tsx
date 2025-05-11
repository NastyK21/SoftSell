"use client"

import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { AnimatedButton } from "@/components/ui/animated-section"
import Image from "next/image"


export default function Hero() {
  return (
    <div className="relative overflow-hidden bg-gradient-to-b from-background to-muted/30 py-20 md:py-32">
      <div className="container px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
          <motion.div
            className="flex flex-col justify-center space-y-4"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                <motion.span
                  className="gradient-text"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3, duration: 0.7 }}
                >
                  Sell Your Unused Software
                </motion.span>{" "}
                <motion.span
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5, duration: 0.7 }}
                >
                  Licenses Easily
                </motion.span>
              </h1>
              <motion.p
                className="max-w-[600px] text-muted-foreground md:text-xl"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.7, duration: 0.7 }}
              >
                SoftSell helps businesses unlock hidden value by reselling unused software licenses securely and quickly.
              </motion.p>
            </div>
            <motion.div
              className="flex flex-col gap-2 min-[400px]:flex-row"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9, duration: 0.5 }}
            >
              <AnimatedButton>
                <Button className="bg-tech-blue-600 hover:bg-tech-blue-700">Sell My Licenses</Button>
              </AnimatedButton>
              <AnimatedButton>
                <Button variant="outline">Get a Quote</Button>
              </AnimatedButton>
            </motion.div>
          </motion.div>
          <motion.div
            className="flex items-center justify-center"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5, duration: 0.7, type: "spring", stiffness: 100 }}
          >
            <div className="relative aspect-video overflow-hidden rounded-xl border bg-background p-2 md:p-4 lg:p-6">
              {/* Placeholder Image */}
              <div className="h-full w-full bg-muted/50 rounded-lg flex items-center justify-center text-muted-foreground text-sm">
                <Image
                  src="/product.png"
                  alt="Product Dashboard Screenshot"
                  width={800} // Adjust based on actual design
                  height={450} // Adjust based on actual design
                  className="h-full w-full object-cover rounded-lg"
                />


              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Abstract background animation */}
      <motion.div
        className="absolute -top-40 -right-40 h-80 w-80 rounded-full bg-tech-blue-500/10 blur-3xl"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
      />
      <motion.div
        className="absolute -bottom-40 -left-40 h-80 w-80 rounded-full bg-tech-blue-500/10 blur-3xl"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5, delay: 0.3 }}
      />
    </div>
  )
}
