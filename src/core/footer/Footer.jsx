

import {
  MapPin,
  Phone,
  Mail,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Youtube,
  ArrowUp,
  GraduationCap,
  Users,
  BookOpen,
  Award,
  Send,
  ChevronRight
} from "lucide-react";
import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function FooterSection() {
  const [email, setEmail] = useState("");

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const socialLinks = [
    { icon: <Facebook className="w-4 h-4" />, href: "#", label: "Facebook" },
    { icon: <Twitter className="w-4 h-4" />, href: "#", label: "Twitter" },
    { icon: <Instagram className="w-4 h-4" />, href: "#", label: "Instagram" },
    { icon: <Linkedin className="w-4 h-4" />, href: "#", label: "LinkedIn" },
    { icon: <Youtube className="w-4 h-4" />, href: "#", label: "YouTube" }
  ];

  const quickLinks = [
    { name: "Grievance Redressal Form", link: "https://forms.gle/enEqryby3obN6ev97" , target: "_blank"},
    { name: "Online Grievance Portal", link: "/grievance-portal" },
    { name: "Anti Ragging Committee", link: "committee/Antiraaging%20Committee" },
    { name: "Internal Complainants Committee", link: "/committee/Internal%20Complaints%20Committee" },
    { name: "Equal Opportunity Committee", link: "#" },
    { name: "SC / ST / OBC Cell", link: "/cell/SC%20and%20ST%20OBC%20CELL" },
    { name: "Student Induction Program", link: "#" },
    { name: "Audit Report", link: "#" },
    { name: "RTI", link: "/rti" },
    { name: "Feedback Form", link: "#" }
  ];

  const information = [
    { name: "Online registration", link: "/online-registration" },
    { name: "Mandatory disclosure", link: "/aicte-mandatory-disclosure" },
    { name: "AICTE Approval Copy", link: "/aicte-approval-copy" },
    // { name: "Anna University Approval Copy", link: "#" },
    { name: "Prevention of Sexual Harassment (POSH)", link: "/posh" },
    { name: "HR Policy", link: "/hr-policy" },
    { name: "AICTE Guide Lines", link: "/aicte-guidelines" },
    { name: "UGC Guide Lines", link: "https://www.ugc.gov.in/Guideline" },
    // { name: "UGC Guide Lines", link: "/ugc-guidelines" },
    { name: "Anna University Approval Copy", link: "#" },
    { name: "Anna University Permanent Affiliation Copy", link: "permanant-affiliation" }
  ]

  const explore = [
    { name: "An Overview", link: "/overview" },
    { name: "Vision Mission", link: "/vision-mission" },
    { name: "Programme Offered", link: "/programme-offered" },
    // { name: "Campus Tour", link: "#" },
    { name: "Event Gallery", link: "/gallery" }
  ];


  return (
    <footer className="bg-slate-900">

      <div className="h-1 bg-gradient-to-r from-purple-600 via-purple-500 to-indigo-600"></div>

      <div className="relative w-full h-20 flex items-center justify-center">
        <div className="relative -translate-y-1/2 group h-full ">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-full blur-sm opacity-60 group-hover:opacity-80 transition-opacity duration-300 animate-pulse"></div>
          <div className="relative bg-gradient-to-r from-slate-800 to-slate-900 rounded-full p-0.5 h-full">
            <div className="bg-gradient-to-bl from-purple-600 via-purple-500 to-indigo-600 rounded-full px-8 h-full flex items-center justify-center backdrop-blur-sm border border-white/10">
              <div className="text-center">
                <div className="text-lg md:text-xl font-bold bg-gradient-to-r from-white via-blue-200 to-purple-200 bg-clip-text text-white leading-tight tracking-wide">
                  Knowledge talks
                  <span className="mx-2 text-purple-300">•</span>
                  <span className="bg-gradient-to-r from-cyan-200 via-blue-200 to-purple-200 bg-clip-text text-white font-light italic">
                    Wisdom listens
                  </span>
                </div>
              </div>
              <div className="absolute top-2 right-3 flex space-x-1">
                <div className="w-1 h-1 bg-blue-400/60 rounded-full animate-ping"></div>
                <div className="w-1 h-1 bg-purple-400/60 rounded-full animate-ping delay-75"></div>
              </div>
              <div className="absolute bottom-2 left-3 flex space-x-1">
                <div className="w-1 h-1 bg-cyan-400/60 rounded-full animate-ping delay-200"></div>
                <div className="w-1 h-1 bg-pink-400/60 rounded-full animate-ping delay-300"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main content area */}
      <div className="bg-gradient-to-br from-slate-900 via-purple-950/20 to-slate-900">
        <div className="max-w-7xl mx-auto px-6 py-10">

          {/* Institution Header */}
          <div className="border-b border-slate-700/50 pb-12 mb-12">
            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 bg-gradient-to-br from-purple-600 to-indigo-600 rounded-lg flex items-center justify-center shadow-lg">
                  <GraduationCap className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h2 className="text-3xl font-bold text-white mb-1">
                    Tagore Institute of Engineering and Technology
                  </h2>
                  <p className="text-purple-300 font-medium">Excellence in Engineering Education</p>
                </div>
              </div>
              <div className="flex items-center gap-4 lg:flex-shrink-0">
                <div className="hidden lg:block w-px h-16 bg-slate-700/50"></div>
                <div className="text-right">
                  <p className="text-slate-300 text-sm">Accredited by</p>
                  <p className="text-white font-semibold">AICTE & NAAC</p>
                </div>
              </div>
            </div>
          </div>

          {/* Main content grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">

            <div className="">
              <h3 className="text-lg font-semibold text-white mb-6 flex items-center gap-2">
                <div className="w-6 h-6 bg-purple-600 rounded flex items-center justify-center">
                  <MapPin className="w-3 h-3 text-white" />
                </div>
                Google Map
              </h3>

              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3908.4916887538234!2d78.72090607402858!3d11.58825224369729!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bab77005b17b78f%3A0xdbe1fb43e6f88ffb!2sTAGORE%20INSTITUTE%20OF%20ENGINEERING%20AND%20TECHNOLOGY!5e0!3m2!1sen!2sin!4v1754232470981!5m2!1sen!2sin"
                loading="lazy" className="w-full rounded-xl"
                referrerPolicy="no-referrer-when-downgrade"></iframe>
            </div>

            {/* Contact Information */}
            <div className="lg:col-span-1">
              <h3 className="text-lg font-semibold text-white mb-6 flex items-center gap-2">
                <div className="w-6 h-6 bg-purple-600 rounded flex items-center justify-center">
                  <MapPin className="w-3 h-3 text-white" />
                </div>
                Contact Information
              </h3>

              <div className="space-y-4">
                <div className="group">
                  <div className="flex items-start gap-3 p-4 rounded-lg border border-slate-800 hover:border-purple-600/50 hover:bg-slate-800/30 transition-all duration-300">
                    <MapPin className="w-4 h-4 text-purple-400 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="text-slate-300 text-sm leading-relaxed">
                        Deviyakurichi, Attur Taluk<br />
                        Salem District<br />
                        Tamil Nadu - 636112
                      </p>
                    </div>
                  </div>
                </div>

                <div className="group">
                  <div className="flex items-center gap-3 p-4 rounded-lg border border-slate-800 hover:border-purple-600/50 hover:bg-slate-800/30 transition-all duration-300">
                    <Phone className="w-4 h-4 text-purple-400" />
                    <p className="text-slate-300 text-sm">+91 9442700473</p>
                  </div>
                </div>

                <div className="group">
                  <div className="flex items-center gap-3 p-4 rounded-lg border border-slate-800 hover:border-purple-600/50 hover:bg-slate-800/30 transition-all duration-300">
                    <Mail className="w-4 h-4 text-purple-400" />
                    <Link to="mailto:info@tietech.ac.in" className="text-slate-300 text-sm hover:text-purple-300 transition-colors">
                      info@tietech.ac.in
                    </Link>
                  </div>
                </div>
              </div>
            </div>



            {/* Academic Departments */}
            {/* <div className="lg:col-span-1">
              <h3 className="text-lg font-semibold text-white mb-6 flex items-center gap-2">
                <div className="w-6 h-6 bg-purple-600 rounded flex items-center justify-center">
                  <Award className="w-3 h-3 text-white" />
                </div>
                Explore
              </h3>
              <ul className="space-y-2">
                {explore.slice(0, 6).map((data, index) => (
                  <li key={index}>
                    <Link
                      to={data?.link}
                      className="group flex items-center gap-2 py-2 px-3 rounded-md text-slate-300 hover:text-white hover:bg-slate-800/50 transition-all duration-200"
                    >
                      <ChevronRight className="w-3 h-3 text-purple-400 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                      <span className="text-sm">{data?.name}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div> */}
                    <div className="lg:col-span-1">
  <h3 className="text-lg font-semibold text-white mb-6 flex items-center gap-2">
    <div className="w-6 h-6 bg-purple-600 rounded flex items-center justify-center">
      <BookOpen className="w-3 h-3 text-white" />
    </div>
 Explore
  </h3>
  <ul className="space-y-0.5">
    {explore.map((data, index) => (
      <li key={index}>
        {data?.target === "_blank" ? (
          <a
            href={data?.link}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-2 py-2 px-3 rounded-md text-slate-300 hover:text-white hover:bg-slate-800/50 transition-all duration-200"
          >
            <ChevronRight className="w-3 h-3 text-purple-400 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
            <span className="text-sm">{data?.name}</span>
          </a>
        ) : (
          <Link
            to={data?.link}
            className="group flex items-center gap-2 py-2 px-3 rounded-md text-slate-300 hover:text-white hover:bg-slate-800/50 transition-all duration-200"
          >
            <ChevronRight className="w-3 h-3 text-purple-400 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
            <span className="text-sm">{data?.name}</span>
          </Link>
        )}
      </li>
    ))}
  </ul>
</div>

            {/* Newsletter & Connect */}
            <div className="lg:col-span-1">
              <h3 className="text-lg font-semibold text-white mb-6 flex items-center gap-2">
                <div className="w-6 h-6 bg-purple-600 rounded flex items-center justify-center">
                  <Users className="w-3 h-3 text-white" />
                </div>
                Information Hub
              </h3>

              {/* Social Media */}
              <ul className="space-y-2">
                {/* {information.slice(0, 6).map((data, index) => ( */}
                {information.map((data, index) => (

                  <li key={index}>
                    <Link
                      to={data?.link}
                      className="group flex items-center gap-2 py-2 px-3 rounded-md text-slate-300 hover:text-white hover:bg-slate-800/50 transition-all duration-200"
                    >
                      <ChevronRight className="w-3 h-3 text-purple-400 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                      <span className="text-sm">{data?.name}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Quick Links */}
            <div className="lg:col-span-1">
  <h3 className="text-lg font-semibold text-white mb-6 flex items-center gap-2">
    <div className="w-6 h-6 bg-purple-600 rounded flex items-center justify-center">
      <BookOpen className="w-3 h-3 text-white" />
    </div>
    Quick Links
  </h3>
  <ul className="space-y-0.5">
    {quickLinks.map((data, index) => (
      <li key={index}>
        {data?.target === "_blank" ? (
          <a
            href={data?.link}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-2 py-2 px-3 rounded-md text-slate-300 hover:text-white hover:bg-slate-800/50 transition-all duration-200"
          >
            <ChevronRight className="w-3 h-3 text-purple-400 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
            <span className="text-sm">{data?.name}</span>
          </a>
        ) : (
          <Link
            to={data?.link}
            className="group flex items-center gap-2 py-2 px-3 rounded-md text-slate-300 hover:text-white hover:bg-slate-800/50 transition-all duration-200"
          >
            <ChevronRight className="w-3 h-3 text-purple-400 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
            <span className="text-sm">{data?.name}</span>
          </Link>
        )}
      </li>
    ))}
  </ul>
</div>

          </div>
        </div>
      </div>

      {/* Footer bottom */}
      <div className="bg-slate-950 border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-6 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-slate-400 text-sm text-center md:text-left">
              <p className="mb-2">
                © {new Date().getFullYear()} Tagore Institute of Engineering and Technology. All rights reserved.
              </p>
              <div className="flex flex-wrap justify-center md:justify-start gap-4 text-xs">
                <Link to="#" className="hover:text-purple-400 transition-colors duration-200">Privacy Policy</Link>
                <span className="text-slate-600">|</span>
                <Link to="#" className="hover:text-purple-400 transition-colors duration-200">Terms of Service</Link>
                <span className="text-slate-600">|</span>
                <Link to="#" className="hover:text-purple-400 transition-colors duration-200">Cookie Policy</Link>
                <span className="text-slate-600">|</span>
                <Link to="#" className="hover:text-purple-400 transition-colors duration-200">Accessibility</Link>
              </div>
            </div>

            <button
              onClick={scrollToTop}
              className="bg-purple-600 hover:bg-purple-700 text-white p-3 rounded-lg transition-all duration-200 hover:scale-105 shadow-lg cursor-pointer"
              aria-label="Scroll to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      {/* Subtle background decoration */}
      <div className="absolute inset-0 pointer-events-none opacity-5">
        <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-purple-600 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 left-1/4 w-48 h-48 bg-indigo-600 rounded-full blur-3xl"></div>
      </div>
    </footer>
  );
}