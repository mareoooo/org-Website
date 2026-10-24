<template>
  <section class="highlights" id="highlights">
    <div class="container">
      <div class="title">
        <p>BY THE NUMBERS</p>
        <h1>ITSO at a Glance</h1>
      </div>
      <div class="people">
        <div class="person">
          <h2>300+</h2>
          <p>Active Members</p>
        </div>
        <div class="person">
          <h2>10+</h2>
          <p>Events per Year</p>
        </div>
        <div class="person">
          <h2>12</h2>
          <p>Partner Organizations</p>
        </div>
        <div class="person">
          <h2>5+</h2>
          <p>Years of Service</p>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.highlights {
  max-width: 100vw;
  min-height: 60vh;
  scroll-margin-top: 140px;
  background-color: #180124f7;
  padding: 70px 50px;
}

.container {
  width: 100%;
  max-width: 1200px;
  margin: auto;

  .title {
    text-align: center;
    margin-bottom: 40px;

    p {
      color: #ffcc80;
      font-weight: bold;
    }

    h1 {
      color: white;
      font-size: 45px;
      margin: 10px;
    }
  }

  .people {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 15px;

    .person {
      background-color: #fffdffd4;
      padding: 30px 20px;
      border-radius: 8px;
      text-align: center;
      box-shadow: 0 6px 20px rgba(229, 152, 29, 0.434);
      border-radius: 10px;

      h2 {
        color: #7675d4;
        font-size: 40px;
      }

      p {
        color: #230134;
      }
    }
  }
}

@media (max-width: 900px) {
  .people {
    grid-template-columns: repeat(2, 1fr) !important;
  }
}

@media (max-width: 768px) {
  .highlights {
    scroll-margin-top: 190px;
    padding: 60px 20px;
  }

  .container {
    .title {
      h1 {
        font-size: 35px;
      }
    }
  }
}
</style>
