<template>
    <div class='gtas-page-contain'>
        <knowage-result
            :demand="demand"
            :keyKnowage="keyKnowage"
            :difficult="difficult"
            :html="html"
            :js="js"
            :css="css">
            <ul>
                <li>障眼法，通过将屏幕铺满 div 进行控制鼠标跟随</li>
                <li>通过 hover 以及 transtion 改变元素的透明度</li>
            </ul>
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
                    <li>障眼法，通过将屏幕铺满 div 进行控制鼠标跟随</li>
                    <li>通过 hover 以及 transtion 改变元素的透明度</li>
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