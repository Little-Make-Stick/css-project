<template>
    <div class='border-line-animate-2-contain'>
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
                    <li>clip-path CSS 属性可以创建一个只有元素的部分区域可以显示的剪切区域。区域内的部分显示，区域外的隐藏。剪切区域是被引用内嵌的URL定义的路径或者外部 SVG 的路径。</li>
                    <li>因为使用了 clip-path 裁剪后的元素，只有元素的剪切区域才能被显示，所以我们可以通过动画 animation 将几个关键帧绘制出来即可。</li>
                    <li>animation-delay 负值的使用： 相当于一个被定义执行 4s 的动画，如果 animation-delay 为 -2s，起点相当于正常执行时，第2s（4-2）时的位置。</li>
                </ul>
                `,
                difficult: ``,
                html: `
                <div class='border-line-animate-2-res-contain'>
                    <div class="border-line-animate">hello</div>
                    <div class="border-line-animate-example">hello</div>
                </div>
                `,
                js: ``,
                css: `
                .border-line-animate-2-res-contain{
                    height: 100%;
                    display: flex;
                    align-items: center;
                    justify-content: space-around;
                    .border-line-animate,.border-line-animate-example{
                        background-color: rgba(247, 227, 52, 1);
                        color: #fff;
                        padding: 15px 40px;
                        border-radius: 5px;
                        box-sizing: border-box;
                        position: relative;
                        &:before,&:after{
                            content: '';
                            position: absolute;
                            width: 116%;
                            height: 131%;
                            top: 50%;
                            left: 50%;
                            transform: translate(-50%, -50%);
                            border: 2px solid rgba(247, 227, 52, 1);
                            border-radius: 5px;
                            clip-path: inset(0% 0% 99% 0%);
                        }
                        &::before{
                            animation: borderAnimate 4s linear infinite forwards;
                        }
                        &::after{
                            animation: borderAnimate 4s linear -2s infinite forwards;
                        }
                    }
                    .border-line-animate-example{
                        &::before,&::after{
                            background-color: rgba(247, 227, 52, .3);
                        }
                    }
                }   
                @keyframes borderAnimate{
                    25% {
                        clip-path: inset(0% 0% 0% 99%);
                    }
                    50% {
                        clip-path: inset(99% 0% 0% 0%);
                    }
                    75% {
                        clip-path: inset(0% 99% 0% 0%);
                    }
                    100% {
                        clip-path: inset(0% 0% 99% 0%);
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