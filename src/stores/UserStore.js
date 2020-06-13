import { extendObservable } from "mobx";

class UserStore {
	constructor() {
		extendObservable(this, {
			loading: true,
			isLoggedIn: false,
			username: "",
			userID:-1
		});
	}
}
export default new UserStore();
