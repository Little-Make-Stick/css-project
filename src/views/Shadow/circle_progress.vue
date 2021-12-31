<template>
    <div class='circle-progress-contain'>
        <knowage-result
            :demand="demand"
            :keyKnowage="keyKnowage"
            :difficult="difficult"
            :html="html"
            :js="js"
            :css="css">
            
        </knowage-result>
    </div>
</template>
<script>
    import knowageResult from '@/components/KnowageResult.vue';
    export default{
        data(){
            return{
                demand: ``,
                keyKnowage: `
                <ul>
                    <li>圆环进度条的移动本质上是阴影顺序延时移动的结果。</li>
                </ul>
                `,
                difficult: ``,
                html: `
                <div class='circle-progress-res-contain'>
                    <div class="circle-btn-box">
                        <div class="circle-btn">HOVER ME</div>
                    </div>
                </div>
                `,
                js: ``,
                css: `
                @keyframes shadowMove {
                    0% {
                        box-shadow: 60px -60px 0 2px $theme-border-color, -60px -60px 0 2px $theme-border-color, -60px 60px 0 2px $theme-border-color, 60px 60px 0 2px $theme-border-color, 0px 0px 0 2px transparent;
                    }

                    25% {
                        box-shadow: 0px -125px 0 2px $theme-border-color, -60px -60px 0 2px $theme-border-color, -60px 60px 0 2px $theme-border-color, 60px 60px 0 2px $theme-border-color, 0px 0px 0 2px #fff;
                    }

                    50% {
                        box-shadow: 0px -125px 0 2px $theme-border-color, -125px 0px 0 2px $theme-border-color, -60px 60px 0 2px $theme-border-color, 60px 60px 0 2px $theme-border-color, 0px 0px 0 2px #fff;
                    }

                    75% {
                        box-shadow: 0px -125px 0 2px $theme-border-color, -125px 0px 0 2px $theme-border-color, 0px 125px 0 2px $theme-border-color, 60px 60px 0 2px $theme-border-color, 0px 0px 0 2px #fff;
                    }

                    100% {
                        box-shadow: 0px -125px 0 2px $theme-border-color, -125px 0px 0 2px $theme-border-color, 0px 125px 0 2px $theme-border-color, 120px 40px 0 2px $theme-border-color, 0px 0px 0 2px #fff;
                    }
                }   
                .circle-progress-res-contain {
                    position: relative;
                    width: 100%;
                    height: 100%;
                    display: flex;

                    .circle-btn-box {
                        width: 124px;
                        height: 124px;
                        overflow: hidden;
                        margin: auto;
                        border-radius: 50%;
                        display: flex;
                        .circle-btn {
                            width: 120px;
                            height: 120px;
                            margin: auto;
                            line-height: 120px;
                            border-radius: 50%;
                            box-shadow: 60px -60px 0 2px $theme-border-color, -60px -60px 0 2px $theme-border-color, -60px 60px 0 2px $theme-border-color, 60px 60px 0 2px $theme-border-color,0px 0px 0 2px transparent;

                            &:hover {
                                /* forwards 动画停止不回到原先状态 */
                                animation: shadowMove 1s linear forwards;
                            }
                        }
                    }
                }
                `,
            }
        },
        components:{
            knowageResult
        },
        watch:{},
        computed:{},
        created(){},
        mounted(){},
        methods:{},
    }
</script>
<style lang="scss" scoped>
</style>