import { Action } from '@ngrx/store';

/**
 * Purpose of this function is to take the current state and copy it over to the new state based on
 * whatever changes the action is trying to make
 * @param state the app's state
 * @param action action set
 */

export function simpleReducer(state: string = 'Hello World', action: Action): string {
  console.log(action.type, state);

  // we can handle this logic with a switch statement that takes the action type as the argument
  switch (action.type) {
    case 'SPANISH':
      return state = 'Hola Mundo';

    case 'FRENCH':
      return state = 'Bonjour le monde';

    default:
      return state;
  }
}
