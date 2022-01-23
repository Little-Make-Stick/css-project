<template>
    <div class='word-fracture-effect-res-contain'>
        <div class="word-fracture" data-text="Text Crack">
            <span>Text Crack</span>
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
.word-fracture-effect-res-contain{
    height: 100%;
    display: flex;
    font-size: 60px;
    font-weight: bold;
    color: #fff;
    background-color: #000;
    letter-spacing: 2px;
    .word-fracture{
        display: inline-block;
        margin: auto;
        span{
            clip-path: polygon(0 0, 25% 0, 39% 100%, 0 100%);
        }
        &:before,&:after{
            content: attr(data-text);
            position: absolute;
            left: 50%;
            top: 50%;
            color: #fff;
            transform: translate(-50%, -50%);
        }
        &::before{
            clip-path: polygon(25% 0, 57% 0, 85% 100%, 39% 100%);
            left: 51%;
        }
        &::after{
            clip-path: polygon(57% 0, 100% 0, 100% 100%, 85% 100%);
            left: 53%;
        }
    }
}
</style>