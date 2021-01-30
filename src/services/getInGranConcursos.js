exports.GetConcurso = async (browser) => {
	try {
		const page = await browser.newPage();
		await page.goto("https://blog.grancursosonline.com.br/");

		const listConcursos = await page.evaluate(() => {
			const concursos = [];

			document.getElementById("mvp_catlist_widget-2").querySelectorAll("a").forEach((link) => {
				const prepareObjectResult = {
					link: link.href,
				};

				const spanElements = link.getElementsByTagName("span");

				for (let i = 0; i < spanElements.length; i++) {
					const element = spanElements[i];

					if (element.className) {
						prepareObjectResult.tag = element.innerText;
					} else {
						prepareObjectResult.title = element.innerText;
					}
				}

				concursos.push(prepareObjectResult);
			});

			return concursos;
		});

		return listConcursos;
	} catch (e) {
		console.log("Gran concursos -------------");
		console.log(e);
		console.log("-------------");
		return 0;
	}
};
