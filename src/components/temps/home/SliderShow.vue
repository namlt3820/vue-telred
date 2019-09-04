<template>
    <v-container fluid>
        <p class="title-1">WE MAKE THE TOOLS THAT GIVE YOU SUPER POWERS</p>
        <p class="title-2">
            Talk and share files without bad guys eavesdropping. Launch machine learning products without being a genius
            data scientist and devOps expert.
        </p>
        <v-layout wrap pa-0 class="carousel-container">
            <v-flex sm2 :class="`d-sm-flex justify-end align-center d-none`">
                <div class="arrow" @click="leftSlide" @mouseover="leftActive = true" @mouseout="leftActive = false">
                    <img v-if="!leftActive" :src="require('@/assets/images/slide-left.png')" alt="slide-left" />
                    <img
                        v-if="leftActive"
                        :src="require('@/assets/images/slide-left-active.png')"
                        alt="slide-left-active"
                    />
                </div>
            </v-flex>
            <v-flex xs12 sm8>
                <carousel-3d
                    :width="$vuetify.breakpoint.xlOnly ? 800 : 600"
                    :height="$vuetify.breakpoint.xlOnly ? 800 : 600"
                    ref="carousel"
                    startIndex="1"
                    @before-slide-change="onBeforeSlideChange"
                    :autoplay="$vuetify.breakpoint.xsOnly"
                    :autoplayTimeout="$vuetify.breakpoint.xsOnly ? 3000 : 2000"
                    :perspective="0"
                    :space="$vuetify.breakpoint.xsOnly ? 500 : 'auto'"
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
            <v-flex xs0 sm2 :class="`d-sm-flex justify-start align-center d-none`">
                <div class="arrow" @click="rightSlide" @mouseover="rightActive = true" @mouseout="rightActive = false">
                    <img v-if="!rightActive" :src="require('@/assets/images/slide-right.png')" alt="slide-right" />
                    <img
                        v-if="rightActive"
                        :src="require('@/assets/images/slide-right-active.png')"
                        alt="slide-right-active"
                    />
                </div>
            </v-flex>
        </v-layout>
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
            // console.log(index);
        }
    }
};
</script>

<style lang="scss" scoped>
.carousel-container {
    background-image: url('../../../assets/images/slide-bg.png');
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

.title-1 {
    text-align: center;
    font-weight: bold;
    color: #01358d;
    font-size: 1rem;
}

.title-2 {
    text-align: center;
    color: #f9556d;
    width: 365px;
    margin: auto;
}

@media only screen and (min-width: 600px) {
    .title-1 {
        font-size: 2rem;
    }

    .title-2 {
        width: 700px;
    }
}
</style>
