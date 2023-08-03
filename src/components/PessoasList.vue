<template>
    <div>
      <button @click="showCreateForm">Adicionar Pessoa</button>
      <table>
        <tr>
          <th>Nome</th>
          <th>CPF</th>
          <th>Email</th>
          <th>Categoria</th>
          <th>Editar</th>
          <th>Excluir</th>
        </tr>
        <tr v-for="pessoa in pessoas" :key="pessoa.codigo">
          <td>{{ pessoa.nome }}</td>
          <td>{{ pessoa.cpf }}</td>
          <td>{{ pessoa.email }}</td>
          <td>{{ pessoa.categoria }}</td>
          <td><button @click="editPessoa(pessoa.codigo)">Editar</button></td>
          <td><button @click="deletePessoa(pessoa.codigo)">Excluir</button></td>
        </tr>
      </table>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  
  export default {
    name: 'listPessoas',
    components: {},
    data() {
      return {
        pessoas: [],
        numeroPessoas: 0,
      };
    },
    methods: {
      fetchPessoas() {
        axios.get('/pessoas').then((response) => {
          this.pessoas = response.data.data;
          this.numeroPessoas = response.data.data.length;
        });
      },
      showCreateForm() {
        this.$router.push('/create');
      },
      editPessoa(codigo) {
        this.$router.push('/edit/' + codigo);
      },
      deletePessoa(codigo) {
        axios.delete('/pessoas/' + codigo).then(() => {
          this.fetchPessoas();
        });
      },
    },
    mounted() {
      this.fetchPessoas();
    },
    created() {
      this.fetchPessoas();
    },
  };
  </script>