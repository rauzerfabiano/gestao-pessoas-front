template>
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
  data() {
    return {
      pessoa: null,
    };
  },
  methods: {
    fetchPessoa() {
      axios.get('/api/pessoas/' + this.$route.params.codigo).then((response) => {
        this.pessoa = response.data;
      });
    },
    updatePessoa() {
      axios.put('/api/pessoas/' + this.$route.params.codigo, this.pessoa).then(() => {
        this.$router.push('/');
      });
    },
  },
  created() {
    this.fetchPessoa();
  },
};
</script>