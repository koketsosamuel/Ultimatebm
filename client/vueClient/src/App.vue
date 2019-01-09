<template>
<div>

  <!-- HORIZONTAL NAV -->
  <nav class="navbar navbar-expand navbar-dark bg-dark fixed-top static-top">

        <i class="fas fa-users pl-2 text-primary"></i>&nbsp;<a class="font-weight-bold text-primary">CustomerManagement</a>

      

      <!-- Navbar Search -->
      <form class="d-none d-md-inline-block form-inline ml-auto mr-0 mr-md-3 my-2 my-md-0">
        <div class="input-group">
          <input type="text" class="form-control" placeholder="Search for..." aria-label="Search" aria-describedby="basic-addon2">
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
      <ul class="sidebar navbar-nav bg-dark pl-4">
        <li class="nav-item active">
          <a class="nav-link text-white" href="index.html">
            <i class="fas fa-fw fa-tachometer-alt"></i>
            <span>&nbsp;Dashboard</span>
          </a>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link text-white dropdown-toggle" href="#" id="pagesDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            <i class="fas fa-fw fa-folder"></i>
            <span>&nbsp;Customers</span>
          </a>
          <div class="dropdown-menu" aria-labelledby="pagesDropdown">
            <a class="dropdown-item" href="login.html">View Customers</a>
            <a class="dropdown-item" href="register.html">Add Customer</a>
          </div>
        </li>
        <li class="nav-item">
          <a class="nav-link text-white" href="tables.html">
            <i class="fas fa-fw fa-table"></i>
            <span>&nbsp;Payments</span></a>
        </li>
        <li class="nav-item">
          <a class="nav-link text-white" href="charts.html">
            <i class="fas fa-fw fa-chart-area"></i>
            <span>&nbsp;Statstics</span></a>
        </li>
      </ul>

       <div  class="mainsection">
         <div class="container-fluid pt-1 pb-4">
          <view-customer />
         </div>
       </div>
       
    

    
</div>
</template>

<script>
import addCustomer from './components/addCustomer.vue'
import viewCustomer from './components/viewCustomers'
import dashboard from './components/dashboard'

export default {
  name: 'app',
  components: {
    addCustomer, viewCustomer, dashboard
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
  border: 10px #333 solid;
  border-right: none;
  border-left: none;
}

.mainsection {
  position: fixed!important;
  left: 20vw !important;
  top: 0 !important;
  height: calc(100vh - 55px) !important;
  background: #333;
  width: 80vw!important;
  margin-top: 55px;
  color: aliceblue;
  overflow-y: auto;
}

.navbar {
  height: 55px !important;
}
</style>
