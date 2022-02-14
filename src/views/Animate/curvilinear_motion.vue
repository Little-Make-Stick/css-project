<template>
    <div class='curvilinear-motion-contain'>
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
                <div class='curvilinear-motion-res-contain'>
                    <div class="curvilinear-motion">
                        <div class="ball"></div>
                    </div>
                </div>
                `,
                js: ``,
                css: `
                .curvilinear-motion-res-contain{
                    height: 100%;
                    display: flex;
                    .curvilinear-motion{
                        width: 40px;
                        height: 200px;
                        margin: auto;
                        display: flex;
                        align-items: flex-end;
                        border: 1px dashed transparent;
                        transform-origin: center 0;
                        animation: curvilinearMove 3s ease infinite;
                        .ball{
                            width: 40px;
                            height: 40px;
                            border-radius: 50%;
                            background: radial-gradient(#eee, #ccc);
                        }
                    }   
                }
                @keyframes curvilinearMove {
                    0% {
                        transform: rotate(0);
                    }
                    100% {
                        transform: rotate(90deg);
                        border-color: #ccc;
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