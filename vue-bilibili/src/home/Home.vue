<template>
  <div class="Home">
      <Home-Header></Home-Header>
      <Home-Wrapper></Home-Wrapper>
  </div>
</template>

<script>
import HomeHeader from './components/Header'
import HomeWrapper from './components/Wrapper'
export default {
  name: 'Home',
  data () {
    return {
   
    }
  },
  components: {
     HomeHeader,
     HomeWrapper 
  },
}
</script>
<style scoped>
</style>
