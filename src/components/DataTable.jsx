import { useState } from "react";

const SelectedItems = ({ select }) => {
  return (
    <div>
      <p>{select < 2 ? `${select} row selected` : `${select} rows selected`}</p>
    </div>
  );
};
const DataTable = ({ rows, columns, title }) => {
  let [select, setSelect] = useState([]);
// Selecting single item one by one
  const singleSelect = (e) => {
    if (e.currentTarget.checked) {
      setSelect([...select, e.currentTarget.id]);
    } else {
      setSelect(select.filter((id) => id !== e.currentTarget.id));
    }
  };
// Selecting all items
let [allSelect,setAllSelect] = useState(null);
 const selectAll = (e) =>{
      if(e.currentTarget.checked){
        setAllSelect(true);
        setSelect(rows.map((item,index)=> index));
      }
      if(!e.currentTarget.checked){
        setAllSelect(null);
        setSelect([]);
      }
 }

  return (
    <div className="shadow-[0_2px_8px_0px_rgba(99,99,99,0.3)]  mt-5 mb-5  w-11/12 mx-auto bg-white rounded-lg overflow-hidden ">
      <div className="bg-gray-700 py-4 px-4">
        <h1 className="text-3xl text-gray-300 font-bold">{title}</h1>
      </div>
      <div>
        <div className=" mx-auto vh64 overflow-scroll test bg-white  ">
          <table className=" relative">
            {/* Table Head */}
            <thead  className="bg-gray-500 text-white sticky top-0">
              <tr>
                <th>
                  <div className="ml-5 ">
                    <input onClick={(e)=> selectAll(e)} onChange={(e)=>selectAll(e) } className="w-4 h-4" type="checkbox" name="" id="" />
                  </div>
                </th>
                <th className="p-3 text-left">SN</th>
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
            {/* Table Body */}
            <tbody>
              {rows.map((row, index) => {
                return (
                  // Default Checkbox and Index Row
                  <tr className="odd:bg-slate-100" key={index + 1}>
                    <td>
                      <div className="ml-5">
                        <input
                          checked={allSelect}
                          className="w-4 h-4"
                          id={index}
                          onChange={(e) => singleSelect(e)}
                          onClick={(e) => singleSelect(e)}
                          type="checkbox"
                        />
                      </div>
                    </td>
                    <td className="p-3 text-left">{index + 1}</td>
                    {columns.map((item, index) => {
                      return (
                        <td className="py-3 pl-1" key={index}>
                          {row[item.id]}
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
      {/* Total Footer */}
      <div className="bg-gray-700 py-4 px-4">
        <div>
          <div className="text-white">
            {select.length ? (
              <SelectedItems select={select.length} />
            ) : (
              <div className="text-gray-700">0</div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DataTable;
