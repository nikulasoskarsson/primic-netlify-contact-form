const headingEl = document.getElementById('heading');

async function getHeading() {
  const txtFile = await fetch('apiKey.txt');
  const apiKey = await txtFile.text();

  let conn = await fetch(
    `https://netlify-test.prismic.io/api/v1?access_token=${apiKey}`
  );
  let res = await conn.json();

  const masterRef = res.refs[0].ref;
  conn = await fetch(
    `https://netlify-test.prismic.io/api/v1/documents/search?ref=${masterRef}&access_token=${apiKey}`
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
