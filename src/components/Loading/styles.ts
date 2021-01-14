import styled from 'styled-components'

export const Wrapper = styled.main`
  .st1,
  .st11 {
    fill: #ffd400;
  }
  .st2 {
    fill: #ffb000;
  }
  .st3 {
    fill: #33363a;
  }
  .st4 {
    fill: #fff800;
  }
  .st5 {
    fill: #ff1a1a;
  }
  .st6 {
    fill: #d61d1d;
  }
  .st7 {
    fill: #6d5c4d;
  }
  .st8 {
    fill: #ffffff;
  }
  .st9,
  .st91 {
    fill: #f7931e;
  }

  #cuerpo {
    animation: rubberBand 1.5s linear infinite;
    transform-origin: center center;
  }

  #cachete-rojo-izq {
    animation: rubberBand 1.5s linear infinite;
    transform-origin: center center;
  }

  #cachete-rojo-der {
    animation: rubberBand 1.5s linear 0.3s infinite;
    transform-origin: center center;
  }

  @keyframes rubberBand {
    from {
      transform: scale3d(1, 1, 1);
    }

    30% {
      transform: scale3d(1.05, 0.9, 1);
    }

    40% {
      transform: scale3d(1, 1, 1);
    }

    50% {
      transform: scale3d(1.05, 0.95, 1);
    }

    65% {
      transform: scale3d(1, 1, 1);
    }

    75% {
      transform: scale3d(1.05, 0.9, 1);
    }

    to {
      transform: scale3d(1, 1, 1);
    }
  }

  #oreja-izq {
    animation: orejitas 0.5s ease-in-out alternate infinite;

    transform-origin: center bottom;
  }

  #oreja-der {
    animation: orejitas 0.5s ease-in-out alternate 0.2s infinite;

    transform-origin: center bottom;
  }

  @keyframes orejitas {
    0% {
      transform: rotateX(7deg);
    }
    100% {
      transform: rotateX(50deg);
    }
  }

  #patita-izq {
    animation: patitas 0.4s ease-in-out alternate 0.1s infinite;
  }

  #patita-der {
    animation: patitas 0.3s ease-in-out alternate infinite;
  }

  @keyframes patitas {
    0% {
      transform: translateY(-5px);
    }

    100% {
      transform: translateY(-8px);
    }
  }

  #iris-derecho,
  #iris-izquierdo {
    animation: iris 4.4s ease-in-out alternate infinite;
  }

  @keyframes iris {
    0% {
      transform: translateX(3px);
    }

    100% {
      transform: translateX(0px);
    }
  }

  #nariz {
    animation: nariz 1s linear alternate infinite;
    transform-origin: center bottom;
  }

  @keyframes nariz {
    0% {
      transform: scale(0.9);
      transform: rotate(5deg);
    }

    100% {
      transform: scale(1);
      transform: rotate(-5deg);
    }
  }

  #cola {
    animation: nariz 0.5s ease-in-out alternate infinite;
    transform-origin: center bottom;
  }

  #rayos .st91 {
    animation: rayitos 2.5s ease-in-out infinite;
    transform-origin: center bottom;
  }

  #rayos .st9 {
    animation: rayitos 3s ease-in-out 0.2s infinite;
    transform-origin: center bottom;
  }

  #rayos .st11 {
    animation: rayitos 3s ease-in-out 0.4s infinite;
    transform-origin: center bottom;
  }

  #rayos .st1 {
    animation: rayitos 3s ease-in-out 0.8s infinite;
    transform-origin: center bottom;
  }

  #rayos .st2 {
    animation: rayitos 1s ease-in-out alternate 0.9s infinite;
    transform-origin: center bottom;
  }

  @keyframes rayitos {
    from,
    11.1%,
    to {
      -webkit-transform: none;
      transform: none;
      transform: translateY(-10px);
      transform: scale(10px);
    }

    22.2% {
      -webkit-transform: skewX(-12.5deg) skewY(-12.5deg);
      transform: skewX(-12.5deg) skewY(-12.5deg);
    }

    33.3% {
      -webkit-transform: skewX(6.25deg) skewY(6.25deg);
      transform: skewX(6.25deg) skewY(6.25deg);
    }

    44.4% {
      -webkit-transform: skewX(-3.125deg) skewY(-3.125deg);
      transform: skewX(-3.125deg) skewY(-3.125deg);
    }

    55.5% {
      -webkit-transform: skewX(1.5625deg) skewY(1.5625deg);
      transform: skewX(1.5625deg) skewY(1.5625deg);
    }

    66.6% {
      -webkit-transform: skewX(-0.78125deg) skewY(-0.78125deg);
      transform: skewX(-0.78125deg) skewY(-0.78125deg);
      transform: translateY(-60px);
    }

    77.7% {
      -webkit-transform: skewX(0.390625deg) skewY(0.390625deg);
      transform: skewX(0.390625deg) skewY(0.390625deg);
    }

    88.8% {
      -webkit-transform: skewX(-0.1953125deg) skewY(-0.1953125deg);
      transform: skewX(-0.1953125deg) skewY(-0.1953125deg);
      transform: translateY(-80px);
      opacity: 0;
    }
  }
`
