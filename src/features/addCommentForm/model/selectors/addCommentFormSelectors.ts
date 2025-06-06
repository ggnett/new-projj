import { StateSchema } from 'app/providers/StoreProvider';

export const addCommentFromText = (state:StateSchema) => state.addCommentForm?.text ?? '';

export const addCommentFormError = (state:StateSchema) => state.addCommentForm?.error;
