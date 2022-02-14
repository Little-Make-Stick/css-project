<template>
    <div class='curvilinear-motion-res-contain'>
        <div class="curvilinear-motion">
            <div class="ball"></div>
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
.curvilinear-motion-res-contain{
    height: 100%;
    display: flex;
    .curvilinear-motion{
        width: 40px;
        height: 200px;
        margin: auto;
        display: flex;
        align-items: flex-end;
        border: 1px dashed transparent;
        transform-origin: center 0;
        animation: curvilinearMove 3s ease infinite;
        .ball{
            width: 40px;
            height: 40px;
            border-radius: 50%;
            background: radial-gradient(#eee, #ccc);
        }
    }   
}
@keyframes curvilinearMove {
    0% {
        transform: rotate(0);
    }
    100% {
        transform: rotate(90deg);
        border-color: #ccc;
    }
}
</style>