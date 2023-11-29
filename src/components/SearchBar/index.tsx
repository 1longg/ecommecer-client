
import { useRouter } from "next/navigation";
import { SearchIcon } from "../Icon/SearchIcon";

import { useForm } from "react-hook-form";
import { joiResolver } from "@hookform/resolvers/joi";
import Joi from "joi";

export default function SearchBar() {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<{ searchText: string }>({
    resolver: joiResolver(Joi.object({ searchText: Joi.string().required() })),
  });
  const onSubmit = (data: {searchText: string}) => {
    router.push(`/search?searchText=${data.searchText}&sortBy=sold&order=desc&limit=15&page=1`);
  };
  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex items-center border rounded-md px-2 focus-within:border-black w-96"
    >
      <input
        {...register("searchText")}
        placeholder="Search for product"
        className="border border-gray-300 w-full rounded-md px-4 py-2 outline-none border-none"
      />
      <SearchIcon onClick={handleSubmit(onSubmit)} className="w-4 h-4" />
    </form>
  );
}
