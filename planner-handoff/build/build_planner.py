#!/usr/bin/env python3
import base64, pathlib
SC = pathlib.Path(__file__).resolve().parent
IMGDIR = SC/"img"

def datauri(name):
    p = IMGDIR/name
    mime = "image/png" if p.suffix==".png" else "image/jpeg"
    return f"data:{mime};base64," + base64.b64encode(p.read_bytes()).decode()

IMG = {k: datauri(f"{k}.jpg") for k in
       ["garden","animals","orchard","food","property","equipment","inventory",
        "emergency","bees","offgrid","forestry","pests","weather"]}
LOGO = datauri("logo.png")
QR = datauri("qr.png")
LEAF = ('<svg width="10" height="10" viewBox="0 0 10 10" style="vertical-align:-1px">'
        '<path d="M9 1C4 1 1 4 1 9 6 9 9 6 9 1Z" fill="#5e7245"/>'
        '<path d="M2 8 L8 2" stroke="#fcfaf4" stroke-width="0.8"/></svg>')

CSS = """
:root{--paper:#f6efdf;--paper-lite:#fcfaf4;--ink:#33291b;--ink-soft:#6e6552;--ink-faint:#948a76;
--forest:#37492e;--sage:#5e7245;--sage-tint:#e9eee0;--barn:#a8432c;--gold:#d79a2c;--tan:#ded2bc;--hair:#e6ddca;--grid:#ece3cf;}
@page{size:Letter;margin:0.72in 0.8in;}
html{-webkit-print-color-adjust:exact;print-color-adjust:exact;}
*{box-sizing:border-box;}
body{font-family:"Helvetica Neue",Arial,sans-serif;color:var(--ink);font-size:10.5pt;line-height:1.46;margin:0;background:var(--paper-lite);}
h1,h2,h3{font-family:Georgia,"Times New Roman",serif;color:var(--forest);margin:0;}
p{margin:0 0 8px;}
.page{page-break-after:always;min-height:9.3in;display:flex;flex-direction:column;padding:2px;}
.page:last-child{page-break-after:auto;}
.phead{display:flex;align-items:flex-start;justify-content:space-between;gap:16px;}
.eyebrow{text-transform:uppercase;letter-spacing:.16em;font-size:8pt;color:var(--ink-soft);font-weight:700;}
.ptitle{font-size:23pt;margin-top:3px;}
.rule{height:2px;background:var(--forest);border:0;margin:9px 0 13px;}
.rule.thin{height:1px;background:var(--hair);}
.subtitle{color:var(--ink-soft);font-style:italic;font-size:11.5pt;}
ul.plan{margin:3px 0 10px;padding-left:0;list-style:none;}
ul.plan li{position:relative;padding:2px 0 2px 21px;}
ul.plan li:before{content:"";position:absolute;left:0;top:5px;width:10px;height:10px;border:1.3px solid var(--sage);border-radius:2px;}
.fieldrow{display:flex;gap:20px;margin:9px 0;}
.field{flex:1;}
.lbl{font-size:7.5pt;text-transform:uppercase;letter-spacing:.09em;color:var(--ink-soft);font-weight:700;}
.line{border-bottom:1px solid var(--tan);height:1.6em;}
.blanklines .line,.chk .line{border-bottom:1px solid var(--hair);}
.colhd{font-size:8.5pt;text-transform:uppercase;letter-spacing:.08em;color:var(--forest);font-weight:700;margin:4px 0 4px;}
table{width:100%;border-collapse:collapse;margin:4px 0 10px;border:1px solid var(--sage);}
th{color:#fff;background:var(--sage);border:1px solid var(--sage);padding:6px 6px;font-size:7.5pt;text-transform:uppercase;letter-spacing:.04em;font-weight:700;text-align:left;}
td{border:1px solid var(--grid);height:2.05em;padding:4px 6px;}
.season{margin:0 0 9px;}
.season h3{font-size:12pt;}
.season .when{color:var(--ink-faint);font-style:italic;font-size:9.5pt;}
.app{border-left:3px solid var(--forest);background:var(--sage-tint);padding:8px 12px;font-size:9.5pt;margin:10px 0 4px;}
.app b{color:var(--forest);}
.tmpl{font-size:8.5pt;color:var(--ink-faint);margin-top:5px;}
.cb{display:inline-block;width:10px;height:10px;border:1.3px solid var(--sage);border-radius:2px;margin-right:8px;vertical-align:-1px;}
.chk{padding:3px 0;}
.chk .line{display:inline-block;width:62%;height:1.2em;vertical-align:-2px;}
.two{display:flex;gap:24px;}
.two>div{flex:1;}
.note{font-size:9pt;color:var(--ink-soft);}
.sumbox{border:1px solid var(--tan);border-radius:5px;overflow:hidden;margin:2px 0 10px;}
.sumbox .hd{background:var(--sage-tint);color:var(--forest);font-size:7.5pt;text-transform:uppercase;letter-spacing:.08em;font-weight:700;padding:4px 10px;border-bottom:1px solid var(--tan);}
.sumbox .bd{padding:7px 10px;}
.sumbox .r{display:flex;gap:18px;}
.sumbox .r+.r{margin-top:7px;}
.mini{flex:1;}
.mini .l{display:block;font-size:7pt;text-transform:uppercase;letter-spacing:.06em;color:var(--ink-soft);font-weight:700;}
.mini .v{display:block;border-bottom:1px solid var(--tan);height:1.4em;}
.why{border:1px solid var(--tan);border-radius:5px;padding:9px 12px;margin:8px 0 10px;background:#fbf8f0;}
.why .h{font-size:9pt;font-weight:700;color:var(--forest);text-transform:uppercase;letter-spacing:.07em;margin-bottom:6px;}
.why .grid{display:flex;gap:16px;}
.why .grid>div{flex:1;}
.why .grid .t{font-weight:700;font-size:9pt;color:var(--ink);}
.why .grid p{font-size:8.5pt;color:var(--ink-soft);margin:1px 0 0;}
.foot{margin-top:auto;padding-top:10px;border-top:1px solid var(--hair);display:flex;align-items:center;font-size:7.5pt;color:var(--ink-faint);letter-spacing:.03em;}
.foot .brand{flex:1;display:flex;align-items:center;gap:6px;}
.foot .tag{flex:1;text-align:center;font-style:italic;}
.foot .pg{flex:1;text-align:right;}
.hubhead{display:flex;align-items:center;gap:14px;}
.hubthumb{width:80px;height:80px;border-radius:11px;object-fit:cover;border:1.5px solid var(--forest);flex:0 0 auto;}
.idblock{border:1px solid var(--tan);border-radius:5px;padding:6px 9px;min-width:215px;}
.idrow{display:flex;align-items:baseline;gap:6px;font-size:7.5pt;margin:3px 0;}
.idl{text-transform:uppercase;letter-spacing:.06em;color:var(--ink-soft);font-weight:700;white-space:nowrap;}
.idv{flex:1;border-bottom:1px solid var(--tan);height:1.2em;}
.gloss div{padding:3px 0;border-bottom:1px dotted var(--hair);font-size:10pt;}
.gloss b{color:var(--forest);}
.cover{justify-content:center;align-items:center;text-align:center;background:var(--paper);}
.cover img.logo{width:128px;height:128px;border-radius:25px;box-shadow:0 2px 10px rgba(51,41,27,.16);}
.cover .eyebrow{margin-top:22px;}
.cover h1{font-family:Georgia,serif;color:var(--forest);font-size:34pt;line-height:1.12;margin-top:8px;}
.cover .sub{font-size:13pt;color:var(--ink-soft);font-style:italic;margin-top:12px;}
.cover .tagc{margin-top:24px;font-size:12pt;}
.cover .site{margin-top:38px;font-size:9.5pt;text-transform:uppercase;letter-spacing:.18em;color:var(--ink-soft);}
.cover .gold{width:96px;height:0;border-top:2px solid var(--gold);margin:16px auto 0;}
.divider{justify-content:center;align-items:center;text-align:center;background:var(--paper);}
.divider h1{font-size:30pt;}
.divider p{max-width:5in;color:var(--ink-soft);}
.closing h1{font-size:26pt;line-height:1.1;}
.ben{margin:6px 0;padding-left:0;list-style:none;}
.ben li{position:relative;padding:5px 0 5px 20px;font-size:10pt;}
.ben li:before{content:"";position:absolute;left:0;top:8px;width:9px;height:9px;background:var(--sage);border-radius:2px;}
.qrwrap{display:flex;align-items:center;gap:18px;border:1px solid var(--tan);border-radius:8px;padding:14px;background:#fbf8f0;margin-top:10px;}
.qrwrap img{width:112px;height:112px;}
"""

