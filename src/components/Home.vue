<template>
  <div>
    <!-- lander section -->
    <section class="section">
      <div class="container-fliud">
        <img alt="Vue logo" class="rounded-circle" src />
      </div>
    </section>

    <!-- portfolio section -->
    <section class="protfolio">
      <h1>Portfolio</h1>
      <p>Current projects</p>
      <div class="container">
        <div class="row">
          <div class="col-md-4">
            <div class="card">
              <div class="card-head">
                <img alt="Vue logo" class="rounded-circle img-custome" src />
                <h2>Veganish</h2>
              </div>
              <hr />
              <div class="card-body">
                <p>
                  This appication helps many with special diets as of veganism, vegetarian, and guten free
                  to locate food in their diets. Not only it helps the customer, it helps the resturants in
                  the local area to spread the word of their food. For those who doesn't want to dine in
                  there are many recipes to help create a masterpiece of a dish.
                </p>
                <button type="button" class="btn btn-outline-secondary">More</button>
              </div>
            </div>
            <br />
          </div>

          <div class="col-md-4">
            <div class="card">
              <div class="card-head">
                <img alt="Vue logo" class="rounded-circle img-custome" src />
                <h2>Chadder</h2>
              </div>
              <hr />
              <div class="card-body">
                <p>
                  Want to let people know what's going on in your area but want to stay annoymous? Chadder
                  could help with that. With Chadder you could see or let people know what's in your area or
                  you could see what's going on in other areas. It's ike SnapChat's Snap Map but in text.
                </p>
                <button type="button" class="btn btn-outline-secondary">More</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- modal for contact -->

    <section class>
      <div
        class="modal fade bd-example-modal-lg"
        tabindex="-1"
        role="dialog"
        aria-labelledby="myLargeModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog modal-lg">
          <div class="modal-content">
            <talk />
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script lang="ts">
export default {
  name: "Home",
  components: {}
};
</script>

<style lang="css" scoped>
.section {
  padding-top: 10%;
  padding-bottom: 10%;
}
.protfolio {
  background-color: #34345238;
  padding-top: 8%;
  padding-bottom: 15%;
  /* padding:15% */
}
.img-custome {
  width: 140px;
  height: 140px;
  margin-top: 15px;
}
</style>