<template>
  <div class="main">

  
    <div class="container">
      <img class="image-logo" src="~/assets/images/logo.png" alt="">
      <h1 class="subheadline"> Free Registration</h1>
      <div>
        
      </div>   
      
      <!-- stepper -->

            <div class="q-pa-md">
          <q-stepper
            v-model="step"
            icon="1"
            ref="stepper"
            contracted
            color="primary"
            animated
          >
          
          
            <q-step
              :name="1"
              title="Select campaign settings"
      
              :done="step > 1"
            >

      
            </q-step>

            <q-step
              :name="2"
              title="Create an ad group"
              caption="Optional"
         
              :done="step > 2"
            >
            </q-step>

            <q-step
              :name="3"
              title="Create an ad"
              :done="step > 3"
            >
            </q-step>

            <template v-slot:navigation>
              
            </template>
          </q-stepper>
        </div>
      <!-- ---------------------------------------------- -->


      <!-- input fields -->
       <form class="form">
          <h5 class="continue">
            Continue With
          </h5>

          <div class="icons">
            <img src="~/assets/images/facebook.png" alt="facebook" class="facebook">
            <img src="~/assets/images/google.png" alt="google" class="google">
          </div>

          <!-- line separator -->
           <div class="container-line">
              <img src="~/assets/images/line.png" alt="" class="line">
              <span class="or">or</span>
              <img src="~/assets/images/line.png" alt="" class="line">
           </div>

           <div class="container-fields">

            <div class="row q-col-gutter-lg">


              <!-- username -->
              <div class="col-12 col-sm-6">
                <label for="" class="label">Username</label>
                <q-input filled v-model="text" label="Please enter username."  class="input-field "  dark/>
              </div>


              <!-- password -->
              <div class="col-12 col-sm-6">
                
                <label for="" class="label">Password</label>
                <q-input filled v-model="text" label="Please enter password."  class="input-field"  dark/>
              </div>


              <div class="col-12 col-sm-6">
                <label for="" class="label">Confirm Password</label>
                <q-input filled v-model="text" label="Please enter password."  class="input-field"  dark/>
              </div>


              <!-- mobile number -->
              <div class="col-12 col-sm-6">
                
                <label for="" class="label">Mobile Number</label>
                <q-input filled v-model="text" label="Please enter mobile number."  class="input-field"  dark/>
              </div>


              <!-- email address -->
              <div class="col-12 col-sm-6">
                
                <label for="" class="label">E-mail Address</label>
                <q-input filled v-model="text" label="Please e-mail address."  class="input-field"  dark/>
              </div>
              

              <!-- Identity number -->
              <div class="col-12 col-sm-6">
                
                <label for="" class="label">Identity No</label>
                <q-input filled v-model="text" label="Please enter correct ID number."  class="input-field"  dark/>
              </div>

              <!-- referral -->
              <div class="col-12 col-sm-6">
                
                <label for="" class="label">Referral</label>
                <q-input filled v-model="text" label="Please enter referral username."  class="input-field"  dark/>
                <span class="subheadline-referral">Leave blank if no referral.</span>
              </div>

              <!-- verification code -->
              <div class="col-12 col-sm-6">
                <label for="" class="label">Verification Code</label>

                <div class="code-field " >
                 
                  <q-input filled v-model="text" label="Verification Code."  class="input-field"  dark style="width: 218px;"/>
                  <img src="~/assets/images/number.png" alt="" >
                </div>
            
             
               
              </div>
            </div>


            <!-- checkbox  -->
            <div id="container-terms" style="color: white;">
              <q-checkbox v-model="right" label="I agree." />
              <h5 class="terms">OCMS Terms & Conditions</h5>

              
            </div>

             
           <div class="row items-center justify-center">
            <q-btn   class="register-btn" label="Register" no-caps />
           </div>

           </div>

          

           


       </form>

       
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      right: false
    }
  }
};
</script>

<style >

/* font */
@import url('https://fonts.googleapis.com/css2?family=Abril+Fatface&family=Inter:wght@100..900&family=Merriweather&family=Nunito:ital,wght@0,200..1000;1,200..1000&family=Work+Sans:ital,wght@0,100..900;1,100..900&display=swap');

 .main{
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
 .container{
  box-sizing: border-box;
  width: 760px;
  margin: auto;
  padding-top: 56px;
 }
 .image-logo{

  display: block;
  margin-left: auto;
  margin-right: auto;
  
 }

 .subheadline{
  color: #FFF;
  text-align: center;
  font-family: Inter;
  font-size: 40px;
  font-style: normal;
  font-weight: 700;
  margin-top: 0px;
 }

 .form{
  width: 760px;
  background: #000000;
  height: 831px;
  border-radius: 10px;
  border: 2px solid #FC0;

 }
 .continue{
  color: white;
  text-align: center;
  font-family: Inter;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  
 }

 .icons{
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


 

 .or{
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

 .container-line{
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-items: flex-end;
  align-content: center;
 }


 /* input fields */
 .q-field.row.no-wrap.items-start.q-input.q-field--filled.q-field--labeled{
  background: #262626;
  border-radius: 5px;

 }


 .label{
  color: white;
  text-align: center;
  font-family: Inter;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;

 }

 .input-field{
  width: 100%;
 }

 .container-fields{
  /* width: 760px;
  padding-left: 38px;
  padding-top: 40px; */
  padding: 30px;
  /* background: red; */
  /* background: red; */
  /* display: flex; */
 }

 .q-checkbox__bg{
  background: white;
}
/* .q-checkbox__inner:before {
  background: white;
} */

.terms{
  /* background: red; */
  /* margin-bottom: 80px; */
  /* width: 200px; */
  color: #D89E30;
  font-family: Inter;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
}
#container-terms{
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  align-content: center;
  gap: 3px;
}

.register-btn{
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 27px;
  border: 2px solid #BB7F0F;
  background: linear-gradient(180deg, #EA9F13 0%, #BB7F0F 100%);
  box-shadow: 0px 6px 0px 0px rgba(255, 255, 255, 0.25) inset;


  color: #FFF;
  text-align: center;
  text-shadow: 1px 2px 1px rgba(0, 0, 0, 0.50);
  font-family: Inter;
  font-size: 18px;
  font-weight: 400;
  letter-spacing: 1px;

  width: 160px;
  height: 54px;
 
}

.subheadline-referral{
  color: #959595;
  font-family: Inter;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
}

.code-field{
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: start;
  align-items: center;
  align-content: normal;
  
}


.q-stepper {
    box-shadow: 0 1px 5px rgba(0, 0, 0, 0.2), 0 2px 2px rgba(0, 0, 0, 0.14), 0 3px 1px -2px rgba(0, 0, 0, 0.12);
    border-radius: 4px;
    background: none
  }
 




/* mobile device */

@media only screen and (max-width: 600px) {
  .subheadline{
    font-size: 30px;
    margin-top: -5px;
  }

  .image-logo{
    height: 40px;
    width: 112px;
  }

  .main{
    height: 1742px;
  }

  .container{
  width: 375px; 
  }
  .form{
    width: 380px; 
  }
  .line{
    width: 100px;
  }
  .icons{
    margin-top: -20px;
    margin-bottom: -20px;

  }

  .form{
    height: 1327px;
  }


}




@media(max-width: 375px) {
  .form{
    width: 350px; 

  }
}



</style>

