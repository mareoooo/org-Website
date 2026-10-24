<template>
  <section class="faq" id="faq">
    <div class="container">
      <div class="title">
        <p>GOT QUESTIONS?</p>
        <h1>Frequently Asked Questions</h1>
      </div>
      <div class="people">
        <div class="person">
          <h3>How do I join ITSO?</h3>
          <p>Visit the ITSO office or message our page during the membership drive.</p>
        </div>
        <div class="person">
          <h3>Is there a membership fee?</h3>
          <p>Yes, a small yearly fee that covers shirts, events, and activities.</p>
        </div>
        <div class="person">
          <h3>Who can become a member?</h3>
          <p>Any enrolled student of the college who is interested in technology.</p>
        </div>
        <div class="person">
          <h3>Can we partner with ITSO?</h3>
          <p>Absolutely. Send us an email with your proposal.</p>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.faq {
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
    gap: 15px;

    .person {
      background-color: #f5f2f6d4;
      padding: 20px;
      border-radius: 8px;

      h3 {
        color: #130227;
        margin: 0 0 10px;
      }

      p {
        color: #180124f7;
        line-height: 1.4;
      }
    }
  }
}

@media (max-width: 768px) {
  .faq {
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
