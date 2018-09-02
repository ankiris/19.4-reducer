
import {
    ADD_COMMENT,
    EDIT_COMMENT,
    REMOVE_COMMENT,
    THUMB_UP_COMMENT,
    THUMB_DOWN_COMMENT
  } from "./actions";

import {
    addComment,
    removeComment,
    editComment,
    tumbUp,
    tumbDown
} from "./actions";

const initialState = {
    comments: [],
    users: []
};

function comments(state = initialState, action) {
    switch(action.type) {
        case ADD_COMMENT:
            return Object.assign({}, state, {
                comments: [
                {
                    id: action.id,
                    text: action.text,
                    votes: 0
                }
                , ...state.comments]
            });
        case REMOVE_COMMENT:
            return Object.assign({}, state, {
                comments: state.comments.filter(comment => comment.id !== action.id)
            });

        case EDIT_COMMENT:
            return Object.assign({}, state, {
                comments: [
                    {
                        id: current.id,
                        text: action.text,
                        votes: current.votes
                    }
                    , ...state.comments.filter(comment => comment.id !== action.id)
                ]
            });
    

        case THUMB_UP_COMMENT:
            return Object.assign({}, state, {
                comments: [
                    {
                        id: current.id,
                        text: current.text,
                        votes: current.votes + 1
                    }
                    , ...state.comments.filter(comment => comment.id !== action.id)
                ]
            });

        case THUMB_DOWN_COMMENT:
            return Object.assign({}, state, {
                comments: [
                    {
                        id: current.id,
                        text: current.text,
                        votes: current.votes - 1
                    }
                    , ...state.comments.filter(comment => comment.id !== action.id)
                ]
            });

        default:
            return state;
    }
}

export default comments;