# ---- helpers ----
def footer(pg):
    return (f'<div class="foot"><span class="brand">{LEAF} The Homestead Keeper Planner</span>'
            f'<span class="tag">Plan it on paper. Keep it in the app.</span><span class="pg">{pg}</span></div>')

def page(inner, pg=None, cls=""):
    return f'<section class="page {cls}">{inner}{footer(pg) if pg else ""}</section>'

def phead(eyebrow, title):
    return f'<div class="phead"><div><div class="eyebrow">{eyebrow}</div><h1 class="ptitle">{title}</h1></div></div><hr class="rule">'

def record_phead(eyebrow, title, idlines):
    ids = "".join(f'<div class="idrow"><span class="idl">{l}</span><span class="idv"></span></div>' for l in idlines)
    return (f'<div class="phead"><div><div class="eyebrow">{eyebrow}</div><h1 class="ptitle">{title}</h1></div>'
            f'<div class="idblock">{ids}</div></div><hr class="rule">')

def hubhead(key, title, subtitle):
    return (f'<div class="eyebrow">Hub</div><div class="hubhead"><img class="hubthumb" src="{IMG[key]}" alt="">'
            f'<div><h2 class="ptitle" style="font-size:22pt;">{title}</h2><div class="subtitle">{subtitle}</div></div></div>'
            f'<hr class="rule thin">')

def plan(items):
    return '<p><b>Plan it.</b></p><ul class="plan">' + "".join(f"<li>{i}</li>" for i in items) + "</ul>"

def table(headers, nrows, widths=None):
    widths = widths or [None]*len(headers)
    cells = []
    for h,w in zip(headers,widths):
        style = ' style="width:%s"' % w if w else ''
        cells.append('<th%s>%s</th>' % (style, h))
    ths = "".join(cells)
    row = "<tr>" + "".join("<td></td>" for _ in headers) + "</tr>"
    return f'<table><thead><tr>{ths}</tr></thead><tbody>{row*nrows}</tbody></table>'

