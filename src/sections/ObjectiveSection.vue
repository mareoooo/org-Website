<template>
  <section class="values" id="objectives">
    <div class="container">
      <div class="title">
        <h1>Objectives</h1>
      </div>
      <div class="cards">
        <div class="card">
          <p>To promote BSIT student's camaraderie, cooperation and unity</p>
        </div>
        <div class="card">
          <p>
            To support and conduct outreach and information activities to increase public awareness
            regarding systems analysis and technology.
          </p>
        </div>
        <div class="card">
          <p>To support Centralian activities in and out of the university.</p>
        </div>
        <div class="card">
          <p>To be the Officials of the Bachelor of Science in Information Technology students.</p>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.values {
  width: 100%;
  min-height: 60vh;
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

    h1 {
      color: #f5a623;
      font-size: 45px;
      margin: 10px;
    }
  }

  .cards {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 20px;

    .card {
      background-color: #fcfbfc;
      padding: 20px 10px;
      text-align: center;
      border-radius: 10px;

      p {
        color: #1c0541d4;
        line-height: 1.5;
      }
    }
  }
}
@media (max-width: 900px) {
  .cards {
    grid-template-columns: repeat(1, 1fr) !important;
  }
}
@media (max-width: 768px) {
  .values {
    scroll-margin-top: 190px;
    padding: 60px 20px;
  }

  .container {
    .title {
      h1 {
        font-size: 35px;
      }
    }

    .cards {
      display: flex !important;
      flex-direction: column;
    }
  }
}
</style>
