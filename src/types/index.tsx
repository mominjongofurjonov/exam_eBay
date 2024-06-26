export type State = {
    actions: {
        data: string | null;
        likes: [];
        stored: [];
        token: string; 
        user: any;
    }
}

export type Product = {
    brand: string,
    category: string,
    description: string,
    discountPercentage: number,
    id: number,
    images: string[],
    price: number,
    rating: number,
    stock: number
    thumbnail: string,
    title: string
    count?: number
}