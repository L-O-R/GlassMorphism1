import { Link } from "react-router-dom";
import login1 from "../assets/login1.png";
import login2 from "../assets/login3.png";
import login3 from "../assets/login5.png";
import login4 from "../assets/login2.png";

const SignUp = () => {
  return (
    <main className="relative flex min-h-screen items-center justify-center bg-radial from-[#0085FF] to-[#003465] overflow-hidden">
      <div className="hidden sm:block absolute bottom-0 left-4 w-40 h-40 md:w-60 md:h-60 lg:w-80 lg:h-80 mix-blend-overlay opacity-70">
        <img
          src={login1}
          alt="decorative spiral"
          className="w-full h-auto object-cover drop-shadow-lg"
        />
      </div>

      <section className="relative bg-radial from-[#0084ff] to-[#003465]/60 backdrop-blur-md border border-white/10 shadow-2xl w-[90%] max-w-4xl flex justify-center items-center py-8 rounded-2xl min-h-[80vh] my-8 mx-4">
        <div className="hidden sm:block absolute bottom-10 left-10 md:left-20 w-40 h-40 md:w-60 md:h-60 mix-blend-lighten opacity-60">
          <img
            src={login2}
            alt="decorative spiral"
            className="w-full h-auto object-cover drop-shadow-lg"
          />
        </div>

        <div className="hidden md:block absolute top-16 left-20 w-40 h-40 md:w-60 md:h-60 mix-blend-overlay opacity-70">
          <img
            src={login3}
            alt="decorative spiral"
            className="w-full h-auto object-cover drop-shadow-lg"
          />
        </div>

        <div className="hidden lg:block absolute top-1/2 left-20 w-40 h-40 mix-blend-lighten opacity-50">
          <img
            src={login3}
            alt="decorative spiral"
            className="w-full h-auto object-cover drop-shadow-lg"
          />
        </div>

        <div className="hidden md:block absolute top-20 right-20 w-40 h-40 md:w-60 md:h-60 lg:w-80 lg:h-80 mix-blend-overlay opacity-60">
          <img
            src={login1}
            alt="decorative spiral"
            className="w-full h-auto object-cover drop-shadow-lg"
          />
        </div>

        <div className="hidden sm:block absolute bottom-10 right-20 w-30 h-30 md:w-40 md:h-40 mix-blend-lighten opacity-70">
          <img
            src={login4}
            alt="decorative spiral"
            className="w-full h-auto object-cover drop-shadow-lg"
          />
        </div>

        <div className="hidden md:block absolute bottom-5 right-20 w-20 h-20 md:w-30 md:h-30 mix-blend-overlay opacity-60">
          <img
            src={login4}
            alt="decorative spiral"
            className="w-full h-auto object-cover drop-shadow-lg"
          />
        </div>

        <div
          className="w-full max-w-sm rounded-2xl backdrop-blur-lg border border-white/20 shadow-2xl py-6 md:py-8 text-white px-6 md:px-16"
          aria-labelledby="signup-title">
          <h1
            id="signup-title"
            className="mb-6 text-2xl font-bold text-white text-center">
            Create Account
          </h1>

          <form
            className="space-y-4"
            aria-label="Sign up form">
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium mb-1">
                Full Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                aria-required="true"
                required
                placeholder="John Doe"
                className="mt-1 w-full rounded-lg bg-white/5 border border-white/20 px-4 py-3 text-sm shadow-sm focus:border-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-400/50 text-white placeholder-white/70"
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium mb-1">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                aria-required="true"
                required
                placeholder="you@example.com"
                className="mt-1 w-full rounded-lg bg-white/5 border border-white/20 px-4 py-3 text-sm shadow-sm focus:border-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-400/50 text-white placeholder-white/70"
              />
            </div>

            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium mb-1">
                Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                aria-required="true"
                required
                placeholder="••••••••"
                className="mt-1 w-full rounded-lg bg-white/5 border border-white/20 px-4 py-3 text-sm shadow-sm focus:border-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-400/50 text-white placeholder-white/70"
              />
            </div>

            <div>
              <label
                htmlFor="confirmPassword"
                className="block text-sm font-medium mb-1">
                Confirm Password
              </label>
              <input
                type="password"
                id="confirmPassword"
                name="confirmPassword"
                aria-required="true"
                required
                placeholder="••••••••"
                className="mt-1 w-full rounded-lg bg-white/5 border border-white/20 px-4 py-3 text-sm shadow-sm focus:border-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-400/50 text-white placeholder-white/70"
              />
            </div>

            <div className="flex items-center">
              <input
                type="checkbox"
                id="terms"
                name="terms"
                className="h-4 w-4 rounded border-white/20 bg-white/5 focus:ring-blue-400"
              />
              <label
                htmlFor="terms"
                className="ml-2 block text-sm text-white/80">
                I agree to the{" "}
                <Link
                  to="/terms"
                  className="text-white hover:underline">
                  Terms and Conditions
                </Link>
              </label>
            </div>

            <button
              type="submit"
              className="w-full rounded-lg bg-gradient-to-r from-blue-600 to-blue-700 px-4 py-3 text-white font-medium shadow-lg hover:from-blue-700 hover:to-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-transparent transition-all duration-200">
              Create Account
            </button>
          </form>

          <div className="my-6 flex items-center">
            <hr className="flex-grow border-white/20" />
            <span className="mx-3 text-sm text-white/70">
              or sign up with
            </span>
            <hr className="flex-grow border-white/20" />
          </div>

          <div className="flex justify-center space-x-4">
            <button
              type="button"
              aria-label="Sign up with Google"
              className="flex h-10 w-10 items-center justify-center rounded-lg bg-white/5 border border-white/20 shadow-sm hover:bg-white/10 transition-colors duration-200">
              <svg viewBox="0 0 48 48" className="h-5 w-5">
                <path
                  fill="#EA4335"
                  d="M24 9.5c3.54 0 6 1.54 7.38 2.83l5.46-5.46C33.46 3.38 29.1 1 24 1 14.82 1 7.05 6.9 4.1 15.44l6.91 5.36C12.82 14.3 17.96 9.5 24 9.5z"
                />
                <path
                  fill="#4285F4"
                  d="M46.1 24.5c0-1.62-.15-3.18-.43-4.68H24v9.09h12.43c-.54 2.78-2.16 5.13-4.56 6.72l7.09 5.5c4.14-3.83 7.14-9.5 7.14-16.63z"
                />
                <path
                  fill="#FBBC05"
                  d="M10.96 28.41c-.5-1.48-.78-3.06-.78-4.91 0-1.85.28-3.43.78-4.91l-6.91-5.36C2.69 15.41 2 19.57 2 23.5c0 3.93.69 8.09 2.05 11.27l6.91-5.36z"
                />
                <path
                  fill="#34A853"
                  d="M24 47c6.1 0 11.22-2 14.96-5.41l-7.09-5.5c-2.06 1.38-4.72 2.22-7.87 2.22-6.04 0-11.18-4.8-12.99-11.3l-6.91 5.36C7.05 41.1 14.82 47 24 47z"
                />
              </svg>
            </button>

            <button
              type="button"
              aria-label="Sign up with GitHub"
              className="flex h-10 w-10 items-center justify-center rounded-lg bg-white/5 border border-white/20 shadow-sm hover:bg-white/10 transition-colors duration-200">
              <svg
                viewBox="0 0 24 24"
                fill="white"
                className="h-5 w-5">
                <path d="M12 .5C5.73.5.5 5.73.5 12c0 5.08 3.29 9.38 7.86 10.9.58.1.79-.25.79-.56v-2c-3.2.7-3.87-1.39-3.87-1.39-.53-1.34-1.29-1.7-1.29-1.7-1.06-.72.08-.71.08-.71 1.17.08 1.78 1.2 1.78 1.2 1.04 1.78 2.73 1.27 3.4.97.1-.76.41-1.27.74-1.56-2.55-.29-5.23-1.28-5.23-5.72 0-1.27.45-2.31 1.19-3.12-.12-.29-.52-1.47.11-3.07 0 0 .97-.31 3.18 1.18a11.1 11.1 0 012.9-.39c.98 0 1.97.13 2.9.39 2.21-1.49 3.18-1.18 3.18-1.18.63 1.6.23 2.78.11 3.07.74.81 1.19 1.85 1.19 3.12 0 4.45-2.69 5.43-5.25 5.71.42.36.8 1.08.8 2.19v3.24c0 .31.21.66.80.55A10.99 10.99 0 0023.5 12c0-6.27-5.23-11.5-11.5-11.5z" />
              </svg>
            </button>

            <button
              type="button"
              aria-label="Sign up with Facebook"
              className="flex h-10 w-10 items-center justify-center rounded-lg bg-white/5 border border-white/20 shadow-sm hover:bg-white/10 transition-colors duration-200">
              <svg
                viewBox="0 0 24 24"
                fill="white"
                className="h-5 w-5">
                <path d="M22.68 0H1.32C.6 0 0 .6 0 1.32v21.36C0 23.4.6 24 1.32 24h11.5v-9.29H9.69v-3.62h3.13V8.41c0-3.1 1.9-4.79 4.66-4.79 1.33 0 2.47.1 2.8.14v3.24l-1.92.001c-1.5 0-1.79.71-1.79 1.75v2.3h3.58l-.47 3.62h-3.11V24h6.1c.73 0 1.32-.6 1.32-1.32V1.32C24 .6 23.4 0 22.68 0" />
              </svg>
            </button>
          </div>
          <p className="mt-6 text-center text-sm text-white/80">
            Already have an account?{" "}
            <Link
              to="/"
              className="font-medium text-white hover:underline">
              Sign in
            </Link>
          </p>
        </div>
      </section>
      <div className="hidden sm:block absolute bottom-10 right-4 w-40 h-40 md:w-60 md:h-60 lg:w-80 lg:h-80 mix-blend-overlay opacity-70">
        <img
          src={login4}
          alt="decorative spiral"
          className="w-full h-auto object-cover drop-shadow-lg"
        />
      </div>
    </main>
  );
};

export default SignUp;
