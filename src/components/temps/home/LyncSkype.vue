<template>
    <div class="section-2-inner">
        <v-container fluid class="content-grid">
            <v-layout wrap pa-0>
                <v-flex xs12 v-if="$vuetify.breakpoint.xsOnly" px-3 mb-6>
                    <v-img src="@/assets/images/lync-skype-mobile.jpg" contain></v-img>
                </v-flex>
                <v-flex xs12 pa-md-0 pt-md-10 pa-4 pb->
                    <div class="fix-width">
                        <div class="logo">
                            <img src="@/assets/images/lync-skype-icon.png" alt />
                            <div class="text-1">
                                <div class="t1">Lync/Skype for business</div>
                                <div class="t2">www.tel.red</div>
                            </div>
                        </div>
                        <div class="text-2">
                            There was no Skype client
                            <br v-if="!$vuetify.breakpoint.xsOnly" />for Linux. So we
                            <span style="color: #f9566d">built it</span>.
                        </div>
                        <v-btn
                            depressed
                            rounded
                            class="btn-read-more"
                            color="#F9556D"
                            target="blank"
                            href="http://www.tel.red"
                            >Read more</v-btn
                        >
                        <div class="text-3" v-if="$vuetify.breakpoint.lgAndUp">
                            Lync/Skype
                            <br />for business
                        </div>
                    </div>
                </v-flex>
            </v-layout>
        </v-container>
    </div>
</template>
<script>
export default {
    name: 'LyncSkype'
};
</script>
<style scoped lang="scss">
@import 'src/assets/css/_size_classes.scss';

.section-2-inner {
    height: 600px;

    @media only screen and (min-width: $small_screen) {
        height: auto;
    }
    .btn-read-more.theme--light.v-btn {
        color: #fff;
        text-transform: none;
        font-size: 16px;
        width: 160px;
        height: 50px;
        margin-top: 20px;

        @media only screen and (min-width: $small_screen) {
            width: 176px;
            height: 60px;
        }
    }

    .logo {
        display: flex;
        color: #f9556d;
        margin-bottom: 20px;

        img {
            margin-right: 1rem;
        }

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
            max-width: 400px;
        }
        @media only screen and (min-width: $large_screen) {
            max-width: 1200px;
        }
    }

    .text-3 {
        font-size: 90px;
        color: #fff3f4;
        font-weight: bold;
        line-height: 100px;
        margin-top: 30px;
    }

    .fix-width {
        position: relative;
    }

    @media only screen and (min-width: $small_screen) {
        background: url(../../../assets/images/lync-skype.png);
        background-size: contain;
        background-repeat: no-repeat;
        width: 100%;
        height: 0;
        padding-bottom: 55%;
        position: relative;
        display: flex;
        align-items: center;

        .content-grid {
            @media only screen and (min-width: $small_screen) {
                position: absolute;
                right: 0;
                bottom: 0;
                left: 0;
                top: 60px;
            }
            @media only screen and (min-width: $medium_screen) {
                top: 80px;
            }
            @media only screen and (min-width: $large_screen) {
                top: 240px;
            }
            @media only screen and (min-width: $extra_large_screen) {
                top: 350px;
            }
        }
    }
}
</style>
