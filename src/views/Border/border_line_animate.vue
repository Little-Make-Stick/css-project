<template>
    <div class='border-line-animate-contain'>
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
                <p>借助 overflow 是实现 CSS 效果非常常见的手段。</p>
                `,
                difficult: ``,
                html: `
                <div class='border-line-animate-res-contain'>
                    <div class="btn-box">
                        <div class="btn">Hover Me</div>
                    </div>
                </div>
                `,
                js: ``,
                css: `
                .border-line-animate-res-contain {
                    height: 100%;
                    display: flex;
                    background-color: yellowgreen;
                    position: relative;
                    z-index: 0;

                    .btn-box {
                        margin: auto;
                        overflow: hidden;
                        width: 182px;
                        height: 90px;
                        display: flex;
                        position: relative;
                    
                        .btn {
                            margin: auto;
                            width: 160px;
                            height: 70px;
                            line-height: 70px;
                            font-size: 22px;
                            background: #fff;
                            color: yellowgreen;
                            border: 5px solid yellowgreen;
                        }
                    
                        &:before {
                            content: '';
                            width: 200px;
                            height: 130px;
                            position: absolute;
                            top: -30px;
                            background: #fff;
                            transform: rotateZ(-90deg);
                            transform-origin: bottom left;
                        }
                    
                        &:hover::before {
                            z-index: -1;
                            animation: borderLine 2s ease forwards;
                        }
                    }
                }
            
                @keyframes borderLine {
                    100% {
                        transform: rotateZ(0deg) translate(0px, 0px);
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