<script lang="ts" setup>
  const props = defineProps<{
    isDesktop: boolean
  }>()
</script>

<template>
  <div>
    <div class="flex justify-center gap-12 my-height backdrop-opacity-25">
      <div class="flex flex-col justify-center">
        <div class="self-center">
          <div
            class="text-[#e5e9f0] text-left relative"
            style="
              font:
                400 16px 'Fira Code',
                sans-serif;
            "
          >
            Hi all. I am
          </div>
          <div
            class="text-6xl py-4 font-bold from-[#4d5bce] via-[#43a0d9] to-[#43d9ad] bg-gradient-to-r bg-clip-text text-transparent"
            style="
              font:
                400 'Fira Code',
                sans-serif;
            "
          >
            Mattia Cossu
          </div>
          <div
            class="text-[#e5e9f0] text-left relative py-4"
            style="
              font:
                400 32px 'Fira Code',
                sans-serif;
            "
          >
            &gt; CyberSecurity Student
          </div>
          <div
            class="text-[#607b96] text-left relative pt-4"
            style="
              font:
                400 16px 'Fira Code',
                sans-serif;
            "
          >
            // welcome to my portfolio
          </div>
          <div
            class="text-[#607b96] text-left relative py-4 mb-2"
            style="
              font:
                400 16px 'Fira Code',
                sans-serif;
            "
          >
            // you can also see my projects on my Github page
          </div>
          <div
            class="text-left relative"
            style="
              font:
                500 16px 'Fira Code',
                sans-serif;
            "
          >
            <span class="text-[#4d5bce]">const </span>
            <span class="text-[#43D9AD]">githubLink</span>
            <span class="text-[#e5e9f0]"> = </span>
            <span class="text-[#E99287]">
              “
              <a class="text-[#E99287]" href="https://github.com/MattiaCossu">
                https://github.com/MattiaCossu </a
              >”
            </span>
          </div>
        </div>
      </div>
      <div class="background-style1 -z-50"></div>
      <div class="background-style2 -z-50"></div>
      <div v-if="props.isDesktop" class="flex flex-col justify-center">
        <base-hascii
          class="text-2xl p-4 text-center font-bold from-[#4d5bce] via-[#43a0d9] to-[#43d9ad] bg-gradient-to-r bg-clip-text text-transparent w-full"
        />
      </div>
    </div>
  </div>
</template>

<style scoped>
  .my-height {
    height: calc(100vh - 176px);
  }

  .background-style1,
  .background-style2 {
    width: 454px;
    height: 492px;
    position: fixed;
    overflow: hidden;
    top: 50%;
    left: 50%;
    transform-origin: top left;
    opacity: 0.4;
    box-shadow: 174px 174px 174px;
    filter: blur(174px);
    z-index: -1; /* Spostiamo gli sfondi dietro agli altri elementi */
  }

  .background-style1 {
    background: #4d5bce;
    transform: translate(-50%, -50%) rotate(13.51deg);
  }

  .background-style2 {
    background: #43d9ad;
    transform: translate(-50%, -10%) rotate(-94.3deg);
  }

  @media (max-width: 768px) {
    .background-style1,
    .background-style2 {
      display: block;
      width: 354px;
      height: 392px;
    }

    .background-style2 {
      transform: translate(-50%, -20%) rotate(-94.3deg) scale(0.5);
    }

    .background-style1 {
      transform: translate(-50%, -10%) rotate(13.51deg) scale(0.5);
    }
  }
</style>
