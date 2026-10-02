const {test}=require('node:test');
const assert=require('node:assert/strict');
const fs=require('node:fs');
const path=require('node:path');
const data=require('../src/data/entities.json');
function walk(p){return fs.readdirSync(p,{withFileTypes:true}).flatMap(d=>d.isDirectory()?walk(path.join(p,d.name)):[path.join(p,d.name)]);}
test('all entity references resolve and every entity is used',()=>{
 const used=new Set();
 for(const file of walk('docs').filter(f=>/\.mdx?$/.test(f))){const text=fs.readFileSync(file,'utf8');for(const m of text.matchAll(/<EntityCard id="([^"]+)"/g)){assert.ok(data[m[1]],file);used.add(m[1]);}}
 assert.deepEqual([...used].sort(),Object.keys(data).sort());
});
test('all central entity images are available and stats are finite or explicitly pending',()=>{
 for(const [id,e] of Object.entries(data)){assert.ok(fs.existsSync('static'+e.image),id);for(const value of Object.values(e.stats)){assert.ok(typeof value==='number'?Number.isFinite(value)&&value>=0:typeof value==='string'&&value.length>0,id);}}
});
test('player articles do not leak technical source reports',()=>{
 for(const f of walk('docs').filter(f=>/\.mdx?$/.test(f))){const text=fs.readFileSync(f,'utf8');assert.doesNotMatch(text,/host-authoritative|WireProtocol|Assets\/Scripts|Tests\/|fdc84f3|\bprobes?\b/i,f);}
});
test('no external artwork and no active search placeholder',()=>{
 assert.doesNotMatch(fs.readFileSync('src/pages/index.tsx','utf8'),/https?:\/\//);
 assert.doesNotMatch(fs.readFileSync('docusaurus.config.ts','utf8'),/appId:\s*['"]TBD/);
});
