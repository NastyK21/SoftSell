"use client"

import { Input } from "@/components/ui/input"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { MessageCircle, X } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

export default function ChatBot() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            transition={{ duration: 0.2 }}
            className="fixed bottom-20 right-4 w-80 md:w-96 bg-background border rounded-lg shadow-lg overflow-hidden z-50"
          >
            <div className="bg-primary p-4 text-primary-foreground flex justify-between items-center">
              <h3 className="font-medium">Chat Support</h3>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsOpen(false)}
                className="h-8 w-8 text-primary-foreground"
              >
                <X className="h-4 w-4" />
              </Button>
            </div>
            <div className="p-4 h-80 overflow-y-auto flex flex-col space-y-4">
              <div className="bg-muted p-3 rounded-lg rounded-tl-none max-w-[80%] self-start">
                <p className="text-sm">Hello! How can I help you today?</p>
              </div>
              <div className="bg-primary/10 p-3 rounded-lg rounded-tr-none max-w-[80%] self-end">
                <p className="text-sm">I have a question about your services.</p>
              </div>
              <div className="bg-muted p-3 rounded-lg rounded-tl-none max-w-[80%] self-start">
                <p className="text-sm">
                  Of course! I'd be happy to help. What would you like to know about our services?
                </p>
              </div>
            </div>
            <div className="p-4 border-t flex gap-2">
              <Input placeholder="Type your message..." className="flex-1" />
              <Button size="sm">Send</Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <Button
        onClick={() => setIsOpen(!isOpen)}
        className="h-12 w-12 rounded-full bg-primary hover:bg-primary/90"
        aria-label="Open chat"
      >
        <MessageCircle className="h-6 w-6" />
      </Button>
    </>
  )
}
