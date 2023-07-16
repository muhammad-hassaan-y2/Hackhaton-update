import { Products } from "@/utils/mock";
import ProductCard from "@/Components/ProductCard";
import P1 from "/public/P1.webp";
import Image, { StaticImageData } from "next/image";
import { Result } from "postcss";

const getProductsByCategory = (category: string) => {
  return Products.filter((product) => product.category === category);
};

export default function Page({ params }: { params: { slug: string } }) {
  const result = getProductsByCategory(params.slug);

  return (
    <div
      className="flex flex-1 justify-evenly mt-16 py-10 mb-40 
    "
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2 md:gap-10 mx-auto">
        {result.length > 0 ? (
          result.map((product) => (
            // <div className="flex flex-col items-center" key={product.id}>
            <ProductCard
              key={product.id}
              title={product.name}
              price={product.price}
              img={product.image as StaticImageData}
              category={product.category}
              id={product.id}
            />
            //  </div>
          ))
        ) : (
          <p>No Products Found</p>
        )}
      </div>
    </div>
  );
}
