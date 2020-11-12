
const products = [
    {id: 1, categ: 'burger', name: 'Hamburger bacon', price: 10, img: 'https://source.unsplash.com/random/200x200'},
    {id: 2, categ: 'burger', name: 'Cheeseburger', price: 11, img: 'https://source.unsplash.com/random/200x200'},
    {id: 3, categ: 'burger', name: 'Cheeseburger bacon', price: 9, img: 'https://source.unsplash.com/random/200x200'},
    {id: 4, categ: 'pizza', name: 'Pizza 4 fromages', price: 12, img: 'https://source.unsplash.com/random/200x200'},
    {id: 5, categ: 'pizza', name: 'Pizza reine', price: 14, img: 'https://source.unsplash.com/random/200x200'},
    {id: 6, categ: 'pizza', name: 'Pizza peperoni', price: 15, img: 'https://source.unsplash.com/random/200x200'},
    {id: 7, categ: 'tacos', name: 'Tacos M', price: 12, img: 'https://source.unsplash.com/random/200x200'},
    {id: 8, categ: 'tacos', name: 'Tacos XL', price: 15, img: 'https://source.unsplash.com/random/200x200'},
]


const Homepage = {
    template: '<h1>Home</h1>',
    name: 'Home'
}

const Shop = {
    template: '#shop',
    name: 'Shop',
    data: () => {
        return {
            products,
            searchKey: '',
            liked: [],
            cart: []
        }
    },
    computed: {
        filteredList() {
            return this.products.filter((product) => {
                return product.name.toLowerCase().includes(this.searchKey.toLowerCase())
            })
        },
        getLikeCookie() {
            let cookieValue = JSON.parse($cookies.get('like'));
            cookieValue == null ? this.liked = [] : this.liked = cookieValue;
        },
        cartTotalAmount() {
            let total = 0;
            for(let item in this.cart){
                total = total + (this.cart[item].quantity * this.cart[item].price)
            }
            return total;
        },
        itemTotalAmount() {
            let totalAmout = 0;
            for(let item in this.cart){
                totalAmout = totalAmout + (this.cart[item].quantity);
            }
            return totalAmout;
        }
    },
    methods: {
        setLikeCookie() {
            document.addEventListener('input', () => {
                setTimeout(() => {
                    $cookies.set('like', JSON.stringify(this.liked));
                }, 300);
                
            });
        },
        addToCart(product){
            for(let i = 0; i < this.cart.length; i++){
                if(this.cart[i].id === product.id){
                    return this.cart[i].quantity++;
                }
            }
            this.cart.push({
                id: product.id,
                categ: product.categ,
                name: product.name,
                price: product.price,
                img: product.img,
                quantity: 1
            });
        },
        cartPlusOne(product){
            product.quantity += 1;
        },
        cartRemoveItem(id){
            this.$delete(this.cart, id);
        },
        cartMinusOne(product, id){
            if(product.quantity === 1){
                this.cartRemoveItem(id);
            } else {
                product.quantity -= 1;
            }
            
        }
    },
    mounted: () => {
        this.getLikeCookie;
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
    { path: '/shop', component: Shop, name: 'Shop' },
    { path: '/settings', component: Settings, name: 'Settings' },
    { path: '/contact', component: Contact, name: 'Contact' }
]

const router = new VueRouter({
    routes
})


let app = new Vue({
    router
}).$mount('#app')