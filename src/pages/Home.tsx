import React from 'react';
import Header from '../components/layout/Header';
import Layout from '../components/layout/Layout';
import { Link } from 'react-router-dom';
import { useQuery } from 'react-query';
import axios from 'axios';

const Home = () => {
  // const { isLoading, data, isError, error } = useQuery('schedule_info', () => {
  //   return axios.get('http://localhost:8000/schedule');
  // });

  // if (isLoading) {
  //   return <h2>Loading...</h2>;
  // }

  // if (isError) {
  //   return <h2>{error.message}</h2>;
  // }
  // console.log('data', data);

  return (
    <>
      <Layout>
        {/* {isLoading && <h2>Loading...</h2>}
        {isError && <h2>{error.message}</h2>} */}
        <div>
          <Link to='view'>viewClass</Link>
          <Link to='add'>addClass</Link>
        </div>
      </Layout>
    </>
  );
};

export default Home;
