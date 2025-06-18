#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

const projectRoot = path.resolve(__dirname, '..');

const filesToDelete = [
  'apps/web/configs/jest/tests.env.js',
  'configs/jest/jest.config.base.js',
  'configs/jest/jest.env.js',
  'configs/jest/jest.setup.ts',
  'configs/jest/tests.env.js',
  'jest.config.js',
];

const foldersToDelete = [
  'configs/jest',
  'apps/web/configs',
];

const patterns = ['.spec.ts', '.spec.tsx', '.test.ts', '.test.tsx'];

// 🗑️ Delete a file or folder if it exists
function deleteIfExists(p) {
  if (fs.existsSync(p)) {
    if (fs.lstatSync(p).isDirectory()) {
      fs.rmSync(p, { recursive: true, force: true });
      console.log(`🗑️ Deleted folder: ${p}`);
    } else {
      fs.unlinkSync(p);
      console.log(`🗑️ Deleted file: ${p}`);
    }
  }
}

// 🗑️ Delete all __tests__, __mocks__ or __mock__ folders recursively
function deleteTestFolders(dir) {
  fs.readdirSync(dir).forEach(file => {
    const absolute = path.join(dir, file);
    if (fs.lstatSync(absolute).isDirectory()) {
      if (file === '__tests__' || file === '__mocks__' || file === '__mock__') {
        fs.rmSync(absolute, { recursive: true, force: true });
        console.log(`🗑️ Deleted test folder: ${absolute}`);
      } else {
        deleteTestFolders(absolute); // recursive call
      }
    }
  });
}

// 🗑️ Delete *.spec.* and *.test.* files recursively
function deleteTestFiles(dir) {
  fs.readdirSync(dir).forEach(file => {
    const absolute = path.join(dir, file);
    if (fs.lstatSync(absolute).isDirectory()) {
      deleteTestFiles(absolute);
    } else if (patterns.some(pattern => absolute.endsWith(pattern))) {
      fs.unlinkSync(absolute);
      console.log(`🗑️ Deleted test file: ${absolute}`);
    }
  });
}

// 1️⃣ Delete specific files and folders
filesToDelete.forEach(file => deleteIfExists(path.resolve(projectRoot, file)));
foldersToDelete.forEach(folder => deleteIfExists(path.resolve(projectRoot, folder)));

// 2️⃣ Delete test files (*.spec.*, *.test.*)
deleteTestFiles(projectRoot);

// 3️⃣ Delete __tests__, __mocks__, __mock__ folders
deleteTestFolders(projectRoot);