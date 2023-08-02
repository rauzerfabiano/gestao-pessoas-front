import { createRouter, createWebHistory } from 'vue-router';
import PessoasList from '@/components/PessoasList.vue';
import PessoaCreate from '@/components/PessoaCreate.vue';
import PessoaEdit from '@/components/PessoaEdit.vue';

const routes = [
  { path: '/', component: PessoasList },
  { path: '/create', component: PessoaCreate },
  { path: '/edit/:id', component: PessoaEdit },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;