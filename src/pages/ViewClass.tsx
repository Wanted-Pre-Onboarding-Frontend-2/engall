import React from "react";
import Header from "../components/layout/Header";
import Layout from "../components/layout/Layout";
import Table from "../components/schedule/Tables/Table";
import { useScheduleModel } from "../api/model/useScheduleModels";
import { ScheduleProps } from "../types/schedule";
// import tw from "tailwind-styled-components";

const ViewClass = () => {
  const { getSchedule } = useScheduleModel();
  const [data, setData] = React.useState<ScheduleProps[] | any>();
  console.log(data?.monday);
  React.useEffect(() => {
    getSchedule().then((response) => setData(response));
  }, []);
  return (
    <>
      <Layout>
        <Header />

        <div className="flex flex-col w-full lg:w-4/5 mx-auto">
          <div>
            <h1 className="m-7 mt-12 text-3xl font-bold">Class schedule</h1>
            <button className="m-7 mt-12 text-3xl font-bold">
              Add Class Schedule
            </button>
          </div>
          <div className="flex flex-row">
            <Table weekday="monday" data={data?.monday} />
            <Table weekday="tuesday" data={data?.tuesday} />
            <Table weekday="wednesday" data={data?.wednesday} />
            <Table weekday="thursday" data={data?.thursday} />
            <Table weekday="friday" data={data?.friday} />
            <Table weekday="saturday" data={data?.saturday} />
            <Table weekday="sunday" data={data?.sunday} />
          </div>
        </div>
      </Layout>
    </>
  );
};

export default ViewClass;

// const TopBox = tw.div`
// flex flex-row justify-between
// `;
