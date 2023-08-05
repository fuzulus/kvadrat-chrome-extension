const descriptions = [...document.querySelectorAll('ul div.entity-description div.entity-description-main')].filter((element) => !!(element.textContent.trim()));
const prices = [...document.querySelectorAll('ul li.price-item strong.price')];

for (const i in descriptions) {
    const description = descriptions[i];
    const areaRegex = new RegExp(/Stambena površina: (\d+\.{0,1}\d*) m2/gm);
    const searchResults = areaRegex.exec(description.textContent);
    
    if (null !== searchResults) {
        const area = new Number(searchResults[1]);
        const priceElement = prices[i];
        const splitPrices = priceElement.textContent.split('/');

        const euro = new Number(splitPrices[0].replace('€', '').replace(/\./g, '').replace(/,/g, '.').trim());
        const hrk = new Number(splitPrices[1].replace('kn', '').replace(/\./g, '').replace(/,/g, '.').trim());

        const euroPerSquareMeter = (euro / area).toFixed(2);
        const hrkPerSquareMeter = (hrk / area).toFixed(2);

        priceElement.textContent = `${euroPerSquareMeter} €/m2 - ${hrkPerSquareMeter} kn/m2\n${priceElement.textContent}`;
    }
}