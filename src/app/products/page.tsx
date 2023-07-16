import { Products } from "@/utils/mock";
import ProductCard from "@/Components/ProductCard";
import P1 from "/public/P1.webp";
import Image, { StaticImageData } from "next/image";

const AllProducts = () => {
  return (
    <div className="flex justify-evenly mt-16 py-10 flex-wrap">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2 md:gap-24 mx-auto">
        {Products.map((product) => (
          <ProductCard
            key={product.id}
            title={product.name}
            price={product.price}
            img={product.image as StaticImageData}
            category={product.category}
            id={product.id}
          />
        ))}
      </div>
    </div>
  );
};

export default AllProducts;
