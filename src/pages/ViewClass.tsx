import React from 'react';
import Header from '../components/layout/Header';
import Layout from '../components/layout/Layout';
import Table from '../components/schedule/table/ScheduleTable';
import { ScheduleProps } from '../types/schedule';
import { Link } from 'react-router-dom';
import '../style/table.scss';

const ViewClass = () => {
  // const [data, setData] = React.useState<ScheduleProps[] | any>();
  // console.log(data?.monday);

  return (
    <>
      <Layout>
        <div className='title'>
          <h2>Class schedule</h2>
          <Link to='/add' className='btn btn-type1'>
            Add Class Schedule
          </Link>
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
