import { useDispatch, useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { getCounterValue } from '../model/selectors/getCounterValue/getCounterValue';
import { counterActions } from '../model/slice/counterSlice';

export const Counter = () => {
    // Доступ к функциям прим: dispatch(counterActions.increment())
    const dispatch = useDispatch();
    // получение данных из стейта (передает в хук схему )
    const counterValue = useSelector(getCounterValue);
    // const counterValue = useCounterValue();
    const { t } = useTranslation();
    // useCounterActions предоставляет вызов экшенов напрямую (без диспатча)
    // const { decrement, increment, add } = useCounterActions();

    const handleIncrement = () => {
        dispatch(counterActions.increment());
        // increment();
    };

    const handleDecrement = () => {
        dispatch(counterActions.decrement());
        // decrement();
    };

    return (
        <div>
            <h1 data-testid="value-title">{counterValue}</h1>
            <button type="button" onClick={handleIncrement} data-testid="increment-btn">
                {t('increment')}
            </button>
            <button type="button" data-testid="decrement-btn" onClick={handleDecrement}>
                {t('decrement')}
            </button>
        </div>
    );
};
