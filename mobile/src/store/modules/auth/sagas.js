import { Alert } from 'react-native';

import { takeLatest, call, put, all } from 'redux-saga/effects';

import { signInSuccess, signFailure } from './actions';
import api from '~/services/api';

export function* signIn({ payload }) {
    try {
        const { id } = payload;

        const response = yield call(api.get, `deliveryman/${id}`);

        const user = response.data;

        yield put(signInSuccess(user));
    } catch (err) {
        Alert.alert(
            'Falha na autenticação',
            'Houve um erro no login, verifique seus dados',
        );
        yield put(signFailure());
    }
}

export default all([takeLatest('@auth/SIGN_IN_REQUEST', signIn)]);
