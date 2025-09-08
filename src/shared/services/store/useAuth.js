/* eslint-disable react-hooks/rules-of-hooks */
import { create } from 'zustand';

const tokenname = "TIET-Token";

const useAuth = create((set) => ({
  isLoggedIn: !!localStorage.getItem(tokenname),
  userdetails: JSON.parse(localStorage.getItem('userDetails')) || null,

  login: (token) => {
    localStorage.setItem(tokenname, token);
    const userDetails = JSON.parse(window.atob(token.split('.')[1]));
    localStorage.setItem('userDetails', JSON.stringify(userDetails));
    set({ isLoggedIn: true, userdetails: userDetails });
  },

  logout: () => {
    localStorage.removeItem(tokenname);
    localStorage.removeItem('userDetails');
    set({ isLoggedIn: false, userdetails: null });
  },
}));

export default useAuth;
