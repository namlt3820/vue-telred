<template>
    <v-container fluid class="fix-width">
        <v-layout wrap pa-0>
            <v-flex xs12 class="content-header">
                <div id="logo">
                    <img src="@/assets/logo.png" alt />
                </div>
                <div class="col-right">
                    <v-select
                        :items="items"
                        outlined
                        color="#F9556D"
                        item-color="#F9556D"
                        rounded
                        append-icon="mdi-chevron-down"
                        class="select-web"
                        hide-details
                        :value="myWeb"
                    ></v-select>
                    <router-link to="/about" class="item-about">About</router-link>
                </div>
            </v-flex>
        </v-layout>
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
<style>
.col-right {
    width: 290px;
    display: flex;
    align-items: center;
}
.col-right .select-web.v-select > .v-input__control > .v-input__slot {
    min-height: 35px;
    height: 35px;
    padding-right: 10px !important;
}
.col-right .select-web.v-select.v-text-field.v-text-field--enclosed .v-input__append-inner {
    margin-top: 5px;
}
.col-right .select-web.v-select.v-text-field.v-text-field--enclosed .v-input__append-inner .v-icon {
    background: url('../../assets/arrow-select.svg') no-repeat center center;
    background-size: 17px auto;
}
.col-right .select-web.v-text-field--outlined fieldset {
    border-width: 2px;
    border-color: rgba(249, 85, 109, 0.6);
}
.col-right .select-web.v-text-field--outlined:not(.v-input--is-focused):not(.v-input--has-state):hover fieldset {
    border-color: rgba(249, 85, 109, 0.6);
}
.col-right .select-web.theme--light.v-select .v-select__selections {
    color: #01348d;
}
.col-right .select-web.v-select.v-text-field.v-text-field--enclosed .v-input__append-inner .v-icon::before {
    opacity: 0;
}
.col-right .item-about {
    color: #01348d;
    font-weight: bold;
    margin-left: 40px;
}
.content-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 40px;
}
</style>
