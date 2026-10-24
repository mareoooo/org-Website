<template>
  <section class="officers" id="executive">
    <div class="container">
      <div class="title">
        <p>Leading With Passion and Purpose</p>
        <h1>ITSO Officers</h1>
      </div>
      <h2 class="department">Executive Board</h2>
      <div class="people">
        <div class="person">
          <h3>Angela Nicole Gorriceta</h3>
          <div class="image"><img src="@/assets/image/people/Gorriceta.jpg" alt="" /></div>
          <p>President</p>
          <h2>4th Year BSIT</h2>
        </div>
        <div class="person">
          <h3>Cherryl Marie Alagos</h3>
          <div class="image"><img src="@/assets/image/people/Alagos.png" alt="" /></div>
          <p>Vice President for Internal Affairs</p>
          <h2>3rd Year BSIT</h2>
        </div>
        <div class="person">
          <h3>Jesther Sam Pareño</h3>
          <div class="image"><img src="@/assets/image/people/Sam.png" alt="" /></div>
          <p>Vice President for External Affairs</p>
          <h2>3rd Year BSIT</h2>
        </div>
        <div class="person">
          <h3>Alyssa Marie Gonzaludo</h3>
          <div class="image"><img src="@/assets/image/people/Alyssa.png" alt="" /></div>
          <p>Secretary</p>
          <h2>3rd Year BSIT</h2>
        </div>
        <div class="person">
          <h3>Regine Campo</h3>
          <div class="image"><img src="@/assets/image/people/Gine.png" alt="" /></div>
          <p>Assistant Secretary</p>
          <h2>3rd Year BSIT</h2>
        </div>
        <div class="person">
          <h3>Joercyl Faith Gilos</h3>
          <div class="image"><img src="@/assets/image/people/Gilos.png" alt="" /></div>
          <p>Treasurer</p>
          <h2>3rd Year BSIT</h2>
        </div>
        <div class="person">
          <h3>Tamara Nicole Dondiego</h3>
          <div class="image"><img src="@/assets/image/people/Tamara.jpg" alt="" /></div>
          <p>Assistant Treasurer</p>
          <h2>3rd Year BSIT</h2>
        </div>
        <div class="person">
          <h3>Rhuelyn Mae Gasis</h3>
          <div class="image"><img src="@/assets/image/people/Rhue.png" alt="" /></div>
          <p>Auditor</p>
          <h2>3rd Year BSIT</h2>
        </div>
        <div class="person">
          <h3>Kelly Banog</h3>
          <div class="image"><img src="@/assets/image/people/Kelly.png" alt="" /></div>
          <p>Business Manager</p>
          <h2>3rd Year BSIT</h2>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.officers {
  max-width: 100vw;
  min-height: 90vh;
  align-items: center;
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

  .department {
    text-align: center;
    color: #ffcc80;
    font-size: 25px;
    margin-top: 40px;
    margin-bottom: 15px;
    border-bottom: 1px solid #486467;
    padding-bottom: 10px;
  }

  .people {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 15px;
    text-align: center;
    align-items: center;

    .person {
      background-color: #ffffffd4;
      padding: 20px;
      border-color: #7675d4;
      border-style: groove;
      border-radius: 8px;

      h3 {
        color: #230134;
        font-size: 18px;
        margin-bottom: 12px;
      }

      p {
        color: #7675d4;
        line-height: 1.4;
        font-size: 16px;
        margin-bottom: 4px;
      }

      h2 {
        color: #230134;
        font-size: 16px;
        font-weight: bold;
      }
      img {
        width: 100%;
        max-width: 160px;
        aspect-ratio: 3 / 4;
        object-fit: cover;
        box-shadow: 0 6px 20px rgba(229, 152, 29, 0.434);
        border-radius: 10px;
        margin-bottom: 12px;
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
  .officers {
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
      display: grid !important;
      grid-template-columns: repeat(2, 1fr);
      gap: 12px;

      .person {
        padding: 12px 8px;

        h3 {
          font-size: 14px;
        }

        img {
          max-width: 120px;
        }

        p {
          font-size: 13px;
        }

        h2 {
          font-size: 13px;
        }
      }
    }
  }
}
</style>
