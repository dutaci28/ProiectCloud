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
		<section style={{ backgroundColor: "white" }}>
			<h1 style={{ margin: "1rem", fontSize: "2.5rem", fontWeight: "bold", color: "#2d3748" }}>The Lazy Chef App</h1>
			<p style={{ margin: "1rem", fontSize: "1.5rem", color: "#2d3748" }}>This app is meant for people who love food but can't really cook. Here are a couple of easy recipes:</p>
			{recipes.map(recipe => (
				<div key={recipe._id} style={{ padding: "1rem", backgroundColor: "white", boxShadow: "0 1px 2px 0 rgba(0, 0, 0, 0.05)", borderRadius: "0.375rem" }}>
					<h5 style={{ margin: "0.5rem 0", fontSize: "1.25rem", fontWeight: "bold", color: "#2d3748" }}>
						{recipe.name}{" "}
						<button
							type="button"
							id={recipe._id}
							onClick={deleteRecipe}
							style={{ backgroundColor: "#ed8936", color: "white", borderRadius: "0.375rem", fontSize: "0.875rem", fontWeight: "medium", padding: "0.5rem 1rem", marginLeft: "1rem" }}>
							Delete
						</button>
					</h5>
					<p style={{ color: "#4a5568", marginTop: "0.5rem" }}>{recipe.recipe}</p>
				</div>
			))}
		</section>

	)
}