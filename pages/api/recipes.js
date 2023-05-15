import {sendMethodNotAllowed, sendOk,} from '@/js/utils/apiMethods.js';
import {getCollection} from "@/js/utils/functions";
import {ObjectId,} from 'mongodb';
const COLLECTION_NAME = 'recipes';

const getRecipes = async () => {
	const collection = await getCollection(COLLECTION_NAME);
	return collection.find({}).toArray();
}

const getRecipe = async (id) => {
	const collection = await getCollection(COLLECTION_NAME);
	return collection.findOne({_id: new ObjectId(id)});
}

const postRecipe = async (recipes) => {
	const collection = await getCollection(COLLECTION_NAME);
	return collection.insertOne(recipes);
}

const putRecipe = async (recipes) => {
	const collection = await getCollection(COLLECTION_NAME);
	const id = recipes._id;
	delete recipes._id;
	return collection.updateOne({_id: new ObjectId(id)}, {$set: recipes});
}

const deleteRecipes = async (id) => {
	const collection = await getCollection(COLLECTION_NAME);
	return collection.deleteOne({_id: new ObjectId(id)});
}

export default async function handler(req, res) {

	const isAllowedMethod = req.method === 'GET' || req.method === 'POST' || req.method === 'PUT' || req.method === 'DELETE';
	if(!isAllowedMethod) {
		return sendMethodNotAllowed(res);
	}

	if(req.method === 'GET' && req.query.id) {
		const id = req.query.id;
		const recipe = await getRecipe(id);
		return sendOk(res, recipe);
	}
	else if(req.method === 'GET') {
		const recipes = await getRecipes();
		return sendOk(res, recipes);
	}
	else if(req.method === 'POST') {
		const recipe = req.body;
		const result = await postRecipe(recipe);
		return sendOk(res, result);
	}
	else if(req.method === 'PUT') {
		const recrecipesord = req.body;
		const result = await putRecipe(recrecipesord);
		return sendOk(res, result);
	}
	else if(req.method === 'DELETE') {
		const id = req.query.id;
		const result = await deleteRecipes(id);
		return sendOk(res, result);
	}
}