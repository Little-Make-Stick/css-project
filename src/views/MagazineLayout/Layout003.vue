<template>
    <div class='layout003-contain'>
        <div class="left-img">
            <div class="title">{{title}}</div>
            <div class="author">By {{author}}</div>
        </div>
        <div class="right-info">
            <div class="foreword">
                {{foreword}}
            </div>
            <div class="content">
                <div class="left-content">{{content.left}}</div>
                <div class="center-content">{{content.center}}</div>
                <div class="right-content">{{content.right}}</div>
            </div>
        </div>
    </div>
</template>
<script>
    export default{
        data(){
            return{
                title: "MARLEY'S GHOST",
                author: 'Charles Dickens',
                foreword: 'Marley was dead: to begin with. There is no doubt whatever about that. The register of his burial was signed by the clergyman, the clerk, the undertaker, and the chief mourner.',
                content: {
                    left: `Marley was dead: to begin with. There is no doubt whatever about that. The register of his burial was signed by the clergyman, the clerk, the undertaker, and the chief mourner. Scrooge signed it: and Scrooge’s name was good upon ’Change, for anything he chose to put his hand to. Old Marley was as dead as a door-nail.

Mind! I don’t mean to say that I know, of my own knowledge, what there is particularly dead about a door-nail. I might have been inclined, myself, to regard a coffin-nail as the deadest piece of ironmongery in the trade. But the wisdom of our ancestors is in the simile; and my unhallowed hands shall not disturb it, or the Country’s done for. You will therefore permit me to repeat, emphatically, that`,

                    center: `Marley was as dead as a door-nail.

Scrooge knew he was dead? Of course he did. How could it be otherwise? Scrooge and he were partners for I don’t know how many years. Scrooge was his sole executor, his sole administrator, his sole assign, his sole residuary legatee, his sole friend, and sole mourner. And even Scrooge was not so dreadfully cut up by the sad event, but that he was an excellent man of business on the very day of the funeral, and solemnised it with an undoubted bargain.

The mention of Marley’s funeral brings me back to the point I started from. There is no doubt that Marley was dead. This must be distinctly understood, or nothing wonderful can come of the story I am going to`,

                    right: `relate. If we were not perfectly convinced that Hamlet’s Father died before the play began, there would be nothing more remarkable in his taking a stroll at night, in an easterly wind, upon his own ramparts, than there would be in any other middle-aged gentleman rashly turning out after dark in a breezy spot—say Saint Paul’s Churchyard for instance—literally to astonish his son’s weak mind.

Scrooge never painted out Old Marley’s name. There it stood, years afterwards, above the warehouse door: Scrooge and Marley. The firm was known as Scrooge and Marley. Sometimes people new to the business called Scrooge Scrooge, and sometimes Marley, but he answered to both names. It was all the same to him.`,
                }
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
    $left-color: #fff;
    .layout003-contain{
        display: flex;
        height: 100%;
        width: 100%;
        min-width: 800px;
        .left-img{
            flex: 1;
            height: 100%;
            background-image: url(../../assets/image/layout3-bg-1.jpg) ;
            background-repeat: no-repeat;
            background-size: 100% 100%;
            color: $left-color;
            /* overflow: hidden; */
            display: flex;
            flex-direction: column;
            align-items: flex-end;
            padding-right: 20px;
            .title{
                font-size: 70px;
                font-weight: bold;
                text-align: right;
                word-break: break-word;
                width: 380px;
                margin-top: 80px;
            }
            .author{
                font-size: 25px;
                font-style: italic;
            }
        }
        .right-info{
            flex: 1;
            height: 100%;
            overflow-y: scroll;
            .foreword{
                font-family: "Open Sans", sans-serif;
                padding: 20px 15px 20px 20px;
                font-size: 22px;
                letter-spacing: 2px;
                font-weight: 300;
                /* font-weight: lighter; */
                text-align: right;
            }
            .content{
                display: grid;
                grid-template-columns: repeat(3,1fr);
                grid-template-rows: 1;
                grid-gap: 15px;
                padding: 15px;
                text-align: left;
                line-height: 23px;
                font-weight: 500;
                white-space: break-spaces;
            }
        }
    }
</style>