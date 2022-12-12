import {
    defineStore
} from 'pinia'
import Swal from "sweetalert2"

function updateLocalStorage(cart) {
    localStorage.setItem('cart', JSON.stringify(cart))
}
export const useCartStore = defineStore('cart', {
    state: () => {
        return {
            cart: []
        }
    },
    getters: {
        getProducts() {
            return this.cart
        },
        count() {
            return this.cart.length
        },
        totalAmount() {
            return this.cart.reduce((total, p) => {
                return total + p.price * p.quantity
            }, 0)
        }
    },
    actions: {
        increment(id) {
            const item = this.cart.find((p) => p.id == id)
            if (item) {
                item.quantity++
            }
            updateLocalStorage(this.cart)
        },
        decrement(id) {
            const item = this.cart.find((p) => p.id == id)
            if (item) {
                if (item.quantity > 1) {
                    item.quantity--
                }
            }
            updateLocalStorage(this.cart)
        },
        remove(id) {
            this.cart = this.cart.filter((cart) => cart.id != id)
            Swal.fire({
                title: 'product deleted',
                icon: 'warning',
                showConfirmButton: 'false',
                timerProgressBar: true,
                timer: 3000,
                toast: true,
                position: 'top'
            })
            updateLocalStorage(this.cart)
        },
        clear() {
            this.cart = []
            updateLocalStorage(this.cart)
        },

        addToCart(product) {
            const item = this.cart.find((p) => p.id == product.id)
            if (!item) {
                this.cart.push({
                    ...product,
                    quantity: 1
                })
            } else {
                item.quantity++
            }
            Swal.fire({
                title: 'product Added',
                icon: 'success',
                showConfirmButton: 'false',
                timerProgressBar: true,
                timer: 3000,
                toast: true,
                position: 'top'
            })
            updateLocalStorage(this.cart)
        }
    }
})