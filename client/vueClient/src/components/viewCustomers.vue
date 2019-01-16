<template>
    <div>

        <h1 class="float-left">Customers&nbsp;<div class="badge badge-primary">{{boys.length}}</div></h1>
        
        <select name="" id="" class="form-control float-right d-inline selectForm mt-2">
            <option value="all">all</option>
            <option value="active">active</option>
            <option value="inactive">inactive</option>
        </select>

        <div class="clearfix"></div>
        <div class="list-group-action mb-4">
          <a class="list-group-item bg-dark text-white" v-for="boy in boys" v-bind:key="boy">
            {{boy}}

            <div class="btn-group float-right">
              <button class="btn btn-sm btn-primary"><i class="fas fa-info-circle"></i></button>
              <button class="btn btn-sm btn-warning"><i class="fas fa-credit-card"></i></button>
            </div>
          
          </a>

          
        </div>  

        <nav>
        <ul class="pagination">
            <li class="page-item">
            <a class="page-link" href="#">1</a>
            </li>

            <li class="page-item">
            <a class="page-link" href="#">2</a>
            </li>

            <li class="page-item">
            <a class="page-link" href="#">3</a>
            </li>

            <li class="page-item">
            <a class="page-link" href="#">4</a>
            </li>

            <li class="page-item">
            <a class="page-link" href="#">5</a>
            </li>
            
            <div class="btn-group ml-3 float-right">
                <button class="btn btn-primary">Next</button>
                <button class="btn btn-primary">Prev</button>
            </div>

        </ul>

        
        </nav>

    </div>
</template>


<script>
export default {
    computed: {
        boys(){
            return this.$store.state.boys
        }
    }
}
</script>

<style>
    .page-link {
        border-radius: 0!important;
    }

    .selectForm {
        width : 100px!important
    }
</style>
