import { useEffect, useState } from "react";

import GoogleLogin from "../component/Login-Registration/GoogleLogin";
import useAuth from "../hooks/useAuth";
import { Link, useLocation, useNavigate } from "react-router-dom";

const SignUp = () => {
  const [passwordMatch, setPasswordMatch] = useState(true);
  const { createUser, user } = useAuth();
  const location = useLocation();
  const navigate = useNavigate();

  const from = location?.state?.from?.pathname || "/";

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    const confirm_password = form.confirm_password.value;

    if (password !== confirm_password) {
      setPasswordMatch(false);
    }

    if (password === confirm_password) {
      await createUser(email, password);
    }

    console.log(email, password, confirm_password);
  };
  useEffect(() => {
    if (user) {
      navigate(from, { replace: true });
    }
  }, [user, from, navigate]);
  return (
    <section className="h-screen">
      <h1 className="text-3xl font-bold text-center">
        Please
        <span className="bg-warning text-white   mx-3 my-2 px-3">Sign up</span>
        to create customize phone case
      </h1>
      <div className="container h-full px-6 py-24">
        <div className="g-6 flex h-full flex-wrap items-center justify-center lg:justify-between">
          {/* <!-- Left column container with background--> */}
          <div className="mb-12 md:mb-0 md:w-8/12 lg:w-6/12">
            <img
              src="https://i.pinimg.com/736x/63/77/36/63773689c5405621be6336d5e91b5b61.jpg"
              className="w-full"
              alt="Phone image"
            />
          </div>

          {/* <!-- Right column container with form --> */}
          <div className="md:w-8/12 lg:ml-6 lg:w-5/12">
            <form onSubmit={handleSubmit}>
              <input
                className="text-sm w-full px-4 py-2 border border-solid border-gray-300 rounded"
                type="text"
                placeholder="Email Address"
                name="email"
              />
              <input
                className="text-sm w-full px-4 py-2 border border-solid border-gray-300 rounded my-8"
                type="password"
                placeholder="Password"
                name="password"
              />
              <input
                className="text-sm w-full px-4 py-2 border border-solid border-gray-300 rounded my-8"
                type="password"
                placeholder="Confirm Password"
                name="confirm_password"
              />
              {/* <!-- Submit button --> */}

              <div className="form-control mt-6">
                <input
                  className="inline-block w-full rounded bg-warning px-7 pb-2.5 pt-3 text-sm font-medium uppercase leading-normal text-white"
                  type="submit"
                  value="Register"
                />
              </div>
              <Link
                className="text-sm  font-semibold text-yellow-700 my-8"
                to="/login"
              >
                Already Have an account? Login
              </Link>

              {!passwordMatch && (
                <div className="my-2">
                  <p className="text-red-500">Passwords do not match!</p>
                </div>
              )}
              {/* <!-- Divider --> */}
              <div className="my-4 flex items-center before:mt-0.5 before:flex-1 before:border-t before:border-neutral-300 after:mt-0.5 after:flex-1 after:border-t after:border-neutral-300">
                <p className="mx-4 mb-0 text-center font-semibold dark:text-neutral-200">
                  OR
                </p>
              </div>

              {/* <!-- Social login buttons --> */}
              <GoogleLogin />
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SignUp;
