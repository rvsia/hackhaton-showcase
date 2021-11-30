const path = require('path');
const fs = require('fs');

let data = '';
const projects = [];

fs.rmSync(path.resolve(__dirname, '../projects/index.js'))

fs.readdirSync(path.resolve(__dirname, '../projects/')).forEach(file => {
    console.log(file);

    const project = file.replace('.js', '');

    data = data + `import ${project} from './${project}';\n`

    projects.push(project);
});

data = data + `export default [${projects.join(',')}]`

fs.writeFileSync(path.resolve(__dirname, '../projects/index.js'), data);
