import Category from "../components/catagory"
import HeroBanner from "../components/Herobanner";
import Navbar from "../components/navbar"
import TopNavbar from "../components/topnavbar"

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

function Shop(){
    return(
        <>
            <TopNavbar />
            <Navbar />
            <Category categories={categories}/>
            <HeroBanner />
        </>
    )
}

export default Shop