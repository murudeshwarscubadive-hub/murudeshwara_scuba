const fs = require('fs');

const contentXml = fs.readFileSync('C:/Users/Reddy ManiDeep/.gemini/antigravity/brain/dc8f5c25-0d62-4ace-b5e2-6e5df055a63b/scratch/odt_extracted_1_nov15/content.xml', 'utf8');

// Parse headings, paragraphs, and tables
let text = contentXml
  .replace(/<text:h[^>]*outline-level="([0-9]+)"[^>]*>(.*?)<\/text:h>/gs, (m, level, content) => {
    const t = content.replace(/<[^>]+>/g, '').trim();
    return '\n\n' + '#'.repeat(parseInt(level) || 1) + ' ' + t + '\n\n';
  })
  .replace(/<table:table-row[^>]*>(.*?)<\/table:table-row>/gs, (m, row) => {
    const cells = [];
    const cellRegex = /<table:table-cell[^>]*>(.*?)<\/table:table-cell>/gs;
    let cellMatch;
    while ((cellMatch = cellRegex.exec(row)) !== null) {
      cells.push(cellMatch[1].replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim());
    }
    return '| ' + cells.join(' | ') + ' |\n';
  })
  .replace(/<text:p[^>]*>(.*?)<\/text:p>/gs, (m, p) => {
    return p.replace(/<[^>]+>/g, ' ').trim() + '\n\n';
  })
  .replace(/<[^>]+>/g, '')
  .replace(/&amp;/g, '&')
  .replace(/&lt;/g, '<')
  .replace(/&gt;/g, '>')
  .replace(/&quot;/g, '"')
  .replace(/&apos;/g, "'");

fs.writeFileSync('C:/Users/Reddy ManiDeep/.gemini/antigravity/brain/dc8f5c25-0d62-4ace-b5e2-6e5df055a63b/scratch/parsed_odt_1_nov15.txt', text);
console.log('Saved parsed text. Total characters:', text.length);
console.log('--- FIRST 2000 CHARACTERS ---');
console.log(text.slice(0, 2000));
