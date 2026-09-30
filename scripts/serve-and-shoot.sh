#!/bin/bash
# Serverar dist/ och tar skärmbilder i ett svep (bakgrundsprocesser överlever inte mellan anrop).
cd "$(dirname "$0")/.."
python3 -m http.server 4321 --directory dist >/tmp/serve.log 2>&1 &
P=$!
sleep 1.5
rm -rf shots
CHROME=/opt/pw-browsers/chromium node scripts/shots.mjs http://localhost:4321/ shots 2>&1 | tail -3
for pg in pris tekniken trygghet; do CHROME=/opt/pw-browsers/chromium node scripts/shots.mjs http://localhost:4321/$pg/ shots/$pg 2>&1 | tail -3; done
kill $P
cd shots && python3 - <<'PY'
from PIL import Image
import glob
def sheet(prefix, cols, scale, out):
    files=sorted(glob.glob(f"{prefix}-*.png"))
    ims=[Image.open(f) for f in files]
    w,h=ims[0].size; tw,th=int(w*scale),int(h*scale)
    rows=(len(ims)+cols-1)//cols
    S=Image.new("RGB",(cols*tw+(cols-1)*8, rows*th+(rows-1)*8),(40,40,40))
    for i,im in enumerate(ims): S.paste(im.resize((tw,th)),((i%cols)*(tw+8),(i//cols)*(th+8)))
    S.save(out); print(out,S.size)
sheet("desktop",4,0.34,"sheet-desktop.png"); sheet("mobile",6,0.5,"sheet-mobile.png")
PY