def sumbox(title, rows):
    bd = "".join('<div class="r">' + "".join(
        f'<div class="mini"><span class="l">{l}</span><span class="v"></span></div>' for l in r) + '</div>'
        for r in rows)
    return f'<div class="sumbox"><div class="hd">{LEAF} {title}</div><div class="bd">{bd}</div></div>'

def fieldrow(*labels):
    return '<div class="fieldrow">' + "".join(
        f'<div class="field"><div class="lbl">{l}</div><div class="line"></div></div>' for l in labels) + '</div>'

def colhd(t): return f'<div class="colhd">{t}</div>'
def appbox(t): return f'<div class="app"><b>In the app:</b> {t}</div>'
def tmpl(t): return f'<div class="tmpl">{t}</div>'
def note(t): return f'<p class="note">{t}</p>'
LOGGED = '<div class="chk" style="margin-top:8px;"><span class="cb"></span>Logged in Homestead Keeper</div>'

pages = []

# 1 COVER
pages.append(page(
    f'<img class="logo" src="{LOGO}" alt="Homestead Keeper"><div class="gold"></div>'
    '<div class="eyebrow">A Companion Planner</div>'
    '<h1>The Homestead<br>Keeper Planner</h1>'
    '<div class="sub">A year of planning for your whole homestead.</div>'
    '<div class="tagc">Plan it on paper. Keep it in the app.</div>'
    '<div class="site">Homestead Keeper &middot; homesteadkeeper.com</div>', cls="cover"))

# 2 HOW TO USE
pages.append(page(
    phead("Getting Started","How to Use This Planner") +
    "<p>Welcome. This planner helps you plan your whole homestead for the year, from the garden to the animals to the pantry, and makes it easy to keep going once the season gets busy.</p>"
    "<p>You can use it two ways. On its own, it's a complete paper planner, and every page works with a pencil and a few minutes. Alongside the Homestead Keeper app, it's the paper front end. You plan here, then the app keeps the record alive, updates itself, and reminds you what's due.</p>"
    '<div class="why"><div class="h">Why plan your homestead?</div><div class="grid">'
    '<div><div class="t">See the whole year</div><p>Know what\'s coming before the season gets busy.</p></div>'
    '<div><div class="t">Nothing slips</div><p>Sows, sprays, breedings, and reviews all in one place.</p></div>'
    '<div><div class="t">Plan once</div><p>Set it up in an afternoon, follow it all year.</p></div>'
    '<div><div class="t">Grows with you</div><p>Fine on its own, better with the app.</p></div></div></div>'
    '<h3 style="margin-top:6px;">How it\'s organized</h3>' +
    plan(["<b>Start with the season.</b> Set your frost dates and see the whole year at a glance, so everything lands at the right time for where you live.",
          "<b>Then work through the hubs.</b> A page for each part of your homestead, in the same names the app uses.",
          "<b>Print the templates you need.</b> Reusable pages like Individual Animal and Crop Planting are meant to be printed as many times as you like."]) +
    note("Dates work from your frost date, not the calendar. Nothing here requires the app, but the app makes it easier."), 2))

# 3 GLOSSARY
gloss = [("Homestead","your whole place, everything you manage."),
("Place","a named spot on your homestead, like the barn or the root cellar."),
("Specific Spot","a finer location within a Place, like a nest box wall or row three."),
("Growing Area","a place you grow food: a bed, a greenhouse, an herb garden."),
("Crop Planting","one crop you've put in, with its variety, dates, and notes."),
("Field Log","a quick note that something happened, like fed, pruned, or inspected."),
("Record","a saved log entry with the details (date, cost, notes)."),
("Timeline","the story of one thing, newest first."),
("Reminder","a task that's due and comes back on a schedule."),
("Upcoming Work","what's due soon across a part of your homestead."),
("Current Status","the living state of something: Active, Sold, Retired."),
("Lifecycle events","the moments that change an animal's status: Acquired, Born, Weaned, Moved, Sold, Processed, Retired.")]
pages.append(page(
    phead("Reference","A Few Words We Use") +
    "<p>The planner uses the same words as the Homestead Keeper app, so the two feel like one thing.</p>"
    '<div class="gloss">' + "".join(f"<div><b>{a}</b> is {b}</div>" for a,b in gloss) + "</div>"
    '<p class="note" style="margin-top:8px;">The hubs are just the parts of your homestead: Garden, Orchard, Animals, Bees, Property, Equipment, Inventory, Food &amp; Pantry, Off-grid, Weather &amp; Seasons, Wildlife &amp; Pests, Forestry, and Emergency Prep.</p>', 3))

# 4 AT A GLANCE
pages.append(page(
    phead("The Season","My Homestead at a Glance") +
    "<p>Fill this in once at the start of the season and the rest of the planner hangs off it. Once you know your frost dates, you can set them one time in Homestead Keeper and it will work out the seed starting, transplant, and harvest windows for every Crop Planting on its own.</p>" +
    fieldrow("Homestead name","Hardiness zone") +
    fieldrow("Average last spring frost","Average first fall frost","Growing-season length") +
    fieldrow("Elevation and notes about your place") +
    '<div style="margin-top:8px;"><div class="lbl">My Places (barn, garden, pasture, root cellar...)</div>'
    '<div class="line" style="margin-top:4px;"></div><div class="line"></div><div class="line"></div></div>' +
    appbox("set your frost dates once and Homestead Keeper schedules every Crop Planting for you."), 4))

