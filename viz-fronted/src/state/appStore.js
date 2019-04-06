import { store } from 'react-easy-state';
import { data } from '../dataSets/visualization1';
export const appStore = store({
	team: 'sudo-su',
	dataSets: {
		visualization1: data
	}
});
