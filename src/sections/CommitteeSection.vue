<template>
  <section class="committees" id="committees">
    <div class="container">
      <div class="title">
        <p>Behind Every Great Event</p>
        <h1>Committees</h1>
      </div>
      <div class="people">
        <div class="person">
          <h3>Layout Committee</h3>
          <p>
            Leads the creative visual team responsible for designing all digital and print assets,
            maintaining brand identity, and ensuring high-quality, eye-catching visual layouts
            across all organization projects and events.
          </p>
          <div class="image"><img src="@/assets/image/people/Gine.png" alt="" /></div>
          <h2>Committee Head</h2>
        </div>
        <div class="person">
          <h3>Media Committee</h3>
          <p>
            Oversees all multimedia content creation, event coverage, and digital channels, driving
            engagement through photography, videography, copy, and strategic social media
            management.
          </p>
          <div class="image"><img src="@/assets/image/people/Sam.png" alt="" /></div>
          <h2>Committee Head</h2>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.committees {
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
    grid-template-columns: repeat(2, 1fr);
    gap: 20px;

    .person {
      background-color: #f7f6f8d4;
      padding: 25px 20px;
      border-color: #7675d4;
      border-style: groove;
      border-radius: 10px;
      text-align: center;

      h3 {
        color: #1e1e2f;
        margin: 0 0 10px;
      }

      p {
        text-align: center;
        line-height: 1.6;
        font-size: 15px;
        color: #4a3a5c;
        margin-bottom: 20px;
      }

      h2 {
        color: #1c0541d4;
        font-size: 18px;
        margin-top: 10px;
      }
      img {
        width: 110px;
        aspect-ratio: 3 / 4;
        object-fit: cover;
        border-radius: 10px;
        margin-bottom: 12px;
        box-shadow: 0 6px 20px rgba(229, 152, 29, 0.434);
        border-radius: 10px;
      }
    }
  }
}

@media (max-width: 768px) {
  .committees {
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
      display: flex;
      flex-direction: column;
    }
  }
}
</style>
