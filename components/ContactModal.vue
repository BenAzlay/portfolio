<template>
    <div 
        class="modal-container">
        <div
            id="window"
            ref="window"
            class="modal-content">
            <fa-icon
                @click="onClose"
                icon="times" 
                title="Close"
                class="close-modal-icon" />
            <form class="flex flex-col items-center space-y-4">
                <h2 class="font-semibold text-2xl text-center text-green">Get in touch</h2>
                <div class="flex flex-row items-center space-x-4">
                    <InputField v-model="name" label="Name" placeholder="Vitalik Buterin" type="text" required />
                    <InputField v-model="email" label="Email" placeholder="name@example.com" type="text" required />                    
                </div>
                <InputField
                    v-model="message"
                    label="Your message"
                    placeholder="Did you ever hear the tragedy of Darth Plagueis The Wise? It’s not a story the Jedi would tell you..."
                    type="textarea"
                    required
                    class="w-full" />
                    <vue-hcaptcha   
                        sitekey="da9381eb-f8cf-418f-9596-2e0049e01222"
                        @verify="onVerifyCaptcha"
                        @error="onErrorCaptcha"
                    ></vue-hcaptcha>
                <p class="error-message">{{ warningMessage }}</p>
                <div
                    @click="checkInput"
                    class="button mx-auto">
                    Send message
                </div>
            </form>
        </div>
    </div>
</template>

<script>
import emailjs from 'emailjs-com';
import VueHcaptcha from '@hcaptcha/vue-hcaptcha';

export default {
  name: 'ContactModal',
  components: {
      VueHcaptcha
  },
  data () {
    return {
        name: '',
        email: '',
        message: '',
        warningMessage: '',
        captchaToken: ''
    }
  },
  watch: {
  },
  created() {
  },
  computed: {
  },
  methods: {
    onClose() {
        this.$nuxt.$emit('message', false)
    },
    checkInput() {
        if (!this.name.length || !this.email.length || !this.message.length) {
            this.warningMessage = "Please fill all the fields";
        } else if (!this.captchaToken.length) {
            this.warningMessage = "Please complete the Captcha";
        } else {
            this.warningMessage = "";
            this.sendEmail();
        }
    },
    sendEmail() {
        emailjs.send(
            process.env.NUXT_ENV_EMAILJS_SERVICEID,
            process.env.NUXT_ENV_EMAILJS_TEMPLATEID,
            {
                from_name: this.name,
                from_email: this.email,
                message: this.message
            },
            process.env.NUXT_ENV_EMAILJS_USERID
        );
        this.$toast.success(`Message sent! Thanks ${this.name}!`)
        this.name = this.email = this.message = '';
        this.onClose();
    },
    onVerifyCaptcha (token) {
      this.captchaToken = token;
      this.errorMessage = '';
    },

    onErrorCaptcha (err) {
      this.errorMessage = 'Captcha error. Please try again.';
      this.captchaToken = '';
      console.log("Hcaptcha error", err);
    }
  }
}
</script>

<style scoped>
.modal-container {
    @apply fixed w-full h-full inset-0 z-50 overflow-hidden flex justify-center items-center animated;
    background: rgba(0,0,0,.7);
}
.modal-content {
    @apply p-3 border dark:border-2 border-gray-600 shadow-lg bg-white dark:bg-dark dark:text-light w-11/12 sm:w-full md:max-w-md mx-auto rounded z-50 overflow-y-auto;
}

.close-modal-icon {
    @apply -ml-1 -mt-1 float-left cursor-pointer text-xl hover:text-red-600;
}

.error-message {
    @apply text-red-600 italic;
}
</style>
