<template>
    <div class='rect-height-wave-contain'>
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
                    <li>给每个子元素设定一个高度变化的动画，同时按顺序给每个元素设定一个不同时间的负延迟即可，就可以得到一个简单的波浪效果。</li>
                    <li>skewY() 的变换可以很好的消除大部分的锯齿效果</li>
                    <li>原文链接： https://github.com/chokcoco/iCSS/issues/112</li>
                </ul>
                `,
                difficult: ``,
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