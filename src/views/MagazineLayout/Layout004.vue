<template>
    <div class='layout004-contain'>
        <div class="left-catalogue">
            <div class="left-content">
                <div class="title">{{title}}</div>
                <div class="catalogue">
                    <div class="catalogue-item" v-for="(item,i) in articles" :key="i">
                        <div class="item-title">{{item.title}}</div>
                        <div class="item-date">{{item.date}}</div>
                    </div>
                </div>
            </div>
        </div>
        <div class="right-content">
            <div class="articles-list">
                <div class="article" v-for="(item,i) in articles" :key="i">
                    <div class="article-title">{{item.title}}</div>
                    <div class="article-content" v-html="item.content"></div>
                    <div class="article-info">
                        <div class="article-date">{{item.date}}</div>
                        <div class="article-author">{{item.author}}</div>
                    </div>
                </div>
            </div>
        </div>
        <!-- <img src="../../assets/image/layout4-img-1.jpg" alt=""> -->
    </div>
</template>
<script>
    export default {
        data() {
            return {
                title: 'QUANTUM FUZZINESS',
                articles: [
                    {
                        date: '3 hours ago',
                        author: 'I. Newton',
                        title: 'IMAGINARY TIME',
                        content: `
        <div class="section first-letter-left">
            Imaginary time is a concept derived from quantum mechanics and is essential in connecting quantum mechanics with statistical mechanics.
        </div>
        <div class="section quote">
            <div class="quote-content">
                One might think this means that imaginary numbers are just a mathematical game having nothing to do with the real world. From the viewpoint of positivist philosophy, however, one cannot determine what is real. All one can do is find which mathematical models describe the universe we live in. It turns out that a mathematical model involving imaginary time predicts not only effects we have already observed but also effects we have not been able to measure yet nevertheless believe in for other reasons. So what is real and what is imaginary? Is the distinction just in our minds?
            </div>
            <div class="quote-author">——Stephen Hawking</div>
        </div>
        <div class="section">
            Imaginary time can be difficult to visualize. If we imagine "regular time" as a horizontal line running between "past" in one direction and "future" in the other, then imaginary time would run perpendicular to this line as the imaginary numbers run perpendicular to the real numbers in the complex plane. Imaginary time is not imaginary in the sense that it is unreal or made-up — it simply runs in a direction different from the type of time we experience. In essence, imaginary time is a way of looking at the time dimension as if it were a dimension of space: you can move forward and backward along imaginary time, just like you can move right and left in space.
        </div>`,
                    },
                    {
                        date: '4 days ago',
                        author: 'L. Boltzmann',
                        title: 'ALPHA PARTICLES',
                        content: `
        <div class="section first-letter-left">
            An alpha particle is a particle made up of two protons and two neutrons. Since this configuration is similar to that of a helium nucleus, it’s often referred to as a helium nucleus. The term is commonly used in nuclear physics, and is one of the three particles commonly emitted during a radioactive decay, i.e., alpha, beta, and gamma particles.
        </div>
        <div class="section">
            Alpha particles gained prominence during the early days of particle physics when scientists used them as projectiles to bombard certain targets. One of the most widely celebrated experiments that made use of alpha particles was that of Ernest Rutherford’s that led to the discovery of the atom’s structure.
        </div>
        <div class="section">
            Using alpha particles as projectiles and gold foils as targets, Rutherford was able to come to the conclusion that atoms were made up of very dense positively charged cores with the much lighter negatively-charged electrons orbiting around it. His conclusion was based on the observation that the trajectories of the alpha particles were slightly deviated (as expected) at most times but in rare instances bounced off like ping-pong balls thrown against a wall.
        </div>`,
                    },
                    {
                        date: '1 week ago',
                        author: 'M. Planck',
                        title: 'M THEORY',
                        content: `
        <div class="section first-letter-left">
            In theoretical physics, M-theory is an extension of string theory in which 11 dimensions of spacetime are identified as 7 higher-dimensions plus the 4 common dimensions (11D st = 7 hd + 4D). Proponents believe that the 11-dimensional theory unites all five 10 dimensional string theories (10D st = 6 hd + 4D) and supersedes them. Though a full description of the theory is not known, the low-entropy dynamics are known to be supergravity interacting with 2- and 5-dimensional membranes.
        </div>
        <div class="section">
            This idea is the unique supersymmetric theory in 11 dimensions (11D), with its low-entropy matter content and interactions fully determined, and can be obtained as the strong coupling limit of type IIA string theory because a new dimension of space emerges as the coupling constant increases.
        </div>
        <div class="section-img">
            <img src="http://localhost:8080/img/layout4-img-1.d4eb4b1c.jpg" alt="M THEORY IMAGE">
        </div>
        <div class="section">
            Drawing on the work of a number of string theorists (including Ashoke Sen, Chris Hull, Paul Townsend, Michael Duff and John Schwarz), Edward Witten of the Institute for Advanced Study suggested its existence at a conference at USC in 1995, and used M-theory to explain a number of previously observed dualities, initiating a flurry of new research in string theory called the second superstring revolution.
        </div>
        <div class="section">
            In the early 1990s, it was shown that the various superstring theories were related by dualities which allow the description of an object in one super string theory to be related to the description of a different object in another super string theory. These relationships imply that each of the super string theories is a different aspect of a single underlying theory, proposed by Witten, and named "M-theory".
        </div>`,
                    }
                ]
            }
        },
        watch: {},
        computed: {},
        created() { },
        mounted() { },
        methods: {},
    }
