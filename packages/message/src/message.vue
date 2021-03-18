<template>
  <div>
    <h1>我是message</h1>
  </div>
</template>

<script>
  export default{
    name: 'MessageBox',
    props: {
      type: {
        type: Number,
        default: 1
      }
    },
    data () {
      return {
        speed: 5,
        easing: 'linear',
        percentNum: 0,
        totalProgress: 0,
        showSpinner: true,
        isError: false
      }
    }
  }
</script>
