class UserInstance {
	constructor() {
		if (!UserInstance.instance) {
			this.CurrentUserName = null;
			UserInstance.instance = this;
		}

		return UserInstance.instance;
	}

	setUserName(CurrentUserName) {
		this.CurrentUserName = CurrentUserName;
	}

	getUserName() {
		return this.CurrentUserName;
	}
}

const CurrentUserName = new UserInstance();
export default CurrentUserName;
