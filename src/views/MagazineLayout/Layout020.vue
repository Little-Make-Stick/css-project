<template>
    <div class='layout020-contain'>
        <div class="layout-name">{{layout_name}}</div>
        <div class="title">{{title}}</div>
        <div class="content" v-html="content"></div>
    </div>
</template>
<script>
    export default{
        data(){
            return{
                layout_name: 'Multiple Columns and the Picture element combo',
                title: 'CSS Multiple Columns',
                content: `
        <div class="section">
            Adobe has confirmed that a recent cyber-attack compromised many more customer accounts than first reported. The software-maker said that it now believed usernames and encrypted passwords had been stolen from about 38 million of its active users.
        </div>
        <div class="section-image">
            <img src="http://localhost:8081/img/layout13-img-3.cfe38352.jpg" alt="">
        </div>
        <div class="section">
            It added that the attackers had also accessed details from an unspecified number of accounts that had been unused for two or more years. The firm had originally said 2.9 million accounts had been affected.
        </div>
        <div class="section-header">
            Header
        </div>
        <div class="section">
            Adobe has also announced that the hackers stole parts of the source code to Photoshop, its popular picture-editing program.
        </div>
        <div class="section">
            Nullam quis risus eget urna mollis ornare vel eu leo. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nullam quis risus eget urna mollis ornare vel eu leo. Etiam porta sem malesuada magna mollis euismod. Nullam id dolor id nibh ultricies vehicula ut id elit. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Nullam quis risus eget urna mollis ornare vel eu leo.
        </div>
        <div class="section">
            Nullam quis risus eget urna mollis ornare vel eu leo. Maecenas faucibus mollis interdum. Curabitur blandit tempus porttitor. Integer posuere erat a
        </div>
        <div class="section">
            ante venenatis dapibus posuere velit aliquet. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Donec ullamcorper nulla non metus auctor fringilla.
        </div>
        <div class="section-quote">
            Cras mattis consectetur purus sit amet fermentum. Sed posuere consectetur est at lobortis.
        </div>
        <div class="section">
            Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Maecenas faucibus mollis interdum. Vestibulum id ligula porta felis euismod semper. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
        </div>`
            }
        },
        watch:{},
        computed:{},
        created(){},
        mounted(){},
        methods:{},
    }
</script>
<style lang="scss" >
    $layout-name-color: #444;
    $title-color: #903;
    $column-rule-color: #000;
    .layout020-contain{
        padding: 20px 0;
        .layout-name{
            text-align: left;
            font-size: 18px;
            font-weight: 500;
            color: $layout-name-color;
        }
        .title{
            color: $title-color;
            font-size: 20px;
            font-weight: 600;
        }
        .content{
            padding: 20px;
            width: calc(100% - 40px);
            column-count: 3;
            column-rule: 1px solid $column-rule-color;
            column-gap: 20px;
            text-align: left;
            &:first-letter{
                color: $title-color;
                font-size: 2em;
                float: left;
                font-weight: bold;
                margin-right: 5px;
            }
            .section{
                margin: 20px 0;
            }
            .section-image{
                img{
                    width: calc(100% - 20px);
                    margin: 10px auto;
                }
            }
            .section-quote{
                padding: 10px 20px;
                font-style: italic;
            }
            .section-header{
                font-size: 1.2em;
                font-weight: 600;
            }
        }
    }
</style>