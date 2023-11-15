const db = require('../db/dbConfig');

const getAllSwords = async () => {
	try {
		const allSwords = await db.any('SELECT * FROM swords');
		return allSwords;
	} catch (error) {
		return error;
	}
};

const getSword = async (id) => {
	try {
		const oneSword = await db.one('SELECT * FROM swords WHERE id=$1', id);
		return oneSword;
	} catch (error) {
		return error;
	}
};

const createSword = async (sword) => {
	try {
		const newSword = await db.one(
			'INSERT INTO swords (  name, maker, price, is_upgraded, is_cursed, rarity) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *',
			[
				sword.name,
				sword.maker,
				sword.price,
				sword.is_upgraded,
				sword.is_cursed,
				sword.rarity,
			]
		);
		return newSword;
	} catch (error) {
		return error;
	}
};
const deleteSword = async (id) => {
	try {
		const deletedSword = await db.one(
			'DELETE FROM swords WHERE id=$1 RETURNING *',
			id
		);
		return deletedSword;
	} catch (error) {
		return error;
	}
};
const updateSword = async (id, sword) => {
	try {
		const updatedSword = await db.one(
			'UPDATE swords SET name=$1, maker=$2, price=$3, is_upgraded=$4, is_cursed=$5, rarity=$6 WHERE id=$7 RETURNING *',
			[
				sword.name,
				sword.maker,
				sword.price,
				sword.is_upgraded,
				sword.is_cursed,
				sword.rarity,
			]
		);
		return updatedSword;
	} catch (error) {
		return error;
	}
};

module.exports = {
	getAllSwords,
	getSword,
	createSword,
	deleteSword,
	updateSword,
};
