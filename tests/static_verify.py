"""Dependency-free structural preflight for the Eleusis public static site."""
from pathlib import Path
from html.parser import HTMLParser
import hashlib,json,re,sys
ROOT=Path(__file__).resolve().parents[1]
class Tags(HTMLParser):
 def __init__(self):super().__init__();self.ids=[];self.anchors=[];self.scripts=[];self.mains=0;self.hs=[]
 def handle_starttag(self,t,a):
  d=dict(a)
  if 'id' in d:self.ids.append(d['id'])
  if t=='a' and d.get('href','').startswith('#'):self.anchors.append(d['href'][1:])
  if t=='script':self.scripts.append(d)
  if t=='main':self.mains+=1
  if re.fullmatch(r'h[1-6]',t):self.hs.append(t)
html=(ROOT/'index.html').read_text(encoding='utf-8'); js=(ROOT/'app.js').read_text(encoding='utf-8');css=(ROOT/'styles.css').read_text(encoding='utf-8')
checks={}
p=Tags();p.feed(html)
checks['entrypoint']=bool(html.startswith('<!doctype html>'))
checks['one main']=p.mains==1
checks['one h1']=p.hs.count('h1')==1
checks['unique ids']=len(p.ids)==len(set(p.ids))
checks['anchor targets']=all(x in p.ids for x in p.anchors)
checks['local scripts']=all(not re.match(r'https?://',x.get('src','')) for x in p.scripts)
checks['local css']='href="styles.css"' in html
checks['same-origin webmanifest permitted by CSP']=(
 'href="manifest.webmanifest"' in html
 and "default-src 'none'" in html
 and "manifest-src 'self'" in html
 and (ROOT/'manifest.webmanifest').is_file()
 and json.loads((ROOT/'manifest.webmanifest').read_text(encoding='utf-8'))['start_url']=='.'
)

checks['version']='v1.12' in html
checks['no direct second person in public']=not re.search(r'\b(?:you|your|yours)\b',html+'\n'+js,re.I)
checks['no public QA lingo']=not re.search(r'\b(?:UAT|research|operating system)\b',html,re.I)
checks['real-place orientation']='place near Athens' in html
checks['ancient secrecy']='not the recorded order' in html and 'not fully known' in js
checks['pomegranate included']='pomegranate' in js.lower()
checks['no seed center seam']='veil-line' not in html+'\n'+css
checks['seven keys defined']=js.count('prompt: "')==7
checks['agent JSON']=json.loads((ROOT/'data/eleusis-mastery.json').read_text())['version']=='1.12'
checks['agent fact/interpretation split']='historical_facts' in json.loads((ROOT/'data/eleusis-mastery.json').read_text())
checks['sitemap target']='luckygithub777.github.io/mysteries-of-eleusis/' in (ROOT/'sitemap.xml').read_text()
checks['nojekyll']=(ROOT/'.nojekyll').exists()
checks['essential files']=all((ROOT/p).exists() for p in ['index.html','app.js','styles.css','robots.txt','manifest.webmanifest','404.html','LICENSE','llms.txt'])
checks['no remote runtime deps']='fetch(' not in js and 'XMLHttpRequest' not in js
checks['no http script']=not re.search(r'<script[^>]+src=[\'\"]https?://',html,re.I)
checks['css reduced motion']='prefers-reduced-motion' in css
checks['css focus visible']=':focus-visible' in css
checks['no hidden credentials']=not any(s in html+js for s in ['ghp_','sk_live_','BEGIN PRIVATE KEY'])
checks['public-only release']=not any((ROOT/p).exists() for p in ['docs/QA_REPORT.md','docs/matrix-72x72.json','docs/browser-test-results.json'])
checks['no-script mobile navigation']='html:not(.js-ready) .nav-links { display: flex' in css
checks['menu escape recovery']='event.key === "Escape"' in js and 'close(true)' in js
checks['return word selection is accessible']=('aria-pressed="false"' in js and 'b.setAttribute("aria-pressed", String(active));' in js and 'b.classList.toggle("active", active);' in js)
checks['missed-key teaching feedback']='class=\"key-feedback\"' in js and 'm.note' in js
checks['agent references present']='docs/CONTENT_BOUNDARIES.md' in (ROOT/'llms.txt').read_text() and 'ai-ux-acceptance-72x72-v1.12.md' not in (ROOT/'llms.txt').read_text()
checks['agent links exist']=all((ROOT/x).is_file() for x in re.findall(r'`([\w./-]+\.[\w]+)`', (ROOT/'llms.txt').read_text()))
checks['brand accessible name']='aria-label="The Mysteries of Eleusis home"' not in html
checks['semantic tab panels']='<article class="myth-panel"' not in html and '<article class="way-panel"' not in html
checks['trusted museum attribution']='www.theacropolismuseum.gr/en/temporary-exhibitions/eleusis-great-mysteries' in (ROOT/'docs/CONTENT_BOUNDARIES.md').read_text()
checks['Homeric Hymn reference']='chs.harvard.edu/primary-source/homeric-hymn-to-demeter-sb/' in (ROOT/'docs/CONTENT_BOUNDARIES.md').read_text()
checks['nested 404 styling']='href="/mysteries-of-eleusis/styles.css"' in (ROOT/'404.html').read_text()
checks['complete MIT license']='IN NO EVENT SHALL THE' in (ROOT/'LICENSE').read_text()
checks['Theatre attribution']= 'Aleister Crowley’s 1910' in html
checks['single anchor offset']='scroll-margin-top: 0' in css
checks['no checkout credentials persistence']='persist-credentials: false' in (ROOT/'.github/workflows/quality.yml').read_text()
report={'total':len(checks),'passed':sum(checks.values()),'failed':{k:v for k,v in checks.items() if not v},'checks':checks}
print(json.dumps(report,indent=2))
if report['failed']:sys.exit(1)
