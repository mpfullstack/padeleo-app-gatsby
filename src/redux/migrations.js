import { v4 as uuidv4, validate } from "uuid";

const migrations = {
  1: (state) => {
    // Migration to adapt match ids to uuidv4 and dateAndTime match field from single Date string
    // to { start: [Date string], end: [Date string] } object
    if (state) {
      const newEntities = {};
      const newIds = state.ids.map((id, i) => {
        let newId = id;
        if (!validate(id)) {
          newId = uuidv4();
          newEntities[newId] = {
            ...state.entities[id],
            id: newId
          };
        } else {
          newEntities[id] = {...state.entities[id]};
        }

        // Check dateAndTime match field
        if (typeof newEntities[newId].dateAndTime === "string") {
          const dateAndTime = newEntities[newId].dateAndTime;
          newEntities[newId].dateAndTime = {
            start: dateAndTime,
            end: ""
          };
        }
        return newId;
      });
      return {
        ...state,
        ids: newIds,
        entities: newEntities
      };
    } else {
      return { ...state };
    }
  }
};

export default migrations;