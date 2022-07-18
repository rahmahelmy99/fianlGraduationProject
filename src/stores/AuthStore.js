import { defineStore } from 'pinia'
import jwt_decode from "jwt-decode";

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
                        'Accept': 'application/json',
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(
                        {
                            email: email,
                            password: password
                        })
                }).then(r => r.json())
                .then(data => {
                    this.token = data.access
                    console.log("received decoded data", jwt_decode(this.token))
                    localStorage.setItem('token', this.token);
                    this.isAuth = true
                    return data.access
                });
            return response
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