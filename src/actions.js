import uuid from uuid;

const ADD_COMMENT = 'ADD_COMMENT';
const REMOVE_COMMENT = 'REMOVE_COMMENT';
const EDIT_COMMENT = 'EDIT_COMMENT';
const THUMB_UP_COMMENT = 'THUMB_UP_COMMENT';
const THUMB_DOWN_COMMENT = 'THUMB_DOWN_COMMENT';

function addComment(text) {
    return {
        type: ADD_COMMENT,
        text,
        id: uuid()
    };
}
  
function removeComment(id) {
    return {
        type: REMOVE_COMMENT,
        id: id
    };
}
  
function editComment(text, id) {
    return {
        type: EDIT_COMMENT,
        text: text,
        id: id
    };
}
  
function tumbUp(id, votes) {
    return {
        type: THUMB_UP_COMMENT,
        votes: votes,
        id: id
    };
}
  
function tumbDown(id, votes) {
    return {
        type: THUMB_DOWN_COMMENT,
        votes: votes,
        id: id
    };
}

export { addComment, removeComment, editComment, tumbUp, tumbDown };