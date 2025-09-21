import "./index.scss";
document.addEventListener("DOMContentLoaded", function () {
	try {
		const root: HTMLDivElement | null = document.querySelector("#root");
		const app: HTMLDivElement | null = document.createElement("div");

		if (!root || !app) {
			throw new Error("Не удалось загрузить #root или .app");
		}
		app.classList.add("app");
		app.textContent = "Hello, Todo-list!";
		root?.append(app);
	} catch (error) {
		console.log(error);
	}
});
