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
            <v-layout wrap pa-0>
                <v-flex xs0 md1 xl2 :class="`d-md-flex justify-end align-center d-none`">
                    <div class="arrow" @click="leftSlide" @mouseover="leftActive = true" @mouseout="leftActive = false">
                        <img v-if="!leftActive" :src="require('@/assets/images/slide-left.png')" alt="slide-left" />
                        <img
                            v-if="leftActive"
                            :src="require('@/assets/images/slide-left-active.png')"
                            alt="slide-left-active"
                        />
                    </div>
                </v-flex>
                <v-flex xs12 md10 xl8>
                    <div class="fix-width">
                        <carousel-3d
                            :width="$vuetify.breakpoint.xsOnly ? 600 : 800"
                            :height="$vuetify.breakpoint.xsOnly ? 600 : 840"
                            ref="carousel"
                            startIndex="1"
                            @before-slide-change="onBeforeSlideChange"
                            :autoplay="!$vuetify.breakpoint.mdAndUp"
                            :autoplayTimeout="$vuetify.breakpoint.xsOnly ? 3000 : 2000"
                            :perspective="0"
                            :space="spaceSlide"
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
                    </div>
                </v-flex>
                <v-flex xs0 md1 xl2 :class="`d-md-flex justify-start align-center d-none`">
                    <div
                        class="arrow"
                        @click="rightSlide"
                        @mouseover="rightActive = true"
                        @mouseout="rightActive = false"
                    >
                        <img v-if="!rightActive" :src="require('@/assets/images/slide-right.png')" alt="slide-right" />
                        <img
                            v-if="rightActive"
                            :src="require('@/assets/images/slide-right-active.png')"
                            alt="slide-right-active"
                        />
                    </div>
                </v-flex>
            </v-layout>
        </div>
    </v-container>
</template>
<script>
import { Carousel3d, Slide } from 'vue-carousel-3d';

export default {
    data() {
        return {
            slideIndex: 1,
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
        spaceSlide() {
            switch (this.$vuetify.breakpoint.name) {
                case 'xs':
                case 'sm':
                case 'md':
                    return '500px';
                case 'lg':
                    return 'auto';
                case 'xl':
                    return 'auto';
                default:
                    return 'auto';
            }
        }
    }
};
</script>

<style lang="scss" scoped>
@import 'src/assets/css/_size_classes.scss';

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
    width: 365px;
    margin: auto;
    font-size: 16px;
    margin-bottom: 2rem;

    @media only screen and (min-width: $small_screen) {
        width: 700px;
        font-size: 20px;
    }

    @media only screen and (min-width: $large_screen) {
        width: 1000px;
        font-size: 26px;
    }
}
</style>
