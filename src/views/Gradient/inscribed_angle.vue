<template>
    <div class='inscribed-angle-contain'>
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
                    <li>利用多重线性渐变及单个元素可以设置多层渐变叠加实现</li>
                </ul>
                `,
                difficult: ``,
                html: `
                <div class='inscribed-angle-res-contain'>
                    <div class="inscribed-angle"></div>
                </div>
                `,
                js: ``,
                css: `
                .inscribed-angle-res-contain{
                    height: 100%;
                    display: flex;
                    .inscribed-angle{
                        margin: auto;
                        width: 350px;
                        height: 60px;
                        background: linear-Gradient(135deg, #fff 15px, tomato 0) top left, 
                                    linear-Gradient(-135deg, #fff 15px, tomato 0) top right,
                                    linear-Gradient(45deg, #fff 15px, tomato 0) bottom left,
                                    linear-Gradient(-45deg, #fff 15px, tomato 0) bottom right;
                        background-repeat: no-repeat;
                        background-size: 50% 50%;
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