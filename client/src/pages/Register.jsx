import React from 'react';

const Register = () => {
    return (
        <div className='flex justify-center items-center h-screen bg-gray-100'>
            <div className="flex flex-col w-full max-w-md p-12 space-y-4 text-center bg-white rounded-lg shadow-2xl">
                <h1 className="text-3xl font-semibold text-gray-800">Create an account</h1>
                <form noValidate="" className="space-y-6">
                    <div className="flex flex-col space-y-3">
                        <input
                            id="Name"
                            type="name"
                            placeholder="Name"
                            className="px-4 py-2 rounded-md border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        />
                        <input
                            id="Phone number"
                            type="phone"
                            placeholder="Phone Number"
                            className="px-4 py-2 rounded-md border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        />
                        <input
                            id="PIN"
                            type="password"
                            placeholder="PIN Number"
                            className="px-4 py-2 rounded-md border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        />
                    </div>

                    <button
                        type="button"
                        className="w-full px-8 py-3 font-semibold rounded-md bg-blue-600 text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition duration-150 ease-in-out"
                    >
                        Sign up
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Register;