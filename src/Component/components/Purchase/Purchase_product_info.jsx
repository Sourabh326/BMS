import React from 'react'

const Purchase_product_info=()=> {
    return (
      <>
      
      {/* it is Temperary data Table for Add Records form Purchase Form like TODO LIST */}
      <div>
        <h5>Temperarily Details</h5>
      </div>
      <table class="table shadow table-responsive-sm">
  <thead style={{backgroundColor:'#f1f3de',border:'none'}}>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Vendor</th>
      <th scope="col">Purchase date</th>
      <th scope="col">Purchase time</th>
      <th scope="col">Raw Material</th>
      <th scope="col">Unit</th>
      <th scope="col">Quantity</th>
      <th scope="col">GST(%)</th>
      <th scope="col">GST Amount</th>
      <th scope="col">Total Amount</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>Mark</td>
      <td>Otto</td>
      <td>@mdo</td>
      <td>Mark</td>
      <td>Otto</td>
      <td>@mdo</td>
      <td>Mark</td>
      <td>Otto</td>
      <td>@mdo</td>
    </tr>
    <tr>
      <th scope="row">1</th>
      <td>Mark</td>
      <td>Otto</td>
      <td>@mdo</td>
      <td>Mark</td>
      <td>Otto</td>
      <td>@mdo</td>
      <td>Mark</td>
      <td>Otto</td>
      <td>@mdo</td>
    </tr>
  </tbody>
</table>
        </>
    )
}

export default Purchase_product_info;
