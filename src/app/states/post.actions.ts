import {Action} from '@ngrx/store';

// this time we wanna send data along with our actions so we'll define each one as its own class that implements the action interface

export const EDIT_TEXT = '[Post] Edit';
export const UPVOTE = '[Post] Upvote';
export const DOWNVOTE = '[Post] Downvote';
export const RESET = '[Post] Reset';

export class EditText implements Action {
  readonly type = EDIT_TEXT;

  // to send data w/ this action we need to define a constructor that has the payload property
  constructor(public payload: string){}
}

// the rest don't need a data payload therefore no need for constructor
export class Upvote implements Action {
  readonly type = UPVOTE;
}
export class Downvote implements Action {
  readonly type = DOWNVOTE;
}
export class Reset implements Action {
  readonly type = RESET;
}

// we will then export all these actions as a single type so that they can easily be added for strong-typing in other files

export type All
  = Upvote
  | Downvote
  | Reset
  | EditText;

