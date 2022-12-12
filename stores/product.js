import {
    defineStore
} from 'pinia'
export const useProductStore = defineStore('product', {
    state: () => {
        return {
            product: [{
                    id: 1,
                    name: 'عسل چندگیاه مخصوص گلی نوش (1000 گرم)',
                    img: 'https://golinoosh.com/uploads/products/a70002.jpg?m=crop&w=500&h=500&q=high',
                    price: 199000

                },
                {
                    id: 2,
                    name: 'عسل چندگیاه مخصوص گلی نوش (860 گرم)',
                    img: 'https://golinoosh.com/uploads/products/6fad18.jpg?m=crop&w=500&h=500&q=high',
                    price: 210000

                },
                {
                    id: 3,
                    name: 'عسل چندگیاه مخصوص گلی نوش (660 گرم)',
                    img: 'https://golinoosh.com/uploads/products/b70126.jpg?m=crop&w=500&h=500&q=high',
                    price: 131500

                },
                {
                    id: 4,
                    name: 'عسل گون انگبین گلی نوش (۱۰۰۰ گرم)',
                    img: 'https://golinoosh.com/uploads/products/38efe4.jpg?m=crop&w=500&h=500&q=high',
                    price: 255000
                },
                {
                    id: 5,
                    name: 'عسل گون انگبین گلی نوش (۸۶0 گرم)',
                    img: 'https://golinoosh.com/uploads/products/f59898.jpg?m=crop&w=500&h=500&q=high',
                    price: 265000
                },
                {
                    id: 6,
                    name: 'عسل گون انگبین گلی نوش (660 گرم)',
                    img: 'https://golinoosh.com/uploads/products/894b9f.jpg?m=crop&w=500&h=500&q=high',
                    price: 168500
                },
                {
                    id: 7,
                    name: 'عسل کُنار گلی نوش (۱۰۰۰ گرم)',
                    img: 'https://golinoosh.com/uploads/products/8610e0.jpg?m=crop&w=500&h=500&q=high',
                    price: 250000
                },
                {
                    id: 8,
                    name: 'عسل کنار گلی نوش (860 گرم)',
                    img: 'https://golinoosh.com/uploads/products/69aecc.jpg?m=crop&w=500&h=500&q=high',
                    price: 260000
                },
                {
                    id: 9,
                    name: 'عسل کنار گلی نوش (660 گرم)',
                    img: 'https://golinoosh.com/uploads/products/706d43.jpg?m=crop&w=500&h=500&q=high',
                    price: 165000
                },
                {
                    id: 10,
                    name: 'عسل آویشن گلی نوش (۱۰۰۰ گرم)',
                    img: 'https://golinoosh.com/uploads/products/0b6958.jpg?m=crop&w=500&h=500&q=high',
                    price: 290000
                },
                {
                    id: 11,
                    name: 'عسل آویشن گلی نوش (۸۶0 گرم)',
                    img: 'https://golinoosh.com/uploads/products/4d70e4.jpg?m=crop&w=500&h=500&q=high',
                    price: 295000
                },
                {
                    id: 12,
                    name: 'عسل آویشن گلی نوش (660 گرم)',
                    img: 'https://golinoosh.com/uploads/products/1bbf2b.jpg?m=crop&w=500&h=500&q=high',
                    price: 191500
                }


            ]
        }
    },
    getters: {
        getProducts() {
            return this.product
        }
    }
})