# 5 HOMESTEAD YEAR 1
def season(h,when,body):
    w = f' <span class="when">{when}</span>' if when else ""
    return f'<div class="season"><h3>{h}{w}</h3><p>{body}</p></div>'
pages.append(page(
    phead("The Season","The Homestead Year") +
    "<p>This walks through the year by season instead of by month, because a homestead in Vermont and one in Georgia are on completely different clocks. Everything is written around your own frost dates, so it lands right wherever you are.</p>" +
    season("Early Spring","roughly six to ten weeks before your last frost","The quiet, hopeful stretch. Start your slow crops indoors, like onions, peppers, and tomatoes. Dig out last year's seeds, see what's still good, and note what you're short on in Inventory. Get the dormant pruning finished in the Orchard and put down a dormant oil spray before the trees wake up. If you're growing the flock, order chicks and sketch out your spring breeding. Keep half an eye on the forecast for a late Frost Event.") +
    season("Late Spring","right around your last frost","Now it speeds up. Harden off and transplant, direct sow your warm weather crops, and get your first Crop Plantings in the ground. In the Orchard, spray at petal fall and plant any new Fruit Trees. This is baby season too, so you'll be logging births (Born), moving animals out to pasture (Moved), and staying ahead of parasites. Give the hives their first real spring inspection, and eat down last season's stores while you're at it.") +
    season("Summer","","Head down, hands busy. Keep sowing in succession, keep the water on, and start bringing in the first Harvest. Watch for trouble and write down any Pest Sighting or Deer Pressure. The preserving starts in earnest now, with canning, freezing, dehydrating, and fermenting. The animals hit their stride, so your Production climbs, and it's a good time to plan fall breeding."), 5))

# 6 HOMESTEAD YEAR 2
pages.append(page(
    phead("The Season",'The Homestead Year <span style="font-size:11pt;color:var(--ink-faint);font-style:italic;">continued</span>') +
    season("Late Summer","","The big push. Preserve everything that's coming in, get your fall crops going, and save seed from your best plants. On the animal side you're weaning (Weaned) and making your keep or sell calls (Sold). The Orchard fruit comes in now, so weigh your yields. When the shelves fill up, count what you've actually put by (Items Stored).") +
    season("Fall","before your first frost","Time to batten down. Bring in the last harvest before that first Frost Event, put the Growing Areas to bed, and get your cover crops in. Breed for spring births and stock up on Feed before the price climbs. Cut, split, and stack your firewood, and walk the trails before the snow flies. Winterize your water lines, your generator, and your buildings, and test the Generator Plan.") +
    season("Winter","","Rest, plan, and fix. Look back at how the year went and lay out next season's Crop Plantings while it's fresh. Get the off season maintenance done on your equipment. Keep the animals warm and watered, and mind the due dates for anything bred to kid or lamb in spring. Do a deep Inventory count, and run through your storm readiness, including your Evacuation Note and contacts.") +
    note("No hard frost where you live? Anchor to your wet and dry seasons or your local planting windows instead, and this same rhythm still works.") +
    appbox("this same rhythm turns into dated Upcoming Work and gentle reminders, so you're not the one keeping the whole calendar in your head."), 6))

# 7 THIS MONTH
this_month = (
    '<div class="phead"><div><div class="eyebrow">Reusable Page &middot; Print One Each Month</div><h1 class="ptitle">This Month on the Homestead</h1></div></div>'
    '<div class="fieldrow" style="margin-top:8px;"><div class="field" style="flex:2;"><div class="lbl">Month</div><div class="line"></div></div>'
    '<div class="field"><div class="lbl">Year</div><div class="line"></div></div></div>'
    '<div class="field" style="margin:4px 0 10px;"><div class="lbl">Focus and goals</div><div class="line"></div></div><hr class="rule thin">'
    '<div class="two"><div>' + colhd("By hub") +
    "".join(f'<div class="chk"><span class="cb"></span>{h} <span class="line"></span></div>' for h in ["Garden","Animals","Orchard","Food &amp; Pantry","Inventory","Other"]) +
    '</div><div>' + colhd("Upcoming Work (what's due)") +
    '<div class="blanklines">' + '<div class="line"></div>'*5 + '</div></div></div>'
    '<div class="two" style="margin-top:10px;"><div>' + colhd("Weather and seasons") +
    '<div class="note" style="margin-bottom:2px;">Rainfall, notable events, frost watch</div><div class="blanklines"><div class="line"></div><div class="line"></div></div></div>'
    '<div>' + colhd("Harvest and wins") + '<div class="blanklines"><div class="line"></div><div class="line"></div></div></div></div>' +
    colhd("Field Log and notes") + '<div class="blanklines"><div class="line"></div><div class="line"></div></div>' +
    '<div class="chk" style="margin-top:8px;"><span class="cb"></span>Logged this month in Homestead Keeper</div>')
pages.append(page(this_month, 7))

