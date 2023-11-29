import clsx from "clsx";
import { uniqueId } from "lodash";

const render = (
  currentPage: number,
  totalPage: number,
  onClickPage: (page: number) => void
) => {
  if (totalPage <= 5) {
    return (
      <div>
        {Array.from({ length: totalPage }, (_, i) => i + 1).map((page) => (
            <span
              key={uniqueId()}
              onClick={() => onClickPage(page)}
              className={clsx("mr-2", {
                "border rounded-md py-2 px-3 text-black": page === currentPage,
              })}
            >
              {page}
            </span>
        ))}
      </div>
    );
  } else {
    if (currentPage === 1) {
      return (
        <div>
          {Array.from({ length: 5 }, (_, i) => i + 1).map((page) => (
            <span
              key={uniqueId()}
              onClick={() => onClickPage(page)}
              className={clsx("mr-2", {
                "border rounded-md py-2 px-3 text-black": page === currentPage,
              })}
            >
              {page}
            </span>
          ))}
          <span className="mr-2">...</span>
          <span onClick={() => onClickPage(totalPage)}>{totalPage}</span>
        </div>
      );
    } else if (currentPage < totalPage - 5) {
      return (
        <div>
          <span className="mr-2">...</span>
          {Array.from({ length: 5 }, (_, i) => i + currentPage).map((page) => (
            <span
              key={uniqueId()}
              onClick={() => onClickPage(page)}
              className={clsx("mr-2", {
                "border rounded-md py-2 px-3 text-black": page === currentPage,
              })}
            >
              {page}
            </span>
          ))}
          <span className="mr-2">...</span>
          <span onClick={() => onClickPage(totalPage)}>{totalPage}</span>
        </div>
      );
    } else if (currentPage === totalPage - 5) {
      return (
        <div>
          <span className="mr-2">...</span>
          {Array.from({ length: 5 }, (_, i) => i + currentPage).map((page) => (
            <span
              key={uniqueId()}
              onClick={() => onClickPage(page)}
              className={clsx("mr-2", {
                "border rounded-md py-2 px-3 text-black": page === currentPage,
              })}
            >
              {page}
            </span>
          ))}
          <span onClick={() => onClickPage(totalPage)}>{totalPage}</span>
        </div>
      );
    } else {
      return (
        <div>
          <span className="mr-2">...</span>
          {Array.from({ length: 5 }, (_, i) => i + totalPage - 4).map(
            (page) => (
            <span
              key={uniqueId()}
              onClick={() => onClickPage(page)}
              className={clsx("mr-2", {
                "border rounded-md py-2 px-3 text-black": page === currentPage,
              })}
            >
              {page}
            </span>
            )
          )}
        </div>
      );
    }
  }
};

export default function Pagination({
  totalPage,
  currentPage,
  onClickPage,
}: {
  totalPage: number;
  currentPage: number;
  onClickPage: (page: number) => void;
}) {
  return (
    <div className="text-lg">{render(currentPage, totalPage, onClickPage)}</div>
  );
}
