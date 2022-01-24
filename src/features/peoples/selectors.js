import { peoplesEntityAdapter } from "./peoplesSlice";

export const { selectEntities, selectIds: peoplesIdsSelector, selectTotal, selectById: peopleByIdSelector, selectAll: peoplesSelector } = peoplesEntityAdapter.getSelectors(state => state.peoples);

// (state, id) => state.entities[id]
