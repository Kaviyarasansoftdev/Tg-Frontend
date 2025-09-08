import { ArrowRight } from "lucide-react";
import React from "react";

export default function RecruitersSection() {
  const recruiters = [
    {
      id: 1,
      title: "",
      logo: "/images/recruiters/1.jpg",
    },
    {
      id: 2,
      title: "",
      logo: "/images/recruiters/2.jpg",
    },
    {
      id: 3,
      title: "",
      logo: "/images/recruiters/3.jpg",
    },
    {
      id: 4,
      title: "",
      logo: "/images/recruiters/4.jpg",
    },
    {
      id: 5,
      title: "",
      logo: "/images/recruiters/5.jpg",
    },
    {
      id: 6,
      title: "",
      logo: "/images/recruiters/6.jpg",
    },
    {
      id: 7,
      title: "",
      logo: "/images/recruiters/7.jpg",
    },
    {
      id: 8,
      title: "",
      logo: "/images/recruiters/8.jpg",
    },
    {
      id: 9,
      title: "",
      logo: "/images/recruiters/9.jpg",
    },
    {
      id: 10,
      title: "",
      logo: "/images/recruiters/10.jpg",
    },
    {
      id: 11,
      title: "",
      logo: "/images/recruiters/11.jpg",
    },
    {
      id: 12,
      title: "",
      logo: "/images/recruiters/12.jpg",
    },
    {
      id: 13,
      title: "",
      logo: "/images/recruiters/13.jpg",
    },
    {
      id: 14,
      title: "",
      logo: "/images/recruiters/14.jpg",
    },
  ];

  return (
    <div className="bg-gradient-to-br from-purple-900 via-purple-800 to-indigo-900 py-20 px-6 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-32 h-32 bg-white rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-pink-400 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-blue-400 rounded-full blur-2xl"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header Section */}
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-16">
          <div className="lg:max-w-2xl mb-8 lg:mb-0">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-purple-600/30 backdrop-blur-sm border border-purple-400/30 text-white text-sm font-medium uppercase tracking-wide mb-6">
              <span className="w-2 h-2 bg-white rounded-full animate-pulse"></span>
              Our Placement Partners
            </span>
            
            <h2 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-white leading-tight ">
              Tagore Institute of Engineering & Technology{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-purple-300">
                Top Recruiters
              </span>
            </h2>
          </div>

          <div className="flex-shrink-0">
            <button className="cursor-pointer bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 inline-flex items-center gap-2 text-white font-semibold px-8 py-4 rounded-full transition-all shadow-lg hover:shadow-xl group">
              View Placement Stats
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
            </button>
          </div>
        </div>

        {/* Companies Scrolling Grid */}
        <div className="space-y-8">
          {/* Top Row - Scrolling Right */}
          <div className="overflow-hidden">
            <div className="flex animate-scroll-right gap-6">
              {recruiters.map((recruiter, index) => (
                <div
                  key={`top-${recruiter.id}-${index}`}
                  className="bg-white/95 backdrop-blur-sm rounded-2xl p-3 flex flex-col items-center justify-center min-h-[140px] lg:min-h-[160px] min-w-[200px] lg:min-w-[240px] shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 group flex-shrink-0"
                >
                  <div className="flex items-center justify-center h-20 w-full mb-4">
                    <img
                      src={recruiter.logo}
                      alt={`recruiter ${index}`}
                      className="h-16 w-auto object-contain group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                  {/* <h3 className="font-bold text-gray-900 text-lg text-center">
                    {recruiter.title}
                  </h3> */}
                </div>
              ))}
            </div>
          </div>

          {/* Bottom Row - Scrolling Left */}
          <div className="overflow-hidden">
            <div className="flex animate-scroll-left gap-6">
              {recruiters.map((recruiter, index) => (
                <div
                  key={`bottom-${recruiter.id}-${index}`}
                  className="bg-white/95 backdrop-blur-sm rounded-2xl p-3 flex flex-col items-center justify-center min-h-[140px] lg:min-h-[160px] min-w-[200px] lg:min-w-[240px] shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 group flex-shrink-0"
                >
                  <div className="flex items-center justify-center h-20 w-full mb-4">
                    <img
                      src={recruiter.logo}
                      alt={`recruiter ${index}`}
                      className="h-16 w-auto object-contain group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                  {/* <h3 className="font-bold text-gray-900 text-lg text-center">
                    {recruiter.title}
                  </h3> */}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* View All Button */}
        {/* <div className="flex justify-center mt-16">
          <button className="cursor-pointer bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 inline-flex items-center gap-2 text-white font-semibold px-8 py-4 rounded-full transition-all shadow-lg hover:shadow-xl group">
            View All Placement Partners
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
          </button>
        </div> */}
      </div>

      {/* CSS Animations */}
      <style jsx>{`
        @keyframes scroll-right {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(0%);
          }
        }
        
        @keyframes scroll-left {
          0% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(-100%);
          }
        }
        
        .animate-scroll-right {
          animation: scroll-right 30s linear infinite;
        }
        
        .animate-scroll-left {
          animation: scroll-left 30s linear infinite;
        }
        
        .animate-scroll-right:hover,
        .animate-scroll-left:hover {
          animation-play-state: paused;
        }
      `}</style>
    </div>
  );
}





