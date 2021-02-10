<template>
  <!-- Navigation -->
  <nav
    class="navbar navbar-expand-lg navbar-dark bg-dark fixed-top"
    id="mainNav"
  >
    <div class="container">
      <a class="navbar-brand js-scroll-trigger" href="#page-top">E voting</a>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarResponsive"
        aria-controls="navbarResponsive"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarResponsive">
        <ul class="navbar-nav ml-auto">
          <li class="nav-item">
            <router-link class="nav-link js-scroll-trigger" to="/"
              >Login</router-link
            >
          </li>
          <li class="nav-item">
            <router-link
              v-if="admin"
              class="nav-link js-scroll-trigger"
              to="/AdminPanel"
              >Admin</router-link
            >
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
import {ethers} from 'ethers';
const abi = require('../assets/contracts/abi.json');
const contractAddress = '0x8a60150D62CC27b17a3Ca44249C8ebfDF8692C23';
export default {
  name: 'NavBar',

  data() {
    return {
      admin: false,
    };
  },

  created() {
    const _this = this;
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const signer = provider.getSigner();
    const contract = new ethers.Contract(contractAddress, abi, signer);
    contract.owner().then((data) => {
      if (
        ethers.utils.getAddress(data) ==
        ethers.utils.getAddress(provider.provider.selectedAddress)
      ) {
        _this.admin = true;
      }
    });
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
