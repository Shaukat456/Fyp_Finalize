import { SidebarComponent } from "@/Components/SidebarComponent";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const Login = () => {
  const [user, setUser] = useState(false);
  const router = useRouter();

  const handleSubmit = e => {
    e.preventDefault();
    const formData = new FormData(e.target);

    const email = formData.get("email");
    const password = formData.get("password");

    const emailRegex = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z]+$/;

    if (!emailRegex.test(email)) {
      console.log("Please enter a valid email address.");
      return;
    }

    if (typeof password !== "string") {
      console.log("Incorrect Password.");
      return;
    }

    setUser(true);
    localStorage.setItem("user", user);
    router.replace("/Home");
  };

  useEffect(() => {
    console.log("render");
  }, [user]);
  return (
    <section className="w-full rounded-xl bg-yellow-500 dark:bg-gray-900">
      <div className="mx-auto flex h-screen flex-col items-center justify-center px-6 py-8 ">
        <div className="w-full rounded-lg bg-white shadow dark:border dark:border-gray-700 dark:bg-gray-800 sm:max-w-md md:mt-0 xl:p-0">
          <div className="space-y-4 p-6 sm:p-8 md:space-y-6">
            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 dark:text-white md:text-2xl">
              Sign in to your account
            </h1>
            <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6">
              <div>
                <label
                  htmlFor="email"
                  className="mb-2 block text-sm font-medium text-gray-500 dark:text-white"
                >
                  Email Address
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  className="focus:ring-primary-600 focus:border-primary-600 block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-gray-900 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500 sm:text-sm"
                  placeholder="************@gmail.com"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="password"
                  className="mb-2 block text-sm font-medium text-gray-500 dark:text-white"
                >
                  Password
                </label>
                <input
                  type="password"
                  name="password"
                  id="password"
                  className="focus:ring-primary-600 focus:border-primary-600 block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-gray-900 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500 sm:text-sm "
                  required
                />
              </div>

              <button
                type="submit"
                className="hover:bg-primary-700 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800 w-full rounded-lg bg-black bg-yellow-500 px-5 py-2.5 text-center text-sm font-medium text-white focus:outline-none   focus:ring-4 "
              >
                Login
              </button>
            </form>
            <p className="  mt-4 text-center text-sm text-gray-400">
              Don &apos; t have an account?
              <Link href={"/SignUp"} className="ml-1 font-bold text-yellow-500">
                Sign Up
              </Link>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;
