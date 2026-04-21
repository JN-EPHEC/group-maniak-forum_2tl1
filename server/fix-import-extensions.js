import fs from "fs";
import path from "path";

const SRC_DIR = "./src";

function processFile(filePath) {
  let content = fs.readFileSync(filePath, "utf8");

  // Regex pour détecter les imports relatifs sans extension
  const importRegex = /from\s+["'](\.{1,2}\/[^"']+)["']/g;

  content = content.replace(importRegex, (match, importPath) => {
    // Si l'import a déjà une extension → ne rien faire
    if (/\.(js|ts|json)$/.test(importPath)) return match;

    // Ajouter .js
    return match.replace(importPath, `${importPath}.js`);
  });

  fs.writeFileSync(filePath, content, "utf8");
  console.log("✔ Fixed:", filePath);
}

function walk(dir) {
  const files = fs.readdirSync(dir);

  for (const file of files) {
    const fullPath = path.join(dir, file);

    if (fs.statSync(fullPath).isDirectory()) {
      walk(fullPath);
    } else if (file.endsWith(".ts")) {
      processFile(fullPath);
    }
  }
}

console.log("🔧 Fixing import extensions...");
walk(SRC_DIR);
console.log("✅ Done!");
