exports.GetConcursos = async (browser) => {
	try {
		const page = await browser.newPage();
		await page.goto("https://www.acheconcursos.com.br/");

		const pageData = await page.evaluate(() => {
			const listConcursos = [];

			document.querySelectorAll(".row.bar-atualizados.lst-min.data > .list-item.col-12.my-2 > h2 > a")
				.forEach((link) => {
					listConcursos.push({
						title: link.innerText,
						link: link.href,
					});
				});

			return listConcursos;
		});

		return pageData;
	} catch (e) {
		console.log("Ache concursos  -------------");
		console.log(e);
		console.log("-------------");
		return 0;
	}
};
