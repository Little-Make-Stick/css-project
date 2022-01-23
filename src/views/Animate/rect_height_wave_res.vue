<template>
    <div class='rect-height-wave-res-contain'>
        <div class="rect-height-wave">
            <!-- https://codepen.io/Chokcoco/pen/XWpxQBd -->
            <template v-for="item in arr" :key="item"> 
                <div class="rect"></div>
            </template>
        </div>
    </div>
</template>
<script>
    export default{
        data(){
            return{
                arr: []
            }
        },
        watch:{},
        computed:{},
        created(){
            this.arr = new Array(24).fill(0).map( (e,i) => e = i + 1 );
        },
        mounted(){},
        methods:{},
    }
</script>
<style lang="scss" scoped>
.rect-height-wave-res-contain{
    height: 100%;
    display: flex;
    background-color: #ccc;
    .rect-height-wave{
        margin: auto;
        width: 150px;
        height: 150px;
        background-color: #fff;
        display: flex;
        align-items: flex-end;
        clip-path: circle(50% at 50% 50%);
        
        .rect{
            width: calc(100% / 24);
            height: 60px;
            background-color: #000;
            animation: heightAnimate 2s linear infinite alternate;
            &:first-child{
                animation-delay: calc(calc(12s - 1s) / 12);
            }

            @for $i from 2 through 24 {
                &:nth-child(#{$i}){
                    animation-delay: #{(12 - $i) / 12}s;
                }
            }
        }
    }
}
@keyframes heightAnimate{
    0%{
        transform: skewY(-20deg) translate3d(0, 10px, 0)  scale(1.25);
    }
    100% {
        height: 80px;
        transform: skewY(20deg) translate3d(0, 10px, 0)  scale(1.25);
    }
}
</style>