<template>
    <v-container fluid grid-list-xl py-0 background-page>
        <v-row wrap>
            <v-col cols="12" class="pa-0">
                <div class="header" id="scroll-header">
                    <core-header />
                </div>
                <div class="content">
                    <div class="item-section section-1">
                        <slider-show />
                    </div>
                    <div class="item-section section-2" id="scroll-lync-skype">
                        <lync-skype />
                    </div>
                    <div class="item-section section-3" id="scroll-clear-keep">
                        <clear-keep />
                    </div>
                    <div class="item-section section-4" id="scroll-twain">
                        <twain />
                    </div>
                    <div class="item-section section-contact-us">
                        <contact />
                    </div>
                </div>
                <div class="footer">
                    <core-footer />
                </div>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
import CoreHeader from '../components/core/Header';
import CoreFooter from '../components/core/Footer';
import LyncSkype from '../components/temps/home/LyncSkype';
import ClearKeep from '../components/temps/home/ClearKeep';
import Twain from '../components/temps/home/Twain';
import Contact from '../components/temps/home/Contact';
import SliderShow from '../components/temps/home/SliderShow';

export default {
    name: 'Home',
    components: {
        CoreHeader,
        CoreFooter,
        SliderShow,
        LyncSkype,
        ClearKeep,
        Twain,
        Contact
    },
    data: () => ({})
};
</script>
<style lang="scss">
.section-2,
.section-3 {
    @media only screen and (min-width: 960px) {
        margin-top: -50px;
    }
    @media only screen and (min-width: 1200px) {
        margin-top: -100px;
    }
    @media only screen and (min-width: 1900px) {
        margin-top: -200px;
    }
}
.section-4 {
    @media only screen and (min-width: 960px) {
        margin-top: -10px;
    }
    @media only screen and (min-width: 1200px) {
        margin-top: -200px;
    }
}
</style>
