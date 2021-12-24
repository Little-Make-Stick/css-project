<template>
    <div class='column-waterfall-res-contain'>
        <template v-for="item in arr" :key="item">
            <div class="box">{{item}}</div>
        </template>
    </div>
</template>
<script>
    export default{
        data(){
            return{
                arr: [],
            }
        },
        watch:{},
        computed:{},
        created(){
            this.arr = new Array(32).fill(0).map((e,i) => e=i+1);
        },
        mounted(){},
        methods:{},
    }
</script>
<styl lang="scss" scoped>
    $count: 32;
    @function randomNum($max , $min:0 , $u:1 ){
        @return (random($max) + $min) * $u;
    };
    @function randomColor(){
        @return rgb(randomNum(255) , randomNum(255) , randomNum(255));
    };
    .column-waterfall-res-contain{
        padding: 20px;
        column-count: 4;
        column-gap: 20px;
        
        @for $i from 1 to $count+1 {
            .box:nth-child(#{$i}){
                width: 100%;
                height: #{randomNum(300 , 50)}px;
                background: randomColor();
                line-height: 100%;
                margin-bottom: 20px ;
                break-inside: avoid;
            }
        }
    }
</styl>