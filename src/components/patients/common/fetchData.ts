import { schema } from './schema';
import { fetchDataFunction, Schema, RowData } from '@innovaccer/design-system/core/components/organisms/grid/Grid';
import {filterData, sortData, translateData} from './utility';
import { Data } from '@innovaccer/design-system/dist/core/components/organisms/grid';
import {getAllPatientDetails} from '../../../api/patientApi';

export const fetchData: fetchDataFunction = async (options) => {
    const {
      page,
      pageSize,
      sortingList,
      filterList,
      searchTerm
    } = options;
  
    const onSearch = (d: any, searchTerm: string = '') => {

      return (
        d.name.toLowerCase().match(searchTerm.toLowerCase())
        || d.name.toLowerCase().match(searchTerm.toLowerCase())
      );
  
      return true;
    }
    const data: Data = await getAllPatientDetails();
    const filteredData: Data = filterData(schema, data, filterList);
    const searchedData = filteredData.filter(d => onSearch(d, searchTerm));
    const sortedData = sortData(schema, searchedData, sortingList);

    if (page && pageSize) {
      return new Promise(resolve => {
        setTimeout(() => {
          const start = (page - 1) * pageSize;
          const end = start + pageSize;
          const slicedData = sortedData.slice(start, end);
          resolve({
            schema,
            count: sortedData.length,
            data: slicedData,
          });
        }, 2000);
      });
    }
  
    return new Promise(resolve => {
      setTimeout(() => {
        resolve({
          schema,
          count: sortedData.length,
          data: sortedData,
        });
      }, 2000);
    });
};