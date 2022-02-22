<template>
    <div class='arrow-symbol-contain'>
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
                keyKnowage: ``,
                difficult: ``,
                html: `
                <div class='arrow-symbol-res-contain'>
                    <div class="arrow-symbol-list">
                        <div class="arrow-symbol-1"></div>
                        <div class="arrow-symbol-2"></div>
                    </div>
                </div>
                `,
                js: ``,
                css: `
                .arrow-symbol-res-contain{
                    width: 100%;
                    height: 100%;
                    display: flex;
                    .arrow-symbol-list{
                        margin: auto;
                        width: 100%;
                        display: flex;
                        justify-content: space-around;
                        align-items: center;
                    }
                    .arrow-symbol-1, .arrow-symbol-2{
                        width: 220px;
                        height: 50px;
                    }
                    .arrow-symbol-1{
                        clip-path: polygon(0 0, 90% 0, 100% 50%, 90% 100%, 0 100%, 10% 50% );
                        background: linear-gradient(to right, #91de91, #96cde6);
                    }
                    .arrow-symbol-2{
                        background: linear-gradient(45deg, #fff 10%, #91de91 10%, #91de91 45%, #96cde6 90%, #fff 90%, #fff 100%), 
                                    linear-gradient(135deg, #fff 10%, #91de91 10%, #91de91 45%, #96cde6 90%, #fff 90%, #fff 100%);
                        background-position: top left , bottom left;
                        background-size: 100% 50%, 100% 50%;
                        background-repeat: no-repeat, no-repeat;
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