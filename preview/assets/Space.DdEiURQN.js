import{r as at}from"./index.-iFofLld.js";var it={exports:{}},W={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var mt;function Ft(){if(mt)return W;mt=1;var o=Symbol.for("react.transitional.element"),t=Symbol.for("react.fragment");function e(n,r,a){var i=null;if(a!==void 0&&(i=""+a),r.key!==void 0&&(i=""+r.key),"key"in r){a={};for(var h in r)h!=="key"&&(a[h]=r[h])}else a=r;return r=a.ref,{$$typeof:o,type:n,key:i,ref:r!==void 0?r:null,props:a}}return W.Fragment=t,W.jsx=e,W.jsxs=e,W}var vt;function kt(){return vt||(vt=1,it.exports=Ft()),it.exports}var ct=kt();const Mt=.56,Tt=.21,zt=.84,Et=.11;function K(o,t,e){const n=e*Math.PI/180;for(let a=t;a>=0;a-=.005){const i=a*Math.cos(n),h=a*Math.sin(n),u=o+.3963377774*i+.2158037573*h,d=o-.1055613458*i-.0638541728*h,w=o-.0894841775*i-1.291485548*h,y=u**3,E=d**3,R=w**3,P=[4.0767416621*y-3.3077115913*E+.2309699292*R,-1.2684380046*y+2.6097574011*E-.3413193965*R,-.0041960863*y-.7034186147*E+1.707614701*R];if(P.every(C=>C>=-5e-4&&C<=1.0005))return P.map(C=>{const s=Math.min(1,Math.max(0,C)),p=s<=.0031308?12.92*s:1.055*Math.pow(s,1/2.4)-.055;return Math.round(p*255)})}const r=Math.round(Math.pow(o,1/2.2)*255);return[r,r,r]}const Lt={light:K(Mt,Tt,262),core:K(zt,Et,262)},xt=new Map;function lt(o){const t=(Math.round(o)%360+360)%360;let e=xt.get(t);return e||(e={light:K(Mt,Tt,t),core:K(zt,Et,t)},xt.set(t,e)),e}lt(72);const It=`#version 300 es
in vec2 aPos;
void main() { gl_Position = vec4(aPos, 0.0, 1.0); }
`,Dt=`#version 300 es
precision highp float;
uniform vec2 uRes;      // canvasens storlek i enhetspixlar
uniform float uDpr;
uniform vec2 uC;        // mitt, CSS-px, y nedåt
uniform float uR;       // grundradie, CSS-px
uniform float uPulse;
uniform float uTime;    // sekunder
uniform float uTurn;    // långsam vridning av det inre, radianer (kring lodlinjen)
uniform float uTilt;    // vridning kring tvärlinjen – fingret kan snurra åt alla håll (2026-09-24)
uniform vec3 uA;        // nyhetens ton (light), 0–1
uniform vec3 uB;        // accenten (light), 0–1
uniform float uAlpha;
uniform int uSteps;     // strålsteg genom nebulosan (6 = fullt, 3 = stort klot under draget)
uniform int uOct;       // fbm-oktaver (4 = fullt, 2 = under draget)
out vec4 o;

vec3 mod289(vec3 x){return x-floor(x*(1.0/289.0))*289.0;}
vec4 mod289(vec4 x){return x-floor(x*(1.0/289.0))*289.0;}
vec4 permute(vec4 x){return mod289(((x*34.0)+1.0)*x);}
vec4 taylorInvSqrt(vec4 r){return 1.79284291400159-0.85373472095314*r;}
float snoise(vec3 v){
  const vec2 C=vec2(1.0/6.0,1.0/3.0); const vec4 D=vec4(0.0,0.5,1.0,2.0);
  vec3 i=floor(v+dot(v,C.yyy)); vec3 x0=v-i+dot(i,C.xxx);
  vec3 g=step(x0.yzx,x0.xyz); vec3 l=1.0-g; vec3 i1=min(g.xyz,l.zxy); vec3 i2=max(g.xyz,l.zxy);
  vec3 x1=x0-i1+C.xxx; vec3 x2=x0-i2+C.yyy; vec3 x3=x0-D.yyy;
  i=mod289(i);
  vec4 p=permute(permute(permute(i.z+vec4(0.0,i1.z,i2.z,1.0))+i.y+vec4(0.0,i1.y,i2.y,1.0))+i.x+vec4(0.0,i1.x,i2.x,1.0));
  float n_=0.142857142857; vec3 ns=n_*D.wyz-D.xzx;
  vec4 j=p-49.0*floor(p*ns.z*ns.z);
  vec4 x_=floor(j*ns.z); vec4 y_=floor(j-7.0*x_);
  vec4 x=x_*ns.x+ns.yyyy; vec4 y=y_*ns.x+ns.yyyy; vec4 h=1.0-abs(x)-abs(y);
  vec4 b0=vec4(x.xy,y.xy); vec4 b1=vec4(x.zw,y.zw);
  vec4 s0=floor(b0)*2.0+1.0; vec4 s1=floor(b1)*2.0+1.0; vec4 sh=-step(h,vec4(0.0));
  vec4 a0=b0.xzyw+s0.xzyw*sh.xxyy; vec4 a1=b1.xzyw+s1.xzyw*sh.zzww;
  vec3 p0=vec3(a0.xy,h.x); vec3 p1=vec3(a0.zw,h.y); vec3 p2=vec3(a1.xy,h.z); vec3 p3=vec3(a1.zw,h.w);
  vec4 norm=taylorInvSqrt(vec4(dot(p0,p0),dot(p1,p1),dot(p2,p2),dot(p3,p3)));
  p0*=norm.x; p1*=norm.y; p2*=norm.z; p3*=norm.w;
  vec4 m=max(0.6-vec4(dot(x0,x0),dot(x1,x1),dot(x2,x2),dot(x3,x3)),0.0); m=m*m;
  return 42.0*dot(m*m,vec4(dot(p0,x0),dot(p1,x1),dot(p2,x2),dot(p3,x3)));
}
float fbm(vec3 p){ float s=0.0,a=0.5; for(int i=0;i<4;i++){ if(i>=uOct) break; s+=a*snoise(p); p=p*2.03+vec3(1.7,9.2,4.1); a*=0.5; } return s; }
float hash(vec2 p){ return fract(sin(dot(p, vec2(12.9898,78.233)))*43758.5453); }
vec3 hash3(vec3 p){ p=fract(p*vec3(443.897,441.423,437.195)); p+=dot(p,p.yzx+19.19); return fract((p.xxy+p.yzz)*p.zyx); }
vec3 hsv(float h,float s,float v){ vec3 k=abs(fract(h+vec3(0.,2./3.,1./3.))*6.-3.); return v*mix(vec3(1.),clamp(k-1.,0.,1.),s); }

// Stjärnor på en sfärisk yta: cellhash i 3D, några få får kors.
vec3 stars(vec3 p, float scale, float density, float t){
  vec3 q=p*scale; vec3 g=floor(q); vec3 f=fract(q);
  vec3 h=hash3(g);
  if(h.x>density) return vec3(0.);
  vec3 c=0.2+0.6*hash3(g+7.3);
  vec3 dv=f-c; float d=length(dv);
  float tw=0.7+0.3*sin(t*(1.5+h.y*2.0)+h.z*6.28);
  float core=smoothstep(0.2,0.0,d)*tw*(0.6+0.8*h.z);
  float cross=(exp(-abs(dv.x)*14.)+exp(-abs(dv.y)*14.))*smoothstep(0.5,0.0,d)*step(0.965,h.y)*0.9*tw;
  return vec3(1.0)*(core+cross)*2.2;
}

void main(){
  vec2 frag=vec2(gl_FragCoord.x,uRes.y-gl_FragCoord.y)/uDpr;
  // Rösten rör bara det inre (Joel 2026-09-24): radien står stilla, uPulse läses bara som amp.
  float R=uR;
  vec2 d=(frag-uC)/R;
  float r=length(d);
  float cover=clamp((R-length(frag-uC))*uDpr+0.5,0.0,1.0);
  if(cover<=0.0) discard;
  // Rösten, 0–1, ur pulsen (DawnStage: pulse = 1 + a·0.10).
  float uAmp=clamp((uPulse-1.0)/0.10,0.0,1.0);
  vec3 col;
  {
    float r2=min(dot(d,d),1.0);
    float z=sqrt(1.0-r2);
    vec3 n=vec3(d.x,-d.y,z);
    float fres=pow(1.0-z,1.4);
    float ca=cos(uTurn),sa=sin(uTurn);
    float cb=cos(uTilt),sb=sin(uTilt);
    mat3 R=mat3(ca,0.,-sa, 0.,1.,0., sa,0.,ca)*mat3(1.,0.,0., 0.,cb,sb, 0.,-sb,cb);
    vec3 p0=n, p1=vec3(n.xy,-z);
    // ---- nebulosa längs strålen genom klotet
    vec3 neb=vec3(0.); float dens=0.;
    // Det inre är det som rör sig (Joel 2026-09-24): nebulosan driver tydligt, glaset står stilla.
    float t0=uTime*0.16;
    float nSteps=float(uSteps);
    for(int i=0;i<6;i++){
      if(i>=uSteps) break;
      float t=(float(i)+0.5)/nSteps;
      vec3 p=R*mix(p0,p1,t);
      float f=fbm(p*1.35+vec3(t0*0.3,t0,t0*0.45));
      float dd=smoothstep(-0.15,0.6,f)*(1.0-t*0.3);
      vec3 c=mix(uA,uB,smoothstep(-0.4,0.6,snoise(p*0.8+vec3(3.1,0.,t0*0.3))));
      neb+=c*dd; dens+=dd;
    }
    neb/=(2.2*nSteps/6.0); neb*=(0.85+uAmp*0.4);
    // mörkast i mitten: djup
    neb*=0.6+0.4*(1.0-z);
    // ---- stjärnor: bakre väggen + svävande i mitten
    vec3 st=stars(R*p1,7.0,0.42,uTime)*1.0 + stars(R*p1*1.7+2.0,12.0,0.35,uTime+3.)*0.55;
    st+=stars(R*mix(p0,p1,0.5)+5.0,5.5,0.3,uTime+7.)*0.8;
    st*=0.85+0.15*z;
    // ---- glaset: tunnfilmsfärger vid kanten (violett / cyan / rosa)
    float band=fract((1.0-z)*2.6+snoise(n*3.0)*0.35);
    float warm=smoothstep(0.3,1.0,dot(normalize(d+1e-5),vec2(-0.5,0.85)))*fres;
    vec3 film=mix(mix(vec3(0.55,0.35,1.0),vec3(0.35,0.85,1.0),smoothstep(0.0,0.5,band)),vec3(1.0,0.45,0.75),smoothstep(0.5,1.0,band));
    film=mix(film,vec3(0.95,0.85,0.35),warm*0.6);
    float filmW=fres*(0.55+0.65*smoothstep(-0.3,0.7,snoise(n*2.2)));
    // ---- regnbågsprickar längs kanten
    vec2 cell=floor(frag/(uR*0.018));
    float hh=hash(cell);
    vec2 cf=fract(frag/(uR*0.018))-0.5+(vec2(hash(cell+3.1),hash(cell+5.7))-0.5)*0.5;
    float dot_=smoothstep(0.34,0.06,length(cf));
    float sp=step(0.90,hh)*dot_*pow(fres,0.8)*smoothstep(0.68,0.9,r);
    vec3 speck=hsv(hash(cell+1.7),1.0,1.0)*sp*2.2;
    // ---- höjdljus: två mjuka
    float hl=exp(-dot(d-vec2(-0.42,-0.52),d-vec2(-0.42,-0.52))*28.)*0.28
            +exp(-dot(d-vec2(0.62,-0.42),d-vec2(0.62,-0.42))*60.)*0.5;
    // ---- glaskanten: tunn ljusare ring
    float edge=smoothstep(0.955,0.995,r)*(1.0-smoothstep(0.995,1.0,r))*0.22;
    vec3 inner=neb+st;
    vec3 glass=inner*(1.0-fres*0.25)+film*filmW*0.85+speck+vec3(hl)+vec3(edge)*(0.6+0.4*film);

    col=glass;
  }
  col+=(hash(gl_FragCoord.xy+uTime)-0.5)/255.0;
  float a=uAlpha*cover;
  o=vec4(col*a,a);
}`,jt=["uRes","uDpr","uC","uR","uPulse","uTime","uTurn","uTilt","uA","uB","uAlpha","uSteps","uOct"];class ht{gl;prog;u={};W=0;H=0;dpr=1;t0=performance.now();static create(t){try{const e=t.getContext("webgl2",{premultipliedAlpha:!0,alpha:!0,antialias:!1,powerPreference:"low-power"});return e?new ht(e):null}catch{return null}}constructor(t){this.gl=t;const e=(a,i)=>{const h=t.createShader(a);if(t.shaderSource(h,i),t.compileShader(h),!t.getShaderParameter(h,t.COMPILE_STATUS))throw new Error(t.getShaderInfoLog(h)??"shader");return h},n=t.createProgram();if(t.attachShader(n,e(t.VERTEX_SHADER,It)),t.attachShader(n,e(t.FRAGMENT_SHADER,Dt)),t.bindAttribLocation(n,0,"aPos"),t.linkProgram(n),!t.getProgramParameter(n,t.LINK_STATUS))throw new Error(t.getProgramInfoLog(n)??"link");this.prog=n;const r=t.createBuffer();t.bindBuffer(t.ARRAY_BUFFER,r),t.bufferData(t.ARRAY_BUFFER,new Float32Array([-1,-1,3,-1,-1,3]),t.STATIC_DRAW),t.enableVertexAttribArray(0),t.vertexAttribPointer(0,2,t.FLOAT,!1,0,0),t.useProgram(n);for(const a of jt)this.u[a]=t.getUniformLocation(n,a);t.enable(t.BLEND),t.blendFunc(t.ONE,t.ONE_MINUS_SRC_ALPHA)}resize(t,e,n){this.W=t,this.H=e,this.dpr=n;const r=this.gl.canvas;r.width=Math.round(t*n),r.height=Math.round(e*n),this.gl.viewport(0,0,r.width,r.height)}clear(){const t=this.gl;t.disable(t.SCISSOR_TEST),t.clearColor(0,0,0,0),t.clear(t.COLOR_BUFFER_BIT)}draw(t){const e=this.gl;if(this.clear(),t.alpha<=.001)return;const n=e.canvas,r=t.R*t.pulse*1.05,a=Math.max(0,Math.floor((t.x-r)*this.dpr)),i=Math.max(0,Math.floor((this.H-(t.y+r))*this.dpr)),h=Math.ceil(r*2*this.dpr)+2;e.enable(e.SCISSOR_TEST),e.scissor(a,i,Math.min(h,n.width-a),Math.min(h,n.height-i));const u=y=>[y[0]/255,y[1]/255,y[2]/255],d=(performance.now()-this.t0)/1e3;e.uniform2f(this.u.uRes,n.width,n.height),e.uniform1f(this.u.uDpr,this.dpr),e.uniform2f(this.u.uC,t.x,t.y),e.uniform1f(this.u.uR,t.R),e.uniform1f(this.u.uPulse,t.pulse),e.uniform1f(this.u.uTime,d),e.uniform1f(this.u.uTurn,t.turn??d*.12),e.uniform1f(this.u.uTilt,t.tilt??0),e.uniform3fv(this.u.uA,u(t.a.light)),e.uniform3fv(this.u.uB,u(t.b.light)),e.uniform1f(this.u.uAlpha,t.alpha);const w=t.R>150;e.uniform1i(this.u.uSteps,w?3:6),e.uniform1i(this.u.uOct,w?2:4),e.drawArrays(e.TRIANGLES,0,3)}}const H=(o,t)=>`rgba(${o[0]},${o[1]},${o[2]},${t})`,Ot=170,$t=14,Nt=11,yt={x:-.28,y:-.96};class qt{constructor(t){this.reduced=t}stars=[];dust=[];W=0;H=0;travel=0;lastT=null;resize(t,e){if(t===this.W&&e===this.H)return;this.W=t,this.H=e;let n=1234567;const r=()=>(n=n*1664525+1013904223>>>0,n/4294967296);this.stars=[];for(let a=0;a<Ot;a++){const i=Math.pow(r(),1.6);this.stars.push({u:r(),v:r(),depth:i,size:.5+i*1.1+(r()<.04?.8:0),phase:r()*Math.PI*2,rate:.15+r()*.4,tinted:r()<.16,base:.16+r()*.3})}this.dust=[];for(let a=0;a<$t;a++)this.dust.push({u:r(),v:r(),depth:1.6+r()*.8,size:3+r()*5,phase:r()*Math.PI*2,rate:.1+r()*.2,tinted:r()<.35,base:.05+r()*.07})}draw(t,e,n,r,a,i=1,h=1){const{W:u,H:d}=this;if(!u||!d)return;const w=this.lastT==null?0:Math.min(.1,Math.max(0,e-this.lastT));this.lastT=e,this.reduced||(this.travel+=w*Nt*h);const y=40,E=u+y*2,R=d+y*2,P=(s,p)=>(s%p+p)%p,C=s=>{const p=.25+.75*s.depth;return{x:-y+P(s.u*E+yt.x*this.travel*p+r.x*s.depth,E),y:-y+P(s.v*R+yt.y*this.travel*p+r.y*s.depth,R)}};for(const s of this.stars){const{x:p,y:v}=C(s);if(p<-4||p>u+4||v<-4||v>d+4)continue;const g=this.reduced?.85:.8+.2*Math.sin(e*s.rate+s.phase),U=1+a*(.6+1.2*s.depth),c=Math.min(1,s.base*g*(.5+.5*s.depth)*U)*i,f=s.size*(1+a*.4*s.depth);if(s.tinted?t.fillStyle=H(s.depth>.5?n.core:n.light,c):t.fillStyle=`rgba(226,232,246,${c})`,t.beginPath(),t.arc(p,v,f,0,Math.PI*2),t.fill(),s.size>1.9&&c>.2){const S=t.createRadialGradient(p,v,0,p,v,f*4);S.addColorStop(0,H(s.tinted?n.core:[200,210,255],.1*c)),S.addColorStop(1,H(s.tinted?n.core:[200,210,255],0)),t.fillStyle=S,t.fillRect(p-f*4,v-f*4,f*8,f*8)}}if(!this.reduced)for(const s of this.dust){const{x:p,y:v}=C(s),g=s.size*3;if(p<-g||p>u+g||v<-g||v>d+g)continue;const U=.75+.25*Math.sin(e*s.rate+s.phase),c=s.base*U*(1+a*1.5)*i,f=s.tinted?n.light:[214,222,240],S=t.createRadialGradient(p,v,0,p,v,g);S.addColorStop(0,H(f,c)),S.addColorStop(.35,H(f,c*.45)),S.addColorStop(1,H(f,0)),t.fillStyle=S,t.fillRect(p-g,v-g,g*2,g*2)}}}const Ht=o=>o*o*(3-2*o),gt=o=>Math.min(1,Math.max(0,o)),_=(o,t,e,n)=>o+(t-o)*(1-Math.pow(1-e,n)),T=(o,t,e)=>o+(t-o)*e,wt=(o,t,e)=>({light:[T(o.light[0],t.light[0],e),T(o.light[1],t.light[1],e),T(o.light[2],t.light[2],e)],core:[T(o.core[0],t.core[0],e),T(o.core[1],t.core[1],e),T(o.core[2],t.core[2],e)]}),D=(o,t)=>`rgba(${o[0]},${o[1]},${o[2]},${t})`,bt=o=>lt(o+48),Bt=(o,t,e)=>{const n=(t-o+540)%360-180;return(o+n*e+360)%360};function Rt(o,t){if(!o)return t;const e=o.split(",").map(n=>parseFloat(n.trim()));return{hue:t.hue,x:Number.isFinite(e[0])?e[0]:t.x,y:Number.isFinite(e[1])?e[1]:t.y,r:Number.isFinite(e[2])?e[2]:t.r,alpha:Number.isFinite(e[3])?e[3]:t.alpha}}function St(){const o=[];return document.querySelectorAll("[data-space]").forEach(t=>{const n={hue:parseFloat(t.dataset.hue??"262"),x:.5,y:.5,r:.3,alpha:1},r=Rt(t.dataset.orb,n),a=Rt(t.dataset.orbM,{...r,x:.5,y:.3,r:.24}),i=t.querySelector("[data-orb-anchor]");o.push({el:t,anchor:i,d:r,m:a})}),o}function Gt(o,t,e,n,r){const a=t?o.m:o.d;if(!o.anchor)return a;const i=o.anchor.getBoundingClientRect();if(i.width<2)return{...a,alpha:0};const h=i.left+i.width/2,u=i.top+i.height/2;return{hue:a.hue,x:h/e,y:u/n,r:i.width/2/r,alpha:a.alpha}}function Ut(){const o=at.useRef(null),t=at.useRef(null);return at.useEffect(()=>{const e=o.current,n=t.current;if(!e||!n)return;const r=e.getContext("2d");if(!r)return;const a=window.matchMedia("(prefers-reduced-motion: reduce)").matches,i=new qt(a);let h=null;try{h=ht.create(n)}catch{h=null}n.addEventListener("webglcontextlost",()=>{h=null});let u=0,d=0,w=1,y=!1;const E=()=>{u=window.innerWidth,d=window.innerHeight,w=Math.min(window.devicePixelRatio||1,2),y=u<760,e.width=Math.round(u*w),e.height=Math.round(d*w),e.style.width=`${u}px`,e.style.height=`${d}px`,n.style.width=`${u}px`,n.style.height=`${d}px`,r.setTransform(w,0,0,w,0,0),i.resize(u,d),h?.resize(u,d,w)};E(),window.addEventListener("resize",E);let R=St();const P=()=>{R=St()};window.addEventListener("load",P);const C=new MutationObserver(P);C.observe(document.body,{childList:!0,subtree:!0});const s={x:0,y:0,tx:0,ty:0,on:!1},p=x=>{x.pointerType==="mouse"&&(s.on=!0,s.tx=x.clientX/u*2-1,s.ty=x.clientY/d*2-1)};window.addEventListener("pointermove",p,{passive:!0});const v={x:0,y:0},g=x=>{if(x.gamma==null||x.beta==null)return;const b=Math.max(-1,Math.min(1,x.gamma/25)),l=Math.max(-1,Math.min(1,(x.beta-45)/25));v.x+=(b-v.x)*.15,v.y+=(l-v.y)*.15};typeof DeviceOrientationEvent.requestPermission!="function"&&window.addEventListener("deviceorientation",g);const c={x:u/2,y:d*.6,r:120,alpha:0,hue:262};let f=Lt,S=bt(262),$=0,N=-1,ut=window.scrollY,tt=0,dt=0,et=0;const rt=performance.now();let ot=rt;const J=a?400:1500;let B=0,G=!0;const Ct=()=>{if(!R.length)return{hue:262,x:.5,y:.55,r:.3,alpha:1};const x=d/2,b=R.map(q=>{const X=(q.anchor??q.el).getBoundingClientRect();return X.top+X.height/2});let l=0;for(;l<b.length-1&&b[l+1]<=x;)l++;const V=Math.min(u,d),j=q=>Gt(q,y,u,d,V),A=j(R[l]);if(l>=b.length-1||b[l]>x)return N!==l&&(N>=0&&($=1),N=l),A;const L=j(R[l+1]),O=Math.max(1,b[l+1]-b[l]),I=Ht(gt((x-b[l])/O)),Y=I<.5?l:l+1;return N!==Y&&(N>=0&&($=1),N=Y),{hue:Bt(A.hue,L.hue,I),x:T(A.x,L.x,I),y:T(A.y,L.y,I),r:T(A.r,L.r,I),alpha:T(A.alpha,L.alpha,I)}},nt=x=>{if(!G)return;B=requestAnimationFrame(nt);const b=Math.min(.1,(x-ot)/1e3);ot=x;const l=b*60,V=(x-rt)/1e3,j=x-rt,A=window.scrollY,L=A-ut;ut=A,tt=_(tt,b>0?L/b:0,.2,l),a||(dt+=L*.0022),s.x=_(s.x,s.tx,.06,l),s.y=_(s.y,s.ty,.06,l);const O=Ct(),I=Math.min(u,d),Y=O.x*u+s.x*10,q=O.y*d+s.y*8,X=O.r*I,Q=a?1:.075;c.x=_(c.x,Y,Q,l),c.y=_(c.y,q,Q,l),c.r=_(c.r,X,Q,l),c.alpha=_(c.alpha,O.alpha,Q,l),c.hue=(_(c.hue,c.hue+((O.hue-c.hue+540)%360-180),.06,l)%360+360)%360;const At=lt(c.hue);f=wt(f,At,1-Math.pow(1-.08,l)),S=wt(S,bt(c.hue),1-Math.pow(1-.08,l)),$=_($,0,.045,l),et=_(et,s.y*.35+v.y*.3,.05,l);let z=c.x,M=c.y,m=c.r,F=c.alpha,ft=0;if(j<J){const k=a?j/J:Math.pow(j/J,3);m=T(2,c.r,k),M=T(c.y-d*.14,c.y,k),F=c.alpha*(a?k:Math.min(1,k*3)),ft=Math.sin(Math.PI*gt(j/J))*.9}const _t={x:s.x*22+v.x*30,y:-A*.12+s.y*14+v.y*30},Pt=1+Math.min(3,Math.abs(tt)/500);if(r.clearRect(0,0,u,d),i.draw(r,V,f,_t,Math.max($,ft),y?1:1.3,Pt),F>.005&&m>1){const k=r.createRadialGradient(z,M,m*.85,z,M,m*1.6);k.addColorStop(0,D(f.light,.1*F)),k.addColorStop(.5,D(f.light,.035*F)),k.addColorStop(1,D(f.light,0)),r.fillStyle=k,r.fillRect(z-m*1.6,M-m*1.6,m*3.2,m*3.2);const st=r.createRadialGradient(z,M,m*.9,z,M,m*1.25);if(st.addColorStop(0,D(f.light,.18*F)),st.addColorStop(1,D(f.light,0)),r.fillStyle=st,r.fillRect(z-m*2,M-m*2,m*4,m*4),h)h.draw({x:z,y:M,R:m,pulse:1+$*.1,edge:[],phi:0,a:f,b:S,alpha:F,turn:dt+V*.12,tilt:et});else{const Z=r.createRadialGradient(z-m*.25,M-m*.3,m*.1,z,M,m*1.05);Z.addColorStop(0,D(f.core,.95*F)),Z.addColorStop(.6,D(f.light,.85*F)),Z.addColorStop(1,D(f.light,.15*F)),r.fillStyle=Z,r.beginPath(),r.arc(z,M,m,0,Math.PI*2),r.fill()}}else h?.clear();document.documentElement.style.setProperty("--orb-x",`${z.toFixed(1)}px`),document.documentElement.style.setProperty("--orb-y",`${M.toFixed(1)}px`),document.documentElement.style.setProperty("--orb-r",`${m.toFixed(1)}px`)};B=requestAnimationFrame(nt);const pt=()=>{document.hidden?(G=!1,cancelAnimationFrame(B)):G||(G=!0,ot=performance.now(),B=requestAnimationFrame(nt))};return document.addEventListener("visibilitychange",pt),()=>{G=!1,cancelAnimationFrame(B),window.removeEventListener("resize",E),window.removeEventListener("load",P),window.removeEventListener("pointermove",p),window.removeEventListener("deviceorientation",g),document.removeEventListener("visibilitychange",pt),C.disconnect()}},[]),ct.jsxs("div",{className:"space","aria-hidden":"true",children:[ct.jsx("canvas",{ref:o,className:"space-layer"}),ct.jsx("canvas",{ref:t,className:"space-layer"})]})}export{Ut as default};
