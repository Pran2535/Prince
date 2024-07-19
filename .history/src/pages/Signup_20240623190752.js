import React from "react";

const Signup = () => {
  return (
    <div>
      {/*
        Heads up! 👋

        Plugins:
          - @tailwindcss/forms
      */}

      <section className="relative flex flex-wrap lg:h-screen lg:items-center">
        <div className="w-full px-4 py-12 sm:px-6 sm:py-16 lg:w-1/2 lg:px-8 lg:py-24">
          <div className="mx-auto max-w-lg text-center">
            <h1 className="text-2xl font-bold sm:text-3xl">
              Create an Account
            </h1>

            <p className="mt-4 text-gray-500">
              Welcome to Prince Crypto, the all-in-one web application used for
              learning trading, accessing current data, and practicing with a
              dummy app.
            </p>
          </div>

          <form action="#" className="mx-auto mb-0 mt-8 max-w-md space-y-4">
            <div>
              <label htmlFor="name" className="sr-only">
                Name
              </label>

              <input
                type="text"
                id="name"
                name="name"
                className="w-full rounded-lg border-gray-200 p-4 text-sm shadow-sm"
                placeholder="Enter your name"
              />
            </div>

            <div>
              <label htmlFor="email" className="sr-only">
                Email
              </label>

              <input
                type="email"
                id="email"
                name="email"
                className="w-full rounded-lg border-gray-200 p-4 text-sm shadow-sm"
                placeholder="Enter email"
              />
            </div>

            <div>
              <label htmlFor="password" className="sr-only">
                Password
              </label>

              <input
                type="password"
                id="password"
                name="password"
                className="w-full rounded-lg border-gray-200 p-4 text-sm shadow-sm"
                placeholder="Enter password"
              />
            </div>

            <div>
              <label htmlFor="confirm-password" className="sr-only">
                Confirm Password
              </label>

              <input
                type="password"
                id="confirm-password"
                name="confirm-password"
                className="w-full rounded-lg border-gray-200 p-4 text-sm shadow-sm"
                placeholder="Confirm password"
              />
            </div>

            <div className="flex items-center justify-between">
              <p className="text-sm text-gray-500">
                Already have an account?{" "}
                <a href="/login" className="underline">
                  Sign in
                </a>
              </p>

              <button
                type="submit"
                className="inline-block rounded-lg bg-blue-500 px-5 py-3 text-sm font-medium text-white"
              >
                Sign up
              </button>
            </div>
          </form>
        </div>

        <div className="relative h-64 w-full sm:h-96 lg:h-full lg:w-1/2">
          <img
            alt=""
            src="https://images.unsplash.com/photo-1630450202872-e0829c9d6172?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
            className="absolute inset-0 h-full w-full object-cover"
          />
        </div>
      </section>
    </div>
  );
};

export default Signup;
