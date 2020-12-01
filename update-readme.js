const fs = require('fs');
const readline = require('readline');

const package = require('./package.json');

const readme = fs.readFileSync('README.md', { encoding: 'utf8' });
const tableStartRegex = new RegExp('^-----+');
const pkgNameRegex = new RegExp('^(?<PkgName>[^A-Z~)(\'!*:|]) +|');

const lines = readme.split('\n');
let state = 'outside-table';
for (let i = 0; i < lines.length; i++) {
  const line = lines[i];
  switch (state) {
    case 'outside-table':
      if (tableStartRegex.test(line)) {
        state = 'inside-table';
      }
      break;
    case 'inside-table':
      if (pkgNameRegex.test(line)) {
        lines[i] = rewriteVersion(line);
      } else if (line.trim().length === 0) {
        state = 'outside-table';
      }
      break;
    default:
      break;
  }
}

fs.writeFileSync('README.md', lines.join('\n'), { encoding: 'utf8' });

function rewriteVersion(line) {
  const components = line.split('|');
  const pkgName = components[0].trim();
  if (pkgName in package.dependencies) {
    const newVersion = package.dependencies[pkgName];
    components[2] = ` ${newVersion}`;
  }
  return components.join('|');
}
