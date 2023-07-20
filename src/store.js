import {reactive} from "vue"

export const store = reactive({
    filmResults: [],
    serieResults: [],
    queryToSearch: "Spiderman",
    selectedCategory: "All"
});