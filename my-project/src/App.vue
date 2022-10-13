<script setup>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
import HelloWorld from './components/HelloWorld.vue'
import MainVue from './components/Main.vue';
import FooterVue from './components/FooterVue.vue';
import Header from './components/HeaderVue.vue';
import HeaderVue from './components/HeaderVue.vue';
import ListSchools from './components/ListSchools.vue';
</script>

<template>
  <HeaderVue></HeaderVue>
  <div>
      <div id="map"  class="w-full"></div>
  </div>
  <HelloWorld msg="Hi there"/>
  <ListSchools></ListSchools>
  <FooterVue />
</template>

