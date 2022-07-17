import { defineStore } from 'pinia'

const apiURL = 'http://localhost:8000/api'
export const useAuthStore = defineStore('AuthStore', {
    state: () => {
        return {
            token: '',
            isAuth: false,
        }
    },
    actions: {
        async login(email, password) {
            const response = await fetch(`${apiURL}/auth/token/`,
                {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(
                        {
                            email: email,
                            password: password
                        })
                });
            console.log("In login", response.data);
            this.token = response.data
            this.isAuth = true
            localStorage.setItem('token', response.data);
            return response.data
        },
        async signup(data) {
            const { name, email, password, age, phone, address, nat_ID, blood } = data;
            const reg = await fetch(`${apiURL}/users/create/`,
                {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(
                        {
                            name: name,
                            email: email,
                            password: password,
                            age: age,
                            phone: phone,
                            address: address,
                            nat_ID: nat_ID,
                            blood: blood,
                        })
                }).then(() => {
                    const token = this.login(email, password);
                    return token
                })
            console.log(reg);
            return reg
        },
        logout() {
            this.token = ''
            localStorage.removeItem('token');
            this.isAuth = false;
        }
    },
})