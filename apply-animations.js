import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const pagesDir = path.join(__dirname, 'src/pages');

// Service.jsx - Add motion wrapper to hero section and cards
const serviceContent = fs.readFileSync(path.join(pagesDir, 'service.jsx'), 'utf-8');
const updatedService = serviceContent.replace(
  `        {/* LEFT HERO */}
        <div className="flex flex-col justify-center max-w-md text-gray-900 space-y-6">
          <h1 className="text-4xl md:text-7xl  md:px-2 text-gray-900">Our Software development </h1>
          <h1 className="text-4xl md:text-7xl md:px-2 font-semibold -mt-4 text-gray-950">Service</h1>
          <p className="text-gray-600 text-xl px-2">
            Our developers and product specialists build software solutions that help your business grow.
          </p>
        </div>`,
  `        {/* LEFT HERO */}
        <motion.div 
          className="flex flex-col justify-center max-w-md text-gray-900 space-y-6"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.h1 
            className="text-4xl md:text-7xl md:px-2 text-gray-900"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            Our Software development 
          </motion.h1>
          <motion.h1 
            className="text-4xl md:text-7xl md:px-2 font-semibold -mt-4 text-gray-950"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            Service
          </motion.h1>
          <motion.p 
            className="text-gray-600 text-xl px-2"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            Our developers and product specialists build software solutions that help your business grow.
          </motion.p>
        </motion.div>`
).replace(
  `              {[...leftCards, ...leftCards].map((card, i) => (
                <Card key={i} {...card} />
              ))}`,
  `              {[...leftCards, ...leftCards].map((card, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: i * 0.1 }}
                  whileHover={{ scale: 1.05, boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1)" }}
                >
                  <Card {...card} />
                </motion.div>
              ))}`
).replace(
  `              {[...rightCards, ...rightCards].map((card, i) => (
                <Card key={i} {...card} />
              ))}`,
  `              {[...rightCards, ...rightCards].map((card, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: i * 0.1 }}
                  whileHover={{ scale: 1.05, boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1)" }}
                >
                  <Card {...card} />
                </motion.div>
              ))}`
).replace(
  `function Card({ color, title, text }) {
  const colors = {
    blue: "border-gray-400",
    green: "border-gray-400",
    purple: "border-gray-400",
    yellow: "border-gray-400",
    red: "border-gray-400",
    indigo: "border-gray-400",
    teal: "border-gray-400",
    pink: "border-gray-400",
  };

  return (
    <div className="w-64 md:w-72 p-4 bg-gray-50 rounded-xl shadow-md flex flex-col items-start justify-start space-y-3 border border-gray-200 h-auto">`,
  `function Card({ color, title, text }) {
  const colors = {
    blue: "border-gray-400",
    green: "border-gray-400",
    purple: "border-gray-400",
    yellow: "border-gray-400",
    red: "border-gray-400",
    indigo: "border-gray-400",
    teal: "border-gray-400",
    pink: "border-gray-400",
  };

  return (
    <motion.div 
      className="w-64 md:w-72 p-4 bg-gray-50 rounded-xl shadow-md flex flex-col items-start justify-start space-y-3 border border-gray-200 h-auto"
      whileHover={{ y: -5 }}
    >`
).replace(
  `      <h3 className="text-lg md:text-2xl font-semibold text-gray-900">{title}</h3>
      <p className="text-gray-600 text-sm md:text-base">{text}</p>
    </div>
  );
}`,
  `      <h3 className="text-lg md:text-2xl font-semibold text-gray-900">{title}</h3>
      <p className="text-gray-600 text-sm md:text-base">{text}</p>
    </motion.div>
  );
}`
);

fs.writeFileSync(path.join(pagesDir, 'service.jsx'), updatedService, 'utf-8');
console.log('✓ Updated service.jsx with animations');

// Blog.jsx - Add page entrance animation
let blogContent = fs.readFileSync(path.join(pagesDir, 'blog.jsx'), 'utf-8');
if (!blogContent.includes('containerVariants')) {
  const blogAdd = `
  const pageVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };`;
  
  blogContent = blogContent.replace(
    'export default function Blog() {',
    `export default function Blog() {${blogAdd}`
  );
  
  blogContent = blogContent.replace(
    '    <div className="relative w-full h-100 bg-gradient-to-br from-slate-50 to-blue-50 overflow-hidden">',
    '    <motion.div className="relative w-full h-100 bg-gradient-to-br from-slate-50 to-blue-50 overflow-hidden" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.6 }}>'
  );
  
  blogContent = blogContent.replace(
    '    </div>\n  );\n}',
    '    </motion.div>\n  );\n}'
  );
  
  fs.writeFileSync(path.join(pagesDir, 'blog.jsx'), blogContent, 'utf-8');
  console.log('✓ Updated blog.jsx with animations');
}

