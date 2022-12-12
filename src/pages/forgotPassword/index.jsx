
const ForgotPassword = () => {
  return (
    <div className="flex items-center justify-center mt-20 mb-10">
      <div className=" lg:w-5/12 w-9/12 md:w-7/12 shadow-[0_2px_8px_0px_rgba(99,99,99,0.3)]">
        <div className="p-5 rounded-t-md bg-gray-700 text-gray-300 font-bold">
          <h1 className="text-3xl">Forgot Password</h1>
        </div>
        <div className="p-5 rounded-md bg-white">
          <div>
            <div>
              <div>
                <input
                  placeholder="Enter your email"
                  className="my-2 border-2 w-full text-2xl py-2 px-3 border-gray-100 rounded"
                />
              </div>
             
            </div>
            <div>
              <button className="transition rounded w-full py-3 my-6 border-2  border-blue-500 hover:bg-white hover:text-blue-500 text-lg text-white bg-blue-500">
                <div className="flex items-center justify-center">
                  <p>Send</p>
                </div>
              </button>
            </div>
           
          </div>
        </div>
      </div>
    </div>
  );
};
export default ForgotPassword;
