import Category from "../components/catagory";
import HeroBanner from "../components/Herobanner";
import ListShop from "../components/ListShop";
import Navbar from "../components/navbar";
import TopNavbar from "../components/topnavbar";
import TopCategory from "../components/TopCategory";
import Watch from "../assets/pic/watch.png";
import ElectronicsBrands from "../components/ElectronicsBrands";
import Essential from "../components/Essential";

const categories = [
  { name: "Groceries", active: true, hasDropdown: true },
  { name: "Premium Fruits", hasDropdown: true },
  { name: "Home & Kitchen", hasDropdown: true },
  { name: "Fashion", hasDropdown: true },
  { name: "Electronics", hasDropdown: true },
  { name: "Beauty", hasDropdown: true },
  { name: "Home Improvement", hasDropdown: true },
  { name: "Sports, Toys & Luggage", hasDropdown: true },
];

const products = [
  {
    id: 1,
    imageUrl: "/src/assets/pic/product1.png",
    productName: "Galaxy S22 Ultra",
    discount: 32999,
    price: 74999,
  },
  {
    id: 2,
    imageUrl: "/src/assets/pic/product2.png",
    productName: "Galaxy M13 (4GB | 64GB)",
    discount: 10499,
    price: 14999,
  },
  {
    id: 3,
    imageUrl: "/src/assets/pic/product3.png",
    productName: "Galaxy M13 (4GB | 64GB)",
    discount: 10499,
    price: 14999,
  },
  {
    id: 4,
    imageUrl: "/src/assets/pic/product4.png",
    productName: "Galaxy M13 (4GB | 64GB)",
    discount: 10499,
    price: 14999,
  },
  {
    id: 5,
    imageUrl: "/src/assets/pic/product5.png",
    productName: "Galaxy M13 (4GB | 64GB)",
    discount: 10499,
    price: 14999,
  },
];

const catagoryitem = [
  {
    id: 1,
    imageUrl: "/src/assets/pic/product1.png",
    CategoryName: "Mobile",
  },
  {
    id: 2,
    imageUrl: "/src/assets/pic/product1.png",
    CategoryName: "Cosmetics",
  },
  {
    id: 3,
    imageUrl: "/src/assets/pic/product1.png",
    CategoryName: "Electronics",
  },
  {
    id: 4,
    imageUrl: "/src/assets/pic/product1.png",
    CategoryName: "Furniture",
  },
  {
    id: 5,
    imageUrl: "/src/assets/pic/product1.png",
    CategoryName: "Watches",
  },
  {
    id: 6,
    imageUrl: "/src/assets/pic/product1.png",
    CategoryName: "Decor",
  },
  {
    id: 7,
    imageUrl: "/src/assets/pic/product1.png",
    CategoryName: "Accessories",
  },
];

const mockBanner = [
  {
    id: 1,
    label: "IPHONE",
    logoText: "", // หรือใส่เป็นรูปจริงก็ได้
    bgColor: "#2d2d2d",
  },
  {
    id: 2,
    label: "REALME",
    logoText: "realme",
    bgColor: "#fef3c7",
  },
  {
    id: 3,
    label: "XIAOMI",
    logoText: "mi",
    bgColor: "#ffe4e1",
  },
];

const mockEssential = [
  {
    id: 1,
    EssentialName: "Daily Essential",
  },
  {
    id: 2,
    EssentialName: "Vegetables",
  },
  {
    id: 3,
    EssentialName: "Fruits",
  },
  {
    id: 4,
    EssentialName: "Strawberry",
  },
  {
    id: 5,
    EssentialName: "Mango",
  },
  {
    id: 6,
    EssentialName: "Cherry",
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
      <ElectronicsBrands banner={mockBanner} />
      <Essential essentials={mockEssential} />
    </>
  );
}

export default Shop;
