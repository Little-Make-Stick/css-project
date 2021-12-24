<template>
    <div class='grid-waterfall-contain'>
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
                    <li>使用 <span class="inline-code">grid-template-columns</span>、<span class="inline-code">grid-template-rows</span> 分割行列</li>
                    <li>使用 <span class="inline-code">grid-row</span> 控制每个 item 的所占格子的大小</li>
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