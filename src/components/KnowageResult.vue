<template>
    <div class='knowage-result-contain'>
        <div class="title">{{$route.meta.title}}{{$route.path}}</div>
        <m-section v-if="demand" title="需求" :content="demand"></m-section>
        <m-section v-if="keyKnowage" title="关键点" :content="keyKnowage"></m-section>
        <m-section v-if="difficult" title="难点" :content="difficult"></m-section>
        <m-code v-if="html" type="html" :code_="html"></m-code>
        <m-code v-if="js" type="js" :code_="js"></m-code>
        <m-code v-if="css" type="css" :code_="css"></m-code>
        <div class="result">
            <p>结果如下：</p>
            <iframe :src="baseURL+$route.path+'_res'" frameborder="1" width="100%" height="500px"></iframe>
        </div>
    </div>
</template>
<script>
    import mSection from '@/components/section.vue';
    import mCode from '@/components/code.vue';
    export default{
        props:{
            demand:{type: String},
            keyKnowage:{type: String},
            difficult:{type: String},
            html:{type: String},
            js:{type: String},
            css:{type: String},
        },
        data(){
            return{
                baseURL: 'http://localhost:8081/#'
            }
        },
        watch:{},
        components:{
            mSection,
            mCode,
        },
        computed:{},
        created(){},
        mounted(){},
        methods:{},
    }
</script>
<style lang="scss" scoped>
    $title-color: #34495e;

    .knowage-result-contain{
        text-align: left;
        padding: 20px 30px;
        .title{
            font-size: 1.8em;
            font-weight: bolder;
            color: $title-color;
        }
    }
</style>