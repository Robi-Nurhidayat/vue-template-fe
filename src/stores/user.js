import { defineStore } from "pinia";
import { reactive, ref } from "vue";

export const useUserStore = defineStore("user", () => {
    
    const state = reactive({
        name: "",
        role: "",
        access_token: ""
    })

    function updateName(data) {
       state.name = data.name;
       state.role = data.role;
       state.access_token = data.access_token;
    }

    function logout() {
        state.name = "";
        state.role = "";
        state.access_token = ""
    }

    return {state, updateName, logout}
},{
    persist: {
        storage: sessionStorage
    }
}
)