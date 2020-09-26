// Fetch Te Data From Purchase_info Table from Databse

import React, { useEffect, useState } from "react";
import MaterialTable from "material-table";
import axios from "axios";

export default function Sales_info_table() {
  const [formData, setFormData] = useState([]);
  useEffect(() => {
    axios
      .get("/sales") //data source
      .then((res) => {
        setFormData(res.data.purchases);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const [state, setState] = React.useState({
    columns: [
      { title: "Vendor", field: "Vendor" },
      { title: "Transportation Type", field: "transporting_type" },
      { title: "Purchase Date", field: "Purchase_Date" },
      { title: "Purchase Time", field: "Purchase_Time" },
      { title: "Total Gross Amount", field: "total_gross_amount" },
      { title: "Other Charges", field: "other_charges" },
      { title: "Total GST Amount", field: "total_gst_amount" },
      { title: "Total Discount", field: "total_discount" },
      { title: "Total Net Amount", field: "total_net_amount" },
      {
        title: "Total Transport and Handling Charges",
        field: "total_transport_and_handling_charges",
      },
      { title: "Vendor Bill No.", field: "vendor_bill_no" },
    ],
    data: [],
  });
  return (
    <MaterialTable
      title="Sales Info"
      columns={state.columns}
      data={formData}
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
