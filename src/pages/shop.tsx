import Category from "../components/catagory";
import HeroBanner from "../components/Herobanner";
import ListShop from "../components/ListShop";
import Navbar from "../components/navbar";
import TopNavbar from "../components/topnavbar";
import TopCategory from "../components/TopCategory";
import ElectronicsBrands from "../components/ElectronicsBrands";
import Essential from "../components/Essential";
import Footer from "../components/Footer";

type CategoryItem = {
  name: string;
  active?: boolean;
  hasDropdown?: boolean;
};

type Product = {
  id: number;
  imageUrl: string;
  productName: string;
  discount: number;
  price: number;
  savePrice: number;
};

type TopCategoryItem = {
  id: number;
  imageUrl: string;
  CategoryName: string;
};

type EssentialItem = {
  id: number;
  EssentialName: string;
  imageUrl: string;
};

const categories: CategoryItem[] = [
  { name: "Groceries", active: true, hasDropdown: true },
  { name: "Premium Fruits", hasDropdown: true },
  { name: "Home & Kitchen", hasDropdown: true },
  { name: "Fashion", hasDropdown: true },
  { name: "Electronics", hasDropdown: true },
  { name: "Beauty", hasDropdown: true },
  { name: "Home Improvement", hasDropdown: true },
  { name: "Sports, Toys & Luggage", hasDropdown: true },
];

const products: Product[] = [
  {
    id: 1,
    imageUrl: "/src/assets/pic/product1.png",
    productName: "Galaxy S22 Ultra",
    discount: 32999,
    price: 74999,
    savePrice: 32999
  },
  {
    id: 2,
    imageUrl: "/src/assets/pic/product2.png",
    productName: "Galaxy M13 (4GB | 64GB)",
    discount: 10499,
    price: 14999,
    savePrice: 4500
  },
  {
    id: 3,
    imageUrl: "/src/assets/pic/product3.png",
    productName: "Galaxy M13 (4GB | 64GB)",
    discount: 16999,
    price: 24999,
    savePrice: 8000
  },
  {
    id: 4,
    imageUrl: "/src/assets/pic/product4.png",
    productName: "Galaxy M13 (4GB | 64GB)",
    discount: 31999,
    price: 40999,
    savePrice: 9000
  },
  {
    id: 5,
    imageUrl: "/src/assets/pic/product5.png",
    productName: "Galaxy M13 (4GB | 64GB)",
    discount: 67999,
    price: 85999,
    savePrice: 18000
  },
];

const catagoryitem: TopCategoryItem[] = [
  {
    id: 1,
    imageUrl: "/src/assets/pic/TopCategory1.png",
    CategoryName: "Mobile",
  },
  {
    id: 2,
    imageUrl: "/src/assets/pic/TopCategory2.png",
    CategoryName: "Cosmetics",
  },
  {
    id: 3,
    imageUrl: "/src/assets/pic/TopCategory3.png",
    CategoryName: "Electronics",
  },
  {
    id: 4,
    imageUrl: "/src/assets/pic/TopCategory4.png",
    CategoryName: "Furniture",
  },
  {
    id: 5,
    imageUrl: "/src/assets/pic/watch.png",
    CategoryName: "Watches",
  },
  {
    id: 6,
    imageUrl: "/src/assets/pic/TopCategory6.png",
    CategoryName: "Decor",
  },
  {
    id: 7,
    imageUrl: "/src/assets/pic/TopCategory7.png",
    CategoryName: "Accessories",
  },
];

const mockEssential: EssentialItem[] = [
  {
    id: 1,
    EssentialName: "Daily Essential",
    imageUrl: "/src/assets/pic/daily1.png"
  },
  {
    id: 2,
    EssentialName: "Vegetables",
    imageUrl: "/src/assets/pic/daily2.png"
  },
  {
    id: 3,
    EssentialName: "Fruits",
    imageUrl: "/src/assets/pic/daily3.png"
  },
  {
    id: 4,
    EssentialName: "Strawberry",
    imageUrl: "/src/assets/pic/daily4.png"
  },
  {
    id: 5,
    EssentialName: "Mango",
    imageUrl: "/src/assets/pic/daily5.png"
  },
  {
    id: 6,
    EssentialName: "Cherry",
    imageUrl: "/src/assets/pic/daily6.png"
  },
];

function Shop() {
  return (
    <>
      <TopNavbar />
      <Navbar />
      <Category categories={categories} />
      <HeroBanner />
      <ListShop products={products} />
      <TopCategory categoryitem={catagoryitem} />
      <ElectronicsBrands />
      <Essential essentials={mockEssential} />
      <Footer />
    </>
  );
}

export default Shop;
