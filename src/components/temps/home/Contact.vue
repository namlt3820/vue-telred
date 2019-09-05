<template>
    <v-container fluid class="section-contact">
        <v-layout wrap pa-0>
            <v-flex xs12>
                <div class="fix-width">
                    <div class="text-1">Get in Touch with Us</div>
                    <div class="text-2">We'd love to hear from you. Drop us a note and we'l get back to you ASAP.</div>
                    <v-form class="form-contact">
                        <v-text-field label="Name" solo hide-details flat color="#666"></v-text-field>
                        <v-text-field label="E-mail" solo hide-details flat color="#666"></v-text-field>
                        <v-textarea
                            solo
                            name="input-7-4"
                            label="Your Message"
                            flat
                            hide-details
                            color="#666"
                        ></v-textarea>
                        <v-btn depressed rounded class="btn-action-contact">Send</v-btn>
                    </v-form>
                </div>
            </v-flex>
        </v-layout>
    </v-container>
</template>
<script>
export default {
    name: 'Contact'
};
</script>
<style lang="scss">
.section-contact {
    background: url(../../../assets/images/bg-contact.png) no-repeat left top;
    padding: 40px 0;

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
