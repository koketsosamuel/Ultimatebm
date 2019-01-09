<template>
  <div>
    <h1>ADD CUSTOMER</h1>
    
    
      
      <h3>Personal Details</h3>
        <div class="row">
          
          <div class="form-group mt-2 py-0 my-0 col-lg-4 col-md-6">
            <label>First Name(s)</label>
            <input class="form-control mt-0">
          </div>

          <div class="form-group mt-2 py-0 my-0 col-lg-4 col-md-6">
            <label>Surname</label>
            <input class="form-control mt-0">
          </div>

          <div class="form-group mt-2 py-0 my-0 col-lg-4 col-md-6">
            <label>Gender</label>
            <select name="" id="" class="form-control mt-0">
              <option value="male">Male</option>
              <option value="female">Female</option>              
            </select>
          </div>


          <div class="form-group mt-2 py-0 my-0 col-lg-4 col-md-6">
            <label>ID Number</label>
            <input class="form-control mt-0" type="number">
          </div>

          <div class="form-group mt-2 py-0 my-0 col-lg-4 col-md-6">
            <label>Race</label>
            <select name="" id="" class="form-control mt-0">
              <option value="black">Black</option>
              <option value="white">White</option> 
              <option value="asian">Asian</option>             
            </select>
          </div>

           <div class="form-group mt-2 py-0 my-0 col-lg-4 col-md-6">
            <label>Cellphone Number</label>
            <input class="form-control mt-0" type="number">
          </div>
          
          <div class="form-group mt-2 py-0 my-0 col-lg-4 col-md-6">
            <label>Email Address</label>
            <input class="form-control mt-0" type="number">
          </div>

          <div class="form-group mt-2 py-0 my-0 col-lg-8 col-md-6">
            <label>Physical Address</label>
            <input class="form-control mt-0" type="number">
          </div>

        </div>
        <!-- PERSONAL DETAILS END -->

        <!-- NEXT OF KIN -->

        <h3 class="mt-4">Next of Kin</h3>
        <div class="row">
          <div class="form-group mt-2 py-0 my-0 col-lg-4 col-md-6">
            <label>First Name</label>
            <input class="form-control mt-0" type="number">
          </div>

          <div class="form-group mt-2 py-0 my-0 col-lg-4 col-md-6">
            <label>Surname</label>
            <input class="form-control mt-0" type="number">
          </div>

          <div class="form-group mt-2 py-0 my-0 col-lg-4 col-md-6">
            <label>Cellphone Number</label>
            <input class="form-control mt-0" type="number">
          </div>

          
        </div>

        <!-- NEXT OF KIN END -->


        <!-- SERVICE -->
        <h3 class="mt-4">Service</h3>
        <div class="row">
          
          <div class="form-group mt-2 py-0 my-0 col-lg-4 col-md-6">
            <label>Type</label>
            <select name="" id="" class="form-control mt-0">
              <option value="black">Monthly</option>
              <option value="white">Once-Off</option>              
            </select>
          </div>

          <div class="form-group mt-2 py-0 my-0 col-lg-4 col-md-6">
            <label>Package</label>
            <select name="" id="" class="form-control mt-0">
              <option value="black">Service1</option>
              <option value="white">White</option> 
              <option value="asian">Asian</option>             
            </select>
          </div>

          <div class="form-group mt-2 py-0 my-0 col-lg-4 col-md-6">
            <label>Monthly Fee</label>
            <div class="input-group">
              <span class="input-group-addon bg-primary py-1 px-3">R</span>
              <input type="text" class="form-control">
            </div>
          </div>

        </div>
        <!-- SERVICE END -->

        <button class="btn btn-primary btn-lg mt-3 mr-3">Register Customer</button>
        <button class="btn btn-danger btn-lg mt-3 mr-3">Cancel</button>


  </div>
</template>

<script>
export default {
  name: 'addCustomer'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
lable {
  margin-bottom: 1px !important;
}
</style>
