<template>
  <main class="main">
    <div class="main-hero">
      <img src="/hero-bg.png" alt="" class="main-hero__bg">
        <div class="container">
          
          <div class="main-hero__content">
            <div class="main-hero__group">
              <img src="/avatar.png" alt="" class="main-hero__avatar">

              <h2>Tech stack</h2>
              <p>HTML, CSS (SCSS), JS <br>
                Vue, Nuxt, Axios, PWA <br>
                GSAP, Three.js, YoptaScript.js <br>
                GIT, Github, Gitlab, Bitbucket</p>
            </div>
            <div class="main-hero__group">
              <h1>Oleksii Kryvosheienko</h1>
              <h1 class="opacity">dev</h1>

              <svg width="526" height="76" viewBox="0 0 526 76" fill="none" xmlns="http://www.w3.org/2000/svg">
                <line x1="0.0707107" y1="0.505025" x2="525.071" y2="75.505" stroke="white"/>
              </svg>

              <h3>About me</h3>
              <p>Hello! My name is Alexey. I am a front-end developer. My developer experience is about 1.5 years. I have worked on several projects which you will see below. but for the last six months I have been working in a company. The most important thing for me is never to be satisfied with what has already been achieved, so I always learn something new, improve my skills. Also I'm a student on the specialization Software Engineering. I'm Ukrainian, but now I'm staying in Lithuania</p>
            </div>
          </div>

        </div>
    </div>

    <div class="container other">
      <h2>Work experience</h2>

      <div class="item">
        <h3>2022 - now</h3>
        <div class="item-group">
          <h3>Front end dev</h3>
          <p>TheFirstTheLast / Kyiv</p>
          <p>Making front end of websites, animations etc.</p>
        </div>
      </div>
      <div class="item">
        <h3>2020 - 2022</h3>
        <div class="item-group">
          <h3>Front end dev</h3>
          <p>Freelance</p>
          <p>Making front end of websites, animations etc.</p>
        </div>
      </div>
      
      <h2>Education</h2>

      <div class="item">
        <h3>2021 - now</h3>
        <div class="item-group">
          <h3>Software engineering</h3>
          <p>KNUTE</p>
        </div>
      </div>
      <div class="item">
        <h3>2020 - 2020</h3>
        <div class="item-group">
          <h3>JS course</h3>
          <p>Rolling Scopes School</p>
        </div>
      </div>
    </div>

    <footer class="footer">
      <a href="#" class="p underline">LinkedIn</a>
      <a href="#" class="p underline">Github</a>
      <a href="#" class="p underline">Gitlab</a>
      <a href="#" class="p underline">Bitbucket</a>
      <a href="#" class="p underline">Telegram</a>
      <a href="mailto:alexeykrix@krixmail.dev" class="p underline">alexeykrix@krixmail.dev</a>
    </footer>
  </main>
</template>

<script>
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

export default {
  name: 'IndexPage',
  data() {
    return {

    }
  },
  methods: {

  },
  mounted() {
    gsap.registerPlugin(ScrollTrigger)

    gsap.to('svg', {
      rotate: '-25deg',
      scrollTrigger: {
        trigger: 'svg',
        start: 'top 10%',
        end: '100vh',
        scrub: 1,
      }
    })
    gsap.to('.main-hero__bg', {
      y: '50px',
      scale: 1.1,
      scrollTrigger: {
        trigger: '.main-hero__bg',
        start: 'bottom 90%',
        scrub: 1,
      }
    })

    document.querySelectorAll('h1').forEach(el => {
      gsap.to(el, {
        y: '100px',
        scrollTrigger: {
          trigger: el,
          start: 'top 10%',
          end: '100vh',
          scrub: 1,
        }
      })
    })

    document.querySelectorAll('.item>h3').forEach(el => {
      gsap.from(el, {
        x: '-100px',
        opacity: 0,
        scrollTrigger: {
          trigger: el,
          start: 'top 90%',
          end: 'bottom 90%',
          scrub: 1,
        }
      })
    })
    document.querySelectorAll('.item-group>*').forEach(el => {
      gsap.from(el, {
        y: '30px',
        opacity: 0,
        scrollTrigger: {
          trigger: el,
          start: 'top 90%',
          end: 'bottom 90%',
          scrub: 1,
        }
      })
    })

  },
}
</script>

<style lang="scss" scoped>
.main{
  padding-top: 0;
  display: block;
  background: linear-gradient(333.6deg, #0B0B0B 2.5%, #212121 95.15%);

  &-hero {
    position: relative;
    height: 100vh;
    display: grid;
    place-items: center;
    overflow: hidden;
    .container {
      mix-blend-mode: difference;
    }
    &__bg {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
    }
    &__content {
      z-index: 1;
      position: relative;
      display: grid;
      grid-template-columns: 233px 548px;
      justify-content: space-between;
      .opacity {
        position: absolute;
        top: 0;
        right: 0;
        opacity: 0.5;
      }
      h2 {
        margin-top: 44px;
        margin-bottom: 20px;
      }

      svg {
        margin-top: 113px;
        margin-bottom: 46px;
      }

      h3 {
        margin-bottom: 27px;
      }
    }
    &__group {
      position: relative;
    }
    &__avatar {
      width: 100%;
      object-fit: cover;
      filter: contrast(0.8) brightness(1.3);
    }
  }

  .other {
    padding-bottom: 189px;
    h2 {
      margin-top: 70px;
      margin-bottom: 66px;
    }

    .item {
      display: flex;
      justify-content: space-between;
      border-top: 1px solid #fff;
      padding-top: 30px;
      margin-bottom: 30px;

      &-group {
        width: 300px;
        h3 {
          margin-bottom: 16px;
        }
        p:not(:last-child) {
          margin-bottom: 10px;
        }
      }
    }
  }

  .footer {
    display: flex;
    gap: 30px;
    justify-content: center;
    padding-bottom: 35px;
  }
}
</style>