</script>
<style lang="scss">
    $theme-bg-color: #000;
    $title-color: #fff;
    $catalogue-color: #666666;
    $catalogue-border-color: rgba(255, 255, 255, 0.1);
    $content-color: #333638;
    $content-info-color: #ccc;

    .layout004-contain {
        display: grid;
        grid-template-columns: 40% 60%;
        grid-template-rows: 1;
        font-family: Droid Serif, Georgia, serif;
        letter-spacing: 1px;
        height: 100%;
        width: 100%;
        overflow-y: hidden;

        .left-catalogue {
            /* width: 400px; */
            padding: 40px;
            height: 100%;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            background-color: $theme-bg-color;

            .left-content {

                .title {
                    width: 600px;
                    color: $title-color;
                    font-size: 32px;
                    font-weight: bold;
                    line-height: 35px;
                    margin: 30px 0;
                    letter-spacing: 2px;
                }

                .catalogue {
                    color: $catalogue-color;
                    width: 300px;
                    margin: 0 auto;

                    .catalogue-item {
                        padding: 15px 0;
                        border-bottom: .6px solid $catalogue-border-color;

                        .item-title {
                            font-size: 20px;
                        }

                        .item-date {
                            font-size: 10px;
                        }
                    }
                }
            }
        }

        .right-content {
            flex: 1;
            overflow-y: scroll;
            padding: 25px;

            .articles-list {
                .article {
                    .article-title {
                        font-size: 30px;
                        font-weight: bold;
                        color: $content-color;
                        margin: 20px 0;
                        letter-spacing: 2px;
                    }

                    .article-content {
                        text-align: left;
                        font-size: 20px;

                        .section {
                            margin: 20px 0;
                            &.first-letter-left {
                                &:first-letter {
                                    float: left;
                                    color: $content-color;
                                    font-size: 2em;
                                    vertical-align: top;
                                }
                            }
                            &.quote{
                                border-left: 6px solid $content-color;
                                padding-left: 15px;
                                font-style: italic;
                                .quote-content{}
                                .quote-author{
                                    color: $content-info-color;
                                    margin: 15px 20px;
                                }
                            }
                        }
                        .section-img{
                            display: flex;
                            justify-content: center;
                        }
                    }

                    .article-info {
                        display: flex;
                        justify-content: space-between;
                        margin: 30px 0;
                        color: $content-info-color;

                        .article-date {}

                        .article-author {}
                    }
                }
            }
        }
    }
</style>