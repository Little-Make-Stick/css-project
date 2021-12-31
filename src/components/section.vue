<template>
    <div class='section-contain'>
        <div class="title">{{title}}</div>
        <div class="content" v-html="content"></div>
    </div>
</template>
<script>
    export default {
        props: {
            title: { type: String, default: 'title' },
            content: { type: String, default: 'content' },
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
<style lang="scss">
    $theme-color: #42b983;
    $code-bg-color: #cfcece;
    $inline-code-color: #e96900;
    $quote-color: #b2b0b0;

    .section-contain {
        margin: 20px 0;

        .title {
            font-size: 1.6em;
            font-weight: bold;
            display: inline-block;

            &:hover {
                text-decoration: underline $theme-color;
            }
        }

        .content {
            line-height: 2em;
            .inline-code{
                background: $code-bg-color;
                color: $inline-code-color;
                padding: 5px;
                filter: brightness(120%);
            }
            ul {
                padding: 1em;
            }

            .quote{
                color: $quote-color;
            }

            .quote-link {
                a {
                    color: $theme-color;
                    padding: .3em 2em;
                    border-left: 4px solid $theme-color;
                    font-weight: 600;
                }
            }
            p{
                &.strong{
                    font-weight: bold;
                }
            }
        }
    }
</style>