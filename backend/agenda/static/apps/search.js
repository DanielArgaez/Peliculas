new Vue({
  el: 'app',
  delimiters: ['{$', '$}'],

  //
  mounted() {
    var self = this;
    // cargamos lista de personas
    axios.get('http://127.0.0.1:8000/api/personas/list/')
      .then(function (response) {
        self.listaPersonas = response.data;
      })
      .catch(function (error) {
        console.log(error);
      });
  },
  methods: {
    buscar_persona: function(kword){
      var self = this;
      axios.get('http://127.0.0.1:8000/api/personas/search/' + kword + '/')
        .then(function (response) {
          self.listaPersonas = response.data;
        })
        .catch(function (error) {
          console.log(error);
        });
    },
  },
  watch: {
    kword: function (val) {
      var self = this;
      self.buscar_persona(val)
    },
  },
  data: {
    listaPersonas:[],
    kword:'',
  },
})
