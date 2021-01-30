exports.GetConcursos = async (browser) => {
	try {
		const page = await browser.newPage();
		await page.goto("https://editalconcursosbrasil.com.br/concursos-abertos/nacionais/");

		const pageData = await page.evaluate(() => {
			const listConcursos = [];

			document.querySelectorAll(".lista > article > div > h3 > a").forEach((link) => {
				listConcursos.push({
					title: link.innerText,
					link: link.href,
				});
			});

			return listConcursos;
		});

		return pageData;
	} catch (e) {
		console.log("Edital concursos  -------------");
		console.log(e);
		console.log("-------------");
		return 0;
	}
};
