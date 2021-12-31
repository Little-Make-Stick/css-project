<template>
    <div class='shade-contain'>
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
                <div class='shade-res-contain'>
                    <p>背景文字背景文字背景文字背景文字</p>
                    <div class="btn">HOVER ME</div>
                </div>
                `,
                js: ``,
                css: `
                .shade-res-contain {
                    .btn {
                        padding: 20px 30px;
                        border: 1px solid #000;
                        transition: all 1s ease;
                        /* top 和 left移到界面的50%，50%，此时元素本身的宽高也在其中，再移动自身的一半回到中心 */
                        position: absolute;
                        top: 50%;
                        left: 50%;
                        transform: translate(-50%, -50%);
                        &:hover{
                            box-shadow: 0 0 0 50vmax rgba(0 ,0 ,0 , .3);
                        }
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