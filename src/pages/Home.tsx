import React from 'react';
import Header from '../components/layout/Header';
import Layout from '../components/layout/Layout';
import { Link } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import axios, { AxiosError } from 'axios';

const Home = () => {
  const { data } = useQuery(['schedule'], () => {
    return axios.get('http://localhost:8000/schedule');
  });
  console.log(data);

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
