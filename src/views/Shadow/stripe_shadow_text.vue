<template>
    <div class='stripe-shadow-text-contain'>
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
                    <li>借用了元素的两个伪元素</li>
                    <li>伪元素可以通过 attr 读取元素属性</li>
                    <li>通过生成 <span class="quote">白色->透明色</span> 的多重线性渐变叠加在黑色之上来实现条纹效果</li>
                </ul>
                `,
                difficult: ``,
                html: `
                <div class='stripe-shadow-text-res-contain'>
                    <div class="stripe-shadow-text" data-name="Solid Shadow Word">
                        Solid Shadow Word
                    </div>
                </div>
                `,
                js: ``,
                css: `
                .stripe-shadow-text-res-contain {
                    height: 100%;
                    display: flex;
                    font-size: 35px;

                    .stripe-shadow-text {
                        margin: auto;
                        position: relative;
                    
                        &:before {
                            content: "";
                            position: absolute;
                            height: 1em;
                            width: 100%;
                            background-repeat: repeat;
                            background-image: linear-gradient(-45deg, #fff 0%, transparent 25%, #fff 50%, transparent 75%, #fff 100%);
                            background-size: 6px 6px;
                            z-index: 1;
                        }

                        &:after {
                            content: attr(data-name);
                            width: 100%;
                            height: 100%;
                            position: absolute;
                            z-index: 2;
                            left: -8px;
                            top: -8px;
                            color: #000;
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