<template>
  <div class="container">
    <input type="checkbox">
    <div class="video">
      <video src="https://www.robmillsarchitects.com/files/land/city/RMA_Web_land_city_1.mp4"
      loop muted autoplay playsinline></video>
    </div>
    <div class="text">
      <span data-text="Watch the video"></span>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.container {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  .video {
    height: 100vh;
    overflow: hidden;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-left: 15px;
    clip-path: circle(15px at left);
    transition: clip-path .4s ease;
    video {
      position: fixed;
      background: #c4cbde;
      top: 50%;
      left: 50%;
      min-width: 100%;
      min-height: 100%;
      width: auto;
      height: auto;
      transform: translate(-50%, -50%);
    }
  }
  .text {
    position: relative;
    font-weight: 600;
    opacity: 1;
    transition: opacity .3s ease .2s;
    &::before,
    &::after {
      content:"";
      position: absolute;
      bottom: 0;
      left: -1px;
      right: 25px;
      height: 0;
    }
    &::before {
      box-shadow: 26px 0 0 1px #1F242D;
      right: 25px, 100%;
      opacity: 0;
      transition: right .5s ease-in, opacity .1s linear;
    }
    &::after {
      box-shadow: 26px 0 0 1px #ffffff;
      clip-path: circle(15px at left);
      transition: clip-path .4s ease;
    }
    > span {
      &::before,
      &::after {
        content: attr(data-text);
        padding-left: 26px;
      }
      &::before {
        color: #1F242D;
      }
      &::after {
        color: #ffffff;
        clip-path: circle(15px at left);
        transition: clip-path .4s ease;
        position: absolute;
        left: 0;
      }
    }
  }
  input {
    width: 220px;
    height: 40px;
    margin: auto;
    position: absolute;
    left: 0;
    right: 0;
    border-radius: 40px;
    outline: none;
    z-index: 2;
    appearance: none;
    cursor: pointer;
    &:focus {
      outline: 0;
    }
    &:hover {
      ~ .video {
        clip-path: circle(70px at left);
      }
      ~ .text {
        &::before {
          right: 25px;
          opacity: 1;
        }
        &::after {
          clip-path: circle(70px at left);
        }
        > span {
          &::after {
            clip-path: circle(70px at left);
          }
        }
      }
    }
    &:checked {
      width: 100%;
      height: 100%;
      border-radius: 0;
      ~ .video {
        clip-path: circle(100vw at left);
      }
      ~ .text {
        opacity: 0;
        transition: opacity .3s ease;
        &::after {
          clip-path: circle(100vw at left);
        }
        > span {
          &::after {
            clip-path: circle(100vw at left);
          }
        }
      }
    }
  }
}
</style>
