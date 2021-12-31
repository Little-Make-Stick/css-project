<template>
    <div class='long-linear-shadow-contain'>
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
                    <li>借用了元素的两个伪元素</li>
                    <li>通过渐变色填充两个伪元素，再通过位移、变换放置在合适的位置</li>
                    <li>HSL色彩模式是工业界的另一种颜色标准，是通过对色相(H)、饱和度(S)、明度(L)。HSL的S(saturation)分量呈现一种从灰度到纯色的变化。HSL的L(lightness)分量，数值越小，色彩越暗，越接近于黑色；数值越大，色彩越亮，越接近于白色。</li>
                </ul>
                `,
                difficult: ``,
                html: `
                <div class='long-linear-shadow-res-contain'>
                    <div class="long-linear-shadow"></div>
                </div>
                `,
                js: ``,
                css: `
                .long-linear-shadow-res-contain {
                    height: 100%;
                    display: flex;
                    background: $contain-bg-color;
                            
                    .long-linear-shadow {
                        width: 120px;
                        height: 120px;
                        margin: auto;
                        background: #fff;
                        position: relative;
                    
                        &:before {
                            content: '';
                            width: 100%;
                            height: 100%;
                            position: absolute;
                            left: 50%;
                            top: 100%;
                            background: linear-gradient(to bottom, hsl(199, 98%, 30%) 0%, transparent 100%);
                            transform: skewX(45deg);
                        }
                    
                        &:after {
                            content: '';
                            width: 100%;
                            height: 100%;
                            position: absolute;
                            left: 100%;
                            top: 50%;
                            background: linear-gradient(to right, hsl(199, 98%, 30%) 0%, transparent 100%);
                            transform: skewY(45deg);
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