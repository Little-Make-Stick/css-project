<template>
    <div class='stripe-shadow-text-res-contain'>
        <div class="stripe-shadow-text" data-name="Solid Shadow Word">
            Solid Shadow Word
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
    .stripe-shadow-text-res-contain {
        height: 100%;
        display: flex;
        font-size: 35px;

        .stripe-shadow-text {
            margin: auto;
            position: relative;

            &:before {
                content: "";
                position: absolute;
                height: 1em;
                width: 100%;
                background-repeat: repeat;
                background-image: linear-gradient(-45deg, #fff 0%, transparent 25%, #fff 50%, transparent 75%, #fff 100%);
                background-size: 6px 6px;
                z-index: 1;
            }

            &:after {
                content: attr(data-name);
                width: 100%;
                height: 100%;
                position: absolute;
                z-index: 2;
                left: -8px;
                top: -8px;
                color: #000;
            }

        }
    
    }
</style>