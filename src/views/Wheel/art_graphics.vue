<template>
    <div class='art-graphics-contain'>
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
                    <li>-webkit-box-reflect 是一个非常有意思的属性，它让 CSS 有能力像镜子一样，反射我们元素原本绘制的内容。</li>
                    <li>-webkit-box-reflect 实现多层倒影的嵌套。</li>
                </ul>
                `,
                difficult: ``,
                html: `
                <div class='art-graphics-res-contain'>
                    <div class="wrap wrap-1">
                        <div class="wrap-below-80">
                            <div class="wrap-right-0">
                                <div class="wrap-below-0">
                                    <div class="bg-1 wrap-right-0"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="wrap wrap-2">
                        <div class="wrap-below-80">
                            <div class="wrap-right-0">
                                <div class="wrap-below-0">
                                    <div class="bg-2 wrap-right-0"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="wrap wrap-3">
                        <div class="wrap-below-80">
                            <div class="wrap-right-0">
                                <div class="wrap-below-0">
                                    <div class="bg-3 wrap-right-0"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                `,
                js: ``,
                css: `
                .art-graphics-res-contain{
                    height: 100% ;
                    display: flex;
                    align-items: center;
                    justify-content: space-around;

                    $directions: (
                        'left': left,
                        'right': right,
                        'above': above,
                        'below': below,
                    );
                    @each $key,$direct in $directions{
                        .wrap-#{$key}-0{
                            -webkit-box-reflect: $direct 0px;
                        }
                        .wrap-#{$key}-40{
                            -webkit-box-reflect: $direct 40px;
                        }
                        .wrap-#{$key}-80{
                            -webkit-box-reflect: $direct 80px;
                        }
                    }
                    .wrap{
                        width: 80px;
                        height: 160px;
                        text-align: left;
                        margin-right: 80px;
                    }
                    .bg-1{
                        width: 40px;
                        height: 40px;
                        background: linear-gradient(45deg, #fff 0%, #fff 20%,  #000 20%, #000 40%, #fff 40%, #fff 60%, #000 60%, #000 80%, #fff 80% , #fff 100%);
                    }
                    .bg-2{
                        width: 40px;
                        height: 40px;
                        background: radial-gradient(circle at 0 0 , #000 0% , #000 25%, #fff 25% , #fff 35%, #000 35%, #000 40%, transparent 40%),
                                    radial-gradient(circle at 100% 100% , #000 0% , #000 15%, #fff 15%, #fff 35%, #000 35%, #000 40%, transparent 40%);
                    }
                    .bg-3{
                        width: 40px;
                        height: 40px;
                        background: linear-gradient(45deg, orange 0%, orange 15%,  yellow 15%, yellow 30%, yellowgreen 30%, yellowgreen 45%, lightblue 45%, lightblue 55%, blue 55% , blue 70%, orange 70%, orange 85%, yellow 85% , yellow 100%);
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