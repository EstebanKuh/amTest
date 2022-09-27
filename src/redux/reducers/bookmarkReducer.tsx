import { CharacterInfo } from "src/types";
import { ADD_FAVORITE, REMOVE_FAVORITE } from "../constants";

const bookmarInit: CharacterInfo[] = [];

const stateInit = {
    bookmarks: bookmarInit
}

const reducer = (state = stateInit, action: any) => {
    switch (action.type) {
        case ADD_FAVORITE:
            if (state.bookmarks.length === 0) return { bookmarks: [action.character] }

            if (state.bookmarks.find((character) => character.id === action.character.id)) {
                return {
                    bookmarks: state.bookmarks.filter(
                        (character) => character.id !== action.character.id
                    )
                }
            }

            if (state.bookmarks.length < 5) {
                return {
                    bookmarks: [...state.bookmarks, action.character]
                }
            }
            return state;
        case REMOVE_FAVORITE:
            return {
                bookmarks: state.bookmarks.filter(
                    (character) => character.id !== action.character.id
                )
            }
        default:
            return state;
    }
}

export default reducer;