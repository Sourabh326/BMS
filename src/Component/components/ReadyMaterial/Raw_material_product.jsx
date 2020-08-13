import React from 'react'

const Raw_material_product =()=>{

   
    return(
        <>
      
        <div class="container mt-100">
    <div class="row">
        <div class="col-md-12">
            <div class="card bg-light">
                <div class="card-header">
                    <h5>Ready Material Cost</h5>
                </div>
                <div class="card-block">
                    <div class="table-responsive">
                        <table class="table bg-light table-hover table-bordered" id="example-1">
                            <thead>
                                <tr>
                                    <th><input type="checkbox" /></th>
                                    <th>Raw Material</th>
                                    <th>Used Quantity (kg)</th>
                                    <th>Unit</th>
                                    <th>Used Material Per Unit Rate</th>
                                    <th colSpan="2">Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td><input type="checkbox" className="form-control"/></td>
                                    <td class="tabledit-view-mode"><span class="tabledit-span">Electricity</span></td>
                                    <td><input type="Number" className="form-control" name="" placeholder="0.00"  /></td>
                                    <td><input type="text" className="form-control" name="" placeholder="0.00" /></td>
                                    <td><input type="Number" className="form-control" name="" placeholder="0.00" /></td>
                                    <td><i class="fa fa-trash" aria-hidden="true"></i>
                                    </td>
                                </tr>
                                <tr>
                                    <td><input type="checkbox" className="form-control"/></td>
                                    <td class="tabledit-view-mode"><span class="tabledit-span">Machine Mantenance</span></td>
                                    <td><input type="Number" className="form-control" name="" placeholder="0.00" /></td>
                                    <td><input type="text" className="form-control" name="" placeholder="9 kg" /></td>
                                    <td><input type="Number" className="form-control" name="" placeholder="0.00" /></td>
                                    <td><i class="fa fa-trash" aria-hidden="true"></i>
                                    </td>
                                </tr>
                            </tbody>
                            <tfoot className="bg-light">
                                <tr className="text-secondary">
                                    <th colSpan="4">
                                        <div className="float-right">
                                        <h5>Total Cost</h5>
                                        <h5>Per Pcs Cost</h5>
                                        </div>
                                    </th>
                                    <th colSpan="2">
                                       <div className="text-center">
                                       <h5>3322 /-</h5>
                                        <h5>2.34 /-</h5>
                                       </div>
                                    </th>
                                </tr>
                                
                            </tfoot>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>

        </>
    )

}
 export default Raw_material_product;
 


