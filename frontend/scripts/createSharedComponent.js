/* eslint-disable @typescript-eslint/ban-ts-comment */
import { existsSync, mkdirSync, writeFileSync } from 'fs';
import { resolve, join } from 'path';
import { readFileSync } from 'fs';

const componentName = process.argv[2];

if (!componentName) {
    console.error("❌ Please provide a component name. Example: node createSharedComponent.js Modal");
    process.exit(1);
}

const sharedPath = resolve(__dirname, '..', 'src', 'shared', 'ui');
const componentDir = join(sharedPath, componentName);
const tsxFile = join(componentDir, `${componentName}.tsx`);
const scssFile = join(componentDir, `${componentName}.module.scss`);
const storiesFile = join(componentDir,`${componentName}.stories.tsx`);

if (existsSync(componentDir)) {
    console.error("❌ Component already exists.");
    process.exit(1);
}

mkdirSync(componentDir, { recursive: true });

const tsxTemplate = readFileSync(join(__dirname, 'templates', 'component.tsx.template'), 'utf8');
const scssTemplate = readFileSync(join(__dirname, 'templates', 'component.scss.template'), 'utf8');
const storiesTemplate = readFileSync(join(__dirname, 'templates', 'component.stories.template'), 'utf8')

const replaceTemplateVariables = (template, componentName) => {
    return template.replace(/{{componentName}}/g, componentName);
};

const tsxContent = replaceTemplateVariables(tsxTemplate, componentName);
const scssContent = replaceTemplateVariables(scssTemplate, componentName);
const storiesContent = replaceTemplateVariables(storiesTemplate, componentName);

writeFileSync(tsxFile, tsxContent, 'utf8');
writeFileSync(scssFile, scssContent, 'utf8');
writeFileSync(storiesFile, storiesContent, 'utf8');

console.log(`✅ Component ${componentName} has been successfully created inside the shared/ui folder.`);
