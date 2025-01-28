import { defineStore } from "pinia";
import { reactive, ref } from "vue";

export const useUserStore = defineStore("user", () => {
    
    const state = reactive({
        name: "",
        role: ""
    })

    function updateName(data) {
       state.name = data.name;
       state.role = data.role;
    }

    function logout() {
        state.name = "";
        state.role = "";
    }

    return {state, updateName, logout}
},{
    persist: {
        storage: sessionStorage
    }
}
)