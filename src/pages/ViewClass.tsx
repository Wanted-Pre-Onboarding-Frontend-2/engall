import React from "react";
import Header from "../components/layout/Header";
import Layout from "../components/layout/Layout";
import ScheduleTable from "../components/schedule/table/ScheduleTable";
import { Schedule } from "../types/schedule";
import { Link } from "react-router-dom";
import "../style/table.scss";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const ViewClass = () => {
  const { data }: any = useQuery(["schedule"], () => {
    return axios.get("http://localhost:8000/schedule");
  });

  return (
    <>
      <Layout>
        <div className="title">
          <h2>Class schedule</h2>
          <Link to="/add" className="btn btn-type1 large">
            Add Class Schedule
          </Link>
        </div>
        <ScheduleTable data={data.data} />
      </Layout>
    </>
  );
};

export default ViewClass;

// const TopBox = tw.div`
// flex flex-row justify-between
// `;
