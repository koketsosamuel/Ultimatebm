<template>
  <div>
    <h1>ADD CUSTOMER</h1>
      
      <form @submit="alertMe">
        <h3>Personal Details</h3>
          <div class="row">
            
            <div class="form-group mt-2 py-0 my-0 col-lg-4 col-md-6">
              <label>First Name(s)</label>
              <input class="form-control mt-0" type="text" v-model="firstName">
            </div>

            <div class="form-group mt-2 py-0 my-0 col-lg-4 col-md-6">
              <label>Surname</label>
              <input class="form-control mt-0" type="text" v-model="surname">
            </div>

            <div class="form-group mt-2 py-0 my-0 col-lg-4 col-md-6">
              <label>Gender</label>
              <select class="form-control mt-0" v-model="gender">
                <option value="male">Male</option>
                <option value="female">Female</option>              
              </select>
            </div>

            <div class="form-group mt-2 py-0 my-0 col-lg-4 col-md-6">
              <label>ID Number</label>
              <input class="form-control mt-0" type="number" v-model="idNumber">
            </div>

            <div class="form-group mt-2 py-0 my-0 col-lg-4 col-md-6">
              <label>Age</label>
              <input class="form-control mt-0" type="Number" v-model="age">
            </div>

            <div class="form-group mt-2 py-0 my-0 col-lg-4 col-md-6">
              <label>Race</label>
              <select class="form-control mt-0" v-model="race">
                <option value="black">Black</option>
                <option value="white">White</option> 
                <option value="asian">Asian</option>             
              </select>
            </div>

          </div>

          <h3 class="mt-4">Contact Details</h3>

          <div class="row">

            <div class="form-group mt-2 py-0 my-0 col-lg-4 col-md-6">
              <label>Cellphone Number</label>
              <input class="form-control mt-0" type="tel" v-model="cellphoneNumber">
            </div>

            <div class="form-group mt-2 py-0 my-0 col-lg-4 col-md-6">
              <label>Cellphone Number (alternate)</label>
              <input class="form-control mt-0" type="tel" v-model="altCellphoneNumber">
            </div>
            
            <div class="form-group mt-2 py-0 my-0 col-lg-4 col-md-6">
              <label>Email Address</label>
              <input class="form-control mt-0" type="email" v-model="email">
            </div>

            <div class="form-group mt-2 py-0 my-0 col-sm-12">
              <label>Physical Address</label>
              <input class="form-control mt-0" type="text" v-model="physicalAddress">
            </div>

          </div>
          <!-- PERSONAL DETAILS END -->

          <!-- NEXT OF KIN -->

          <h3 class="mt-4">Next of Kin</h3>
          <div class="row">
            <div class="form-group mt-2 py-0 my-0 col-lg-4 col-md-6">
              <label>First Name(s)</label>
              <input class="form-control mt-0" type="text" v-model="nkFirstName">
            </div>

            <div class="form-group mt-2 py-0 my-0 col-lg-4 col-md-6">
              <label>Surname</label>
              <input class="form-control mt-0" type="text" v-model="nkSurname">
            </div>

            <div class="form-group mt-2 py-0 my-0 col-lg-4 col-md-6">
              <label>Cellphone Number</label>
              <input class="form-control mt-0" type="tel" v-model="nkCellphoneNumber">
            </div>

            
          </div>

          <!-- NEXT OF KIN END -->


          <!-- SERVICE -->
          <h3 class="mt-4">Service</h3>
          <div class="row">
            
            <div class="form-group mt-2 py-0 my-0 col-lg-4 col-md-6">
              <label>Type</label>
              <select class="form-control mt-0" v-model="serviceType">
                <option value="black">Monthly</option>
                <option value="white">Once-Off</option>              
              </select>
            </div>

            <div class="form-group mt-2 py-0 my-0 col-lg-4 col-md-6">
              <label>Package</label>
              <select class="form-control mt-0" v-model="servicePackage">
                <option value="black">Service1</option>
                <option value="white">White</option> 
                <option value="asian">Asian</option>             
              </select>
            </div>

            <div class="form-group mt-2 py-0 my-0 col-lg-4 col-md-6">
                <label>Monthly Fee(rands)</label>
                <input type="number" class="form-control">
            </div>

          </div>
          <!-- SERVICE END -->

          <button class="btn btn-primary btn-lg mt-3 mr-3" type="submit">Register Customer</button>
          <button class="btn btn-danger btn-lg mt-3 mr-3">Cancel</button>
        </form>

  </div>
</template>

<script>
export default {
  name: 'addCustomer',
  
  data: function (){
    return {
      firstName: ''
    }
  },

  methods: {

    alertMe: function (e) { 
      alert('yay')
      e.preventDefault()
    }

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
lable {
  margin-bottom: 1px !important;
}
</style>
