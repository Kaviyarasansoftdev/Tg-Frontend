
import { Menu } from 'primereact/menu';
import { Avatar } from 'primereact/avatar';
import { Link } from "react-router-dom";
import { Home, ChevronDown, Bell, Settings } from "lucide-react";
import { useRef } from 'react';
import useAuth from "../../shared/services/store/useAuth";

export default function Topbar() {
  const { userdetails, logout } = useAuth();
  const menuRef = useRef(null);

  const profileMenuItems = [
    {
      template: () => (
        <div className="p-4 bg-gradient-to-r from-purple-50 to-indigo-50 border-b border-gray-100">
          <div className="flex items-center gap-3">
            <Avatar 
              image="/images/kb-favicon.png" 
              size="large" 
              shape="circle" 
              className="ring-2 ring-white shadow-md" 
            />
            <div>
              <p className="font-semibold text-black text-sm">
                {userdetails?.Email?.split('@')[0] || 'User'}
              </p>
              <p className="text-gray-100 text-xs mt-1">{userdetails?.Email || 'user@example.com'}</p>
              <span className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium bg-purple-100 text-purple-800 mt-2">
                Administrator
              </span>
            </div>
          </div>
        </div>
      )
    },
    {
      separator: true
    },
    // {
    //   label: 'Profile Settings',
    //   icon: 'pi pi-user',
    //   className: 'hover:bg-purple-50 text-gray-700 transition-colors',
    //   command: () => console.log('Profile settings')
    // },
    // {
    //   label: 'Preferences',
    //   icon: 'pi pi-cog',
    //   className: 'hover:bg-purple-50 text-gray-700 transition-colors',
    //   command: () => console.log('Preferences')
    // },
    {
      separator: true
    },
    {
      label: 'Log Out',
      icon: 'pi pi-sign-out',
      className: 'text-red-200 hover:bg-red-50 transition-colors font-semibold',
      command: () => logout()
    }
  ];

  const toggleProfileMenu = (event) => {
    menuRef.current.toggle(event);
  };

  return (
    <header className="inset-x-0 z-10 lg:ps-[17rem] sticky top-0 bg-transparent shadow-sm">
      <div className="absolute inset-0 bg-white/0 backdrop-blur-sm border-b border-gray-200/20" />
      
      <nav className="relative flex items-center justify-between h-16 px-4 sm:px-6 lg:px-8">
        {/* Left section - Logo/Brand area */}
        <div className="flex items-center">
          <Link to="/" className="flex items-center gap-2">
            <img 
              src="/images/kb-favicon.png" 
              alt="Logo" 
              className="h-8 w-8 rounded-full ring-2 ring-white/50" 
            />
            <span className="text-black font-semibold text-lg hidden sm:block">TIET Admin</span>
          </Link>
        </div>

        {/* Right section - Navigation items */}
        <div className="flex items-center gap-3">
          {/* Home button */}
          <Link 
            to="/" 
            className="p-2.5 text-white rounded-full hover:bg-white/20 transition-all duration-300 group"
          >
            <Home className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
          </Link>

          {/* Notifications button */}
          {/* <button className="relative p-2.5 text-white rounded-full hover:bg-white/20 transition-all duration-300 group">
            <Bell className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
            <span className="absolute top-0.5 right-0.5 w-2.5 h-2.5 bg-red-500 rounded-full border border-white"></span>
          </button> */}

          {/* Settings button */}
          {/* <button className="p-2.5 text-white rounded-full hover:bg-white/20 transition-all duration-300 group">
            <Settings className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
          </button> */}

          {/* Divider */}
          <div className="w-px h-7 bg-white/30 mx-3"></div>

          {/* Profile section */}
          <div 
            className="flex items-center gap-3 p-2 pr-3 cursor-pointer rounded-full hover:bg-white/20 transition-all duration-300 group" 
            onClick={toggleProfileMenu}
          >
            <div className="relative">
              <Avatar 
                image="/images/kb-favicon.png" 
                size="normal" 
                shape="circle" 
                className="ring-2 ring-white/50 group-hover:ring-purple-300 transition-all duration-300" 
              />
              <div className="absolute -bottom-0.5 -right-0.5 w-3 h-3 bg-green-400 border-2 border-white rounded-full group-hover:scale-110 transition-transform duration-300"></div>
            </div>
            
            <div className="hidden md:flex flex-col items-start">
              <span className="text-sm font-semibold text-black leading-tight">
                {userdetails?.Email?.split('@')[0] || 'User'}
              </span>
              <span className="text-xs text-gray-500 leading-tight">Administrator</span>
            </div>

            <ChevronDown className="w-4 h-4 text-gray-200 group-hover:text-white transition-all duration-300 group-hover:rotate-180" />
          </div>

          {/* Profile Menu */}
          <Menu 
            ref={menuRef} 
            model={profileMenuItems} 
            popup 
            className="w-80 shadow-2xl border-0 rounded-xl overflow-hidden"
            pt={{
              root: { className: 'bg-white border border-gray-200/80 shadow-xl' },
              menu: { className: 'p-0' },
              menuitem: { className: 'hover:bg-purple-50 transition-colors' }
            }}
          />
        </div>
      </nav>
    </header>
  );
}