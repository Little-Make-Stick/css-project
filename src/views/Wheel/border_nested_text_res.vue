<template>
    <div class='border-nested-text-res-contain'>
        <div class="border-nested-text">
            <div class="three-shape">
                <fieldset><legend>one</legend></fieldset>
                <fieldset><legend>two</legend></fieldset>
                <fieldset><legend>three</legend></fieldset>
            </div>
            <div class="four-shape">
                <fieldset><legend>one</legend></fieldset>
                <fieldset><legend>two</legend></fieldset>
                <fieldset><legend>three</legend></fieldset>
                <fieldset><legend>four</legend></fieldset>
            </div>
            <div class="five-shape">
                <fieldset><legend>one</legend></fieldset>
                <fieldset><legend>two</legend></fieldset>
                <fieldset><legend>three</legend></fieldset>
                <fieldset><legend>four</legend></fieldset>
                <fieldset><legend>five</legend></fieldset>
            </div>
            <div class="six-shape">
                <fieldset><legend>one</legend></fieldset>
                <fieldset><legend>two</legend></fieldset>
                <fieldset><legend>three</legend></fieldset>
                <fieldset><legend>four</legend></fieldset>
                <fieldset><legend>five</legend></fieldset>
                <fieldset><legend>six</legend></fieldset>
            </div>
            <div class="eight-shape">
                <fieldset><legend>one</legend></fieldset>
                <fieldset><legend>two</legend></fieldset>
                <fieldset><legend>three</legend></fieldset>
                <fieldset><legend>four</legend></fieldset>
                <fieldset><legend>five</legend></fieldset>
                <fieldset><legend>six</legend></fieldset>
                <fieldset><legend>seven</legend></fieldset>
                <fieldset><legend>eight</legend></fieldset>
            </div>
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
<style lang="scss" scoped>
    fieldset {
        border: 5px solid transparent;
        border-top-color: #000;
        position: absolute;
        transform-origin:  center 60px ;
        width: 60px;

        legend {
            padding: 0 10px;
        }
    }

    .border-nested-text-res-contain {
        height: 100%;
        display: flex;

        .border-nested-text {
            width: 90%;
            height: 240px;

            display: flex;
            justify-content: space-around;
            align-items: center;

            .three-shape {
                position: relative;
                fieldset:first-child {
                    top: 65px;
                }

                fieldset:nth-child(2) {
                    left: 22.5px;
                    transform: rotate(-60deg);
                }

                fieldset:nth-child(3) {
                    left: -22.5px;
                    transform: rotate(60deg);
                }
            }
            /* 90deg */
            .four-shape{
                position: relative;
                fieldset{
                    border-top-color: deepskyblue;
                    legend{
                        color: deepskyblue;
                    }
                }
                fieldset:first-child {
                    top: 0;
                }

                fieldset:nth-child(2) {
                    transform: rotate(180deg);
                    top: -10px;
                }

                fieldset:nth-child(3) {
                    left: 5px;
                    top: -5px;
                    transform: rotate(-90deg);
                }
                fieldset:nth-child(4) {
                    left: -5px;
                    top: -5px;
                    transform: rotate(90deg);
                }
            }
            /* 108deg */
            .five-shape{
                position: relative;
                fieldset{
                    border-top-color: tomato;
                    legend{
                        color: tomato;
                    }
                }
                fieldset:first-child {
                    top: -10px;
                    left: 5px;
                    transform: rotate(36deg);
                }

                fieldset:nth-child(2) {
                    transform: rotate(-36deg);
                    top: -10px;
                    left: -5px;
                }

                fieldset:nth-child(3) {
                    left: 10px;
                    top: 5px;
                    transform: rotate(108deg);
                }
                fieldset:nth-child(4) {
                    left: -10px;
                    top: 5px;
                    transform: rotate(-108deg);
                }
                fieldset:nth-child(5) {
                    left: 0px;
                    top: 15px;
                    transform: rotate(180deg);
                }
            }
            /* 120deg */
            .six-shape{
                position: relative;
                fieldset{
                    border-top-color: yellowgreen;
                    legend{
                        color: yellowgreen;
                    }
                }
                
                fieldset:first-child {
                    transform: rotate(0deg);
                }

                fieldset:nth-child(2) {
                    left: -25px;
                    top: 15px;
                    transform: rotate(-60deg);
                }

                fieldset:nth-child(3) {
                    left: 25px;
                    top: 15px;
                    transform: rotate(60deg);
                }
                fieldset:nth-child(4) {
                    left: -25px;
                    top: 40px;
                    transform: rotate(-120deg);
                }
                fieldset:nth-child(5) {
                    left: 25px;
                    top: 40px;
                    transform: rotate(120deg);
                }

                fieldset:nth-child(6) {
                    left: 0px;
                    top: 55px;
                    transform: rotate(180deg);
                }
            }
            /* 135deg */
            .eight-shape{
                position: relative;
                fieldset{
                    border-top-color: gold;
                    legend{
                        color: gold;
                    }
                }
                
                fieldset:first-child {
                    transform: rotate(0deg);
                }

                fieldset:nth-child(2) {
                    left: -40px;
                    top: 17.5px;
                    transform: rotate(-45deg);
                }

                fieldset:nth-child(3) {
                    left: 40px;
                    top: 17.5px;
                    transform: rotate(45deg);
                }
                fieldset:nth-child(4) {
                    left: -57.5px;
                    top: 57.5px;
                    transform: rotate(-90deg);
                }
                fieldset:nth-child(5) {
                    left: 57.5px;
                    top: 57.5px;
                    transform: rotate(90deg);
                }

                fieldset:nth-child(6) {
                    left: 40px;
                    top: 100px;
                    transform: rotate(135deg);
                }

                fieldset:nth-child(7) {
                    left: -40px;
                    top: 100px;
                    transform: rotate(-135deg);
                }

                fieldset:nth-child(8) {
                    top: 117.5px;
                    transform: rotate(180deg);
                }
            }
        }

    }
</style>