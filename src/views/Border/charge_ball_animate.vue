<template>
    <div class='charge-ball-animate-contain'>
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
                <div class='charge-ball-animate-res-contain'>
                    <div class="charge-ball">
                        <div class="wave"></div>
                        <div class="electric-volume"></div>
                    </div>
                </div>
                `,
                js: ``,
                css: `
                .charge-ball-animate-res-contain {
                    height: 100%;
                    display: flex;
                            
                    .charge-ball {
                        margin: auto;
                        width: 150px;
                        height: 150px;
                        border-radius: 50%;
                        outline: 8px solid #67cbf7;
                        border: 8px solid #fff;
                        background: #67cbf7;
                        position: relative;
                        overflow: hidden;
                    
                        .wave {
                            width: 240px;
                            height: 240px;
                            background-color: rgba(255, 255, 255, .4);
                            border-radius: 38% 36% 31% 39%;
                            position: absolute;
                            left: -30%;
                            top: -65%;
                            animation: waveAnimate 10s linear infinite forwards;
                        
                            &:before {
                                content: '';
                                background-color: rgba(255, 255, 255, 1);
                                border-radius: 48% 45% 47% 49%;
                                position: absolute;
                                width: 100%;
                                height: 100%;
                                top: 0;
                                left: 0;
                            }
                        }
                    
                        .electric-volume {
                            &:after {
                                content: '60%';
                                position: absolute;
                                z-index: 99;
                                font-size: 30px;
                                line-height: 150px;
                                left: 50%;
                                top: 50%;
                                transform: translate(-50%, -50%);
                                animation: contentAnimate 10s linear infinite forwards;
                            }
                        }
                    }
                }
                @keyframes contentAnimate{
                    @for $i from 0 through 100{
                        #{$i}%{
                            content: $i+'%';
                        }
                    }
                }
            
                @keyframes waveAnimate {
                    0% {
                        transform: translate(0, 0) rotate(0deg);
                    }
                
                    100% {
                        transform: translate(0, -60%) rotate(360deg);
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