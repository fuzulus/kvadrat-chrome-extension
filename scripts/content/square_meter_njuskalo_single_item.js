const priceElement = document.querySelector('dd.ClassifiedDetailSummary-priceDomestic');
const areaElement = Array.from(document.querySelectorAll('span.ClassifiedDetailBasicDetails-textWrapContainer')).find(el => -1 !== el.textContent.search('m²'));

const splitPrices = priceElement.textContent.split('/');

const euro = new Number(splitPrices[0].replace('€', '').replace(/\./g, '').replace(/,/g, '.').trim());
const hrk = new Number(splitPrices[1].replace('kn', '').replace(/\./g, '').replace(/,/g, '.').trim());

const area = new Number(areaElement.textContent.replace(/\./g, '').replace(/,/g, '.').replace('m²', '').trim());

const euroPerSquareMeter = (euro / area).toFixed(2);
const hrkPerSquareMeter = (hrk / area).toFixed(2);

priceElement.innerHTML = `${euroPerSquareMeter} €/m² - ${hrkPerSquareMeter} kn/m²<br>${priceElement.textContent}`;