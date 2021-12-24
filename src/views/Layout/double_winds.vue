<template>
    <div class='double-winds-contain'>
        <knowage-result
            :demand="demand"
            :keyKnowage="keyKnowage"
            :html="html"
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
                <p>双飞翼布局左中右三列布局，渲染顺序中间列书写在前保证提前渲染，左右两列定宽，中间列自适应剩余宽度。</p>
                <p>双飞翼布局与圣杯布局的不同之处，圣杯布局的的左中右三列容器，中间middle多了一个子容器存在，<span class="strong">通过控制 middle 的子容器的 margin 或者 padding 空出左右两列的宽度</span>。</p>
                `,
                keyKnowage: `
                <ul>
                    <li>双飞翼布局的关键点是通过 margin-left 属性将左右两列放置到准确的位置，通过控制 middle 的子容器的 margin 或者 padding 空出左右两列的宽度</li>
                    <li>双飞翼布局的关键点父元素不需要设置 padding</li>
                    <li>双飞翼布局的关键点 margin-left 取值为百分比时，是以其父元素的宽度为基准的</li>
                </ul>
                `,
                html: `
                <div class="left">left
                </div>
                <div class="middle">
                    <div class="middle-inner">middle</div>
                </div>
                <div class="right">right
                </div>
                `,
                css: `
                .double-winds-res-contain {
                    width: 100%;
                    height: 100%;
                    &>div{
                        float: left;
                        height: 100%;
                        display: flex;
                        div{
                            margin: auto;
                            color: $double-winds-color;
                        }
                    }
                    .middle {
                        width: calc(100% - 400px);
                        background: $middle-bg-color;
                    }

                    .left {
                        width: 200px;
                        background: $left-bg-color;
                    }

                    .right {
                        width: 200px;
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