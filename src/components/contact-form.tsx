'use client'

import React, { useState, useEffect, useRef } from 'react';
import { Send, User, Mail, MessageCircle, CheckCircle } from 'lucide-react';

const ContactForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [focusedField, setFocusedField] = useState('');

    const formRef = useRef(null);
    const titleRef = useRef(null);

    useEffect(() => {
        // GSAP animations
        if (typeof window !== 'undefined' && window.gsap) {
            const tl = window.gsap.timeline();

            tl.fromTo(titleRef.current,
                { y: 30, opacity: 0 },
                { y: 0, opacity: 1, duration: 0.8, ease: "power3.out" }
            )
                .fromTo('.form-field',
                    { y: 20, opacity: 0 },
                    { y: 0, opacity: 1, duration: 0.6, stagger: 0.1, ease: "power2.out" },
                    "-=0.4"
                );
        }
    }, []);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsLoading(true);

        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 2000));

        setIsLoading(false);
        setIsSubmitted(true);

        // Reset form after 3 seconds
        setTimeout(() => {
            setIsSubmitted(false);
            setFormData({
                name: '',
                email: '',
                subject: '',
                message: ''
            });
        }, 3000);
    };

    const inputClasses = `
    w-full px-4 py-4 bg-white/5 border border-white/10 rounded-xl
    text-white placeholder-white/50 backdrop-blur-sm
    focus:outline-none focus:ring-2 focus:ring-[#14CF93]/50 focus:border-[#14CF93]/50
    transition-all duration-300 ease-out
    hover:border-white/20 hover:bg-white/8
  `;

    const labelClasses = `
    block text-sm font-medium text-white/80 mb-2
    transition-all duration-200
  `;

    if (isSubmitted) {
        return (
            <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900/20 to-slate-900 flex items-center justify-center p-4">
                <div className="max-w-md w-full bg-white/5 backdrop-blur-2xl border border-white/10 rounded-3xl p-8 text-center">
                    <div className="w-16 h-16 bg-[#14CF93]/20 rounded-full flex items-center justify-center mx-auto mb-6">
                        <CheckCircle className="w-8 h-8 text-[#14CF93]" />
                    </div>
                    <h2 className="text-2xl font-bold text-white mb-4">Message Sent!</h2>
                    <p className="text-white/70">Thank you for reaching out. I&apos;ll get back to you soon.</p>
                </div>
            </div>
        );
    }

    return (
        <div className="relative min-h-screen bg-gradient-to-br from-slate-900/70 via-zinc-900/70 to-slate-900 flex items-center justify-center p-4 sm:p-6 lg:p-8">
            <div className="max-w-2xl w-full">
                {/* Header */}
                <div ref={titleRef} className="text-center mb-12">
                    <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-white via-[#14CF93] to-white bg-clip-text text-transparent mb-4 leading-tight">
                        Let&apos;s Connect
                    </h1>
                    <p className="text-white/70 text-lg sm:text-xl max-w-md mx-auto leading-relaxed">
                        Have a project in mind? I&apos;d love to hear from you.
                    </p>
                </div>

                {/* Form Container */}
                <div className="bg-white/5 backdrop-blur-2xl border border-white/10 rounded-3xl p-6 sm:p-8 lg:p-12 shadow-2xl relative overflow-hidden">
                    {/* Decorative gradient border */}
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#14CF93]/20 to-transparent h-px"></div>
                    <form action="" onSubmit={handleSubmit} ref={formRef} className="relative z-10">

                        <div ref={formRef} className="space-y-6">
                            {/* Name and Email Row */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="form-field">
                                    <label htmlFor="name" className={labelClasses}>
                                        <User className="w-4 h-4 inline mr-2" />
                                        Full Name
                                    </label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleInputChange}
                                        onFocus={() => setFocusedField('name')}
                                        onBlur={() => setFocusedField('')}
                                        placeholder="Your name"
                                        required
                                        className={`${inputClasses} ${focusedField === 'name' ? 'scale-[1.02] bg-white/8' : ''}`}
                                    />
                                </div>

                                <div className="form-field">
                                    <label htmlFor="email" className={labelClasses}>
                                        <Mail className="w-4 h-4 inline mr-2" />
                                        Email Address
                                    </label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleInputChange}
                                        onFocus={() => setFocusedField('email')}
                                        onBlur={() => setFocusedField('')}
                                        placeholder="your@email.com"
                                        required
                                        className={`${inputClasses} ${focusedField === 'email' ? 'scale-[1.02] bg-white/8' : ''}`}
                                    />
                                </div>
                            </div>

                            {/* Subject */}
                            <div className="form-field">
                                <label htmlFor="subject" className={labelClasses}>
                                    <MessageCircle className="w-4 h-4 inline mr-2" />
                                    Subject
                                </label>
                                <input
                                    type="text"
                                    id="subject"
                                    name="subject"
                                    value={formData.subject}
                                    onChange={handleInputChange}
                                    onFocus={() => setFocusedField('subject')}
                                    onBlur={() => setFocusedField('')}
                                    placeholder="What's this about?"
                                    required
                                    className={`${inputClasses} ${focusedField === 'subject' ? 'scale-[1.02] bg-white/8' : ''}`}
                                />
                            </div>

                            {/* Message */}
                            <div className="form-field">
                                <label htmlFor="message" className={labelClasses}>
                                    Message
                                </label>
                                <textarea
                                    id="message"
                                    name="message"
                                    value={formData.message}
                                    onChange={handleInputChange}
                                    onFocus={() => setFocusedField('message')}
                                    onBlur={() => setFocusedField('')}
                                    placeholder="Tell me about your project or just say hello..."
                                    required
                                    rows={6}
                                    className={`${inputClasses} resize-none ${focusedField === 'message' ? 'scale-[1.02] bg-white/8' : ''}`}
                                />
                            </div>

                            {/* Submit Button */}
                            <div className="form-field pt-4">
                                <button
                                    type="submit"
                                    disabled={isLoading}
                                    className="w-full bg-gradient-to-r from-[#14CF93] to-[#0ea471] hover:from-[#0ea471] hover:to-[#14CF93] 
                         text-white font-semibold py-4 px-6 rounded-xl 
                         transition-all duration-300 ease-out
                         hover:scale-[1.02] hover:shadow-lg hover:shadow-[#14CF93]/25
                         disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100
                         focus:outline-none focus:ring-2 focus:ring-[#14CF93]/50 focus:ring-offset-2 focus:ring-offset-transparent
                         active:scale-[0.98] flex items-center justify-center space-x-2"
                                >
                                    {isLoading ? (
                                        <>
                                            <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                                            <span>Sending...</span>
                                        </>
                                    ) : (
                                        <>
                                            <Send className="w-5 h-5" />
                                            <span>Send Message</span>
                                        </>
                                    )}
                                </button>
                            </div>
                        </div>
                    </form>

                    {/* Decorative elements */}
                    <div className="absolute -top-4 -right-4 w-24 h-24 bg-[#14CF93]/10 rounded-full blur-xl"></div>
                    <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-purple-500/10 rounded-full blur-2xl"></div>
                </div>

                {/* Footer */}
                <div className="text-center mt-8 text-white/50 text-sm">
                    <p>I typically respond within 24 hours</p>
                </div>
            </div>


        </div>
    );
};

export default ContactForm;