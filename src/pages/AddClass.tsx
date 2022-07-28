import React from "react";
import Header from "../components/layout/Header";
import Layout from "../components/layout/Layout";
// import tw from "tailwind-styled-components";

const AddClass = () => {
  return (
    <>
      <Layout>
        <Header />
        <div className="flex flex-col w-full lg:w-4/5 mx-auto">
          <div>
            <h1 className="ml-0 m-7 mt-12 text-3xl font-bold">
              Add Class Schedule
            </h1>
          </div>
          <div>
            <div>
              <span>start time :</span>
              <span>repeat on :</span>
            </div>
          </div>
          <button className="self-end">save</button>
        </div>
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
