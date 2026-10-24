<template>
  <section class="contact" id="contact">
    <div class="container">
      <div class="title">
        <p>Connect</p>
        <h1>Contact Us</h1>
        <h2>Questions, partnerships, or want to join? Reach out to us.</h2>
      </div>
      <div class="cards">
        <div class="card">
          <h3>Email</h3>
          <div class="image"><img src="@/assets/image/icon/envelope.svg" alt="" /></div>
          <p>cpu.itso@cpu.edu.ph</p>
        </div>
        <div class="card">
          <h3>Facebook</h3>
          <div class="image"><img src="@/assets/image/icon/facebook.svg" alt="" /></div>
          <p>https://www.facebook.com/InfoTechStudentOrg</p>
        </div>
        <div class="card">
          <h3>Instagram</h3>
          <div class="image"><img src="@/assets/image/icon/instagram.svg" alt="" /></div>
          <p>@ITSO20262027</p>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.contact {
  width: 100%;
  min-height: 70vh;
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
      color: #e1e7e8;
      font-weight: bold;
    }

    h1 {
      color: #f5a623;
      font-size: 45px;
      margin: 10px;
    }

    h2 {
      color: #a1a7a8;
      font-size: 17px;
    }
  }

  .cards {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 20px;

    .card {
      background-color: #fafafa;
      padding: 40px 20px;
      text-align: center;
      border-color: #53105b;
      border-style: groove;
      border-radius: 10px;

      h3 {
        color: #f5a623;
        font-size: 22px;
        margin-bottom: 10px;
      }

      p {
        color: #420d48;
        font-size: 25px;
        line-height: 1.5;
      }

      img {
        width: 10%;
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
  .contact {
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
