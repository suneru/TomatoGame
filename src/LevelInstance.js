class LevelInstance {
	constructor() {
		if (!LevelInstance.instance) {
			this.CurrentLevel = null;
			LevelInstance.instance = this;
		}

		return LevelInstance.instance;
	}

	setLevel(CurrentLevel) {
		this.CurrentLevel = CurrentLevel;
	}

	getLevel() {
		return this.CurrentLevel;
	}
}

const CurrentLevelInstance = new LevelInstance();
export default CurrentLevelInstance;
