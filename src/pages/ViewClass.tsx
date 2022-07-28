import React from "react";
import Header from "../components/layout/Header";
import Layout from "../components/layout/Layout";
import Table from "../components/schedule/table/Table";
import { useScheduleModel } from "../api/model/useScheduleModels";
import { ScheduleProps } from "../types/schedule";
import { Link } from "react-router-dom";
import "./table.scss";

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
        <div className="title">
          <h2>Class schedule</h2>
          <Link to="/add">Add Class Schedule</Link>
        </div>
        <Table />
      </Layout>
    </>
  );
};

export default ViewClass;

// const TopBox = tw.div`
// flex flex-row justify-between
// `;
