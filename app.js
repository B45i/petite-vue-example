import { createApp } from 'https://unpkg.com/petite-vue@0.2.2/dist/petite-vue.es.js';

async function getUsers() {
    const resp = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await resp.json();
    this.users = data;
}

const App = () => {
    return {
        $template: '#app-template',

        // properties
        users: [],

        // methods
        getUsers,
    };
};

createApp({
    App,
}).mount();
