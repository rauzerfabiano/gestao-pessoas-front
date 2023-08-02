import Vue from 'vue';
import VueRouter from 'vue-router';
import PessoasList from '@/components/PessoasList.vue';
import PessoaCreate from '@/components/PessoaCreate.vue';
import PessoaEdit from '@/components/PessoaEdit.vue';

Vue.use(VueRouter);

const routes = [
  { path: '/', component: PessoasList },
  { path: '/create', component: PessoaCreate },
  { path: '/edit/:id', component: PessoaEdit },
];

export default new VueRouter({
  routes,
});