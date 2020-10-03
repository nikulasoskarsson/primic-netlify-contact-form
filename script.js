const headingEl = document.getElementById('heading');
const prismicURL = 'https://netlify-test.cdn.prismic.io/api/v2';
var apiToken = 'MC5XVHFod1NrQUFDWUE0RVFw...e-_vX5dYu-_vQnvv70';

async function getHeading() {
  let conn = await fetch(`https://netlify-test.prismic.io/api/v1`);
  let res = await conn.json();

  const masterRef = res.refs[0].ref;
  conn = await fetch(
    `https://netlify-test.prismic.io/api/v1/documents/search?ref=${masterRef}#format=html`
  );
  res = await conn.json();
  console.log(res);
  return res.results[0].data.heading.heading.value[0].text;
}

async function insertDataFromPrismic() {
  const heading = await getHeading();

  headingEl.innerText = heading;
}

window.addEventListener('load', insertDataFromPrismic);
