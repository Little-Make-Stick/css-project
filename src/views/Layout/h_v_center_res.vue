<template>
    <div class='v-h-center-res-contain'>
        <div class="center-box"></div>
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
    .v-h-center-res-contain{
        width: 100%;
        height: 100%;
        display: flex;
        .center-box{
            width: 5em;
            height: 5em;
            background-color: #444;
            margin: auto;
        }
    }
</style>