"use client"

import type React from "react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Phone, Mail, MapPin, Send } from "lucide-react"
import { useState } from "react"

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // WhatsApp integration
    const whatsappMessage = `Olá! Meu nome é ${formData.name}. ${formData.message}`
    const whatsappUrl = `https://wa.me/244930184929?text=${encodeURIComponent(whatsappMessage)}`
    window.open(whatsappUrl, "_blank")
  }

  const handleWhatsAppClick = () => {
    window.open("https://wa.me/244930184929", "_blank")
  }

  return (
    <section className="py-24 bg-gradient-to-b from-white to-gray-50">
   
  


    </section>
  )
}
