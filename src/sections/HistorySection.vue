<template>
  <section class="history" id="history">
    <div class="container">
      <div class="title">
        <p>OUR STORY</p>
        <h1>History of ITSO</h1>
      </div>
      <div class="cards">
        <div class="card">
          <p>
            The Information Technology Student Organization (ITSO) was founded with a mission
            dedicated to charitable, scientific, and educational endeavors among BSIT students in
            the College of Computer Studies. It fosters unity, transparency, collaboration, and
            coordination within the CPU Community and its recognized organizations.
            <br />
            <br />
            ITSO aims to create a conducive study environment and encourages holistic learning and
            personal growth beyond academics. Through various outreach activities, members engage in
            idea sharing and collaboration, enhancing academic pursuits and cultivating
            interpersonal skills. These initiatives promote personal development and a sense of
            community among members, empowering them to contribute meaningfully to their educational
            journey and build a stronger, more interconnected community within the College of
            Computer Studies and beyond.
            <br />
            <br />
            Through the years, ITSO has been continuously serving its people under any
            circumstances, adapting to changes and challenges with resilience and dedication. The
            organization's unwavering commitment to its mission has fostered a supportive and
            dynamic environment, enabling students to thrive academically and personally. ITSO's
            efforts have not only enriched the lives of its student members but also strengthened
            the bonds within the CPU Community, creating a legacy of unity and excellence that
            continues to inspire future generations.
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.history {
  width: 100%;
  min-height: 80vh;
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
    gap: 20px;

    .card {
      background-color: #f6f3f6;
      padding: 40px 20px;
      text-align: center;
      border-color: #4a3a5c;
      border-style: groove;
      border-radius: 10px;

      p {
        color: #230134;
        line-height: 1.5;
        text-align: justify;
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
  .history {
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
