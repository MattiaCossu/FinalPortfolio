<script setup lang="ts">
  import { ref, computed } from 'vue'
  import { marked } from 'marked'
  import prism from 'prismjs'

  // Add numbering to the Code blocks
  import 'prismjs/plugins/line-numbers/prism-line-numbers.js'
  import 'prismjs/plugins/line-numbers/prism-line-numbers.css'

  import 'prismjs/plugins/toolbar/prism-toolbar.js' // required for the following plugins
  import 'prismjs/plugins/toolbar/prism-toolbar.css' // required for the following plugins
  import 'prismjs/plugins/copy-to-clipboard/prism-copy-to-clipboard.js' // show copy button

  // This is needed if you have a conflict with other loaded CSS imports (i.e. Bulma).
  import 'prismjs/plugins/custom-class/prism-custom-class'
  prism.plugins.customClass.map({ number: 'prism-number', tag: 'prism-tag' })

  // sample markdown file
  const mdfile = '/blog_store/posts/about/whoami.md'
  const markDown = ref('')

  //marked Options => https://marked.js.org/using_advanced#options
  marked.use({
    highlight: (code: string, lang: string) => {
      if (prism.languages[lang]) {
        return prism.highlight(code, prism.languages[lang], lang)
      } else {
        return code
      }
    },
  })

  // read in the md file and apply the highlight style to the Code Block
  const getMarkdownData = async () => {
    await fetch(mdfile)
      .then((response) => response.text())
      .then((data) => (markDown.value = data))
    prism.highlightAll() // perform the highlighting of the Code Blocks
  }

  // use the finialized markdown to HTML code in the template
  const mdToHtml = computed(() => {
    const mdhtml = marked.parse(markDown.value)
    return mdhtml
  })

  // call the function to be ran
  getMarkdownData()
</script>

<template>
  <div class="w-full">
    <!-- Normal Code Blocks -->
    <!-- <div v-html="mdToHtml"></div> -->
    <!-- Add numbering to the Code Blocks -->
    <div class="child p-4" v-html="mdToHtml"></div>
  </div>
</template>

<style>
  .child > * {
    padding: 4px !important;
  }

  pre {
    margin: 0 !important;
    border: 1px solid #1e2d3d !important;
    padding: 12px !important;
  }

  .toolbar-item {
    margin: 12px !important;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6::after {
    content: '';
    display: block;
    border-bottom: 1px solid #1e2d3d;
    width: 100%;
    margin-top: 8px;
    margin-bottom: 8px;
  }

  h1,
  h2,
  h3,
  h4 {
    margin-top: 16px;
    margin-bottom: 16px;
  }

  h1 {
    font-size: 32px;
  }

  h2 {
    font-size: 24px;
  }

  h3 {
    font-size: 20px;
  }

  h4 {
    font-size: 18px;
  }

  h5 {
    font-size: 16px;
  }

  h6 {
    font-size: 14px;
  }
</style>
