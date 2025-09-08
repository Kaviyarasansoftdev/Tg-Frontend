import { Link, useLocation } from "react-router-dom";
import { useState } from "react";

export default function NavItems({ navLinks = [], defaultTextColor = "text-gray-800", isScrolled }) {
    const [activeDropdown, setActiveDropdown] = useState(null);
    const location = useLocation().pathname

    const handleMouseEnter = (index) => {
        setActiveDropdown(index);
    };

    const handleMouseLeave = () => {
        setActiveDropdown(null);
    };

    return (
        <>
            <div className="relative">
                <nav className="flex gap-6 items-center">
                    {navLinks.map((item, index) => (
                        <div
                            key={index}
                            className={`relative ${isScrolled ? 'text-gray-800' : location == '/' ? 'text-white' : '!text-white'} transition-colors duration-300 font-medium`}

                        >
                            {item.path ? (
                                <Link
                                    to={item.path}
                                    className={` relative inline-block px-3 py-2 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-[#e82e44] after:transition-all after:duration-300 hover:after:w-full
                                        ${window.location.pathname === item.path ? 'text-[#e82e44] font-semibold after:w-full' : ''} `}
                                >
                                    {item.name}
                                </Link>
                            ) : (
                                <div onMouseLeave={handleMouseLeave}>
                                    <span
                                        onMouseEnter={() => item.children && handleMouseEnter(index)}
                                        className={`${isScrolled ? 'text-gray-800' : location == '/' ? 'text-white' : '!text-white'} cursor-pointer px-3 py-2 inline-block  transition-colors duration-300`}>
                                        {item.name}
                                    </span>
                                    {/* lg dropdown */}
                                    {navLinks.map((item, index) => (
                                        item.children && (
                                            <div
                                                key={`dropdown-${index}`}
                                                className={` fixed top-[165px] left-0 w-full bg-white shadow-2xl border-gray-200 z-40 transition-all duration-300 ease-in-out transform 
                                                    ${activeDropdown == index ? 'max-h-screen scale-[1]' : 'max-h-0 scale-[0.7] '} duration-[.7s] overflow-hidden `}>
                                                <div className="max-w-screen-2xl mx-auto px-6 py-8">
                                                    <div className="flex gap-12">
                                                        {item.children.map((dept, deptIndex) => (
                                                            <div key={deptIndex} className="flex-1">
                                                                <div className="mb-6">
                                                                    <h3 className="text-xl font-bold text-[#e82e44] border-b-2 border-[#e82e44] pb-2 mb-4">
                                                                        {dept.name}
                                                                    </h3>
                                                                    {dept.children && (
                                                                        <ul className="max-h-[50vh] overflow-y-auto overflow-x-clip">
                                                                            {dept.children.map((course, courseIndex) => (
                                                                                <li onClick={handleMouseLeave} key={courseIndex}>
                                                                                    <Link
                                                                                        to={course.path}
                                                                                        className={` block px-4 py-1 rounded-lg text-gray-700 hover:bg-[#e82e44] hover:text-white transition-all duration-200 ease-in-out transform hover:translate-x-1 hover:shadow-md
                                                                                      ${window.location.pathname === course.path ? 'hover:bg-gradient-to-r hover:from-[#e82e44] hover:to-[#d61e38]' : 'hover:bg-gradient-to-r hover:from-[#e82e44] hover:to-[#d61e38]'} 
                                                                                        `}
                                                                                    >
                                                                                        <span className="font-medium text-sm">{course.name}</span>
                                                                                    </Link>
                                                                                </li>
                                                                            ))}
                                                                        </ul>
                                                                    )}
                                                                </div>
                                                            </div>
                                                        ))}
                                                    </div>

                                                    <div className="mt-8 pt-6 border-t border-gray-100">
                                                        <div className="flex justify-center">
                                                            <div className="w-16 h-1 bg-gradient-to-r from-[#e82e44] to-[#d61e38] rounded-full"></div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        )
                                    ))}
                                </div>
                            )}
                        </div>
                    ))}
                </nav>


            </div>
        </>
    );
}