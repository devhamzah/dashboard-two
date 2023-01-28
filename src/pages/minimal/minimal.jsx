import ProgressCircle from "../../components/ProgressCircle";

const Minimal = () => {
  return (
    <>
      <main className="p-5 m-5 rounded-lg bg-white ">
        <div className="infolet grid sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4  gap-4">
          {/* First*/}
          <div className="bg-gray-600 p-4 rounded-lg flex gap-5 justify-center items-center text-white">
            <div>
              <p className="text-md">Total Income</p>
              <h1 className="text-2xl lg:text-xl font-bold my-2">$ 453,500</h1>
              <p className="text-md">Saved 25%</p>
            </div>
            <div>
              <ProgressCircle
                size={115}
                progress={82}
                strokeWidth={12}
                circleOneStroke={"#22c55e"}
                circleTwoStroke={"white"}
                textSize={22}
              />
            </div>
          </div>
          {/* Second */}
          <div className="bg-gray-600 p-4 rounded-lg flex gap-5 justify-center items-center text-white">
            <div>
              <p className="text-md">Total Expense</p>
              <h1 className="text-2xl lg:text-xl font-bold my-2">$ 453,500</h1>
              <p className="text-md">Saved 25%</p>
            </div>
            <div>
              <ProgressCircle
                size={115}
                progress={37}
                strokeWidth={12}
                circleOneStroke={"#60a5fa"}
                circleTwoStroke={"white"}
                textSize={22}
              />
            </div>
          </div>
          {/* Third */}
          <div className="bg-gray-600 p-4 rounded-lg flex gap-5 justify-center items-center text-white">
            <div>
              <p className="text-md">Cash on Hand</p>
              <h1 className="text-2xl lg:text-xl font-bold my-2">$ 453,500</h1>
              <p className="text-md">Saved 25%</p>
            </div>
            <div>
              <ProgressCircle
                size={115}
                progress={64}
                strokeWidth={12}
                circleOneStroke={"#e879f9"}
                circleTwoStroke={"white"}
                textSize={22}
              />
            </div>
          </div>
          {/* Fourth */}
          <div className="bg-gray-600 p-4 rounded-lg flex gap-5 justify-center items-center text-white">
            <div>
              <p className="text-md">Cash on Hold</p>
              <h1 className="text-2xl lg:text-xl font-bold my-2">$ 453,500</h1>
              <p className="text-md">Saved 25%</p>
            </div>
            <div>
              <ProgressCircle
                size={115}
                progress={16}
                strokeWidth={12}
                circleOneStroke={"#fcd34d"}
                circleTwoStroke={"white"}
                textSize={22}
              />
            </div>
          </div>
       
        </div>
      </main>
    </>
  );
};

export default Minimal;