# 8 FROST WORKSHEET
pages.append(page(
    phead("The Season","Frost-Date and Season Worksheet") +
    "<p>Your frost dates drive the whole planting year. Write yours down here, then work every planting back from them. You can find your dates at your local extension office or with a frost date lookup by zip code.</p>" +
    fieldrow("My zone","Average last spring frost","Average first fall frost","Days between") +
    note("Count back: your indoor sow date is your last frost minus the weeks a crop needs.") +
    table(["Crop","Weeks before last frost","Your sow date"],8,["34%","33%","33%"]) +
    appbox("set these once and Homestead Keeper does the counting for you, for every planting."), 8))

# ---- FULL HUB PAGES ----
def hub_full(key,title,sub,plan_items,tbl,sb,through,app,templates,pg):
    return page(hubhead(key,title,sub) + plan(plan_items) + tbl + sb +
                note("<b>Through the season:</b> "+through) + appbox(app) + tmpl(templates), pg)

pages.append(hub_full("garden","Garden","Plan, plant, and grow food in your Growing Areas.",
    ["List your Growing Areas (beds, greenhouse, herb garden) and draw a rough map.",
     "Decide what to grow and roughly how much of each.",
     "Check your Seeds in Inventory and note what to order."],
    colhd("This season's plantings") + table(["Crop or Plant","Variety","Growing Area","Sow","Transplant","Harvest window"],5),
    sumbox("Season summary",[["Total plantings","First sow date","First harvest"],["Growing areas in use","Seeds to order","Succession crops"]]),
    "start slow crops indoors in early spring, transplant and direct sow around your last frost, sow in succession and harvest through summer, then put the Growing Areas to bed before your first frost.",
    "each planting becomes a Crop Planting with its own Timeline, and once your frost dates are set the sow, transplant, and harvest windows drop into Upcoming Work on their own.",
    "Templates for this hub: Crop Planting &middot; Grow Season 20__ Overview.", 9))

pages.append(hub_full("animals","Animals","Care for animals and track their whole story.",
    ["List every animal or group you keep, with species, breed, and ID.",
     "Lay out your breeding plan and rough due dates for the year.",
     "Note who you might sell or cull, and when."],
    colhd("Animal Roster") + table(["Name","Type","Species &amp; Breed","Sex","Ear Tag / ID","Place"],5),
    sumbox("Herd and flock summary",[["Head count","Births expected","Next due date","Planned sales"]]),
    "births come in spring, pasture and production peak through summer, weaning and sell decisions land in late summer, and winter is for cold-weather care and watching due dates for spring.",
    "every animal gets a Timeline built from the events that matter (Acquired, Born, Weaned, Moved, Sold, Retired), its Current Status updates itself, breeding due dates are worked out for you, and you can export a full record as a clean PDF for a buyer or your vet.",
    "Templates for this hub: Individual Animal &middot; Breeding Record.", 10))

pages.append(hub_full("orchard","Orchard","Fruit and nut trees, from planting to harvest.",
    ["List your trees, where each one stands, and roughly when it bears.",
     "Set your spray and pruning schedule for the year.",
     "Plan any new plantings and where they'll go."],
    colhd("Tree index") + table(["Name","Type","Variety","Rootstock","Place","Planted"],5),
    sumbox("Orchard summary",[["Number of trees","Next spray","Next harvest","New this year"]]),
    "finish dormant pruning and a dormant oil spray in late winter, spray at petal fall, tend and thin through summer, then harvest and clean up drops in late summer and fall.",
    "the Field Log actions (Prune, Spray, Harvest, Inspect, Fertilize) live right under each tree, and your sprays and prunings turn into Upcoming Work so you catch the narrow windows.",
    "Templates for this hub: Orchard Planting.", 11))

pages.append(hub_full("food","Food &amp; Pantry","What you've canned, frozen, dehydrated, and stored.",
    ["Set rough goals for the year (how many jars, pounds, or meals).",
     "Match what you'll preserve to when it comes in.",
     "Note your storage spots (pantry, freezer, root cellar) and what goes where."],
    colhd("Pantry inventory") + table(["Item","Type","Storage spot","Quantity","Date put up","Best by"],5),
    sumbox("Preservation summary",[["Jars canned","Pounds frozen","Batches fermented","Dehydrated (lbs)"]]),
    "preserve hard through summer and late summer as the harvest rolls in, then draw down the shelves through winter and spring.",
    "the Field Log actions (Can, Freeze, Dehydrate, Ferment, Store, Use) keep a running count of what's on the shelf, and best by dates warn you before anything turns.",
    "Templates for this hub: Pantry and Preservation.", 12))

pages.append(hub_full("property","Property &amp; Equipment","Land, buildings, fences, systems, tractors, and tools.",
    ["List your buildings, fences, systems, and major equipment.",
     "Note purchase dates, warranties, and where you bought each.",
     "Set a maintenance schedule (service, inspections, winterizing)."],
    colhd("Asset and equipment list") + table(["Name","Type","Place","ID / Tag","Purchased","Next service"],5),
    sumbox("Maintenance summary",[["Items tracked","Service due","Warranties expiring","Notes"]]),
    "service mowing and haying gear mid season, and winterize water lines, generators, and buildings before the cold sets in.",
    "keep the whole service history in one place, attach receipts and the warranty PDF with Pro, and let the maintenance reminders chase you.",
    "Templates for this hub: Equipment and Asset. (In the app these are two hubs, Property and Equipment.)", 13))

