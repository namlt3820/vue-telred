/* eslint-disable consistent-return, default-case */
<template>
    <v-container fluid pa-0>
        <div class="fix-width">
            <p class="title-1">WE MAKE THE TOOLS THAT GIVE YOU SUPER POWERS</p>
            <p class="title-2">
                Talk and share files without bad guys eavesdropping. Launch machine learning products without being a
                genius data scientist and devOps expert.
            </p>
        </div>
        <div class="carousel-container">
            <div class="fix-width-slider">
                <v-layout wrap pa-0 ma-0>
                    <v-flex xs0 lg1 :class="`d-lg-flex justify-end align-center d-none`">
                        <div
                            class="arrow"
                            @click="leftSlide"
                            @mouseover="leftActive = true"
                            @mouseout="leftActive = false"
                        >
                            <img
                                :src="
                                    leftActive
                                        ? require('@/assets/images/slide-left-active.png')
                                        : require('@/assets/images/slide-left.png')
                                "
                                alt="slide-left"
                            />
                        </div>
                    </v-flex>
                    <v-flex xs12 lg10>
                        <carousel-3d
                            :width="slideWidth"
                            :height="slideHeight"
                            ref="carousel"
                            :startIndex="slideIndex"
                            @before-slide-change="onBeforeSlideChange"
                            :autoplay="$vuetify.breakpoint.mdAndDown"
                            :autoplayTimeout="$vuetify.breakpoint.xsOnly ? 3000 : 2000"
                            :perspective="0"
                            :space="slideSpace"
                        >
                            <slide :index="0">
                                <img :src="require('@/assets/images/silde-1.png')" alt="slide1" />
                            </slide>
                            <slide :index="1">
                                <img :src="require('@/assets/images/silde-2.png')" alt="slide2" />
                            </slide>
                            <slide :index="2">
                                <img :src="require('@/assets/images/silde-3.png')" alt="slide3" />
                            </slide>
                        </carousel-3d>
                    </v-flex>
                    <v-flex xs0 lg1 :class="`d-lg-flex justify-start align-center d-none`">
                        <div
                            class="arrow"
                            @click="rightSlide"
                            @mouseover="rightActive = true"
                            @mouseout="rightActive = false"
                        >
                            <img
                                :src="
                                    rightActive
                                        ? require('@/assets/images/slide-right-active.png')
                                        : require('@/assets/images/slide-right.png')
                                "
                                alt="slide-right"
                            />
                        </div>
                    </v-flex>
                </v-layout>
            </div>
        </div>
    </v-container>
</template>
<script>
import { Carousel3d, Slide } from 'vue-carousel-3d';

export default {
    data() {
        return {
            slideIndex: 0,
            leftActive: false,
            rightActive: false
        };
    },
    name: 'SliderShow',
    components: {
        Carousel3d,
        Slide
    },
    methods: {
        leftSlide() {
            if (this.slideIndex === 0) {
                return this.$refs.carousel.goSlide(2);
            }
            return this.$refs.carousel.goSlide(this.slideIndex - 1);
        },
        rightSlide() {
            if (this.slideIndex === 3) {
                this.$refs.carousel.goSlide(0);
            }
            this.$refs.carousel.goSlide(this.slideIndex + 1);
        },
        onBeforeSlideChange(index) {
            this.slideIndex = index;
        }
    },
    computed: {
        slideSpace() {
            switch (this.$vuetify.breakpoint.name) {
                case 'xs':
                    return '450';
                case 'sm':
                    return '250';
                case 'md':
                    return '300';
                case 'lg':
                    return '500';
                case 'xl':
                    return '600';
                default:
                    return '400';
            }
        },

        slideWidth() {
            switch (this.$vuetify.breakpoint.name) {
                case 'xs':
                    return '400';
                case 'sm':
                    return '300';
                case 'md':
                    return '450';
                case 'lg':
                    return '600';
                case 'xl':
                    return '600';
                default:
                    return '300';
            }
        },

        slideHeight() {
            switch (this.$vuetify.breakpoint.name) {
                case 'xs':
                    return '420';
                case 'sm':
                    return '350';
                case 'md':
                    return '500';
                case 'lg':
                    return '650';
                case 'xl':
                    return '850';
                default:
                    return '350';
            }
        }
    }
};
</script>

<style lang="scss" scoped>
@import 'src/assets/css/_size_classes.scss';
.fix-width-slider {
    @media only screen and (min-width: $extra_large_screen) {
        width: 100%;
        margin: 0 auto;
        max-width: 1600px;
    }
}
.carousel-container {
    background-image: url('../../../assets/images/slide-bg.png');
    background-position: center;
    background-size: contain;

    @media only screen and (min-width: $extra_large_screen) {
        background-position-y: 100px;
    }

    .carousel-3d-slide {
        background-color: transparent;
        border: none;
    }

    .carousel-3d-slide:not(.current) {
        cursor: pointer;
    }

    .arrow {
        cursor: pointer;
        img {
            max-height: 4rem;
        }
    }
}

.title-1 {
    text-align: center;
    font-weight: bold;
    color: #01358d;
    font-size: 16px;
    margin-top: 3rem;

    @media only screen and (min-width: $small_screen) {
        font-size: 30px;
    }
    @media only screen and (min-width: $medium_screen) {
        font-size: 40px;
    }
}

.title-2 {
    text-align: center;
    color: #f9556d;
    /* width: 280px; */
    width: 100%;
    max-width: 280px;
    margin: auto;
    font-size: 16px;

    @media only screen and (min-width: 350px) {
        width: 100%;
        max-width: 350px;
    }

    @media only screen and (min-width: $small_screen) {
        width: 100%;
        max-width: 700px;
        font-size: 20px;
        margin-bottom: 2rem;
    }

    @media only screen and (min-width: $medium_screen) {
        /* width: 800px; */
        width: 100%;
        max-width: 800px;
    }

    @media only screen and (min-width: $large_screen) {
        /* width: 1000px; */
        width: 100%;
        max-width: 1000px;
        font-size: 26px;
    }
}
</style>
