<template>
    <div class='ie-logo-contain'>
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
                    <li>关键在于类似星环的外围一圈使用了内阴影实现</li>
                </ul>
                `,
                difficult: ``,
                html: `
                <div class='ie-logo-res-contain'>
                    <div class="ie-logo"></div>
                </div>
                `,
                js: ``,
                css: `
                .ie-logo-res-contain {
                    height: 100%;
                    display: flex;

                    .ie-logo {
                        width: 200px;
                        height: 200px;
                        margin: auto;
                        position: relative;
                        border-radius: 50%;
                        background-image: radial-gradient($color-white 0, $color-white 45%, $color-blue 45%, $color-blue 100%);
                    
                        &:before {
                            content: '';
                            position: absolute;
                            width: 165px;
                            height: 60px;
                            top: 80px;
                            right: 0px;
                            border-radius: 0 40px 0 40px;
                            background-image: linear-gradient($color-blue 0%, $color-blue 50%, $color-white 50%, $color-white 100%, );
                        }
                    
                        &:after {
                            content: '';
                            position: absolute;
                            width: 280px;
                            height: 160px;
                            top: 5px;
                            left: -50px;
                            border-radius: 50%;
                            border: 30px solid $color-blue;
                            border-bottom: none;
                            border-right: none;
                            /* border-left: none; */
                            box-shadow: inset 0 12px 0 11px $color-blue, -35px -8px 0 -5px $color-white;
                            /* transform: rotate(-35deg); */
                            transform: rotateX(45deg) rotateY(-45deg);
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