pages.append(hub_full("inventory","Inventory","Feed, seeds, medicine, fuel, and supplies on hand.",
    ["Decide what you always want on hand, and your low-stock level for each.",
     "Set a restock cadence (feed before winter, seeds before spring).",
     "Note your vendors and rough costs."],
    colhd("Count sheet") + table(["Item","Category","Quantity","Unit","Low-stock at","Place"],6),
    sumbox("Inventory summary",[["Items counted","Below low-stock","Expiring soon","To reorder"]]),
    "stock feed and bedding before winter, seeds and amendments before spring, and check your animal health supplies before kidding and lambing.",
    "Inventory flags what's low or expiring under Needs Attention, so a walk-around count becomes a quick glance instead of a chore.",
    "Templates for this hub: Inventory Count Sheet.", 14))

# 15 EMERGENCY PREP (with contacts)
pages.append(page(
    hubhead("emergency","Emergency Prep","Water, food, fuel, first aid, plans, and contacts.") +
    plan(["Decide how many days of water, food, and fuel you want on hand.",
          "Write down your plan (shelter in place, or where you'd go).",
          "Keep a current contact list and test your backup power."]) +
    colhd("Prep checklist") + table(["Item","Type","Location","Quantity","Expiration / review"],5) +
    '<div class="two"><div>' + colhd("Key contacts") +
    '<div class="blanklines"><div class="line"></div><div class="line"></div><div class="line"></div></div>'
    '<div class="note" style="margin-top:2px;">Family, neighbors, vet, power and water companies</div></div>'
    '<div>' + sumbox("Readiness summary",[["Days of water","Days of food"],["Fuel on hand","Kit reviewed"]]) + '</div></div>' +
    note("<b>Through the season:</b> refresh water, food, and fuel in fall before storm season, and test the Generator Plan while the weather is still fair.") +
    appbox("set review dates and they come back around as Upcoming Work, so your kit never quietly expires.") +
    tmpl("Templates for this hub: Emergency Prep Checklist."), 15))

# ---- REFERENCE HUBS ----
def hub_ref(key,title,sub,intro,head,items,app,templateline,pg):
    return page(hubhead(key,title,sub) + f"<p>{intro}</p>" + colhd(head) +
                '<ul class="plan">' + "".join(f"<li>{i}</li>" for i in items) + "</ul>" +
                appbox(app) + tmpl(templateline), pg)

pages.append(hub_ref("bees","Bees","Hives, inspections, and honey harvests.",
    "Beekeeping runs on a rhythm of regular inspections. This page is a reminder of the beats. The Hive template is where you log them.",
    "Inspection rhythm",
    ["Spring: first inspection, check stores, add supers as they build.",
     "Summer: watch for swarming, monitor mites, pull honey when it's capped.",
     "Fall: feed as needed, treat for mites, wrap or shelter for winter.",
     "Winter: leave them be, heft for stores, clear entrances after storms."],
    "log each inspection on the hive and let the checks (Hive inspection, Feed check, Mite count) become Upcoming Work.",
    "Template for this hub: Hive.", 16))

pages.append(hub_ref("offgrid","Off-grid","Solar, water, power, and backup systems.",
    "Off-grid systems are quiet until they aren't. A short maintenance rhythm keeps the lights on and the water running.",
    "Maintenance rhythm",
    ["List your systems (solar array, batteries, well pump, generator, rain catchment).",
     "Monthly: a quick check of each system and its readings.",
     "Seasonally: service the generator, check battery levels, clean the panels, winterize the water."],
    "track each system like any other asset, keep its service history, and let the monthly and annual checks turn into reminders.",
    "Template for this hub: Equipment and Asset.", 17))

pages.append(hub_ref("forestry","Forestry","Woodlot, firewood, trails, and habitat.",
    "The woodlot is a long game, but firewood is a yearly one, so most of this is about staying ahead of the cold.",
    "Yearly rhythm",
    ["Cut, split, and stack firewood a season ahead so it's dry when you need it.",
     "Walk and clear the trails before winter.",
     "Note any tree work, invasive species, or habitat projects."],
    "set up your Forestry Areas (Woodlot, Firewood Area, Trail, Habitat Project) and log the work with the Field Log so it lands on Upcoming Work.",
    "No dedicated paper template yet. Use a blank note page or the app.", 18))

pages.append(hub_ref("pests","Wildlife &amp; Pests","Sightings, predator pressure, and habitat notes.",
    "Keeping a simple record of what you're seeing helps you spot a pattern before it becomes a problem.",
    "What to jot down",
    ["Pest Sightings (aphids, squash bugs, and the like) and where you saw them.",
     "Predator Sightings and any losses.",
     "Deer, rodent, and bird pressure through the season.",
     "Habitat notes (hedgerows, pollinators, corridors)."],
    "log each one as a record under Wildlife &amp; Pests so you can look back over the season and see the trend.",
    "No dedicated paper template. A blank note page or the app works fine.", 19))

pages.append(hub_ref("weather","Weather &amp; Seasons","Frost dates, rainfall, and seasonal notes.",
    "Your frost dates drive the whole planting year, so this page is mostly about writing them down and tracking what the weather actually does.",
    "What to track",
    ["Your average last and first frost (see the Frost-Date and Season Worksheet).",
     "Rainfall totals and dry spells.",
     "Notable events: storms, a hard freeze, an early or late frost.",
     "First and last frost as they actually happen, to sharpen next year's dates."],
    "log observations as records under Weather &amp; Seasons, and set your frost dates once so the app can schedule your plantings.",
    "See also: the Frost-Date and Season Worksheet in the seasonal section.", 20))

