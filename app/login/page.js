// "use client";
// import { useState } from 'react';
// import Link from 'next/link';

// const LoginPage = () => {
//     const [email, setEmail] = useState('');
//     const [password, setPassword] = useState('');
//     const [errorMessage, setErrorMessage] = useState('');

//     const handleLogin = (e) => {
//         e.preventDefault();
//         // Simulate login validation
//         if (email === '' || password === '') {
//             setErrorMessage('Email and Password are required.');
//             return;
//         }
//         // Add your login logic here (e.g., authentication call)
//         console.log('Logging in with', email, password);
//     };

//     return (
//         <div className="flex items-center justify-center min-h-screen bg-gray-100">
//             <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full">
//                 <h1 className="text-3xl font-semibold text-center mb-6">Login to LiveCrawler</h1>
//                 <form onSubmit={handleLogin} className="space-y-6">
//                     {errorMessage && <p className="text-red-500 text-center">{errorMessage}</p>}
                    
//                     <div>
//                         <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email Address</label>
//                         <input
//                             type="email"
//                             id="email"
//                             value={email}
//                             onChange={(e) => setEmail(e.target.value)}
//                             required
//                             className="mt-1 p-3 w-full border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
//                         />
//                     </div>
                    
//                     <div>
//                         <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
//                         <input
//                             type="password"
//                             id="password"
//                             value={password}
//                             onChange={(e) => setPassword(e.target.value)}
//                             required
//                             className="mt-1 p-3 w-full border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
//                         />
//                     </div>
                    
//                     <button
//                         type="submit"
//                         className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition duration-300"
//                     >
//                         Login
//                     </button>
//                 </form>
                
//                 <div className="mt-6 text-center">
//                     <p className="text-gray-600">Don't have an account? <Link href="/signup" className="text-blue-600 hover:underline">Sign Up</Link></p>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default LoginPage;



"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Link from "next/link";

export default function LoginPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <div className="w-full max-w-md bg-card p-6 rounded-2xl shadow-md space-y-4">
        <h2 className="text-2xl font-bold text-center text-primary">Log In</h2>
        <form className="space-y-4">
          <Input type="email" placeholder="Email" required />
          <Input type="password" placeholder="Password" required />
          <Button className="w-full">Log In</Button>
        </form>
        <p className="text-sm text-center text-muted-foreground">
          Don’t have an account?{" "}
          <Link href="/signup" className="text-primary hover:underline">
            Sign Up
          </Link>
        </p>
      </div>
    </div>
  );
}
