<template>
    <div>

        <h1 class="float-left">Customers&nbsp;<div class="badge badge-primary">{{boys.length}}</div></h1>
        
        <div class="btn-group float-right">
            <button class="btn btn-lg btn-primary disabled">Per Page</button>
            <button class="btn btn-lg btn-secondary" id="sortBy" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><i class="fa fa-arrow-down"></i></button>
            <div class="dropdown-menu" aria-labelledby="sortBy">
                <a class="dropdown-item" href="#">Name</a>
                <a class="dropdown-item" href="#">Age</a>
                <a class="dropdown-item" href="#">Date Registered</a>

            </div>
        </div>

        <div class="clearfix"></div>

        <div class="alert alert-primary" v-for="boy in boys" v-bind:key="boy">{{boy}}</div>

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
    data: function (){
        return {
            boys: ['matt', 'dan', 'led', 'nobody', 'chad', 'joe', 'vince', 'oscar', 'sphiwe', 'liser']
        }
    }
}
</script>

<style>
    .page-link {
        border-radius: 0!important;
    }
</style>
