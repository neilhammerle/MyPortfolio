<template>
  <div class="home">
    <Nav></Nav>
    <Hero />

    <!-- portfolio section -->
    <section class="protfolio">
      <h1>Portfolio</h1>
      <p>Current projects</p>
      <div class="container">
        <div class="row">
          <div class="col-md-4">
            <div class="card">
              <div class="card-head">
                <img
                  alt="Vue logo"
                  class="rounded-circle img-custome"
                  src="../assets/img/veganish.jpg"
                />
                <h2>Veganish</h2>
              </div>
              <hr />
              <div class="card-body">
                <p>
                  Veganish helps many with special diets as of veganism, vegetarian, and guten free
                  to locate foods in their diet. Not only it helps the customer, it helps the resturants in
                  the local area to spread the word of their food. Also for those who doesn't want to dine in
                  there are many recipes to help cook a masterpiece of a dish.
                </p>
                <button type="button" class="btn btn-outline-secondary">More</button>
              </div>
            </div>
            <br />
          </div>

          <div class="col-md-4">
            <div class="card">
              <div class="card-head">
                <img
                  alt="Vue logo"
                  class="lg-rounded-circle img-custome"
                  src="../assets/img/chadder.jpg"
                />
                <h2>Chadder</h2>
              </div>
              <hr />
              <div class="card-body">
                <p>
                  Want to let people know what's going on in your area but want to stay annoymous? Chadder
                  could help with that. With Chadder you could see or let people know what's going on in your area or
                  you could see what's going on in other areas. It's like SnapChat's SnapMap but in text.
                </p>
                <button type="button" class="btn btn-outline-secondary">More</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import Hero from "./Hero.vue";

export default {
  name: "home",
  components: {
    Hero
  }
};
</script>

<style lang="css" scoped>
.section {
  padding-top: 3%;
  padding-bottom: 3%;
}
.protfolio {
  background-color: #34345238;
  padding-top: 8%;
  padding-bottom: 15%;
  /* padding:15% */
}
.img-custome {
  width: 125px;
  height: 125px;
  margin-top: 25px;
  margin-bottom: 25px;
}
</style>