// Career.jsx - Add animations
let careerContent = fs.readFileSync(path.join(pagesDir, 'career.jsx'), 'utf-8');
if (!careerContent.includes('containerVariants')) {
  const careerAdd = `
  const pageVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { duration: 0.8 },
    },
  };`;
  
  careerContent = careerContent.replace(
    'export default function Career() {',
    `export default function Career() {${careerAdd}`
  );
  
  careerContent = careerContent.replace(
    '     <div className=\'h-auto md:min-h-screen\'>',
    '     <motion.div className=\'h-auto md:min-h-screen\' variants={pageVariants} initial="hidden" animate="visible">'
  );
  
  careerContent = careerContent.replace(
    '     </div>\n    </>\n  );\n}',
    '     </motion.div>\n    </>\n  );\n}'
  );
  
  fs.writeFileSync(path.join(pagesDir, 'career.jsx'), careerContent, 'utf-8');
  console.log('✓ Updated career.jsx with animations');
}

// Client.jsx - Add animations
let clientContent = fs.readFileSync(path.join(pagesDir, 'client.jsx'), 'utf-8');
if (!clientContent.includes('containerVariants')) {
  const clientAdd = `
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: 'easeOut' },
    },
  };`;
  
  clientContent = clientContent.replace(
    'export default function About() {',
    `export default function About() {${clientAdd}`
  );
  
  clientContent = clientContent.replace(
    '        <div className="flex flex-col items-center  mt-60 ">',
    '        <motion.div className="flex flex-col items-center  mt-60 " variants={containerVariants} initial="hidden" animate="visible">'
  );
  
  clientContent = clientContent.replace(
    '          <h4 className="text-5xl text-center md:text-7xl  text-gray-800 tracking-tighter">\n          Digital solutions built for',
    '          <motion.h4 className="text-5xl text-center md:text-7xl  text-gray-800 tracking-tighter" variants={itemVariants}>\n          Digital solutions built for'
  );
  
  clientContent = clientContent.replace(
    '          </h4>',
    '          </motion.h4>'
  );
  
  clientContent = clientContent.replace(
    '        </div>',
    '        </motion.div>'
  );
  
  fs.writeFileSync(path.join(pagesDir, 'client.jsx'), clientContent, 'utf-8');
  console.log('✓ Updated client.jsx with animations');
}

// Community.jsx - Add animations
let communityContent = fs.readFileSync(path.join(pagesDir, 'community.jsx'), 'utf-8');
if (!communityContent.includes('motion')) {
  communityContent = communityContent.replace(
    '    <div className=\'h-auto md:min-h-screen bg-gray-100\'>',
    '    <motion.div className=\'h-auto md:min-h-screen bg-gray-100\' initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8 }}>'
  );
  
  communityContent = communityContent.replace(
    '    </div>',
    '    </motion.div>'
  );
  
  fs.writeFileSync(path.join(pagesDir, 'community.jsx'), communityContent, 'utf-8');
  console.log('✓ Updated community.jsx with animations');
}

// Contact.jsx - Add animations
let contactContent = fs.readFileSync(path.join(pagesDir, 'contact.jsx'), 'utf-8');
if (!contactContent.includes('motion')) {
  contactContent = contactContent.replace(
    '    <div className=\'h-screen \'>',
    '    <motion.div className=\'h-screen \' initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8 }}>'
  );
  
  contactContent = contactContent.replace(
    '    </div>',
    '    </motion.div>'
  );
  
  contactContent = contactContent.replace(
    '         <div className=\'flex justify-center\'>',
    '         <motion.div className=\'flex justify-center\' initial={{ y: 50 }} animate={{ y: 0 }} transition={{ delay: 0.3, duration: 0.6 }}>'
  );
  
  contactContent = contactContent.replace(
    '         </div>',
    '         </motion.div>'
  );
  
  fs.writeFileSync(path.join(pagesDir, 'contact.jsx'), contactContent, 'utf-8');
  console.log('✓ Updated contact.jsx with animations');
}

console.log('\n✅ All pages updated with framer-motion animations!');
