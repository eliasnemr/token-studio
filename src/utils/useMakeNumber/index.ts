import { useContext } from 'react';

import Decimal from 'decimal.js';
import { appContext } from '../../AppContext';
import formatNumberPreference from '../formatNumberPreference/formatNumberPreference';
import getCharacterCountAfterChar from '../getCharacterCountAfterChar/getCharacterCountAfterChar';

Decimal.set({ precision: 44 });

const useFormatMinimaNumber = () => {
    const { _currencyFormat } = useContext(appContext);

    const makeMinimaNumber = (initialValue: string, decimals: number) => {
        try {
            if (initialValue.length === 0) {
                throw new Error('No value passed for formatter.');
            }

            return formatNumberPreference(
                new Decimal(initialValue).toString(),
                decimals,
                getCharacterCountAfterChar(initialValue, '.') > decimals ? '...' : '',
                _currencyFormat
            );
        } catch (error) {
            // console.error(error);
            return 0;
        }
    };

    return { makeMinimaNumber };
};

export default useFormatMinimaNumber;
