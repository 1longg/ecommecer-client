import { StarIcon } from "@/components/Icon/StarIcon";

const computeWidth = (rating: number, index: number) => {
  if (rating - index >= 0) {
    return "100%";
  } else if (rating - index > -1) {
    return `${(rating - index + 1) * 100}%`;
  } else {
    return "0%";
  }
};

export default function ProductRating({rating, sold}: {rating: number, sold: number}) {
  return (
    <div className="absolute bottom-[5%] right-[5%] items-center border rounded-3xl px-4 py-1 bg-white">
      <p className="text-sm text-black font-semibold">Sold: {sold}</p>
      <div className="flex">
        <p className="text-xs text-black font-semibold mr-1">{rating}</p>
        <div className="flex items-center">
          {Array(5)
            .fill(0)
            .map((_, index) => {
              return (
                <div key={index} className="relative">
                  <div
                    className="absolute top-0 left-0 overflow-hidden h-full"
                    style={{ width: computeWidth(rating, index + 1)}}
                  >
                    <StarIcon className="w-3 h-3 fill-yellow-300 text-yellow-300" />
                  </div>
                  <StarIcon className="w-3 h-3 stroke-transparent" />
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
}
