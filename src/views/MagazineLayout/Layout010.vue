<template>
    <div class='layout010-contain'>
        <div class="title-info-content1">
            <div class="title-info-left-center">
                <div class="title-info">
                    <div class="info-links">
                        <div class="info">
                            <div class="author">By {{author}}</div>
                            <div class="date">{{date}}</div>
                        </div>
                        <div class="links">
                            <div class="facebook-link link-icon">
                                <i class="fa fa-facebook-official" aria-hidden="true"></i>
                            </div>
                            <div class="twitter-link link-icon">
                                <i class="fa fa-twitter" aria-hidden="true"></i>
                            </div>
                            <div class="mail-link link-icon">
                                <i class="fa fa-envelope" aria-hidden="true"></i>
                            </div>
                        </div>
                    </div>
                    <div class="title-foreword">
                        <div class="title">{{title}}</div>
                        <div class="foreword">{{foreword}}</div>
                    </div>
                </div>
                <div class="content1-left-center">
                    <div class="left" v-html="content1.left"></div>
                    <div class="center" v-html="content1.center"></div>
                </div>
            </div>
            <div class="right" v-html="content1.right"></div>
        </div>
        <div class="photo">
            <div class="photo-img">
                <img :src="photo.img" alt="">
            </div>
        </div>
        <div class="content2">
            <div class="left">
                <div class="photo-context">
                    <div class="photo-info">{{photo.info}}</div>
                    <div class="photo-author">{{photo.author}}</div>
                </div>
                <div class="content2-left" v-html="content2.left"></div>
            </div>
            <div class="center" v-html="content2.center"></div>
            <div class="right" v-html="content2.right"></div>
        </div>
        <div class="github-icon">
            <i class="fa fa-github"></i>
        </div>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                author: 'Adrianne Jeffries',
                date: 'APR—24—2017 10:05AM EST',
                title: 'Hawaii’s Online Gaming Curse',
                foreword: 'The island’s physical isolation adds milliseconds of latency to an internet connection. In competitive eSports, milliseconds matter.',
                content1: {
                    left: `
        <div class="section">
            It was a Thursday at around 10 p.m., and the weekly League of Legends tournament was underway at PC Gamerz, a gaming cafe in Honolulu, Hawaii. The store was cool and dark inside, lit by the glow of monitors and a neon-green Monster energy drink sign plugged into the wall. Most of the patrons — almost all young men — were fixated on their screens, but occasionally something would happen in a game, and a corner of the room would break out into raucous commentary.
        </div>
        <div class="section">
            This tournament was just for fun, but some of the players seemed to harbor quiet ambition to get more serious about the game. League of Legends is the most watched, most played competitive video game in the world, with professional leagues sponsored by the likes of Intel, Geico, and Monster Energy. According to <span class="strong">esportsearnings.com</span>, League of Legends tournaments have awarded $38 million since the game started in 2009. One player attending the weekly tournament, Blaise Lum (handle: Too Tilted), said he plays around 50 hours a week. I asked if he had considered going pro. “I’m nowhere near that good,” he demurred. “Maybe one day, you never know.”
        </div>
        <div class="section">
            If Lum wanted to become professional, he’d face an obstacle that’s merely an inconvenience for most League players in Hawaii, but a significant disadvantage for the serious ones. The game’s server is in Chicago. That means if you live in the Midwest, your computer can communicate with it almost instantaneously. If you’re in L.A., it can take roughly 60 milliseconds. But if you’re in Hawaii, it can take 120 milliseconds, with some players reporting as long as 200 milliseconds. And at the highest echelons of competitive video gaming, milliseconds matter.
        </div>
        <div class="section">
            We rarely think about the physicality of the internet. In 2006, former Senator Ted Stevens of Alaska was ridiculed for saying the internet
        </div>`,
                    center: `
        <div class="section">
            was “not a big truck” but rather “a series of tubes.” While Stevens clearly had a limited understanding of the internet, he was right in one sense: The internet is mostly a series of fiberoptic tubes, wrapped in protective layers of steel and plastic, that run above ground and under the sea.
        </div>
        <div class="section">
            There are some very specific situations in which the physical limitations of the internet come to the fore. Probably the best-known example is high-frequency trading, in which traders set up shop <span class="strong">as close to stock exchanges as possible</span>. These limitations are also a <span class="strong">big concern</span> for the emerging field of remote surgery, in which a doctor in the U.S. might operate on a patient in France.
        </div>
        <div class="section sub-title">
            We rarely think about the physicality of the internet
        </div>
        <div class="section">
            High frequency traders, remote surgeons, and competitive eSports players are all worried about the same thing: latency, which is the lag time between when users at different ends of a connection register a piece of data. Another word for this is ping, which refers to a test in which a machine sends a small data packet to another machine and calculates how long it takes to come back. Low ping will make a connection seem faster. High ping will make it seem slower. In reality, the data is traveling at the same speed, it’s just going farther, or making more stops that add small delays along the way.
        </div>`,
                    right: `
        <div class="section">
            In League and other eSports games, playing on a high ping is a big disadvantage. The goal of the game is to set up defenses to protect your base while pushing forward to capture the enemy’s base, and there are typically lightning bolts and fireballs and slime-spitting dragons shooting across the screen. Playing on a high ping means players may not see all of the action that happens in a game. “It's harder for us to dodge them,” said Devin Wolery, the owner of PC Gamerz. “Or when we attack, they they can dodge it easier.” Or as Lum said, “Those extra seconds, even like milliseconds, they just make you feel really off.”
        </div>
        <div class="section">
            In 2015, Riot Games, which publishes League of Legends, <span class="strong">moved</span> the game’s servers from Los Angeles to Chicago in order to “improve connection quality for the vast majority of [North American] players.”
        </div>
        <div class="section">
            The change evened out latency for players on the east and west coasts, but it doubled latency for Hawaii players overnight.
        </div>
        <div class="section">
            Latency can really screw things up for a young eSports scene, said Zack Johnson, who runs gg Circuit, a global tournament provider for gaming centers like PC Gamerz. Players on the mainland sometimes say they don’t want to compete against Hawaii players, he said, because the high ping throws things off.
        </div>
        <div class="section">
            “It really is that they’re out on an island all by themselves,” Johnson said. “In basketball, the hoop is always 10 feet. Every field is always the same. In eSports, there is so much difference in latency, it’s very hard to make that playing field even.”
        </div>
        <div class="section">
            That’s partly why all the big tournaments — the ones where the winning team gets cash prizes of over $1 million — happen in big stadiums, and in person. It’s not just for the spectacle; it’s because otherwise it would be difficult to guarantee a fair game. “We haven't had any professional players come out of Hawaii since the server change,” Wolery said.
        </div>
        <div class="section">
            That doesn’t mean no professional players have come out of Hawaii. Dyrus, birth name Marcus Hill, <span class="strong">played</span> for multiple pro League teams before retiring in 2015 at the ripe age of 23. Matthew Elento, 19, who played as MattLife and now Matt, is a starter for Team Liquid, a well-known eSports organization based in the Netherlands and L.A. that fields teams in multiple games.
        </div>`
                },
                photo: {
                    url: '../../assets/image/layout10-img-1.jpg',
                    img: require('../../assets/image/layout10-img-1.jpg'),
                    info: 'Players at PC Gamerz in Honolulu.',
                    author: 'Jordan Oplinger / The Outline',
                },
                content2: {
                    left: `
        <div class="section sub-title sub-title-left">
            “Any kid playing video games in Hawaii would know the struggles of playing from Hawaii.”
        </div>`,
                    center: `
        <div class="section">
            “Any kid playing video games in Hawaii would know the struggles of playing from Hawaii,” Elento, who now lives in L.A., said. “You have latency for everything.”
        </div>
        <div class="section">
            Latency doesn’t really matter until you get to the highest levels of competition, Elento added, because top players have extremely quick reaction times. It takes years of training to get good enough to go pro, and for 95 percent of that time, he said, ping wasn’t a factor. But in that last stretch, when he was playing against expert players, it really hurt.
        </div>
        <div class="section">
            He had to learn how to “see into the future,” he said, and predict and input moves in advance. Elento likens the scenario to that of a football player, but “instead of being a regular football player, he has to close his eyes for a quarter of a second for every second, and he has to judge all of his decisions based on information he knew before, and he has to just plug in the information for the last quarter of a second.”
        </div>
        <div class="section">
            Gamers playing on high latency develop a “sixth sense” for how to do this, Elento said. When he was growing up in Honolulu, he had an online friend in Australia whose latency was even worse. Yet they both made it to the pro level. “It’s honestly just annoying,” he said. “It’s an obvious competitive disadvantage, but it’s not like it’s unplayable.”
        </div>
        <div class="section">
            Riot Games has a League of Legends server in Australia now. It also has servers in Japan, Turkey, Russia, and Brazil. It has two servers for Europe and two for Latin America in addition to the Chicago server for North America. It does not have any servers in Africa, even though they are frequently 
        </div>`,
                    right: `
        <div class="section">
            requested, according to the fan-maintained <span class="strong">League of Legends wiki</span>.
        </div>
        <div class="section">
            Elento and Wolery said that if Riot could add some kind of server in Hawaii — a small server, perhaps, or a so-called tournament realm server, which is the type of server Riot uses when pros play remote games — it would make a world of difference.
        </div>
        <div class="section sub-title">
            Gamers playing on high latency develop a sixth sense for anticipating moves
        </div>
        <div class="section">
            “I would hope Riot would help out Hawaii and give them a tournament realm that they could play in,” Elento said. “I’m not sure how feasible that is... But that’s definitely something that would help out the competitive Hawaiian scene.”
        </div>
        <div class="section">
            Riot Games declined to comment when asked about latency in Hawaii, saying it was too busy with ongoing Spring Finals playoff series to answer questions. In the meantime, players like Lum will just have to practice clairvoyance.
        </div>
        <div class="section">
            “A lot of it is for fun. But I know there's like a certain amount of people who are very competitive. I guess I'm one of them,” Lum said. “That ping hurts sometimes, but it’s something you can power through.”
        </div>`
                }
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
    $title-color: #5e2ca5;
    $foreword-color: #ff725c;
    $info-color: #999;
    $title-border-color: #9eebcf;
    $github-color: #ff725c;

    .layout010-contain {
        width: 1080px;
        margin: 40px auto;

        .section {
            text-align: left;
            line-height: 26px;
            word-break: break-word;
            margin: 20px 0;
            .strong{


                
                font-weight: 600;
                border-bottom: 2px solid $title-color;
            }

            &.sub-title {
                color: $title-color;
                font-weight: 600;
                font-size: 20px;
                padding: 25px 0;
                position: relative;
                text-align: center;

                &:before {
                    content: '';
                    position: absolute;
                    height: 100%;
                    width: 50%;
                    border-top: 3px solid $title-border-color;
                    border-bottom: 3px solid $title-border-color;
                    top: calc(-1 * calc(16px / 2));
                    left: calc(calc(50% - 20px) / 2);
                }
            }

            &.sub-title-left {
                padding: 0;
                &:before {
                    content: '';
                    position: absolute;
                    height: 100%;
                    width: 100%;
                    border-top: 0px;
                    border-bottom: 0px;
                    border-left: 3px solid $title-border-color;
                    top: 0;
                    left: 0;
                }
            }
        }

        .title-info-content1 {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            grid-template-rows: 1;
            grid-gap: 20px;
            text-align: left;

            .title-info-left-center {
                grid-column: 1/3;

                .title-info {
                    display: grid;
                    grid-template-columns: 35% 65%;
                    grid-template-rows: 1;
                    margin: 20px 0 40px 0;

                    .info-links {
                        display: flex;
                        flex-direction: column;
                        justify-content: space-between;
                        /* margin-top: 10px; */
                        line-height: 30px;
                        font-size: 14px;

                        .info {
                            .date {
                                color: $info-color;
                            }
                        }

                        .links {
                            display: flex;

                            .link-icon {
                                margin-right: 20px;
                            }
                        }
                    }

                    .title-foreword {
                        .title {
                            color: $title-color;
                            font-size: 80px;
                            font-weight: bold;
                        }

                        .foreword {
                            color: $foreword-color;
                            font-size: 22px;
                            margin-top: 20px;
                        }
                    }
                }

                .content1-left-center {
                    display: grid;
                    grid-template-columns: repeat(2, 1fr);
                    grid-template-rows: 1;
                }
            }

            .right {}
        }

        .photo {
            .photo-img {
                img {
                    width: calc(100% - 10px);
                    height: auto;
                    border: 8px solid $title-border-color;
                    margin-bottom: -5px;
                }
            }
        }

        .content2 {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            grid-template-rows: 1;
            grid-gap: 20px;
            text-align: left;

            .left {
                display: flex;
                flex-direction: column;

                .photo-context {
                    background-color: $title-border-color;
                    padding: 12px;
                    line-height: 25px;
                    font-size: 10px;
                }

                .content2-left {
                    flex: 1;
                    display: flex;
                    align-items: center;
                }
            }

            .center {}

            .right {}
        }

        .github-icon {
            position: fixed;
            right: 30px;
            bottom: 30px;
            color: $github-color;
        }
    }
</style>