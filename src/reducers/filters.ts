import { Reducer } from "redux";

import { CHANGE_FILTER } from "../constants";

const BASE_FILTER = "all";

const filter: Reducer<string, { type: string; activeFilter: string }> = (
   state = BASE_FILTER,
   { type, activeFilter }
) => {
   switch (type) {
      case CHANGE_FILTER:
         return activeFilter;
      default:
         return state;
   }
};

export default filter;
