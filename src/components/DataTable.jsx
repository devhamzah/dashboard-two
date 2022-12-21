const DataTable = ({ rows, columns, title }) => {



  return (
    <div className="shadow-[0_2px_8px_0px_rgba(99,99,99,0.3)]  mt-5 mb-5  w-11/12 mx-auto bg-white rounded-xl overflow-hidden ">
      <div className="bg-gray-700 py-4 px-4">
        <h1 className="text-3xl text-gray-300 font-bold">{title}</h1>
      </div>
      <div>
        <div className=" mx-auto vh64 overflow-scroll test bg-white  ">
          <table className=" relative">
            <thead className="bg-gray-500 text-white sticky top-0">
              <tr>
                <th className="p-3 text-left" >SN</th>
                {columns.map((item, index) => {
                  return (
                    <th
                      className="p-3 text-left"
                      style={
                        item.minWidth && { minWidth: `${item.minWidth}px` }
                      }
                      key={index}
                    >
                      <div className="border-l-2">
                        <h1 className="ml-1">{item.title}</h1>
                      </div>
                    </th>
                  );
                })}
              </tr>
            </thead>
            <tbody>
              {rows.map((row, index) => {
                return (
                  <tr className="odd:bg-slate-100" key={index + 1}>
                    <td className="p-3 text-left" >{index + 1}</td>
                    {columns.map((item, index) => {
                      return (
                        <td className="py-3 pl-1" key={index}>
                          { row[item.id]}
                        </td>
                      );
                    })}
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
      <div className="bg-gray-700 py-4 px-4">
        <h1 className="text-3xl text-gray-300 font-bold">{title}</h1>
      </div>
    </div>
  );
};

export default DataTable;
