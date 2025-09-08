import { useNavigate } from "react-router-dom";
import { useState } from "react";
import toast from "react-hot-toast";
import { apisendotp } from "../../services/apiauthentication/apilogin";

export default function Login () {

    const navigate = useNavigate();
    const [formdata, setformdata] = useState({});
     const [isLoading, setIsLoading] = useState(false);
    const handlechange = (e) => setformdata({ ...formdata, [e.target.name]: e.target.value });

    const handlelogin = async (e) => {
        e.preventDefault();
       setIsLoading(true);
        try {
            const res = await apisendotp(formdata);
            console.log(res);
            if (res?.message === "OTP sent successfully") {
                setIsLoading(false);
                toast.success(res?.message);
                navigate(`/verify-otp?email=${formdata.Email}`);
            } else {
                toast.error(res?.message || "Invalid email or password");
            }
        } catch (error) {
            toast.error("An error occurred during login");
            console.error("Login error:", error);
        }
    };
    return (
        <>
        <div className="min-h-screen bg-gray-50 flex mb-8 ">
            {/* Right Side - Login Form */}
            <div className="w-full flex items-center justify-center p-8 ">
                <div className="w-full max-w-md">
                    {/* Company Logo */}
                    <div className="text-center mb-8">
                        <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl mx-auto mb-4 flex items-center justify-center shadow-lg">
                            <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                            </svg>
                        </div>
                        <h2 className="text-3xl font-bold text-gray-900 mb-2">Welcome Back</h2>
                        <p className="text-gray-600">Sign in to your account to continue</p>
                    </div>

                    {/* Login Form */}
                    <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-8">
                        <div className="space-y-6">
                            <div>
                                <label htmlFor="Email" className="block text-sm font-semibold text-gray-700 mb-2">
                                    Email Address
                                </label>
                                <div className="relative">
                                    <input
                                        type="email"
                                        id="Email"
                                        name="Email"
                                        required
                                        className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                                        placeholder="Enter your email address"
                                        value={formdata.Email}
                                        onChange={handlechange}
                                    />
                                    <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                                        <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207" />
                                        </svg>
                                    </div>
                                </div>
                            </div>

                            <button
                                type="button"
                                onClick={handlelogin}
                                disabled={isLoading}
                                className="w-full py-3 px-6 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none group cursor-pointer"
                            >
                                {isLoading ? (
                                    <div className="flex items-center justify-center">
                                        <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                        </svg>
                                        Sending OTP...
                                    </div>
                                ) : (
                                    <div className="flex items-center justify-center">
                                        <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                                        </svg>
                                        <span>Send OTP</span>
                                        <svg className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                                        </svg>
                                    </div>
                                )}
                            </button>
                        </div>

                        {/* Additional Options */}
                        {/* <div className="mt-6 text-center">
                            <p className="text-sm text-gray-600">
                                Need help?{' '}
                                <span className="text-blue-600 hover:text-blue-700 cursor-pointer font-medium">
                                    Contact Support
                                </span>
                            </p>
                        </div> */}
                    </div>

                    {/* Footer */}
                    {/* <div className="mt-8 text-center">
                        <p className="text-xs text-gray-500">
                            By signing in, you agree to our{' '}
                            <span className="text-blue-600 hover:text-blue-700 cursor-pointer">
                                Terms of Service
                            </span>{' '}
                            and{' '}
                            <span className="text-blue-600 hover:text-blue-700 cursor-pointer">
                                Privacy Policy
                            </span>
                        </p>
                    </div> */}
                </div>
            </div>

            <style jsx>{`
                @keyframes float {
                    0%, 100% { transform: translateY(0px); }
                    50% { transform: translateY(-20px); }
                }
                .animate-float {
                    animation: float 3s ease-in-out infinite;
                }
            `}</style>
        </div>
        </>
    );
}