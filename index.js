const http = require('http');
const fs = require('fs');
//reads txt, add each line as one element in the "lines" array
const lines = fs.readFileSync('quotes.txt', 'utf8').split(/\r?\n/);
console.log(lines);

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');
  
  // Generate HTML with all quotes, with for each
  let html = '<h1>Famous Pop Culture Quotes</h1><ul>';
  lines.forEach(quote => {
    html += `<li>${quote}</li>`;
  });
  html += '</ul>';
  
  res.end(html);
});
 
server.listen(3000, '0.0.0.0', () => {
    console.log('Server running at http://fi.mshome.net:3000/');
});
 
console.log('Mein Projekt wurde gestartet...')