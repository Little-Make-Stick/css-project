<template>
    <div class='flex-waterfall-res-contain'>
        <div class="col" v-for="item in col" :key="'col-'+item">
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
                col: [1,2,3,4],
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
    .flex-waterfall-res-contain{
        padding: 20px;
        display: flex;
        justify-content: space-between;
        
        @for $i from 1 to $colNums+1 {
            .col:nth-child(#{$i}){
                flex: 1;
                display: flex;
                flex-direction: column;
                flex-basis: 30%;
                @for $j from 1 to $count+1{
                    .box:nth-child(#{$j}){
                        margin: 0 20px 20px 20px;
                        height: #{randomNum(300, 40)}px;
                        background-color: randomColor();
                    }
                }
            }
        }
    }
</styl>