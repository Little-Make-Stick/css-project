<template>
    <div class='charge-animate-contain'>
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
                    <li>使用 <span>filter: hue-rotate()</span> 对渐变色彩进行色彩过渡变换动画</li>
                    <li>使用 <span>border-radius</span> 添加波浪滚动</li>
                </ul>
                `,
                difficult: ``,
                html: `
                <div class='charge-animate-res-contain'>
                    <div class="charge">
                        <div class="header"></div>
                        <div class="battery">
                            <div class="wave"></div>
                        </div>

                    </div>
                </div>
                `,
                js: ``,
                css: `
                .charge-animate-res-contain {
                    height: 100%;
                    position: relative;
                    background-color: #ccc;
                            
                    .charge {
                        width: 150px;
                        height: 240px;
                        position: absolute;
                        left: 50%;
                        top: 50%;
                        border-radius: 12px 12px 2px 2px;
                        transform: translate(-50%, -50%);
                        background: rgb(222, 43, 43);
                        animation: colorAnimate 10s linear infinite;
                    
                        .wave {
                            position: absolute;
                            width: 300px;
                            height: 300px;
                            left: 50%;
                            bottom: 90px;
                            transform: translate(-50%, 30%);
                            background-color: rgba(255, 255, 255, 1);
                            border-radius: 45% 47% 46% 44%;
                            z-index: 9;
                            animation: waveAnimate 10s linear infinite;
                        
                            &:before {
                                content: '';
                                width: 100%;
                                height: 100%;
                                background-color: rgba(255, 255, 255, .5);
                                border-radius: 38% 41% 38% 37%;
                                position: absolute;
                                left: 50%;
                                top: 50%;
                                transform: translate(-50%, -50%);
                            }
                        }
                        .header{
                            width: 40px;
                            height: 10px;
                            left: 0px;
                            top: 0px;
                            border-radius: 6px 6px 0px 0px;
                            transform: translate(55px, -100%);
                            background-color: rgba(255,255,255,.6);
                            overflow: hidden;
                        }
                        .battery{
                            width: 150px;
                            height: 240px;
                            border-radius: 12px 12px 2px 2px;
                            position: absolute;
                            left: 50%;
                            top: 0px;
                            transform: translate(-50%, 0%);
                            overflow: hidden;
                        }
                    }
                }
            
                @keyframes waveAnimate {
                    100% {
                        transform: translate(-50%, -30%) rotate(360deg);
                    }
                }
            
                @keyframes heightAnimate {
                    100% {
                        height: 100%;
                    }
                }
            
                @keyframes colorAnimate {
                    10% {
                        filter: hue-rotate(0deg) brightness(100%);
                    }
                
                    11% {
                        filter: hue-rotate(59deg) brightness(130%);
                    }
                
                    20% {
                        filter: hue-rotate(59deg) brightness(160%);
                    }
                
                    50% {
                        filter: hue-rotate(59deg) brightness(200%);
                    }
                
                    51% {
                        filter: hue-rotate(120deg) brightness(100%);
                    }
                
                    100% {
                        filter: hue-rotate(120deg) brightness(130%);
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