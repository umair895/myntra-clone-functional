const item1 = [
    {
        id: '001',
        item_image: 'images/items/1.webp',
        item_rating: {
            noOfStars: 4.4,
            noOfReviews: 1400,
        },
        item_name: 'WROGN',
        item_company: 'Men Analogue Watch',
        current_price: '749',
        original_price: '2899',
        get item_discount() {
            return this.original_price - this.current_price;
        },
        return_period: '14 days',
        delivery_date: '4th september 2005',
    },

    {
        id: '002',
        item_image: 'images/items/2.webp',
        item_rating: {
            noOfStars: 4.3,
            noOfReviews: 1500,
        },
        item_name: 'XYXX',
        item_company: 'Antimicrobial Lounge Shorts',
        current_price: '629',
        original_price: '899',
        get item_discount() {
            return this.original_price - this.current_price;
        },
        return_period: '14 days',
        delivery_date: '4th september 2005',
    },

    {
        id: '003',
        item_image: 'images/items/3.webp',
        item_rating: {
            noOfStars: 4.4,
            noOfReviews: 1400,
        },
        item_name: 'Bella Vita Organic',
        item_company: 'Unisex White Oud Perfume',
        current_price: '579',
        original_price: '999',
        get item_discount() {
            return this.original_price - this.current_price;
        },
        return_period: '14 days',
        delivery_date: '4th september 2005',
    },

    {
        id: '004',
        item_image: 'images/items/4.webp',
        item_rating: {
            noOfStars: 4.4,
            noOfReviews: 1400,
        },
        item_name: ' Jockey',
        item_company: 'Pack Of 2 Basic Briefs',
        current_price: '498',
        original_price: '899',
        get item_discount() {
            return this.original_price - this.current_price;
        },
        return_period: '14 days',
        delivery_date: '4th september 2005',
    },

    {
        id: '005',
        item_image: 'images/items/5.webp',
        item_rating: {
            noOfStars: 4.4,
            noOfReviews: 1400,
        },
        item_name: 'KOZICARE',
        item_company: '3Pcs Skin Lightening Soap',
        current_price: '299',
        original_price: '0',
        get item_discount() {
            return this.original_price - this.current_price;
        },
        return_period: '14 days',
        delivery_date: '4th september 2005',
    },

    {
        id: '006',
        item_image: 'images/items/6.webp',
        item_rating: {
            noOfStars: 4.4,
            noOfReviews: 1400,
        },
        item_name: 'Campus Sutra',
        item_company: 'Spread Collar Casual Shirt',
        current_price: '759',
        original_price: '1899',
        get item_discount() {
            return this.original_price - this.current_price;
        },
        return_period: '14 days',
        delivery_date: '4th september 2005',
    },
];
