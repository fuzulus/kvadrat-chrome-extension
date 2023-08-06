const areaDescriptionElement = Array.from(document.querySelectorAll('li.labela')).find(el => el.textContent === 'Stambena površina u m2');

if (areaDescriptionElement) {
    const priceElement = document.querySelector('#PrintOglasContent .price');
    const areaElement = areaDescriptionElement.nextElementSibling;

    const splitPrices = priceElement.textContent.replace('Cijena: \n', '').split('~');

    const euro = new Number(splitPrices[0].replace('€', '').replace(/\./g, '').replace(/,/g, '.').trim());
    const hrk = new Number(splitPrices[1].replace('kn', '').replace(/\./g, '').replace(/,/g, '.').trim());

    const area = new Number(areaElement.textContent.replace(/\./g, '').replace(/,/g, '.').trim());

    const euroPerSquareMeter = (euro / area).toFixed(2);
    const hrkPerSquareMeter = (hrk / area).toFixed(2);

    priceElement.innerHTML = `${euroPerSquareMeter} €/m² - ${hrkPerSquareMeter} kn/m²<br>${priceElement.textContent}`;
}