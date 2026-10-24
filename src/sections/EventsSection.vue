<template>
  <section class="events" id="events">
    <div class="container">
      <div class="title">
        <p>MARK YOUR CALENDAR</p>
        <h1>Upcoming Events</h1>
      </div>
      <div class="cards">
        <div class="card">
          <p>Nov 12, 2026</p>
          <h2>IT Week Opening</h2>
          <h3>TBA</h3>
          <p>Kick-off program with games, booths, and a keynote talk.</p>
        </div>
        <div class="card">
          <p>Nov 14, 2026</p>
          <h2>Code Wars</h2>
          <h3>Computer Laboratory</h3>
          <p>A programming competition for all year levels.</p>
        </div>
        <div class="card">
          <p>Nov 18, 2026</p>
          <h2>IoT Workshop</h2>
          <h3>AVR</h3>
          <p>Hands-on build of a sensor-based smart device.</p>
        </div>
        <div class="card">
          <p>Dec 05, 2026</p>
          <h2>Tech Talk</h2>
          <h3>Online (Zoom)</h3>
          <p>Industry speakers share career paths and tips for graduates.</p>
        </div>
        <div class="card">
          <p>Dec 15, 2026</p>
          <h2>ITSO Christmas Party</h2>
          <h3>TBA</h3>
          <p>A year-end celebration for all members.</p>
        </div>
        <div class="card">
          <p>Jan 20, 2027</p>
          <h2>Hackathon 2027</h2>
          <h3>Innovation Hub</h3>
          <p>A 24-hour build challenge to solve campus problems.</p>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.events {
  width: 100%;
  min-height: 100vh;
  padding: 70px 50px;
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
    grid-template-columns: repeat(3, 1fr);
    gap: 20px;

    .card {
      background-color: #f7f4f7;
      padding: 30px 20px;
      border-color: #420d48;
      border-style: groove;
      border-radius: 10px;

      h2 {
        color: #f5a623;
        font-size: 24px;
        margin: 10px 0 5px;
      }

      h3 {
        color: #0b011b;
        font-size: 16px;
        margin-bottom: 10px;
      }

      p {
        color: #420d48;
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
  .events {
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
