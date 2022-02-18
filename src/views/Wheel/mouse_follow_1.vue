<template>
    <div class='mouse-follow-1-contain'>
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
                    <li>障眼法，通过将屏幕铺满 div 进行控制鼠标跟随</li>
                    <li>通过 hover 以及 transtion 改变元素的透明度</li>
                </ul>
                `,
                difficult: ``,
                html: `
                <div class='mouse-follow-1-res-contain'>
                    <div class="mouse-follow-1-bg">
                        hover me
                        <div class="box-list">
                            <div class="h-list" v-for="h in list_y" :key="h">
                                <div class="box" v-for="v in list_x" :key="h + '-' + v"></div>
                            </div>
                        </div>
                    </div>
                </div>
                `,
                js: ``,
                css: `
                .mouse-follow-1-res-contain {
                    height: 100%;
                            
                    .mouse-follow-1-bg {
                        width: 100%;
                        height: 100%;
                        text-align: center;
                        font-size: 15vw;
                        -webkit-text-fill-color: transparent;
                        -webkit-text-stroke: 1px rgba(118, 218, 255, .8);
                        position: relative;
                    
                        .box-list {
                            width: 100%;
                            height: calc(100% - 26px);
                            padding: 13px 0;
                            position: absolute;
                            top: 0;
                            .h-list{
                                display: flex;
                                .box{
                                    width: 40px;
                                    height: 26px;
                                    /* border: 1px solid blue; */
                                    position: relative;
                                    &::before{
                                        content: '';
                                        width: 39px;
                                        height: 39px;
                                        position: absolute;
                                        left: 50%;
                                        top: 50%;
                                        transform: translate(-50%, -50%);
                                        border-radius: 50%;
                                        
                                    }
                                    &:hover::before{
                                        background-color: tomato;
                                    }
                                }
                            }
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