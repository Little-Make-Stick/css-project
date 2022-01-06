<template>
    <div class='border-not-res-contain'>
        <div class="list">
            <div class="item" v-for="(item,i) in list" :key="i">
                <img :src="item.img" alt="">
            </div>
        </div>
    </div>
</template>
<script>
    export default{
        data(){
            return{
                list: [
                    {
                        imgSrc: '../../assets/image/layout11-img-1.jpg',
                        img: require('../../assets/image/layout11-img-1.jpg')
                    },
                    {
                        imgSrc: '../../assets/image/layout11-img-3.jpg',
                        img: require('../../assets/image/layout11-img-3.jpg')
                    },
                    {
                        imgSrc: '../../assets/image/layout13-img-1.jpg',
                        img: require('../../assets/image/layout13-img-1.jpg')
                    },
                    {
                        imgSrc: '../../assets/image/layout13-img-3.jpg',
                        img: require('../../assets/image/layout13-img-3.jpg')
                    },
                    {
                        imgSrc: '../../assets/image/layout14-img-2.jpg',
                        img: require('../../assets/image/layout14-img-2.jpg')
                    },
                    {
                        imgSrc: '../../assets/image/layout14-img-4.jpg',
                        img: require('../../assets/image/layout14-img-4.jpg')
                    },
                    {
                        imgSrc: '../../assets/image/layout14-img-6.jpg',
                        img: require('../../assets/image/layout14-img-6.jpg')
                    },
                    {
                        imgSrc: '../../assets/image/layout15-img-2.jpg',
                        img: require('../../assets/image/layout15-img-2.jpg')
                    }
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
    .border-not-res-contain{
        height: 100%;
        display: flex;
        .list{
            margin: auto;
            width: 600px;
            display: flex;
            flex-wrap: wrap;
            .item{
                padding: 10px 20px;
                margin-top: 20px;
                img{
                    width: 100px;
                    height: 100px;
                }
                &:not(:nth-child(4n)){
                    border-right: 1px solid #000;
                }
            }
        }
    }
</style>