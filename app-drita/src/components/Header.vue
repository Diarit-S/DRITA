<template>
  <nav class="navbar navbar-expand-lg d-flex justify-content-between">
    <a class="navbar-brand">
      <img src="../assets/drita-logo.png" alt="logo" style="width:30%">
    </a>
    <div>
      <ul class="navbar-nav">
        <li class="nav-item btn btn-primary d-flex justify-center align-items-center mr-3">
          <a class="nav-link" href="#">CONTACT</a>
        </li>
        <li class="devis-btn nav-item btn btn-outline-primary d-flex justify-center align-items-center mr-3">
          <a class="nav-link" href="#">DEVIS</a>
        </li>
        <li></li>
      </ul>
    </div>
  </nav>
</template>

<script>
export default {

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>

li {
  color: black;
  height: 40px;
}
li:hover>a {
  color: white;
}

a {
  color: black;
  font-weight: bold;
  transition: color 0.15s ease-in-out;
}
</style>
