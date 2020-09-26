// Fetch The Data From Purchase_transportation_info from Database

import React,{useEffect,useState} from "react";
import MaterialTable from "material-table";
import axios from "axios";

export default function Transport_info_table() {

const [formData , setFormData] = useState([])
  useEffect(()=>{
    axios.get('/transportations') //data source
         .then(res => {
            setFormData(res.data.purchases_transport)
         })
         .catch(error => {
             console.log(error)
         })
  },[])  

  
  const [state, setState] = React.useState({
    columns: [
      { title: "Vehicle Name", field: "vehicle_name" },
      { title: "Vehicle No.", field: "vehicle_no" },
      { title: "Driver Name", field: "driver_name" },
      { title: "Driver Contact", field: "driver_contact_no" },
      { title: "No. of Trip / Per day", field: "no_of_trip_a_day" },
    ],
    data:[]
  });
  

  return (
    <MaterialTable
      title="Transport Info"
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
