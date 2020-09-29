import Vue from 'vue';
import VueRouter from 'vue-router';
import AddStudent from '@/components/AddStudent.vue';
import GetStudents from '@/components/GetStudents.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'AddStudent',
    component: AddStudent,
  },
  {
    path: '/get-students',
    name: 'GetStudents',
    component: GetStudents,
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
