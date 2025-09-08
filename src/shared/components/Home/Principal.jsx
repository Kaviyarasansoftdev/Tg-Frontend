import {
  Quote,
  Award,
  BookOpen,
  Users,
  Target,
  Star,
  Calendar,
  Mail,
  Phone,
  MapPin,
  ArrowRight,
  Lightbulb,
  Heart,
  Shield,
  Trophy,
  Briefcase,
  GraduationCap,
  ChevronRight
} from "lucide-react";
import { Link } from "react-router-dom";

export default function PrincipalPage() {
  const achievements = [
    {
      icon: Award,
      title: "Educational Excellence Award",
      year: "2023",
      description: "Recognized for outstanding contribution to engineering education",
      color: "border-yellow-200 hover:border-yellow-400"
    },
    {
      icon: BookOpen,
      title: "Research Innovation",
      year: "2022",
      description: "Published 25+ research papers in international journals",
      color: "border-blue-200 hover:border-blue-400"
    },
    {
      icon: Users,
      title: "Student Leadership",
      year: "2021-2024",
      description: "Mentored 5000+ students with 95% placement success",
      color: "border-purple-200 hover:border-purple-400"
    },
    {
      icon: Trophy,
      title: "Institution Ranking",
      year: "2024",
      description: "Led institution to top 100 engineering colleges in India",
      color: "border-green-200 hover:border-green-400"
    }
  ];

  const visionPoints = [
    {
      icon: Lightbulb,
      title: "Innovation First",
      description: "Fostering a culture of innovation and creative problem-solving",
      accent: "text-yellow-600"
    },
    {
      icon: Heart,
      title: "Student-Centric",
      description: "Putting student success and well-being at the center of everything",
      accent: "text-red-600"
    },
    {
      icon: Shield,
      title: "Ethical Leadership",
      description: "Building character and integrity alongside technical excellence",
      accent: "text-blue-600"
    },
    {
      icon: Target,
      title: "Industry Ready",
      description: "Preparing students for real-world challenges and opportunities",
      accent: "text-green-600"
    }
  ];

  const qualifications = [
    "Ph.D. in Mechanical Engineering - IIT Chennai",
    "M.Tech in Advanced Manufacturing - Anna University",
    "B.E. in Mechanical Engineering - College of Engineering, Guindy",
    "25+ Years of Academic and Industry Experience",
    "Former Senior Engineer at Tata Motors",
    "Certified Project Management Professional (PMP)"
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Header Section */}
      <div className="relative py-20 lg:py-20 lg:pt-24 pt-10  border-b border-gray-100">
        {/* Subtle Pattern Overlay */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-20 left-20 w-32 h-32 border-2 border-gray-300 rounded-full"></div>
          <div className="absolute top-40 right-32 w-24 h-24 border-2 border-gray-400 rounded-full"></div>
          <div className="absolute bottom-32 left-32 w-20 h-20 border-2 border-gray-300 rounded-full"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            {/* Left Content */}
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 px-4 py-2  bg-purple-50 rounded-full mb-6">
                <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                <span className="text-sm font-medium text-purple-700 uppercase tracking-wide">Principal Sectiion</span>
              </div>

              <h1 className="text-4xl lg:text-5xl font-black mb-6 text-black leading-tight">
                Leadership with
                <span className="block text-purple-600">
                  Vision & Purpose
                </span>
              </h1>

              <p className="text-xl  text-gray-600 mb-8 leading-relaxed text-justify ">
                Guiding Tagore Institute towards excellence in engineering education
                and nurturing tomorrow's innovators and leaders.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                {/* <button className="group inline-flex items-center justify-center gap-3 px-8 py-4 bg-purple-600 text-white rounded-full font-semibold hover:bg-purple-700 transition-colors cursor-pointer">
                  Read Message
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                </button> */}
                <Link to={'/contactus'}>
                  <button className="px-8 py-4 flex gap-2 justify-center items-center border-2 border-gray-300 text-gray-700 rounded-full font-bold hover:border-gray-400 hover:text-gray-900 transition-all duration-300">
                    Contact Office
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                  </button>
                </Link>
              </div>
            </div>

            {/* Right - Principal Image */}
            <div className="lg:col-span-5">
              <div className="relative group">
                {/* Modern geometric frame */}
                <div className="absolute inset-0 border-4 border-gray-200 rounded-3xl rotate-2 group-hover:rotate-1 transition-transform duration-500"></div>
                <div className="absolute inset-0 border-4 border-gray-300 rounded-3xl -rotate-2 group-hover:-rotate-1 transition-transform duration-500"></div>

                <div className="relative border-4 border-white rounded-3xl shadow-2xl overflow-hidden">
                  <img
                    src="/images/home/principal-photo.jpg"
                    alt="Dr. V.JaiGanesh - Principal"
                    className="w-full h-96 object-cover bg-top  transition-all duration-500"
                  />

                  {/* Modern info card */}
                  <div className="absolute bottom-0 left-0 right-0 border-t border-gray-200 bg-white/95 backdrop-blur-sm p-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="text-xl font-bold text-gray-900">Dr. V.JaiGanesh</h3>
                        <p className="text-gray-600 font-medium">Principal</p>
                        <p className="text-sm text-gray-500 mt-1">Ph.D., M.Tech, B.E.</p>
                      </div>
                      <div className="w-12 h-12 border-2 border-gray-200 rounded-full flex items-center justify-center">
                        <GraduationCap className="w-6 h-6 text-gray-600" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Principal's Message Section */}
      <div className="lg:py-15 py-5 pb-20 lg:pb-20 border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-6 py-3 border border-blue-200 rounded-full mb-6">
              <Quote className="w-5 h-5 text-blue-600" />
              <span className="text-sm font-semibold text-blue-700 uppercase tracking-wider">Message from Principal</span>
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-8">
              A Personal Message
            </h2>
          </div>

          <div className="relative">
            <div className="absolute -left-4 top-0 w-1 h-full bg-gradient-to-b from-blue-500 to-purple-500 rounded-full"></div>
            <div className="lg:pl-12 pl-7">
              <Quote className="w-16 h-16 text-gray-300 mb-6" />
              <div className="space-y-6 text-lg text-gray-700 leading-relaxed text-justify">
                <p>
                  <strong className="text-gray-900">Dear Students, Faculty, and Stakeholders,</strong>
                </p>
                <p>
                  It is my pleasure to welcome you all to Tagore Institute of Engineering College, a premier institution dedicated to providing high-quality technical education in engineering and management. As the Principal of this esteemed institution, I am thrilled to address you and invite you to join our community of learners.
                </p>
                <p>
                  Our vision is to emerge as a center of excellence in engineering and management, imparting intellectual, research, development, technology, and professional skills to serve responsibly in a globalized standard. Our mission is to develop eminent engineers by providing high-quality technical education through state-of-the-art teaching, learning, and research environments.
                </p>
                <p>
                  At Tagore Institute of Engineering College, we believe that education is not just about imparting knowledge but also about developing the skills and character that will enable our students to make a positive impact on society. Our faculty is dedicated to creating a supportive and inclusive learning environment that fosters academic excellence, personal growth, and community engagement.
                </p>
                <p>
                  As we navigate the exciting journey of academic and personal development, I would like to remind you that "The important thing is not where you were or where you are but where you want to get." I encourage each student to take full advantage of the resources, guidance, and opportunities provided by the college to achieve their goals.
                </p>
                <p>
                  I invite each student to actively engage in the opportunities provided by our institution, including hands-on training, industry collaborations, and various extracurricular activities. Our commitment to your holistic development extends beyond the classroom, and we are here to support your academic and personal endeavors.
                </p>
                <p>
                  As we work together toward socio-economic change and inclusivity, I encourage each student to take full advantage of the resources, guidance, and opportunities provided by the college. Remember, our goal is not only to impart knowledge but also to cultivate character, resilience, and a global perspective.
                </p>
                <p className="font-semibold text-gray-900">
                  I am confident that your stay in this College will be exciting and enjoyable. You will never forget your experience throughout your life. I wish you all a successful and enriching academic year. 
                </p>
              </div>
              <div className="mt-8 p-6 border-2 border-gray-200 rounded-2xl">
                <p className="text-xl font-bold text-gray-900 mb-2">Dr. V.JaiGanesh</p>
                <p className="text-gray-600">Principal</p>
                <p className="text-sm text-gray-500 mt-1">Tagore Institute of Engineering and Technology</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <div className="py-20 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Leadership Philosophy
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Guiding principles that drive our institutional excellence and student success
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {visionPoints.map((point, index) => {
              const IconComponent = point.icon;
              return (
                <div
                  key={index}
                  className="group border-2 border-gray-200 rounded-2xl p-8 hover:border-gray-400 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-2"
                >
                  <div className={`w-16 h-16 border-2 border-gray-200 rounded-2xl flex items-center justify-center mb-6 group-hover:border-gray-400 transition-all duration-300`}>
                    <IconComponent className={`w-8 h-8 ${point.accent}`} />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{point.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{point.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div> */}

      {/* <div className="py-20 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Achievements & Recognition
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Celebrating milestones in educational excellence and institutional growth
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {achievements.map((achievement, index) => {
              const IconComponent = achievement.icon;
              return (
                <div
                  key={index}
                  className={`group flex gap-6 p-8 border-2 ${achievement.color} rounded-2xl hover:shadow-lg transition-all duration-300`}
                >
                  <div className="w-16 h-16 border-2 border-gray-300 rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:border-gray-500 transition-all duration-300">
                    <IconComponent className="w-8 h-8 text-gray-600 group-hover:text-gray-800" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className="text-xl font-bold text-gray-900">{achievement.title}</h3>
                      <span className="px-3 py-1 border border-gray-300 text-gray-700 rounded-full text-sm font-semibold">
                        {achievement.year}
                      </span>
                    </div>
                    <p className="text-gray-600 leading-relaxed">{achievement.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div> */}

      {/* <div className="py-20 border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-8">
                Qualifications &
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Experience</span>
              </h2>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                A distinguished academic and professional journey spanning over two decades
                in engineering education and industry expertise.
              </p>
              <div className="space-y-4">
                {qualifications.map((qualification, index) => (
                  <div key={index} className="flex items-center gap-4 p-4 border border-gray-200 rounded-xl hover:border-gray-300 transition-colors duration-300">
                    <ChevronRight className="w-5 h-5 text-blue-600 flex-shrink-0" />
                    <span className="text-gray-700 font-medium">{qualification}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-8">
              <div className="border-2 border-gray-200 rounded-2xl p-8 hover:border-gray-300 transition-colors duration-300">
                <Briefcase className="w-12 h-12 text-blue-600 mb-4" />
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Professional Journey</h3>
                <p className="text-gray-600 leading-relaxed">
                  From industry engineering roles at leading automotive companies to academic
                  leadership, bringing real-world expertise to educational excellence.
                </p>
              </div>

              <div className="border-2 border-gray-200 rounded-2xl p-8 hover:border-gray-300 transition-colors duration-300">
                <Star className="w-12 h-12 text-yellow-600 mb-4" />
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Research Excellence</h3>
                <p className="text-gray-600 leading-relaxed">
                  Published researcher with expertise in advanced manufacturing, sustainable
                  engineering, and innovative pedagogical methods in technical education.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div> */}

      {/* <div className="py-20">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Get in Touch</h2>
            <p className="text-xl text-gray-600">
              Connect with the Principal's Office for academic guidance and institutional matters
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-8 border-2 border-gray-200 rounded-2xl hover:border-blue-300 hover:shadow-lg transition-all duration-300">
              <div className="w-16 h-16 border-2 border-blue-200 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Mail className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Email</h3>
              <p className="text-gray-600">principal@tagore.edu.in</p>
              <p className="text-gray-500 text-sm mt-1">Office Hours: 9 AM - 5 PM</p>
            </div>

            <div className="text-center p-8 border-2 border-gray-200 rounded-2xl hover:border-green-300 hover:shadow-lg transition-all duration-300">
              <div className="w-16 h-16 border-2 border-green-200 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Phone className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Phone</h3>
              <p className="text-gray-600">+91 98765 43210</p>
              <p className="text-gray-500 text-sm mt-1">Direct Line</p>
            </div>

            <div className="text-center p-8 border-2 border-gray-200 rounded-2xl hover:border-purple-300 hover:shadow-lg transition-all duration-300">
              <div className="w-16 h-16 border-2 border-purple-200 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <MapPin className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Office</h3>
              <p className="text-gray-600">Administrative Block</p>
              <p className="text-gray-500 text-sm mt-1">Room 101, Ground Floor</p>
            </div>
          </div>

          <div className="text-center mt-12">
            <button className="group inline-flex items-center gap-3 px-8 py-4 border-2 border-gray-900 text-gray-900 rounded-full font-bold hover:bg-gray-900 hover:text-white transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
              Schedule Appointment
              <Calendar className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
            </button>
          </div>
        </div>
      </div> */}
    </div>
  );
}