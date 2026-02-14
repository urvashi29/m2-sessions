import { Parallax } from "react-parallax";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";

const About = () => {
  const growthData = useSelector((state) => state.growthData);

  return (
    <div className="w-full">
      {/* ================= HERO PARALLAX ================= */}
      <Parallax
        bgImage="https://images.unsplash.com/photo-1556761175-4b46a572b786"
        strength={400}
      >
        <div className="h-[500px] flex items-center bg-gradient-to-r from-[#15173D]/90 to-transparent">
          <div className="max-w-6xl mx-auto px-6 text-white">
            <p className="text-sm mb-4 opacity-80">Home &gt; Who we are</p>
            <h1 className="text-5xl font-bold mb-6">About Us</h1>
            <p className="text-lg max-w-xl">
              We work at the convergence of two exciting industries, life
              sciences and technology.
            </p>
          </div>
        </div>
      </Parallax>

      {/* ================= WHAT WE DO ================= */}
      <section className="py-20 px-6 bg-white text-center">
        <h2 className="text-4xl font-bold text-[#15173D] mb-10">What we do</h2>
        <p className="max-w-3xl mx-auto text-gray-600">
          We build scalable digital platforms, intelligent systems, and modern
          enterprise tools that empower organizations to innovate and grow.
        </p>
      </section>

      {/* ================= CEO QUOTE SECTION ================= */}
      <section className="bg-[#15173D] text-white py-20 px-6">
        <div className="max-w-6xl h-[600px] mx-auto grid md:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <img
            src="https://images.unsplash.com/photo-1770462987947-1a7e1d7025b4?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="CEO"
            height="100%"
            className="rounded-lg shadow-lg"
          />

          {/* Quote */}
          <div>
            <h3 className="text-2xl font-light mb-6 leading-relaxed">
              “From our founding days, we focused on building a global,
              differentiated organization dedicated to applying cutting-edge
              technology and contemporary practices.”
            </h3>

            <p className="font-semibold text-[#E491C9]">John Doe</p>
            <p className="text-sm opacity-80">
              Chairman & Chief Executive Officer
            </p>

            <div className="mt-8 flex gap-4">
              <button className="bg-[#982598] px-6 py-3 rounded-md">
                Meet our leaders
              </button>
              <button className="border border-white px-6 py-3 rounded-md">
                Explore our journey
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-[#15173D] mb-12 text-center">
            Company Growth (Last 4 Years)
          </h2>

          <div className="w-full h-[400px]">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={growthData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="year" />
                <YAxis />
                <Tooltip />
                <Line
                  type="monotone"
                  dataKey="revenue"
                  stroke="#982598"
                  strokeWidth={3}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>
      </section>

      {/* ================= SOCIAL IMPACT PARALLAX ================= */}
      <Parallax
        bgImage="https://images.unsplash.com/photo-1522202176988-66273c2fd55f"
        strength={300}
      >
        <div className="h-[450px] flex items-center justify-center bg-[#15173D]/80">
          <div className="max-w-4xl text-center text-white px-6">
            <h2 className="text-3xl font-bold mb-6">
              Our founding purpose extends to our social impact
            </h2>
            <p>
              We extend our future readiness purpose to creating a positive
              social impact. We believe everyone deserves access to quality
              education and healthcare.
            </p>
            <button className="mt-8 bg-[#982598] px-6 py-3 rounded-md">
              Learn about our impact
            </button>
          </div>
        </div>
      </Parallax>

      {/* ================= INSIGHTS SECTION ================= */}
      <section className="py-20 px-6 bg-[#F1E9E9]">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-[#15173D] mb-12">
            Insights to build #PractitionerLevelConfidence
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Card 1 */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1770462987947-1a7e1d7025b4?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Insight"
                className="h-52 w-full object-cover"
              />
              <div className="p-6">
                <p className="text-sm text-gray-500 mb-2">
                  Blog | Digital Transformation
                </p>
                <h3 className="font-semibold text-lg">
                  Using ChatGPT in Life Sciences: Key Use Cases
                </h3>
              </div>
            </div>

            {/* Card 2 */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1770462987947-1a7e1d7025b4?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Insight"
                className="h-52 w-full object-cover"
              />
              <div className="p-6">
                <p className="text-sm text-gray-500 mb-2">
                  Blog | Digital Transformation
                </p>
                <h3 className="font-semibold text-lg">
                  Governance in AI is Critical for Healthcare
                </h3>
              </div>
            </div>

            {/* Card 3 */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1770462987947-1a7e1d7025b4?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Insight"
                className="h-52 w-full object-cover"
              />
              <div className="p-6">
                <p className="text-sm text-gray-500 mb-2">News | Innovation</p>
                <h3 className="font-semibold text-lg">
                  Metaverse Capabilities for Life Sciences
                </h3>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
