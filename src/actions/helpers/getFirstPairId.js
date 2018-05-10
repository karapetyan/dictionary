import { store } from '../../store/store';

const getFirstPairId = () =>
    store.getState().test.pairs[0]

export default getFirstPairId;