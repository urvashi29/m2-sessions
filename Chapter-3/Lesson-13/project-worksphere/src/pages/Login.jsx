import React from "react";

import { useState } from "react";
import { useFormik } from "formik";
import { useDispatch } from "react-redux";
import { loginUser } from "../redux/actions/action";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [submitted, setSubmitted] = useState(false);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validate: (values) => {
      const errors = {};

      if (!values.email) {
        errors.email = "Email is required";
      } else if (
        !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
      ) {
        errors.email = "Invalid email address";
      }

      if (!values.password) {
        errors.password = "Password is required";
      } else if (values.password.length < 6) {
        errors.password = "Password must be at least 6 characters";
      }

      return errors;
    },
    onSubmit: (values, { resetForm }) => {
      dispatch(loginUser());
      resetForm();
      navigate("/about");
    },
  });

  return (
    <div className="min-h-screen bg-[#F1E9E9] flex items-center justify-center p-6">
      <div className="w-full max-w-md bg-white p-8 rounded-lg shadow-lg">
        {/* Heading */}
        <h2 className="text-3xl font-bold text-[#15173D] mb-6 text-center">
          Login
        </h2>

        {/* Success Message */}
        {submitted && (
          <div className="bg-green-100 text-green-700 p-3 rounded mb-6 text-center">
            Login successful.
          </div>
        )}

        {/* Form */}
        <form onSubmit={formik.handleSubmit} className="space-y-5">
          {/* Email */}
          <div>
            <input
              type="email"
              name="email"
              placeholder="Email Address"
              className="w-full border p-3 rounded focus:outline-none focus:ring-2 focus:ring-[#982598]"
              onChange={formik.handleChange}
              value={formik.values.email}
            />
            {formik.errors.email && (
              <p className="text-red-500 text-sm mt-1">{formik.errors.email}</p>
            )}
          </div>

          {/* Password */}
          <div>
            <input
              type="password"
              name="password"
              placeholder="Password"
              className="w-full border p-3 rounded focus:outline-none focus:ring-2 focus:ring-[#982598]"
              onChange={formik.handleChange}
              value={formik.values.password}
            />
            {formik.errors.password && (
              <p className="text-red-500 text-sm mt-1">
                {formik.errors.password}
              </p>
            )}
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-[#982598] text-white py-3 rounded-md hover:opacity-90 transition"
          >
            Login
          </button>
        </form>

        {/* Extra Links */}
        <div className="text-center mt-6 text-sm text-gray-600">
          Don’t have an account?{" "}
          <span className="text-[#982598] cursor-pointer">Register</span>
        </div>
      </div>
    </div>
  );
};

export default Login;
