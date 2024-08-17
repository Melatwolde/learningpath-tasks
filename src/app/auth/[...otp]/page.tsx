'use client';
import { useState, useEffect } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';

const Otp = () => {
    const [code, setCode] = useState(['', '', '', '', '']);
    const [timer, setTimer] = useState(30);
    const [loading, setLoading] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');
    const [isButtonDisabled, setIsButtonDisabled] = useState(true);
    const [email, setEmail] = useState('');

    const router = useRouter();
    const searchParams = useSearchParams();
    

    useEffect(() => {
        if (searchParams) {
            const emailParam = searchParams.get('email');
            if (emailParam) {
                setEmail(emailParam);
            } else {
                setErrorMessage('Email parameter is missing');
            }
        } else {
            setErrorMessage('Failed to retrieve search parameters');
        }
    }, [searchParams]);

    useEffect(() => {
        if (code.every(digit => digit !== '')) {
            setIsButtonDisabled(false);
        } else {
            setIsButtonDisabled(true);
        }
    }, [code]);

    useEffect(() => {
        if (timer > 0) {
            const intervalId = setInterval(() => {
                setTimer(prevTimer => prevTimer - 1);
            }, 1000);

            return () => clearInterval(intervalId);
        }
    }, [timer]);

    const handleChange = (value: string, index: number) => {
        const newCode = [...code];
        newCode[index] = value;
        setCode(newCode);

        if (index < code.length - 1 && value !== '') {
            const nextInput = document.getElementById(`otp-${index + 1}`);
            if (nextInput) {
                (nextInput as HTMLInputElement).focus();
            }
        } else if (value === '' && index > 0) {
            const prevInput = document.getElementById(`otp-${index - 1}`);
            if (prevInput) {
                (prevInput as HTMLInputElement).focus();
            }
        }
    };

    const handleResend = () => {
        setTimer(30);
        // Implement the resend logic here
    };

    const handleSubmit = async (event: React.FormEvent) => {
        event.preventDefault();
        setLoading(true);
        setErrorMessage('');

        const otpString = code.join('');

        if (!email) {
            setErrorMessage('Email is missing.');
            setLoading(false);
            return;
        }

        try {
            const response = await fetch('https://akil-backend.onrender.com/verify-email', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    email: email,
                    OTP: otpString,
                }),
            });

            const data = await response.json();

            if (data.success) {
                router.push('/jobs');
            } else {
                setErrorMessage(data.message || 'Verification failed.');
            }
        } catch (error) {
            setErrorMessage('An error occurred. Please try again later.');
        } finally {
            setLoading(false);
            setTimer(30);
            setIsButtonDisabled(true);
        }
    };

    return (
        <div className="flex justify-center items-center min-h-screen bg-gray-100">
            <div className="bg-white p-8 rounded-lg shadow-lg max-w-sm w-full">
                <h2 className="text-2xl font-bold text-center text-gray-800 mb-4">Verify Email</h2>
                <p className="text-gray-600 text-center mb-6">
                    We've sent a verification code to the email address you provided. To complete the verification process, please enter the code here.
                </p>
                <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="flex justify-center mb-6 space-x-2">
                        {code.map((digit, index) => (
                            <input
                                key={index}
                                id={`otp-${index}`}
                                type="text"
                                maxLength={1}
                                value={digit}
                                placeholder="0"
                                onChange={(e) => handleChange(e.target.value, index)}
                                className="w-12 h-12 text-center text-xl border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                            />
                        ))}
                    </div>
                    {errorMessage && (
                        <div className="text-red-500 text-center mb-4">{errorMessage}</div>
                    )}
                    <button
                        type="submit"
                        className="w-full py-3 bg-purple-500 text-white rounded-lg text-lg font-semibold hover:bg-purple-600 transition duration-300"
                        disabled={isButtonDisabled || loading}
                    >
                        {loading ? 'Submitting...' : 'Continue'}
                    </button>
                </form>
                <div className="text-center text-gray-600 mt-4">
                    You can request to <span className="text-purple-500 cursor-pointer" onClick={handleResend}>Resend code</span> in <span className="text-purple-500">{timer}</span> seconds.
                </div>
            </div>
        </div>
    );
};

export default Otp;
