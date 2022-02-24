<template>
    <div class='inscribed-angle-res-contain'>
        <div class="inscribed-angle"></div>
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
.inscribed-angle-res-contain{
    height: 100%;
    display: flex;
    .inscribed-angle{
        margin: auto;
        width: 350px;
        height: 60px;
        background: linear-Gradient(135deg, #fff 15px, tomato 0) top left, 
                    linear-Gradient(-135deg, #fff 15px, tomato 0) top right,
                    linear-Gradient(45deg, #fff 15px, tomato 0) bottom left,
                    linear-Gradient(-45deg, #fff 15px, tomato 0) bottom right;
        background-repeat: no-repeat;
        background-size: 50% 50%;
    }
}
</style>