import { useEffect, useState } from "react";

export default function MainPage() {
	const [recipes, setRecipes] = useState([]);

	useEffect(() => {
		try {
			fetch('/api/recipes', {
				method: 'GET',
			})
				.then(response => response.json())
				.then(json => setRecipes(json.data));
		}
		catch (error) {
			console.log(error);
		}
	}, []);

	const deleteRecipe = (event) => {
		event.preventDefault();
		const id = event.target.id;
		try {
			fetch(`/api/recipes?id=${id}`, {
				method: 'DELETE',
			})
				.then(response => response.json())
				.then(json => {
					setRecipes(recipes.filter(recipe => recipe._id !== id));
				});
		}
		catch (error) {
			console.log(error);
		}
	}

	return (
		<section className="bg-white">
			<h1 className="m-4 text-4xl">The lazy chef app</h1>
			<p className="m-4 text-2xl">This app is meant for people love food but can't really cook. Here are a couple of easy recipes:</p>
			{recipes.map(recipe => (
				<div className="p-3 bg-white shadow hover:bg-gray-200" key={recipe._id}>
					<h5 className="m-2 text-xl font-bold text-gray-900">
						{recipe.name + " "}
						<button type="button"
							id={recipe._id}
							onClick={deleteRecipe}
							className="bg-orange-400 hover:bg-orange-600 font-medium rounded-lg text-sm px-3 py-1">Delete
						</button>
					</h5>
					<p className="text-gray-600">
						{recipe.recipe}
					</p>
				</div>
			))}
		</section>
	)
}