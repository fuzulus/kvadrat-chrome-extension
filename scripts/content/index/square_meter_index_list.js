const adElements = Array.from(document.querySelectorAll('div.OglasiRezHolder'));

for (const adElement of adElements) {
    const areaElement = Array.from(adElement.querySelectorAll('ul.tags li')).find(el => -1 !== el.textContent.indexOf('m2\n :'));

    if (!areaElement) {
        continue;
    }

    const priceElement = adElement.querySelector('span.price');

    if (!priceElement) {
        continue;
    }

    const splitPrices = priceElement.textContent.split('~');

    const euro = new Number(splitPrices[0].replace('€', '').replace(/\./g, '').replace(/,/g, '.').trim());
    const hrk = new Number(splitPrices[1].replace('kn', '').replace(/\./g, '').replace(/,/g, '.').trim());

    const area = new Number(areaElement.textContent.trim().replace('m2\n : ', '').trim());

    const euroPerSquareMeter = (euro / area).toFixed(2);
    const hrkPerSquareMeter = (hrk / area).toFixed(2);

    priceElement.innerHTML = `${euroPerSquareMeter} €/m² - ${hrkPerSquareMeter} kn/m²<br>${priceElement.textContent}`;
}