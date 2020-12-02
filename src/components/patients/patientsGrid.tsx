import { Table } from "@innovaccer/design-system";
import loaderSchema from './common/loaderSchema';
import {fetchData} from './common/fetchData';
import {useSelector} from 'react-redux';

const PatientsGrid = () => {
  
  const uploaded = useSelector(state => state)

  return (
    <>
      <Table
        loaderSchema={loaderSchema}
        fetchData={fetchData}
        withHeader={true}
        headerOptions={{
          withSearch: true,
        }}
        withPagination={true}
        pageSize={5}
      />
    </>
  );
};

export default PatientsGrid;
