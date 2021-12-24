<template>
    <div class='grail-contain'>
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
                demand: `
                <p>圣杯布局左中右三列布局，渲染顺序中间列书写在前保证提前渲染，左右两列定宽，中间列自适应剩余宽度。</p>
                <p>圣杯布局与双飞翼布局的不同之处，圣杯布局的的左中右三列容器没有多余子容器存在，通过控制父元素的 padding 空出左右两列的宽度。</p>
                `,
                keyKnowage: `
                <ul>
                    <li>圣杯布局的关键点是通过 margin-left 与 left 属性将左右两列放置到准确的位置</li>
                    <li>圣杯布局的关键点父元素需要设置 padding</li>
                    <li>圣杯布局的关键点 margin-left 取值为百分比时，是以其父元素的宽度为基准的</li>
                </ul>
                `,
                html: `
                <div class='grail-res-contain'>
                    <div class="left">left
                    </div>
                    <div class="middle">middle
                    </div>
                    <div class="right">right
                    </div>
                </div>
                `,
                js: ``,
                css: `
                .grail-res-contain {
                    padding: 0 200px;
                    height: 100%;
                    &>div{
                        float: left;
                        height: 100%;
                        color: $grail-color;
                    }
                    .middle {
                        width: 100%;
                        background: $middle-bg-color;
                    }

                    .left {
                        width: 200px;
                        position: relative;
                        left: -200px;
                        margin-right: -200px;
                        background: $left-bg-color;
                    }

                    .right {
                        width: 200px;
                        position: relative;
                        right: -200px;
                        margin-left: -200px;
                        background: $right-bg-color;
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