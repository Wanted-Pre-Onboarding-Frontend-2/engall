import React from "react";
import Header from "../components/layout/Header";
import Layout from "../components/layout/Layout";
// import tw from "tailwind-styled-components";
import AddForm from "../components/schedule/form/AddForm";
import "../style/form.scss";

const AddClass = () => {
  return (
    <>
      <Layout>
        <div className="title">
          <h2>Add Class schedule</h2>
        </div>
        <AddForm />
      </Layout>
    </>
  );
};

export default AddClass;

// const TopBox = tw.div`
// flex flex-row justify-between
// `;

// const AddTable = tw.div`
// w-full bg-white h-60
// `;

// const DropdownBox = tw.div`
// flex flex-col
// `;

// const Text = tw.div`
//  m-10
// `;
