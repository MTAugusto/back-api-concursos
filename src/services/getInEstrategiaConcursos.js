exports.GetConcurso = async (browser) => {
	try {
		const page = await browser.newPage();
		await page.goto("https://www.estrategiaconcursos.com.br/");

		const listConcursos = await page.evaluate(() => {
			const concursos = [];

			document.querySelectorAll("section.card-post > h1.card-post-title.-large > a").forEach((link) => {
				concursos.push({
					title: link.innerText.replace("/n", "").trim(),
					link: link.href,
				});
			});

			return concursos;
		});

		return listConcursos;
	} catch (e) {
		console.log("Estrategia concursos -------------");
		console.log(e);
		console.log("-------------");
		return 0;
	}
};
