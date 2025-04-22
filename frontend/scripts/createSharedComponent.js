/* eslint-disable */
// @ts-nocheck
import { existsSync, mkdirSync, writeFileSync } from 'fs';
import { resolve, join } from 'path';
import { readFileSync } from 'fs';

const slice = process.argv[2];
let componentName = process.argv[3];

if (!slice || !componentName) {
    console.error("❌ Please provide a Slice Component name");
    process.exit(1);
}

const validSlices = ['shared', 'widgets', 'pages', 'features', 'entities', 'processes'];
if (!validSlices.includes(slice)) {
    console.error("❌ Invalid slice name");
    process.exit(1);
}

if (slice === 'pages') componentName = `${componentName}Page`;

let componentDir, tsxFile, scssFile, storiesFile, indexPath, asyncPageFile;

if (slice === 'shared') {
    componentDir = resolve(__dirname, '..', 'src', `${slice}/ui`, componentName);
    tsxFile = join(componentDir, `${componentName}.tsx`);
    scssFile = join(componentDir, `${componentName}.module.scss`);
    storiesFile = join(componentDir, `${componentName}.stories.tsx`);
} else {
    const baseName = slice === 'pages' ? componentName.replace('Page', '') : componentName;
    const sliceDir = resolve(__dirname, '..', 'src', slice, baseName);
    componentDir = join(sliceDir, 'ui');
    indexPath = join(sliceDir, 'index.ts');
    
    tsxFile = join(componentDir, `${componentName}.tsx`);
    scssFile = join(componentDir, `${componentName}.module.scss`);
    storiesFile = join(componentDir, `${componentName}.stories.tsx`);

    if (slice === 'pages') {
        asyncPageFile = join(componentDir, `${componentName}.async.tsx`);
    }

    if (!existsSync(sliceDir)) mkdirSync(sliceDir, { recursive: true });
}

if (existsSync(componentDir)) {
    console.error("❌ Component already exists.");
    process.exit(1);
}
mkdirSync(componentDir, { recursive: true });

const templatePrefix = slice === 'shared' ? 'shared' : 'default';

const loadTemplate = (name) => readFileSync(join(__dirname, 'templates', name), 'utf8');

const tsxTemplate = loadTemplate(`${templatePrefix}.component.tsx.template`);
const scssTemplate = loadTemplate('component.scss.template');
const storiesTemplate = loadTemplate(`${templatePrefix}.component.stories.template`);

const replaceVars = (template) => template.replace(/{{componentName}}/g, componentName);

writeFileSync(tsxFile, replaceVars(tsxTemplate), 'utf8');
writeFileSync(scssFile, replaceVars(scssTemplate), 'utf8');
writeFileSync(storiesFile, replaceVars(storiesTemplate), 'utf8');

if (slice === 'pages') {
    const asyncTemplate = loadTemplate('page.async.template');
    writeFileSync(asyncPageFile, replaceVars(asyncTemplate), 'utf8');
}

if (slice !== 'shared') {
    const indexContent = slice === 'pages' 
        ? `export { ${componentName}Async } from './ui/${componentName}.async';\n`
        : `import ${componentName} from './ui/${componentName}';\n` +
          `\nexport { ${componentName} };\n`;
    writeFileSync(indexPath, indexContent, 'utf8');
}

console.log(`✅ Component ${componentName} created in ${slice}`);