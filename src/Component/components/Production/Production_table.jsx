import React, { useEffect } from 'react';
import MaterialTable from 'material-table';

export default function MaterialTableDemo({tableData}) {
  const [state, setState] = React.useState({
    columns: [
      { title: 'Product Category', field: 'category_name' },
      { title: 'Product Name', field: 'product_name' },
      { title: 'Production Quantity', field: 'production_qty', type: 'numeric' },
      {title: 'Total Production Cost',field: 'total_production_cost' },
    ],
    data: [],
  });

  useEffect(()=>{
    setState(state=>({
      ...state,
      data:[...tableData]
    }))
  },[tableData])

  return (
    <MaterialTable
      title="Production Details"
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