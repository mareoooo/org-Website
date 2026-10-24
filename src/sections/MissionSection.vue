<template>
  <section class="mission" id="mission">
    <div class="container">
      <div class="title">
        <p>WHY WE EXIST</p>
        <h1>Mission and Vision</h1>
      </div>
      <div class="cards">
        <div class="card">
          <h3>Mission</h3>
          <p>
            The Information Technology Student Organization aims to provide valuable educational and
            networking opportunities for Information Technology students. We aim to promote academic
            excellence, career development, and personal growth while fostering a sense of community
            among our members.
          </p>
        </div>
        <div class="card">
          <h3>Vision</h3>
          <p>
            Our vision is to be the leading organization for Information Technology students,
            recognized for our commitment to academic and professional development, innovation, and
            collaboration. We strive to empower our co-katech with the knowledge, skills, and
            resources necessary to succeed in the rapidly evolving field of IT, and to make a
            positive impact on the world through technology
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.mission {
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

  .cards {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 15px;

    .card {
      background-color: #faf9fbd4;
      padding: 30px 20px;
      border-color: #1e1e2f;
      border-style: groove;
      border-radius: 8px;

      h3 {
        color: #1e1e2f;
        font-size: 25px;
        margin: 0 0 10px;
        text-align: center;
      }

      p {
        color: #1c0541d4;
        line-height: 1.6;
        text-align: justify;
        font-size: 15px;
        text-justify: inter-word;
      }
    }
  }
}

@media (max-width: 768px) {
  .mission {
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
      display: flex;
      grid-template-columns: 1fr;
      flex-direction: column;
      gap: 15px;
    }
  }
}
</style>
