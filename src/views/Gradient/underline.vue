<template>
    <div class='underline-contain'>
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
                <p>利用线性渐变实现下划线。与传统下划线相比，渐变实现的下划线有更多的可操控性。</p>
                <ul>
                    <li>可控下划线距离底部的距离</li>
                    <li>可控下划线的粗细</li>
                    <li>可控下划线的颜色</li>
                    <li>可添加动画&渐变</li>
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