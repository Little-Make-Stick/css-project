<template>
    <div class='ghost-contain'>
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
                    <li><span class="inline-code">filter: blur()</span> | <span class="inline-code">filter: contrast()</span> 的配合使用</li>
                    <li>单标签的限制，所以多重渐变也发挥了很重要的作用</li>
                </ul>
                `,
                difficult: ``,
                html: `
                <div class='ghost-res-contain'>
                    <div class="ghost"></div>
                </div>
                `,
                js: ``,
                css: `
                .ghost-res-contain {
                    width: 100%;
                    height: 100%;
                    display: flex;
                    background: #000;
                    filter: blur(3px) contrast(10);
                            
                    .ghost {
                        position: relative;
                        width: 80px;
                        height: 120px;
                        background:
                            radial-gradient(circle at 60px 40px, #000, #000 7px, transparent 7px),
                            radial-gradient(circle at 40px 40px, #000, #000 7px, transparent 7px),
                            radial-gradient(circle at 50px 50px, #fff, #fff);
                        background-size: 100% 100%;
                        background-repeat: no-repeat;
                        margin: auto;
                        border-radius: 40px 40px 60px 20px;
                        transform: skewX(-10deg);
                        animation: moveMain 2s infinite ease-out;
                    
                        &:before,
                        &:after {
                            content: "";
                            position: absolute;
                            background: #fff;
                            border-radius: 50%;
                        }
                    
                        &::before {
                            width: 20px;
                            height: 20px;
                            top: 50px;
                            left: -10px;
                            box-shadow: 0 0 0 1px #fff;
                            animation: move 2s infinite ease-in;
                        }
                    
                        &::after {
                            width: 30px;
                            height: 25px;
                            top: 95px;
                            left: -10px;
                            box-shadow: 0 0 0 1px #fff;
                            animation: move2 2s infinite ease-in;
                        }
                    }
                }
            
                @keyframes move {
                
                    80%,
                    100% {
                        box-shadow: -60px 0 0 .5px rgba(255, 255, 255, .5);
                    }
                }
            
                @keyframes move2 {
                
                    80%,
                    100% {
                        box-shadow: -100px 0 0 .5px rgba(255, 255, 255, .2);
                    }
                }
            
                @keyframes moveMain {
                    42% {
                        transform: skewX(-10deg) translate(40px, 0);
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