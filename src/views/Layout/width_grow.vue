<template>
    <div class='width-grow-contain'>
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
                <p>共4列，首列宽度固定为200px，其余3列均分剩余宽度，每列间距10px</p>
                `,
                keyKnowage: `
                <ul>
                    <li><span class="inline-code">display: grid</span> 实现</li>
                    <li><span class="inline-code">display: flex</span> 实现</li>
                    <li><span class="inline-code">position: aboslute + float</span> 实现</li>
                    <li><span class="inline-code">position: aboslute + float +非calc</span> 实现</li>
                </ul>
                `,
                difficult: `
                <p>对于不使用 flex、grid 以及 css3 特性 calc 而言，实现多列自适应均匀分布只能是百分比。</p>
                <p>百分比均分后间距的均分，这里参考了 bootstrap 的实现方式。</p>
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