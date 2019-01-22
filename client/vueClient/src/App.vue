<template>
<div>

  <!-- HORIZONTAL NAV -->
  <nav class="navbar navbar-expand navbar-dark bg-dark fixed-top static-top">

        <i class="fas fa-users pl-2 text-primary"></i>&nbsp;<a class="font-weight-bold text-primary">CustomerManagement</a>

      

      <!-- Navbar Search -->
      <form class="d-none d-md-inline-block form-inline ml-auto mr-0 mr-md-3 my-2 my-md-0">
        <div class="input-group">
          <input type="text" class="form-control" placeholder="Search Customers..." aria-label="Search" aria-describedby="basic-addon2">
          <div class="input-group-append">
            <button class="btn btn-primary" type="button">
              <i class="fas fa-search"></i>
            </button>
          </div>
        </div>
      </form>
      <a href="" class="btn btn-primary"><i class="fas fa-user"></i></a>
      <!-- /Navbar Search -->

    </nav>
    <!-- /HORIZONTAL NAV -->
    

      <!-- Sidebar -->
      <ul class="sidebar bg-primary pl-0">
        
          <a class="list-group-item" @click="changeComponent('dashboard')" href="javascript: void(0)">
            <i class="fas fa-fw fa-home"></i>
            <span>&nbsp;Dashboard</span>
          </a>
        
    
          <a class="list-group-item" href="javascript:void(1)">
            <i class="fas fa-fw fa-users"></i>
            <span>&nbsp;Customers</span>

            <div id="customersSubMenu">
              <a class="dropdown-item" @click="changeComponent('viewCustomers')" href="javascript:void(1)">View Customers</a>
              <a class="dropdown-item" @click="changeComponent('addCustomer')" href="javascript:void(2)">Add Customer</a>
            </div>

          </a>

          
        
        
          <a class="list-group-item" href="javascript: void(0)">
            <i class="fas fa-fw fa-credit-card"></i>
            <span>&nbsp;Payments</span>

            <div id="paymentsSubMenu">
              <a class="dropdown-item" @click="changeComponent('viewPayments')" href="javascript:void(1)">View Payments</a>
              <a class="dropdown-item"  @click="changeComponent('makePayment')" href="javascript:void(2)">Make Payment</a>
            </div>

          </a>
        
        
          <a href="javascript: void(0)" class="list-group-item">
            <i class="fas fa-fw fa-box"></i>
            <span>&nbsp;Services</span>
            
            <div id="serviceSubMenu">
              <a href="javascript: void(0)" class="dropdown-item" @click="changeComponent('viewServices')">View Services</a>
              <a href="javascript: void(0)" class="dropdown-item" @click="changeComponent('addService')">Add Service</a>
            </div>

          </a>
        
      </ul>

       <div  class="mainsection alert-primary text-dark">
         <div class="container-fluid pt-1 pb-4">
           <keep-alive>
             <component v-bind:is="component"></component>
           </keep-alive>
         </div>
       </div>
       
    

    
</div>
</template>

<script>

import addCustomer from './components/addCustomer.vue'
import viewCustomers from './components/viewCustomers'
import dashboard from './components/dashboard'
import customerPaymentRecords from './components/customerPaymentRecords'
import makePayment from './components/makePayment'
import viewPayments from './components/viewPayments'
import addService from './components/addService'
import viewServices from './components/viewServices'
import viewCustomer from './components/viewCustomer'

export default {
  name: 'app',

  components: {
    addCustomer,
    viewCustomers,
    dashboard,
    customerPaymentRecords,
    makePayment,
    viewPayments,
    addService,
    viewServices,
    viewCustomer

  },

  computed: {
    component() {
      return this.$store.state.component
    }
  },

  methods: {
    changeComponent: function(payload) {
      this.$store.dispatch('changeComponent', payload)
    }
  }

}
</script>

<style scoped>
#wrapper {
  background: #333;
}

.sidebar {
  position: fixed!important;
  left: 0 !important;
  top: 0 !important;
  height: calc(100vh - 55px) !important;
  background: #222;
  width: 20vw;
  margin-top: 55px;
}

.mainsection {
  position: fixed!important;
  left: 20vw !important;
  top: 0 !important;
  height: calc(100vh - 55px) !important;
  width: 80vw!important;
  margin-top: 55px;
  overflow-y: auto;
}

.navbar {
  height: 55px !important;
}

.list-group-item {
  border-radius: 0px !important;
}
</style>
