<template>
  <!------ Include the above in your HEAD tag ---------->
  <body>
    <div class="container register">
      <div class="row">
        <div class="col-md-3 register-left"></div>
        <div class="col-md-9 register-right">
          <div class="tab-content" id="myTabContent">
            <div
              class="tab-pane fade show active"
              id="home"
              role="tabpanel"
              aria-labelledby="home-tab"
            >
              <h3 class="register-heading">Voter's Details</h3>
              <div class="row register-form">
                <div class="col-md-6">
                  <div class="form-group">
                    <input
                      type="text"
                      class="form-control"
                      placeholder="Voter Wallet Address *"
                      v-model="address"
                    />
                  </div>
                  <div class="form-group">
                    <input
                      type="text"
                      class="form-control"
                      placeholder="First Name *"
                      v-model="first_name"
                    />
                  </div>
                  <div class="form-group">
                    <input
                      type="text"
                      class="form-control"
                      placeholder="Nic *"
                      v-model="nic"
                    />
                  </div>
                  <div class="form-group">
                    <input
                      type="text"
                      class="form-control"
                      placeholder="Election Number *"
                      v-model="election_number"
                    />
                  </div>
                  <div class="form-group">
                    <input
                      type="text"
                      class="form-control"
                      placeholder="Province *"
                      v-model="province"
                    />
                  </div>
                </div>
                <div class="col-md-6">
                  <input
                    type="submit"
                    class="btnRegister"
                    value="Register"
                    @click="registerVoter()"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </body>
</template>

<script>
import {ethers} from 'ethers';
const abi = require('../assets/contracts/abi.json');
const contractAddress = '0x8a60150D62CC27b17a3Ca44249C8ebfDF8692C23';
export default {
  return: {
    address: '',
    first_name: '',
    nic: '',
    election_number: '',
    province: '',
  },
  name: 'SignUp',
  methods: {
    registerVoter: async function() {
      const _this = this;
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const signer = provider.getSigner();
      const contract = new ethers.Contract(contractAddress, abi, signer);
      contract
        .addVoter(
          _this.address,
          _this.first_name,
          _this.nic,
          _this.election_number,
          _this.province
        )
        .then((data) => {
          console.log(data);
        });
    },
  },
};
</script>

<style scoped>
.register {
  /* background: -webkit-linear-gradient(left, #3931af, #00c6ff); */
  margin-top: 2%;
  padding: 3%;
  z-index: -10;
}
.register-left {
  text-align: center;
  color: #fff;
  margin-top: 4%;
}
.register-left input {
  border: none;
  border-radius: 1.5rem;
  padding: 2%;
  width: 60%;
  background: #f8f9fa;
  font-weight: bold;
  color: #383d41;
  margin-top: 30%;
  margin-bottom: 3%;
  cursor: pointer;
}
.register-right {
  background: #f8f9fa;
  border-top-left-radius: 10% 50%;
  border-bottom-left-radius: 10% 50%;
}
.register-left img {
  margin-top: 15%;
  margin-bottom: 5%;
  width: 25%;
  -webkit-animation: mover 2s infinite alternate;
  animation: mover 1s infinite alternate;
}
@-webkit-keyframes mover {
  0% {
    transform: translateY(0);
  }
  100% {
    transform: translateY(-20px);
  }
}
@keyframes mover {
  0% {
    transform: translateY(0);
  }
  100% {
    transform: translateY(-20px);
  }
}
.register-left p {
  font-weight: lighter;
  padding: 12%;
  margin-top: -9%;
}
.register .register-form {
  padding: 10%;
  margin-top: 10%;
}
.btnRegister {
  float: right;
  margin-top: 10%;
  border: none;
  border-radius: 1.5rem;
  padding: 2%;
  background: #0062cc;
  color: #fff;
  font-weight: 600;
  width: 50%;
  cursor: pointer;
}
.register .nav-tabs {
  margin-top: 3%;
  border: none;
  background: #0062cc;
  border-radius: 1.5rem;
  width: 28%;
  float: right;
}
.register .nav-tabs .nav-link {
  padding: 2%;
  height: 34px;
  font-weight: 600;
  color: #fff;
  border-top-right-radius: 1.5rem;
  border-bottom-right-radius: 1.5rem;
}
.register .nav-tabs .nav-link:hover {
  border: none;
}
.register .nav-tabs .nav-link.active {
  width: 100px;
  color: #0062cc;
  border: 2px solid #0062cc;
  border-top-left-radius: 1.5rem;
  border-bottom-left-radius: 1.5rem;
}
.register-heading {
  text-align: center;
  margin-top: 8%;
  margin-bottom: -15%;
  color: #495057;
}
</style>
