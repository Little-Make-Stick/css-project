<template>
    <div class='special-fusion-contain'>
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
                <p>主要运用两个滤镜：</p>
                <ul>
                    <li>filter: blur()： 给图像设置高斯模糊效果。</li>
                    <li>filter: contrast()： 调整图像的对比度。</li>
                    <li>transform-origin: 改变被转换元素的位置。</li>
                </ul>
                <p>当他们“合体”的时候，产生了奇妙的融合现象，通过对比度滤镜把高斯模糊的模糊边缘给干掉，利用高斯模糊实现融合效果。</p>
                `,
                difficult: ``,
                html: `
                <div class='special-fusion-res-contain'>
                    <div class="special-fusion">
                        <div class="box">
                            <div class="ball"></div>
                        </div>
                    </div>
                </div>
                `,
                js: ``,
                css: `
                .special-fusion-res-contain {
                    height: 100%;
                    display: flex;
                    filter: contrast(20);
                    *{
                        // border-radius: 50%;
                        background-color: #fff;
                        position: absolute;
                        left: 50%;
                        top: 50%;
                        transform: translate(-50%, -50%);
                        filter: unset;
                    }
                    .special-fusion {
                        width: 250px;
                        height: 250px;

                        .box {
                            width: 160px;
                            height: 160px;
                            background-color: #000;
                            filter: blur(8px) contrast(20) ;
                        
                            .ball {
                                width: 60px;
                                height: 60px;
                                background-color: blue;
                                transform-origin: -100% center;
                                filter: blur(8px) contrast(20) ;
                                animation: rotateMove 3s linear infinite;
                            }
                        }
                    }
                }
            
                @keyframes rotateMove {
                    100% {
                        transform: translate(-50% , -50%) rotate(360deg);
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