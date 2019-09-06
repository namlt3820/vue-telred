<template>
    <v-container fluid class="content-grid">
        <v-layout wrap pa-0>
            <v-flex xs12 pa-0>
                <div class="fix-width">
                    <div class="logo">
                        <img src="@/assets/images/logo-twain.png" alt />
                        <div class="text-1">
                            <div class="t1">TWAIN</div>
                            <div class="t2">www.twain.ai</div>
                        </div>
                    </div>
                    <div class="text-2">Build production-quality AI</div>
                    <div class="text-3">Quickly and Easily!</div>
                    <v-btn
                        depressed
                        rounded
                        class="btn-read-more"
                        color="#F9556D"
                        target="blank"
                        href="http://www.twain.ai"
                        >Read more</v-btn
                    >
                </div>
            </v-flex>
        </v-layout>
    </v-container>
</template>
<script>
export default {
    name: 'LyncSkype'
};
</script>
<style lang="scss">
.section-4 {
    background: url(../../../assets/images/bg-twain.png) no-repeat right bottom;
    background-size: auto 100%;
    height: 700px;

    .content-grid {
        .btn-read-more.theme--light.v-btn {
            color: #fff;
            text-transform: none;
            font-size: 16px;
            width: 176px;
            height: 60px;
            margin-top: 20px;
        }
        .logo {
            display: flex;
            color: #f9556d;
            margin-bottom: 20px;
            img {
                padding-right: 13px;
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
            font-size: 40px;
            font-weight: bold;
        }
        .text-3 {
            color: #f9556d;
            font-size: 40px;
            font-weight: bold;
            line-height: 38px;
            margin-bottom: 40px;
        }
        .fix-width {
            position: relative;
        }
    }
}
@media only screen and (max-width: 1280px) and (min-width: 1025px) {
    .section-4 {
        background: url(../../../assets/images/bg-twain.png) no-repeat right -140px bottom -60px;
    }
}
@media only screen and (max-width: 1024px) {
    .section-4 {
        background: url(../../../assets/images/bg-twain-1024.png) no-repeat right bottom;
    }
}
@media only screen and (max-width: 768px) {
    .section-4 {
        background: url(../../../assets/images/bg-twain-1024.png) no-repeat right bottom;
        background-size: 90% auto;
        height: auto;
        padding-bottom: 220px;
    }
}
@media only screen and (max-width: 640px) {
    .section-4 {
        background-size: 500px auto;
        padding-bottom: 230px;

        .content-grid {
            .text-2 {
                font-size: 24px;
            }
            .text-3 {
                font-size: 24px;
                margin-bottom: 0;
            }
            .btn-read-more.theme--light.v-btn {
                height: 40px;
                font-size: 14px;
            }
        }
    }
}
</style>
