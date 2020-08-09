import React from 'react'

const Common =(props)=> {
    return (
        <>
        <div className="container-fluid">
         <div className="card card-info" id="add-vendor">
              <div className="card-header">
                <h3 className="card-title"> {props.title} </h3>
              </div>
              
              <form className="form-horizontal" >
                <div className="card-body">
                  <div className="row">
                    <div className="col-md-6">

                    <div className="form-group row">
                    <label for="category_name" className=" col-sm-10 col-form-label">  {props.label} </label>
                    <div className="col-sm-10">
                      <input type="text" className="form-control"  name="category_name" placeholder="Category Name" />
                    </div>
                    </div>

                  </div>  
                  </div>
                </div>
                
                <div className="card-footer">
                  <button type="submit" className="btn btn-info" >Add Category</button>
                  <button type="submit" className="btn btn-default ml-4 cancle">Cancel</button>
                </div>
               
              </form>
            </div>
        </div>     
        </>
    )
}

export default Common
