exports.GetConcurso = async (browser) => {
	try {
		const page = await browser.newPage();
		await page.goto("https://www.pciconcursos.com.br/");

		const listConcursos = await page.evaluate(() => {
			const concursos = [];

			document.querySelectorAll(".noticia > h3 > a").forEach((link) => {
				concursos.push({
					title: link.innerText,
					link: link.href,
				});
			});

			return concursos;
		});

		return listConcursos;
	} catch (e) {
		console.log("PCI concursos -------------");
		console.log(e);
		console.log("-------------");
		return 0;
	}
};
