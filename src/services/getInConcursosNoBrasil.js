exports.GetConcursos = async (browser) => {
	try {
		const page = await browser.newPage();
		await page.goto("https://www.concursosnobrasil.com.br/");

		const pageData = await page.evaluate(() => {
			const listConcursos = [];

			document.querySelectorAll(".destaques > div > .coluna-destaques > .destaque-item > h3 > a").forEach((link) => {
				listConcursos.push({
					title: link.innerText,
					link: link.href,
				});
			});

			return listConcursos;
		});

		return pageData;
	} catch (e) {
		console.log("Concursos no brasil -------------");
		console.log(e);
		console.log("-------------");
		return 0;
	}
};
