<template>
    <div class='threeD-shadow-contain'>
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
                    <li>立体投影的关键点在于利于伪元素生成一个大小与父元素相近的元素，然后对其进行 rotate 以及定位到合适位置，再赋于阴影操作。</li>
                    <li>颜色的运用也很重要，阴影的颜色通常比本身颜色要更深，这里使用 hsl 表示颜色更容易操作，l 控制颜色的明暗度。</li>
                </ul>
                `,
                difficult: ``,
                html: `
                <div class='threeD-shadow-res-contain'>
                    <div class="threeD-shadow">
                        <div class="left-box">
                            <div class="left"></div>
                        </div>
                        <div class="left-right-box">
                            <div class="left-right"></div>
                        </div>
                        <div class="top-box">
                            <div class="top"></div>
                        </div>
                    </div>
                </div>
                `,
                js: ``,
                css: `
                .threeD-shadow-res-contain {
                    height: 100%;
                    display: flex;

                    .threeD-shadow {
                        margin: auto;
                    
                        &>div {
                            margin: 40px;
                            padding: 0 20px 20px 20px;
                            /* border: 1px solid #000; */
                            border-radius: 8px;
                            overflow: hidden;
                        
                            &>div {
                                width: 350px;
                                height: 50px;
                            
                                border-radius: 8px;
                                position: relative;
                            
                                &:before {
                                    content: '';
                                    position: absolute;
                                    width: 94%;
                                    height: 80%;
                                    left: 3%;
                                    border-radius: 8px;
                                    z-index: -1;
                                }
                            
                                &:after {
                                    content: '';
                                    position: absolute;
                                    width: 94%;
                                    height: 80%;
                                    right: 2%;
                                    top: 20%;
                                    border-radius: 8px;
                                    z-index: -1;
                                }
                            }
                        }
                    
                        .left {
                            background-color: $color-yellow;
                            box-shadow: 0 0 2px 3px $color-yellow;
                        
                            &::before {
                                background: hsl(48, 100%, 35%);
                                transform: skewY(174deg);
                                box-shadow: 0 0 5px 8px hsl(48, 100%, 30%);
                            }
                        }
                    
                        .left-right {
                            background-color: $color-green;
                            box-shadow: 0 0 2px 4px $color-green;

                            &::before {
                                background: hsl(150, 62%, 35%);
                                transform: skewY(175.5deg);
                                box-shadow: 0 0 5px 5px hsl(150, 62%, 30%);
                            }
                        
                            &::after {
                                background: hsl(150, 62%, 35%);
                                transform: skewY(181.5deg);
                                box-shadow: 0 0 5px 5px hsl(150, 62%, 30%);
                            }
                        }

                        .top {
                            background-color: $color-blue;
                            box-shadow: 0 0 2px 4px $color-blue;
                        
                            &::before {
                                width: 80%;
                                height: 76%;
                                left: -1.5%;
                                top: 24%;
                                background: hsl(199, 98%, 35%);
                                transform: skewX(14deg);
                                box-shadow: 0 0 5px 5px hsl(199, 98%, 30%);
                            }
                        
                            &:after {
                                width: 80%;
                                height: 76%;
                                right: -1.5%;
                                top: 24%;
                                background: hsl(199, 98%, 28%);
                                transform: skewX(346deg);
                                box-shadow: 0 0 5px 5px hsl(199, 98%, 25%);
                            }
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