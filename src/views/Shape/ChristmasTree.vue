<template>
    <div class='christmas-tree-contain'>
        <div class="square-box">
            <!-- <div class="star"></div> -->
            <div class="delta detail-1"></div>
            <div class="delta detail-2"></div>
            <div class="delta detail-3"></div>
            <div class="rect"></div>
        </div>
    </div>
</template>
<script>
    export default {
        data() {
            return {}
        },
        watch: {},
        computed: {},
        created() { },
        mounted() { },
        methods: {},
    }
</script>
<style lang="scss">
    .christmas-tree-contain{
        .square-box{
            width: 200px;
            height: 400px;
            /* border: 1px solid #000; */
            display: flex;
            flex-direction: column;
            align-items: center;
            .delta{
                border: 30px solid transparent;
                border-bottom-color: darkGreen;
                position: relative;
                top: -60px;
                &:first-child {
                    position: relative;
                    top: -30px;
                }
                &.detail-2 {
                    border-width: 50px;
                    position: relative;
                    top: -90px;
                }
                &.detail-3 {
                    border-width: 70px;
                    position: relative;
                    top: -180px;
                }
            }
            .rect{
                position: relative;
                top: -180px;
                width: 15px;
                height: 50px;
                background-color: saddlebrown;
            }
        }
    }
</style>