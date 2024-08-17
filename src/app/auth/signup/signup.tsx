"use client";
import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useRouter } from 'next/navigation';
import { signIn, useSession } from 'next-auth/react';


interface FormValues {
  fullname: string;
  email: string;
  password: string;
  confirmPassword: string;
}
const SignUp = () => {
    const { data: session } = useSession();
    const { register, handleSubmit, formState: { errors }, watch } = useForm<FormValues>();
    const [loading, setLoading] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');
    const router = useRouter();

    useEffect(() => {
        if (session) {
            router.push('/jobs');
        }
    }, [session, router]);

    const onSubmit = async (data: FormValues) => {
        setLoading(true);
        setErrorMessage('');

        try {
            const response = await fetch('https://akil-backend.onrender.com/signup', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    name: data.fullname,
                    email: data.email,
                    password: data.password,
                    confirmPassword: data.confirmPassword,
                    role: "user",
                }),
            });

            const responseData = await response.json();

            if (response.ok && responseData.success) {
              router.push(`/auth/otp/otp?email=${encodeURIComponent(responseData.email)}`);
            } else {
                setErrorMessage(responseData.message || 'Signup failed');
            }
        } catch (error) {
            console.log(error);
            setErrorMessage('An error occurred. Please try again later.');
        } finally {
            setLoading(false);
        }
    };

    const handleGoogleSignIn = () => {
      signIn('google', { callbackUrl: 'http://localhost:3000' });
    };

    const handleLoginRedirect = () => {
      // router.push(`/auth/otp/otp?email=${encodeURIComponent(responseData.email)}`);
        router.push('/login/page');
    };

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
            <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
                <div className="text-center mb-6">
                    <h1 className="text-[32px] font-extrabold mb-2">Sign Up Today!</h1>
                    <div
                        className="flex items-center justify-center mb-4 border border-[#CCCCF5] p-3 w-[408px] h-[50px] cursor-pointer"
                        onClick={handleGoogleSignIn}
                    >
                        <img src="/image.png" alt="Google Logo" className="w-8 h-8 mr-3" />
                        <h3 className="text-lg text-[#4640DE] font-bold">Signup With Google</h3>
                    </div>
                    <div className="flex items-center justify-center my-4">
                        <div className="border-t border-gray-300 flex-grow mr-3"></div>
                        <span className="text-gray-500">Or Sign Up with Email</span>
                        <div className="border-t border-gray-300 flex-grow ml-3"></div>
                    </div>
                </div>
                <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Full Name</label>
                        <input
                            type="text"
                            id="full-name"
                            placeholder="Enter your full name"
                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                            {...register('fullname', { required: 'Full Name is required' })}
                        />
                        {errors.fullname && <p className="text-red-500 text-xs mt-1">{errors.fullname.message}</p>}
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Email</label>
                        <input
                            type="email"
                            id="email"
                            placeholder="Enter email address"
                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                            {...register('email', { required: 'Email is required' })}
                        />
                        {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>}
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Password</label>
                        <input
                            type="password"
                            id="password"
                            placeholder="Enter password"
                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                            {...register('password', { required: 'Password is required' })}
                        />
                        {errors.password && <p className="text-red-500 text-xs mt-1">{errors.password.message}</p>}
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Confirm Password</label>
                        <input
                            type="password"
                            id="confirm-password"
                            placeholder="Confirm password"
                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                            {...register('confirmPassword', {
                                required: 'Please confirm your password',
                                validate: (value: any) =>
                                    value === watch('password') || "Passwords don't match"
                            })}
                        />
                        {errors.confirmPassword && <p className="text-red-500 text-xs mt-1">{errors.confirmPassword.message}</p>}
                    </div>
                    <button
                        type="submit"
                        className="w-full py-2 px-4 bg-indigo-600 text-white font-medium rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                        disabled={loading}
                    >
                        {loading ? 'Signing up...' : 'Continue'}
                    </button>
                </form>
                <div className="text-center mt-6">
                    <h3 className="text-sm font-medium text-gray-700">Already have an account?</h3>
                    <button
                        onClick={handleLoginRedirect}
                        className="text-sm text-indigo-600 hover:underline cursor-pointer"
                    >
                        Log in
                    </button>
                </div>
                <div className="text-center mt-6">
                    <h3 className="text-xs text-gray-500">
                        By clicking 'Continue', you acknowledge that you have read
                        <span className="text-indigo-600 hover:underline"> Terms of Service </span>
                        and
                        <span className="text-indigo-600 hover:underline"> Privacy Policy</span>
                    </h3>
                </div>
                {errorMessage && (
                    <div className="text-center mt-4 text-red-500">
                        {errorMessage}
                    </div>
                )}
            </div>
        </div>
    );
}

export default SignUp;
