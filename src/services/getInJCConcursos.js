exports.GetConcurso = async (browser) => {
	try {
		const page = await browser.newPage();
		await page.goto("https://jcconcursos.uol.com.br/");

		const pageData = await page.evaluate(() => {
			const listConcursos = [];

			document.querySelectorAll(".container > .row > .col-12.col-lg-8").forEach((element) => {
				element.querySelectorAll("a").forEach((link) => {
					listConcursos.push({
						title: link.innerText,
						link: link.href,
					});
				});
			});

			return listConcursos;
		});

		return pageData;
	} catch (e) {
		console.log("JC concursos -------------");
		console.log(e);
		console.log("-------------");
		return 0;
	}
};
