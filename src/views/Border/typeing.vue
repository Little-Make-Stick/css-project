<template>
    <div class='typeing-contain'>
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
                    <li>利用 border-right 实现光标闪烁</li>
                </ul>
                `,
                difficult: ``,
                html: `
                <div class='typeing-res-contain'>
                    <h1>Pure CSS Typing animation.</h1>
                </div>
                `,
                js: ``,
                css: `
                .typeing-res-contain{
                    height: 100%;
                    background-color: #000;
                    color: #fff;
                    display: flex;
                    h1{
                        margin: auto;
                        display: inline-block;
                        overflow: hidden;
                        white-space: nowrap;
                        width: 26ch;
                        border-right: 3px solid #fff;
                        animation: typing 9s steps(25, end), blink .4s step-end infinite alternate;
                    }
                }
                @keyframes typing{
                    from {
                        width: 0%;
                    }
                }

                @keyframes blink{
                    0% {
                        border-color: #fff;
                    }
                    50% {
                        border-color: transparent;
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