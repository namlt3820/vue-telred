<template>
    <v-container fluid>
        <v-layout wrap pa-0 class="twain">
            <v-flex xs12 sm7 :class="`d-sm-flex justify-start align-top`">
                <div>
                    <v-layout>
                        <img :src="require('../../../assets/twain-icon.png')" alt="twain-icon" />
                        <div class="brand">
                            <span>Twain</span>
                            <br />
                            <span>www.twain.ai</span>
                        </div>
                    </v-layout>
                    <p class="introduction">
                        Build production-quality AI
                        <br />
                        <span style="color: red">Quickly and Easily!</span>
                    </p>
                    <v-btn rounded large color="#f9566d">Read more</v-btn>
                </div>
            </v-flex>
            <v-flex xs12 sm5></v-flex>
        </v-layout>
    </v-container>
</template>
<script>
export default {
    name: 'LyncSkype'
};
</script>
<style lang="scss" scoped>
.twain {
    margin: 0 3rem;
    height: 600px;
    background-image: url('../../../assets/twain.png');
    background-size: contain;

    .brand {
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
        padding-left: 10rem;
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
