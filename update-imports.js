import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

// Update each page file with framer-motion
const updates = [
  {
    file: 'about.jsx',
    search: /import React from 'react';/,
    replace: "import React from 'react';\nimport { motion } from 'framer-motion';"
  },
  {
    file: 'service.jsx',
    search: /import React, \{ useEffect, useState \} from "react";/,
    replace: 'import React, { useEffect, useState } from "react";\nimport { motion } from "framer-motion";'
  },
  {
    file: 'blog.jsx',
    search: /import React from 'react'/,
    replace: "import React from 'react';\nimport { motion } from 'framer-motion';"
  },
  {
    file: 'career.jsx',
    search: /import React from 'react'/,
    replace: "import React from 'react';\nimport { motion } from 'framer-motion';"
  },
  {
    file: 'client.jsx',
    search: /import React from 'react';/,
    replace: "import React from 'react';\nimport { motion } from 'framer-motion';"
  },
  {
    file: 'community.jsx',
    search: /import React from 'react'/,
    replace: "import React from 'react';\nimport { motion } from 'framer-motion';"
  },
  {
    file: 'contact.jsx',
    search: /import React from 'react'/,
    replace: "import React from 'react';\nimport { motion } from 'framer-motion';"
  }
];

const pagesDir = path.join(__dirname, 'src/pages');

updates.forEach(update => {
  const filePath = path.join(pagesDir, update.file);
  let content = fs.readFileSync(filePath, 'utf-8');
  
  // Add motion import if not already there
  if (!content.includes('import { motion }')) {
    content = content.replace(update.search, update.replace);
    fs.writeFileSync(filePath, content, 'utf-8');
    console.log(`✓ Added framer-motion import to ${update.file}`);
  } else {
    console.log(`✓ ${update.file} already has framer-motion import`);
  }
});

console.log('\nAll files ready for animation updates!');
