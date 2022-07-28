import React from "react";
import Header from "../components/layout/Header";
import Layout from "../components/layout/Layout";
import { Link } from "react-router-dom";
const Home = () => {
  return (
    <>
      <Layout>
        <div>
          <Link to="view">viewClass</Link>
          <Link to="add">addClass</Link>
        </div>
      </Layout>
    </>
  );
};

export default Home;

// const Box = tw.div`
// flex gap-10 justify-center mt-10
// `;
// const StyledLink = tw(Link)`
// bg-engall-blue p-2 rounded-md
// `;
