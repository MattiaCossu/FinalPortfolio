<template>
  <div>
    <div class="grid grid-cols-2 place-content-center my-height">
      <div class="flex flex-col my-12">
        <div class="self-center">
          <div
            class="text-[#e5e9f0] text-left relative"
            style="
              font:
                400 18px 'Fira Code',
                sans-serif;
            "
          >
            Hi all. I am
          </div>
          <div
            class="text-[#e5e9f0] text-left relative py-4"
            style="
              font:
                400 62px 'Fira Code',
                sans-serif;
            "
          >
            Mattia Cossu
          </div>
          <div
            class="text-[#4d5bce] text-left relative py-4"
            style="
              font:
                400 32px 'Fira Code',
                sans-serif;
            "
          >
            &gt; CyberSecurity Student
          </div>
          <div
            class="text-[#607b96] text-left relative py-4"
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
      <div class="p-4">
        <base-hascii class="text-[#4d5bce] w-full" />
      </div>
    </div>
  </div>
</template>

<style scoped>
  .my-height {
    height: calc(100vh - 128px);
  }
</style>
