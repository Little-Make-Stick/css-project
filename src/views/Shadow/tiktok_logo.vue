<template>
    <div class='tiktok-logo-contain'>
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
                    <li>主要借助了两个伪元素实现了整体结构，借助了 <span class="inline-code">drop-shadow</span> 生成一层整体阴影</li>
                    <li><span class="inline-code">drop-shadow</span> 只能是单层阴影，所以另一层阴影需要多尝试</li>
                    <li><span class="inline-code">contrast(150%)</span> <span class="inline-code">brightness(110%)</span> 则可以增强图像的对比度和亮度，更贴近抖音LOGO的效果</li>
                    <li><span class="inline-code">skewX</span>二维旋转配合 <span class="inline-code">translate</span> 横向平移做抖动</li>
                    <li><span class="inline-code">blur</span> 做模糊效果</li>
                </ul>
                `,
                difficult: ``,
                html: `
                <div class='tiktok-logo-res-contain'>
                    <div class="tiktok-logo"></div>
                </div>
                `,
                js: ``,
                css: `
                @keyframes tiktokAnimate {
                    4% {
                        transform: skewX(7deg) translate(-30px);
                    }
                    7% {
                        transform: skewX(-6deg) translate(18px);
                    }
                    9% {
                        transform: skewX(5deg) translate(-8px);
                    }
                    10% {
                        transform: skewX(-4deg)translate(6px);
                    }
                    11% {
                        transform: skewX(3deg)translate(-4px);
                    }
                    12% {
                        transform: skewX(-2deg) translate(2px);
                    }
                    13% {
                        transform: skewX(1deg) translate(0px);
                        filter:drop-shadow(-5px -5px 0  $color-blue) contrast(120%) brightness(110%) blur(3px);
                    }
                    30% {
                        filter:drop-shadow(-5px -5px 0  $color-blue) contrast(150%) brightness(120%) blur(0px);
                    }
                }
                    .tiktok-logo-res-contain{
                        height: 100%;
                        background: #000;
                        display: flex;
                        .tiktok-logo{
                            width: 30px;
                            height: 180px;
                            background: $color-white;
                            filter: drop-shadow(-5px -5px 0  $color-blue) brightness(110%) contrast(150%);
                            box-shadow: 5px 5px 0 0 $color-red;
                            margin: auto;
                            position: relative;
                            /* transform: translate(20px); */
                            /* transform: skewX(5deg); */
                            animation: tiktokAnimate 5s infinite ease-in;
                            &:before{
                                content: '';
                                position: absolute;
                                width: 60px;
                                height: 60px;
                                right: -90px;
                                top: -60px;
                                border-radius: 50%;
                                border: 30px solid transparent;
                                border-left-color: $color-white;
                                transform: rotate(-45deg);
                                filter: drop-shadow(5px 5px 0 $color-red);
                                z-index: 9;
                                /* box-shadow: -5px -5px 0 0 $color-red; */
                            }
                            &:after{
                                content: '';
                                position: absolute;
                                width: 50px;
                                height: 50px;
                                left: -80px;
                                bottom: -50px;
                                border-radius: 50%;
                                border: 30px solid $color-white;
                                border-top-color: transparent;
                                transform: rotate(45deg);
                                filter: drop-shadow(10px 3px 0 $color-red);
                                /* box-shadow: -5px -5px 0 0 $color-red; */
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