import { SearchIcon } from "../Icon/SearchIcon";

export default function SearchBar() {
    return (
        <form className="flex items-center border rounded-md px-2 focus-within:border-black w-96">
            <input type="text" placeholder="Search for product" className="border border-gray-300 w-full rounded-md px-4 py-2 outline-none border-none" />
            <SearchIcon className="w-4 h-4"/>
        </form>
    )
}