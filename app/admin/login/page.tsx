"use client";

import { useState, } from 'react';
import { Mail, Lock, Eye, EyeOff, LogIn, LogInIcon, Loader } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion'
import { useRouter } from 'next/navigation';
import { signIn } from 'next-auth/react'

export default function AdminLogin() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");
    const router = useRouter();

    const handleOnChangeEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(e.target.value);

        console.log(email);
    }

    const handleOnChangePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
        setPassword(e.target.value);

        console.log(password);
    }

    const handleLogin = async (e: React.FormEvent) => {
        e.preventDefault();

        setLoading(true);
        setError("");

        const res = await signIn('credentials', {
            redirect: false,
            email,
            password
        });

        if (!res?.error) {
            router.push('/admin/dashboard')
        } else {
            setError("Email atau Password salah");
        }

        setLoading(false);


    }


    return (
        <div className='flex items-center min-h-screen justify-center'>

            <motion.form initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                onSubmit={handleLogin}
                className="justify-item-center border border-gray-100 p-12 rounded-2xl shadow-2xl">

                <h1 className='font-bold text-center text-xl mb-8 text-[var(--accent)]'>Admin Panel</h1>

                <AnimatePresence>
                    {error && (
                        <motion.p
                            className="text-red-500 text-sm mb-2"
                            initial={{ x: -10, opacity: 0 }}
                            animate={{ x: [0, -10, 10, -10, 10, 0], opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.5 }}
                        >
                            {error}
                        </motion.p>
                    )}
                </AnimatePresence>

                <div className='flex border text-gray-500 border-gray-200 rounded-xl p-3 gap-2 w-100 focus-within:border-[var(--accent)] hover:border-[var(--accent)] focus-within:text-[var(--accent)] hover:text-[var(--accent)] transition-all focus-within:scale-105 hover:scale-105 hover:shadow-lg duration-300 ease-in-out mb-4 focus-within:shadow-lg'>
                    <Mail className='w-6 h-6 transition-colors duration-300' />
                    <input type="email" placeholder='your@email.com' className='w-100 focus:outline-none focus:ring-0 bg-transparent text-gray-500' onChange={handleOnChangeEmail} />
                </div>

                <div className='flex border text-gray-500 border-gray-200 rounded-xl p-3 gap-2 w-100 focus-within:border-[var(--accent)] hover:border-[var(--accent)] focus-within:text-[var(--accent)] hover:text-[var(--accent)] transition-all focus-within:scale-105 hover:scale-105 hover:shadow-lg duration-300 ease-in-out mb-4 focus-within:shadow-lg'>
                    <Lock className='w-6 h-6 transition-colors duration-300' />
                    <input type={`${showPassword ? "text" : "password"}`} placeholder='your password' className='w-100 focus:outline-none focus:ring-0 bg-transparent text-gray-500' onChange={handleOnChangePassword} />
                    <button type='button' onClick={() => setShowPassword(!showPassword)}>

                        <AnimatePresence mode="wait" initial={false}>
                            {showPassword ? (
                                <motion.div
                                    key="eye"
                                    initial={{ opacity: 0, rotate: -90 }}
                                    animate={{ opacity: 1, rotate: 0 }}
                                    exit={{ opacity: 0, rotate: 90 }}
                                    transition={{ duration: 0.3 }}
                                >
                                    <Eye className="w-6 h-6" />
                                </motion.div>
                            ) : (
                                <motion.div
                                    key="eyeoff"
                                    initial={{ opacity: 0, rotate: 90 }}
                                    animate={{ opacity: 1, rotate: 0 }}
                                    exit={{ opacity: 0, rotate: -90 }}
                                    transition={{ duration: 0.3 }}
                                >
                                    <EyeOff className="w-6 h-6" />
                                </motion.div>
                            )}
                        </AnimatePresence>


                    </button>
                </div>

                <div className='flex gap-x-2 justify-end mb-2'>
                    <input type="checkbox" className='cursor-pointer accent-[var(--accent)] rounded' id='remember' />
                    <label className='cursor-pointer' htmlFor='remember'>Remember me</label>
                </div>


                <button disabled={loading} className='rounded-xl bg-[var(--accent)] w-100 p-4 text-white flex justify-center items-center gap-x-2 transition-all duration-300  ease-in-out hover:scale-105 hover:shadow-lg disabled:opacity-70 disabled:cursor-not-allowed'>

                    {
                        loading ? (<>
                            <Loader className='w-6 h-6 animate-spin' />
                            <span>Processing ...</span>
                        </>) : (
                            <>      <span className='font-bold'>Login</span>
                                <LogInIcon className='w-6 h-6' /></>
                        )
                    }


                </button>



            </motion.form>



        </div>
    );
}