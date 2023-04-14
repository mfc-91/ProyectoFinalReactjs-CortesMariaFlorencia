import { CANTIDAD_SET  } from "../types";

export default (state, action) => {
    const { payload, type } = action;

    switch (type) {
		case CANTIDAD_SET:
			return {
				...state,
				count: payload,
			};
        default:
            return state;
    }
};
