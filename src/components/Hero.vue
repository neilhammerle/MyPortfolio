<template>
  <div class="hero">
    <div class="container h-100">
      <div class="row h-100 jusify-content-center align-items-center">
        <div class="col-md-5">
          <div class="hero-content">
            <h1 class="hero-title">Hello, welcome to my website!</h1>
            <p>Web developer, picture taker, and baseball lover!</p>
            <div class="hero-btn mt-5">
              <button class="btn custom-btn btn-info mt-4">More about me</button>
              <button class="btn custom-btn btn-outline-seondary">Contact</button>
            </div>
          </div>
        </div>
        <div class="col-md-7">
          <div class="graphic">
            <img src alt />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Hero",
  props: {
    msg: String
  }
};
</script>

<style>
</style>