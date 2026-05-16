import React, { useState } from "react";
import { Send, Mail, Terminal, Shield, Lock } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { ContactFormData } from "../types";

const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState<ContactFormData>({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [formStatus, setFormStatus] = useState<{
    submitted: boolean;
    success: boolean;
    message: string;
  }>({
    submitted: false,
    success: false,
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Simulate form submission
    setFormStatus({
      submitted: true,
      success: false,
      message: "Sending message...",
    });

    // Mock API call with timeout
    setTimeout(() => {
      console.log("Form submitted:", formData);
      setFormStatus({
        submitted: true,
        success: true,
        message: "Message sent successfully! I'll get back to you soon.",
      });

      // Reset form
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });

      // Clear success message after 5 seconds
      setTimeout(() => {
        setFormStatus((prev) => ({ ...prev, submitted: false, message: "" }));
      }, 5000);
    }, 1000);
  };

  return (
    <section id="contact" className="py-20 relative bg-slate-50 dark:bg-[#0a0f18] overflow-hidden">
      {/* Decorative blurred background elements for a tech aesthetic */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl opacity-50 pointer-events-none"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl opacity-50 pointer-events-none"></div>
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5 dark:opacity-20 pointer-events-none"></div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-100 dark:bg-cyan-900/30 text-cyan-800 dark:text-cyan-300 text-sm font-semibold tracking-wider mb-4 border border-cyan-200 dark:border-cyan-800/50 shadow-[0_0_15px_rgba(6,182,212,0.2)]">
            <Shield className="w-4 h-4" />
            <span>SECURE COMM_CHANNEL</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-slate-900 dark:text-white tracking-tight">
            Establish Connection
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-blue-600 mx-auto mb-8 shadow-[0_0_10px_rgba(6,182,212,0.5)]"></div>
          <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto font-medium">
            Whether inquiring about cloud architecture vulnerabilities, automated threat detection, or professional engagements, you can initiate a secure transmission here.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 max-w-6xl mx-auto">
          {/* Contact Form - Taking up 3 columns */}
          <div className="lg:col-span-3 bg-white/70 dark:bg-[#0f172a]/80 backdrop-blur-md rounded-2xl border border-slate-200 dark:border-slate-800 shadow-xl overflow-hidden">
            {/* Window Header */}
            <div className="flex items-center px-4 py-3 bg-slate-100/80 dark:bg-[#1e293b]/90 border-b border-slate-200 dark:border-slate-800">
              <div className="flex gap-2 mr-4">
                <div className="w-3 h-3 rounded-full bg-red-400/80"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-400/80"></div>
                <div className="w-3 h-3 rounded-full bg-green-400/80"></div>
              </div>
              <div className="flex items-center gap-2 text-xs font-mono text-slate-500 dark:text-slate-400">
                <Terminal className="w-3 h-3" />
                <span>~/secure-form.sh</span>
              </div>
            </div>

            <div className="p-8">
              <h3 className="text-2xl font-bold mb-8 text-slate-800 dark:text-white flex items-center gap-2 tracking-wide">
                <Lock className="w-5 h-5 text-cyan-500" />
                TRANSMIT SECURE DATA
              </h3>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-xs font-mono text-slate-500 dark:text-slate-400 mb-2 uppercase tracking-widest"
                    >
                      &gt; Identifier
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg border border-slate-300 dark:border-slate-700 bg-white/50 dark:bg-[#0f172a] text-slate-900 dark:text-slate-100 focus:outline-none focus:ring-2 focus:ring-cyan-500/50 focus:border-cyan-500 transition-all font-mono text-sm"
                      placeholder="GUEST_USER"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="block text-xs font-mono text-slate-500 dark:text-slate-400 mb-2 uppercase tracking-widest"
                    >
                      &gt; Return_Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg border border-slate-300 dark:border-slate-700 bg-white/50 dark:bg-[#0f172a] text-slate-900 dark:text-slate-100 focus:outline-none focus:ring-2 focus:ring-cyan-500/50 focus:border-cyan-500 transition-all font-mono text-sm"
                      placeholder="user@system.local"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="subject"
                    className="block text-xs font-mono text-slate-500 dark:text-slate-400 mb-2 uppercase tracking-widest"
                  >
                    &gt; Payload_Title
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-slate-300 dark:border-slate-700 bg-white/50 dark:bg-[#0f172a] text-slate-900 dark:text-slate-100 focus:outline-none focus:ring-2 focus:ring-cyan-500/50 focus:border-cyan-500 transition-all font-mono text-sm"
                    placeholder="Vulnerability Report / Inquiry"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-xs font-mono text-slate-500 dark:text-slate-400 mb-2 uppercase tracking-widest"
                  >
                    &gt; Encrypted_Payload
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 rounded-lg border border-slate-300 dark:border-slate-700 bg-white/50 dark:bg-[#0f172a] text-slate-900 dark:text-slate-100 focus:outline-none focus:ring-2 focus:ring-cyan-500/50 focus:border-cyan-500 transition-all font-mono text-sm resize-none"
                    placeholder="Enter payload contents here..."
                  ></textarea>
                </div>

                {/* Form Status Message */}
                {formStatus.submitted && (
                  <div
                    className={`p-4 rounded-lg font-mono text-sm flex items-center gap-3 border ${
                      formStatus.success
                        ? "bg-green-100 dark:bg-green-900/20 text-green-800 dark:text-green-300 border-green-200 dark:border-green-800/50"
                        : "bg-cyan-100 dark:bg-cyan-900/20 text-cyan-800 dark:text-cyan-300 border-cyan-200 dark:border-cyan-800/50"
                    }`}
                  >
                    {!formStatus.success && <div className="w-4 h-4 border-2 border-cyan-500 border-t-transparent rounded-full animate-spin"></div>}
                    {formStatus.message}
                  </div>
                )}

                <button
                  type="submit"
                  disabled={formStatus.submitted && !formStatus.success}
                  className="w-full sm:w-auto px-8 py-3 bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 text-white font-mono font-semibold rounded-lg flex items-center justify-center gap-2 transition-all shadow-[0_0_15px_rgba(6,182,212,0.3)] hover:shadow-[0_0_25px_rgba(6,182,212,0.5)] focus:ring-2 focus:ring-offset-2 focus:ring-cyan-500 dark:focus:ring-offset-[#0f172a] disabled:opacity-70 disabled:cursor-not-allowed uppercase tracking-wider relative overflow-hidden group"
                >
                  <span className="absolute inset-0 w-full h-full bg-white/20 transform -translate-x-full group-hover:animate-[shimmer_1.5s_infinite]"></span>
                  <Send className="w-4 h-4 relative z-10" />
                  <span className="relative z-10">Execute Transfer</span>
                </button>
              </form>
            </div>
          </div>

          {/* Contact Information - Taking up 2 columns */}
          <div className="lg:col-span-2 flex flex-col gap-6">
            {/* Info Card */}
            <div className="bg-white/70 dark:bg-[#0f172a]/80 backdrop-blur-md rounded-2xl border border-slate-200 dark:border-slate-800 shadow-xl p-8 flex-1">
              <h3 className="text-xl font-bold mb-8 text-slate-800 dark:text-white uppercase tracking-wider border-b border-slate-200 dark:border-slate-700 pb-4">
                Node Info
              </h3>

              <div className="space-y-8">
                <div className="group">
                  <h4 className="text-xs font-mono text-slate-500 dark:text-slate-400 mb-3 uppercase tracking-widest flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-cyan-500"></span>
                    Direct Access
                  </h4>
                  <a
                    href="mailto:prajwal5809@gmail.com"
                    className="flex text-slate-700 dark:text-slate-300 hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors font-mono text-sm bg-slate-100 dark:bg-[#1e293b] p-3 rounded-lg border border-transparent hover:border-cyan-200 dark:hover:border-cyan-800"
                  >
                    <Mail className="w-5 h-5 mr-3 text-cyan-500" />
                    prajwal5809@gmail.com
                  </a>
                </div>

                <div>
                  <h4 className="text-xs font-mono text-slate-500 dark:text-slate-400 mb-3 uppercase tracking-widest flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-500"></span>
                    Professional Network
                  </h4>
                  <a
                    href="https://www.linkedin.com/in/prajwal-kumar-pandey-215568280"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors font-mono text-sm bg-slate-100 dark:bg-[#1e293b] p-3 rounded-lg border border-transparent hover:border-blue-200 dark:hover:border-blue-800"
                  >
                    <FaLinkedin className="w-5 h-5 mr-3 text-blue-500" />
                    linkedin.com/in/prajwal-kumar-pandey...
                  </a>
                </div>

                <div>
                  <h4 className="text-xs font-mono text-slate-500 dark:text-slate-400 mb-3 uppercase tracking-widest flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-purple-500"></span>
                    Code Repositories
                  </h4>
                  <a
                    href="https://github.com/Prajwal-kp"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex text-slate-700 dark:text-slate-300 hover:text-purple-600 dark:hover:text-purple-400 transition-colors font-mono text-sm bg-slate-100 dark:bg-[#1e293b] p-3 rounded-lg border border-transparent hover:border-purple-200 dark:hover:border-purple-800"
                  >
                    <FaGithub className="w-5 h-5 mr-3 text-purple-500" />
                    github.com/Prajwal-kp
                  </a>
                </div>
              </div>
              
              {/* Decorative graphic */}
              <div className="mt-10 pt-8 border-t border-slate-200 dark:border-slate-800 hidden sm:block">
                <div className="flex gap-2 justify-center opacity-30 dark:opacity-40">
                   {[...Array(20)].map((_, i) => (
                     <div key={i} className={`h-8 w-1 rounded-full ${Math.random() > 0.5 ? 'bg-cyan-500' : 'bg-slate-400'} ${Math.random() > 0.7 ? 'h-12' : ''} ${Math.random() > 0.8 ? 'h-16' : ''}`}></div>
                   ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
{/* Custom Shimmer Animation */}
<style>{`
  @keyframes shimmer {
    100% {
      transform: translateX(100%);
    }
  }
`}</style>
    </section>
  );
};

export default ContactSection;
