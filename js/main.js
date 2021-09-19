import dragAndDrop from "./dragAndDrop.js";
import cardOptions from "./cardOptions.js";
import filters from "./filters.js";
import sort from "./sort.js";

dragAndDrop();
cardOptions();
filters(".menu__item", ".cards__container");
filters(".filter__item", ".card");
sort();
