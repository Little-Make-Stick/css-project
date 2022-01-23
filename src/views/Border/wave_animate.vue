<template>
    <div class='wave-animate-contain'>
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
                    <li>利用 border-radius 生成椭圆</li>
                    <li>并不是利用旋转的椭圆本身生成波浪效果，而是利用它去切割背景，产生波浪的效果。</li>
                </ul>
                `,
                difficult: ``,
                html: `
                <div class='wave-animate-res-contain'>
                    <div class="wave-animate">
                        <h2>Pure Css Wave</h2>
                    </div>
                </div>
                `,
                js: ``,
                css: `
                .wave-animate-res-contain {
                    width: 100%;
                    height: 100%;
                    position: relative;
                    overflow: hidden;
                            
                    &:after {
                        content: '';
                        width: 100%;
                        height: 100%;
                        position: absolute;
                        top: 0;
                        left: 0;
                        z-index: 1;
                        background-color: #2196f3;
                    }
                
                    .wave-animate {
                    
                        &:before,
                        &:after {
                            content: '';
                            width: 180vw;
                            height: 180vw;
                            position: absolute;
                            background-color: #fff;
                            top: -160vw;
                            left: -40vw;
                            border-radius: 42% 45% 44% 43%;
                            z-index: 2;
                            background-color: #fff;
                        }
                    
                        &::before {
                            animation: radiusRotate 5s ease infinite alternate;
                        }
                    
                        &::after {
                            opacity: .5;
                            animation: radiusRotate 6s ease infinite alternate;
                        }
                    
                        h2 {
                            position: absolute;
                            left: 50%;
                            top: 60%;
                            transform: translate(-50%, -50%);
                            z-index: 99;
                            font-size: 50px;
                        }
                    }
                }
            
                @keyframes radiusRotate {
                    25% {
                        border-radius: 40% 45% 44% 41%;
                        transform: rotate(90deg) translate(0, 3vh);
                    }
                
                    50% {
                        border-radius: 42% 46% 48% 41%;
                    }
                
                    75% {
                        border-radius: 40% 45% 43% 44%;
                    }
                
                    100% {
                        border-radius: 44% 40% 41% 45%;
                        transform: rotate(360deg) translate(0, 1vh);
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