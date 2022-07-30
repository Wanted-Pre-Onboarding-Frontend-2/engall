import Layout from '../components/layout/Layout';
import AddForm from '../components/schedule/form/AddForm';
import '../style/form.scss';

const AddClass = () => {
  return (
    <>
      <Layout>
        <div className='title'>
          <h2>Add Class schedule</h2>
        </div>
        <AddForm />
      </Layout>
    </>
  );
};

export default AddClass;
