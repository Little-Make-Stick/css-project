<template>
    <div class='code-contain'>
        <p>{{type}}:</p>
        <div class="code-contain">
            <div class="code">{{code_}}</div>
            <div class="code-type">{{type}}</div>
        </div>
    </div>
</template>
<script>
    export default {
        props: {
            type: { type: String, default: 'js' },
            code_: { type: String, default: '' },
        },
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
    $code-bg-color: #f8f8f8;
    $code-type-color: #ccc;

    .code-contain {
        width: 100%;
        margin: 2em 0;

        .code-contain {

            padding: .4em .7em;
            background: $code-bg-color;
            display: flex;

            .code {
                flex: 1
            }

            .code-type {
                color: $code-type-color;
            }
        }
    }
</style>