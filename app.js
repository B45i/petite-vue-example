async function getUsers() {
    const resp = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await resp.json();
    this.users = data;
}

export const App = () => {
    return {
        $template: '#app-template',

        // properties
        users: [],

        // methods
        getUsers,
    };
};
