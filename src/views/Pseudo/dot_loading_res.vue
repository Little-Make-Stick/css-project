<template>
    <div class='dot-loading-res-contain'>
        <p>加载中</p>
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
.dot-loading-res-contain{
    height: 100%;
    display: flex;
    p{
        margin: auto;
        font-size: 40px;
        font-weight: bold;
        &:after{
            content: '.';
            animation: dotLoading 1.5s linear infinite forwards;
        }
    }
}
@keyframes dotLoading{
    0%{
        content: '.';
    }
    33.3%{
        content: '..';
    }
    66.6%{
        content: '...';
    }
}
</style>