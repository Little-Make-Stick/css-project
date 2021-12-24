<template>
    <div class='flex-grail-contain'>
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
                html: ``,
                js: ``,
                css: ``,
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