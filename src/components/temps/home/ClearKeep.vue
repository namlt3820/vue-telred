<template>
    <div class="section-3-inner">
        <v-container fluid class="content-grid">
            <div class="fix-width">
                <v-layout wrap pa-0>
                    <v-flex xs12 sm4 xl5 pa-0>
                        <v-img v-if="$vuetify.breakpoint.xsOnly" src="@/assets/images/clear-keep-mobile.png"></v-img>
                    </v-flex>
                    <v-flex xs12 sm8 xl7>
                        <div class="logo">
                            <img src="@/assets/images/clear-keep-icon.png" alt />
                            <div class="text-1">
                                <div class="t1">Clear Keep</div>
                                <div class="t2">www.clearkeep.io</div>
                            </div>
                        </div>
                        <div class="text-2">
                            The
                            <span style="color: #f9566d">only secure unified</span>
                            <br />communication and enterprise storage tool in the world
                        </div>
                        <v-btn
                            depressed
                            rounded
                            class="btn-read-more"
                            color="#F9556D"
                            target="blank"
                            href="http://www.clearkeep.io"
                            >Read more</v-btn
                        >
                    </v-flex>
                </v-layout>
            </div>
        </v-container>
    </div>
</template>
<script>
export default {
    name: 'LyncSkype'
};
</script>
<style lang="scss" scoped>
@import 'src/assets/css/_size_classes.scss';

.section-3-inner {
    height: 820px;
    display: flex;
    align-items: top;

    @media only screen and (min-width: $small_screen) {
        background: url(../../../assets/images/clear-keep.png);
        background-size: 110%;
        background-repeat: no-repeat;
        background-position-x: -112px;
        width: 100%;
        height: 0;
        padding-bottom: 65%;
        position: relative;
        display: flex;
        align-items: center;
    }

    @media only screen and (min-width: $medium_screen) {
        background-position-x: -130px;
    }

    @media only screen and (min-width: $large_screen) {
        background-position-x: -200px;
        background-size: 114%;
        padding-bottom: 67%;
    }

    @media only screen and (min-width: $extra_large_screen) {
        background-position-x: -35px;
        background-size: 102%;
    }

    .content-grid {
        @media only screen and (min-width: $small_screen) {
            position: absolute;
            top: 0px;
            right: 0;
            bottom: 0;
            left: 0;
        }

        @media only screen and (min-width: $large_screen) {
            top: 100px;
        }
        @media only screen and (min-width: $extra_large_screen) {
            top: 200px;
        }

        .btn-read-more.theme--light.v-btn {
            color: #fff;
            text-transform: none;
            font-size: 16px;
            width: 150px;
            height: 50px;
            margin-top: 20px;

            @media only screen and (min-width: $large_screen) {
                width: 176px;
                height: 60px;
            }
        }

        .logo {
            display: flex;
            color: #f9556d;
            margin-bottom: 20px;

            .t1 {
                font-weight: bold;
                line-height: 20px;
                padding-top: 3px;
            }

            .t2 {
                font-size: 14px;
                line-height: 14px;
            }
        }

        .text-2 {
            color: #01348d;
            font-size: 24px;
            font-weight: bold;
            line-height: 40px;

            @media only screen and (min-width: $small_screen) {
                margin-bottom: 20px;
                line-height: 30px;
            }
            @media only screen and (min-width: $medium_screen) {
                font-size: 40px;
                margin-bottom: 40px;
                line-height: 50px;
            }
        }

        .fix-width {
            position: relative;
        }
    }
}
</style>
