<template>
    <v-container fluid class="content-grid">
        <v-layout wrap pa-0>
            <v-flex xs12 sm6 pa-0>
                <v-img v-if="$vuetify.breakpoint.xsOnly" src="@/assets/images/clear-keep-mobile.png"></v-img>
            </v-flex>
            <v-flex xs12 sm6 pa-md-0 pa-4>
                <div class="fix-width">
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
                    </div>
                    <div class="text-3" style="color: #01348d">
                        communication and enterprise storage tool in the world
                    </div>
                    <v-btn depressed rounded class="btn-read-more" color="#F9556D">Read more</v-btn>
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
<style>
.section-3 {
    height: 820px;
    display: flex;
    align-items: top;
}

@media only screen and (min-width: 600px) {
    .section-3 {
        background: url(../../../assets/images/clear-keep.png) no-repeat bottom right;
        background-size: cover;
    }
}

@media only screen and (min-width: 1920px) {
    .section-3 {
        height: 1100px;
    }
}

.section-3 .content-grid .btn-read-more.theme--light.v-btn {
    color: #fff;
    text-transform: none;
    font-size: 16px;
    width: 160px;
    height: 50px;
    margin-top: 20px;
}

@media only screen and (min-width: 600px) {
    .section-3 .content-grid .btn-read-more.theme--light.v-btn {
        width: 176px;
        height: 60px;
    }
}

.section-3 .content-grid .logo {
    display: flex;
    color: #f9556d;
    margin-bottom: 20px;
}

.section-3 .content-grid .logo .t1 {
    font-weight: bold;
    line-height: 20px;
    padding-top: 3px;
}
.section-3 .content-grid .logo .t2 {
    font-size: 14px;
    line-height: 14px;
}
.section-3 .content-grid .text-2 {
    color: #01348d;
    font-size: 24px;
    font-weight: bold;
}
.section-3 .content-grid .text-3 {
    color: #f9556d;
    font-size: 24px;
    font-weight: bold;
    line-height: 38px;
    margin-bottom: 0;
}

@media only screen and (min-width: 600px) {
    .section-3 .content-grid .text-2,
    .section-3 .content-grid .text-3 {
        font-size: 40px;
    }
    .section-3 .content-grid .text-3 {
        margin-bottom: 40px;
    }
}

.content-grid .fix-width {
    position: relative;
}
</style>
