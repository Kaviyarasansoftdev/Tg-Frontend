// import { useState } from "react";
// import { useLocation, useNavigate } from "react-router-dom";
// import toast from "react-hot-toast";
// import { apivalidateOTP } from "../../services/apiauthentication/apilogin";
// import useAuth from "../../services/store/useAuth";


// export default function VerifyOtp() {
//   const [OTP, setOtp] = useState("");
//   const [loading, setLoading] = useState(false);
//   const navigate = useNavigate();
//   const location = useLocation();
//   const email = new URLSearchParams(location.search).get("email"); 
//     const {login}=useAuth();


//   const handleOtpChange = (e) => {
//     setOtp(e.target.value);
//   };

//   const handleOtpSubmit = async (e) => {
//     e.preventDefault();
//     setLoading(true);
//     try {
//       const response = await apivalidateOTP({ Email: email, OTP });
//       console.log(response);
//       if (response.message === "OTP verified successfully. Welcome message sent.") {
//         toast.success("OTP Verified. Registration Complete!");
//         navigate("/dashboard"); 
//         login(response.token); 
//       } else {
//         toast.error(response.message); 
//       }
//     } catch (error) {
//       console.log("Error verifying OTP:", error);
//     }
//     setLoading(false);
//   };

//   return (
//     <div className="flex items-center justify-center h-screen">
//       <div className="max-w-[30rem] mx-auto w-full px-4">
//         <div className="p-8 bg-white border shadow-xl rounded-xl">
//           <h1 className="mb-6 text-2xl font-bold text-center">Verify OTP</h1>
//           <form onSubmit={handleOtpSubmit}>
//             <div className="mb-4">
//               <label className="block text-lg">OTP</label>
//               <input
//                 type="text"
//                 name="otp"
//                 value={OTP}
//                 onChange={handleOtpChange}
//                 className="w-full px-4 py-2 border outline-none rounded-xl"
//                 required
//               />
//             </div>
//             <div className="flex items-center justify-center">
//               <button
//                 type="submit"
//                 className="inline-flex items-center justify-center px-6 py-3 text-xl font-bold text-white rounded-lg bg-blue-500"
//                 disabled={loading}
//               >
//                 {loading ? "Verifying..." : "Verify OTP"}
//               </button>
//             </div>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// }


import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { apivalidateOTP } from "../../services/apiauthentication/apilogin";
import useAuth from "../../services/store/useAuth";

export default function VerifyOtp() {
    const [OTP, setOtp] = useState("");
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();
    const location = useLocation();
    const email = new URLSearchParams(location.search).get("email"); 
    const { login } = useAuth();

    const handleOtpChange = (e) => {
        setOtp(e.target.value);
    };

    const handleOtpSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        try {
            const response = await apivalidateOTP({ Email: email, OTP });
            console.log(response);
            if (response.message === "OTP verified successfully. Welcome message sent.") {
                toast.success("OTP Verified. Registration Complete!");
                navigate("/dashboard"); 
                login(response.token); 
            } else {
                toast.error(response.message); 
            }
        } catch (error) {
            console.log("Error verifying OTP:", error);
            toast.error("An error occurred while verifying OTP");
        }
        setLoading(false);
    };

    const handleResendOtp = () => {
        toast.success("OTP resent successfully!");
        // Add your resend OTP logic here if needed
    };

    return (
        <>
            <div className="min-h-screen bg-gray-50 flex">
                {/* Main Container - OTP Verification Form */}
                <div className="w-full flex items-center justify-center p-8">
                    <div className="w-full max-w-md">
                        {/* Company Logo */}
                        <div className="text-center mb-8">
                            <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl mx-auto mb-4 flex items-center justify-center shadow-lg">
                                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                            </div>
                            <h2 className="text-3xl font-bold text-gray-900 mb-2">Verify Your Account</h2>
                            <p className="text-gray-600">
                                We've sent a verification code to
                                <br />
                                <span className="font-medium text-blue-600">{email}</span>
                            </p>
                        </div>

                        {/* OTP Verification Form */}
                        <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-8">
                            <form onSubmit={handleOtpSubmit} className="space-y-6">
                                <div>
                                    <label htmlFor="otp" className="block text-sm font-semibold text-gray-700 mb-2">
                                        Enter Verification Code
                                    </label>
                                    <div className="relative">
                                        <input
                                            type="text"
                                            id="otp"
                                            name="otp"
                                            value={OTP}
                                            onChange={handleOtpChange}
                                            required
                                            maxLength="6"
                                            className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 text-center text-lg tracking-widest"
                                            placeholder="000000"
                                        />
                                        <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                                            <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                                            </svg>
                                        </div>
                                    </div>
                                </div>

                                <button
                                    type="submit"
                                    disabled={loading}
                                    className="w-full py-3 px-6 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none group cursor-pointer"
                                >
                                    {loading ? (
                                        <div className="flex items-center justify-center">
                                            <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                            </svg>
                                            Verifying OTP...
                                        </div>
                                    ) : (
                                        <div className="flex items-center justify-center">
                                            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                            </svg>
                                            <span>Verify OTP</span>
                                            <svg className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                                            </svg>
                                        </div>
                                    )}
                                </button>
                            </form>

                            {/* Resend OTP Option */}
                            <div className="mt-6 text-center">
                                <p className="text-sm text-gray-600">
                                    Didn't receive the code?{' '}
                                    <button
                                        type="button"
                                        onClick={handleResendOtp}
                                        className="text-blue-600 hover:text-blue-700 cursor-pointer font-medium underline"
                                    >
                                        Resend OTP
                                    </button>
                                </p>
                            </div>
                        </div>

                        {/* Back to Login */}
                        <div className="mt-6 text-center">
                            <button
                                type="button"
                                onClick={() => navigate(-1)}
                                className="text-sm text-gray-600 hover:text-gray-800 flex items-center justify-center mx-auto transition-colors duration-200"
                            >
                                <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                                </svg>
                                Back to Login
                            </button>
                        </div>

                        {/* Footer */}
                        <div className="mt-8 text-center">
                            <p className="text-xs text-gray-500">
                                By verifying your account, you agree to our{' '}
                                <span className="text-blue-600 hover:text-blue-700 cursor-pointer">
                                    Terms of Service
                                </span>{' '}
                                and{' '}
                                <span className="text-blue-600 hover:text-blue-700 cursor-pointer">
                                    Privacy Policy
                                </span>
                            </p>
                        </div>
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