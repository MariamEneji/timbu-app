import Image from "next/image";
import React from "react";
import img from "../../../public/sneaker.png";
import useSWR from "swr";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

const MenShoes = () => {
  const { data, error, isLoading } = useSWR(
    "https://dummyjson.com/products/category/mens-shoes",
    fetcher
  );

  if (error) {
    return <h1>error</h1>;
  }

  if (isLoading) return <h3>Loading! Please Wait</h3>;

  return (
    <div className="py-10 w-full">
      <div className="flex flex-col md:flex-row justify-between gap-20 items-center">
        <div className="w-full">
          <Image src={img} />
        </div>

        <div className="w-full">
          <h1 className="text-2xl font-medium mb-4 pb-4 border-b border-[#A95D17] inline-block">
            Reeves Jest
          </h1>

          <p className="text-xl font-extralight">
            Shoes are very important to people because they provide protection
            and lead us to adventure. In the Holocaust Museum, there are over
            25,000 shoes that remain from the ruins of the concentration camps
            these shoes are left with profound thought because every one of them
            has the imprint of
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8 py-6">
        {data && data?.products && data?.products.length > 0 ? (
          data?.products.map((shoe) => (
            <Card className="rounded-xl ">
              <CardContent className="bg-gray-200  border border-[#A95D17] rounded-xl  overflow-hidden shadow-md ">
                <div className="w-full border-[#A95D17] border-b">
                  <img
                    src={shoe.images[1]}
                    alt={shoe.title}
                    className="w-full h-full object-cover object-top"
                  />
                </div>

                <h3 className="text-xl h-12 mb-2 mt-2 pb-2">{shoe.title}</h3>
                <p className="mb-2">${shoe.price}</p>
                <button className="w-full bg-[#A95D17] rounded-lg p-2 text-white cursor-pointer hover:scale-[1.1] transition-all  ">
                  Add to cart
                </button>
              </CardContent>
            </Card>
          ))
        ) : (
          <h1>Not yet</h1>
        )}
            {data && data?.products && data?.products.length > 0 ? (
          data?.products.map((shoe) => (
            <Card className="rounded-xl ">
              <CardContent className="bg-gray-200  border border-[#A95D17] rounded-xl  overflow-hidden shadow-md ">
                <div className="w-full border-[#A95D17] border-b">
                  <img
                    src={shoe.images[1]}
                    alt={shoe.title}
                    className="w-full h-full object-cover object-top"
                  />
                </div>

                <h3 className="text-xl h-12 mb-2 mt-2 pb-2">{shoe.title}</h3>
                <p className="mb-2">${shoe.price}</p>
                <button className="w-full bg-[#A95D17] rounded-lg p-2 text-white cursor-pointer hover:scale-[1.1] transition-all  ">
                  Add to cart
                </button>
              </CardContent>
            </Card>
          ))
        ) : (
          <h1>Not yet</h1>
        )}
      </div>
    </div>
  );
};

export default MenShoes;
