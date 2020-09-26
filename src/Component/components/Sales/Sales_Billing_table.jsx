// Fetch the Data From Purchse_info Table from Database

import React from "react";
import MaterialTable from "material-table";

export default function Sales_Billing_table() {
  const [state, setState] = React.useState({
    columns: [
      { title: "Vendor", field: "Vendor" },
      { title: "Purchase Date", field: "Purchase_Date" },
      { title: "Purchase Time", field: "Purchase_Time" },
      { title: "Vendor Bill No.", field: "Vendor_Bill" },
      { title: "GST (%)", field: "GST" },
      { title: "GST Amount", field: "GST_Amount" },
    ],
    data: [
      {
        Vendor: "Vendor",
        Purchase_Date: "Baran",
        Purchase_Time: "23:39pm",
        Vendor_Bill: "2323",
        GST: "18%",
        GST_Amount: "233",
      },
    ],
  });
  return (
    <MaterialTable
      title="Billing Info"
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
