import { ADD_INCREMENT, STR_DECCREMENT } from "../constants";

const initialState = {
  count: 0,
  records: [],
};

export default function cardItems(state = initialState, action) {
  const { data, type } = action;
  switch (type) {
    case ADD_INCREMENT:
      //state.records[data.id] = addproductquantity(state.records, data);
      state.records.push(addproductquantity(state.records, data));
      //state.records.splice(0, 0, addproductquantity(state.records, data));

      const cats = state.records.reduce(
        (catsSoFar, { id, quantity, price }) => {
          if (!catsSoFar[id]) catsSoFar[id] = [];
          catsSoFar[id].push({ quantity, price });
          return catsSoFar;
        },
        {}
      );

      //console.warn(cats);

      return { ...state, count: state.count + 1 };
    case STR_DECCREMENT:
      const filterInPlace = (array, predicate) => {
        let end = 0;
        let kik = 0;

        for (let i = 0; i < array.length; i++) {
          const obj = array[i];

          if (predicate(obj)) {
            array[end++] = obj;
          } else {
            if (kik != 0) {
              array[end++] = obj;
            }
            kik++;
          }
        }

        array.length = end;
        return array;
      };

      const toDelete = new Set([data.id]);

      let ind = state.records.findIndex((el) => el.id === data.id);
      return {
        ...state,
        // records: state.records.filter((el) => el.id !== data.id),
        //records: state.records.splice(ind, 1),
        records: filterInPlace(state.records, (obj) => !toDelete.has(obj.id)),
      };
      //console.warn(data)

      // state.records.pop(data)
      //console.warn(state.records)

      return { ...state, count: state.count < 1 ? 0 : state.count - 1 };

    default:
      return state;
  }
}
function addproductquantity(pproduct, product) {
  return product;
}
