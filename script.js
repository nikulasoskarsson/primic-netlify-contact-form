const headingEl = document.getElementById('heading');
const prismicURL = 'https://netlify-test.cdn.prismic.io/api/v2';

async function getHeading() {
  const txtFile = await fetch('apiKey.txt');
  const apiKey = await txtFile.text();

  let conn = await fetch(`${prismicURL}?access_token=${apiKey}`);
  let res = await conn.json();

  const masterRef = res.refs[0].ref;
  conn = await fetch(
    `${prismicURL}/documents/search?ref=${masterRef}&access_token=${apiKey}`
  );
  res = await conn.json();
  console.log(res);
  return res.results[0].data.heading[0].text;
}

async function insertDataFromPrismic() {
  const heading = await getHeading();

  headingEl.innerText = heading;
}

window.addEventListener('load', insertDataFromPrismic);
