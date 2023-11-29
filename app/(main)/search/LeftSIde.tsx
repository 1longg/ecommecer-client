import { ISearchParam } from "@/types/searchParam.type";
import Link from "next/link";
import clsx from 'clsx';


export default function LeftSide({
  classname,
  searchParam,
}: {
  classname?: string;
  searchParam: ISearchParam;
}) {
  return (
    <div className={classname}>
      <p className="text-sm text-slate-400 mb-2">Collections</p>
      <div className="flex-col flex text-sm">
        <Link
          href="/search?sortBy=sold&order=desc&limit=15&page=1"
          className={clsx('mb-1 hover:underline hover:underline-offset-4', searchParam.category === undefined && 'underline underline-offset-4')}
        >
          All
        </Link>
        <Link
          className={clsx('mb-1 hover:underline hover:underline-offset-4', searchParam.category === 'clothing' && 'underline underline-offset-4')}
          href="/search?category=clothing&sortBy=sold&order=desc&limit=15&page=1"
        >
          Clothing
        </Link>
        <Link
          className={clsx('mb-1 hover:underline hover:underline-offset-4', searchParam.category === 'phone' && 'underline underline-offset-4')}
          href="/search?category=phone&sortBy=sold&order=desc&limit=15&page=1"
        >
          Phone
        </Link>
        <Link href="/search?category=electric&sortBy=sold&order=desc&limit=15&page=1"

          className={clsx('mb-1 hover:underline hover:underline-offset-4', searchParam.category === 'electric' && 'underline underline-offset-4')}
        >
          Electric
        </Link>
      </div>
    </div>
  );
}
