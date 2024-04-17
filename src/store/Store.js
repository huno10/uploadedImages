import { configureStore, createSlice } from '@reduxjs/toolkit';



const tasksSlice = createSlice({
    name: 'person',
    initialState: [
        {
            id: 1,
            img: 'https://kartinki.pics/uploads/posts/2021-03/1616115766_32-p-krasivie-devushki-krasivie-foto-35.jpg',
            name: 'Lego'
        },
        {
            id: 2,
            img: 'https://gagaru.club/uploads/posts/2023-02/1676468335_gagaru-club-p-chistoe-krasivoe-litso-vkontakte-54.jpg',
            name: 'Lego'
        }
    ],
    reducers: {
        updatePerson: (state, action) => {
            const { id, updates } = action.payload;
            const person = state.find(person => person.id === id);

            if (person) {
                Object.keys(updates).forEach(key => {
                    person[key] = updates[key];
                });
            }
        },
    },
});



export const { updatePerson } = tasksSlice.actions

const store = configureStore({
    reducer: {
        person: tasksSlice.reducer,
    },
});

export default store;