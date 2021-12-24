<template>
    <div class='grid-waterfall-res-contain'>
        <div class="col" v-for="col in grid_cols" :key="'col-'+col">
            <template v-for="item in arr" :key="'box-'+item">
                <div class="box">{{item}}</div>
            </template>
        </div>
    </div>
</template>
<script>
    export default{
        data(){
            return{
                grid_cols: [1,2,3,4],
                arr: [],
            }
        },
        watch:{},
        computed:{},
        created(){
            this.arr = new Array(8).fill(0).map((e,i) => e=i+1);
        },
        mounted(){},
        methods:{},
    }
</script>
<styl lang="scss" scoped>
    $colNums: 4;
    $count: 8;
    @function randomNum($max , $min:0 , $u:1 ){
        @return (random($max) + $min) * $u;
    };
    @function randomColor(){
        @return rgb(randomNum(255) , randomNum(255) , randomNum(255));
    };
    .grid-waterfall-res-contain{
        padding: 20px;
        display: grid;
        grid-template-columns: repeat(4,1fr);
        grid-gap: 20px;
        
        @for $i from 1 to $colNums+1 {
            .col:nth-child(#{$i}){
                @for $j from 1 to $count+1 {
                    .box:nth-child(#{$j}){
                        height: #{randomNum(260,100)}px;
                        background-color: randomColor();
                        margin-bottom: 20px;
                    }
                }
            }
        }
    }
</styl>