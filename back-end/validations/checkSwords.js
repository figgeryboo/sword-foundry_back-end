const checkName = (req, res, next) => {
	if (req.body.name) {
		next();
	} else {
		res.status(400).json({ error: 'The name of the sword is required' });
	}
};
const checkMaker = (req, res, next) => {
	if (req.body.maker) {
		return next();
	} else {
		res.status(400).json({ error: 'The maker of the sword is required' });
	}
};
const checkPrice = (req, res, next) => {
	if (req.body.price) {
		return next();
	} else {
		res.status(400).json({ error: 'A price is required' });
	}
};

const checkUpgrade = (req, res, next) => {
	const upgraded = req.body.is_upgraded;
	if (typeof upgraded === 'boolean') {
		next();
	} else {
		res.status(400).json({ error: 'Upgrade Status must be type boolean' });
	}
};

const checkCurses = (req, res, next) => {
	const cursed = req.body.is_cursed;
	if (typeof cursed === 'boolean') {
		next();
	} else {
		res.status(400).json({ error: 'Curse Status must be type boolean' });
	}
};

module.exports = {
	checkName,
	checkMaker,
	checkPrice,
	checkUpgrade,
	checkCurses,
};
