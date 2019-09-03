<template>
    <v-container fluid>
        <v-layout wrap pa-0 class="carousel-container">
            <v-flex sm2 :class="`d-sm-flex justify-end align-center d-none`">
                <div class="arrow" @click="leftSlide" @mouseover="leftActive = true" @mouseout="leftActive = false">
                    <img v-if="!leftActive" :src="require('../../../assets/slide-left.png')" alt="slide-left" />
                    <img
                        v-if="leftActive"
                        :src="require('../../../assets/slide-left-active.png')"
                        alt="slide-left-active"
                    />
                </div>
            </v-flex>
            <v-flex xs12 sm8>
                <carousel-3d
                    width="600"
                    height="600"
                    ref="carousel"
                    startIndex="1"
                    @before-slide-change="onBeforeSlideChange"
                    :autoplay="$vuetify.breakpoint.xsOnly"
                    :autoplayTimeout="$vuetify.breakpoint.xsOnly ? 3000 : 2000"
                    :perspective="0"
                    :space="$vuetify.breakpoint.xsOnly ? 500 : 'auto'"
                >
                    <slide :index="0">
                        <img :src="require('../../../assets/silde-1.png')" alt="slide1" />
                    </slide>
                    <slide :index="1">
                        <img :src="require('../../../assets/silde-2.png')" alt="slide2" />
                    </slide>
                    <slide :index="2">
                        <img :src="require('../../../assets/silde-3.png')" alt="slide3" />
                    </slide>
                </carousel-3d>
            </v-flex>
            <v-flex xs0 sm2 :class="`d-sm-flex justify-start align-center d-none`">
                <div class="arrow" @click="rightSlide" @mouseover="rightActive = true" @mouseout="rightActive = false">
                    <img v-if="!rightActive" :src="require('../../../assets/slide-right.png')" alt="slide-right" />
                    <img
                        v-if="rightActive"
                        :src="require('../../../assets/slide-right-active.png')"
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
            console.log(index);
        }
    }
};
</script>

<style lang="scss" scoped>
.carousel-container {
    background-image: url('../../../assets/slide-bg.png');
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
</style>
