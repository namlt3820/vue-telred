<template>
    <v-container fluid class="section-contact">
        <div class="fix-width">
            <div class="text-1">Get in Touch with Us</div>
            <div class="text-2">We'd love to hear from you. Drop us a note and we'll get back to you ASAP.</div>
            <ValidationObserver
                tag="form"
                ref="observer"
                v-slot="{ invalid }"
                class="form-contact"
                v-on:keyup.enter="onSubmit()"
            >
                <ValidationProvider name="Fullname" rules="required|max100" ref="vFullName" v-slot="{ errors }">
                    <v-text-field
                        label="Name"
                        solo
                        hide-details
                        flat
                        color="#666"
                        v-model="myForm.f_fullname"
                        ref="fFullName"
                    ></v-text-field>
                    <p>{{ errors[0] }}</p>
                </ValidationProvider>
                <ValidationProvider name="Email" ref="vEmail" rules="required|email" v-slot="{ errors }">
                    <v-text-field
                        label="E-mail"
                        solo
                        hide-details
                        flat
                        color="#666"
                        v-model="myForm.f_email"
                        ref="fEmail"
                    ></v-text-field>
                    <p>{{ errors[0] }}</p>
                </ValidationProvider>
                <v-textarea
                    solo
                    name="Your Message"
                    label="Your Message"
                    flat
                    hide-details
                    color="#666"
                    v-model="myForm.f_message"
                    ref="fMessage"
                ></v-textarea>
                <v-btn depressed rounded class="btn-action-contact" @click="onSubmit()" :disabled="invalid || sendAPI"
                    >Send</v-btn
                >
            </ValidationObserver>
            <v-dialog v-model="dialog" max-width="400">
                <v-card>
                    <v-card-title class="headline"></v-card-title>
                    <v-card-text class="text-dialog">{{ msg }}</v-card-text>
                    <v-card-actions>
                        <v-spacer></v-spacer>
                        <v-btn text @click="dialog = false">OK</v-btn>
                    </v-card-actions>
                </v-card>
            </v-dialog>
        </div>
    </v-container>
</template>
<script>
import Vue from 'vue';
import { extend } from 'vee-validate';
import { email } from 'vee-validate/dist/rules';

extend('required', {
    validate: value => !!value,
    message: 'This field is required'
});
extend('max100', {
    validate: value => value.length < 100,
    message: 'This field is Max 100'
});
extend('email', email);

export default {
    name: 'Contact',
    data: () => ({
        myForm: {
            f_fullname: '',
            f_email: '',
            f_message: ''
        },
        sendAPI: false,
        dialog: false,
        classSuccess: false,
        msg: ''
    }),
    mounted() {
        // this.$validator.localize('en', this.dictionary);
    },
    methods: {
        async onSubmit() {
            const isValid = await this.$refs.observer.validate();
            // const isValidFullName = await this.$refs.vEmail.validate();
            const isValidEmail = await this.$refs.vEmail.validate();
            const isValidMesage = await this.$refs.fMessage.validate();
            // console.log(isValidEmail);

            // console.log(isValid, isValid_vEmail);

            /* if (!this.myForm.f_fullname || !isValidFullName.valid) {
                this.$refs.fFullName.focus();
                return;
            } */
            if (!this.myForm.f_email || !isValidEmail.valid) {
                this.$refs.fEmail.focus();
                return;
            }
            if (!this.myForm.f_message || !isValidMesage) {
                this.$refs.fMessage.focus();
                return;
            }
            if (!isValid) return;

            // return this.$refs.fEmail.validate();
            // https://script.google.com/macros/s/AKfycbxHVv__ThbYEMzB-P5wT5EvMtHccnxPBbKKnSual7LG7trbk1U/exec
            // https://docs.google.com/spreadsheets/d/1czstH1DtT8fgtvfYy7_uep-zCemPyEM8erLgxZtwR4s/edit#gid=0
            const bodyFormData = new FormData();
            bodyFormData.set('sheetName', 'Sheet1');
            bodyFormData.set('name', this.myForm.f_fullname);
            bodyFormData.set('email', this.myForm.f_email);
            bodyFormData.set('msg', this.myForm.f_message);
            this.sendAPI = true;

            Vue.axios
                .post(
                    'https://script.google.com/macros/s/AKfycbxHVv__ThbYEMzB-P5wT5EvMtHccnxPBbKKnSual7LG7trbk1U/exec',
                    bodyFormData
                )
                .then(res => {
                    this.classSuccess = res.data.result === 'success';
                    this.msg = this.classSuccess
                        ? 'Thanks for contacting us! We will get in touch with you shortly.'
                        : res.data.result;
                    this.dialog = true;
                    this.sendAPI = false;

                    this.myForm = {
                        f_fullname: '',
                        f_email: '',
                        f_message: ''
                    };
                    requestAnimationFrame(() => {
                        this.$refs.observer.reset();
                    });
                })
                .catch(() => {
                    // console.log(e);
                });
        },
        sendEmail(params) {
            const bodyFormData = new FormData();
            bodyFormData.set('name', params.name);
            bodyFormData.set('email', params.email);
            bodyFormData.set('msg', params.msg);
            return new Promise(resolve => {
                Vue.axios
                    .post(
                        'https://script.google.com/macros/s/AKfycbysIDgATmVWI3TLYvMbOG_pXdMO7NNXsBD-P_O7WBOgqvfPJFg/exec',
                        bodyFormData
                    )
                    .then(res => {
                        return resolve(res.data);
                    })
                    .catch(() => {});
            });
        }
    }
};
</script>
<style lang="scss">
.section-contact {
    background: url(../../../assets/images/bg-contact.png) no-repeat left top;
    background-size: auto 100%;
    padding: 36px 0;

    .text-1 {
        text-align: center;
        color: #fff;
        font-size: 60px;
        font-weight: bold;
    }
    .text-2 {
        text-align: center;
        color: #fff;
        padding-bottom: 30px;
    }
    .form-contact {
        width: 610px;
        margin: 0 auto;
        text-align: center;
    }
    .form-contact .v-input {
        margin-bottom: 10px;
    }
    .btn-action-contact.theme--light.v-btn {
        color: #f8546c;
        text-transform: none;
        font-weight: bold;
        font-size: 16px;
        width: 176px;
        height: 60px;
        margin-top: 20px;
    }
}
.theme--light.v-card > .v-card__text.text-dialog {
    text-align: center;
    font-size: 16px;
    text-transform: capitalize;
    color: #333;
}
.theme--light.v-card > .v-card__text.text-success {
    color: #4caf50;
}

@media screen and (max-width: 960px) {
    .section-contact {
        .text-1 {
            font-size: 40px;
        }
        .text-2 {
            width: 100%;
            max-width: 500px;
            padding: 0 12px;
            margin: 0 auto 20px;
        }
        .form-contact {
            width: 100%;
            max-width: 400px;
            padding: 0 12px;
        }
        .btn-action-contact.theme--light.v-btn {
            height: 40px;
            margin-top: 10px;
            font-size: 14px;
            width: 120px;
        }
    }
}
@media screen and (max-width: 640px) {
    .section-contact {
        .text-1 {
            font-size: 26px;
        }
        .text-2 {
            font-size: 14px;
            margin-bottom: 30px;
        }
        .v-text-field.v-text-field--solo .v-input__control {
            min-height: 35px;
        }
    }
}
</style>
