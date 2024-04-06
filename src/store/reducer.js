import * as actions from './action'

const initalseState = {
    // user: null,
    workers: [],
    Worker: null,
    // shoplist:[],
    // roles: [""]
}

const reducer = (state = initalseState, action) => {
    switch (action.type) {
        case actions.SET_WORKERS:
            return { ...state, workers: action.workers }
        case actions.SET_WORKER:
            return { ...state, worker: action.worker }
        case action.DELETE_WORKER:
            return {...state,workers:state.workers.map(w=>w.id!=action.worker.id)}    
        // case actions.SET_RECIPE:
        //     return { ...state, recipes: action.recipes}
        // case actions.SET_CATEGORIES:
        //     return { ...state, categories: action.ctgrs}
        // case actions.SET_SHP_LST:
        //     return { ...state, shoplist: action.shopinglist }
        // case actions.ADD_RECIPE:
        //     const recipes = [...state.recipes];
        //     recipes.push(action.recipe);
        //     return { ...state, recipes }
        //     case actions.ADD_TO_SHPLST:{
        //         const shoplist = [...state.shoplist];
        //         shoplist.push(action.prod);
        //         return { ...state, shoplist }
        //     }
        //     case actions.UPDATE_TO_SHPLST: {
        //         const shoplist = [...state.shoplist];
        //         const findIndex = shoplist.findIndex(x => x.Id === action.prod.Id);
        //         shoplist[findIndex] = action.prod;
        //         return { ...state, shoplist }
        //     }
        //     case actions.ADD_CATEGORY:{
        //         const categories = [...state.categories];
        //         categories.push(action.c);
        //         return { ...state, categories }
        //     }
        //     case actions.EDIT_RECIPE: {
        //     const recipes = [...state.recipes];
        //     const findIndex = recipes.findIndex(x => x.Id === action.recipe.Id);
        //     recipes[findIndex] = action.recipe;
        //     return { ...state, recipes }
        // }
        // case actions.DELETE_RECIPE: {
        //     const recipes = state.recipes.filter(x => x.Id !== action.id);
        //     return { ...state, recipes }
        // }
        // case actions.DEL_TO_SHPLST: {
        //     const shoplist = state.shoplist.filter(x => x.Id !== action.id);
        //     return { ...state, shoplist }
        // }
        // case actions.SET_CHOSEN:
        //     return { ...state, recipe: action.recipe }
        // case actions.SET_USER:
        //     return { ...state, user: action.user }

        default: return { ...state }
    }
}

export default reducer;