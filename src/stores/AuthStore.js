import { defineStore } from 'pinia'
// import axios from 'axios';
export const useAuthStore = defineStore('AuthStore', {
    state: () => {
        return { token: '' }
    },

    actions: {
        async login(email, password) {
            const response = await this.axios.post('/auth/token/',
                {
                    email: email,
                    password: password
                });
            this.token = response.data
            localStorage.setItem('token', response.data);
            router.push('/myaccount');
        },
        async signup(data) {
            const { name, email, password, age, phone, address, nat_ID, blood } = data;
            const reg = await this.axios.post('/users/create/',
                {
                    name: name,
                    email: email,
                    password: password,
                    age: age,
                    phone: phone,
                    address: address,
                    nat_ID: nat_ID,
                    blood: blood,
                });
            this.login(email, password);
            router.push('/myaccount');

        },
    },
})