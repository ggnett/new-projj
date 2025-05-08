import { StateSchema } from 'app/providers/StoreProvider/config/StateSchema';

// Возвращает весь стейт
export const getCounter = (state: StateSchema) => state.counter;
