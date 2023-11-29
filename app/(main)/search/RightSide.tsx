import { ISearchParam } from "@/types/searchParam.type";
import { convertObjectParamToString } from "@/utils/convertObjectParamToString";
import removeAttrEmptyObjet from "@/utils/removeAttrEmptyStringInObject";
import Link from "next/link";
import clsx from 'clsx';

export default function RightSide({
  classname,
  searchParam,
}: {
  classname?: string;
  searchParam: ISearchParam;
}) {
  const serachQuery = convertObjectParamToString(
    removeAttrEmptyObjet({ ...searchParam, soldBy: "rating" })
  );
  return (
    <div className={classname}>
      <p className="text-sm text-slate-400 mb-2">Sort by</p>
      <div className="flex flex-col text-sm">
        <Link
          className={clsx('mb-1 hover:underline hover:underline-offset-4', searchParam.sortBy === 'sold' && 'underline underline-offset-4')}
          href={`/search?${convertObjectParamToString(
            removeAttrEmptyObjet({ ...searchParam, sortBy: "sold" })
          )}`}
        >
          Sold
        </Link>
        <Link
          className={clsx('mb-1 hover:underline hover:underline-offset-4', searchParam.sortBy === 'rating' && 'underline underline-offset-4')}
          href={`/search?${convertObjectParamToString(
            removeAttrEmptyObjet({ ...searchParam, sortBy: "rating" })
          )}`}
        >
          Rating
        </Link>
        <Link
          className={clsx('mb-1 hover:underline hover:underline-offset-4', searchParam.sortBy === 'createdAt' && 'underline underline-offset-4')}
          href={`/search?${convertObjectParamToString(
            removeAttrEmptyObjet({ ...searchParam, sortBy: "createdAt" })
          )}`}
        >
          Latest arrivals
        </Link>
        <Link
          className={clsx('mb-1 hover:underline hover:underline-offset-4', searchParam.sortBy === 'price' && searchParam.order ==='asc' && 'underline underline-offset-4')}
          href={`/search?${convertObjectParamToString(
            removeAttrEmptyObjet({
              ...searchParam,
              sortBy: "price",
              order: "asc",
            })
          )}`}
        >
          Price: Low to high
        </Link>
        <Link
          className={clsx('mb-1 hover:underline hover:underline-offset-4', searchParam.sortBy === 'price' && searchParam.order ==='desc' && 'underline underline-offset-4')}
          href={`/search?${convertObjectParamToString(
            removeAttrEmptyObjet({
              ...searchParam,
              sortBy: "price",
              order: "desc",
            })
          )}`}
        >
          Price: High to low
        </Link>
      </div>
    </div>
  );
}
