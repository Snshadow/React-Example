import { legacy_createStore as createStore } from 'redux';
import { Provider } from 'react-redux';
import './App.css';
import { PeopleList } from './components/PeopleList';
import { AddPersonForm } from './components/AddPersonForm';
import { addPerson, delPerson } from "./action";

const initialState = {
    contacts: ["James Smith", "Thomas Anderson", "Bruce Wayne"]
};

export default function reducer(state = initialState, action) {

    switch(action.type) {
        case 'ADD_PERSON':
            if (state.contacts.length < 1) {
                return {
                    contacts: [...state.contacts, action.data]
                }
            }
            else {
                for (let el of state.contacts) {
                    if (el === action.data) {
                        alert("The value already exists!");
                        break;
                    } else if (el === state.contacts[state.contacts.length - 1]) {
                        return {
                            contacts: [...state.contacts, action.data]
                        }
                    }
                }
            }
            break;
        case 'DEL_PERSON':
            return {
                contacts: state.contacts.filter((li) => li !== action.data.innerText)
            }
        default:
    }
    return state;
}

const store = createStore(reducer);
export function App() {
  return (
      <Provider store={store}>
        <AddPersonForm atSubmit={addPerson} />
        <PeopleList onClick={delPerson} />
      </Provider>
  );
}
