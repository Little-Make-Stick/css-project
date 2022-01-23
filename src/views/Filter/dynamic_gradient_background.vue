<template>
    <div class='dynamic-gradient-background-contain'>
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
                    <li>hue-rotate(deg): 给图像应用色相旋转。该值虽然没有最大值，超过360deg的值相当于又绕一圈。</li>
                </ul>
                `,
                difficult: ``,
                html: `
                <div class='dynamic-gradient-background-res-contain'></div>
                `,
                js: ``,
                css: `
                .dynamic-gradient-background-res-contain{
                    height: 100%;
                    background: linear-gradient(45deg, #ffc107, deeppink, #9c27b0);
                    animation: hueRotateAnimate 5s linear infinite;
                }
                @keyframes hueRotateAnimate{
                    100% {
                        filter: hue-rotate(360deg);
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