<template>
    <v-container fluid content-footer pa-0>
        <div class="top-footer">
            <div class="fix-width">
                <v-row class="sec-1">
                    <v-col md="3" sm="6" cols="12" class="item-footer">
                        <img class="logo-footer" src="@/assets/images/logo-white.png" alt />
                        <div class="text-2">
                            Tel.red creates AI and Skype, VOIP and communication products to make busineses thrive.
                        </div>
                    </v-col>
                    <v-col md="3" sm="6" cols="12" class="item-footer">
                        <div class="title-item">Contact info</div>
                        <ul class="list-contact">
                            <li class="address">2880 Zanker Road, San Jose, California 95134-2141 USA</li>
                            <li class="email">
                                ask@tel-red
                                <br />linux@tel.red <br />mac@tel.red
                            </li>
                            <li class="phone">202-555-0130</li>
                        </ul>
                    </v-col>
                    <v-col md="3" sm="6" cols="12" class="item-footer">
                        <div class="title-item">Map</div>
                        <div>
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3169.739223595039!2d-121.93056678435534!3d37.39599894163341!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808fc9689422c183%3A0xecb8971dece9acd7!2s2880%20Zanker%20Rd%2C%20San%20Jose%2C%20CA%2095134%2C%20USA!5e0!3m2!1sen!2s!4v1567155773701!5m2!1sen!2s"
                                width="100%"
                                height="140"
                                frameborder="0"
                                style="border:0;"
                                allowfullscreen
                            ></iframe>
                        </div>
                    </v-col>
                    <v-col md="3" sm="6" cols="12" class="item-footer">
                        <div class="title-item">Newsletter</div>
                        <div class="box-input">
                            <ValidationProvider name="Email" ref="vEmail" rules="required|email" v-slot="{ errors }">
                                <v-text-field
                                    v-model="myEmail"
                                    ref="myEmail"
                                    label="Email"
                                    solo
                                    background-color="#fff"
                                    rounded
                                    hide-details
                                    color="#F8546C"
                                    v-on:keyup.enter="onSubmit()"
                                ></v-text-field>
                            </ValidationProvider>
                            <v-btn
                                class="icon-send-mail"
                                fab
                                dark
                                color="#F8546C"
                                height="48px"
                                width="48px"
                                @click="onSubmit()"
                            >
                                <img class="img" src="@/assets/images/arrow-send-mail.svg" alt />
                            </v-btn>
                        </div>
                        <div class="text-1">Get the latest news & promotion in your inbox !</div>
                    </v-col>
                </v-row>
            </div>
        </div>
        <div class="copyright">
            <div class="fix-width">Copyright ⓒ 2012-2019 TEL.RED, LLC. All rights reserved.</div>
        </div>
        <div id="back-to-top" @click="$vuetify.goTo('#scroll-header')">
            <img src="@/assets/images/back-to-top.svg" />
        </div>
        <v-dialog v-model="dialog" max-width="500">
            <v-card>
                <v-card-title class="headline"></v-card-title>
                <v-card-text class="text-dialog">{{ msg }}</v-card-text>
                <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn text @click="dialog = false">OK</v-btn>
                </v-card-actions>
            </v-card>
        </v-dialog>
    </v-container>
</template>

<script>
import Vue from 'vue';

