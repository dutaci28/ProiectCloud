export default function InsertPage() {
	const insertRecipe = (event) => {
		event.preventDefault();
		const name = document.getElementById("name").value;
		const recipe = document.getElementById("recipe").value;
		const data = { name, recipe };
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
		<section style={{ backgroundColor: "white" }}>
			<div style={{ padding: '16px', fontSize: '24px', fontWeight: 600, color: '#2e2e2e', borderBottom: '1px solid #e5e5e5' }}>
				<h1 style={{ margin: "1rem", fontSize: "2.5rem", fontWeight: "bold", color: "#2d3748" }}>The Lazy Chef App</h1>
				<p style={{ margin: "1rem", fontSize: "1.5rem", color: "#2d3748" }}>Here you can add your own recipes:</p>
			</div>
			<form>
				<div style={{ margin: "1.5rem" }}>
					<label htmlFor="name" style={{ display: "block", marginBottom: "0.5rem", fontSize: "0.875rem", fontWeight: "500", color: "#374151" }}>
						Recipe name:
					</label>
					<input type="text" id="name" style={{ backgroundColor: "#F9FAFB", color: "#1F2937", fontSize: "0.875rem", padding: "0.625rem" }} placeholder="Pizza" required />
				</div>

				<div style={{ margin: "1.5rem" }}>
					<label htmlFor="recipe" style={{ display: "block", marginBottom: "0.5rem", fontSize: "0.875rem", fontWeight: "500", color: "#374151" }}>
						Recipe:
					</label>
					<textarea id="recipe" style={{ backgroundColor: "#F9FAFB", color: "#1F2937", fontSize: "0.875rem", padding: "0.625rem" }} placeholder="Get pizza composition and cook it for 15min." required />
				</div>

				<button type="submit" onClick={insertRecipe} style={{ margin: "1.5rem", backgroundColor: "#F59E0B", color: "#F9FAFB", fontSize: "0.875rem", borderRadius: "0.375rem", padding: "0.625rem 1.25rem" }}>Submit</button>
			</form>
		</section>
	)
}