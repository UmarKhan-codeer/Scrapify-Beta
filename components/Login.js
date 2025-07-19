"use client";

import { useState } from 'react';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [rememberMe, setRememberMe] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // Perform authentication or API call here
        // If unsuccessful, setErrorMessage('Invalid login credentials.');
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <div className="w-full max-w-md p-8 space-y-8 bg-white shadow-lg rounded-lg">
                {/* Branding */}
                <div className="text-center">
                    <h1 className="text-3xl font-bold text-gray-900">LiveCrawler</h1>
                    <p className="text-gray-600">Login to your account</p>
                </div>

                {/* Login Form */}
                <form onSubmit={handleSubmit} className="mt-6 space-y-6">
                    <div>
                        <label className="block mb-1 font-medium text-gray-700">Email Address</label>
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                            placeholder="you@example.com"
                        />
                    </div>

                    <div>
                        <label className="block mb-1 font-medium text-gray-700">Password</label>
                        <input
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                            placeholder="Enter your password"
                        />
                    </div>

                    {/* Remember Me and Forgot Password */}
                    <div className="flex items-center justify-between">
                        <label className="inline-flex items-center">
                            <input
                                type="checkbox"
                                checked={rememberMe}
                                onChange={(e) => setRememberMe(e.target.checked)}
                                className="form-checkbox text-blue-600"
                            />
                            <span className="ml-2 text-gray-700">Remember Me</span>
                        </label>
                        <a href="#" className="text-sm text-blue-600 hover:underline">Forgot Password?</a>
                    </div>

                    {/* Error Message */}
                    {errorMessage && <p className="text-red-500 text-sm">{errorMessage}</p>}

                    {/* Submit Button */}
                    <button
                        type="submit"
                        className="w-full py-3 mt-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-300"
                    >
                        Login
                    </button>

                    {/* Social Login */}
                    <div className="mt-6 text-center">
                        <p className="text-gray-600">Or continue with</p>
                        <div className="flex justify-center gap-4 mt-4">
                            <button
                                type="button"
                                className="w-full py-2 bg-gray-100 text-gray-700 border border-gray-300 rounded-lg hover:bg-gray-200"
                            >
                                Google
                            </button>
                            <button
                                type="button"
                                className="w-full py-2 bg-gray-100 text-gray-700 border border-gray-300 rounded-lg hover:bg-gray-200"
                            >
                                GitHub
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Login;