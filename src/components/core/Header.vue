<template>
    <v-container fluid>
        <div class="fix-width">
            <v-layout wrap pa-0>
                <v-flex xs12 class="content-header">
                    <div id="logo">
                        <img src="@/assets/images/logo.png" alt />
                    </div>
                    <v-menu
                        transition="slide-y-transition"
                        bottom
                        content-class="menu-on-mobile"
                        min-width="100%"
                        offset-y
                        :close-on-content-click="false"
                    >
                        <template v-slot:activator="{ on }">
                            <v-btn icon color="#FF3F48" v-on="on" class="d-sm-flex d-md-none">
                                <v-icon style="font-size: 34px">mdi-menu</v-icon>
                            </v-btn>
                        </template>
                        <div class="content-menu">
                            <v-menu transition="slide-y-transition" bottom>
                                <template v-slot:activator="{ on }">
                                    <v-btn
                                        class="select-item-web"
                                        outlined
                                        rounded
                                        v-on="on"
                                        color="rgba(249, 85, 109, 1)"
                                    >
                                        Tel.red
                                        <img width="17" class="arrow-select" src="@/assets/images/arrow-select.svg" />
                                    </v-btn>
                                </template>
                                <v-list>
                                    <v-list-item target="blank" href="http://twain.ai">
                                        <v-list-item-title>Twain.ai</v-list-item-title>
                                    </v-list-item>
                                    <v-list-item target="blank" href="http://tel.red">
                                        <v-list-item-title>Tel.red</v-list-item-title>
                                    </v-list-item>
                                    <v-list-item target="blank" href="http://clearkeep.io">
                                        <v-list-item-title>Clearkeep.io</v-list-item-title>
                                    </v-list-item>
                                </v-list>
                            </v-menu>
                            <router-link to="/about" class="item-about">About</router-link>
                        </div>
                    </v-menu>
                    <div class="col-right d-sm-none d-none d-md-flex">
                        <v-menu transition="slide-y-transition" bottom>
                            <template v-slot:activator="{ on }">
                                <v-btn class="select-item-web" outlined rounded v-on="on" color="rgba(249, 85, 109, 1)">
                                    Tel.red
                                    <img width="17" class="arrow-select" src="@/assets/images/arrow-select.svg" />
                                </v-btn>
                            </template>
                            <v-list>
                                <v-list-item @click="$vuetify.goTo('#scroll-twain')">
                                    <v-list-item-title>Twain.ai</v-list-item-title>
                                </v-list-item>
                                <v-list-item @click="$vuetify.goTo('#scroll-lync-skype')">
                                    <v-list-item-title>Tel.red</v-list-item-title>
                                </v-list-item>
                                <v-list-item @click="$vuetify.goTo('#scroll-clear-keep')">
                                    <v-list-item-title>Clearkeep.io</v-list-item-title>
                                </v-list-item>
                            </v-list>
                        </v-menu>
                        <router-link to="/about" class="item-about">About</router-link>
                    </div>
                </v-flex>
            </v-layout>
        </div>
    </v-container>
</template>

<script>
export default {
    name: 'Header',
    data: () => ({
        items: ['Twain.ai', 'Tel.red', 'Clearkeep.io'],
        myWeb: 'Twain.ai'
    })
};
</script>
<style lang="scss">
.content-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 40px;
    #logo img {
        max-width: 100%;
    }
    .col-right {
        width: 290px;
        display: flex;
        align-items: center;

        .select-item-web {
            width: 200px;
            display: flex;
            justify-content: space-between;

            .arrow-select {
                margin-left: 10px;
            }

            .v-btn__content {
                color: #01348d;
                text-transform: none;
                font-size: 16px;
            }
        }

        .item-about {
            color: #01348d;
            font-weight: bold;
            margin-left: 40px;
        }
    }
}
.menu-on-mobile {
    background: #fde7ea;
    padding: 10px 0;

    .content-menu {
        width: 200px;
        margin: 0 auto;
        text-align: center;

        .select-item-web {
            width: 200px;
            display: flex;
            justify-content: space-between;
            margin-bottom: 8px;

            .arrow-select {
                margin-left: 10px;
            }

            .v-btn__content {
                color: #01348d;
                text-transform: none;
                font-size: 16px;
            }
        }

        .item-about {
            color: #01348d;
            font-weight: bold;
        }
    }
}
@media only screen and (max-width: 960px) {
    #logo {
        width: 60%;
    }
    .header .content-header {
        margin-top: 20px;
    }
}
</style>
