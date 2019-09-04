<template>
    <v-container fluid class="content-grid">
        <v-layout wrap pa-0>
            <v-flex xs12 v-if="$vuetify.breakpoint.xsOnly" px-3 mb-6>
                <v-img src="@/assets/images/lync-skype-mobile.jpg" contain></v-img>
            </v-flex>
            <v-flex xs12 pa-md-0 pa-4>
                <div class="fix-width">
                    <div class="logo">
                        <img src="@/assets/images/lync-skype-icon.png" alt />
                        <div class="text-1">
                            <div class="t1">Lync/Skype for business</div>
                            <div class="t2">www.tel.red</div>
                        </div>
                    </div>
                    <div class="text-2">There was no Skype client</div>
                    <div class="text-3"><span style="color: #01348d">for Linux. So we</span> built it.</div>
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
.section-2 {
    height: 550px;
}

@media only screen and (min-width: 600px) {
    .section-2 {
        background: url(../../../assets/images/lync-skype.png) no-repeat bottom right;
        background-size: auto 100%;
        height: 700px;
    }
}

.section-2 .content-grid .btn-read-more.theme--light.v-btn {
    color: #fff;
    text-transform: none;
    font-size: 16px;
    width: 160px;
    height: 50px;
    margin-top: 20px;
}

@media only screen and (min-width: 600px) {
    .section-2 .content-grid .btn-read-more.theme--light.v-btn {
        width: 176px;
        height: 60px;
    }
}

.section-2 .content-grid .logo {
    display: flex;
    color: #f9556d;
    margin-bottom: 20px;
}
.section-2 {
    display: flex;
    align-items: center;
}
.section-2 .content-grid .logo img {
    margin-right: 1rem;
}
.section-2 .content-grid .logo .t1 {
    font-weight: bold;
    line-height: 20px;
    padding-top: 3px;
}
.section-2 .content-grid .logo .t2 {
    font-size: 14px;
    line-height: 14px;
}
.section-2 .content-grid .text-2 {
    color: #01348d;
    font-size: 24px;
    font-weight: bold;
}
.section-2 .content-grid .text-3 {
    color: #f9556d;
    font-size: 24px;
    font-weight: bold;
    line-height: 38px;
    margin-bottom: 0;
}

@media only screen and (min-width: 600px) {
    .section-2 .content-grid .text-2,
    .section-2 .content-grid .text-3 {
        font-size: 40px;
    }
    .section-2 .content-grid .text-3 {
        margin-bottom: 40px;
    }
}

.content-grid .fix-width {
    position: relative;
}
</style>
