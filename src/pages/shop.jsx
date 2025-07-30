import Category from "../components/catagory"
import HeroBanner from "../components/Herobanner";
import ListShop from "../components/ListShop";
import Navbar from "../components/navbar"
import TopNavbar from "../components/topnavbar"
import TopCategory from "../components/TopCategory";
import Watch from '../assets/pic/watch.png'


const categories = [
  { name: 'Groceries', active: true, hasDropdown: true },
  { name: 'Premium Fruits', hasDropdown: true },
  { name: 'Home & Kitchen', hasDropdown: true },
  { name: 'Fashion', hasDropdown: true },
  { name: 'Electronics', hasDropdown: true },
  { name: 'Beauty', hasDropdown: true },
  { name: 'Home Improvement', hasDropdown: true },
  { name: 'Sports, Toys & Luggage', hasDropdown: true },
];

const products = [
    {
        id:1,
        imageUrl:"/src/assets/pic/product1.png",
        productName:"Galaxy S22 Ultra",
        discount:32999,
        price:74999
    },
    {
        id:2,
        imageUrl:"/src/assets/pic/product2.png",
        productName:"Galaxy M13 (4GB | 64GB)",
        discount:10499,
        price:14999
    },
     {
        id:3,
        imageUrl:"/src/assets/pic/product3.png",
        productName:"Galaxy M13 (4GB | 64GB)",
        discount:10499,
        price:14999
    },
     {
        id:4,
        imageUrl:"/src/assets/pic/product4.png",
        productName:"Galaxy M13 (4GB | 64GB)",
        discount:10499,
        price:14999
    },
     {
        id:5,
        imageUrl:"/src/assets/pic/product5.png",
        productName:"Galaxy M13 (4GB | 64GB)",
        discount:10499,
        price:14999
    },

]

function Shop(){
    return(
        <>
            <TopNavbar />
            <Navbar />
            <Category categories={categories}/>
            <HeroBanner />
            <ListShop products={products} />
            <TopCategory />
        </>
    )
}

export default Shop