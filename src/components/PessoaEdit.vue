<template>
  <form @submit.prevent="updatePessoa">
    <label>Nome: <input v-model="pessoa.nome" required /></label>
    <label>CPF: <input v-model="pessoa.cpf" required /></label>
    <label>Email: <input v-model="pessoa.email" type="email" /></label>
    <button type="submit">Atualizar</button>
  </form>
</template>

<script>
import axios from 'axios';

export default {
  name: 'editPessoas',
    components: {},
  data() {
    return {
      pessoa: null,
    };
  },
  methods: {
    fetchPessoa() {
      axios.get('/pessoas/' + this.$route.params.id).then((response) => {
        this.pessoa = response.data;
      });
    },
    updatePessoa() {
      let pessoasObjeto = {};
      pessoasObjeto.nome = this.pessoa.nome;
      pessoasObjeto.cpf = this.pessoa.cpf;
      pessoasObjeto.email = this.pessoa.email;
      pessoasObjeto.categoria = this.pessoa.categoria.codigo;
      axios.put('/pessoas/' + this.$route.params.id, pessoasObjeto).then(() => {
        this.$router.push('/');
      });
    },
  },
  mounted() {
      this.fetchPessoa();
    },
  created() {
    this.fetchPessoa();
  },
};
</script>