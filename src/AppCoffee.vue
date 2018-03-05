<!--<template>
  <div id="app">
    <img src="./assets/logo.png">
    <h1>{{ msg }}</h1>
    <h2>Essential Links</h2>
    <ul>
      <li><a href="https://vuejs.org" target="_blank">Core Docs</a></li>
      <li><a href="https://forum.vuejs.org" target="_blank">Forum</a></li>
      <li><a href="https://chat.vuejs.org" target="_blank">Community Chat</a></li>
      <li><a href="https://twitter.com/vuejs" target="_blank">Twitter</a></li>
    </ul>
    <h2>Ecosystem</h2>
    <ul>
      <li><a href="http://router.vuejs.org/" target="_blank">vue-router</a></li>
      <li><a href="http://vuex.vuejs.org/" target="_blank">vuex</a></li>
      <li><a href="http://vue-loader.vuejs.org/" target="_blank">vue-loader</a></li>
      <li><a href="https://github.com/vuejs/awesome-vue" target="_blank">awesome-vue</a></li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script> -->

<template>
  <div id="app">
    <img src="./assets/logo.png">
    <h1>{{ msg }}</h1> <!-- line 73, champ text -->
    <div>
      <h4>
        Hide switch off Coffee Machines
        <toggle-button :value="hideOffMachines" @change="hideOffMachines = !hideOffMachines"/> <!--value - state of the object line 72 @change is an event to change status-->
      </h4>
    </div>
    <hr>
    <ul>
      <!-- V-if peut contenir une règle avec un opérateur logique ou de comparaison -->
      <!-- https://www.w3schools.com/js/js_comparisons.asp -->

      <!--Mapping an Array to Elements with v-for - machines = source data array, machine = alias for array element being iterated-->
      <!-- Add a key attribute with unique value say “These two elements are completely separate - don’t re-use them.” -->
      <Machine v-for="machine in machines"
               :key="machine.id"
               v-bind:test="machine"
               v-if="!hideOffMachines || machine.isOn"> <!-- conditional block v-if directive-->
      </Machine>
    </ul>

    <!-- Formulaire d'ajout de machine -->
    <!--@submit.prevent would call the method you want it to and NOT submit the form vs @click would do the action you've intended it to AND still submit the form.-->
    <!-- v-model : 2 way data binding in for input -->
    <form @submit.prevent="addMachine" class="form">
      <input type="text" placeholder="Coffee Machine name" v-model="buffer.name">
      <select name="status" v-model="buffer.isOn">
        <option v-bind:value="true">ON</option>
        <option v-bind:value="false">OFF</option>
      </select>
      <input type="submit" value="Ajouter">
    </form>
  </div>
</template>

<script>
  export default {
    name: 'app',
    data () { // egal data function()//
      return {
        // Par défault, on affiche toutes les machines
        hideOffMachines: false,
        msg: 'Coffee Machines List',
        // Cet objet nous sert de tampon avant d'ajouter un nouvel objet à "machines"
        buffer: {
          id: 3, name: 'Next machine name', isOn: true
        },
        machines: [
          { id: 1, name: 'Machine 1', isOn: true },
          { id: 2, name: 'Machine 2', isOn: false },
          { id: 3, name: 'Machine 3', isOn: true }
        ]
      }
    },
    // define methods under the `methods` object//
    methods: {
      // Pousse un nouvel objet dans la collection machines
      addMachine: function(e) {
        this.buffer.id += 1
        this.machines.push({ id: this.buffer.id,
          name: this.buffer.name,
          isOn: this.buffer.isOn
        });
      }
    }
  }
</script>-->

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
