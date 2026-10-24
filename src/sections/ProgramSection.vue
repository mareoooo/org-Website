<template>
  <section class="program" id="program">
    <div class="container">
      <div class="title">
        <p>ACADEMIC PROGRAM</p>
        <h1>Program Offered</h1>
      </div>
      <div class="cards">
        <div class="card">
          <div class="image"><img src="@/assets/image/IoT.jpg" alt="" /></div>
          <h2>IOT</h2>
          <h3>Internet of Things</h3>
          <p>Workshops and projects that bridge the gap between the physical and digital worlds.</p>
        </div>

        <div class="card">
          <div class="image"><img src="@/assets/image/database.jpg" alt="" /></div>
          <h2>DATABASE</h2>
          <h3>Data and Database Systems</h3>
          <p>Learn to design, query, and manage the data that powers modern applications.</p>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.program {
  width: 100%;
  min-height: 100vh;
  padding: 70px 50px;
  scroll-margin-top: 140px;
  background-color: #230134;
  box-sizing: border-box;
}

.container {
  width: 100%;
  height: 100%;
  margin: auto;

  .title {
    text-align: center;
    margin-bottom: 40px;

    p {
      color: #f5a623;
      font-weight: bold;
    }

    h1 {
      color: #f7f8f4;
      font-size: 45px;
      margin: 10px;
    }
  }

  .cards {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 20px;

    .card {
      background-color: #fbfbfb;
      padding: 40px 30px;
      text-align: center;
      border-color: #7675d4;
      border-style: groove;
      align-items: center;
      border-radius: 10px;

      img {
        width: 100%;
        box-shadow: 0 6px 20px rgba(229, 152, 29, 0.434);
        border-radius: 10px;
      }

      h2 {
        color: #230134;
        font-size: 30px;
        margin: 15px 0 5px;
      }

      h3 {
        margin-bottom: 12px;
        color: #7675d4;
        font-size: 17px;
      }

      p {
        color: #230134;
        line-height: 1.5;
      }
    }
  }
}
@media (max-width: 900px) {
  .cards {
    grid-template-columns: repeat(2, 1fr) !important;
  }
}
@media (max-width: 768px) {
  .program {
    min-height: auto;
    scroll-margin-top: 190px;
    padding: 60px 20px;
  }

  .container {
    .cards {
      display: flex !important;
      flex-direction: column;
      gap: 20px;
    }

    .card {
      padding: 30px 20px;
    }

    .title {
      h1 {
        font-size: 35px;
      }
    }
  }
}
</style>
