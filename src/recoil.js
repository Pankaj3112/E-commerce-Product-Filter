import { atom, selector } from "recoil";
import axios from "axios";

export const productsListAtom = atom({
  key: "productsListAtom",
  default: selector({
	key: "productsListDefault",
	get: async () => {
	  const response = await axios.get(
		"https://task-manager-be-pink.vercel.app/get-ecommerce-products"
	  );
	  return response.data;
	},
  }),
});

export const AllFiltersSelector = selector({
  key: "AllFiltersSelector",
  get: ({ get }) => {
    const products = get(productsListAtom);

    let categories = Array.from(
      new Set(products.map((product) => product.category))
    );
    categories = ["All", ...categories];

    const priceRange = [
      Math.min(...products.map((product) => product.price)),
      Math.max(...products.map((product) => product.price)),
    ];
    return {
      categories,
      priceRange,
    };
  },
});

export const filterParamsAtom = atom({
  key: "filterParamsAtom",
  default: {
    search: "",
    category: "All",
    price: undefined,
    available: "All",
    rating: 0,
  },
});

export const filteredProductsSelector = selector({
  key: "filteredProductsSelector",
  get: ({ get }) => {
    const filterParams = get(filterParamsAtom);
    const products = get(productsListAtom);

    const filteredProducts = products.filter((product) => {
      const categoryMatch =
        filterParams.category === "All" ||
        filterParams.category === product.category;

      const searchMatch = product.title
        .toLowerCase()
        .includes(filterParams.search.toLowerCase());

      const priceMatch =
        filterParams.price === undefined || filterParams.price >= product.price;

      const availabilityMatch =
        filterParams.available === "All" ||
        filterParams.available === product.available;

      const ratingMatch = filterParams.rating <= Math.round(product.rating.rate);

      return (
        categoryMatch &&
        searchMatch &&
        priceMatch &&
        availabilityMatch &&
        ratingMatch
      );
    });

    return filteredProducts;
  },
});
