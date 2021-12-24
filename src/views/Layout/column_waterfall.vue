<template>
    <div class='column-waterfall-contain'>
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
                    <li>column-count: 元素内容将被划分的最佳列数</li>
                    <li>break-inside: 避免在元素内部插入分页符</li>
                </ul>`,
                difficult: ``,
                html: `
                <div class='column-waterfall-res-contain'>
                    <template v-for="item in arr" :key="item">
                        <div class="box">{{item}}</div>
                    </template>
                </div>`,
                js: ``,
                css: `
                $count: 32;
                @function randomNum($max , $min:0 , $u:1 ){
                    @return (random($max) + $min) * $u;
                };
                @function randomColor(){
                    @return rgb(randomNum(255) , randomNum(255) , randomNum(255));
                };
                .column-waterfall-res-contain{
                    padding: 20px;
                    column-count: 4;
                    column-gap: 20px;
        
                    @for $i from 1 to $count+1 {
                        .box:nth-child(#{$i}){
                            width: 100%;
                            height: #{randomNum(200 , 50)}px;
                            background: randomColor();
                            line-height: 100%;
                            margin-bottom: 20px ;
                            break-inside: avoid;
                        }
                    }
                }`,
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