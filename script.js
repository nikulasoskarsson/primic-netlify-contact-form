const headingEl = document.getElementById('heading');
const prismicURL = 'https://netlify-test.cdn.prismic.io/api/v2';
var apiToken = 'MC5XVHFod1NrQUFDWUE0RVFw...e-_vX5dYu-_vQnvv70';

async function getHeading() {
  const conn = await fetch(
    `https://netlify-test.prismic.io/api/v1/documents/search?ref=X3hMwhEAACYA4d1k#format=html`
  );
  const res = await conn.json();

  return res.results[0].data.heading.heading.value[0].text;
}

async function insertDataFromPrismic() {
  const heading = await getHeading();

  headingEl.innerText = heading;
}

window.addEventListener('load', insertDataFromPrismic);
