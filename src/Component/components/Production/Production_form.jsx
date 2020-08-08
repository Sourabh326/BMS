import React from 'react'


const Production_form =()=> {
   return (
       <>
   
          <button className="btn btn-danger  mb-5" >Add New</button>
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
    
                    <div class="form-group row pmd-textfield pmd-textfield-outline pmd-textfield-floating-label">
	                    <label for="default-outline-select" className=" col-sm-10 col-form-label">Standard Weight</label>
	                    <select id="default-outline-select" name="standard_weight" class="form-control col-sm-10">
	                  	 <option disabled>Select</option>
	                  	 <option value="">1</option>
                       <option value="1" >2</option>
                    	</select>
                    </div>
                    <div class="form-group row pmd-textfield pmd-textfield-outline pmd-textfield-floating-label">
	                    <label for="default-outline-select" className=" col-sm-10 col-form-label">Standard Size</label>
	                    <select id="default-outline-select" name="standard_size" class="form-control col-sm-10">
	                  	 <option disabled>Select</option>
	                  	 <option value="">1</option>
                       <option value="1" >2</option>
                    	</select>
                    </div>
                  
                    </div>
                 <div className="col-md-6">
          
                  <div className="form-group row">
                    <label for="production_qty" className=" col-sm-10  col-form-label">Production Quantity</label>
                    <div className="col-sm-10">
                      <input type="text" className="form-control" name="production_qty"  placeholder="Production Quantity" />
                    </div>
                  </div><hr/>
                  <div className="row p-5 bg-light">
                     <div className="col-md-6">
                         <h5 className="mt-3">Total Production Cost</h5>
                     </div>
                     <div className="col-md-6">
                         <h1 className="text-info">2233 Rs/-</h1>
                     </div>
                  </div>
                  
                 </div>
                  </div>
                 
                </div>
                
                <div className="card-footer">
                  <button type="submit" className="btn btn-info" >Add Vendor</button>
                  <button type="submit" className="btn btn-default float-right cancle">Cancel</button>
                </div>
               
              </form>
            </div>
       

       </>
    )
}

export default Production_form
