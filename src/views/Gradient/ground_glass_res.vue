<template>
    <div class='ground-glass-res-contain'>
        <div class="ground-glass">
            <div class="ground-glass-box">
                <div class="ground-glass-box-txt"> background-attachment: fixed + filter: bulr() 实现毛玻璃效果 </div>
            </div>
        </div>
    </div>
</template>
<script>
    export default{
        data(){
            return{}
        },
        watch:{},
        computed:{},
        created(){},
        mounted(){},
        methods:{},
    }
</script>
<style lang="scss" scoped>
.ground-glass-res-contain{
    height: 100%;
    .ground-glass{
        width: 100%;
        height: 100%;
        background-image: url('../../assets/image/ground-glass-img.jpg');
        background-size: cover;
        background-attachment: fixed;
        display: flex;
        
        .ground-glass-box{
            width: 400px;
            height: 200px;
            margin: auto;
            border-radius: 6px;
            border: .5px solid rgba(255, 255, 255, .5);
            background: inherit;
            padding: 10px;
            /* background: rgba(255, 255, 255, .2); */
            position: relative;
            .ground-glass-box-txt{
                font-size: 30px;
                color: #fff;
                position: relative;
                z-index: 10;
            }
            &::after{
                content: '';
                position: absolute;
                left: 0;
                top: 0;
                background: inherit; 
                /* background: rgba(255, 255, 255, .2); */
                filter: blur(10px) ;
                width: 100%;
                height: 100%;
                z-index: 0;
            }
            
        }
    }
}
</style>