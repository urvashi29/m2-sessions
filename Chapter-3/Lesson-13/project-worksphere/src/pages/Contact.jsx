import { useState } from "react";
import { useFormik } from "formik";

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      contact: "",
      message: "",
    },
    validate: (values) => {
      const errors = {};

      if (!values.name) {
        errors.name = "Name is required";
      }

      if (!values.email) {
        errors.email = "Email is required";
      } else if (
        !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
      ) {
        errors.email = "Invalid email address";
      }

      if (!values.contact) {
        errors.contact = "Contact is required";
      }

      if (!values.message) {
        errors.message = "Message is required";
      }

      return errors;
    },
    onSubmit: (values, { resetForm }) => {
      console.log(values);
      setSubmitted(true);
      resetForm();
    },
  });

  return (
    <div className="min-h-screen bg-[#F1E9E9] flex items-center justify-center p-6">
      <div className="w-full max-w-2xl bg-white p-8 rounded-lg shadow-md">
        <h2 className="text-3xl font-bold text-[#15173D] mb-6 text-center">
          Contact Us
        </h2>

        {submitted && (
          <div className="bg-green-100 text-green-700 p-3 rounded mb-6 text-center">
            Form is submitted successfully.
          </div>
        )}

        <form onSubmit={formik.handleSubmit} className="space-y-5">
          {/* Name */}
          <div>
            <input
              type="text"
              name="name"
              placeholder="Full Name"
              className="w-full border p-3 rounded focus:outline-none focus:ring-2 focus:ring-[#982598]"
              onChange={formik.handleChange}
              value={formik.values.name}
            />
            {formik.errors.name && (
              <p className="text-red-500 text-sm mt-1">{formik.errors.name}</p>
            )}
          </div>

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

          {/* Contact */}
          <div>
            <input
              type="text"
              name="contact"
              placeholder="Contact Number"
              className="w-full border p-3 rounded focus:outline-none focus:ring-2 focus:ring-[#982598]"
              onChange={formik.handleChange}
              value={formik.values.contact}
            />
            {formik.errors.contact && (
              <p className="text-red-500 text-sm mt-1">
                {formik.errors.contact}
              </p>
            )}
          </div>

          {/* Message */}
          <div>
            <textarea
              name="message"
              rows="4"
              placeholder="Your Message"
              className="w-full border p-3 rounded focus:outline-none focus:ring-2 focus:ring-[#982598]"
              onChange={formik.handleChange}
              value={formik.values.message}
            />
            {formik.errors.message && (
              <p className="text-red-500 text-sm mt-1">
                {formik.errors.message}
              </p>
            )}
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="w-full bg-[#982598] text-white py-3 rounded-md hover:opacity-90 transition"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
