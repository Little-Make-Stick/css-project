<template>
    <div class='pie-chart-res-contain'>
        <div class="pie-chart-list">
            <div class="pie-chart"></div>
            <div class="pie-chart-animate"></div>
        </div>
    </div>
</template>
<script>
    export default{
        data(){
            return{}
        },
        watch:{},
        computed:{},
        created(){},
        mounted(){},
        methods:{},
    }
</script>
<style lang="scss" scoped>
.pie-chart-res-contain{
    height: 100%;
    display: flex;
    .pie-chart-list{
        width: 100%;
        margin: auto;
        display: flex;
        justify-content: space-around;
        align-items: center;
    }
    .pie-chart,.pie-chart-animate{
        margin: auto;
        width: 130px;
        height: 130px;
        border-radius: 50%;
        border: 1px solid #000;
        background: conic-gradient(yellowgreen 40%, tomato 0deg 75%, transparent 0deg);
    }
    .pie-chart-animate{
        background: transparent;
        animation: conicAnimate 5s linear infinite;
    }
}
@keyframes conicAnimate{
    @for $i from 1 through 50 {
        #{$i}%{
            background: conic-gradient(yellowgreen #{$i * 2 * 1%}, transparent 0deg);
        }
    }
}
</style>