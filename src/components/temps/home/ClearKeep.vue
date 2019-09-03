<template>
    <v-container fluid>
        <v-layout wrap pa-0 class="clear-keep">
            <v-flex xs12 sm6></v-flex>
            <v-flex xs12 sm6 :class="`d-sm-flex justify-start align-top`">
                <div>
                    <v-layout>
                        <img :src="require('../../../assets/clear-keep-icon.png')" alt="clear-keep-icon" />
                        <div class="brand">
                            <span>Clear Keep</span>
                            <br />
                            <span>www.clearkeep.io</span>
                        </div>
                    </v-layout>
                    <p class="introduction">
                        The
                        <span style="color: red">only secure unified</span> communication and enterprise storage tool in
                        the world
                    </p>
                    <v-btn rounded large color="#f9566d">Read more</v-btn>
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
<style lang="scss" scoped>
.clear-keep {
    margin: 0 3rem;
    height: 800px;
    background-image: url('../../../assets/clear-keep.png');
    background-size: contain;

    .brand {
        margin-left: 1rem;

        span {
            color: red;
        }

        span:first-child {
            font-weight: bold;
        }
    }

    .layout {
        margin: 0 !important;
        margin-bottom: 1rem !important;
    }

    .introduction {
        color: #03378f;
        font-weight: bold;
        font-size: 2rem;
    }

    > div > div:first-child {
        padding-right: 10rem;
    }

    button {
        color: white;
        text-transform: none;
        font-weight: 700;
    }

    .background-text {
        font-weight: bold;
        font-size: 4rem;
        color: #f7e2e6;
        margin-top: 3rem;
    }
}
</style>
