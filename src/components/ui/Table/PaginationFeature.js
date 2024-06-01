import { recordsPerPage } from '../../constants/app';
export const paginationPages = (dataSource) => {
  const nPages = Math.ceil(dataSource.length / recordsPerPage);
  return nPages;
};

export const paginateRecords = (currentPage, data) => {
  const indexOfLastRecord = currentPage * recordsPerPage;
  const indexOfFirstRecord = indexOfLastRecord - recordsPerPage;
  const currentRecords = data.slice(indexOfFirstRecord, indexOfLastRecord);
  return currentRecords;
};

export const initPaginate = (data) => {
  if (data.length > recordsPerPage) {
    const dataSlice = data.slice(0, recordsPerPage);
    return dataSlice;
  } else {
    return data;
  }
};
