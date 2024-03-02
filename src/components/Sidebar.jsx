import { useRecoilState, useRecoilValue } from "recoil";
import { AllFiltersSelector, filterParamsAtom } from "../recoil";

const Sidebar = () => {
  const filtersSelector = useRecoilValue(AllFiltersSelector);
  const [filterParams, setFilterParams] = useRecoilState(filterParamsAtom);
  console.log(filterParams);

  return (
    <div className="w-1/3 max-w-72 h-[95vh] p-4 flex flex-col bg-gray-100 shadow-lg rounded-md gap-4">
      <h1 className="text-2xl font-semibold text-gray-700 px-1 text-center">
        Filter Products
      </h1>
      <input
        className="w-full p-2 border border-gray-300 rounded-md"
        type="text"
        placeholder="Search"
        value={filterParams.search}
        onChange={(e) =>
          setFilterParams({ ...filterParams, search: e.target.value })
        }
      />

      <div className="flex flex-col gap-1 ">
        <label className="text-gray-700 text-sm px-1" htmlFor="category">
          Category
        </label>
        <select
          value={filterParams.category}
          onChange={(e) =>
            setFilterParams({ ...filterParams, category: e.target.value })
          }
          className="w-full p-2 border text-sm border-gray-300 rounded-md"
        >
          {filtersSelector.categories.map((category) => (
            <option
              className="text-gray-700 text-sm px-1"
              key={category}
              value={category}
            >
              {category.toUpperCase()}
            </option>
          ))}
        </select>
      </div>

      <div className="flex flex-col gap-1 ">
        <label className="text-gray-700 text-sm px-1" htmlFor="price">
          Maximum Price
        </label>
        <input
          type="range"
          id="price"
          min={0}
          max={filtersSelector.priceRange[1]}
          value={filterParams.price}
          onChange={(e) =>
            setFilterParams({ ...filterParams, price: e.target.value })
          }
        />
        <span className="text-gray-700 text-sm px-1">
          {filterParams.price && `₹${filterParams.price}`}
        </span>
      </div>

      <div className="flex flex-col gap-1 ">
        <label className="text-gray-700 text-sm px-1" htmlFor="available">
          Availability
        </label>
        <select
          className="w-full p-2 text-sm border border-gray-300 rounded-md"
          value={filterParams.available}
          onChange={(e) => {
            setFilterParams({ ...filterParams, available: e.target.value });
          }}
        >
          <option className="text-gray-700 text-sm px-1" value={"All"}>
            All
          </option>
          <option className="text-gray-700 text-sm px-1" value={"Available"}>
            Available
          </option>
          <option className="text-gray-700 text-sm px-1" value={"Out of Stock"}>
            Out of Stock
          </option>
        </select>
      </div>

      <div className="flex flex-col gap-1 ">
	  
        <label className="text-gray-700 text-sm px-1" htmlFor="rating">
          Minimum Rating
        </label>
        <input
          type="range"
          id="rating"
          min={0}
          max={5}
          value={filterParams.rating}
          onChange={(e) =>
            setFilterParams({ ...filterParams, rating: e.target.value })
          }
        />
        <span className="text-gray-700 text-sm px-1">
          {filterParams.rating + `⭐`}
        </span>
      </div>
    </div>
  );
};

export default Sidebar;
