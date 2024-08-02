<template>
  <div class="main">
    <div class="container">
      <img class="image-logo" src="~/assets/images/logo.png" alt="" />
      <h1 class="subheadline">Free Registration</h1>
      <div></div>

      <!-- stepper -->

      <div class="q-pa-md">
        <q-stepper
          class="circle-icon"
          v-model="step"
          ref="stepper"
          contracted
          animated
          inactive-color="black"
        >
          <q-step :name="1" prefix="1" :done="step > 1"> </q-step>

          <q-step
            :name="2"
            title="Create an ad group"
            prefix="2"
            :done="step > 2"
          >
          </q-step>

          <q-step :name="3" prefix="3" :done="step > 3"> </q-step>

          <template v-slot:navigation> </template>
        </q-stepper>
      </div>
      <!-- ---------------------------------------------- -->

      <!-- input fields -->

      <ValidationObserver ref="observer" v-slot="{ invalid }">
        <form class="form" @submit.prevent="onSubmit()">
          <h5 class="continue">Continue With</h5>

          <div class="icons">
            <img
              src="~/assets/images/facebook.png"
              alt="facebook"
              class="facebook"
            />
            <img src="~/assets/images/google.png" alt="google" class="google" />
          </div>

          <!-- line separator -->
          <div class="container-line">
            <img src="~/assets/images/line.png" alt="" class="line" />
            <span class="or">or</span>
            <img src="~/assets/images/line.png" alt="" class="line" />
          </div>

          <div class="container-fields">
            <div class="row q-col-gutter-lg">
              <!-- username -->
              <div class="col-12 col-sm-6">
                <label for="" class="label">Username</label>
                <ValidationProvider
                  name="username"
                  rules="required|min:3"
                  v-slot="{ errors, valid, failed }"
                >
                  <label for="">Please enter username.</label>
                  <q-input
                    v-model="username"
                    filled
                    placeholder="Please enter username"
                    class="input-field"
                    dark
                    :error="!!errors.length"
                    :error-message="errors[0]"
                  />
                </ValidationProvider>
              </div>

              <!-- password -->
              <div class="col-12 col-sm-6">
                <ValidationProvider
                rules="required|password:@confirm" 
                v-slot="{ errors }"
                >
                  <label for="" class="label">Password</label>
                  <q-input
                    type="password"
                    filled
                    v-model="password"
                    placeholder="Please enter password."
                    class="input-field"
                    dark
                    :error="!!errors.length"
                    :error-message="errors[0]"
    
                />
                <!-- password error message -->
                <!-- <span>{{ errors[0] }}</span> -->
                </ValidationProvider>
              </div>

              <!-- confirm password -->
              <div class="col-12 col-sm-6">
                <ValidationProvider
                  name="confirm" 
                  rules="required" 
                  v-slot="{ errors }"
                >
                  <label for="" class="label">Confirm Password</label>
                  <q-input
                    type="password"
                    filled
                    v-model="confirmation"
                    :type="isConfirmPwd ? 'password' : 'text'"
                    placeholder="Confirm password."
                    class="input-field"
                    dark
                    :error="!!errors.length"
                    :error-message="errors[0]"
                  >
                  <template v-slot:append>
                    <q-icon
                      :name="isConfirmPwd ? 'visibility_off' : 'visibility'"
                      class="cursor-pointer"
                      @click="isConfirmPwd = !isConfirmPwd"
                    />
                  </template>

                  </q-input>
                  
                 
                  <!-- password error message -->
                  <!-- <span style="color: white;">{{ errors[0] }}</span> -->
                </ValidationProvider>
              </div>

              <!-- mobile number -->
              <div class="col-12 col-sm-6">
                <ValidationProvider
                  name="number" 
                  rules="required" 
                  v-slot="{ errors }"
                >
                    <label for="" class="label">Mobile Number</label>
                  <q-input
                    filled
                    v-model="number"
                    mask="(###) ### - ######"
                    unmasked-value
                    hint="Phone: (+886) 921 - 234567"
                    
                    placeholder="Please enter mobile number."
                    class="input-field"
                    dark

                    

                    :error="!!errors.length"
                    :error-message="errors[0]"
                  />
                </ValidationProvider>
              </div>

              <!-- email address -->
              <!-- <div class="col-12 col-sm-6">
                <label for="" class="label">E-mail Address</label>
                <q-input
                  filled
                  v-model="text"
                  label="Please e-mail address."
                  class="input-field"
                  dark
                />
              </div> -->

