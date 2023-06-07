import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

import { FaGoogle } from "react-icons/fa";
import { useAuth } from "../hooks/useAuth";
import { toast } from "react-hot-toast";

const Login = () => {
  const { user, googleSignIn, signIn } = useAuth();
  //   console.log(user);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    signIn(data?.email, data?.password).then((userCredentials) => {
      const user = userCredentials.user;
      console.log(user);
      toast.success(`Signed is successfully as ${user?.displayName}}`);
    });
    console.log(data);
  };
  //   console.log(errors);

  const handleGoogleLogin = () => {
    googleSignIn().then((userCredentials) => {
      const user = userCredentials.user;

      console.log(user);
      const saveUser = {
        name: user.displayName,
        email: user.email,
        photo: user.photoURL,
      };

      fetch("http://localhost:5000/users", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(saveUser),
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.insertedId) {
            toast.success("Signed is successfully");
          }
        });
    });
  };

  return (
    <div className="grid grid-cols-2">
      <div className="flex justify-center items-center h-screen">
        <img
          className="w-2/4"
          src="https://images.unsplash.com/photo-1613144577510-faf2567da706?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=627&q=80"
          alt=""
        />
      </div>
      <div className="flex justify-center items-center h-screen">
        <div className="card  w-full max-w-lg shadow-2xl flex justify-center  bg-base-100">
          <h1 className="text-3xl font-semibold mb-5 text-center">
            Login form here
          </h1>
          <div className="card-body">
            <form className="space-y-5" onSubmit={handleSubmit(onSubmit)}>
              <div className="form-control ">
                <label className="label">
                  <p className="label-text font-semibold">Email</p>
                </label>
                <input
                  type="text"
                  placeholder="Name"
                  {...register("email", { required: true, maxLength: 120 })}
                  className="input input-bordered w-full "
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <p className="label-text font-semibold">Password</p>
                </label>
                <input
                  type="text"
                  placeholder="Name"
                  {...register("password", { required: true, maxLength: 120 })}
                  className="input input-bordered w-full "
                />
                <span className="mt-5">
                  <small>
                    You are new on Trilling Summer?{" "}
                    <Link
                      to="/register"
                      className="text-blue-700 underline bold"
                    >
                      Register here
                    </Link>
                  </small>
                </span>
              </div>
              <input
                className="btn btn-sm mt-4 primary-button text-white border-0 px-5"
                type="submit"
                value="Login"
              />
              <button
                onClick={handleGoogleLogin}
                type="button"
                className="flex w-full mx-auto justify-center items-center  border-sky-500 border py-2 rounded-lg  border-rounded cursor-pointer"
              >
                <FaGoogle className="w-32 h-12 text-blue-500" />

                <p className="text-xl font-semibold">Continue with Google</p>
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;