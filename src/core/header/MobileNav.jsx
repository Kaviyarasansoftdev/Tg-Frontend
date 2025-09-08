import { useState, useEffect } from "react";
import { Sling as Hamburger } from 'hamburger-react';
import { Link, useLoaderData, useLocation } from "react-router-dom";

export default function MobileNav(props) {
    const { navLinks, isScrolled, isOpen, setOpen } = props;
    const [openMenus, setOpenMenus] = useState({});
    const location = useLocation().pathname

    const toggleMenu = (key) => {
        setOpenMenus((prev) => ({
            ...prev,
            [key]: !prev[key],
        }));
    };

    return (
        <>
            <div>
                <div className={`backdrop-blur-xs rounded-2xl border ${isScrolled ? 'border-[#980ffa]' : location === '/' ? 'border-[#ffffff]' : 'border-[#980ffa]'}`}>
                    <Hamburger toggled={isOpen} toggle={setOpen} color={(location === '/' && !isScrolled) ? '#ffffff' : '#980ffa'} size={24} rounded direction="right" duration={0.6} />
                </div>
            </div>

            <div className={`fixed top-0 left-0 h-screen w-full md:w-[320px] bg-white shadow-xl z-50 transition-transform duration-300 ease-in-out 
                ${isOpen ? "translate-x-0" : "-translate-x-full"}`}
            >
                <div className="flex justify-between items-center px-4">
                    <div className="p-5 border-b text-xl font-semibold text-[#980ffa] bg-gray-50">
                        Logo
                    </div>
                    <div className={`backdrop-blur-xs rounded-2xl border border-[#980ffa]`}>
                        <Hamburger toggled={isOpen} toggle={setOpen} color={'#980ffa'} size={24} rounded direction="right" duration={0.6} />
                    </div>
                </div>
                <nav className="p-4 space-y-2 overflow-y-auto h-[calc(100vh-60px)]">
                    {navLinks.map((item, i) => {
                        const itemKey = `item-${i}`;
                        const hasChildren = !!item.children;

                        return (
                            <div key={itemKey}>
                                <div onClick={() => hasChildren && toggleMenu(itemKey)}
                                    className={`flex justify-between items-center cursor-pointer hover:bg-gray-100 px-3 py-2 rounded 
                                    ${hasChildren ? "font-semibold text-gray-800" : "text-gray-700"}`}
                                >
                                    {item.path ? (
                                        <Link onClick={() => { setOpen(false); setOpenMenus({}) }} to={item.path} className="flex-grow">{item.name}</Link>
                                    ) : (
                                        <span className="flex-grow">{item.name}</span>
                                    )}
                                    {hasChildren && (
                                        <span className="ml-2 text-sm">
                                            {openMenus[itemKey] ? "−" : "+"}
                                        </span>
                                    )}
                                </div>

                                {/* Child Level 1 */}
                                {hasChildren && openMenus[itemKey] && (
                                    <div className="ml-4 mt-1 space-y-1 border-l border-gray-200 pl-2">
                                        {item.children.map((child1, j) => {
                                            const childKey = `${itemKey}-child-${j}`;
                                            const hasSub = !!child1.children;

                                            return (
                                                <div key={childKey}>
                                                    <div
                                                        onClick={() => hasSub && toggleMenu(childKey)}
                                                        className="flex justify-between items-center cursor-pointer text-sm hover:bg-gray-50 px-2 py-1 rounded text-gray-700"
                                                    >
                                                        {child1.path ? (
                                                            <Link onClick={() => { setOpen(false); setOpenMenus({}) }} to={child1.path} className="flex-grow">{child1.name}</Link>
                                                        ) : (
                                                            <span className="flex-grow">{child1.name}</span>
                                                        )}
                                                        {hasSub && (
                                                            <span className="ml-2 text-xs">
                                                                {openMenus[childKey] ? "−" : "+"}
                                                            </span>
                                                        )}
                                                    </div>

                                                    {/* Child Level 2 */}
                                                    {hasSub && openMenus[childKey] && (
                                                        <div className="ml-4 pl-2 border-l border-gray-100 space-y-1">
                                                            {child1.children.map((child2, k) => (
                                                                <Link key={`${childKey}-sub-${k}`}
                                                                    to={child2.path}
                                                                    onClick={() => { setOpen(false); setOpenMenus({}) }}
                                                                    className="block text-sm text-gray-600 hover:text-[#980ffa] px-2 py-1"
                                                                >
                                                                    {child2.name}
                                                                </Link>
                                                            ))}
                                                        </div>
                                                    )}
                                                </div>
                                            );
                                        })}
                                    </div>
                                )}
                            </div>
                        );
                    })}
                </nav>
            </div>

        </>
    );
}

