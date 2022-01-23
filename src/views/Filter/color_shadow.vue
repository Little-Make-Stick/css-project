<template>
    <div class='color-shadow-contain'>
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
                <p>原理就是，利用伪元素，生成一个与原图一样大小的新图叠加在原图之下，然后利用滤镜模糊 <span class="inline-code">filter: blur()</span> 配合其他的亮度/对比度，透明度等滤镜，制作出一个虚幻的影子，伪装成原图的阴影效果。</p>
                `,
                difficult: `
                <p>通常而言，我们生成阴影的方式大多是 <span class="inline-code">box-shadow</span> 、<span class="inline-code">filter: drop-shadow()</span> 、<span class="inline-code">text-shadow</span> 。但是，使用它们生成的阴影通常只能是单色或者同色系的。</p>
                <p>但是通过巧妙的利用 <span class="inline-code">filter: blur</span> 模糊滤镜，我们可以假装生成渐变色或者说是颜色丰富的阴影效果。</p>
                `,
                html: `
                <div class='color-shadow-res-contain'>
                    <div class="color-shadow">
                        <div class="avatar"></div>
                        <p>color shadow</p>
                    </div>
                </div>
                `,
                js: ``,
                css: `
                .color-shadow-res-contain {
                    height: 100%;
                    display: flex;

                    .color-shadow {
                        margin: auto;
                    
                        .avatar {
                            width: 180px;
                            height: 180px;
                            position: relative;
                            background-position: center center;
                            background-size: 100% 100%;
                            background-repeat: no-repeat;
                            background-image: url('../../assets/image/color-shadow-img.png');
                        
                            &:before {
                                content: '';
                                width: 180px;
                                height: 180px;
                                position: absolute;
                                left: 15px;
                                z-index: -1;
                                background-position: center center;
                                background-size: 100% 100%;
                                background-repeat: no-repeat;
                                background-image: url('../../assets/image/color-shadow-img.png');
                                filter: blur(3px) brightness(80%) opacity(.8);
                            }
                        }
                    
                        p {
                            margin: 20px;
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