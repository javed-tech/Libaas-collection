const initState={
    products:[
        {
            id:1,
            name:"men t-shirt summer season",
            image:"../images/1.jpg",
            price:20,
            discount:2,
            discountPrice:20-2/100 *20,
            quantity:1,
            desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sapiente eum est quisquam dolorem laudantium. Fugit Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi adipisci eaque eius commodi non soluta atque amet doloribus, iusto cumque!lorem"

        },
        {
            id:2,
            name:"women jacket for summer season",
            image:"../images/2.jpg",
            price:30,
            discount:5,
            discountPrice:30-5/100 *30,
            quantity:1,
            desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sapiente eum est quisquam dolorem laudantium. Fugit Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi adipisci eaque eius commodi non soluta atque amet doloribus, iusto cumque!lorem"

        },
        {
            id:3,
            name:"men trouser for All season",
            image:"../images/3.jpg",
            price:15,
            discount:3,
            discountPrice:15-3/100 *15,
            quantity:1,
            desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sapiente eum est quisquam dolorem laudantium. Fugit Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi adipisci eaque eius commodi non soluta atque amet doloribus, iusto cumque!lorem"

        },
        {
            id:4,
            name:"Shoes  for All season",
            image:"../images/4.jpg",
            price:50,
            discount:4,
            discountPrice:50-4/100 *50,
            quantity:1,
            desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sapiente eum est quisquam dolorem laudantium. Fugit Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi adipisci eaque eius commodi non soluta atque amet doloribus, iusto cumque!lorem"

        },
        {
            id:5,
            name:"women Suit for summer season",
            image:"../images/5.jpg",
            price:25,
            discount:2,
            discountPrice:25-2/100 *25,
            quantity:1,
            desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sapiente eum est quisquam dolorem laudantium. Fugit Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi adipisci eaque eius commodi non soluta atque amet doloribus, iusto cumque!lorem"

        },
        {
            id:6,
            name:"women stylish jeans for summer season",
            image:"../images/6.jpg",
            price:60,
            discount:6,
            discountPrice:60-6/100 *60,
            quantity:1,
            desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sapiente eum est quisquam dolorem laudantium. Fugit Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi adipisci eaque eius commodi non soluta atque amet doloribus, iusto cumque!lorem"

        },
        {
            id:7,
            name:"men lower for All season",
            image:"../images/7.jpg",
            price:50,
            discount:3,
            discountPrice:50-3/100 *50,
            quantity:1,
            desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sapiente eum est quisquam dolorem laudantium. Fugit Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi adipisci eaque eius commodi non soluta atque amet doloribus, iusto cumque!lorem"

        },
        {
            id:8,
            name:"Male Jacket for All season",
            image:"../images/8.jpg",
            price:95,
            discount:4,
            discountPrice:95-4/100 *95,
            quantity:1,
            desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sapiente eum est quisquam dolorem laudantium. Fugit Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi adipisci eaque eius commodi non soluta atque amet doloribus, iusto cumque!lorem"

        },
        {
            id:9,
            name:"Male Jacket for winter season",
            image:"../images/9.jpg",
            price:65,
            discount:4,
            discountPrice:65-4/100 *65,
            quantity:1,
            desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sapiente eum est quisquam dolorem laudantium. Fugit Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi adipisci eaque eius commodi non soluta atque amet doloribus, iusto cumque!lorem"

        },
        {
            id:10,
            name:"Male Jacket for winter season",
            image:"../images/10.jpg",
            price:120,
            discount:3,
            discountPrice:120-3/100 *120,
            quantity:1,
            desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sapiente eum est quisquam dolorem laudantium. Fugit Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi adipisci eaque eius commodi non soluta atque amet doloribus, iusto cumque!lorem"

        },
        {
            id:11,
            name:" Denim Jeans For Men ",
            image:"../images/11.jpg",
            price:250,
            discount:5,
            discountPrice:250-5/100 *250,
            quantity:1,
            desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sapiente eum est quisquam dolorem laudantium. Fugit Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi adipisci eaque eius commodi non soluta atque amet doloribus, iusto cumque!lorem"
 
        },
        {
            id:12,
            name:"Sports Track Suit For Men",
            image:"../images/12.jpg",
            price:400,
            discount:6,
            discountPrice:400-6/100 *400,
            quantity:1,
            desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sapiente eum est quisquam dolorem laudantium. Fugit Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi adipisci eaque eius commodi non soluta atque amet doloribus, iusto cumque!lorem"

        }
    ],
    product:{}
}


const ProductsReducer= (state= initState, action)=>{
    switch(action.type){
        case "PRODUCT":
        return {...state, product: state.products.find(product=>product.id === parseInt(action.id))}
        default:
        return state;
    }

}

export default ProductsReducer;