<template>
    <div class='threeD-text-shadow-res-contain'>
        <div class="text-left-top-shadow">TxT Long Shadow</div>
        <div class="text-right-top-shadow">TxT Long Shadow</div>
        <div class="text-left-bottom-shadow">TxT Long Shadow</div>
        <div class="text-right-bottom-shadow">TxT Long Shadow</div>
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
    $color-red: hsl(14, 100%, 60%);
    $color-blue: hsl(231, 50%, 60%);
    @function longTextShadow_right_bottom($color){
        $val: 0px 0px $color;
        @for $i from 1 through  50 {
            $color: fade-out(desaturate($color, 1%), .02);
            $val: $val, $i+px $i+px $color;
        }
        @return $val;
    };
    @function longTextShadow_right_top($color){
        $val: 0px 0px $color;
        @for $i from -50 through  0 {
            $color: fade-in(saturate($color, 1%), .02);
            $val: $val, (-1 * $i)+px $i+px $color;
        }
        @return $val;
    };
    @function longTextShadow_left_top($color){
        $val: 0px 0px $color;
        @for $i from -50 through  0 {
            $color: fade-in(saturate($color, 1%), .02);
            $val: $val, $i+px $i+px $color;
        }
        @return $val;
    };
    @function longTextShadow_left_bottom($color){
        $val: 0px 0px $color;
        @for $i from 1 through  50 {
            $color: fade-out(desaturate($color, 1%), .02);
            $val: $val, (-1 * $i)+px $i+px $color;
        }
        @return $val;
    };
    .threeD-text-shadow-res-contain{
        font-size: 50px;
        line-height: 150px;
        display: flex;
        flex-wrap: wrap;
        justify-content: space-around;
        .text-right-bottom-shadow{
            color: $color-red;
            text-shadow: longTextShadow_right_bottom(hsl(14, 100%, 40%));
        }
        .text-right-top-shadow{
            color: $color-red;
            text-shadow: longTextShadow_right_top(hsl(14, 100%, 30%));
        }
        .text-left-top-shadow{
            color: $color-blue;
            text-shadow: longTextShadow_left_top(hsl(231, 50%, 30%));
        }
        .text-left-bottom-shadow{
            color: $color-blue;
            text-shadow: longTextShadow_left_bottom(hsl(231, 50%, 40%));
        }
    }
</style>