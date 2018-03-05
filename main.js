import Vue from 'vue'
import App from './App.vue'

import ToggleButton from 'vue-js-toggle-button'
Vue.use(ToggleButton);

// Si le template devient complexe, cette facon de créer un composant devient limitée !
//register a global component, can be used in an instance’s template as a custom element//
//Data can be passed down to child components using props.//
Vue.component('Machine', {
  template: '<li :class="{ active: test.isOn }">{{test.name}}<toggle-button :value="test.isOn" @change="test.isOn = !test.isOn"/></li>',
  props: ['test']
})
// create a root instance//
new Vue({
  el: '#app',
  render: h => h(App)
})
