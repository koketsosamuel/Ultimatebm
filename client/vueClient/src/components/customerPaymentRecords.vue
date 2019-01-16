<template>
  <div>

    <h1>Joe's Payments</h1>

    <buttun class="btn btn-primary fixed-action-button"><i class="fas fa-credit-card"></i> PAY</buttun>

    <div class="row mb-4">
      <div class="col-sm-8">
        <div class="card h-1 alert-primary">
          <table class="table">
            <tbody>
              <tr>

                <td>
                  ID NUMBER
                </td>
                <td>
                  9910105428081
                </td>

              </tr>


              <tr>
                <td>
                  NO. OF PAYMENTS MADE
                </td>
                <td>
                  7
                </td>
              </tr>

              <tr>
                <td>
                  STATUS
                </td>

                <td>
                  COVERED
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div class="col-sm-4">
        <div class="card h-100 bg-primary py-4">
          <div class="display-4 text-center mt-">R 200</div>
          <h3 class="text-center font-weight-light">Balance</h3>
        </div>
      </div>
    </div>

    <!-- PAYMENTS TABLE -->
    <table class="table table-striped table-dark">
      <thead>
        <tr>
          <th>#</th>
          <th>Date</th>
          <th>Type</th>
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
          <td>Sam</td>
          <td>500</td>
          <td>-330</td>
        </tr>
      </tbody>
    </table>

  </div>
</template>


<style>

  .fixed-action-button {
    position: fixed;
    bottom: 20px;
    right: 15px;
  }



</style>

