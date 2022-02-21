<template>
    <div class='streamer-text-res-contain'>
        <div class="streamer-text" data-text="Lorem ipsum dolor"> Lorem ipsum dolor </div>
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
.streamer-text-res-contain{
    height: 100%;
    background: #000;
    .streamer-text{
        // color: #E8A95B;
        font-size: 60px;
        font-weight: bolder;
        letter-spacing: 1px;
        display: inline-block;
        position: relative;
        color: transparent;
        background: #E8A95B;
        // background: linear-gradient(135deg, transparent 10%, #fff 10%, #fff 15%, transparent 15%, transparent 40%, #fff 40%, #fff 45%, transparent 45%, transparent 80%, #fff 80%, #fff 85%, transparent 85%, transparent 100%);
        background-clip: text;
        
        &::after{
            content: attr(data-text);
            position: absolute;
            width: 100%;
            height: 100%;
            left: 0;
            top: 0;
            color: transparent;
            font-size: 60px;
            font-weight: bold;
            letter-spacing: 1px;
            // background: #E8A95B;
            background: linear-gradient(135deg, transparent 50%, #fff 50%, #fff 55%, transparent 55%);
            filter: brightness(120%) blur(2px);
            background-size: 300px 100%;
            background-position: top left;
            background-repeat: repeat-x;
            background-clip: text;
            animation: brightAnimate 3s linear infinite ;
            overflow: hidden;
        }
    }
}
@keyframes brightAnimate{
    @for $i from 1 through 100 {
        #{$i}% {
            background: linear-gradient(135deg, transparent #{$i * 1%}, #fff #{$i * 1%}, #fff #{($i + 5) * 1%}, transparent #{($i + 5) * 1%});
            background-size: 300px 100%;
            background-position: top left;
            background-repeat: repeat-x;
            background-clip: text;
        }
    }
}
</style>