<template>
  <nav class="navbar navbar-expand-lg d-flex justify-content-between">
    <a class="navbar-brand">
      <img src="../assets/drita-logo.png" alt="logo" style="width:40%">
    </a>
    <ul class="navbar-nav d-flex flex-row">
      <li class="mr-4">
        <a class="nav-link" href="#">CONTACT</a>
      </li>
      <li class="devis-btn nav-item btn btn-outline-primary d-flex justify-center align-items-center mr-3">
        <a class="nav-link" href="#">DEVIS GRAUIT</a>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">

li {
  height: 40px;
}
li {
  a {
    color: #163762;
  }
}
li:hover>a {
  color: rgb(67, 149, 255);
}
li:nth-child(2):hover>a {
  color: white;
}

a {
  color: black;
  font-weight: bold;
  transition: color 0.15s ease-in-out;
}
</style>
