<template>
    <div class='mouse-follow-2-res-contain'>
        <div class="mouse-follow-2-bg">
            hover me
            <div class="box-list">
                <div class="h-list" v-for="h in list_y" :key="h">
                    <div class="box" v-for="v in list_x" :key="h + '-' + v"></div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                list_x: new Array(48),
                list_y: new Array(19), // 预留26px, 
            }
        },
        watch: {},
        computed: {},
        created() {
            this.list_x = this.list_x.fill(0).map((e, i) => e = i + 1);
            this.list_y = this.list_y.fill(0).map((e, i) => e = i + 1)
        },
        mounted() { },
        methods: {},
    }
</script>
<style lang="scss" scoped>
    
    .mouse-follow-2-res-contain {
        height: 100%;
        width: 100%;
        overflow: hidden;

        .mouse-follow-2-bg {
            width: 100%;
            height: 100%;
            text-align: center;
            font-size: 15vw;
            -webkit-text-fill-color: transparent;
            -webkit-text-stroke: 1px rgba(118, 218, 255, .8);
            position: relative;

            .box-list {
                width: 100%;
                position: absolute;
                top: 0;
                .h-list{
                    display: flex;
                    .box{
                        width: 40px;
                        height: 26px;
                        /* border: 1px solid blue; */
                        position: relative;
                        &::before{
                            content: '';
                            width: 39px;
                            height: 39px;
                            position: absolute;
                            left: 50%;
                            top: 50%;
                            transform: translate(-50%, -50%);
                            border-radius: 50%;
                            border: 0.5px solid transparent;
                            border-radius: 45%;
                            animation: changeBig 3s ease infinite alternate;
                            animation-delay: 0s;
                        }
                        &:hover::before{
                            border-color: #333;
                        }
                    }
                }
            }
        }
    }
    @keyframes changeBig{
        100% {
            transform: scale(2) rotate(270deg);
        }
    }
</style>