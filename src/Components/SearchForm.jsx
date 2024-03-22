import { useGlobalContext } from "../context";

const SearchForm = () => {
  const { query, setQuery } = useGlobalContext();
  console.log(query);
  return (
    <form onSubmit={(e) => e.preventDefault()}>
      <input
        type="text"
        className="py-2 px-6 text-lg rounded-3xl  outline-none focus:ring-2 focus:ring-blue-600 lg:w-[360px] placeholder:text-stone-800"
        placeholder="Parasite"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
    </form>
  );
};

export default SearchForm;
