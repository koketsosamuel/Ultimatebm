<template>
  
  
  <div>

    <h1>Make Payment</h1>

    <form>

      <div class="row">
        
        <div class="col-md-4">
          <div class="form-group">
            <label for="my-input">ID NO.</label>
            <input id="my-input" class="form-control" type="text">
          </div>
        </div>

        <div class="col-md-4">
          <div class="form-group">
            <label for="my-input">NAME</label>
            <input id="my-input" class="form-control" type="text">
          </div>
        </div>

        <div class="col-md-4">
          <div class="form-group">
          <label for="my-input">TYPE</label>
          <select name="" id="" class="form-control">
            <option value="">kg</option>
            <option value="">j</option>
          </select>
        </div>
        </div>

        <div class="col-md-12">
          <div class="form-group">
            <label for="my-input">AMOUNT</label>
            <input id="my-input" class="form-control" type="number">
          </div>
        </div>


        <button class="btn btn-primary btn-lg mt-3 mx-3" type="submit">Process Payment</button>
        <button class="btn btn-danger btn-lg mt-3 mr-3">Cancel</button>

      </div>

    </form>

  </div>


</template>