<!-- email --------------------------------------------------------->
              <div class="col-12 col-sm-6">
                <ValidationProvider
                  name="E-mail"
                  rules="required|email" 
                  v-slot="{ errors }" 
                >
                    <label for="" class="label">E-mail Address</label>

                  <q-input
                    filled
                    v-model="email"
                    placeholder="Please e-mail address."
                    class="input-field"
                    dark
                    :error="!!errors.length"
                    :error-message="errors[0]"

                    
                  />
                  <!-- <span style="color: red;">{{ errors[0] }}</span> -->
                </ValidationProvider>
              </div>


              <!-- Identity number -->
              <div class="col-12 col-sm-6">
                <ValidationProvider
                  name="identityNo"
                  rules="required" 
                  v-slot="{ errors }" >

                    <label for="" class="label">Identity No</label>
                  <q-input
                    filled
                    type="string"
                    v-model="identityNo"
                    placeholder="Please enter correct ID number."
                    class="input-field"
                    dark
                    
                    :error="!!errors.length"
                    :error-message="errors[0]"
                  />
                </ValidationProvider>
              </div>

              <!-- referral -->
              <div class="col-12 col-sm-6">
                <ValidationProvider>
                    <label for="" class="label">Referral</label>
                  <q-input
                    filled
                    v-model="referral"
                    type="text"
                    placeholder="Please enter referral username."
                    class="input-field"
                    dark
                  />
                  <span class="subheadline-referral"
                    >Leave blank if no referral.</span
                  >
                </ValidationProvider>
              </div>

              <!-- verification code -->
              <div class="col-12 col-sm-6">
                  <ValidationProvider>
                    <label for="" class="label">Verification Code</label>
                    <div class="code-field">
                      <q-input
                        filled
                        v-model="code"
                        type="number"
                        placeholder="Verification Code."
                        class="input-field"
                        dark
                        style="width: 218px"
                      />
                      <img src="~/assets/images/number.png" alt="" />
                    </div>
                  </ValidationProvider>
              </div>
            </div>

            <!-- checkbox  -->
            <div id="container-terms" style="color: white">
              <q-checkbox id="checkbox" v-model="right" label="I agree." />
              <h5 class="terms">OCMS Terms & Conditions</h5>
            </div>

            <div class="row items-center justify-center">
              <q-btn :disabled="invalid" class="register-btn" label="Register" type="submit" no-caps />
            </div>
          </div>
        </form>
      </ValidationObserver>
    </div>
  </div>
</template>

<script>
// import veevalidate
import { ValidationProvider, ValidationObserver, extend } from "vee-validate";


// validation for confirm password
extend('password',  {
  params: ['target'],
  validate(value, { target }) {
    return value === target;
  },
  message: 'Password confirmation does not match'
})

export default {
  components: {
    ValidationProvider,
    ValidationObserver,
  },
  data() {
    return {
      username: "",
      password: "",
      confirmation: "",
      email: "",
      number:"",
      identityNo: "",
      code: "",
      referral: "",
      isConfirmPwd: true,
      right: false,
    };
  },
  methods: {
    onSubmit() {
      
      //Handle form submission
      console.log("Form submitted with:", {
        username: this.username,
      })
    },
  },
};
</script>

<style>
/* font */
@import url("https://fonts.googleapis.com/css2?family=Abril+Fatface&family=Inter:wght@100..900&family=Merriweather&family=Nunito:ital,wght@0,200..1000;1,200..1000&family=Work+Sans:ital,wght@0,100..900;1,100..900&display=swap");

.main {
  background: linear-gradient(
    0deg,
    rgba(151, 42, 177, 1) 0%,
    rgba(28, 58, 112, 1) 80%,
    rgba(8, 24, 50, 1) 100%
  );

  /* background-image: url(~assets/images/background.jpg);   */
  /* height: 100vh; */
  height: 1297px;
}
.container {
  box-sizing: border-box;
  width: 760px;
  margin: auto;
  padding-top: 56px;
}
.image-logo {
  display: block;
  margin-left: auto;
  margin-right: auto;
}

.subheadline {
  color: #fff;
  text-align: center;
  font-family: Inter;
  font-size: 40px;
  font-style: normal;
  font-weight: 700;
  margin-top: 0px;
}

