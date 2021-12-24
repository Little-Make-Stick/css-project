<template>
    <div class='side-shadow-res-contain'>
        <template v-for="item in direct" :key="item.key">
            <div :class="`${item.key}-shadow`">{{item.content}}</div>
        </template>
    </div>
</template>
<script>
    export default{
        data(){
            return{
                direct: [
                    {
                        key: 'top',
                        content: '上',
                    },
                    {
                        key: 'right',
                        content: '右',
                    },
                    {
                        key: 'bottom',
                        content: '下',
                    },
                    {
                        key: 'left',
                        content: '左',
                    },
                ]
            }
        },
        watch:{},
        computed:{},
        created(){},
        mounted(){},
        methods:{},
    }
</script>
<style lang="scss" scoped>
    .side-shadow-res-contain{
        display: flex;
        flex-wrap: wrap;
        [class$="-shadow"]{
            width: 100px;
            height: 100px;
            margin: 20px;
            border: 1px solid #000;
            line-height: 100px;
        }
        .top-shadow{
            box-shadow: 0px -8px 5px -5px #000;
        }
        .right-shadow{
            box-shadow: 8px 0px 5px -5px #000;
        }
        .bottom-shadow{
            box-shadow: 0px 8px 5px -5px #000;
        }
        .left-shadow{
            box-shadow: -8px 0px 5px -5px #000;
        }
    }
</style>