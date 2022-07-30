import Layout from '../components/layout/Layout';
import ScheduleTable from '../components/schedule/table/ScheduleTable';
import { Link } from 'react-router-dom';
import '../style/table.scss';

const ViewClass = () => {
  return (
    <>
      <Layout>
        <div className='title'>
          <h2>Class schedule</h2>
          <Link to='/add' className='btn btn-type1 large'>
            Add Class Schedule
          </Link>
        </div>
        <ScheduleTable />
      </Layout>
    </>
  );
};

export default ViewClass;