# 21 TEMPLATE LIBRARY DIVIDER
pages.append(page(
    '<div class="eyebrow">Reusable Templates</div>'
    '<h1 style="font-size:30pt;margin-top:10px;">Print As Many As You Need</h1>'
    '<div class="gold" style="margin:16px auto 0;width:96px;border-top:2px solid var(--gold);"></div>'
    '<p style="max-width:5in;color:var(--ink-soft);margin-top:16px;">The pages that follow are meant to be printed again and again, one per animal, one per planting, one per hive, one per season. Each one matches an add form in Homestead Keeper, so filling it in is the paper version of adding a record. When you\'re ready, carry it into the app and it keeps the record alive.</p>', cls="divider"))

# ---- TEMPLATE PAGES ----
def tmpl_page(eyebrow,title,idlines,body,pg):
    return page(record_phead(eyebrow,title,idlines) + body + LOGGED, pg)

# 22 Individual Animal
animal_body = (
    fieldrow("Name","Type (Individual, Flock, Herd, Hive, Rabbitry, Guardian, Pet)") +
    fieldrow("Species and Breed","Sex","Date of Birth") +
    fieldrow("Ear Tag or ID","Color and Markings","Place") +
    colhd("Timeline (dates)") +
    '<div class="fieldrow">' + "".join(f'<div class="field"><div class="lbl">{e}</div><div class="line"></div></div>' for e in ["Acquired","Born","Weaned"]) + '</div>' +
    '<div class="fieldrow">' + "".join(f'<div class="field"><div class="lbl">{e}</div><div class="line"></div></div>' for e in ["Moved","Sold","Retired"]) + '</div>' +
    colhd("Health and weigh-in log") + table(["Date","Entry","Weight","Cost","Notes"],6,["14%","36%","12%","12%","26%"]) +
    appbox("this lands on the animal's Timeline, its Current Status updates itself, and you can export the full record as a clean PDF for a buyer or your vet."))
pages.append(tmpl_page("Reusable Template &middot; One Per Animal","Individual Animal",["Animal ID / Name","Date"],animal_body,22))

# 23 Crop Planting
crop_body = (
    fieldrow("Crop or Plant","Variety") +
    fieldrow("Planted In (Growing Area or Place)","Specific Spot","Source") +
    fieldrow("Seed Start Date","Transplant Date","Harvest Window") +
    note("Work your dates from your frost date, not the calendar.") +
    colhd("Reminders") +
    '<div class="chk"><span class="cb"></span>Watering check</div><div class="chk"><span class="cb"></span>Harvest check</div>' +
    colhd("Notes") + '<div class="blanklines"><div class="line"></div><div class="line"></div><div class="line"></div></div>' +
    appbox("each planting gets its own Timeline, and the sow, transplant, and harvest windows show up as Upcoming Work on their own."))
pages.append(tmpl_page("Reusable Template &middot; One Per Planting","Crop Planting",["Planting / Bed","Date"],crop_body,23))

# 24 Orchard Planting
orch_body = (
    fieldrow("Name","Type (Fruit Tree, Nut Tree)") +
    fieldrow("Variety","Rootstock","Plant Date") +
    fieldrow("Place and Specific Spot") +
    colhd("Care log") + table(["Date","Action (Prune, Spray, Harvest, Inspect, Fertilize)","Notes"],7,["16%","52%","32%"]) +
    appbox("those same Field Log actions live under the tree, and your sprays and prunings become Upcoming Work so you don't miss the window."))
pages.append(tmpl_page("Reusable Template &middot; One Per Tree","Orchard Planting",["Tree ID / Name","Date"],orch_body,24))

# 25 Breeding Record
breed_body = (
    fieldrow("Dam","Sire") +
    fieldrow("Breeding Date","Method","Status (Planned, Completed)") +
    fieldrow("Expected Due Date") +
    sumbox("Gestation helper (count from the breeding date)",[["Chicken ~21 days","Rabbit ~31 days","Pig ~114 days"],["Goat and sheep ~150 days","Cow ~283 days","Your due date"]]) +
    colhd("Notes") + '<div class="blanklines"><div class="line"></div><div class="line"></div></div>' +
    appbox("the due date is worked out for you and rides along on the dam's Timeline as it gets close."))
pages.append(tmpl_page("Reusable Template &middot; One Per Breeding","Breeding Record",["Dam / Group","Date"],breed_body,25))

# 26 Hive
hive_body = (
    fieldrow("Hive name","Place and Specific Spot") +
    fieldrow("ID or Tag","Install date") +
    colhd("Inspection log") + table(["Date","Brood","Stores","Queen","Mites","Action taken"],8) +
    colhd("Reminders") +
    '<div class="chk"><span class="cb"></span>Hive inspection</div><div class="chk"><span class="cb"></span>Feed check</div><div class="chk"><span class="cb"></span>Mite count</div>' +
    appbox("log each inspection on the hive and let the checks become Upcoming Work."))
pages.append(tmpl_page("Reusable Template &middot; One Per Hive","Hive",["Hive name","Date"],hive_body,26))

