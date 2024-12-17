import React, { useState, useEffect } from "react";
import "./Login.css"; // Import external CSS file

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});
  const [currentSlide, setCurrentSlide] = useState(0);
  const [currentVideo, setCurrentVideo] = useState(0);

  const imageSlides = [
    "https://images.pexels.com/photos/271816/pexels-photo-271816.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/6510953/pexels-photo-6510953.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/6585620/pexels-photo-6585620.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  ];

  const videoSlides = [
    "https://videos.pexels.com/video-files/7578552/7578552-uhd_2560_1440_30fps.mp4",
    "https://videos.pexels.com/video-files/18531413/18531413-uhd_2560_1440_60fps.mp4",
    "https://videos.pexels.com/video-files/5744421/5744421-uhd_2560_1440_30fps.mp4",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % imageSlides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [imageSlides.length]);

  useEffect(() => {
    const videoInterval = setInterval(() => {
      setCurrentVideo((prev) => (prev + 1) % videoSlides.length);
    }, 10000);
    return () => clearInterval(videoInterval);
  }, [videoSlides.length]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = {};
    if (!email.includes("@")) newErrors.email = "Invalid email address";
    if (password.length < 8)
      newErrors.password = "Password must be at least 8 characters";

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) alert("Login successful!");
  };

  return (
    <section className="bg-gray-900 min-h-screen">
      <div className="lg:flex lg:min-h-screen">
        {/* Video Section */}
        <section className="relative lg:w-1/2 h-screen">
          <video
            key={currentVideo}
            autoPlay
            muted
            loop
            className="absolute inset-0 h-full w-full object-cover"
          >
            <source src={videoSlides[currentVideo]} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <div className="relative z-10 flex items-center justify-center h-full bg-black/30">
            <div className="text-center text-white">
              <h1 className="text-5xl font-extrabold drop-shadow-lg">
                Experience Elegance
              </h1>
              <p className="mt-4 text-lg leading-relaxed">
                Furniture that defines luxury and comfort.
              </p>
            </div>
          </div>
        </section>

        {/* Image & Login Section */}
        <section
          className="relative lg:w-1/2 h-screen flex items-center justify-center"
          style={{
            backgroundImage: `url(${imageSlides[currentSlide]})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          {/* Login Form with Animation */}
          <div className="login-form max-w-md px-8 py-10 bg-black/70 rounded-lg shadow-lg relative">
  {/* Side Lights */}
  <div className="side-light">
    <div className="login-form-content relative z-10">
      <h1 className="text-4xl font-bold text-white text-center">Welcome Back</h1>
      <p className="mt-4 text-gray-300 text-center">
        Log in to discover premium collections tailored for you.
      </p>
      <form onSubmit={handleSubmit} className="mt-6 space-y-6">
        {/* Email Input */}
        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-300"
          >
            Email
          </label>
          <input
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full rounded-lg border border-gray-700 bg-gray-800 text-white px-4 py-2 focus:ring-blue-500"
            placeholder="you@example.com"
          />
          {errors.email && (
            <p className="mt-1 text-sm text-red-500">{errors.email}</p>
          )}
        </div>
        {/* Password Input */}
        <div>
          <label
            htmlFor="password"
            className="block text-sm font-medium text-gray-300"
          >
            Password
          </label>
          <input
            id="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full rounded-lg border border-gray-700 bg-gray-800 text-white px-4 py-2 focus:ring-blue-500"
            placeholder="Enter your password"
          />
          {errors.password && (
            <p className="mt-1 text-sm text-red-500">{errors.password}</p>
          )}
        </div>
        <button
          type="submit"
          className="w-full rounded-lg bg-blue-600 px-6 py-3 text-lg font-medium text-white hover:bg-blue-700 focus:ring-4 focus:ring-blue-500 transition"
        >
          Log In
        </button>
      </form>
    </div>
  </div>
</div>


        </section>
      </div>
    </section>
  );
};

export default Login;
