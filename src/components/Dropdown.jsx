

const Dropdown = ({listItems,isOpen}) =>{
return <div className={`transition  ${!isOpen ? "h-0 overflow-hidden" :""} shadow-[0_2px_8px_0px_rgba(99,99,99,0.3)] absolute right-2 mt-3 rounded-md bg-white`}>
    <ul>
      {listItems && listItems.map((item)=>{
        return <li className="transition text-center rounded-md w-20 p-1 text-sm hover:text-white text-gray-500 hover:bg-gray-500" key={item}>{item}</li>
      })}
    </ul>
</div>
}
export default Dropdown;