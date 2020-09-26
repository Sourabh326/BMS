import React, { useEffect } from 'react';
import MaterialTable from 'material-table';

export default function Employee_table({tableData}) {
  const [state, setState] = React.useState({
    columns: [
      { title: 'Employee', field: 'employee_name' },
      { title: 'City', field: '	address' },
      { title: 'Contact One', field: 'contact_one'},
      {title: 'Contact Two',field: 'contact_two' },
      {title: 'Basic Salary',field: 'basic_salary' },
      {title:'Joining Date',field:'	joining_date'}
    ],
    data: [],
  });

  return (
    <MaterialTable
      title="Employee Details"
      columns={state.columns}
      data={state.data}
      editable={{
        onRowAdd: (newData) =>
          new Promise((resolve) => {
            setTimeout(() => {
              resolve();
              setState((prevState) => {
                const data = [...prevState.data];
                data.push(newData);
                return { ...prevState, data };
              });
            }, 600);
          }),
        onRowUpdate: (newData, oldData) =>
          new Promise((resolve) => {
            setTimeout(() => {
              resolve();
              if (oldData) {
                setState((prevState) => {
                  const data = [...prevState.data];
                  data[data.indexOf(oldData)] = newData;
                  return { ...prevState, data };
                });
              }
            }, 600);
          }),
        onRowDelete: (oldData) =>
          new Promise((resolve) => {
            setTimeout(() => {
              resolve();
              setState((prevState) => {
                const data = [...prevState.data];
                data.splice(data.indexOf(oldData), 1);
                return { ...prevState, data };
              });
            }, 600);
          }),
      }}
    />
  );
}