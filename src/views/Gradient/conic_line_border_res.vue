<template>
    <div class='conic-line-border-res-contain'>
        <div class="conic-line-border"></div>
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
.conic-line-border-res-contain{
    height: 100%;
    display: flex;
    .conic-line-border{
        width: 300px;
        height: 200px;
        margin: auto;
        position: relative;
        border-radius: 14px;
        border: 5px solid green;
        &::before{
            content: '';
            width: calc(100% + 10px);
            height: calc(100% + 10px);
            position: absolute;
            left: -5px;
            top: -5px;
            border-radius: 8px;
            background: conic-gradient(transparent 0deg, transparent 90deg, #fff 90deg, #fff 0deg);
            background: conic-gradient(transparent 90deg, transparent 180deg, #fff 180deg,);
            /* animation: conicBorderAnimate 4s linear infinite; */
        }
    }
}
@keyframes conicBorderAnimate{
    @for $i from 0 through 100 {
        #{$i}%{
            background: conic-gradient(transparent #{$i * 3.6deg}, transparent #{$i * 3.6deg + 90deg}, #fff #{$i * 3.6deg + 90deg}, #fff #{$i * 3.6deg});
        }
    }
}
</style>