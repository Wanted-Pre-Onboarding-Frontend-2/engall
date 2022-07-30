import React from 'react';

import Layout from '../components/layout/Layout';
import { Link } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import axios, { AxiosError } from 'axios';
import '../style/layout.scss';

const Home = () => {
  const { data } = useQuery(['schedule'], () => {
    return axios.get('http://localhost:8000/schedule');
  });

  return (
    <>
      <Layout>
        <div className='wrap'>
          <div className='btn-box'>
            <Link to='view'>
              <button type='submit' className='btn btn-type1 large'>
                viewClass
              </button>
            </Link>
            <Link to='add'>
              <button type='submit' className='btn btn-type1 large'>
                addClass
              </button>
            </Link>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default Home;
