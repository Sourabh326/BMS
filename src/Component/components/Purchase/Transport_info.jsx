import React from 'react';
import MaterialTable from 'material-table';

export default function Transport_info_table() {
  const [state, setState] = React.useState({
    columns: [
      { title: 'Vehicle Name', field: 'vehicle_name' },
      { title: 'Vehicle No.', field: 'vehicle_no' },
      { title: 'Driver Name', field: 'driver_name' },
      { title: 'Driver Contact', field: 'driver_contact_no' },
      { title: 'No. of Trip / Per day', field: 'no_of_trip_a_day' },
    ],
    data: [
      { vehicle_name: 'Tata Motors', vehicle_no: 'MP50 3233',driver_name: 'Mukesh',driver_contact_no:'78347347',no_of_trip_a_day: '2' },
      
    ],
  });

  return (
    <MaterialTable
      title="Transport Info"
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
