
const products = [
    {id: 1, name: 'Hamburger bacon', price: 10, img: 'https://source.unsplash.com/random/200x200'},
    {id: 2, name: 'Cheeseburger', price: 11, img: 'https://source.unsplash.com/random/200x200'},
    {id: 3, name: 'Cheeseburger bacon', price: 9, img: 'https://source.unsplash.com/random/200x200'},
    {id: 4, name: 'Pizza 4 fromages', price: 12, img: 'https://source.unsplash.com/random/200x200'},
    {id: 5, name: 'Pizza reine', price: 14, img: 'https://source.unsplash.com/random/200x200'},
    {id: 6, name: 'Pizza peperoni', price: 15, img: 'https://source.unsplash.com/random/200x200'},
    {id: 7, name: 'Tacos M', price: 12, img: 'https://source.unsplash.com/random/200x200'},
    {id: 8, name: 'Tacos XL', price: 15, img: 'https://source.unsplash.com/random/200x200'},
]


const Homepage = {
    template: '#home',
    name: 'Home',
    data: () => {
        return {
            products,
            searchKey: ''
        }
    },
    computed: {
        filteredList() {
            return this.products.filter((product) => {
                return product.name.toLowerCase().includes(this.searchKey.toLowerCase())
            })
        },
    }
}
const Settings = {
    template: '<h1>Settings Page</h1>',
    name: 'Settings'
}
const Contact = {
    template: '<h1>Contact Page</h1>',
    name: 'Contact'
}

const routes = [
    { path: '/', component: Homepage, name: 'Home' },
    { path: '/settings', component: Settings, name: 'Settings' },
    { path: '/contact', component: Contact, name: 'Contact' }
]

const router = new VueRouter({
    routes
})


let app = new Vue({
    router
}).$mount('#app')