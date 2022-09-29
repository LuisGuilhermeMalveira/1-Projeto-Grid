const baloes = document.querySelectorAll(".baloes");

console.log(baloes);

baloes.forEach((balao) => {
	balao.addEventListener("click", () => {
		if (balao.classList.contains("focobalao")) {
			balao.classList.remove("focobalao");
			console.log(balao);
		} else {
			balao.classList.add("focobalao");
			console.log(balao);
		}
	});
});
