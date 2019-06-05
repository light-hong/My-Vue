<template>
  <div class="container">
    <Search/>
    <UserMain/>
  </div>
</template>
<script>
import Search from './components/Search'
import Main from './components/Main'

export default {
  data() {
    return {

    }
  },
  components: {
    Search,
    UserMain: Main,
  },
}
</script>
<style>
</style>

