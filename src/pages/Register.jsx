import React, { use } from 'react';
import { AuthContext } from '../provider/AuthProvider';
import { Link, useNavigate } from 'react-router';

const Register = () => {
    const { createUser, setUser, updateUser } = use(AuthContext);
    const navigate = useNavigate();

    const handleRegister = (e) => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const photoURL = form.photoURL.value
        const email = form.email.value
        const password = form.password.value

        console.log({ name, photoURL, email, password });

        createUser(email, password)
            .then((result) => {
                const user = result.user;
                updateUser({ displayName: name, photoURL: photoURL })
                    .then(() => {
                        setUser({ ...user, displayName: name, photoURL: photoURL });
                        navigate("/")
                    })
                    .catch((error) => {
                        console.log(error);
                        setUser(user);
                    })
            })
            .catch((error) => {
                alert(error.message);
            })

    }
    return (
        <div className="min-h-screen flex items-center justify-center bg-base-200">
            <div className="w-full max-w-md bg-base-100 p-8 rounded-xl shadow">

                {/* Title */}
                <h2 className="text-2xl font-semibold text-center mb-6">
                    Register your account
                </h2>

                {/* Divider */}
                <hr className="mb-6 border-gray-200" />

                {/* Form */}
                <form
                    onSubmit={handleRegister}
                    className="space-y-4" >

                    {/* Name */}
                    <div>
                        <label className="block text-sm font-medium mb-1">
                            Your Name
                        </label>
                        <input
                            type="text"
                            placeholder="Enter your name"
                            className="input input-bordered w-full bg-base-200"
                            required
                            name="name"
                        />
                    </div>

                    {/* Photo URL */}
                    <div>
                        <label className="block text-sm font-medium mb-1">
                            Photo URL
                        </label>
                        <input
                            type="text"
                            placeholder="Enter your photo URL"
                            className="input input-bordered w-full bg-base-200"
                            required
                            name="photoURL"
                        />
                    </div>

                    {/* Email */}
                    <div>
                        <label className="block text-sm font-medium mb-1">
                            Email
                        </label>
                        <input
                            type="email"
                            placeholder="Enter your email address"
                            className="input input-bordered w-full bg-base-200"
                            required
                            name="email"
                        />
                    </div>

                    {/* Password */}
                    <div>
                        <label className="block text-sm font-medium mb-1">
                            Password
                        </label>
                        <input
                            type="password"
                            placeholder="Enter your password"
                            className="input input-bordered w-full bg-base-200"
                            required
                            name="password"
                        />
                    </div>

                    {/* Register Button */}
                    <button
                        type="submit"
                        className="btn w-full bg-neutral text-white hover:bg-neutral-focus"
                    >
                        Register
                    </button>
                </form>

                {/* Footer */}
                <p className="text-center text-sm mt-6">
                    Already Have An Account?
                    <Link
                        to="/auth/login"
                        className="ml-1 text-red-500 font-semibold"
                    >
                        Login
                    </Link>
                </p>

            </div>
        </div>
    );
};

export default Register;