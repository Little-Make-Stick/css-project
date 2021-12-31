<template>
    <div class='bg-animate-1-contain'>
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
                    <li>当 <span class="inline-code">box-shadow</span> 的模糊半径和扩张半径都为 0 的时候，我们可以得到一个和元素大小一样的阴影</li>
                    <li><span class="inline-code">box-shadow</span> 是可以设置多层的，也就是多层阴影，而且可以进行过渡变换动画（补间动画）</li>
                    <li><span class="inline-code">background-image: linear-gradient()</span> 也就是渐变背景是不能进行补间动画的</li>
                </ul>
                `,
                difficult: ``,
                html: `
                <div class='bg-animate-1-res-contain'>
                    <div class="stripe"></div>
                    <div class="shadow-animate"></div>
                </div>
                `,
                js: ``,
                css: `
                @keyframes stripeAnimate {
                    0%{
                        box-shadow: 0px 50px, 100px 50px,200px 50px,300px 50px,
                                    0px 100px,100px 100px,200px 100px,300px 100px,
                                    0px 150px,100px 150px,200px 150px,300px 100px,
                                    0px 200px,100px 200px,200px 200px,300px 100px,
                                    0px 250px,100px 250px,200px 250px,300px 100px,;
                        
                    }
                    20% {
                        color: $shadow-color-2;
                        box-shadow: 50px 50px, 150px 50px,250px 50px,350px 50px,
                                    50px 100px,150px 100px,250px 100px,350px 100px,
                                    50px 150px,150px 150px,250px 150px,350px 100px,
                                    50px 200px,150px 200px,250px 200px,350px 100px,
                                    50px 250px,150px 250px,250px 250px,350px 100px,;
                    }
                    40% {
                        color: $shadow-color-3;
                        box-shadow: 0px 50px, 100px 50px,200px 50px,300px 50px,
                                    50px 100px,150px 100px,250px 100px,350px 100px,
                                    0px 150px,100px 150px,200px 150px,300px 100px,
                                    50px 200px,150px 200px,250px 200px,350px 100px,
                                    0px 250px,100px 250px,200px 250px,300px 100px,;
                        border-radius: 50%;
                        
                    }
                    60%{
                        color: $shadow-color-4;
                        box-shadow: 50px 50px, 150px 50px,250px 50px,350px 50px,
                                    0px 100px,100px 100px,200px 100px,300px 100px,
                                    50px 150px,150px 150px,250px 150px,350px 100px,
                                    0px 200px,100px 200px,200px 200px,300px 100px,
                                    50px 250px,150px 250px,250px 250px,350px 100px,;
                        border-radius: 0px;
                    }
                    80%{
                        color: $shadow-color-1;
                        box-shadow: 0px 50px, 100px 50px,200px 50px,300px 50px,
                                    0px 100px,100px 100px,200px 100px,300px 100px,
                                    0px 150px,100px 150px,200px 150px,300px 100px,
                                    0px 200px,100px 200px,200px 200px,300px 100px,
                                    0px 250px,100px 250px,200px 250px,300px 100px,;
                        border-radius: 0px;
                    }
                }
                .bg-animate-1-res-contain {
                    display: flex;
                    /* flex-direction: column; */
                    justify-content: center;
                
                    &>div {
                        width: 250px;
                        height: 250px;
                        border: 1px solid #444;
                        margin: 50px;
                        position: relative;
                        overflow: hidden;
                    
                        &:before {
                            content: '';
                            position: absolute;
                            width: 50px;
                            height: 50px;
                            top: -50px;
                            left: -50px;
                            color: $shadow-color-1;
                            background: transparent;
                            box-shadow: 0px 50px, 100px 50px,200px 50px,300px 50px,
                                    0px 100px,100px 100px,200px 100px,300px 100px,
                                    0px 150px,100px 150px,200px 150px,300px 100px,
                                    0px 200px,100px 200px,200px 200px,300px 100px,
                                    0px 250px,100px 250px,200px 250px,300px 100px,;
                        }
                    }
                
                    .stripe {}
                
                    .shadow-animate {
                        &:before{
                            animation: stripeAnimate 6s linear infinite;
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