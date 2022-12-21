import DataTable from "../../components/DataTable";
import peoples from "../../peopleContacts.json";

const columns = [
  { title: "ID", id: "_id" ,minWidth:240},
  { title: "Name", id: "name",minWidth:170 },
  { title: "Company", id: "company",minWidth:170 },
  { title: "Email", id: "email",minWidth:170 },
  { title: "Phone", id: "phone" ,minWidth:170},
  { title: "Address", id: "address",minWidth:480 },
];
const Contacts = () => {


  return (
      <DataTable rows={peoples} columns={columns} title="Contacts" />
  );
};
export default Contacts;
