<template>
  <div>

    <h1 class="float-left">Payments&nbsp;</h1>
        
    <select name="" id="" class="form-control float-right d-inline selectForm mt-2">
        <option value="all">all</option>
        <option value="active">active</option>
        <option value="inactive">inactive</option>
    </select>

    <div class="clearfix"></div>

    <div class="row mb-4">
      <div class="col-sm-8">
        <div class="card h-100 border-primary alert-primary">
          <table class="table">
            <tbody>


              <tr>
                <td>
                  NO. OF PAYMENTS MADE THIS MONTH
                </td>
                <td>
                  7
                </td>
              </tr>

            </tbody>
          </table>
        </div>
      </div>

      <div class="col-sm-4">
        <div class="card h-100 bg-primary py-4">
          <div class="display-4 text-center mt-">R 200</div>
          <h3 class="text-center font-weight-light">INCOME THIS MONTH</h3>
        </div>
      </div>
    </div>


    <!-- PAYMENT TABLE -->
    <table class="table table-striped table-dark">
      <thead>
        <tr>
          <th>#</th>
          <th>Date</th>
          <th>Type</th>
          <th>Customer</th>
          <th>Registered By</th>
          <th>Amount</th>
          <th>Balance</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>12 Mar 2018</td>
          <td>Monthly</td>
          <td>Joe Dionaer</td>
          <td>Sam</td>
          <td>500</td>
          <td>-330</td>
        </tr>
      </tbody>
    </table>

  </div>
</template>
