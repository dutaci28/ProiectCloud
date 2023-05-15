export default function InsertPage() {
	const insertRecipe = (event) => {
		event.preventDefault();
		const name = document.getElementById("name").value;
		const recipe = document.getElementById("recipe").value;
		const data = {name, recipe};
		fetch("/api/recipes", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(data),
		}).then(() => {
			document.getElementById("name").value = "";
			document.getElementById("recipe").value = "";
		});
	}

	return (
		<section className="bg-white">
				<h1 className="m-4 text-4xl">The lazy chef app</h1>
				<p className="m-4 text-2xl">This app is meant for people love food but can't really cook. Here are a couple of easy recipes:</p>

				<form>
					<div className="mb-6">
						<label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900">Recipe name:</label>
						<input type="text" id="name"
						       className="bg-gray-50 text-gray-900 text-sm block p-2.5"
						       placeholder="Pizza" required/>
					</div>
					<div className="mb-6">
						<label htmlFor="recipe"
						       className="block mb-2 text-sm font-medium text-gray-900">Recipe:</label>
						<textarea id="recipe"
						       className="bg-gray-50 text-gray-900 text-sm block p-2.5"
						       placeholder="Get pizza composition and cook it for 15min." required/>
					</div>
					<button type="submit"
					        onClick={ insertRecipe }
					        className="bg-orange-400 hover:bg-orange-600 font-medium rounded-lg text-sm px-3 py-1">Submit
					</button>
				</form>
		</section>
	)
}