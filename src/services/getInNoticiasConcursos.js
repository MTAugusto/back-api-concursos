exports.GetConcurso = async (browser) => {
	try {
		const page = await browser.newPage();
		await page.goto("https://noticiasconcursos.com.br/");

		const listConcursos = await page.evaluate(() => {
			const concursos = [];

			document.querySelectorAll("div.jeg_heroblock_wrapper").forEach((element) => {
				element.querySelectorAll("h2.jeg_post_title > a").forEach((link) => {
					concursos.push({
						title: link.innerText,
						link: link.href,
					});
				});
			});

			return concursos;
		});

		return listConcursos;
	} catch (e) {
		console.log("Noticias concursos -------------");
		console.log(e);
		console.log("-------------");
		return 0;
	}
};
