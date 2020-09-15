// Fetch Te Data From Purchase_info Table from Databse

import React from "react";
import MaterialTable from "material-table";

export default function Purchase_product_info() {
  const [state, setState] = React.useState({
    columns: [
      { title: "Vendor", field: "Vendor" },
      { title: "Purchase Date", field: "Purchase_Date" },
      { title: "Purchase Time", field: "Purchase_Time" },
      { title: "Raw Material", field: "Raw_material" },
      { title: "Unit", field: "Unit" },
      { title: "Quantity", field: "Quantity" },
      { title: "Total Gross Amount", field: "total_gross_amount" },
      { title: "Total Transport and Handling Charges", field: "total_tarnsport_handling_charge" },
      { title: "Other Charges", field: "other_charges" },
      { title: "Total Discount", field: "total_discount" },
      { title: "Vendor Bill No.", field: "Vendor_Bill" },
      { title: "GST (%)", field: "GST" },
      { title: "GST Amount", field: "GST_Amount" },
      { title: "Total Amount", field: "Net_amount" },
      
    ],
    data: [
      {
        Vendor: "Vendor",
        Purchase_Date: "Baran",
        Purchase_Time: "23:39pm",
        Raw_material: "Brick",
        Unit: "Kg",
        Quantity:"23",
        total_gross_amount:"1220",
        total_tarnsport_handling_charge:"123",
        other_charges:"445",
        total_discount:"75",
        Vendor_Bill: "2323",
        GST: "18%",
        GST_Amount: "233",
        Net_amount:"3434"
      },
    ],
  });
  return (
    <MaterialTable
      title="Purchase Info"
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
