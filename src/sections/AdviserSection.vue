<template>
  <section class="advisers" id="advisers">
    <div class="container">
      <div class="title">
        <p>Guided by Experience</p>
        <h1>Advisers</h1>
      </div>
      <div class="people">
        <div class="person">
          <h3>Faculty Adviser</h3>
          <div class="image"><img src="@/assets/image/people/oja.jpg" alt="" /></div>
          <p>ITSO Adviser</p>
          <h2>Rose Leah Joy A. Ojacastro, MSCS</h2>
        </div>
        <div class="person">
          <h3>College Dean</h3>
          <div class="image"><img src="@/assets/image/people/dean.png" alt="" /></div>
          <p>College of Computer Studies</p>
          <h2>Ma. Christina A. Quijano, MSCS</h2>
        </div>
        <div class="person">
          <h3>Department Head</h3>
          <div class="image"><img src="@/assets/image/people/balontong.jpg" alt="" /></div>
          <p>Information Technology Department</p>
          <h2>Rea P. Balontong, MBA</h2>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.advisers {
  max-width: 100vw;
  min-height: 60vh;
  scroll-margin-top: 140px;
  background-color: #230134;
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
    grid-template-columns: repeat(3, 1fr);
    gap: 15px;
    text-align: center;
    align-items: stretch;

    .person {
      display: flex;
      align-items: center;
      flex-direction: column;
      border-color: #ffcc80;
      border-style: groove;
      padding: 20px;
      border-radius: 8px;
      background-color: #f8f7f9d4;

      h3 {
        color: #2f043bd4;
        margin: 0 0 10px;
      }

      p {
        color: #230134;
        margin-top: auto;
        line-height: 1.4;
      }

      h2 {
        color: #2f043bd4;
        font-size: 18px;
        margin-top: 10px;
      }
      img {
        width: 100%;
        max-width: 280px;
        object-fit: cover;
        box-shadow: 0 6px 20px rgba(229, 152, 29, 0.434);
        border-radius: 10px;
        margin-bottom: 15px;
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
  .advisers {
    scroll-margin-top: 190px;
    padding: 60px 20px;
  }

  .container {
    .title {
      h1 {
        font-size: 35px;
      }
    }

    .people {
      display: flex !important;
      flex-direction: column;
    }
  }
}
</style>
