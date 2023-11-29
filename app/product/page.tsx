import { formatter } from "@/utils/convertUSD";
import Image from "next/image";

export default function ProductDetail({}) {
  const mockData = {
    _id: "6561635bcadd90a4d9a2cedf",
    name: "New E Bikes 250W Motor E Bicycle Max Range 55 KM Max Load E Bike Electric Bicycle",
    price: 200,
    description:
      "Fabric blend of Supima Cotton and Micromodal. Supima Cotton is a premium cotton grown exclusively in the USA, prized for its softness and strength. Micromodal is a premium fiber derived from beechwood pulp. It is highly breathable, super soft and has a smooth texture.",
    attributes: {
      brand: "Hager",
      size: "Battery",
    },
    belongTo: "65615569080d0dbcb0a8518a",
    category: "electric",
    quantity: 89,
    sold: 119,
    rating: 3.64,
    image: [
      "https://s.alicdn.com/@sc04/kf/H12bed0f9be284fe3b0d5c245f99c132fW.jpg",
      "https://s.alicdn.com/@sc04/kf/Hd2457a835d15421cb3594412c5823f19H.png",
      "https://s.alicdn.com/@sc04/kf/He2f00309bee246198b06400d148454314.png",
      "https://s.alicdn.com/@sc04/kf/H8609a4d155484a2e91c40a3ce59182705.jpg",
      "https://s.alicdn.com/@sc04/kf/H9dd03669b4064065a30ff6d500d9c9116.png",
      "https://s.alicdn.com/@sc04/kf/H8a53399d3acb472bb385b29bfc36e0f0P.jpg",
    ],
    createdAt: "2023-11-25T03:00:43.576Z",
    updatedAt: "2023-11-25T03:00:43.576Z",
    __v: 0,
  };
  return (
    <div>
      <div className="px-4 py-6 border rounded-md bg-white flex flex-row gap-8">
        <div className="basis-4/6 overflow-hidden max-h-[550px]">
          <Image src={mockData.image[0]} alt="123" width="500" height={500} className="w-full h-full object-contain" />
        </div>
        <div className="py-4 basis-2/6">
          <div className="mb-6 border-b pb-6 flex flex-col">
            <p className="capitalize text-3xl font-medium mb-4">{mockData.name}</p>
            <p className="border mr-auto w-auto rounded-3xl bg-blue-600 text-sm font-bold text-white px-2 py-1">
              {`${formatter.format(mockData.price)}`}
            </p>
          </div>
          <div>

          </div>
        </div>
      </div>
    </div>
  );
}
