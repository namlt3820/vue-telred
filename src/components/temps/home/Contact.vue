<template>
    <v-container fluid class="section-contact">
        <div class="fix-width">
            <div class="text-1">Get in Touch with Us</div>
            <div class="text-2">We'd love to hear from you. Drop us a note and we'll get back to you ASAP.</div>
            <v-form class="form-contact">
                <ValidationProvider name="fullname" rules="required" v-slot="{ errors }">
                    <v-text-field
                        label="Name"
                        solo
                        hide-details
                        flat
                        color="#666"
                        v-model="myForm.f_fullname"
                    ></v-text-field>
                    <p>{{ errors[0] }}</p>
                </ValidationProvider>
                <!-- <v-text-field
                            label="Name"
                            solo
                            hide-details
                            flat
                            color="#666"
                            v-model="myForm.f_fullname"
                            data-vv-name="fullname"
                            :error-messages="errors.collect('fullname')"
                            v-validate="{required: true, max:100}"
                ></v-text-field>-->
                <v-text-field
                    label="E-mail"
                    solo
                    hide-details
                    flat
                    color="#666"
                    v-model="myForm.f_email"
                ></v-text-field>
                <v-textarea
                    solo
                    name="input-7-4"
                    label="Your Message"
                    flat
                    hide-details
                    color="#666"
                    v-model="myForm.f_message"
                ></v-textarea>
                <v-btn depressed rounded class="btn-action-contact" @click="sendMyForm()">Send</v-btn>
            </v-form>
        </div>
    </v-container>
</template>
<script>
import Vue from 'vue';
import { extend } from 'vee-validate';
// import { required, email } from 'vee-validate/dist/rules';
extend('required', {
    validate: value => !!value,
    message() {
        return 'This field is required';
    }
});
/* extend('required', {
    params: ['max'], // list of parameter names
    validate(value, { max }) {
        return Number(value) > max;
    },
    message() {
        return 'Max 1000';
    }
}); */

export default {
    name: 'Contact',
    data: () => ({
        myForm: {
            f_fullname: 'Quan',
            f_email: 'quan.nguyen@vmodev.com',
            f_message: 'Demo'
        }
    }),
    mounted() {
        // this.$validator.localize('en', this.dictionary);
    },
    methods: {
        sendMyForm() {
            // https://script.google.com/macros/s/AKfycbxHVv__ThbYEMzB-P5wT5EvMtHccnxPBbKKnSual7LG7trbk1U/exec
            // https://docs.google.com/spreadsheets/d/1czstH1DtT8fgtvfYy7_uep-zCemPyEM8erLgxZtwR4s/edit#gid=0
            const bodyFormData = new FormData();
            bodyFormData.set('sheetName', 'Sheet1');
            bodyFormData.set('name', this.myForm.f_fullname);
            bodyFormData.set('email', this.myForm.f_email);
            bodyFormData.set('msg', this.myForm.f_message);

            Vue.axios
                .post(
                    'https://script.google.com/macros/s/AKfycbxHVv__ThbYEMzB-P5wT5EvMtHccnxPBbKKnSual7LG7trbk1U/exec',
                    bodyFormData
                )
                .then(res => {
                    console.log(res);
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
