import DashboardAdmin from "@/components/admin/DashboardAdmin.vue";
import { useUserStore } from "@/stores/user";


import HomeAdminView from "@/views/admin/HomeAdminView.vue";
import LoginView from "@/views/shared/LoginView.vue";
import RegisterView from "@/views/shared/RegisterView.vue";
import HomeUserView from "@/views/user/HomeUserView.vue";
import { createRouter, createWebHistory, useRouter } from "vue-router";

const routes = [
    { path: '/', name:"HomeUser", component: HomeUserView },
    { path: '/admin', component: HomeAdminView,
       beforeEnter: (to, from) => {
        const auth = JSON.parse(sessionStorage.getItem("user"));
        const role = auth.state.role;
        const name = auth.state.name;      
        if(role != "admin") {
          useRouter().push("/")
        }

        if(!name && !role) {
          useRouter().push("/login")
        }
       }
      ,children: [
      {
        path: 'dashboard', component: DashboardAdmin
      }
    ]},
    { path: '/login', component: LoginView },
    { path: '/register', component: RegisterView },
  ]
  
  const router = createRouter({
    history: createWebHistory(),
    routes,
  })




export default router;