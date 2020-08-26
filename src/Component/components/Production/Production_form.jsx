import React from 'react'


const Production_form =()=> {
  
   return (
       <>
   
         <div className="card card-info" >
              <div className="card-header">
                <h3 className="card-title">Production Info</h3>
              </div>
              
              <form className="form-horizontal" >
                <div className="card-body">
                  <div className="row">
                    <div className="col-md-6">
                    <div class="form-group row pmd-textfield pmd-textfield-outline pmd-textfield-floating-label">
	                    <label for="default-outline-select" className=" col-sm-10 col-form-label">Product category</label>
	                    <select id="default-outline-select" name="product_category_id" class="form-control col-sm-10">
	                  	 <option disabled>Select</option>
	                  	 <option value="">Brick</option>
                       <option value="1" >Fly Aish</option>
                    	</select>
                    </div>
                    <div class="form-group row pmd-textfield pmd-textfield-outline pmd-textfield-floating-label">
	                    <label for="default-outline-select" className=" col-sm-10 col-form-label">Product Name</label>
	                    <select id="default-outline-select" name="product_name" class="form-control col-sm-10">
	                  	 <option disabled>Select</option>
	                  	 <option value="">Rope Brick</option>
                       <option value="1" >Fly Brick</option>
                    	</select>
                    </div>
          
                    </div>
                 <div className="col-md-6">
          
                  <div className="form-group row">
                    <label for="production_qty" className=" col-sm-10  col-form-label">Production Quantity</label>
                    <div className="col-sm-10">
                      <input type="text" className="form-control" name="production_qty"  placeholder="Production Quantity" />
                    </div>
                  </div>
                  <div className="form-group row">
                    <label for="total_production_cost" className=" col-sm-10  col-form-label">Total Production Production</label>
                    <div className="col-sm-10">
                      <input type="text" className="form-control" defaultValue="2000" name="total_production_cost" />
                    </div>
                  </div>
                  
                 </div>
                  </div>
                 
                </div>
                
                <div className="card-footer">
                  <button type="submit" className="btn btn-info" >Submit</button>
                  <button type="submit" className="btn btn-default float-right cancle">Cancel</button>
                </div>
               
              </form>
            </div>
       

       </>
    )
}

export default Production_form
