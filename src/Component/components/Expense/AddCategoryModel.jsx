import React from 'react'

const AddCategoryModel =()=> {
    return (
        <>
          <form action="">
          <div class="modal fade bd-example-modal-lg" id="categoryModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header bg-info">
        <h5 class="modal-title" id="exampleModalLabel">Add New Category</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div className="container-fluid" >
      <div class="modal-body">
      <div className="row">
       <div className="col-md-12">
                  
                  <div className="form-group row">
                    <label for="category_name" className=" col-sm-10 col-form-label">Category</label>
                    <div className="col-sm-10">
                      <input type="text" className="form-control"  name="category_name" placeholder="Enter Category" />
                    </div>
                  </div>
                 
       </div>
      
      </div>
      </div>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
        <button type="button" class="btn btn-info">Add</button>
      </div>
    </div>
  </div>
</div>
          </form>
        </>
    )
}

export default AddCategoryModel