.form {
  width: 760px;
  background: #000000;
  height: 870px;
  border-radius: 10px;
  border: 2px solid #fc0;
}
.continue {
  color: white;
  text-align: center;
  font-family: Inter;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
}

.icons {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap-reverse;
  justify-content: center;
  align-items: center;
  align-content: center;
  gap: 30px;
  /* background: red; */

  margin-top: -20px;
  margin-bottom: -5px;
}

.or {
  color: white;
  text-align: center;
  font-family: Inter;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  /* background: red; */
  margin-left: 30px;
  margin-right: 30px;
  margin-top: 30px;
  height: 15px;
}

.container-line {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-items: flex-end;
  align-content: center;
}

/* input fields */
.q-field.row.no-wrap.items-start.q-input.q-field--filled.q-field--labeled {
  background: #262626;
  border-radius: 5px;
}

.label {
  color: white;
  text-align: center;
  font-family: Inter;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
}

.input-field {
  width: 100%;
}

.container-fields {
  padding: 30px;
}

.q-checkbox__bg {
  background: white;
}


.terms {
  color: #d89e30;
  font-family: Inter;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
}
#container-terms {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  align-content: center;
  gap: 3px;
}

.register-btn {
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 27px;
  border: 2px solid #bb7f0f;
  background: linear-gradient(180deg, #ea9f13 0%, #bb7f0f 100%);
  box-shadow: 0px 6px 0px 0px rgba(255, 255, 255, 0.25) inset;

  color: #fff;
  text-align: center;
  text-shadow: 1px 2px 1px rgba(0, 0, 0, 0.5);
  font-family: Inter;
  font-size: 18px;
  font-weight: 400;
  letter-spacing: 1px;

  width: 160px;
  height: 54px;
}

.subheadline-referral {
  color: #959595;
  font-family: Inter;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
}

.code-field {
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: start;
  align-items: center;
  align-content: normal;
}

.q-stepper {
  box-shadow: 0 1px 5px rgba(0, 0, 0, 0.2), 0 2px 2px rgba(0, 0, 0, 0.14),
    0 3px 1px -2px rgba(0, 0, 0, 0.12);
  border-radius: 4px;
  background: none;
  box-shadow: none !important;
  
}
.q-stepper__header--border {
  border-bottom: none;
}

.circle-icon {
  color: #000000;
  
}
.q-stepper__dot {
  width: 50px;
  height: 50px;
  color: #999;
  background: #000000;
  text-align: center;
  font-family: Inter;
  font-size: 30px;
  font-style: normal;
  font-weight: 700;
}
/* .stepper__dot {
    background: #EBA013;
    
    height: 70px;
    width: 70px;
} */

.q-stepper--contracted
  .q-stepper__header
  .q-stepper__tab:first-child
  .q-stepper__dot {
  background: #eba013;
  height: 70px;
  width: 70px;
  color: #FFF;
  text-align: center;
  font-family: Inter;
  font-size: 40px;
  font-style: normal;
  font-weight: 700;
}

.q-stepper--horizontal .q-stepper__line:before,
.q-stepper--horizontal .q-stepper__line:after {
  height: 1px;
  width: 100vw;
  background: #3b4b64;
  width: 600px;
  height: 3px;
}

.q-field__messages {
  padding-bottom: 80px !important;
}

/* .q-icon, .material-icons {
    display: none;
} */
.q-field__messages > div {
  font-family: Inter;
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
}

.q-field--filled.q-field--dark .q-field__control, .q-field--filled.q-field--dark .q-field__control:before {
    background: #262626;
    border-radius: 5px;
}


/* mobile device */

@media only screen and (max-width: 600px) {
  .subheadline {
    font-size: 30px;
    margin-top: -5px;
  }

  .image-logo {
    height: 40px;
    width: 112px;
  }

  .main {
    height: 1742px;
  }

  .container {
    width: 375px;
  }
  .form {
    width: 380px;
  }
  .line {
    width: 100px;
  }
  .icons {
    margin-top: -20px;
    margin-bottom: -20px;
  }

  .form {
    height: 1327px;
  }

  .q-stepper--contracted
    .q-stepper__header
    .q-stepper__tab:first-child
    .q-stepper__dot {
    height: 60px;
    width: 60px;
    font-size: 30px;
  }
}

@media (max-width: 375px) {
  .form {
    width: 350px;
  }

  #container-terms {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    align-content: center;
  }
  #checkbox {
    margin-top: 30px;
    margin-bottom: -40px;
  }
}
</style>
