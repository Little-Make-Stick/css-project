<template>
    <div class='layout011-contain'>
        <div class="header-photo">
            <img :src="headerPhoto.img" alt="">
        </div>
        <div class="title-subtitle-content1">
            <div class="col1">
                <div class="title">{{title}}</div>
                <div class="sub-title">{{subTitle}}</div>
            </div>
            <template v-for="(item,i) in content1" :key="i">
                <div class="col" v-html="item"></div>
            </template>
        </div>
        <div class="photo-1">
            <img :src="photo_1.img" alt="">
        </div>
        <div class="content2">
            <template v-for="(item,i) in content2" :key="i">
                <div class="col" v-html="item"></div>
            </template>
        </div>
        <div class="photo-2">
            <img :src="photo_2.img" alt="">
        </div>
        <div class="content3">
            <template v-for="(item,i) in content3" :key="i">
                <div class="col" v-html="item"></div>
            </template>
        </div>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                headerPhoto: {
                    img: require('../../assets/image/layout11-img-1.jpg'),
                    url: '../../assets/image/layout11-img-1.jpg',
                },
                title: 'Land of Salt and Rock',
                subTitle: 'Five Days in Utah',
                content1: [
                    `
        <div class="section">
            “Why Utah?”
        </div>
        <div class="section">
            The question was posed to me pretty much every time I told someone where I was headed on my next adventure.
        </div>
        <div class="section">
            “What’s there?”
        </div>
        <div class="section section-begin">
            I was, of course, going to find out what was there. But at the very least I knew that if HBO’s Westworld, which is filmed in the state, was
        </div>`,
                    `
        <div class="section-other">
            anything close to how the landscapes looked in real life, I was in for a few days of magic.
        </div>
        <div class="section">
            Utah might not be one of the first states that comes to mind when making a trip to America, but it should be. For lovers of the outdoors, it is an unparalleled paradise, with breathtaking rock formations around every highway turn.
        </div>
        <div class="section section-begin">
            To maximize the area covered, consider flying into Las Vegas, renting a car, and driving up into
        </div>`,
                    `
        <div class="section-other">
            Utah (stop in Vegas for a quick lunch, perhaps at the delicious La Comida located off the strip). Utah has five glorious national parks, each with their own distinct characteristics, so it is best to plan ahead to figure out which ones are within your means for time and distance.
        </div>
        <div class="section section-begin">
            Amangiri, a five-star Aman property sitting close to Utah’s border with Arizona, provides an ideal destination for day one.
        </div>`
                ],
                photo_1: {
                    img: require('../../assets/image/layout11-img-2.jpg'),
                    url: '../../assets/image/layout11-img-2.jpg',
                },
                content2: [
                    `
        <div class="section-other">
            Driving out of Nevada, through parts of Arizona, and into Utah is nothing short of awe-inspiring, with the scenery morphing from yellow to red to beige. Reaching Amangiri feels like approaching a secluded fortress, with a private winding road that snakes through the mountainous rocks.
        </div>
        <div class="section">
            “We’ve been expecting you!” the receptionist says as we buzz for entry through Amangiri’s locked gate. Finally reaching the resort itself, my partner and I are greeted by a team of friendly staff who immediately whisk our bags away as a host escorts us up the paved stairs. It is nighttime when we arrive, and the building is lined with glowing lanterns that light our path.
        </div>`,
                    `
        <div class="section">
            Inside, the lobby flows into the dining room and open kitchen, which in turn leads to an inner courtyard. Past the dazzling pool and hot tub, we are guided to our room, where check-in is as simple as signing our names.
        </div>
        <div class="section section-begin">
            Inspired by the area’s native Navajo people, Amangiri is so in touch with its surroundings that it seems as if it grew from the ground itself. Exposed concrete in soft greys; contemporary furnishings in muted yellows; a handmade dreamcatcher presented on the bed as a welcome gift—this place knows service, and knows detail. Want to go for a walk? There is an umbrella in case it rains. Partake in stargazing? They bring in
        </div>`,
                    `
        <div class="section-other">
            an expert astronomer. Eat a delicious meal? Pull up a seat in the dining room and indulge in tortilla soup for dinner or huevos rancheros for breakfast, all the while never having to sign a bill or even give your room number. Guests here are friendly, too, and you never know who you might be talking to—that brunette woman dining solo might just have designed sets for 1995’s Outbreak.
        </div>
        <div class="section section-begin">
            Amangiri offers free guided hikes right from the property that explore the surrounding terrain, but it is also only a few hours’ drive from Zion National Park. Along the way, watch the rock formations change, perhaps stopping at the Grand-Staircase Escalante for a short detour to
        </div>`,
                    `
        <div class="section-other">
            see some toadstools. That is the beauty of this land: even small journeys on the side of the highway turn into momentous adventures.
        </div>
        <div class="section section-begin">
            If visiting Zion in the off-season, you can take your car right through the park, stopping as many or as few times as desired (if there during peak season, shuttles are used to take explorers to the different viewpoints). The rock patterns on these red mountains seem to swirl and swish like ice cream cones, and a short hike down along the Lower Emerald Pool Trail makes me feel as though I’ve encountered a rugged stony jungle.
        </div>`
                ],
                photo_2: {
                    img: require('../../assets/image/layout11-img-3.jpg'),
                    url: '../../assets/image/layout11-img-3.jpg',
                },
                content3: [
                    `
        <div class="section-other">
            On the way back to Amangiri, we detour to the Coral Pink Sand Dunes State Park and revel in the fact that we are the only two people in the entire place. Traipsing over mountains of Kool-Aid-coloured sand, I bend down to feel it between my fingers. It’s silky and light, almost whimsical.
        </div>
        <div class="section">
            If looking to stop for a bite somewhere along the way, consider Kanab Creek Bakery, located in the town of Kanab that sits between Amangiri and Zion; pop in for a humungous turkey sandwich on freshly baked bread.
        </div>
        <div class="section section-begin">
            Back at Amangiri, we indulge in a couple’s massage at the onsite spa, taking in the pre-
        </div>`,
                    `
        <div class="section-other">
            treatment sage smudging and post-treatment steam shower. I then spend a few moments alone in the outdoor wading pool, letting the darkness of the night envelop me.
        </div>
        <div class="section">
            Come morning, we bid a sad farewell to Amangiri and head for Bryce Canyon National Park. Known for its chillingly beautiful sea of spire rock formations called hoodoos, Bryce is best enjoyed from Sunset Point, where the amphitheatre of hoodoos can be seen in full force, and adventurers can even walk down into the basin to stand right next to them. Also not to miss is the Natural Bridge viewpoint, which looks out onto a majestic arch-like wonder.
        </div>`,
                    `
        <div class="section">
            From Bryce Canyon, the road leads us north to the state capital, Salt Lake City. Host of the 2002 Winter Olympics, Salt Lake’s close proximity to six ski resorts makes it a great jumping off point for snowbirds. Our home for two nights is The Grand America Hotel, a luxury property with old world charms. Indeed, as the receptionist prepares the room key—shaped like an actual key, not the typical swipe card—he says, “We like to keep things a bit old-fashioned.”
        </div>
        <div class="section section-begin">
            For food, head to Pago for kale Caesar salad and bavette steak, or to HSL for pork chops, fried chicken, and General Tso-style cauliflower. Craft beer can be found at many places including the
        </div>`,
                    `
        <div class="section-other">
            notable Uinta Brewing (because yes, alcohol is allowed and even produced in this Mormon state), and coffee is good at the Rose Establishment. The cafe is our final stop on the way to the Salt Lake airport, one last hurrah before leaving the splendid landscapes behind and heading back home to tell everyone exactly what can be found in this land of salt and rock.
        </div>
        <div class="last-words">
            <div class="author">Text by Sarah Harowitz</div>
            <div class="info">
                Photographs by Pedro Szekely, used under a Creative Commons Attribution-NonCommercial-ShareAlike 2.0 Generic license
            </div>
        </div>`
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
    .layout011-contain {
        width: calc(100% - 180px);
        padding: 40px 90px;

        .section {
            text-indent: 2em;
            margin: 10px 0;
            width: 100%;
            &.section-begin {
                text-align: justify;
                text-justify: kashida;
            }
        }

        .header-photo {
            img {
                width: 100%;
            }

            margin: 20px 0;
            padding-bottom: 30px;
            border-bottom: 2px solid;
        }

        .title-subtitle-content1 {
            display: grid;
            grid-template-columns: repeat(4, 1fr);
            grid-template-rows: 1;
            grid-gap: 20px;
            text-align: left;

            .title {
                font-size: 55px;
                font-weight: 600;
            }

            .sub-title {
                font-size: 35px;
                font-weight: 500;
            }
        }

        .photo-1 {
            img {
                width: 100%;
            }

            margin: 20px 0;
        }

        .content2 {
            display: grid;
            grid-template-columns: repeat(4, 1fr);
            grid-template-rows: 1;
            grid-gap: 20px;
            text-align: left;
        }

        .photo-2 {
            img {
                width: 100%;
            }

            margin: 20px 0;
        }

        .content3 {
            display: grid;
            grid-template-columns: repeat(4, 1fr);
            grid-template-rows: 1;
            grid-gap: 20px;
            text-align: left;
        }
    }
</style>