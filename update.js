const fs = require('fs');
let c = fs.readFileSync('c:/Users/User/Documents/Projetos/nathalia-verri/src/pages/ProjectDetails.tsx', 'utf8');

c = c.replace('import { useMemo } from \'react\';', 'import { useMemo, useState, useEffect } from \'react\';');

const codeToInsert = '  const [scale, setScale] = useState(1);\\n' +
'  useEffect(() => {\\n' +
'    const updateScale = () => { setScale(Math.min(1, window.innerWidth / 1700)); };\\n' +
'    updateScale();\\n' +
'    window.addEventListener(\\'resize\\', updateScale);\\n' +
'    return () => window.removeEventListener(\\'resize\\', updateScale);\\n' +
'  }, []);';

c = c.replace('  const maxTop', codeToInsert + '\\n\\n  const maxTop');

const oldReturn = '<div className=\"min-h-screen bg-[#f8f6f2] text-zinc-900 selection:bg-rose-200 overflow-x-auto relative\">\\n' +
'      <div \\n' +
'        className=\"project-canvas relative mx-auto\" \\n' +
'        style={{ width: \\'1700px\\', height: canvasHeight + \\'px\\' }}\\n' +
'      >';

const newReturn = '<div className=\"min-h-screen bg-[#f8f6f2] text-zinc-900 selection:bg-rose-200 overflow-x-hidden relative\" style={{ height: (canvasHeight * scale) + \\'px\\' }}>\\n' +
'      <div \\n' +
'        className=\"project-canvas absolute\" \\n' +
'        style={{ width: \\'1700px\\', height: canvasHeight + \\'px\\', transform: \\'scale(\\' + scale + \\')\\', transformOrigin: \\'top center\\', left: \\'50%\\', marginLeft: \\'-850px\\' }}\\n' +
'      >';

c = c.split(oldReturn).join(newReturn);
fs.writeFileSync('c:/Users/User/Documents/Projetos/nathalia-verri/src/pages/ProjectDetails.tsx', c, 'utf8');
console.log('Update complete!');
