<template>
    <v-container fluid>
        <v-layout wrap pa-0 class="lync-skype">
            <v-flex xs12 sm6 :class="`d-sm-flex justify-end align-center`">
                <div>
                    <v-layout>
                        <img :src="require('../../../assets/21-logo-lynx.png')" alt="lync-skype-icon" />
                        <div class="brand">
                            <span>Lync/Skype for business</span>
                            <br />
                            <span>www.tel.red</span>
                        </div>
                    </v-layout>
                    <p class="introduction">
                        There was no Skype client for Linux. So we
                        <span style="color: red">built it</span>.
                    </p>
                    <v-btn rounded large color="#f9566d">Read more</v-btn>
                    <p class="background-text">
                        Lync/Skype
                        <br />for business
                    </p>
                </div>
            </v-flex>
            <v-flex xs12 sm6></v-flex>
        </v-layout>
    </v-container>
</template>
<script>
export default {
    name: 'LyncSkype'
};
</script>
<style lang="scss" scoped>
.lync-skype {
    margin: 0 3rem;
    height: 800px;
    background-image: url('../../../assets/lync-skype.png');
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

    > div > div:first-child {
        padding-left: 10rem;
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
