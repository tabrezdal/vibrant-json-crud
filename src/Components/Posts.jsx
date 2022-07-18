import React from 'react';
import DataTable from 'react-data-table-component';

const columns = [
  {
      name: 'ID',
      selector: row => row.ID,
  },
  {
      name: 'Title',
      selector: row => row.title,
  },
  {
      name: 'Body',
      selector: row => row.body,
  },
];


const Posts = ({ posts }) => {

  return (
    <>
    <DataTable
            columns={columns}
            data={posts}
        />
    </>
  );
};

export default Posts;