# 27 Equipment and Asset
equip_body = (
    fieldrow("Name","Type","Place") +
    fieldrow("Brand or Make","Model","Serial Number") +
    fieldrow("Purchase Date","Purchase Cost","Where you buy it") +
    fieldrow("Warranty expiration","Warranty provider") +
    colhd("Service log") + table(["Date","Service","Hours / Mileage","Parts","Cost"],6,["14%","36%","16%","16%","18%"]) +
    appbox("keep the service history in one place, attach receipts and the warranty PDF with Pro, and let the reminders chase you."))
pages.append(tmpl_page("Reusable Template &middot; One Per Item","Equipment and Asset",["Item ID / Tag","Date"],equip_body,27))

# 28 Pantry and Preservation
pantry_body = (
    fieldrow("Item","Type (Canned, Frozen, Dehydrated, Fermented, Pantry, Root Cellar)") +
    fieldrow("Storage spot","Quantity and unit","Date put up") +
    fieldrow("Best by or expiration","Batch and source notes") +
    colhd("Use log") + table(["Date","Action (Store / Use)","Amount","Notes"],7,["16%","32%","16%","36%"]) +
    appbox("the Field Log actions keep a running count of the shelf, and best by dates warn you before anything turns."))
pages.append(tmpl_page("Reusable Template &middot; One Per Batch","Pantry and Preservation",["Item / Batch","Date"],pantry_body,28))

# 29 Inventory Count Sheet
inv_body = (
    table(["Item","Category","Quantity","Unit","Low-stock at","Place","Notes"],13,["20%","16%","9%","8%","10%","13%","24%"]) +
    appbox("Inventory flags what's low or expiring, so the count becomes a quick check instead of a chore."))
pages.append(tmpl_page("Reusable Template &middot; Count Sheet","Inventory Count Sheet",["Location","Date"],inv_body,29))

# 30 Emergency Prep Checklist
emerg_body = (
    table(["Item","Type","Location","Quantity","Expiration / review"],9,["26%","20%","20%","14%","20%"]) +
    colhd("Contacts") + '<div class="blanklines"><div class="line"></div><div class="line"></div><div class="line"></div></div>' +
    '<div class="chk" style="margin-top:6px;"><span class="cb"></span>Supply inventory check</div><div class="chk"><span class="cb"></span>Rotate and replenish</div>' +
    appbox("set review dates and they come back around as Upcoming Work, so your kit never quietly expires."))
pages.append(tmpl_page("Reusable Template &middot; Review Twice a Year","Emergency Prep Checklist",["Household","Date"],emerg_body,30))

# 31 Grow Season Overview
grow_body = (
    fieldrow("Season and year","Last spring frost","First fall frost") +
    fieldrow("Goals for the season") +
    colhd("This season's plantings") + table(["Crop","Variety","Growing Area","Sow","Transplant","Harvest window"],7) +
    colhd("What worked, what to change") + '<div class="blanklines"><div class="line"></div><div class="line"></div></div>' +
    appbox("every row here can become a Crop Planting, and the season fills in your Garden Timeline and Upcoming Work."))
pages.append(tmpl_page("Reusable Template &middot; One Per Season","Grow Season 20__ Overview",["Season / Year","Zone"],grow_body,31))

# 32 TAKE IT FURTHER (closing)
closing = (
    '<div class="eyebrow">The Next Step</div>'
    '<h1 class="closing" style="margin-top:6px;">Take It Further with Homestead Keeper</h1><hr class="rule">'
    "<p>You've planned your year on paper. Homestead Keeper keeps it alive. Everything in this planner maps straight to the app, in the same words, so nothing feels new when you open it.</p>"
    '<div class="colhd" style="margin-top:6px;">What the app does that paper can\'t</div>'
    '<ul class="ben">'
    '<li><b>It schedules your garden for you.</b> Set your frost dates once and every Crop Planting gets its windows worked out and dropped into Upcoming Work.</li>'
    '<li><b>It remembers so you don\'t have to.</b> Care, sprays, service, and reviews come back around as reminders.</li>'
    '<li><b>It keeps each thing\'s whole story.</b> Every animal, planting, and tool gets a Timeline, and an animal\'s Current Status updates itself.</li>'
    '<li><b>It hands you clean records.</b> Export an animal\'s full record, or a season\'s, as a tidy PDF for a buyer or your vet (with Pro).</li>'
    '<li><b>It counts your shelves and bins.</b> Inventory and Food &amp; Pantry warn you before you run low or something expires.</li>'
    '</ul>'
    f'<div class="qrwrap"><img src="{QR}" alt="QR to homesteadkeeper.com">'
    '<div><div style="font-family:Georgia,serif;color:var(--forest);font-size:15pt;">Start your Homestead</div>'
    '<p style="margin:4px 0 0;">Scan the code or visit <b>homesteadkeeper.com</b>. Plan it here, keep it there.</p></div></div>')
pages.append(page(closing, 32, cls="closing"))

html = f"<!doctype html><html lang='en'><head><meta charset='utf-8'><title>Homestead Keeper Planner</title><style>{CSS}</style></head><body>" + "".join(pages) + "</body></html>"
(SC/"planner-full.html").write_text(html)
print("wrote planner-full.html", len(html), "bytes,", len(pages), "pages")