export default {
    name: 'Footer',
    data: () => ({
        myEmail: '',
        sendAPI: false,
        dialog: false,
        classSuccess: false,
        msg: ''
    }),
    /* directives: {
        scroll(el, binding) {
            const funcCheck = function(evt) {
                if (binding.value(evt, el)) {
                    window.removeEventListener('scroll', funcCheck);
                }
            };
            window.addEventListener('scroll', funcCheck);
            // v-scroll="handleScroll"
        }
    }, */
    created() {
        // console.log(screen.width);
    },
    methods: {
        handleScroll(evt, el) {
            if (window.scrollY > 50) {
                el.setAttribute('style', 'opacity: 1');
            } else {
                el.setAttribute('style', 'opacity: 0');
            }
        },
        onSubmit() {
            if (this.sendAPI) return;

            if (!this.myEmail) {
                this.$refs.myEmail.focus();
                return;
            }

            this.$refs.vEmail.validate().then(res => {
                if (!res.valid) {
                    this.$refs.myEmail.focus();
                } else {
                    this.sendEmail();
                }
            });
        },
        sendEmail() {
            this.sendAPI = true;
            const bodyFormData = new FormData();
            bodyFormData.set('sheetName', 'Sheet2');
            bodyFormData.set('email', this.myEmail);

            Vue.axios
                .post(
                    'https://script.google.com/macros/s/AKfycbxHVv__ThbYEMzB-P5wT5EvMtHccnxPBbKKnSual7LG7trbk1U/exec',
                    bodyFormData
                )
                .then(res => {
                    this.classSuccess = res.data.result === 'success';
                    this.msg = this.classSuccess ? "We'll send you the latest news & promotion" : res.data.result;
                    this.dialog = true;
                    this.sendAPI = false;

                    this.myEmail = '';
                })
                .catch(() => {
                    // console.log(e);
                });
        }
    }
};
</script>
<style lang="scss">
.content-footer .top-footer {
    background: #0c2752;
    color: #fff;
    padding: 60px 0 40px 0;
}
.content-footer .copyright {
    background: #091f46;
    color: #fff;
    text-align: center;
    padding: 26px 0;
}
.icon-send-mail .img {
    width: 16px;
}
.box-input {
    position: relative;
}
.box-input .icon-send-mail {
    position: absolute;
    top: 0;
    right: 0;
}
.box-input {
    .v-input input {
        color: #f8546c !important;
    }
    .v-text-field > .v-input__control > .v-input__slot > .v-text-field__slot {
        padding-right: 26px;
    }
}

.box-input .v-input .v-label {
    color: #f8546c !important;
}
.item-footer .title-item {
    font-weight: bold;
    padding-bottom: 25px;
    font-size: 18px;
    padding-top: 28px;
}
.item-footer .text-1 {
    padding-top: 20px;
    line-height: 20px;
}
.item-footer .text-2 {
    padding-top: 10px;
}
.item-footer .list-contact {
    list-style: none;
    padding-left: 0;
}
.item-footer .list-contact li {
    padding-bottom: 10px;
    padding-left: 24px;
}
.item-footer .list-contact .address {
    background: url(../../assets/images/ic-location.svg) no-repeat left top 3px;
    background-size: 14px auto;
}
.item-footer .list-contact .email {
    background: url(../../assets/images/ic-mail.svg) no-repeat left top 3px;
    background-size: 14px auto;
}
.item-footer .list-contact .phone {
    background: url(../../assets/images/ic-phone.svg) no-repeat left top 3px;
    background-size: 14px auto;
}
#back-to-top {
    position: fixed;
    width: 40px;
    height: 40px;
    bottom: 18px;
    right: 18px;
    background-color: rgb(248, 84, 108);
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    opacity: 1;
    z-index: 99;

    img {
        width: 11px;
    }
}
.footer .top-footer .logo-footer {
    max-width: 100%;
}
.theme--light.v-card > .v-card__text.text-success {
    color: #4caf50;
}

@media screen and (min-width: 960px) {
    .sec-1 .item-footer {
        padding-left: 30px !important;
    }
    .sec-1 .item-footer:nth-child(1) {
        padding-left: 12px !important;
        padding-right: 30px;
    }
}

@media screen and (max-width: 1300px) {
    .content-footer .top-footer {
        padding-left: 12px;
        padding-right: 12px;
    }
}
@media screen and (max-width: 1024px) {
    .footer .top-footer {
        .item-footer {
            padding: 0 12px !important;
        }
    }
}
@media screen and (max-width: 768px) {
    .footer .top-footer .item-footer {
        margin-bottom: 30px;
    }
}
@media screen and (max-width: 599px) {
    .footer .top-footer {
        padding: 40px 12px;
    }
    .footer .item-footer:nth-last-child(1) {
        margin-bottom: 0px;
    }
    .item-footer .title-item {
        padding-bottom: 10px;
    }
    .item-footer .list-contact .address {
        background: url(../../assets/images/ic-location.svg) no-repeat left top 5px;
        background-size: 14px auto;
    }
    .item-footer .list-contact .email {
        background: url(../../assets/images/ic-mail.svg) no-repeat left top 8px;
        background-size: 14px auto;
    }
    .item-footer .list-contact .phone {
        background: url(../../assets/images/ic-phone.svg) no-repeat left top 5px;
        background-size: 14px auto;
    }
}
</style>
