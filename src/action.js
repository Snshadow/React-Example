export function addPerson(person) {
    return {
        type: 'ADD_PERSON',
        data: person
    }
}
export function delPerson(li) {
    return {
        type: 'DEL_PERSON',
        data: li
    }
}