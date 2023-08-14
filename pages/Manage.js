import { default as Navbar } from "@/Components/Navbar";
import Table from "@/Components/Table";

const Manage = () => {
  return (
    <>
      {/* <Navbar pageTitle="Manage Checks" /> */}
      <div className="flex flex-col">
        <Table />
      </div>
    </>
  );
};

export default Manage;
