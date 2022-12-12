import { AiFillFacebook, AiOutlineGoogle } from "react-icons/ai";

const Login = () => {
  return (
    <div className="flex items-center justify-center mt-20 mb-10">
      <div className=" lg:w-5/12 w-9/12 md:w-7/12 shadow-[0_2px_8px_0px_rgba(99,99,99,0.3)]">
        <div className="p-5 rounded-t-md bg-gray-700 text-gray-300 font-bold">
          <h1 className="text-3xl">Log in</h1>
        </div>
        <div className="p-5 rounded-md bg-white">
          <div>
            <div>
              <button className="rounded w-full py-3 my-1 text-lg text-white bg-blue-900">
                <div className="flex items-center justify-center">
                  <AiFillFacebook className="text-2xl mr-2" />
                  <p>Login with facebook</p>
                </div>
              </button>
              <button className="rounded w-full py-3 my-1 text-lg text-white bg-blue-500">
                <div className="flex items-center justify-center">
                  <AiOutlineGoogle className="text-2xl mr-2" />
                  <p>Login with Google</p>
                </div>
              </button>
            </div>
            <div className="flex items-center justify-center w-full my-4">
              <hr className="w-full border" />
              <h1 className="text-xl px-5 text-gray-400">Or</h1>
              <hr className="w-full border" />
            </div>
            <div>
              <div>
                <input
                  placeholder="Enter your email"
                  className="my-2 border-2 w-full text-2xl py-2 px-3 border-gray-100 rounded"
                />
              </div>
              <div>
                <input
                  placeholder="Password"
                  className="my-2 border-2 w-full text-2xl py-2 px-3 border-gray-100 rounded"
                />
              </div>
              <div className="flex items-center ml-2">
                <input defaultChecked type="checkbox" className=" w-5 h-5" />
                <p className="ml-3 mb-1">Keep me logged in</p>
              </div>
            </div>
            <div>
              <button className="transition rounded w-full py-3 my-6 border-2  border-blue-500 hover:bg-white hover:text-blue-500 text-lg text-white bg-blue-500">
                <div className="flex items-center justify-center">
                  <p>Login</p>
                </div>
              </button>
            </div>
            <div className="w-full">
              <div className="flex text-lg mx-auto justify-center">
                <p>Need an account? </p>
                <span className="ml-2 cursor-pointer">Sing Up</span>
              </div>
              <div className="flex text-lg mx-auto justify-center">
                <span className="ml-2 cursor-pointer">Forgot Passowrd?</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Login;
