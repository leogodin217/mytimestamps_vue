import Vue from 'vue'
import Vuex from 'vuex'
import {v4 as uuidv4 } from 'uuid';
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    timestamps: [
      {
        id: 1, 
        timestamp: new Date(), 
        message: "Drank coffee", 
        categoryId: 4,
        category: "Nutrition",
        fields: []
      },
      {
        id: 2, 
        timestamp: new Date(), 
        message: "Started MyTimestamps", 
        categoryId: 6,
        category: "Work",
        fields: []
      },
      {
        id: 3, 
        timestamp: new Date(), 
        message: "Tested Fitbit in my pocket for the treadmill", 
        categoryId: 3,
        category: "Fitness",
        fields: [
          {name: "field1", label: "Activity", type: "string", vlaue: "lat pull down"},
          {name: "field2", label: "Value", type: "number", value: 10},
          {name: "field3", label: "Units", type: "string", value: "reps"},
          {name: "field4", label: "Weight (lbs)", type: "number", value: 90}
        ]
      },
    ],
    categories: [
      {
        id: 1, 
        category: "Default",
        fields: []
      },
      {
        id: 2, 
        category: "Health",
        fields: [
          {name: "field1", label: "Metric", type: "string", value: null},
          {name: "field2", label: "Value", type: "number", value: null}
        ] 
      },
      {
        id: 3, 
        category: "Fitness",
        fields: [
          {name: "field1", label: "Activity", type: "string", value: null},
          {name: "field2", label: "Value", type: "number", value: null},
          {name: "field3", label: "Units", type: "string", value: null},
          {name: "field4", label: "Weight (lbs)", type: "number", value: null}
        ]
      },
      {id: 4, category: "Nutrition", fields: []},
      {
        id: 5, 
        category: "Incompetence",
        fields: [
          {name: "field1", label: "Company", type: "string", value: null},
          {name: "field2", label: "Agreement", typpe: "string", value: null}
        ]
      },
      {id: 6, category: "Work", fields: []},
      {id: 7, category: "Life", fields: []},
    ]
  },
  mutations: {
    addTimestamp(state, timestamp) {
      const newTimestamp = {...timestamp};
      newTimestamp.id = uuidv4();
      state.timestamps = [...state.timestamps, newTimestamp];
    }
  },
  actions: {
  },
  modules: {
  }
})
