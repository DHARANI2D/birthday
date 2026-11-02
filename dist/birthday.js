(()=>{var Eu=0,Gc=1,bu=2;var Wc=1,Ca=2,Kn=3,hi=0,nn=1,pe=2,On=0,qi=1,Qn=2,Xc=3,qc=4,Tu=5,Ai=100,wu=101,Au=102,Ru=103,Cu=104,Pu=200,Iu=201,Lu=202,Du=203,ta=204,ea=205,Uu=206,Nu=207,Fu=208,Bu=209,Ou=210,Hu=211,zu=212,ku=213,Vu=214,Pa=0,Ia=1,La=2,Yi=3,Da=4,Ua=5,Na=6,Fa=7,Ba=0,Gu=1,Wu=2,fi=0,Oa=1,Ha=2,za=3,Ks=4,ka=5,Va=6,Ga=7;var Yc=300,as=301,ls=302,Wa=303,Xa=304,ao=306,Bs=1e3,wi=1001,na=1002,fn=1003,Xu=1004;var lo=1005;var Un=1006,qa=1007;var Ii=1008;var Hn=1009,Zc=1010,$c=1011,Qs=1012,Ya=1013,Li=1014,zn=1015,pn=1016,Za=1017,$a=1018,js=1020,Jc=35902,Kc=35899,Qc=1021,jc=1022,Rn=1023,Os=1026,tr=1027,Ja=1028,Ka=1029,th=1030,Qa=1031;var ja=1033,co=33776,ho=33777,uo=33778,fo=33779,tl=35840,el=35841,nl=35842,il=35843,sl=36196,rl=37492,ol=37496,al=37808,ll=37809,cl=37810,hl=37811,ul=37812,dl=37813,fl=37814,pl=37815,ml=37816,gl=37817,xl=37818,_l=37819,yl=37820,vl=37821,Ml=36492,Sl=36494,El=36495,bl=36283,Tl=36284,wl=36285,Al=36286;var Ir=2300,ia=2301,jo=2302,Ic=2400,Lc=2401,Dc=2402;var qu=3200,Yu=3201;var Rl=0,Zu=1,kn="",je="srgb",Zi="srgb-linear",Lr="linear",re="srgb";var Xi=7680;var Uc=519,$u=512,Ju=513,Ku=514,eh=515,Qu=516,ju=517,td=518,ed=519,sa=35044,nh=35048;var ih="300 es",Dn=2e3,Dr=2001;var ui=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){let n=this._listeners;return n===void 0?!1:n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){let n=this._listeners;if(n===void 0)return;let s=n[t];if(s!==void 0){let r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){let e=this._listeners;if(e===void 0)return;let n=e[t.type];if(n!==void 0){t.target=this;let s=n.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,t);t.target=null}}},sn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],qh=1234567,Ar=Math.PI/180,$i=180/Math.PI;function Zn(){let i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(sn[i&255]+sn[i>>8&255]+sn[i>>16&255]+sn[i>>24&255]+"-"+sn[t&255]+sn[t>>8&255]+"-"+sn[t>>16&15|64]+sn[t>>24&255]+"-"+sn[e&63|128]+sn[e>>8&255]+"-"+sn[e>>16&255]+sn[e>>24&255]+sn[n&255]+sn[n>>8&255]+sn[n>>16&255]+sn[n>>24&255]).toLowerCase()}function Kt(i,t,e){return Math.max(t,Math.min(e,i))}function sh(i,t){return(i%t+t)%t}function qf(i,t,e,n,s){return n+(i-t)*(s-n)/(e-t)}function Yf(i,t,e){return i!==t?(e-i)/(t-i):0}function Rr(i,t,e){return(1-e)*i+e*t}function Zf(i,t,e,n){return Rr(i,t,1-Math.exp(-e*n))}function $f(i,t=1){return t-Math.abs(sh(i,t*2)-t)}function Jf(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*(3-2*i))}function Kf(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*i*(i*(i*6-15)+10))}function Qf(i,t){return i+Math.floor(Math.random()*(t-i+1))}function jf(i,t){return i+Math.random()*(t-i)}function tp(i){return i*(.5-Math.random())}function ep(i){i!==void 0&&(qh=i);let t=qh+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function np(i){return i*Ar}function ip(i){return i*$i}function sp(i){return(i&i-1)===0&&i!==0}function rp(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function op(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function ap(i,t,e,n,s){let r=Math.cos,o=Math.sin,a=r(e/2),l=o(e/2),c=r((t+n)/2),h=o((t+n)/2),u=r((t-n)/2),f=o((t-n)/2),d=r((n-t)/2),m=o((n-t)/2);switch(s){case"XYX":i.set(a*h,l*u,l*f,a*c);break;case"YZY":i.set(l*f,a*h,l*u,a*c);break;case"ZXZ":i.set(l*u,l*f,a*h,a*c);break;case"XZX":i.set(a*h,l*m,l*d,a*c);break;case"YXY":i.set(l*d,a*h,l*m,a*c);break;case"ZYZ":i.set(l*m,l*d,a*h,a*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function Ln(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function de(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}var er={DEG2RAD:Ar,RAD2DEG:$i,generateUUID:Zn,clamp:Kt,euclideanModulo:sh,mapLinear:qf,inverseLerp:Yf,lerp:Rr,damp:Zf,pingpong:$f,smoothstep:Jf,smootherstep:Kf,randInt:Qf,randFloat:jf,randFloatSpread:tp,seededRandom:ep,degToRad:np,radToDeg:ip,isPowerOfTwo:sp,ceilPowerOfTwo:rp,floorPowerOfTwo:op,setQuaternionFromProperEuler:ap,normalize:de,denormalize:Ln},nt=class i{constructor(t=0,e=0){i.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Kt(this.x,t.x,e.x),this.y=Kt(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=Kt(this.x,t,e),this.y=Kt(this.y,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Kt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(Kt(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let n=Math.cos(e),s=Math.sin(e),r=this.x-t.x,o=this.y-t.y;return this.x=r*n-o*s+t.x,this.y=r*s+o*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},tn=class{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,r,o,a){let l=n[s+0],c=n[s+1],h=n[s+2],u=n[s+3],f=r[o+0],d=r[o+1],m=r[o+2],x=r[o+3];if(a===0){t[e+0]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u;return}if(a===1){t[e+0]=f,t[e+1]=d,t[e+2]=m,t[e+3]=x;return}if(u!==x||l!==f||c!==d||h!==m){let g=1-a,p=l*f+c*d+h*m+u*x,E=p>=0?1:-1,y=1-p*p;if(y>Number.EPSILON){let A=Math.sqrt(y),T=Math.atan2(A,p*E);g=Math.sin(g*T)/A,a=Math.sin(a*T)/A}let _=a*E;if(l=l*g+f*_,c=c*g+d*_,h=h*g+m*_,u=u*g+x*_,g===1-a){let A=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=A,c*=A,h*=A,u*=A}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u}static multiplyQuaternionsFlat(t,e,n,s,r,o){let a=n[s],l=n[s+1],c=n[s+2],h=n[s+3],u=r[o],f=r[o+1],d=r[o+2],m=r[o+3];return t[e]=a*m+h*u+l*d-c*f,t[e+1]=l*m+h*f+c*u-a*d,t[e+2]=c*m+h*d+a*f-l*u,t[e+3]=h*m-a*u-l*f-c*d,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let n=t._x,s=t._y,r=t._z,o=t._order,a=Math.cos,l=Math.sin,c=a(n/2),h=a(s/2),u=a(r/2),f=l(n/2),d=l(s/2),m=l(r/2);switch(o){case"XYZ":this._x=f*h*u+c*d*m,this._y=c*d*u-f*h*m,this._z=c*h*m+f*d*u,this._w=c*h*u-f*d*m;break;case"YXZ":this._x=f*h*u+c*d*m,this._y=c*d*u-f*h*m,this._z=c*h*m-f*d*u,this._w=c*h*u+f*d*m;break;case"ZXY":this._x=f*h*u-c*d*m,this._y=c*d*u+f*h*m,this._z=c*h*m+f*d*u,this._w=c*h*u-f*d*m;break;case"ZYX":this._x=f*h*u-c*d*m,this._y=c*d*u+f*h*m,this._z=c*h*m-f*d*u,this._w=c*h*u+f*d*m;break;case"YZX":this._x=f*h*u+c*d*m,this._y=c*d*u+f*h*m,this._z=c*h*m-f*d*u,this._w=c*h*u-f*d*m;break;case"XZY":this._x=f*h*u-c*d*m,this._y=c*d*u-f*h*m,this._z=c*h*m+f*d*u,this._w=c*h*u+f*d*m;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,n=e[0],s=e[4],r=e[8],o=e[1],a=e[5],l=e[9],c=e[2],h=e[6],u=e[10],f=n+a+u;if(f>0){let d=.5/Math.sqrt(f+1);this._w=.25/d,this._x=(h-l)*d,this._y=(r-c)*d,this._z=(o-s)*d}else if(n>a&&n>u){let d=2*Math.sqrt(1+n-a-u);this._w=(h-l)/d,this._x=.25*d,this._y=(s+o)/d,this._z=(r+c)/d}else if(a>u){let d=2*Math.sqrt(1+a-n-u);this._w=(r-c)/d,this._x=(s+o)/d,this._y=.25*d,this._z=(l+h)/d}else{let d=2*Math.sqrt(1+u-n-a);this._w=(o-s)/d,this._x=(r+c)/d,this._y=(l+h)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<1e-8?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Kt(this.dot(t),-1,1)))}rotateTowards(t,e){let n=this.angleTo(t);if(n===0)return this;let s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let n=t._x,s=t._y,r=t._z,o=t._w,a=e._x,l=e._y,c=e._z,h=e._w;return this._x=n*h+o*a+s*c-r*l,this._y=s*h+o*l+r*a-n*c,this._z=r*h+o*c+n*l-s*a,this._w=o*h-n*a-s*l-r*c,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);let n=this._x,s=this._y,r=this._z,o=this._w,a=o*t._w+n*t._x+s*t._y+r*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=o,this._x=n,this._y=s,this._z=r,this;let l=1-a*a;if(l<=Number.EPSILON){let d=1-e;return this._w=d*o+e*this._w,this._x=d*n+e*this._x,this._y=d*s+e*this._y,this._z=d*r+e*this._z,this.normalize(),this}let c=Math.sqrt(l),h=Math.atan2(c,a),u=Math.sin((1-e)*h)/c,f=Math.sin(e*h)/c;return this._w=o*u+this._w*f,this._x=n*u+this._x*f,this._y=s*u+this._y*f,this._z=r*u+this._z*f,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},R=class i{constructor(t=0,e=0,n=0){i.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Yh.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Yh.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*s,this.y=r[1]*e+r[4]*n+r[7]*s,this.z=r[2]*e+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=t.elements,o=1/(r[3]*e+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*s+r[12])*o,this.y=(r[1]*e+r[5]*n+r[9]*s+r[13])*o,this.z=(r[2]*e+r[6]*n+r[10]*s+r[14])*o,this}applyQuaternion(t){let e=this.x,n=this.y,s=this.z,r=t.x,o=t.y,a=t.z,l=t.w,c=2*(o*s-a*n),h=2*(a*e-r*s),u=2*(r*n-o*e);return this.x=e+l*c+o*u-a*h,this.y=n+l*h+a*c-r*u,this.z=s+l*u+r*h-o*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s,this.y=r[1]*e+r[5]*n+r[9]*s,this.z=r[2]*e+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Kt(this.x,t.x,e.x),this.y=Kt(this.y,t.y,e.y),this.z=Kt(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=Kt(this.x,t,e),this.y=Kt(this.y,t,e),this.z=Kt(this.z,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Kt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let n=t.x,s=t.y,r=t.z,o=e.x,a=e.y,l=e.z;return this.x=s*l-r*a,this.y=r*o-n*l,this.z=n*a-s*o,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return sc.copy(this).projectOnVector(t),this.sub(sc)}reflect(t){return this.sub(sc.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(Kt(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){let s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},sc=new R,Yh=new tn,Jt=class i{constructor(t,e,n,s,r,o,a,l,c){i.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,a,l,c)}set(t,e,n,s,r,o,a,l,c){let h=this.elements;return h[0]=t,h[1]=s,h[2]=a,h[3]=e,h[4]=r,h[5]=l,h[6]=n,h[7]=o,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],h=n[4],u=n[7],f=n[2],d=n[5],m=n[8],x=s[0],g=s[3],p=s[6],E=s[1],y=s[4],_=s[7],A=s[2],T=s[5],C=s[8];return r[0]=o*x+a*E+l*A,r[3]=o*g+a*y+l*T,r[6]=o*p+a*_+l*C,r[1]=c*x+h*E+u*A,r[4]=c*g+h*y+u*T,r[7]=c*p+h*_+u*C,r[2]=f*x+d*E+m*A,r[5]=f*g+d*y+m*T,r[8]=f*p+d*_+m*C,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8];return e*o*h-e*a*c-n*r*h+n*a*l+s*r*c-s*o*l}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],u=h*o-a*c,f=a*l-h*r,d=c*r-o*l,m=e*u+n*f+s*d;if(m===0)return this.set(0,0,0,0,0,0,0,0,0);let x=1/m;return t[0]=u*x,t[1]=(s*c-h*n)*x,t[2]=(a*n-s*o)*x,t[3]=f*x,t[4]=(h*e-s*l)*x,t[5]=(s*r-a*e)*x,t[6]=d*x,t[7]=(n*l-c*e)*x,t[8]=(o*e-n*r)*x,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,r,o,a){let l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*o+c*a)+o+t,-s*c,s*l,-s*(-c*o+l*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(rc.makeScale(t,e)),this}rotate(t){return this.premultiply(rc.makeRotation(-t)),this}translate(t,e){return this.premultiply(rc.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}},rc=new Jt;function rh(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function Ur(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function nd(){let i=Ur("canvas");return i.style.display="block",i}var Zh={};function Hs(i){i in Zh||(Zh[i]=!0,console.warn(i))}function id(i,t,e){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}var $h=new Jt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Jh=new Jt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function lp(){let i={enabled:!0,workingColorSpace:Zi,spaces:{},convert:function(s,r,o){return this.enabled===!1||r===o||!r||!o||(this.spaces[r].transfer===re&&(s.r=ci(s.r),s.g=ci(s.g),s.b=ci(s.b)),this.spaces[r].primaries!==this.spaces[o].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===re&&(s.r=Fs(s.r),s.g=Fs(s.g),s.b=Fs(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===kn?Lr:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,o){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return Hs("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return Hs("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(s,r)}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[Zi]:{primaries:t,whitePoint:n,transfer:Lr,toXYZ:$h,fromXYZ:Jh,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:je},outputColorSpaceConfig:{drawingBufferColorSpace:je}},[je]:{primaries:t,whitePoint:n,transfer:re,toXYZ:$h,fromXYZ:Jh,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:je}}}),i}var ee=lp();function ci(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Fs(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var ys,ra=class{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let n;if(t instanceof HTMLCanvasElement)n=t;else{ys===void 0&&(ys=Ur("canvas")),ys.width=t.width,ys.height=t.height;let s=ys.getContext("2d");t instanceof ImageData?s.putImageData(t,0,0):s.drawImage(t,0,0,t.width,t.height),n=ys}return n.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let e=Ur("canvas");e.width=t.width,e.height=t.height;let n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);let s=n.getImageData(0,0,t.width,t.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=ci(r[o]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){let e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(ci(e[n]/255)*255):e[n]=ci(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},cp=0,zs=class{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:cp++}),this.uuid=Zn(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){let e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):e instanceof VideoFrame?t.set(e.displayHeight,e.displayWidth,0):e!==null?t.set(e.width,e.height,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(oc(s[o].image)):r.push(oc(s[o]))}else r=oc(s);n.url=r}return e||(t.images[this.uuid]=n),n}};function oc(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?ra.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var hp=0,ac=new R,un=class i extends ui{constructor(t=i.DEFAULT_IMAGE,e=i.DEFAULT_MAPPING,n=wi,s=wi,r=Un,o=Ii,a=Rn,l=Hn,c=i.DEFAULT_ANISOTROPY,h=kn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:hp++}),this.uuid=Zn(),this.name="",this.source=new zs(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new nt(0,0),this.repeat=new nt(1,1),this.center=new nt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Jt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(ac).x}get height(){return this.source.getSize(ac).y}get depth(){return this.source.getSize(ac).z}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(let e in t){let n=t[e];if(n===void 0){console.warn(`THREE.Texture.setValues(): parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){console.warn(`THREE.Texture.setValues(): property '${e}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Yc)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Bs:t.x=t.x-Math.floor(t.x);break;case wi:t.x=t.x<0?0:1;break;case na:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Bs:t.y=t.y-Math.floor(t.y);break;case wi:t.y=t.y<0?0:1;break;case na:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};un.DEFAULT_IMAGE=null;un.DEFAULT_MAPPING=Yc;un.DEFAULT_ANISOTROPY=1;var fe=class i{constructor(t=0,e=0,n=0,s=1){i.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=this.w,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*s+o[12]*r,this.y=o[1]*e+o[5]*n+o[9]*s+o[13]*r,this.z=o[2]*e+o[6]*n+o[10]*s+o[14]*r,this.w=o[3]*e+o[7]*n+o[11]*s+o[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,r,l=t.elements,c=l[0],h=l[4],u=l[8],f=l[1],d=l[5],m=l[9],x=l[2],g=l[6],p=l[10];if(Math.abs(h-f)<.01&&Math.abs(u-x)<.01&&Math.abs(m-g)<.01){if(Math.abs(h+f)<.1&&Math.abs(u+x)<.1&&Math.abs(m+g)<.1&&Math.abs(c+d+p-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let y=(c+1)/2,_=(d+1)/2,A=(p+1)/2,T=(h+f)/4,C=(u+x)/4,L=(m+g)/4;return y>_&&y>A?y<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(y),s=T/n,r=C/n):_>A?_<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(_),n=T/s,r=L/s):A<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(A),n=C/r,s=L/r),this.set(n,s,r,e),this}let E=Math.sqrt((g-m)*(g-m)+(u-x)*(u-x)+(f-h)*(f-h));return Math.abs(E)<.001&&(E=1),this.x=(g-m)/E,this.y=(u-x)/E,this.z=(f-h)/E,this.w=Math.acos((c+d+p-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Kt(this.x,t.x,e.x),this.y=Kt(this.y,t.y,e.y),this.z=Kt(this.z,t.z,e.z),this.w=Kt(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=Kt(this.x,t,e),this.y=Kt(this.y,t,e),this.z=Kt(this.z,t,e),this.w=Kt(this.w,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Kt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},oa=class extends ui{constructor(t=1,e=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Un,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},n),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=n.depth,this.scissor=new fe(0,0,t,e),this.scissorTest=!1,this.viewport=new fe(0,0,t,e);let s={width:t,height:e,depth:n.depth},r=new un(s);this.textures=[];let o=n.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview}_setTextureOptions(t={}){let e={minFilter:Un,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=n,this.textures[s].isArrayTexture=this.textures[s].image.depth>1;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,n=t.textures.length;e<n;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;let s=Object.assign({},t.textures[e].image);this.textures[e].source=new zs(s)}return this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},Je=class extends oa{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}},Nr=class extends un{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=fn,this.minFilter=fn,this.wrapR=wi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var aa=class extends un{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=fn,this.minFilter=fn,this.wrapR=wi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var $n=class{constructor(t=new R(1/0,1/0,1/0),e=new R(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(Cn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(Cn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let n=Cn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let n=t.geometry;if(n!==void 0){let r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,Cn):Cn.fromBufferAttribute(r,o),Cn.applyMatrix4(t.matrixWorld),this.expandByPoint(Cn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),wo.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),wo.copy(n.boundingBox)),wo.applyMatrix4(t.matrixWorld),this.union(wo)}let s=t.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Cn),Cn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(gr),Ao.subVectors(this.max,gr),vs.subVectors(t.a,gr),Ms.subVectors(t.b,gr),Ss.subVectors(t.c,gr),vi.subVectors(Ms,vs),Mi.subVectors(Ss,Ms),ki.subVectors(vs,Ss);let e=[0,-vi.z,vi.y,0,-Mi.z,Mi.y,0,-ki.z,ki.y,vi.z,0,-vi.x,Mi.z,0,-Mi.x,ki.z,0,-ki.x,-vi.y,vi.x,0,-Mi.y,Mi.x,0,-ki.y,ki.x,0];return!lc(e,vs,Ms,Ss,Ao)||(e=[1,0,0,0,1,0,0,0,1],!lc(e,vs,Ms,Ss,Ao))?!1:(Ro.crossVectors(vi,Mi),e=[Ro.x,Ro.y,Ro.z],lc(e,vs,Ms,Ss,Ao))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Cn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Cn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(ii[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),ii[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),ii[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),ii[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),ii[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),ii[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),ii[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),ii[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(ii),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}},ii=[new R,new R,new R,new R,new R,new R,new R,new R],Cn=new R,wo=new $n,vs=new R,Ms=new R,Ss=new R,vi=new R,Mi=new R,ki=new R,gr=new R,Ao=new R,Ro=new R,Vi=new R;function lc(i,t,e,n,s){for(let r=0,o=i.length-3;r<=o;r+=3){Vi.fromArray(i,r);let a=s.x*Math.abs(Vi.x)+s.y*Math.abs(Vi.y)+s.z*Math.abs(Vi.z),l=t.dot(Vi),c=e.dot(Vi),h=n.dot(Vi);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>a)return!1}return!0}var up=new $n,xr=new R,cc=new R,di=class{constructor(t=new R,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let n=this.center;e!==void 0?n.copy(e):up.setFromPoints(t).getCenter(n);let s=0;for(let r=0,o=t.length;r<o;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;xr.subVectors(t,this.center);let e=xr.lengthSq();if(e>this.radius*this.radius){let n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(xr,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(cc.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(xr.copy(t.center).add(cc)),this.expandByPoint(xr.copy(t.center).sub(cc))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}},si=new R,hc=new R,Co=new R,Si=new R,uc=new R,Po=new R,dc=new R,Fr=class{constructor(t=new R,e=new R(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,si)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=si.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(si.copy(this.origin).addScaledVector(this.direction,e),si.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){hc.copy(t).add(e).multiplyScalar(.5),Co.copy(e).sub(t).normalize(),Si.copy(this.origin).sub(hc);let r=t.distanceTo(e)*.5,o=-this.direction.dot(Co),a=Si.dot(this.direction),l=-Si.dot(Co),c=Si.lengthSq(),h=Math.abs(1-o*o),u,f,d,m;if(h>0)if(u=o*l-a,f=o*a-l,m=r*h,u>=0)if(f>=-m)if(f<=m){let x=1/h;u*=x,f*=x,d=u*(u+o*f+2*a)+f*(o*u+f+2*l)+c}else f=r,u=Math.max(0,-(o*f+a)),d=-u*u+f*(f+2*l)+c;else f=-r,u=Math.max(0,-(o*f+a)),d=-u*u+f*(f+2*l)+c;else f<=-m?(u=Math.max(0,-(-o*r+a)),f=u>0?-r:Math.min(Math.max(-r,-l),r),d=-u*u+f*(f+2*l)+c):f<=m?(u=0,f=Math.min(Math.max(-r,-l),r),d=f*(f+2*l)+c):(u=Math.max(0,-(o*r+a)),f=u>0?r:Math.min(Math.max(-r,-l),r),d=-u*u+f*(f+2*l)+c);else f=o>0?-r:r,u=Math.max(0,-(o*f+a)),d=-u*u+f*(f+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),s&&s.copy(hc).addScaledVector(Co,f),d}intersectSphere(t,e){si.subVectors(t.center,this.origin);let n=si.dot(this.direction),s=si.dot(si)-n*n,r=t.radius*t.radius;if(s>r)return null;let o=Math.sqrt(r-s),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,e):this.at(a,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){let n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,r,o,a,l,c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,f=this.origin;return c>=0?(n=(t.min.x-f.x)*c,s=(t.max.x-f.x)*c):(n=(t.max.x-f.x)*c,s=(t.min.x-f.x)*c),h>=0?(r=(t.min.y-f.y)*h,o=(t.max.y-f.y)*h):(r=(t.max.y-f.y)*h,o=(t.min.y-f.y)*h),n>o||r>s||((r>n||isNaN(n))&&(n=r),(o<s||isNaN(s))&&(s=o),u>=0?(a=(t.min.z-f.z)*u,l=(t.max.z-f.z)*u):(a=(t.max.z-f.z)*u,l=(t.min.z-f.z)*u),n>l||a>s)||((a>n||n!==n)&&(n=a),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,si)!==null}intersectTriangle(t,e,n,s,r){uc.subVectors(e,t),Po.subVectors(n,t),dc.crossVectors(uc,Po);let o=this.direction.dot(dc),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Si.subVectors(this.origin,t);let l=a*this.direction.dot(Po.crossVectors(Si,Po));if(l<0)return null;let c=a*this.direction.dot(uc.cross(Si));if(c<0||l+c>o)return null;let h=-a*Si.dot(dc);return h<0?null:this.at(h/o,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},ne=class i{constructor(t,e,n,s,r,o,a,l,c,h,u,f,d,m,x,g){i.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,a,l,c,h,u,f,d,m,x,g)}set(t,e,n,s,r,o,a,l,c,h,u,f,d,m,x,g){let p=this.elements;return p[0]=t,p[4]=e,p[8]=n,p[12]=s,p[1]=r,p[5]=o,p[9]=a,p[13]=l,p[2]=c,p[6]=h,p[10]=u,p[14]=f,p[3]=d,p[7]=m,p[11]=x,p[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new i().fromArray(this.elements)}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){let e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){let e=this.elements,n=t.elements,s=1/Es.setFromMatrixColumn(t,0).length(),r=1/Es.setFromMatrixColumn(t,1).length(),o=1/Es.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*o,e[9]=n[9]*o,e[10]=n[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,n=t.x,s=t.y,r=t.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(s),c=Math.sin(s),h=Math.cos(r),u=Math.sin(r);if(t.order==="XYZ"){let f=o*h,d=o*u,m=a*h,x=a*u;e[0]=l*h,e[4]=-l*u,e[8]=c,e[1]=d+m*c,e[5]=f-x*c,e[9]=-a*l,e[2]=x-f*c,e[6]=m+d*c,e[10]=o*l}else if(t.order==="YXZ"){let f=l*h,d=l*u,m=c*h,x=c*u;e[0]=f+x*a,e[4]=m*a-d,e[8]=o*c,e[1]=o*u,e[5]=o*h,e[9]=-a,e[2]=d*a-m,e[6]=x+f*a,e[10]=o*l}else if(t.order==="ZXY"){let f=l*h,d=l*u,m=c*h,x=c*u;e[0]=f-x*a,e[4]=-o*u,e[8]=m+d*a,e[1]=d+m*a,e[5]=o*h,e[9]=x-f*a,e[2]=-o*c,e[6]=a,e[10]=o*l}else if(t.order==="ZYX"){let f=o*h,d=o*u,m=a*h,x=a*u;e[0]=l*h,e[4]=m*c-d,e[8]=f*c+x,e[1]=l*u,e[5]=x*c+f,e[9]=d*c-m,e[2]=-c,e[6]=a*l,e[10]=o*l}else if(t.order==="YZX"){let f=o*l,d=o*c,m=a*l,x=a*c;e[0]=l*h,e[4]=x-f*u,e[8]=m*u+d,e[1]=u,e[5]=o*h,e[9]=-a*h,e[2]=-c*h,e[6]=d*u+m,e[10]=f-x*u}else if(t.order==="XZY"){let f=o*l,d=o*c,m=a*l,x=a*c;e[0]=l*h,e[4]=-u,e[8]=c*h,e[1]=f*u+x,e[5]=o*h,e[9]=d*u-m,e[2]=m*u-d,e[6]=a*h,e[10]=x*u+f}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(dp,t,fp)}lookAt(t,e,n){let s=this.elements;return xn.subVectors(t,e),xn.lengthSq()===0&&(xn.z=1),xn.normalize(),Ei.crossVectors(n,xn),Ei.lengthSq()===0&&(Math.abs(n.z)===1?xn.x+=1e-4:xn.z+=1e-4,xn.normalize(),Ei.crossVectors(n,xn)),Ei.normalize(),Io.crossVectors(xn,Ei),s[0]=Ei.x,s[4]=Io.x,s[8]=xn.x,s[1]=Ei.y,s[5]=Io.y,s[9]=xn.y,s[2]=Ei.z,s[6]=Io.z,s[10]=xn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],h=n[1],u=n[5],f=n[9],d=n[13],m=n[2],x=n[6],g=n[10],p=n[14],E=n[3],y=n[7],_=n[11],A=n[15],T=s[0],C=s[4],L=s[8],M=s[12],S=s[1],D=s[5],B=s[9],I=s[13],U=s[2],k=s[6],z=s[10],O=s[14],N=s[3],Z=s[7],Q=s[11],ht=s[15];return r[0]=o*T+a*S+l*U+c*N,r[4]=o*C+a*D+l*k+c*Z,r[8]=o*L+a*B+l*z+c*Q,r[12]=o*M+a*I+l*O+c*ht,r[1]=h*T+u*S+f*U+d*N,r[5]=h*C+u*D+f*k+d*Z,r[9]=h*L+u*B+f*z+d*Q,r[13]=h*M+u*I+f*O+d*ht,r[2]=m*T+x*S+g*U+p*N,r[6]=m*C+x*D+g*k+p*Z,r[10]=m*L+x*B+g*z+p*Q,r[14]=m*M+x*I+g*O+p*ht,r[3]=E*T+y*S+_*U+A*N,r[7]=E*C+y*D+_*k+A*Z,r[11]=E*L+y*B+_*z+A*Q,r[15]=E*M+y*I+_*O+A*ht,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[4],s=t[8],r=t[12],o=t[1],a=t[5],l=t[9],c=t[13],h=t[2],u=t[6],f=t[10],d=t[14],m=t[3],x=t[7],g=t[11],p=t[15];return m*(+r*l*u-s*c*u-r*a*f+n*c*f+s*a*d-n*l*d)+x*(+e*l*d-e*c*f+r*o*f-s*o*d+s*c*h-r*l*h)+g*(+e*c*u-e*a*d-r*o*u+n*o*d+r*a*h-n*c*h)+p*(-s*a*h-e*l*u+e*a*f+s*o*u-n*o*f+n*l*h)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){let s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],u=t[9],f=t[10],d=t[11],m=t[12],x=t[13],g=t[14],p=t[15],E=u*g*c-x*f*c+x*l*d-a*g*d-u*l*p+a*f*p,y=m*f*c-h*g*c-m*l*d+o*g*d+h*l*p-o*f*p,_=h*x*c-m*u*c+m*a*d-o*x*d-h*a*p+o*u*p,A=m*u*l-h*x*l-m*a*f+o*x*f+h*a*g-o*u*g,T=e*E+n*y+s*_+r*A;if(T===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let C=1/T;return t[0]=E*C,t[1]=(x*f*r-u*g*r-x*s*d+n*g*d+u*s*p-n*f*p)*C,t[2]=(a*g*r-x*l*r+x*s*c-n*g*c-a*s*p+n*l*p)*C,t[3]=(u*l*r-a*f*r-u*s*c+n*f*c+a*s*d-n*l*d)*C,t[4]=y*C,t[5]=(h*g*r-m*f*r+m*s*d-e*g*d-h*s*p+e*f*p)*C,t[6]=(m*l*r-o*g*r-m*s*c+e*g*c+o*s*p-e*l*p)*C,t[7]=(o*f*r-h*l*r+h*s*c-e*f*c-o*s*d+e*l*d)*C,t[8]=_*C,t[9]=(m*u*r-h*x*r-m*n*d+e*x*d+h*n*p-e*u*p)*C,t[10]=(o*x*r-m*a*r+m*n*c-e*x*c-o*n*p+e*a*p)*C,t[11]=(h*a*r-o*u*r-h*n*c+e*u*c+o*n*d-e*a*d)*C,t[12]=A*C,t[13]=(h*x*s-m*u*s+m*n*f-e*x*f-h*n*g+e*u*g)*C,t[14]=(m*a*s-o*x*s-m*n*l+e*x*l+o*n*g-e*a*g)*C,t[15]=(o*u*s-h*a*s+h*n*l-e*u*l-o*n*f+e*a*f)*C,this}scale(t){let e=this.elements,n=t.x,s=t.y,r=t.z;return e[0]*=n,e[4]*=s,e[8]*=r,e[1]*=n,e[5]*=s,e[9]*=r,e[2]*=n,e[6]*=s,e[10]*=r,e[3]*=n,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let n=Math.cos(e),s=Math.sin(e),r=1-n,o=t.x,a=t.y,l=t.z,c=r*o,h=r*a;return this.set(c*o+n,c*a-s*l,c*l+s*a,0,c*a+s*l,h*a+n,h*l-s*o,0,c*l-s*a,h*l+s*o,r*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,r,o){return this.set(1,n,r,0,t,1,o,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){let s=this.elements,r=e._x,o=e._y,a=e._z,l=e._w,c=r+r,h=o+o,u=a+a,f=r*c,d=r*h,m=r*u,x=o*h,g=o*u,p=a*u,E=l*c,y=l*h,_=l*u,A=n.x,T=n.y,C=n.z;return s[0]=(1-(x+p))*A,s[1]=(d+_)*A,s[2]=(m-y)*A,s[3]=0,s[4]=(d-_)*T,s[5]=(1-(f+p))*T,s[6]=(g+E)*T,s[7]=0,s[8]=(m+y)*C,s[9]=(g-E)*C,s[10]=(1-(f+x))*C,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){let s=this.elements,r=Es.set(s[0],s[1],s[2]).length(),o=Es.set(s[4],s[5],s[6]).length(),a=Es.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),t.x=s[12],t.y=s[13],t.z=s[14],Pn.copy(this);let c=1/r,h=1/o,u=1/a;return Pn.elements[0]*=c,Pn.elements[1]*=c,Pn.elements[2]*=c,Pn.elements[4]*=h,Pn.elements[5]*=h,Pn.elements[6]*=h,Pn.elements[8]*=u,Pn.elements[9]*=u,Pn.elements[10]*=u,e.setFromRotationMatrix(Pn),n.x=r,n.y=o,n.z=a,this}makePerspective(t,e,n,s,r,o,a=Dn,l=!1){let c=this.elements,h=2*r/(e-t),u=2*r/(n-s),f=(e+t)/(e-t),d=(n+s)/(n-s),m,x;if(l)m=r/(o-r),x=o*r/(o-r);else if(a===Dn)m=-(o+r)/(o-r),x=-2*o*r/(o-r);else if(a===Dr)m=-o/(o-r),x=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=h,c[4]=0,c[8]=f,c[12]=0,c[1]=0,c[5]=u,c[9]=d,c[13]=0,c[2]=0,c[6]=0,c[10]=m,c[14]=x,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,n,s,r,o,a=Dn,l=!1){let c=this.elements,h=2/(e-t),u=2/(n-s),f=-(e+t)/(e-t),d=-(n+s)/(n-s),m,x;if(l)m=1/(o-r),x=o/(o-r);else if(a===Dn)m=-2/(o-r),x=-(o+r)/(o-r);else if(a===Dr)m=-1/(o-r),x=-r/(o-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=h,c[4]=0,c[8]=0,c[12]=f,c[1]=0,c[5]=u,c[9]=0,c[13]=d,c[2]=0,c[6]=0,c[10]=m,c[14]=x,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}},Es=new R,Pn=new ne,dp=new R(0,0,0),fp=new R(1,1,1),Ei=new R,Io=new R,xn=new R,Kh=new ne,Qh=new tn,Ke=class i{constructor(t=0,e=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){let s=t.elements,r=s[0],o=s[4],a=s[8],l=s[1],c=s[5],h=s[9],u=s[2],f=s[6],d=s[10];switch(e){case"XYZ":this._y=Math.asin(Kt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,d),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Kt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,d),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(Kt(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-u,d),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Kt(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(f,d),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(Kt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(a,d));break;case"XZY":this._z=Math.asin(-Kt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,d),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return Kh.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Kh,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Qh.setFromEuler(this),this.setFromQuaternion(Qh,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Ke.DEFAULT_ORDER="XYZ";var Br=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},pp=0,jh=new R,bs=new tn,ri=new ne,Lo=new R,_r=new R,mp=new R,gp=new tn,tu=new R(1,0,0),eu=new R(0,1,0),nu=new R(0,0,1),iu={type:"added"},xp={type:"removed"},Ts={type:"childadded",child:null},fc={type:"childremoved",child:null},ce=class i extends ui{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:pp++}),this.uuid=Zn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let t=new R,e=new Ke,n=new tn,s=new R(1,1,1);function r(){n.setFromEuler(e,!1)}function o(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new ne},normalMatrix:{value:new Jt}}),this.matrix=new ne,this.matrixWorld=new ne,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Br,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return bs.setFromAxisAngle(t,e),this.quaternion.multiply(bs),this}rotateOnWorldAxis(t,e){return bs.setFromAxisAngle(t,e),this.quaternion.premultiply(bs),this}rotateX(t){return this.rotateOnAxis(tu,t)}rotateY(t){return this.rotateOnAxis(eu,t)}rotateZ(t){return this.rotateOnAxis(nu,t)}translateOnAxis(t,e){return jh.copy(t).applyQuaternion(this.quaternion),this.position.add(jh.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(tu,t)}translateY(t){return this.translateOnAxis(eu,t)}translateZ(t){return this.translateOnAxis(nu,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(ri.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?Lo.copy(t):Lo.set(t,e,n);let s=this.parent;this.updateWorldMatrix(!0,!1),_r.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ri.lookAt(_r,Lo,this.up):ri.lookAt(Lo,_r,this.up),this.quaternion.setFromRotationMatrix(ri),s&&(ri.extractRotation(s.matrixWorld),bs.setFromRotationMatrix(ri),this.quaternion.premultiply(bs.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(iu),Ts.child=t,this.dispatchEvent(Ts),Ts.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(xp),fc.child=t,this.dispatchEvent(fc),fc.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),ri.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),ri.multiply(t.parent.matrixWorld)),t.applyMatrix4(ri),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(iu),Ts.child=t,this.dispatchEvent(Ts),Ts.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){let o=this.children[n].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(_r,t,mp),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(_r,gp,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){let n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(t){let e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(a=>({...a})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(t),s.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let l=a.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let u=l[c];r(t.shapes,u)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(t.materials,this.material[l]));s.material=a}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){let l=this.animations[a];s.animations.push(r(t.animations,l))}}if(e){let a=o(t.geometries),l=o(t.materials),c=o(t.textures),h=o(t.images),u=o(t.shapes),f=o(t.skeletons),d=o(t.animations),m=o(t.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),f.length>0&&(n.skeletons=f),d.length>0&&(n.animations=d),m.length>0&&(n.nodes=m)}return n.object=s,n;function o(a){let l=[];for(let c in a){let h=a[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){let s=t.children[n];this.add(s.clone())}return this}};ce.DEFAULT_UP=new R(0,1,0);ce.DEFAULT_MATRIX_AUTO_UPDATE=!0;ce.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var In=new R,oi=new R,pc=new R,ai=new R,ws=new R,As=new R,su=new R,mc=new R,gc=new R,xc=new R,_c=new fe,yc=new fe,vc=new fe,li=class i{constructor(t=new R,e=new R,n=new R){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),In.subVectors(t,e),s.cross(In);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,n,s,r){In.subVectors(s,e),oi.subVectors(n,e),pc.subVectors(t,e);let o=In.dot(In),a=In.dot(oi),l=In.dot(pc),c=oi.dot(oi),h=oi.dot(pc),u=o*c-a*a;if(u===0)return r.set(0,0,0),null;let f=1/u,d=(c*l-a*h)*f,m=(o*h-a*l)*f;return r.set(1-d-m,m,d)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,ai)===null?!1:ai.x>=0&&ai.y>=0&&ai.x+ai.y<=1}static getInterpolation(t,e,n,s,r,o,a,l){return this.getBarycoord(t,e,n,s,ai)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,ai.x),l.addScaledVector(o,ai.y),l.addScaledVector(a,ai.z),l)}static getInterpolatedAttribute(t,e,n,s,r,o){return _c.setScalar(0),yc.setScalar(0),vc.setScalar(0),_c.fromBufferAttribute(t,e),yc.fromBufferAttribute(t,n),vc.fromBufferAttribute(t,s),o.setScalar(0),o.addScaledVector(_c,r.x),o.addScaledVector(yc,r.y),o.addScaledVector(vc,r.z),o}static isFrontFacing(t,e,n,s){return In.subVectors(n,e),oi.subVectors(t,e),In.cross(oi).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return In.subVectors(this.c,this.b),oi.subVectors(this.a,this.b),In.cross(oi).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return i.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return i.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,r){return i.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}containsPoint(t){return i.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return i.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let n=this.a,s=this.b,r=this.c,o,a;ws.subVectors(s,n),As.subVectors(r,n),mc.subVectors(t,n);let l=ws.dot(mc),c=As.dot(mc);if(l<=0&&c<=0)return e.copy(n);gc.subVectors(t,s);let h=ws.dot(gc),u=As.dot(gc);if(h>=0&&u<=h)return e.copy(s);let f=l*u-h*c;if(f<=0&&l>=0&&h<=0)return o=l/(l-h),e.copy(n).addScaledVector(ws,o);xc.subVectors(t,r);let d=ws.dot(xc),m=As.dot(xc);if(m>=0&&d<=m)return e.copy(r);let x=d*c-l*m;if(x<=0&&c>=0&&m<=0)return a=c/(c-m),e.copy(n).addScaledVector(As,a);let g=h*m-d*u;if(g<=0&&u-h>=0&&d-m>=0)return su.subVectors(r,s),a=(u-h)/(u-h+(d-m)),e.copy(s).addScaledVector(su,a);let p=1/(g+x+f);return o=x*p,a=f*p,e.copy(n).addScaledVector(ws,o).addScaledVector(As,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},sd={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},bi={h:0,s:0,l:0},Do={h:0,s:0,l:0};function Mc(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}var vt=class{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){let s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=je){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,ee.colorSpaceToWorking(this,e),this}setRGB(t,e,n,s=ee.workingColorSpace){return this.r=t,this.g=e,this.b=n,ee.colorSpaceToWorking(this,s),this}setHSL(t,e,n,s=ee.workingColorSpace){if(t=sh(t,1),e=Kt(e,0,1),n=Kt(n,0,1),e===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+e):n+e-n*e,o=2*n-r;this.r=Mc(o,r,t+1/3),this.g=Mc(o,r,t),this.b=Mc(o,r,t-1/3)}return ee.colorSpaceToWorking(this,s),this}setStyle(t,e=je){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r,o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){let r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=je){let n=sd[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=ci(t.r),this.g=ci(t.g),this.b=ci(t.b),this}copyLinearToSRGB(t){return this.r=Fs(t.r),this.g=Fs(t.g),this.b=Fs(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=je){return ee.workingToColorSpace(rn.copy(this),t),Math.round(Kt(rn.r*255,0,255))*65536+Math.round(Kt(rn.g*255,0,255))*256+Math.round(Kt(rn.b*255,0,255))}getHexString(t=je){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=ee.workingColorSpace){ee.workingToColorSpace(rn.copy(this),e);let n=rn.r,s=rn.g,r=rn.b,o=Math.max(n,s,r),a=Math.min(n,s,r),l,c,h=(a+o)/2;if(a===o)l=0,c=0;else{let u=o-a;switch(c=h<=.5?u/(o+a):u/(2-o-a),o){case n:l=(s-r)/u+(s<r?6:0);break;case s:l=(r-n)/u+2;break;case r:l=(n-s)/u+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=ee.workingColorSpace){return ee.workingToColorSpace(rn.copy(this),e),t.r=rn.r,t.g=rn.g,t.b=rn.b,t}getStyle(t=je){ee.workingToColorSpace(rn.copy(this),t);let e=rn.r,n=rn.g,s=rn.b;return t!==je?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(bi),this.setHSL(bi.h+t,bi.s+e,bi.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(bi),t.getHSL(Do);let n=Rr(bi.h,Do.h,e),s=Rr(bi.s,Do.s,e),r=Rr(bi.l,Do.l,e);return this.setHSL(n,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,n=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*s,this.g=r[1]*e+r[4]*n+r[7]*s,this.b=r[2]*e+r[5]*n+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},rn=new vt;vt.NAMES=sd;var _p=0,Nn=class extends ui{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:_p++}),this.uuid=Zn(),this.name="",this.type="Material",this.blending=qi,this.side=hi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=ta,this.blendDst=ea,this.blendEquation=Ai,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new vt(0,0,0),this.blendAlpha=0,this.depthFunc=Yi,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Uc,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Xi,this.stencilZFail=Xi,this.stencilZPass=Xi,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==qi&&(n.blending=this.blending),this.side!==hi&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==ta&&(n.blendSrc=this.blendSrc),this.blendDst!==ea&&(n.blendDst=this.blendDst),this.blendEquation!==Ai&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Yi&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Uc&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Xi&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Xi&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Xi&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let o=[];for(let a in r){let l=r[a];delete l.metadata,o.push(l)}return o}if(e){let r=s(t.textures),o=s(t.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,n=null;if(e!==null){let s=e.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}},yn=class extends Nn{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new vt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ke,this.combine=Ba,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}};var ke=new R,Uo=new nt,yp=0,Me=class{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:yp++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=sa,this.updateRanges=[],this.gpuType=zn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)Uo.fromBufferAttribute(this,e),Uo.applyMatrix3(t),this.setXY(e,Uo.x,Uo.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)ke.fromBufferAttribute(this,e),ke.applyMatrix3(t),this.setXYZ(e,ke.x,ke.y,ke.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)ke.fromBufferAttribute(this,e),ke.applyMatrix4(t),this.setXYZ(e,ke.x,ke.y,ke.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)ke.fromBufferAttribute(this,e),ke.applyNormalMatrix(t),this.setXYZ(e,ke.x,ke.y,ke.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)ke.fromBufferAttribute(this,e),ke.transformDirection(t),this.setXYZ(e,ke.x,ke.y,ke.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=Ln(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=de(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Ln(e,this.array)),e}setX(t,e){return this.normalized&&(e=de(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Ln(e,this.array)),e}setY(t,e){return this.normalized&&(e=de(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Ln(e,this.array)),e}setZ(t,e){return this.normalized&&(e=de(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Ln(e,this.array)),e}setW(t,e){return this.normalized&&(e=de(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=de(e,this.array),n=de(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=de(e,this.array),n=de(n,this.array),s=de(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=de(e,this.array),n=de(n,this.array),s=de(s,this.array),r=de(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==sa&&(t.usage=this.usage),t}};var Or=class extends Me{constructor(t,e,n){super(new Uint16Array(t),e,n)}};var Hr=class extends Me{constructor(t,e,n){super(new Uint32Array(t),e,n)}};var Gt=class extends Me{constructor(t,e,n){super(new Float32Array(t),e,n)}},vp=0,wn=new ne,Sc=new ce,Rs=new R,_n=new $n,yr=new $n,Ze=new R,ie=class i extends ui{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:vp++}),this.uuid=Zn(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(rh(t)?Hr:Or)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new Jt().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return wn.makeRotationFromQuaternion(t),this.applyMatrix4(wn),this}rotateX(t){return wn.makeRotationX(t),this.applyMatrix4(wn),this}rotateY(t){return wn.makeRotationY(t),this.applyMatrix4(wn),this}rotateZ(t){return wn.makeRotationZ(t),this.applyMatrix4(wn),this}translate(t,e,n){return wn.makeTranslation(t,e,n),this.applyMatrix4(wn),this}scale(t,e,n){return wn.makeScale(t,e,n),this.applyMatrix4(wn),this}lookAt(t){return Sc.lookAt(t),Sc.updateMatrix(),this.applyMatrix4(Sc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Rs).negate(),this.translate(Rs.x,Rs.y,Rs.z),this}setFromPoints(t){let e=this.getAttribute("position");if(e===void 0){let n=[];for(let s=0,r=t.length;s<r;s++){let o=t[s];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new Gt(n,3))}else{let n=Math.min(t.length,e.count);for(let s=0;s<n;s++){let r=t[s];e.setXYZ(s,r.x,r.y,r.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new $n);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new R(-1/0,-1/0,-1/0),new R(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){let r=e[n];_n.setFromBufferAttribute(r),this.morphTargetsRelative?(Ze.addVectors(this.boundingBox.min,_n.min),this.boundingBox.expandByPoint(Ze),Ze.addVectors(this.boundingBox.max,_n.max),this.boundingBox.expandByPoint(Ze)):(this.boundingBox.expandByPoint(_n.min),this.boundingBox.expandByPoint(_n.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new di);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new R,1/0);return}if(t){let n=this.boundingSphere.center;if(_n.setFromBufferAttribute(t),e)for(let r=0,o=e.length;r<o;r++){let a=e[r];yr.setFromBufferAttribute(a),this.morphTargetsRelative?(Ze.addVectors(_n.min,yr.min),_n.expandByPoint(Ze),Ze.addVectors(_n.max,yr.max),_n.expandByPoint(Ze)):(_n.expandByPoint(yr.min),_n.expandByPoint(yr.max))}_n.getCenter(n);let s=0;for(let r=0,o=t.count;r<o;r++)Ze.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(Ze));if(e)for(let r=0,o=e.length;r<o;r++){let a=e[r],l=this.morphTargetsRelative;for(let c=0,h=a.count;c<h;c++)Ze.fromBufferAttribute(a,c),l&&(Rs.fromBufferAttribute(t,c),Ze.add(Rs)),s=Math.max(s,n.distanceToSquared(Ze))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=e.position,s=e.normal,r=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Me(new Float32Array(4*n.count),4));let o=this.getAttribute("tangent"),a=[],l=[];for(let L=0;L<n.count;L++)a[L]=new R,l[L]=new R;let c=new R,h=new R,u=new R,f=new nt,d=new nt,m=new nt,x=new R,g=new R;function p(L,M,S){c.fromBufferAttribute(n,L),h.fromBufferAttribute(n,M),u.fromBufferAttribute(n,S),f.fromBufferAttribute(r,L),d.fromBufferAttribute(r,M),m.fromBufferAttribute(r,S),h.sub(c),u.sub(c),d.sub(f),m.sub(f);let D=1/(d.x*m.y-m.x*d.y);isFinite(D)&&(x.copy(h).multiplyScalar(m.y).addScaledVector(u,-d.y).multiplyScalar(D),g.copy(u).multiplyScalar(d.x).addScaledVector(h,-m.x).multiplyScalar(D),a[L].add(x),a[M].add(x),a[S].add(x),l[L].add(g),l[M].add(g),l[S].add(g))}let E=this.groups;E.length===0&&(E=[{start:0,count:t.count}]);for(let L=0,M=E.length;L<M;++L){let S=E[L],D=S.start,B=S.count;for(let I=D,U=D+B;I<U;I+=3)p(t.getX(I+0),t.getX(I+1),t.getX(I+2))}let y=new R,_=new R,A=new R,T=new R;function C(L){A.fromBufferAttribute(s,L),T.copy(A);let M=a[L];y.copy(M),y.sub(A.multiplyScalar(A.dot(M))).normalize(),_.crossVectors(T,M);let D=_.dot(l[L])<0?-1:1;o.setXYZW(L,y.x,y.y,y.z,D)}for(let L=0,M=E.length;L<M;++L){let S=E[L],D=S.start,B=S.count;for(let I=D,U=D+B;I<U;I+=3)C(t.getX(I+0)),C(t.getX(I+1)),C(t.getX(I+2))}}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Me(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let f=0,d=n.count;f<d;f++)n.setXYZ(f,0,0,0);let s=new R,r=new R,o=new R,a=new R,l=new R,c=new R,h=new R,u=new R;if(t)for(let f=0,d=t.count;f<d;f+=3){let m=t.getX(f+0),x=t.getX(f+1),g=t.getX(f+2);s.fromBufferAttribute(e,m),r.fromBufferAttribute(e,x),o.fromBufferAttribute(e,g),h.subVectors(o,r),u.subVectors(s,r),h.cross(u),a.fromBufferAttribute(n,m),l.fromBufferAttribute(n,x),c.fromBufferAttribute(n,g),a.add(h),l.add(h),c.add(h),n.setXYZ(m,a.x,a.y,a.z),n.setXYZ(x,l.x,l.y,l.z),n.setXYZ(g,c.x,c.y,c.z)}else for(let f=0,d=e.count;f<d;f+=3)s.fromBufferAttribute(e,f+0),r.fromBufferAttribute(e,f+1),o.fromBufferAttribute(e,f+2),h.subVectors(o,r),u.subVectors(s,r),h.cross(u),n.setXYZ(f+0,h.x,h.y,h.z),n.setXYZ(f+1,h.x,h.y,h.z),n.setXYZ(f+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)Ze.fromBufferAttribute(t,e),Ze.normalize(),t.setXYZ(e,Ze.x,Ze.y,Ze.z)}toNonIndexed(){function t(a,l){let c=a.array,h=a.itemSize,u=a.normalized,f=new c.constructor(l.length*h),d=0,m=0;for(let x=0,g=l.length;x<g;x++){a.isInterleavedBufferAttribute?d=l[x]*a.data.stride+a.offset:d=l[x]*h;for(let p=0;p<h;p++)f[m++]=c[d++]}return new Me(f,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new i,n=this.index.array,s=this.attributes;for(let a in s){let l=s[a],c=t(l,n);e.setAttribute(a,c)}let r=this.morphAttributes;for(let a in r){let l=[],c=r[a];for(let h=0,u=c.length;h<u;h++){let f=c[h],d=t(f,n);l.push(d)}e.morphAttributes[a]=l}e.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,l=o.length;a<l;a++){let c=o[a];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){let t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let n=this.attributes;for(let l in n){let c=n[l];t.data.attributes[l]=c.toJSON(t.data)}let s={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let u=0,f=c.length;u<f;u++){let d=c[u];h.push(d.toJSON(t.data))}h.length>0&&(s[l]=h,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(t.data.boundingSphere=a.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let n=t.index;n!==null&&this.setIndex(n.clone());let s=t.attributes;for(let c in s){let h=s[c];this.setAttribute(c,h.clone(e))}let r=t.morphAttributes;for(let c in r){let h=[],u=r[c];for(let f=0,d=u.length;f<d;f++)h.push(u[f].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;let o=t.groups;for(let c=0,h=o.length;c<h;c++){let u=o[c];this.addGroup(u.start,u.count,u.materialIndex)}let a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());let l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},ru=new ne,Gi=new Fr,No=new di,ou=new R,Fo=new R,Bo=new R,Oo=new R,Ec=new R,Ho=new R,au=new R,zo=new R,j=class extends ce{constructor(t=new ie,e=new yn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(t,e){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;e.fromBufferAttribute(s,t);let a=this.morphTargetInfluences;if(r&&a){Ho.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let h=a[l],u=r[l];h!==0&&(Ec.fromBufferAttribute(u,t),o?Ho.addScaledVector(Ec,h):Ho.addScaledVector(Ec.sub(e),h))}e.add(Ho)}return e}raycast(t,e){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),No.copy(n.boundingSphere),No.applyMatrix4(r),Gi.copy(t.ray).recast(t.near),!(No.containsPoint(Gi.origin)===!1&&(Gi.intersectSphere(No,ou)===null||Gi.origin.distanceToSquared(ou)>(t.far-t.near)**2))&&(ru.copy(r).invert(),Gi.copy(t.ray).applyMatrix4(ru),!(n.boundingBox!==null&&Gi.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,Gi)))}_computeIntersections(t,e,n){let s,r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,f=r.groups,d=r.drawRange;if(a!==null)if(Array.isArray(o))for(let m=0,x=f.length;m<x;m++){let g=f[m],p=o[g.materialIndex],E=Math.max(g.start,d.start),y=Math.min(a.count,Math.min(g.start+g.count,d.start+d.count));for(let _=E,A=y;_<A;_+=3){let T=a.getX(_),C=a.getX(_+1),L=a.getX(_+2);s=ko(this,p,t,n,c,h,u,T,C,L),s&&(s.faceIndex=Math.floor(_/3),s.face.materialIndex=g.materialIndex,e.push(s))}}else{let m=Math.max(0,d.start),x=Math.min(a.count,d.start+d.count);for(let g=m,p=x;g<p;g+=3){let E=a.getX(g),y=a.getX(g+1),_=a.getX(g+2);s=ko(this,o,t,n,c,h,u,E,y,_),s&&(s.faceIndex=Math.floor(g/3),e.push(s))}}else if(l!==void 0)if(Array.isArray(o))for(let m=0,x=f.length;m<x;m++){let g=f[m],p=o[g.materialIndex],E=Math.max(g.start,d.start),y=Math.min(l.count,Math.min(g.start+g.count,d.start+d.count));for(let _=E,A=y;_<A;_+=3){let T=_,C=_+1,L=_+2;s=ko(this,p,t,n,c,h,u,T,C,L),s&&(s.faceIndex=Math.floor(_/3),s.face.materialIndex=g.materialIndex,e.push(s))}}else{let m=Math.max(0,d.start),x=Math.min(l.count,d.start+d.count);for(let g=m,p=x;g<p;g+=3){let E=g,y=g+1,_=g+2;s=ko(this,o,t,n,c,h,u,E,y,_),s&&(s.faceIndex=Math.floor(g/3),e.push(s))}}}};function Mp(i,t,e,n,s,r,o,a){let l;if(t.side===nn?l=n.intersectTriangle(o,r,s,!0,a):l=n.intersectTriangle(s,r,o,t.side===hi,a),l===null)return null;zo.copy(a),zo.applyMatrix4(i.matrixWorld);let c=e.ray.origin.distanceTo(zo);return c<e.near||c>e.far?null:{distance:c,point:zo.clone(),object:i}}function ko(i,t,e,n,s,r,o,a,l,c){i.getVertexPosition(a,Fo),i.getVertexPosition(l,Bo),i.getVertexPosition(c,Oo);let h=Mp(i,t,e,n,Fo,Bo,Oo,au);if(h){let u=new R;li.getBarycoord(au,Fo,Bo,Oo,u),s&&(h.uv=li.getInterpolatedAttribute(s,a,l,c,u,new nt)),r&&(h.uv1=li.getInterpolatedAttribute(r,a,l,c,u,new nt)),o&&(h.normal=li.getInterpolatedAttribute(o,a,l,c,u,new R),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let f={a,b:l,c,normal:new R,materialIndex:0};li.getNormal(Fo,Bo,Oo,f.normal),h.face=f,h.barycoord=u}return h}var Le=class i extends ie{constructor(t=1,e=1,n=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:r,depthSegments:o};let a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);let l=[],c=[],h=[],u=[],f=0,d=0;m("z","y","x",-1,-1,n,e,t,o,r,0),m("z","y","x",1,-1,n,e,-t,o,r,1),m("x","z","y",1,1,t,n,e,s,o,2),m("x","z","y",1,-1,t,n,-e,s,o,3),m("x","y","z",1,-1,t,e,n,s,r,4),m("x","y","z",-1,-1,t,e,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new Gt(c,3)),this.setAttribute("normal",new Gt(h,3)),this.setAttribute("uv",new Gt(u,2));function m(x,g,p,E,y,_,A,T,C,L,M){let S=_/C,D=A/L,B=_/2,I=A/2,U=T/2,k=C+1,z=L+1,O=0,N=0,Z=new R;for(let Q=0;Q<z;Q++){let ht=Q*D-I;for(let Mt=0;Mt<k;Mt++){let _t=Mt*S-B;Z[x]=_t*E,Z[g]=ht*y,Z[p]=U,c.push(Z.x,Z.y,Z.z),Z[x]=0,Z[g]=0,Z[p]=T>0?1:-1,h.push(Z.x,Z.y,Z.z),u.push(Mt/C),u.push(1-Q/L),O+=1}}for(let Q=0;Q<L;Q++)for(let ht=0;ht<C;ht++){let Mt=f+ht+k*Q,_t=f+ht+k*(Q+1),Ut=f+(ht+1)+k*(Q+1),rt=f+(ht+1)+k*Q;l.push(Mt,_t,rt),l.push(_t,Ut,rt),N+=6}a.addGroup(d,N,M),d+=N,f+=O}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};function cs(i){let t={};for(let e in i){t[e]={};for(let n in i[e]){let s=i[e][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone():Array.isArray(s)?t[e][n]=s.slice():t[e][n]=s}}return t}function an(i){let t={};for(let e=0;e<i.length;e++){let n=cs(i[e]);for(let s in n)t[s]=n[s]}return t}function Sp(i){let t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function oh(i){let t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:ee.workingColorSpace}var pi={clone:cs,merge:an},Ep=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,bp=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Se=class extends Nn{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Ep,this.fragmentShader=bp,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=cs(t.uniforms),this.uniformsGroups=Sp(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let s in this.uniforms){let o=this.uniforms[s].value;o&&o.isTexture?e.uniforms[s]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[s]={type:"m4",value:o.toArray()}:e.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}},zr=class extends ce{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ne,this.projectionMatrix=new ne,this.projectionMatrixInverse=new ne,this.coordinateSystem=Dn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},Ti=new R,lu=new nt,cu=new nt,$e=class extends zr{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=$i*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(Ar*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return $i*2*Math.atan(Math.tan(Ar*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){Ti.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Ti.x,Ti.y).multiplyScalar(-t/Ti.z),Ti.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Ti.x,Ti.y).multiplyScalar(-t/Ti.z)}getViewSize(t,e){return this.getViewBounds(t,lu,cu),e.subVectors(cu,lu)}setViewOffset(t,e,n,s,r,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(Ar*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,r=-.5*s,o=this.view;if(this.view!==null&&this.view.enabled){let l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*s/l,e-=o.offsetY*n/c,s*=o.width/l,n*=o.height/c}let a=this.filmOffset;a!==0&&(r+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-n,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}},Cs=-90,Ps=1,la=class extends ce{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new $e(Cs,Ps,t,e);s.layers=this.layers,this.add(s);let r=new $e(Cs,Ps,t,e);r.layers=this.layers,this.add(r);let o=new $e(Cs,Ps,t,e);o.layers=this.layers,this.add(o);let a=new $e(Cs,Ps,t,e);a.layers=this.layers,this.add(a);let l=new $e(Cs,Ps,t,e);l.layers=this.layers,this.add(l);let c=new $e(Cs,Ps,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[n,s,r,o,a,l]=e;for(let c of e)this.remove(c);if(t===Dn)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===Dr)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[r,o,a,l,c,h]=this.children,u=t.getRenderTarget(),f=t.getActiveCubeFace(),d=t.getActiveMipmapLevel(),m=t.xr.enabled;t.xr.enabled=!1;let x=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,s),t.render(e,r),t.setRenderTarget(n,1,s),t.render(e,o),t.setRenderTarget(n,2,s),t.render(e,a),t.setRenderTarget(n,3,s),t.render(e,l),t.setRenderTarget(n,4,s),t.render(e,c),n.texture.generateMipmaps=x,t.setRenderTarget(n,5,s),t.render(e,h),t.setRenderTarget(u,f,d),t.xr.enabled=m,n.texture.needsPMREMUpdate=!0}},kr=class extends un{constructor(t=[],e=as,n,s,r,o,a,l,c,h){super(t,e,n,s,r,o,a,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},ca=class extends Je{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new kr(s),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},s=new Le(5,5,5),r=new Se({name:"CubemapFromEquirect",uniforms:cs(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:nn,blending:On});r.uniforms.tEquirect.value=e;let o=new j(s,r),a=e.minFilter;return e.minFilter===Ii&&(e.minFilter=Un),new la(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e=!0,n=!0,s=!0){let r=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,n,s);t.setRenderTarget(r)}},Zt=class extends ce{constructor(){super(),this.isGroup=!0,this.type="Group"}},Tp={type:"move"},ks=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Zt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Zt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new R,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new R),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Zt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new R,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new R),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,r=null,o=null,a=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){o=!0;for(let x of t.hand.values()){let g=e.getJointPose(x,n),p=this._getHandJoint(c,x);g!==null&&(p.matrix.fromArray(g.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=g.radius),p.visible=g!==null}let h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],f=h.position.distanceTo(u.position),d=.02,m=.005;c.inputState.pinching&&f>d+m?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&f<=d-m&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Tp)))}return a!==null&&(a.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let n=new Zt;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}};var Ji=class extends ce{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Ke,this.environmentIntensity=1,this.environmentRotation=new Ke,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}},Vr=class{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=sa,this.updateRanges=[],this.version=0,this.uuid=Zn()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,n){t*=this.stride,n*=e.stride;for(let s=0,r=this.stride;s<r;s++)this.array[t+s]=e.array[n+s];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Zn()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(e,this.stride);return n.setUsage(this.usage),n}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){return t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Zn()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}},hn=new R,Vs=class i{constructor(t,e,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=n,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,n=this.data.count;e<n;e++)hn.fromBufferAttribute(this,e),hn.applyMatrix4(t),this.setXYZ(e,hn.x,hn.y,hn.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)hn.fromBufferAttribute(this,e),hn.applyNormalMatrix(t),this.setXYZ(e,hn.x,hn.y,hn.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)hn.fromBufferAttribute(this,e),hn.transformDirection(t),this.setXYZ(e,hn.x,hn.y,hn.z);return this}getComponent(t,e){let n=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(n=Ln(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=de(n,this.array)),this.data.array[t*this.data.stride+this.offset+e]=n,this}setX(t,e){return this.normalized&&(e=de(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=de(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=de(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=de(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=Ln(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=Ln(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=Ln(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=Ln(e,this.array)),e}setXY(t,e,n){return t=t*this.data.stride+this.offset,this.normalized&&(e=de(e,this.array),n=de(n,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this}setXYZ(t,e,n,s){return t=t*this.data.stride+this.offset,this.normalized&&(e=de(e,this.array),n=de(n,this.array),s=de(s,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t=t*this.data.stride+this.offset,this.normalized&&(e=de(e,this.array),n=de(n,this.array),s=de(s,this.array),r=de(r,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=s,this.data.array[t+3]=r,this}clone(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return new Me(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new i(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},Ri=class extends Nn{constructor(t){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new vt(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},Is,vr=new R,Ls=new R,Ds=new R,Us=new nt,Mr=new nt,rd=new ne,Vo=new R,Sr=new R,Go=new R,hu=new nt,bc=new nt,uu=new nt,Ki=class extends ce{constructor(t=new Ri){if(super(),this.isSprite=!0,this.type="Sprite",Is===void 0){Is=new ie;let e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new Vr(e,5);Is.setIndex([0,1,2,0,2,3]),Is.setAttribute("position",new Vs(n,3,0,!1)),Is.setAttribute("uv",new Vs(n,2,3,!1))}this.geometry=Is,this.material=t,this.center=new nt(.5,.5),this.count=1}raycast(t,e){t.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Ls.setFromMatrixScale(this.matrixWorld),rd.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),Ds.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Ls.multiplyScalar(-Ds.z);let n=this.material.rotation,s,r;n!==0&&(r=Math.cos(n),s=Math.sin(n));let o=this.center;Wo(Vo.set(-.5,-.5,0),Ds,o,Ls,s,r),Wo(Sr.set(.5,-.5,0),Ds,o,Ls,s,r),Wo(Go.set(.5,.5,0),Ds,o,Ls,s,r),hu.set(0,0),bc.set(1,0),uu.set(1,1);let a=t.ray.intersectTriangle(Vo,Sr,Go,!1,vr);if(a===null&&(Wo(Sr.set(-.5,.5,0),Ds,o,Ls,s,r),bc.set(0,1),a=t.ray.intersectTriangle(Vo,Go,Sr,!1,vr),a===null))return;let l=t.ray.origin.distanceTo(vr);l<t.near||l>t.far||e.push({distance:l,point:vr.clone(),uv:li.getInterpolation(vr,Vo,Sr,Go,hu,bc,uu,new nt),face:null,object:this})}copy(t,e){return super.copy(t,e),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}};function Wo(i,t,e,n,s,r){Us.subVectors(i,e).addScalar(.5).multiply(n),s!==void 0?(Mr.x=r*Us.x-s*Us.y,Mr.y=s*Us.x+r*Us.y):Mr.copy(Us),i.copy(t),i.x+=Mr.x,i.y+=Mr.y,i.applyMatrix4(rd)}var ha=class extends un{constructor(t=null,e=1,n=1,s,r,o,a,l,c=fn,h=fn,u,f){super(null,o,a,l,c,h,s,r,u,f),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Gs=class extends Me{constructor(t,e,n,s=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){let t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}},Ns=new ne,du=new ne,Xo=[],fu=new $n,wp=new ne,Er=new j,br=new di,on=class extends j{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new Gs(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,wp)}computeBoundingBox(){let t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new $n),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,Ns),fu.copy(t.boundingBox).applyMatrix4(Ns),this.boundingBox.union(fu)}computeBoundingSphere(){let t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new di),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,Ns),br.copy(t.boundingSphere).applyMatrix4(Ns),this.boundingSphere.union(br)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){let n=e.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,o=t*r+1;for(let a=0;a<n.length;a++)n[a]=s[o+a]}raycast(t,e){let n=this.matrixWorld,s=this.count;if(Er.geometry=this.geometry,Er.material=this.material,Er.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),br.copy(this.boundingSphere),br.applyMatrix4(n),t.ray.intersectsSphere(br)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,Ns),du.multiplyMatrices(n,Ns),Er.matrixWorld=du,Er.raycast(t,Xo);for(let o=0,a=Xo.length;o<a;o++){let l=Xo[o];l.instanceId=r,l.object=this,e.push(l)}Xo.length=0}}setColorAt(t,e){this.instanceColor===null&&(this.instanceColor=new Gs(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3)}setMatrixAt(t,e){e.toArray(this.instanceMatrix.array,t*16)}setMorphAt(t,e){let n=e.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new ha(new Float32Array(s*this.count),s,this.count,Ja,zn));let r=this.morphTexture.source.data.data,o=0;for(let c=0;c<n.length;c++)o+=n[c];let a=this.geometry.morphTargetsRelative?1:1-o,l=s*t;r[l]=a,r.set(n,l+1)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},Tc=new R,Ap=new R,Rp=new Jt,qn=class{constructor(t=new R(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){let s=Tc.subVectors(n,e).cross(Ap.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){let n=t.delta(Tc),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let r=-(t.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:e.copy(t.start).addScaledVector(n,r)}intersectsLine(t){let e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let n=e||Rp.getNormalMatrix(t),s=this.coplanarPoint(Tc).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}},Wi=new di,Cp=new nt(.5,.5),qo=new R,Ws=class{constructor(t=new qn,e=new qn,n=new qn,s=new qn,r=new qn,o=new qn){this.planes=[t,e,n,s,r,o]}set(t,e,n,s,r,o){let a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(t){let e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=Dn,n=!1){let s=this.planes,r=t.elements,o=r[0],a=r[1],l=r[2],c=r[3],h=r[4],u=r[5],f=r[6],d=r[7],m=r[8],x=r[9],g=r[10],p=r[11],E=r[12],y=r[13],_=r[14],A=r[15];if(s[0].setComponents(c-o,d-h,p-m,A-E).normalize(),s[1].setComponents(c+o,d+h,p+m,A+E).normalize(),s[2].setComponents(c+a,d+u,p+x,A+y).normalize(),s[3].setComponents(c-a,d-u,p-x,A-y).normalize(),n)s[4].setComponents(l,f,g,_).normalize(),s[5].setComponents(c-l,d-f,p-g,A-_).normalize();else if(s[4].setComponents(c-l,d-f,p-g,A-_).normalize(),e===Dn)s[5].setComponents(c+l,d+f,p+g,A+_).normalize();else if(e===Dr)s[5].setComponents(l,f,g,_).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Wi.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Wi.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Wi)}intersectsSprite(t){Wi.center.set(0,0,0);let e=Cp.distanceTo(t.center);return Wi.radius=.7071067811865476+e,Wi.applyMatrix4(t.matrixWorld),this.intersectsSphere(Wi)}intersectsSphere(t){let e=this.planes,n=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){let e=this.planes;for(let n=0;n<6;n++){let s=e[n];if(qo.x=s.normal.x>0?t.max.x:t.min.x,qo.y=s.normal.y>0?t.max.y:t.min.y,qo.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(qo)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var ua=class extends Nn{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new vt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},pu=new ne,Nc=new Fr,Yo=new di,Zo=new R,Xs=class extends ce{constructor(t=new ie,e=new ua){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){let n=this.geometry,s=this.matrixWorld,r=t.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Yo.copy(n.boundingSphere),Yo.applyMatrix4(s),Yo.radius+=r,t.ray.intersectsSphere(Yo)===!1)return;pu.copy(s).invert(),Nc.copy(t.ray).applyMatrix4(pu);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=n.index,u=n.attributes.position;if(c!==null){let f=Math.max(0,o.start),d=Math.min(c.count,o.start+o.count);for(let m=f,x=d;m<x;m++){let g=c.getX(m);Zo.fromBufferAttribute(u,g),mu(Zo,g,l,s,t,e,this)}}else{let f=Math.max(0,o.start),d=Math.min(u.count,o.start+o.count);for(let m=f,x=d;m<x;m++)Zo.fromBufferAttribute(u,m),mu(Zo,m,l,s,t,e,this)}}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function mu(i,t,e,n,s,r,o){let a=Nc.distanceSqToPoint(i);if(a<e){let l=new R;Nc.closestPointToPoint(i,l),l.applyMatrix4(n);let c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;r.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:t,face:null,faceIndex:null,barycoord:null,object:o})}}var Gr=class extends un{constructor(t,e,n,s,r,o,a,l,c){super(t,e,n,s,r,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}},Wr=class extends un{constructor(t,e,n=Li,s,r,o,a=fn,l=fn,c,h=Os,u=1){if(h!==Os&&h!==tr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let f={width:t,height:e,depth:u};super(f,s,r,o,a,l,h,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new zs(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}},Xr=class extends un{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}},qr=class i extends ie{constructor(t=1,e=1,n=4,s=8,r=1){super(),this.type="CapsuleGeometry",this.parameters={radius:t,height:e,capSegments:n,radialSegments:s,heightSegments:r},e=Math.max(0,e),n=Math.max(1,Math.floor(n)),s=Math.max(3,Math.floor(s)),r=Math.max(1,Math.floor(r));let o=[],a=[],l=[],c=[],h=e/2,u=Math.PI/2*t,f=e,d=2*u+f,m=n*2+r,x=s+1,g=new R,p=new R;for(let E=0;E<=m;E++){let y=0,_=0,A=0,T=0;if(E<=n){let M=E/n,S=M*Math.PI/2;_=-h-t*Math.cos(S),A=t*Math.sin(S),T=-t*Math.cos(S),y=M*u}else if(E<=n+r){let M=(E-n)/r;_=-h+M*e,A=t,T=0,y=u+M*f}else{let M=(E-n-r)/n,S=M*Math.PI/2;_=h+t*Math.sin(S),A=t*Math.cos(S),T=t*Math.sin(S),y=u+f+M*u}let C=Math.max(0,Math.min(1,y/d)),L=0;E===0?L=.5/s:E===m&&(L=-.5/s);for(let M=0;M<=s;M++){let S=M/s,D=S*Math.PI*2,B=Math.sin(D),I=Math.cos(D);p.x=-A*I,p.y=_,p.z=A*B,a.push(p.x,p.y,p.z),g.set(-A*I,T,A*B),g.normalize(),l.push(g.x,g.y,g.z),c.push(S+L,C)}if(E>0){let M=(E-1)*x;for(let S=0;S<s;S++){let D=M+S,B=M+S+1,I=E*x+S,U=E*x+S+1;o.push(D,B,I),o.push(B,U,I)}}}this.setIndex(o),this.setAttribute("position",new Gt(a,3)),this.setAttribute("normal",new Gt(l,3)),this.setAttribute("uv",new Gt(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.height,t.capSegments,t.radialSegments,t.heightSegments)}},Jn=class i extends ie{constructor(t=1,e=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:n,thetaLength:s},e=Math.max(3,e);let r=[],o=[],a=[],l=[],c=new R,h=new nt;o.push(0,0,0),a.push(0,0,1),l.push(.5,.5);for(let u=0,f=3;u<=e;u++,f+=3){let d=n+u/e*s;c.x=t*Math.cos(d),c.y=t*Math.sin(d),o.push(c.x,c.y,c.z),a.push(0,0,1),h.x=(o[f]/t+1)/2,h.y=(o[f+1]/t+1)/2,l.push(h.x,h.y)}for(let u=1;u<=e;u++)r.push(u,u+1,0);this.setIndex(r),this.setAttribute("position",new Gt(o,3)),this.setAttribute("normal",new Gt(a,3)),this.setAttribute("uv",new Gt(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.segments,t.thetaStart,t.thetaLength)}},ye=class i extends ie{constructor(t=1,e=1,n=1,s=32,r=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:l};let c=this;s=Math.floor(s),r=Math.floor(r);let h=[],u=[],f=[],d=[],m=0,x=[],g=n/2,p=0;E(),o===!1&&(t>0&&y(!0),e>0&&y(!1)),this.setIndex(h),this.setAttribute("position",new Gt(u,3)),this.setAttribute("normal",new Gt(f,3)),this.setAttribute("uv",new Gt(d,2));function E(){let _=new R,A=new R,T=0,C=(e-t)/n;for(let L=0;L<=r;L++){let M=[],S=L/r,D=S*(e-t)+t;for(let B=0;B<=s;B++){let I=B/s,U=I*l+a,k=Math.sin(U),z=Math.cos(U);A.x=D*k,A.y=-S*n+g,A.z=D*z,u.push(A.x,A.y,A.z),_.set(k,C,z).normalize(),f.push(_.x,_.y,_.z),d.push(I,1-S),M.push(m++)}x.push(M)}for(let L=0;L<s;L++)for(let M=0;M<r;M++){let S=x[M][L],D=x[M+1][L],B=x[M+1][L+1],I=x[M][L+1];(t>0||M!==0)&&(h.push(S,D,I),T+=3),(e>0||M!==r-1)&&(h.push(D,B,I),T+=3)}c.addGroup(p,T,0),p+=T}function y(_){let A=m,T=new nt,C=new R,L=0,M=_===!0?t:e,S=_===!0?1:-1;for(let B=1;B<=s;B++)u.push(0,g*S,0),f.push(0,S,0),d.push(.5,.5),m++;let D=m;for(let B=0;B<=s;B++){let U=B/s*l+a,k=Math.cos(U),z=Math.sin(U);C.x=M*z,C.y=g*S,C.z=M*k,u.push(C.x,C.y,C.z),f.push(0,S,0),T.x=k*.5+.5,T.y=z*.5*S+.5,d.push(T.x,T.y),m++}for(let B=0;B<s;B++){let I=A+B,U=D+B;_===!0?h.push(U,U+1,I):h.push(U+1,U,I),L+=3}c.addGroup(p,L,_===!0?1:2),p+=L}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},Qi=class i extends ye{constructor(t=1,e=1,n=32,s=1,r=!1,o=0,a=Math.PI*2){super(0,t,e,n,s,r,o,a),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(t){return new i(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}};var vn=class{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){console.warn("THREE.Curve: .getPoint() not implemented.")}getPointAt(t,e){let n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){let t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let e=[],n,s=this.getPoint(0),r=0;e.push(0);for(let o=1;o<=t;o++)n=this.getPoint(o/t),r+=n.distanceTo(s),e.push(r),s=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e=null){let n=this.getLengths(),s=0,r=n.length,o;e?o=e:o=t*n[r-1];let a=0,l=r-1,c;for(;a<=l;)if(s=Math.floor(a+(l-a)/2),c=n[s]-o,c<0)a=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,n[s]===o)return s/(r-1);let h=n[s],f=n[s+1]-h,d=(o-h)/f;return(s+d)/(r-1)}getTangent(t,e){let s=t-1e-4,r=t+1e-4;s<0&&(s=0),r>1&&(r=1);let o=this.getPoint(s),a=this.getPoint(r),l=e||(o.isVector2?new nt:new R);return l.copy(a).sub(o).normalize(),l}getTangentAt(t,e){let n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e=!1){let n=new R,s=[],r=[],o=[],a=new R,l=new ne;for(let d=0;d<=t;d++){let m=d/t;s[d]=this.getTangentAt(m,new R)}r[0]=new R,o[0]=new R;let c=Number.MAX_VALUE,h=Math.abs(s[0].x),u=Math.abs(s[0].y),f=Math.abs(s[0].z);h<=c&&(c=h,n.set(1,0,0)),u<=c&&(c=u,n.set(0,1,0)),f<=c&&n.set(0,0,1),a.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],a),o[0].crossVectors(s[0],r[0]);for(let d=1;d<=t;d++){if(r[d]=r[d-1].clone(),o[d]=o[d-1].clone(),a.crossVectors(s[d-1],s[d]),a.length()>Number.EPSILON){a.normalize();let m=Math.acos(Kt(s[d-1].dot(s[d]),-1,1));r[d].applyMatrix4(l.makeRotationAxis(a,m))}o[d].crossVectors(s[d],r[d])}if(e===!0){let d=Math.acos(Kt(r[0].dot(r[t]),-1,1));d/=t,s[0].dot(a.crossVectors(r[0],r[t]))>0&&(d=-d);for(let m=1;m<=t;m++)r[m].applyMatrix4(l.makeRotationAxis(s[m],d*m)),o[m].crossVectors(s[m],r[m])}return{tangents:s,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){let t={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}},qs=class extends vn{constructor(t=0,e=0,n=1,s=1,r=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(t,e=new nt){let n=e,s=Math.PI*2,r=this.aEndAngle-this.aStartAngle,o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(o?r=0:r=s),this.aClockwise===!0&&!o&&(r===s?r=-s:r=r-s);let a=this.aStartAngle+t*r,l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){let h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),f=l-this.aX,d=c-this.aY;l=f*h-d*u+this.aX,c=f*u+d*h+this.aY}return n.set(l,c)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){let t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}},da=class extends qs{constructor(t,e,n,s,r,o){super(t,e,n,n,s,r,o),this.isArcCurve=!0,this.type="ArcCurve"}};function ah(){let i=0,t=0,e=0,n=0;function s(r,o,a,l){i=r,t=a,e=-3*r+3*o-2*a-l,n=2*r-2*o+a+l}return{initCatmullRom:function(r,o,a,l,c){s(o,a,c*(a-r),c*(l-o))},initNonuniformCatmullRom:function(r,o,a,l,c,h,u){let f=(o-r)/c-(a-r)/(c+h)+(a-o)/h,d=(a-o)/h-(l-o)/(h+u)+(l-a)/u;f*=h,d*=h,s(o,a,f,d)},calc:function(r){let o=r*r,a=o*r;return i+t*r+e*o+n*a}}}var $o=new R,wc=new ah,Ac=new ah,Rc=new ah,An=class extends vn{constructor(t=[],e=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=s}getPoint(t,e=new R){let n=e,s=this.points,r=s.length,o=(r-(this.closed?0:1))*t,a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:l===0&&a===r-1&&(a=r-2,l=1);let c,h;this.closed||a>0?c=s[(a-1)%r]:($o.subVectors(s[0],s[1]).add(s[0]),c=$o);let u=s[a%r],f=s[(a+1)%r];if(this.closed||a+2<r?h=s[(a+2)%r]:($o.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=$o),this.curveType==="centripetal"||this.curveType==="chordal"){let d=this.curveType==="chordal"?.5:.25,m=Math.pow(c.distanceToSquared(u),d),x=Math.pow(u.distanceToSquared(f),d),g=Math.pow(f.distanceToSquared(h),d);x<1e-4&&(x=1),m<1e-4&&(m=x),g<1e-4&&(g=x),wc.initNonuniformCatmullRom(c.x,u.x,f.x,h.x,m,x,g),Ac.initNonuniformCatmullRom(c.y,u.y,f.y,h.y,m,x,g),Rc.initNonuniformCatmullRom(c.z,u.z,f.z,h.z,m,x,g)}else this.curveType==="catmullrom"&&(wc.initCatmullRom(c.x,u.x,f.x,h.x,this.tension),Ac.initCatmullRom(c.y,u.y,f.y,h.y,this.tension),Rc.initCatmullRom(c.z,u.z,f.z,h.z,this.tension));return n.set(wc.calc(l),Ac.calc(l),Rc.calc(l)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(s.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let s=this.points[e];t.points.push(s.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(new R().fromArray(s))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}};function gu(i,t,e,n,s){let r=(n-t)*.5,o=(s-e)*.5,a=i*i,l=i*a;return(2*e-2*n+r+o)*l+(-3*e+3*n-2*r-o)*a+r*i+e}function Pp(i,t){let e=1-i;return e*e*t}function Ip(i,t){return 2*(1-i)*i*t}function Lp(i,t){return i*i*t}function Cr(i,t,e,n){return Pp(i,t)+Ip(i,e)+Lp(i,n)}function Dp(i,t){let e=1-i;return e*e*e*t}function Up(i,t){let e=1-i;return 3*e*e*i*t}function Np(i,t){return 3*(1-i)*i*i*t}function Fp(i,t){return i*i*i*t}function Pr(i,t,e,n,s){return Dp(i,t)+Up(i,e)+Np(i,n)+Fp(i,s)}var Yr=class extends vn{constructor(t=new nt,e=new nt,n=new nt,s=new nt){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new nt){let n=e,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(Pr(t,s.x,r.x,o.x,a.x),Pr(t,s.y,r.y,o.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},fa=class extends vn{constructor(t=new R,e=new R,n=new R,s=new R){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new R){let n=e,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(Pr(t,s.x,r.x,o.x,a.x),Pr(t,s.y,r.y,o.y,a.y),Pr(t,s.z,r.z,o.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},Zr=class extends vn{constructor(t=new nt,e=new nt){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new nt){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new nt){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},pa=class extends vn{constructor(t=new R,e=new R){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new R){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new R){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},$r=class extends vn{constructor(t=new nt,e=new nt,n=new nt){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new nt){let n=e,s=this.v0,r=this.v1,o=this.v2;return n.set(Cr(t,s.x,r.x,o.x),Cr(t,s.y,r.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Jr=class extends vn{constructor(t=new R,e=new R,n=new R){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new R){let n=e,s=this.v0,r=this.v1,o=this.v2;return n.set(Cr(t,s.x,r.x,o.x),Cr(t,s.y,r.y,o.y),Cr(t,s.z,r.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},ji=class extends vn{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new nt){let n=e,s=this.points,r=(s.length-1)*t,o=Math.floor(r),a=r-o,l=s[o===0?o:o-1],c=s[o],h=s[o>s.length-2?s.length-1:o+1],u=s[o>s.length-3?s.length-1:o+2];return n.set(gu(a,l.x,c.x,h.x,u.x),gu(a,l.y,c.y,h.y,u.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(s.clone())}return this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let s=this.points[e];t.points.push(s.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(new nt().fromArray(s))}return this}},ma=Object.freeze({__proto__:null,ArcCurve:da,CatmullRomCurve3:An,CubicBezierCurve:Yr,CubicBezierCurve3:fa,EllipseCurve:qs,LineCurve:Zr,LineCurve3:pa,QuadraticBezierCurve:$r,QuadraticBezierCurve3:Jr,SplineCurve:ji}),ga=class extends vn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){let t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){let n=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new ma[n](e,t))}return this}getPoint(t,e){let n=t*this.getLength(),s=this.getCurveLengths(),r=0;for(;r<s.length;){if(s[r]>=n){let o=s[r]-n,a=this.curves[r],l=a.getLength(),c=l===0?0:1-o/l;return a.getPointAt(c,e)}r++}return null}getLength(){let t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let t=[],e=0;for(let n=0,s=this.curves.length;n<s;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){let e=[],n;for(let s=0,r=this.curves;s<r.length;s++){let o=r[s],a=o.isEllipseCurve?t*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?t*o.points.length:t,l=o.getPoints(a);for(let c=0;c<l.length;c++){let h=l[c];n&&n.equals(h)||(e.push(h),n=h)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){let s=t.curves[e];this.curves.push(s.clone())}return this.autoClose=t.autoClose,this}toJSON(){let t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){let s=this.curves[e];t.curves.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){let s=t.curves[e];this.curves.push(new ma[s.type]().fromJSON(s))}return this}},Kr=class extends ga{constructor(t){super(),this.type="Path",this.currentPoint=new nt,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){let n=new Zr(this.currentPoint.clone(),new nt(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,s){let r=new $r(this.currentPoint.clone(),new nt(t,e),new nt(n,s));return this.curves.push(r),this.currentPoint.set(n,s),this}bezierCurveTo(t,e,n,s,r,o){let a=new Yr(this.currentPoint.clone(),new nt(t,e),new nt(n,s),new nt(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(t){let e=[this.currentPoint.clone()].concat(t),n=new ji(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,s,r,o){let a=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(t+a,e+l,n,s,r,o),this}absarc(t,e,n,s,r,o){return this.absellipse(t,e,n,n,s,r,o),this}ellipse(t,e,n,s,r,o,a,l){let c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(t+c,e+h,n,s,r,o,a,l),this}absellipse(t,e,n,s,r,o,a,l){let c=new qs(t,e,n,s,r,o,a,l);if(this.curves.length>0){let u=c.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(c);let h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){let t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}},Fn=class extends Kr{constructor(t){super(t),this.uuid=Zn(),this.type="Shape",this.holes=[]}getPointsHoles(t){let e=[];for(let n=0,s=this.holes.length;n<s;n++)e[n]=this.holes[n].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){let s=t.holes[e];this.holes.push(s.clone())}return this}toJSON(){let t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,n=this.holes.length;e<n;e++){let s=this.holes[e];t.holes.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){let s=t.holes[e];this.holes.push(new Kr().fromJSON(s))}return this}};function Bp(i,t,e=2){let n=t&&t.length,s=n?t[0]*e:i.length,r=od(i,0,s,e,!0),o=[];if(!r||r.next===r.prev)return o;let a,l,c;if(n&&(r=Vp(i,t,r,e)),i.length>80*e){a=1/0,l=1/0;let h=-1/0,u=-1/0;for(let f=e;f<s;f+=e){let d=i[f],m=i[f+1];d<a&&(a=d),m<l&&(l=m),d>h&&(h=d),m>u&&(u=m)}c=Math.max(h-a,u-l),c=c!==0?32767/c:0}return Qr(r,o,e,a,l,c,0),o}function od(i,t,e,n,s){let r;if(s===jp(i,t,e,n)>0)for(let o=t;o<e;o+=n)r=xu(o/n|0,i[o],i[o+1],r);else for(let o=e-n;o>=t;o-=n)r=xu(o/n|0,i[o],i[o+1],r);return r&&Ys(r,r.next)&&(to(r),r=r.next),r}function ts(i,t){if(!i)return i;t||(t=i);let e=i,n;do if(n=!1,!e.steiner&&(Ys(e,e.next)||Ie(e.prev,e,e.next)===0)){if(to(e),e=t=e.prev,e===e.next)break;n=!0}else e=e.next;while(n||e!==t);return t}function Qr(i,t,e,n,s,r,o){if(!i)return;!o&&r&&Yp(i,n,s,r);let a=i;for(;i.prev!==i.next;){let l=i.prev,c=i.next;if(r?Hp(i,n,s,r):Op(i)){t.push(l.i,i.i,c.i),to(i),i=c.next,a=c.next;continue}if(i=c,i===a){o?o===1?(i=zp(ts(i),t),Qr(i,t,e,n,s,r,2)):o===2&&kp(i,t,e,n,s,r):Qr(ts(i),t,e,n,s,r,1);break}}}function Op(i){let t=i.prev,e=i,n=i.next;if(Ie(t,e,n)>=0)return!1;let s=t.x,r=e.x,o=n.x,a=t.y,l=e.y,c=n.y,h=Math.min(s,r,o),u=Math.min(a,l,c),f=Math.max(s,r,o),d=Math.max(a,l,c),m=n.next;for(;m!==t;){if(m.x>=h&&m.x<=f&&m.y>=u&&m.y<=d&&wr(s,a,r,l,o,c,m.x,m.y)&&Ie(m.prev,m,m.next)>=0)return!1;m=m.next}return!0}function Hp(i,t,e,n){let s=i.prev,r=i,o=i.next;if(Ie(s,r,o)>=0)return!1;let a=s.x,l=r.x,c=o.x,h=s.y,u=r.y,f=o.y,d=Math.min(a,l,c),m=Math.min(h,u,f),x=Math.max(a,l,c),g=Math.max(h,u,f),p=Fc(d,m,t,e,n),E=Fc(x,g,t,e,n),y=i.prevZ,_=i.nextZ;for(;y&&y.z>=p&&_&&_.z<=E;){if(y.x>=d&&y.x<=x&&y.y>=m&&y.y<=g&&y!==s&&y!==o&&wr(a,h,l,u,c,f,y.x,y.y)&&Ie(y.prev,y,y.next)>=0||(y=y.prevZ,_.x>=d&&_.x<=x&&_.y>=m&&_.y<=g&&_!==s&&_!==o&&wr(a,h,l,u,c,f,_.x,_.y)&&Ie(_.prev,_,_.next)>=0))return!1;_=_.nextZ}for(;y&&y.z>=p;){if(y.x>=d&&y.x<=x&&y.y>=m&&y.y<=g&&y!==s&&y!==o&&wr(a,h,l,u,c,f,y.x,y.y)&&Ie(y.prev,y,y.next)>=0)return!1;y=y.prevZ}for(;_&&_.z<=E;){if(_.x>=d&&_.x<=x&&_.y>=m&&_.y<=g&&_!==s&&_!==o&&wr(a,h,l,u,c,f,_.x,_.y)&&Ie(_.prev,_,_.next)>=0)return!1;_=_.nextZ}return!0}function zp(i,t){let e=i;do{let n=e.prev,s=e.next.next;!Ys(n,s)&&ld(n,e,e.next,s)&&jr(n,s)&&jr(s,n)&&(t.push(n.i,e.i,s.i),to(e),to(e.next),e=i=s),e=e.next}while(e!==i);return ts(e)}function kp(i,t,e,n,s,r){let o=i;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&Jp(o,a)){let l=cd(o,a);o=ts(o,o.next),l=ts(l,l.next),Qr(o,t,e,n,s,r,0),Qr(l,t,e,n,s,r,0);return}a=a.next}o=o.next}while(o!==i)}function Vp(i,t,e,n){let s=[];for(let r=0,o=t.length;r<o;r++){let a=t[r]*n,l=r<o-1?t[r+1]*n:i.length,c=od(i,a,l,n,!1);c===c.next&&(c.steiner=!0),s.push($p(c))}s.sort(Gp);for(let r=0;r<s.length;r++)e=Wp(s[r],e);return e}function Gp(i,t){let e=i.x-t.x;if(e===0&&(e=i.y-t.y,e===0)){let n=(i.next.y-i.y)/(i.next.x-i.x),s=(t.next.y-t.y)/(t.next.x-t.x);e=n-s}return e}function Wp(i,t){let e=Xp(i,t);if(!e)return t;let n=cd(e,i);return ts(n,n.next),ts(e,e.next)}function Xp(i,t){let e=t,n=i.x,s=i.y,r=-1/0,o;if(Ys(i,e))return e;do{if(Ys(i,e.next))return e.next;if(s<=e.y&&s>=e.next.y&&e.next.y!==e.y){let u=e.x+(s-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(u<=n&&u>r&&(r=u,o=e.x<e.next.x?e:e.next,u===n))return o}e=e.next}while(e!==t);if(!o)return null;let a=o,l=o.x,c=o.y,h=1/0;e=o;do{if(n>=e.x&&e.x>=l&&n!==e.x&&ad(s<c?n:r,s,l,c,s<c?r:n,s,e.x,e.y)){let u=Math.abs(s-e.y)/(n-e.x);jr(e,i)&&(u<h||u===h&&(e.x>o.x||e.x===o.x&&qp(o,e)))&&(o=e,h=u)}e=e.next}while(e!==a);return o}function qp(i,t){return Ie(i.prev,i,t.prev)<0&&Ie(t.next,i,i.next)<0}function Yp(i,t,e,n){let s=i;do s.z===0&&(s.z=Fc(s.x,s.y,t,e,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,Zp(s)}function Zp(i){let t,e=1;do{let n=i,s;i=null;let r=null;for(t=0;n;){t++;let o=n,a=0;for(let c=0;c<e&&(a++,o=o.nextZ,!!o);c++);let l=e;for(;a>0||l>0&&o;)a!==0&&(l===0||!o||n.z<=o.z)?(s=n,n=n.nextZ,a--):(s=o,o=o.nextZ,l--),r?r.nextZ=s:i=s,s.prevZ=r,r=s;n=o}r.nextZ=null,e*=2}while(t>1);return i}function Fc(i,t,e,n,s){return i=(i-e)*s|0,t=(t-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,i|t<<1}function $p(i){let t=i,e=i;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==i);return e}function ad(i,t,e,n,s,r,o,a){return(s-o)*(t-a)>=(i-o)*(r-a)&&(i-o)*(n-a)>=(e-o)*(t-a)&&(e-o)*(r-a)>=(s-o)*(n-a)}function wr(i,t,e,n,s,r,o,a){return!(i===o&&t===a)&&ad(i,t,e,n,s,r,o,a)}function Jp(i,t){return i.next.i!==t.i&&i.prev.i!==t.i&&!Kp(i,t)&&(jr(i,t)&&jr(t,i)&&Qp(i,t)&&(Ie(i.prev,i,t.prev)||Ie(i,t.prev,t))||Ys(i,t)&&Ie(i.prev,i,i.next)>0&&Ie(t.prev,t,t.next)>0)}function Ie(i,t,e){return(t.y-i.y)*(e.x-t.x)-(t.x-i.x)*(e.y-t.y)}function Ys(i,t){return i.x===t.x&&i.y===t.y}function ld(i,t,e,n){let s=Ko(Ie(i,t,e)),r=Ko(Ie(i,t,n)),o=Ko(Ie(e,n,i)),a=Ko(Ie(e,n,t));return!!(s!==r&&o!==a||s===0&&Jo(i,e,t)||r===0&&Jo(i,n,t)||o===0&&Jo(e,i,n)||a===0&&Jo(e,t,n))}function Jo(i,t,e){return t.x<=Math.max(i.x,e.x)&&t.x>=Math.min(i.x,e.x)&&t.y<=Math.max(i.y,e.y)&&t.y>=Math.min(i.y,e.y)}function Ko(i){return i>0?1:i<0?-1:0}function Kp(i,t){let e=i;do{if(e.i!==i.i&&e.next.i!==i.i&&e.i!==t.i&&e.next.i!==t.i&&ld(e,e.next,i,t))return!0;e=e.next}while(e!==i);return!1}function jr(i,t){return Ie(i.prev,i,i.next)<0?Ie(i,t,i.next)>=0&&Ie(i,i.prev,t)>=0:Ie(i,t,i.prev)<0||Ie(i,i.next,t)<0}function Qp(i,t){let e=i,n=!1,s=(i.x+t.x)/2,r=(i.y+t.y)/2;do e.y>r!=e.next.y>r&&e.next.y!==e.y&&s<(e.next.x-e.x)*(r-e.y)/(e.next.y-e.y)+e.x&&(n=!n),e=e.next;while(e!==i);return n}function cd(i,t){let e=Bc(i.i,i.x,i.y),n=Bc(t.i,t.x,t.y),s=i.next,r=t.prev;return i.next=t,t.prev=i,e.next=s,s.prev=e,n.next=e,e.prev=n,r.next=n,n.prev=r,n}function xu(i,t,e,n){let s=Bc(i,t,e);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function to(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function Bc(i,t,e){return{i,x:t,y:e,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function jp(i,t,e,n){let s=0;for(let r=t,o=e-n;r<e;r+=n)s+=(i[o]-i[r])*(i[r+1]+i[o+1]),o=r;return s}var Oc=class{static triangulate(t,e,n=2){return Bp(t,e,n)}},Yn=class i{static area(t){let e=t.length,n=0;for(let s=e-1,r=0;r<e;s=r++)n+=t[s].x*t[r].y-t[r].x*t[s].y;return n*.5}static isClockWise(t){return i.area(t)<0}static triangulateShape(t,e){let n=[],s=[],r=[];_u(t),yu(n,t);let o=t.length;e.forEach(_u);for(let l=0;l<e.length;l++)s.push(o),o+=e[l].length,yu(n,e[l]);let a=Oc.triangulate(n,s);for(let l=0;l<a.length;l+=3)r.push(a.slice(l,l+3));return r}};function _u(i){let t=i.length;t>2&&i[t-1].equals(i[0])&&i.pop()}function yu(i,t){for(let e=0;e<t.length;e++)i.push(t[e].x),i.push(t[e].y)}var Zs=class i extends ie{constructor(t=new Fn([new nt(.5,.5),new nt(-.5,.5),new nt(-.5,-.5),new nt(.5,-.5)]),e={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:e},t=Array.isArray(t)?t:[t];let n=this,s=[],r=[];for(let a=0,l=t.length;a<l;a++){let c=t[a];o(c)}this.setAttribute("position",new Gt(s,3)),this.setAttribute("uv",new Gt(r,2)),this.computeVertexNormals();function o(a){let l=[],c=e.curveSegments!==void 0?e.curveSegments:12,h=e.steps!==void 0?e.steps:1,u=e.depth!==void 0?e.depth:1,f=e.bevelEnabled!==void 0?e.bevelEnabled:!0,d=e.bevelThickness!==void 0?e.bevelThickness:.2,m=e.bevelSize!==void 0?e.bevelSize:d-.1,x=e.bevelOffset!==void 0?e.bevelOffset:0,g=e.bevelSegments!==void 0?e.bevelSegments:3,p=e.extrudePath,E=e.UVGenerator!==void 0?e.UVGenerator:tm,y,_=!1,A,T,C,L;p&&(y=p.getSpacedPoints(h),_=!0,f=!1,A=p.computeFrenetFrames(h,!1),T=new R,C=new R,L=new R),f||(g=0,d=0,m=0,x=0);let M=a.extractPoints(c),S=M.shape,D=M.holes;if(!Yn.isClockWise(S)){S=S.reverse();for(let tt=0,it=D.length;tt<it;tt++){let ot=D[tt];Yn.isClockWise(ot)&&(D[tt]=ot.reverse())}}function I(tt){let ot=10000000000000001e-36,st=tt[0];for(let wt=1;wt<=tt.length;wt++){let yt=wt%tt.length,q=tt[yt],ft=q.x-st.x,St=q.y-st.y,w=ft*ft+St*St,v=Math.max(Math.abs(q.x),Math.abs(q.y),Math.abs(st.x),Math.abs(st.y)),V=ot*v*v;if(w<=V){tt.splice(yt,1),wt--;continue}st=q}}I(S),D.forEach(I);let U=D.length,k=S;for(let tt=0;tt<U;tt++){let it=D[tt];S=S.concat(it)}function z(tt,it,ot){return it||console.error("THREE.ExtrudeGeometry: vec does not exist"),tt.clone().addScaledVector(it,ot)}let O=S.length;function N(tt,it,ot){let st,wt,yt,q=tt.x-it.x,ft=tt.y-it.y,St=ot.x-tt.x,w=ot.y-tt.y,v=q*q+ft*ft,V=q*w-ft*St;if(Math.abs(V)>Number.EPSILON){let X=Math.sqrt(v),lt=Math.sqrt(St*St+w*w),J=it.x-ft/X,Ft=it.y+q/X,Et=ot.x-w/lt,Rt=ot.y+St/lt,Nt=((Et-J)*w-(Rt-Ft)*St)/(q*w-ft*St);st=J+q*Nt-tt.x,wt=Ft+ft*Nt-tt.y;let pt=st*st+wt*wt;if(pt<=2)return new nt(st,wt);yt=Math.sqrt(pt/2)}else{let X=!1;q>Number.EPSILON?St>Number.EPSILON&&(X=!0):q<-Number.EPSILON?St<-Number.EPSILON&&(X=!0):Math.sign(ft)===Math.sign(w)&&(X=!0),X?(st=-ft,wt=q,yt=Math.sqrt(v)):(st=q,wt=ft,yt=Math.sqrt(v/2))}return new nt(st/yt,wt/yt)}let Z=[];for(let tt=0,it=k.length,ot=it-1,st=tt+1;tt<it;tt++,ot++,st++)ot===it&&(ot=0),st===it&&(st=0),Z[tt]=N(k[tt],k[ot],k[st]);let Q=[],ht,Mt=Z.concat();for(let tt=0,it=U;tt<it;tt++){let ot=D[tt];ht=[];for(let st=0,wt=ot.length,yt=wt-1,q=st+1;st<wt;st++,yt++,q++)yt===wt&&(yt=0),q===wt&&(q=0),ht[st]=N(ot[st],ot[yt],ot[q]);Q.push(ht),Mt=Mt.concat(ht)}let _t;if(g===0)_t=Yn.triangulateShape(k,D);else{let tt=[],it=[];for(let ot=0;ot<g;ot++){let st=ot/g,wt=d*Math.cos(st*Math.PI/2),yt=m*Math.sin(st*Math.PI/2)+x;for(let q=0,ft=k.length;q<ft;q++){let St=z(k[q],Z[q],yt);ut(St.x,St.y,-wt),st===0&&tt.push(St)}for(let q=0,ft=U;q<ft;q++){let St=D[q];ht=Q[q];let w=[];for(let v=0,V=St.length;v<V;v++){let X=z(St[v],ht[v],yt);ut(X.x,X.y,-wt),st===0&&w.push(X)}st===0&&it.push(w)}}_t=Yn.triangulateShape(tt,it)}let Ut=_t.length,rt=m+x;for(let tt=0;tt<O;tt++){let it=f?z(S[tt],Mt[tt],rt):S[tt];_?(C.copy(A.normals[0]).multiplyScalar(it.x),T.copy(A.binormals[0]).multiplyScalar(it.y),L.copy(y[0]).add(C).add(T),ut(L.x,L.y,L.z)):ut(it.x,it.y,0)}for(let tt=1;tt<=h;tt++)for(let it=0;it<O;it++){let ot=f?z(S[it],Mt[it],rt):S[it];_?(C.copy(A.normals[tt]).multiplyScalar(ot.x),T.copy(A.binormals[tt]).multiplyScalar(ot.y),L.copy(y[tt]).add(C).add(T),ut(L.x,L.y,L.z)):ut(ot.x,ot.y,u/h*tt)}for(let tt=g-1;tt>=0;tt--){let it=tt/g,ot=d*Math.cos(it*Math.PI/2),st=m*Math.sin(it*Math.PI/2)+x;for(let wt=0,yt=k.length;wt<yt;wt++){let q=z(k[wt],Z[wt],st);ut(q.x,q.y,u+ot)}for(let wt=0,yt=D.length;wt<yt;wt++){let q=D[wt];ht=Q[wt];for(let ft=0,St=q.length;ft<St;ft++){let w=z(q[ft],ht[ft],st);_?ut(w.x,w.y+y[h-1].y,y[h-1].x+ot):ut(w.x,w.y,u+ot)}}}H(),Y();function H(){let tt=s.length/3;if(f){let it=0,ot=O*it;for(let st=0;st<Ut;st++){let wt=_t[st];et(wt[2]+ot,wt[1]+ot,wt[0]+ot)}it=h+g*2,ot=O*it;for(let st=0;st<Ut;st++){let wt=_t[st];et(wt[0]+ot,wt[1]+ot,wt[2]+ot)}}else{for(let it=0;it<Ut;it++){let ot=_t[it];et(ot[2],ot[1],ot[0])}for(let it=0;it<Ut;it++){let ot=_t[it];et(ot[0]+O*h,ot[1]+O*h,ot[2]+O*h)}}n.addGroup(tt,s.length/3-tt,0)}function Y(){let tt=s.length/3,it=0;at(k,it),it+=k.length;for(let ot=0,st=D.length;ot<st;ot++){let wt=D[ot];at(wt,it),it+=wt.length}n.addGroup(tt,s.length/3-tt,1)}function at(tt,it){let ot=tt.length;for(;--ot>=0;){let st=ot,wt=ot-1;wt<0&&(wt=tt.length-1);for(let yt=0,q=h+g*2;yt<q;yt++){let ft=O*yt,St=O*(yt+1),w=it+st+ft,v=it+wt+ft,V=it+wt+St,X=it+st+St;Tt(w,v,V,X)}}}function ut(tt,it,ot){l.push(tt),l.push(it),l.push(ot)}function et(tt,it,ot){Pt(tt),Pt(it),Pt(ot);let st=s.length/3,wt=E.generateTopUV(n,s,st-3,st-2,st-1);P(wt[0]),P(wt[1]),P(wt[2])}function Tt(tt,it,ot,st){Pt(tt),Pt(it),Pt(st),Pt(it),Pt(ot),Pt(st);let wt=s.length/3,yt=E.generateSideWallUV(n,s,wt-6,wt-3,wt-2,wt-1);P(yt[0]),P(yt[1]),P(yt[3]),P(yt[1]),P(yt[2]),P(yt[3])}function Pt(tt){s.push(l[tt*3+0]),s.push(l[tt*3+1]),s.push(l[tt*3+2])}function P(tt){r.push(tt.x),r.push(tt.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON(),e=this.parameters.shapes,n=this.parameters.options;return em(e,n,t)}static fromJSON(t,e){let n=[];for(let r=0,o=t.shapes.length;r<o;r++){let a=e[t.shapes[r]];n.push(a)}let s=t.options.extrudePath;return s!==void 0&&(t.options.extrudePath=new ma[s.type]().fromJSON(s)),new i(n,t.options)}},tm={generateTopUV:function(i,t,e,n,s){let r=t[e*3],o=t[e*3+1],a=t[n*3],l=t[n*3+1],c=t[s*3],h=t[s*3+1];return[new nt(r,o),new nt(a,l),new nt(c,h)]},generateSideWallUV:function(i,t,e,n,s,r){let o=t[e*3],a=t[e*3+1],l=t[e*3+2],c=t[n*3],h=t[n*3+1],u=t[n*3+2],f=t[s*3],d=t[s*3+1],m=t[s*3+2],x=t[r*3],g=t[r*3+1],p=t[r*3+2];return Math.abs(a-h)<Math.abs(o-c)?[new nt(o,1-l),new nt(c,1-u),new nt(f,1-m),new nt(x,1-p)]:[new nt(a,1-l),new nt(h,1-u),new nt(d,1-m),new nt(g,1-p)]}};function em(i,t,e){if(e.shapes=[],Array.isArray(i))for(let n=0,s=i.length;n<s;n++){let r=i[n];e.shapes.push(r.uuid)}else e.shapes.push(i.uuid);return e.options=Object.assign({},t),t.extrudePath!==void 0&&(e.options.extrudePath=t.extrudePath.toJSON()),e}var Bn=class i extends ie{constructor(t=[new nt(0,-.5),new nt(.5,0),new nt(0,.5)],e=12,n=0,s=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:t,segments:e,phiStart:n,phiLength:s},e=Math.floor(e),s=Kt(s,0,Math.PI*2);let r=[],o=[],a=[],l=[],c=[],h=1/e,u=new R,f=new nt,d=new R,m=new R,x=new R,g=0,p=0;for(let E=0;E<=t.length-1;E++)switch(E){case 0:g=t[E+1].x-t[E].x,p=t[E+1].y-t[E].y,d.x=p*1,d.y=-g,d.z=p*0,x.copy(d),d.normalize(),l.push(d.x,d.y,d.z);break;case t.length-1:l.push(x.x,x.y,x.z);break;default:g=t[E+1].x-t[E].x,p=t[E+1].y-t[E].y,d.x=p*1,d.y=-g,d.z=p*0,m.copy(d),d.x+=x.x,d.y+=x.y,d.z+=x.z,d.normalize(),l.push(d.x,d.y,d.z),x.copy(m)}for(let E=0;E<=e;E++){let y=n+E*h*s,_=Math.sin(y),A=Math.cos(y);for(let T=0;T<=t.length-1;T++){u.x=t[T].x*_,u.y=t[T].y,u.z=t[T].x*A,o.push(u.x,u.y,u.z),f.x=E/e,f.y=T/(t.length-1),a.push(f.x,f.y);let C=l[3*T+0]*_,L=l[3*T+1],M=l[3*T+0]*A;c.push(C,L,M)}}for(let E=0;E<e;E++)for(let y=0;y<t.length-1;y++){let _=y+E*t.length,A=_,T=_+t.length,C=_+t.length+1,L=_+1;r.push(A,T,L),r.push(C,L,T)}this.setIndex(r),this.setAttribute("position",new Gt(o,3)),this.setAttribute("uv",new Gt(a,2)),this.setAttribute("normal",new Gt(c,3))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.points,t.segments,t.phiStart,t.phiLength)}};var en=class i extends ie{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};let r=t/2,o=e/2,a=Math.floor(n),l=Math.floor(s),c=a+1,h=l+1,u=t/a,f=e/l,d=[],m=[],x=[],g=[];for(let p=0;p<h;p++){let E=p*f-o;for(let y=0;y<c;y++){let _=y*u-r;m.push(_,-E,0),x.push(0,0,1),g.push(y/a),g.push(1-p/l)}}for(let p=0;p<l;p++)for(let E=0;E<a;E++){let y=E+c*p,_=E+c*(p+1),A=E+1+c*(p+1),T=E+1+c*p;d.push(y,_,T),d.push(_,A,T)}this.setIndex(d),this.setAttribute("position",new Gt(m,3)),this.setAttribute("normal",new Gt(x,3)),this.setAttribute("uv",new Gt(g,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.widthSegments,t.heightSegments)}};var es=class i extends ie{constructor(t=new Fn([new nt(0,.5),new nt(-.5,-.5),new nt(.5,-.5)]),e=12){super(),this.type="ShapeGeometry",this.parameters={shapes:t,curveSegments:e};let n=[],s=[],r=[],o=[],a=0,l=0;if(Array.isArray(t)===!1)c(t);else for(let h=0;h<t.length;h++)c(t[h]),this.addGroup(a,l,h),a+=l,l=0;this.setIndex(n),this.setAttribute("position",new Gt(s,3)),this.setAttribute("normal",new Gt(r,3)),this.setAttribute("uv",new Gt(o,2));function c(h){let u=s.length/3,f=h.extractPoints(e),d=f.shape,m=f.holes;Yn.isClockWise(d)===!1&&(d=d.reverse());for(let g=0,p=m.length;g<p;g++){let E=m[g];Yn.isClockWise(E)===!0&&(m[g]=E.reverse())}let x=Yn.triangulateShape(d,m);for(let g=0,p=m.length;g<p;g++){let E=m[g];d=d.concat(E)}for(let g=0,p=d.length;g<p;g++){let E=d[g];s.push(E.x,E.y,0),r.push(0,0,1),o.push(E.x,E.y)}for(let g=0,p=x.length;g<p;g++){let E=x[g],y=E[0]+u,_=E[1]+u,A=E[2]+u;n.push(y,_,A),l+=3}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON(),e=this.parameters.shapes;return nm(e,t)}static fromJSON(t,e){let n=[];for(let s=0,r=t.shapes.length;s<r;s++){let o=e[t.shapes[s]];n.push(o)}return new i(n,t.curveSegments)}};function nm(i,t){if(t.shapes=[],Array.isArray(i))for(let e=0,n=i.length;e<n;e++){let s=i[e];t.shapes.push(s.uuid)}else t.shapes.push(i.uuid);return t}var Ue=class i extends ie{constructor(t=1,e=32,n=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));let l=Math.min(o+a,Math.PI),c=0,h=[],u=new R,f=new R,d=[],m=[],x=[],g=[];for(let p=0;p<=n;p++){let E=[],y=p/n,_=0;p===0&&o===0?_=.5/e:p===n&&l===Math.PI&&(_=-.5/e);for(let A=0;A<=e;A++){let T=A/e;u.x=-t*Math.cos(s+T*r)*Math.sin(o+y*a),u.y=t*Math.cos(o+y*a),u.z=t*Math.sin(s+T*r)*Math.sin(o+y*a),m.push(u.x,u.y,u.z),f.copy(u).normalize(),x.push(f.x,f.y,f.z),g.push(T+_,1-y),E.push(c++)}h.push(E)}for(let p=0;p<n;p++)for(let E=0;E<e;E++){let y=h[p][E+1],_=h[p][E],A=h[p+1][E],T=h[p+1][E+1];(p!==0||o>0)&&d.push(y,_,T),(p!==n-1||l<Math.PI)&&d.push(_,A,T)}this.setIndex(d),this.setAttribute("position",new Gt(m,3)),this.setAttribute("normal",new Gt(x,3)),this.setAttribute("uv",new Gt(g,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}};var Ne=class i extends ie{constructor(t=1,e=.4,n=12,s=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:s,arc:r},n=Math.floor(n),s=Math.floor(s);let o=[],a=[],l=[],c=[],h=new R,u=new R,f=new R;for(let d=0;d<=n;d++)for(let m=0;m<=s;m++){let x=m/s*r,g=d/n*Math.PI*2;u.x=(t+e*Math.cos(g))*Math.cos(x),u.y=(t+e*Math.cos(g))*Math.sin(x),u.z=e*Math.sin(g),a.push(u.x,u.y,u.z),h.x=t*Math.cos(x),h.y=t*Math.sin(x),f.subVectors(u,h).normalize(),l.push(f.x,f.y,f.z),c.push(m/s),c.push(d/n)}for(let d=1;d<=n;d++)for(let m=1;m<=s;m++){let x=(s+1)*d+m-1,g=(s+1)*(d-1)+m-1,p=(s+1)*(d-1)+m,E=(s+1)*d+m;o.push(x,g,E),o.push(g,p,E)}this.setIndex(o),this.setAttribute("position",new Gt(a,3)),this.setAttribute("normal",new Gt(l,3)),this.setAttribute("uv",new Gt(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}};var ns=class i extends ie{constructor(t=new Jr(new R(-1,-1,0),new R(-1,1,0),new R(1,1,0)),e=64,n=1,s=8,r=!1){super(),this.type="TubeGeometry",this.parameters={path:t,tubularSegments:e,radius:n,radialSegments:s,closed:r};let o=t.computeFrenetFrames(e,r);this.tangents=o.tangents,this.normals=o.normals,this.binormals=o.binormals;let a=new R,l=new R,c=new nt,h=new R,u=[],f=[],d=[],m=[];x(),this.setIndex(m),this.setAttribute("position",new Gt(u,3)),this.setAttribute("normal",new Gt(f,3)),this.setAttribute("uv",new Gt(d,2));function x(){for(let y=0;y<e;y++)g(y);g(r===!1?e:0),E(),p()}function g(y){h=t.getPointAt(y/e,h);let _=o.normals[y],A=o.binormals[y];for(let T=0;T<=s;T++){let C=T/s*Math.PI*2,L=Math.sin(C),M=-Math.cos(C);l.x=M*_.x+L*A.x,l.y=M*_.y+L*A.y,l.z=M*_.z+L*A.z,l.normalize(),f.push(l.x,l.y,l.z),a.x=h.x+n*l.x,a.y=h.y+n*l.y,a.z=h.z+n*l.z,u.push(a.x,a.y,a.z)}}function p(){for(let y=1;y<=e;y++)for(let _=1;_<=s;_++){let A=(s+1)*(y-1)+(_-1),T=(s+1)*y+(_-1),C=(s+1)*y+_,L=(s+1)*(y-1)+_;m.push(A,T,L),m.push(T,C,L)}}function E(){for(let y=0;y<=e;y++)for(let _=0;_<=s;_++)c.x=y/e,c.y=_/s,d.push(c.x,c.y)}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON();return t.path=this.parameters.path.toJSON(),t}static fromJSON(t){return new i(new ma[t.path.type]().fromJSON(t.path),t.tubularSegments,t.radius,t.radialSegments,t.closed)}};var eo=class extends Se{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},oe=class extends Nn{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new vt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new vt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Rl,this.normalScale=new nt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ke,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}},he=class extends oe{constructor(t){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new nt(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Kt(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(e){this.ior=(1+.4*e)/(1-.4*e)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new vt(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new vt(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new vt(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(t)}get anisotropy(){return this._anisotropy}set anisotropy(t){this._anisotropy>0!=t>0&&this.version++,this._anisotropy=t}get clearcoat(){return this._clearcoat}set clearcoat(t){this._clearcoat>0!=t>0&&this.version++,this._clearcoat=t}get iridescence(){return this._iridescence}set iridescence(t){this._iridescence>0!=t>0&&this.version++,this._iridescence=t}get dispersion(){return this._dispersion}set dispersion(t){this._dispersion>0!=t>0&&this.version++,this._dispersion=t}get sheen(){return this._sheen}set sheen(t){this._sheen>0!=t>0&&this.version++,this._sheen=t}get transmission(){return this._transmission}set transmission(t){this._transmission>0!=t>0&&this.version++,this._transmission=t}copy(t){return super.copy(t),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=t.anisotropy,this.anisotropyRotation=t.anisotropyRotation,this.anisotropyMap=t.anisotropyMap,this.clearcoat=t.clearcoat,this.clearcoatMap=t.clearcoatMap,this.clearcoatRoughness=t.clearcoatRoughness,this.clearcoatRoughnessMap=t.clearcoatRoughnessMap,this.clearcoatNormalMap=t.clearcoatNormalMap,this.clearcoatNormalScale.copy(t.clearcoatNormalScale),this.dispersion=t.dispersion,this.ior=t.ior,this.iridescence=t.iridescence,this.iridescenceMap=t.iridescenceMap,this.iridescenceIOR=t.iridescenceIOR,this.iridescenceThicknessRange=[...t.iridescenceThicknessRange],this.iridescenceThicknessMap=t.iridescenceThicknessMap,this.sheen=t.sheen,this.sheenColor.copy(t.sheenColor),this.sheenColorMap=t.sheenColorMap,this.sheenRoughness=t.sheenRoughness,this.sheenRoughnessMap=t.sheenRoughnessMap,this.transmission=t.transmission,this.transmissionMap=t.transmissionMap,this.thickness=t.thickness,this.thicknessMap=t.thicknessMap,this.attenuationDistance=t.attenuationDistance,this.attenuationColor.copy(t.attenuationColor),this.specularIntensity=t.specularIntensity,this.specularIntensityMap=t.specularIntensityMap,this.specularColor.copy(t.specularColor),this.specularColorMap=t.specularColorMap,this}};var no=class extends Nn{constructor(t){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new vt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new vt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Rl,this.normalScale=new nt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ke,this.combine=Ba,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}},xa=class extends Nn{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=qu,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},_a=class extends Nn{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}};function Qo(i,t){return!i||i.constructor===t?i:typeof t.BYTES_PER_ELEMENT=="number"?new t(i):Array.prototype.slice.call(i)}function im(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}var is=class{constructor(t,e,n,s){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,n=this._cachedIndex,s=e[n],r=e[n-1];n:{t:{let o;e:{i:if(!(t<s)){for(let a=n+2;;){if(s===void 0){if(t<r)break i;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(r=s,s=e[++n],t<s)break t}o=e.length;break e}if(!(t>=r)){let a=e[1];t<a&&(n=2,r=a);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(s=r,r=e[--n-1],t>=r)break t}o=n,n=0;break e}break n}for(;n<o;){let a=n+o>>>1;t<e[a]?o=a:n=a+1}if(s=e[n],r=e[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,t,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=t*s;for(let o=0;o!==s;++o)e[o]=n[r+o];return e}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},ya=class extends is{constructor(t,e,n,s){super(t,e,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Ic,endingEnd:Ic}}intervalChanged_(t,e,n){let s=this.parameterPositions,r=t-2,o=t+1,a=s[r],l=s[o];if(a===void 0)switch(this.getSettings_().endingStart){case Lc:r=t,a=2*e-n;break;case Dc:r=s.length-2,a=e+s[r]-s[r+1];break;default:r=t,a=n}if(l===void 0)switch(this.getSettings_().endingEnd){case Lc:o=t,l=2*n-e;break;case Dc:o=1,l=n+s[1]-s[0];break;default:o=t-1,l=e}let c=(n-e)*.5,h=this.valueSize;this._weightPrev=c/(e-a),this._weightNext=c/(l-n),this._offsetPrev=r*h,this._offsetNext=o*h}interpolate_(t,e,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,h=this._offsetPrev,u=this._offsetNext,f=this._weightPrev,d=this._weightNext,m=(n-e)/(s-e),x=m*m,g=x*m,p=-f*g+2*f*x-f*m,E=(1+f)*g+(-1.5-2*f)*x+(-.5+f)*m+1,y=(-1-d)*g+(1.5+d)*x+.5*m,_=d*g-d*x;for(let A=0;A!==a;++A)r[A]=p*o[h+A]+E*o[c+A]+y*o[l+A]+_*o[u+A];return r}},va=class extends is{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,h=(n-e)/(s-e),u=1-h;for(let f=0;f!==a;++f)r[f]=o[c+f]*u+o[l+f]*h;return r}},Ma=class extends is{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t){return this.copySampleValue_(t-1)}},Mn=class{constructor(t,e,n,s){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=Qo(e,this.TimeBufferType),this.values=Qo(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:Qo(t.times,Array),values:Qo(t.values,Array)};let s=t.getInterpolation();s!==t.DefaultInterpolation&&(n.interpolation=s)}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new Ma(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new va(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new ya(this.times,this.values,this.getValueSize(),t)}setInterpolation(t){let e;switch(t){case Ir:e=this.InterpolantFactoryMethodDiscrete;break;case ia:e=this.InterpolantFactoryMethodLinear;break;case jo:e=this.InterpolantFactoryMethodSmooth;break}if(e===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Ir;case this.InterpolantFactoryMethodLinear:return ia;case this.InterpolantFactoryMethodSmooth:return jo}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]+=t}return this}scale(t){if(t!==1){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]*=t}return this}trim(t,e){let n=this.times,s=n.length,r=0,o=s-1;for(;r!==s&&n[r]<t;)++r;for(;o!==-1&&n[o]>e;)--o;if(++o,r!==0||o!==s){r>=o&&(o=Math.max(o,1),r=o-1);let a=this.getValueSize();this.times=n.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),t=!1);let n=this.times,s=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),t=!1);let o=null;for(let a=0;a!==r;a++){let l=n[a];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,l),t=!1;break}if(o!==null&&o>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,l,o),t=!1;break}o=l}if(s!==void 0&&im(s))for(let a=0,l=s.length;a!==l;++a){let c=s[a];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,c),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===jo,r=t.length-1,o=1;for(let a=1;a<r;++a){let l=!1,c=t[a],h=t[a+1];if(c!==h&&(a!==1||c!==t[0]))if(s)l=!0;else{let u=a*n,f=u-n,d=u+n;for(let m=0;m!==n;++m){let x=e[u+m];if(x!==e[f+m]||x!==e[d+m]){l=!0;break}}}if(l){if(a!==o){t[o]=t[a];let u=a*n,f=o*n;for(let d=0;d!==n;++d)e[f+d]=e[u+d]}++o}}if(r>0){t[o]=t[r];for(let a=r*n,l=o*n,c=0;c!==n;++c)e[l+c]=e[a+c];++o}return o!==t.length?(this.times=t.slice(0,o),this.values=e.slice(0,o*n)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),n=this.constructor,s=new n(this.name,t,e);return s.createInterpolant=this.createInterpolant,s}};Mn.prototype.ValueTypeName="";Mn.prototype.TimeBufferType=Float32Array;Mn.prototype.ValueBufferType=Float32Array;Mn.prototype.DefaultInterpolation=ia;var Ci=class extends Mn{constructor(t,e,n){super(t,e,n)}};Ci.prototype.ValueTypeName="bool";Ci.prototype.ValueBufferType=Array;Ci.prototype.DefaultInterpolation=Ir;Ci.prototype.InterpolantFactoryMethodLinear=void 0;Ci.prototype.InterpolantFactoryMethodSmooth=void 0;var Sa=class extends Mn{constructor(t,e,n,s){super(t,e,n,s)}};Sa.prototype.ValueTypeName="color";var Ea=class extends Mn{constructor(t,e,n,s){super(t,e,n,s)}};Ea.prototype.ValueTypeName="number";var ba=class extends is{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(n-e)/(s-e),c=t*a;for(let h=c+a;c!==h;c+=4)tn.slerpFlat(r,0,o,c-a,o,c,l);return r}},io=class extends Mn{constructor(t,e,n,s){super(t,e,n,s)}InterpolantFactoryMethodLinear(t){return new ba(this.times,this.values,this.getValueSize(),t)}};io.prototype.ValueTypeName="quaternion";io.prototype.InterpolantFactoryMethodSmooth=void 0;var Pi=class extends Mn{constructor(t,e,n){super(t,e,n)}};Pi.prototype.ValueTypeName="string";Pi.prototype.ValueBufferType=Array;Pi.prototype.DefaultInterpolation=Ir;Pi.prototype.InterpolantFactoryMethodLinear=void 0;Pi.prototype.InterpolantFactoryMethodSmooth=void 0;var Ta=class extends Mn{constructor(t,e,n,s){super(t,e,n,s)}};Ta.prototype.ValueTypeName="vector";var wa=class{constructor(t,e,n){let s=this,r=!1,o=0,a=0,l,c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this.abortController=new AbortController,this.itemStart=function(h){a++,r===!1&&s.onStart!==void 0&&s.onStart(h,o,a),r=!0},this.itemEnd=function(h){o++,s.onProgress!==void 0&&s.onProgress(h,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,u){return c.push(h,u),this},this.removeHandler=function(h){let u=c.indexOf(h);return u!==-1&&c.splice(u,2),this},this.getHandler=function(h){for(let u=0,f=c.length;u<f;u+=2){let d=c[u],m=c[u+1];if(d.global&&(d.lastIndex=0),d.test(h))return m}return null},this.abort=function(){return this.abortController.abort(),this.abortController=new AbortController,this}}},hd=new wa,Aa=class{constructor(t){this.manager=t!==void 0?t:hd,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){let n=this;return new Promise(function(s,r){n.load(t,s,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}abort(){return this}};Aa.DEFAULT_MATERIAL_NAME="__DEFAULT";var ss=class extends ce{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new vt(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}},so=class extends ss{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(ce.DEFAULT_UP),this.updateMatrix(),this.groundColor=new vt(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}},Cc=new ne,vu=new R,Mu=new R,ro=class{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new nt(512,512),this.mapType=Hn,this.map=null,this.mapPass=null,this.matrix=new ne,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Ws,this._frameExtents=new nt(1,1),this._viewportCount=1,this._viewports=[new fe(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera,n=this.matrix;vu.setFromMatrixPosition(t.matrixWorld),e.position.copy(vu),Mu.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Mu),e.updateMatrixWorld(),Cc.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Cc,e.coordinateSystem,e.reversedDepth),e.reversedDepth?n.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Cc)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}},Hc=class extends ro{constructor(){super(new $e(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(t){let e=this.camera,n=$i*2*t.angle*this.focus,s=this.mapSize.width/this.mapSize.height*this.aspect,r=t.distance||e.far;(n!==e.fov||s!==e.aspect||r!==e.far)&&(e.fov=n,e.aspect=s,e.far=r,e.updateProjectionMatrix()),super.updateMatrices(t)}copy(t){return super.copy(t),this.focus=t.focus,this}},$s=class extends ss{constructor(t,e,n=0,s=Math.PI/3,r=0,o=2){super(t,e),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(ce.DEFAULT_UP),this.updateMatrix(),this.target=new ce,this.distance=n,this.angle=s,this.penumbra=r,this.decay=o,this.map=null,this.shadow=new Hc}get power(){return this.intensity*Math.PI}set power(t){this.intensity=t/Math.PI}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.angle=t.angle,this.penumbra=t.penumbra,this.decay=t.decay,this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}},Su=new ne,Tr=new R,Pc=new R,zc=class extends ro{constructor(){super(new $e(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new nt(4,2),this._viewportCount=6,this._viewports=[new fe(2,1,1,1),new fe(0,1,1,1),new fe(3,1,1,1),new fe(1,1,1,1),new fe(3,0,1,1),new fe(1,0,1,1)],this._cubeDirections=[new R(1,0,0),new R(-1,0,0),new R(0,0,1),new R(0,0,-1),new R(0,1,0),new R(0,-1,0)],this._cubeUps=[new R(0,1,0),new R(0,1,0),new R(0,1,0),new R(0,1,0),new R(0,0,1),new R(0,0,-1)]}updateMatrices(t,e=0){let n=this.camera,s=this.matrix,r=t.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),Tr.setFromMatrixPosition(t.matrixWorld),n.position.copy(Tr),Pc.copy(n.position),Pc.add(this._cubeDirections[e]),n.up.copy(this._cubeUps[e]),n.lookAt(Pc),n.updateMatrixWorld(),s.makeTranslation(-Tr.x,-Tr.y,-Tr.z),Su.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Su,n.coordinateSystem,n.reversedDepth)}},rs=class extends ss{constructor(t,e,n=0,s=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new zc}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}},os=class extends zr{constructor(t=-1,e=1,n=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-t,o=n+t,a=s+e,l=s-e;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},kc=class extends ro{constructor(){super(new os(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Js=class extends ss{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(ce.DEFAULT_UP),this.updateMatrix(),this.target=new ce,this.shadow=new kc}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}};var Ra=class extends $e{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}},oo=class{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){let e=performance.now();t=(e-this.oldTime)/1e3,this.oldTime=e,this.elapsedTime+=t}return t}};var lh="\\[\\]\\.:\\/",sm=new RegExp("["+lh+"]","g"),ch="[^"+lh+"]",rm="[^"+lh.replace("\\.","")+"]",om=/((?:WC+[\/:])*)/.source.replace("WC",ch),am=/(WCOD+)?/.source.replace("WCOD",rm),lm=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",ch),cm=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",ch),hm=new RegExp("^"+om+am+lm+cm+"$"),um=["material","materials","bones","map"],Vc=class{constructor(t,e,n){let s=n||be.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,s)}getValue(t,e){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(t,e)}setValue(t,e){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}},be=class i{constructor(t,e,n){this.path=e,this.parsedPath=n||i.parseTrackName(e),this.node=i.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){return t&&t.isAnimationObjectGroup?new i.Composite(t,e,n):new i(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(sm,"")}static parseTrackName(t){let e=hm.exec(t);if(e===null)throw new Error("PropertyBinding: Cannot parse trackName: "+t);let n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);um.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){let n=function(r){for(let o=0;o<r.length;o++){let a=r[o];if(a.name===e||a.uuid===e)return a;let l=n(a.children);if(l)return l}return null},s=n(t.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)t[e++]=n[s]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,n=e.objectName,s=e.propertyName,r=e.propertyIndex;if(t||(t=i.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=e.objectIndex;switch(n){case"materials":if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let h=0;h<t.length;h++)if(t[h].name===c){c=h;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(c!==void 0){if(t[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[c]}}let o=t[s];if(o===void 0){let c=e.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",t);return}let a=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?a=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!t.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};be.Composite=Vc;be.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};be.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};be.prototype.GetterByBindingType=[be.prototype._getValue_direct,be.prototype._getValue_array,be.prototype._getValue_arrayElement,be.prototype._getValue_toArray];be.prototype.SetterByBindingTypeAndVersioning=[[be.prototype._setValue_direct,be.prototype._setValue_direct_setNeedsUpdate,be.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[be.prototype._setValue_array,be.prototype._setValue_array_setNeedsUpdate,be.prototype._setValue_array_setMatrixWorldNeedsUpdate],[be.prototype._setValue_arrayElement,be.prototype._setValue_arrayElement_setNeedsUpdate,be.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[be.prototype._setValue_fromArray,be.prototype._setValue_fromArray_setNeedsUpdate,be.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var py=new Float32Array(1);function hh(i,t,e,n){let s=dm(n);switch(e){case Qc:return i*t;case Ja:return i*t/s.components*s.byteLength;case Ka:return i*t/s.components*s.byteLength;case th:return i*t*2/s.components*s.byteLength;case Qa:return i*t*2/s.components*s.byteLength;case jc:return i*t*3/s.components*s.byteLength;case Rn:return i*t*4/s.components*s.byteLength;case ja:return i*t*4/s.components*s.byteLength;case co:case ho:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case uo:case fo:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case el:case il:return Math.max(i,16)*Math.max(t,8)/4;case tl:case nl:return Math.max(i,8)*Math.max(t,8)/2;case sl:case rl:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case ol:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case al:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case ll:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case cl:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case hl:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case ul:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case dl:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case fl:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case pl:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case ml:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case gl:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case xl:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case _l:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case yl:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case vl:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case Ml:case Sl:case El:return Math.ceil(i/4)*Math.ceil(t/4)*16;case bl:case Tl:return Math.ceil(i/4)*Math.ceil(t/4)*8;case wl:case Al:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function dm(i){switch(i){case Hn:case Zc:return{byteLength:1,components:1};case Qs:case $c:case pn:return{byteLength:2,components:1};case Za:case $a:return{byteLength:2,components:4};case Li:case Ya:case zn:return{byteLength:4,components:1};case Jc:case Kc:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"180"}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="180");function Ud(){let i=null,t=!1,e=null,n=null;function s(r,o){e(r,o),n=i.requestAnimationFrame(s)}return{start:function(){t!==!0&&e!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function xm(i){let t=new WeakMap;function e(a,l){let c=a.array,h=a.usage,u=c.byteLength,f=i.createBuffer();i.bindBuffer(l,f),i.bufferData(l,c,h),a.onUploadCallback();let d;if(c instanceof Float32Array)d=i.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)d=i.HALF_FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?d=i.HALF_FLOAT:d=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)d=i.SHORT;else if(c instanceof Uint32Array)d=i.UNSIGNED_INT;else if(c instanceof Int32Array)d=i.INT;else if(c instanceof Int8Array)d=i.BYTE;else if(c instanceof Uint8Array)d=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)d=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:f,type:d,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:u}}function n(a,l,c){let h=l.array,u=l.updateRanges;if(i.bindBuffer(c,a),u.length===0)i.bufferSubData(c,0,h);else{u.sort((d,m)=>d.start-m.start);let f=0;for(let d=1;d<u.length;d++){let m=u[f],x=u[d];x.start<=m.start+m.count+1?m.count=Math.max(m.count,x.start+x.count-m.start):(++f,u[f]=x)}u.length=f+1;for(let d=0,m=u.length;d<m;d++){let x=u[d];i.bufferSubData(c,x.start*h.BYTES_PER_ELEMENT,h,x.start,x.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);let l=t.get(a);l&&(i.deleteBuffer(l.buffer),t.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let h=t.get(a);(!h||h.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let c=t.get(a);if(c===void 0)t.set(a,e(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,a,l),c.version=a.version}}return{get:s,remove:r,update:o}}var _m=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,ym=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,vm=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Mm=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Sm=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Em=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,bm=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Tm=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,wm=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,Am=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Rm=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Cm=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Pm=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,Im=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Lm=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Dm=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,Um=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Nm=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Fm=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Bm=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Om=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Hm=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,zm=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,km=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Vm=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,Gm=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,Wm=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Xm=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,qm=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Ym=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Zm="gl_FragColor = linearToOutputTexel( gl_FragColor );",$m=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Jm=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,Km=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Qm=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,jm=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,t0=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,e0=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,n0=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,i0=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,s0=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,r0=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,o0=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,a0=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,l0=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,c0=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,h0=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,u0=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,d0=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,f0=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,p0=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,m0=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,g0=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,x0=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,_0=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,y0=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,v0=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,M0=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,S0=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,E0=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,b0=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,T0=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,w0=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,A0=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,R0=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,C0=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,P0=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,I0=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,L0=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,D0=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,U0=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,N0=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,F0=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,B0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,O0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,H0=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,z0=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,k0=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,V0=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,G0=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,W0=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,X0=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,q0=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,Y0=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Z0=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,$0=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,J0=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,K0=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Q0=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,j0=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		float depth = unpackRGBAToDepth( texture2D( depths, uv ) );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			return step( depth, compare );
		#else
			return step( compare, depth );
		#endif
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow( sampler2D shadow, vec2 uv, float compare ) {
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			float hard_shadow = step( distribution.x, compare );
		#else
			float hard_shadow = step( compare, distribution.x );
		#endif
		if ( hard_shadow != 1.0 ) {
			float distance = compare - distribution.x;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,tg=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,eg=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,ng=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,ig=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,sg=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,rg=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,og=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,ag=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,lg=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,cg=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,hg=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,ug=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,dg=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,fg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,pg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,mg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,gg=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,xg=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,_g=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,yg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,vg=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Mg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Sg=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Eg=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,bg=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,Tg=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,wg=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,Ag=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Rg=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Cg=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Pg=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Ig=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,Lg=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Dg=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Ug=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Ng=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,Fg=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Bg=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Og=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Hg=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,zg=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,kg=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,Vg=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Gg=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Wg=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Xg=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,qg=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Yg=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Zg=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,$g=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Jg=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Qt={alphahash_fragment:_m,alphahash_pars_fragment:ym,alphamap_fragment:vm,alphamap_pars_fragment:Mm,alphatest_fragment:Sm,alphatest_pars_fragment:Em,aomap_fragment:bm,aomap_pars_fragment:Tm,batching_pars_vertex:wm,batching_vertex:Am,begin_vertex:Rm,beginnormal_vertex:Cm,bsdfs:Pm,iridescence_fragment:Im,bumpmap_pars_fragment:Lm,clipping_planes_fragment:Dm,clipping_planes_pars_fragment:Um,clipping_planes_pars_vertex:Nm,clipping_planes_vertex:Fm,color_fragment:Bm,color_pars_fragment:Om,color_pars_vertex:Hm,color_vertex:zm,common:km,cube_uv_reflection_fragment:Vm,defaultnormal_vertex:Gm,displacementmap_pars_vertex:Wm,displacementmap_vertex:Xm,emissivemap_fragment:qm,emissivemap_pars_fragment:Ym,colorspace_fragment:Zm,colorspace_pars_fragment:$m,envmap_fragment:Jm,envmap_common_pars_fragment:Km,envmap_pars_fragment:Qm,envmap_pars_vertex:jm,envmap_physical_pars_fragment:h0,envmap_vertex:t0,fog_vertex:e0,fog_pars_vertex:n0,fog_fragment:i0,fog_pars_fragment:s0,gradientmap_pars_fragment:r0,lightmap_pars_fragment:o0,lights_lambert_fragment:a0,lights_lambert_pars_fragment:l0,lights_pars_begin:c0,lights_toon_fragment:u0,lights_toon_pars_fragment:d0,lights_phong_fragment:f0,lights_phong_pars_fragment:p0,lights_physical_fragment:m0,lights_physical_pars_fragment:g0,lights_fragment_begin:x0,lights_fragment_maps:_0,lights_fragment_end:y0,logdepthbuf_fragment:v0,logdepthbuf_pars_fragment:M0,logdepthbuf_pars_vertex:S0,logdepthbuf_vertex:E0,map_fragment:b0,map_pars_fragment:T0,map_particle_fragment:w0,map_particle_pars_fragment:A0,metalnessmap_fragment:R0,metalnessmap_pars_fragment:C0,morphinstance_vertex:P0,morphcolor_vertex:I0,morphnormal_vertex:L0,morphtarget_pars_vertex:D0,morphtarget_vertex:U0,normal_fragment_begin:N0,normal_fragment_maps:F0,normal_pars_fragment:B0,normal_pars_vertex:O0,normal_vertex:H0,normalmap_pars_fragment:z0,clearcoat_normal_fragment_begin:k0,clearcoat_normal_fragment_maps:V0,clearcoat_pars_fragment:G0,iridescence_pars_fragment:W0,opaque_fragment:X0,packing:q0,premultiplied_alpha_fragment:Y0,project_vertex:Z0,dithering_fragment:$0,dithering_pars_fragment:J0,roughnessmap_fragment:K0,roughnessmap_pars_fragment:Q0,shadowmap_pars_fragment:j0,shadowmap_pars_vertex:tg,shadowmap_vertex:eg,shadowmask_pars_fragment:ng,skinbase_vertex:ig,skinning_pars_vertex:sg,skinning_vertex:rg,skinnormal_vertex:og,specularmap_fragment:ag,specularmap_pars_fragment:lg,tonemapping_fragment:cg,tonemapping_pars_fragment:hg,transmission_fragment:ug,transmission_pars_fragment:dg,uv_pars_fragment:fg,uv_pars_vertex:pg,uv_vertex:mg,worldpos_vertex:gg,background_vert:xg,background_frag:_g,backgroundCube_vert:yg,backgroundCube_frag:vg,cube_vert:Mg,cube_frag:Sg,depth_vert:Eg,depth_frag:bg,distanceRGBA_vert:Tg,distanceRGBA_frag:wg,equirect_vert:Ag,equirect_frag:Rg,linedashed_vert:Cg,linedashed_frag:Pg,meshbasic_vert:Ig,meshbasic_frag:Lg,meshlambert_vert:Dg,meshlambert_frag:Ug,meshmatcap_vert:Ng,meshmatcap_frag:Fg,meshnormal_vert:Bg,meshnormal_frag:Og,meshphong_vert:Hg,meshphong_frag:zg,meshphysical_vert:kg,meshphysical_frag:Vg,meshtoon_vert:Gg,meshtoon_frag:Wg,points_vert:Xg,points_frag:qg,shadow_vert:Yg,shadow_frag:Zg,sprite_vert:$g,sprite_frag:Jg},It={common:{diffuse:{value:new vt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Jt},alphaMap:{value:null},alphaMapTransform:{value:new Jt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Jt}},envmap:{envMap:{value:null},envMapRotation:{value:new Jt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Jt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Jt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Jt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Jt},normalScale:{value:new nt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Jt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Jt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Jt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Jt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new vt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new vt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Jt},alphaTest:{value:0},uvTransform:{value:new Jt}},sprite:{diffuse:{value:new vt(16777215)},opacity:{value:1},center:{value:new nt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Jt},alphaMap:{value:null},alphaMapTransform:{value:new Jt},alphaTest:{value:0}}},jn={basic:{uniforms:an([It.common,It.specularmap,It.envmap,It.aomap,It.lightmap,It.fog]),vertexShader:Qt.meshbasic_vert,fragmentShader:Qt.meshbasic_frag},lambert:{uniforms:an([It.common,It.specularmap,It.envmap,It.aomap,It.lightmap,It.emissivemap,It.bumpmap,It.normalmap,It.displacementmap,It.fog,It.lights,{emissive:{value:new vt(0)}}]),vertexShader:Qt.meshlambert_vert,fragmentShader:Qt.meshlambert_frag},phong:{uniforms:an([It.common,It.specularmap,It.envmap,It.aomap,It.lightmap,It.emissivemap,It.bumpmap,It.normalmap,It.displacementmap,It.fog,It.lights,{emissive:{value:new vt(0)},specular:{value:new vt(1118481)},shininess:{value:30}}]),vertexShader:Qt.meshphong_vert,fragmentShader:Qt.meshphong_frag},standard:{uniforms:an([It.common,It.envmap,It.aomap,It.lightmap,It.emissivemap,It.bumpmap,It.normalmap,It.displacementmap,It.roughnessmap,It.metalnessmap,It.fog,It.lights,{emissive:{value:new vt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Qt.meshphysical_vert,fragmentShader:Qt.meshphysical_frag},toon:{uniforms:an([It.common,It.aomap,It.lightmap,It.emissivemap,It.bumpmap,It.normalmap,It.displacementmap,It.gradientmap,It.fog,It.lights,{emissive:{value:new vt(0)}}]),vertexShader:Qt.meshtoon_vert,fragmentShader:Qt.meshtoon_frag},matcap:{uniforms:an([It.common,It.bumpmap,It.normalmap,It.displacementmap,It.fog,{matcap:{value:null}}]),vertexShader:Qt.meshmatcap_vert,fragmentShader:Qt.meshmatcap_frag},points:{uniforms:an([It.points,It.fog]),vertexShader:Qt.points_vert,fragmentShader:Qt.points_frag},dashed:{uniforms:an([It.common,It.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Qt.linedashed_vert,fragmentShader:Qt.linedashed_frag},depth:{uniforms:an([It.common,It.displacementmap]),vertexShader:Qt.depth_vert,fragmentShader:Qt.depth_frag},normal:{uniforms:an([It.common,It.bumpmap,It.normalmap,It.displacementmap,{opacity:{value:1}}]),vertexShader:Qt.meshnormal_vert,fragmentShader:Qt.meshnormal_frag},sprite:{uniforms:an([It.sprite,It.fog]),vertexShader:Qt.sprite_vert,fragmentShader:Qt.sprite_frag},background:{uniforms:{uvTransform:{value:new Jt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Qt.background_vert,fragmentShader:Qt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Jt}},vertexShader:Qt.backgroundCube_vert,fragmentShader:Qt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Qt.cube_vert,fragmentShader:Qt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Qt.equirect_vert,fragmentShader:Qt.equirect_frag},distanceRGBA:{uniforms:an([It.common,It.displacementmap,{referencePosition:{value:new R},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Qt.distanceRGBA_vert,fragmentShader:Qt.distanceRGBA_frag},shadow:{uniforms:an([It.lights,It.fog,{color:{value:new vt(0)},opacity:{value:1}}]),vertexShader:Qt.shadow_vert,fragmentShader:Qt.shadow_frag}};jn.physical={uniforms:an([jn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Jt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Jt},clearcoatNormalScale:{value:new nt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Jt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Jt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Jt},sheen:{value:0},sheenColor:{value:new vt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Jt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Jt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Jt},transmissionSamplerSize:{value:new nt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Jt},attenuationDistance:{value:0},attenuationColor:{value:new vt(0)},specularColor:{value:new vt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Jt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Jt},anisotropyVector:{value:new nt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Jt}}]),vertexShader:Qt.meshphysical_vert,fragmentShader:Qt.meshphysical_frag};var Cl={r:0,b:0,g:0},hs=new Ke,Kg=new ne;function Qg(i,t,e,n,s,r,o){let a=new vt(0),l=r===!0?0:1,c,h,u=null,f=0,d=null;function m(y){let _=y.isScene===!0?y.background:null;return _&&_.isTexture&&(_=(y.backgroundBlurriness>0?e:t).get(_)),_}function x(y){let _=!1,A=m(y);A===null?p(a,l):A&&A.isColor&&(p(A,1),_=!0);let T=i.xr.getEnvironmentBlendMode();T==="additive"?n.buffers.color.setClear(0,0,0,1,o):T==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(i.autoClear||_)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function g(y,_){let A=m(_);A&&(A.isCubeTexture||A.mapping===ao)?(h===void 0&&(h=new j(new Le(1,1,1),new Se({name:"BackgroundCubeMaterial",uniforms:cs(jn.backgroundCube.uniforms),vertexShader:jn.backgroundCube.vertexShader,fragmentShader:jn.backgroundCube.fragmentShader,side:nn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(T,C,L){this.matrixWorld.copyPosition(L.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),hs.copy(_.backgroundRotation),hs.x*=-1,hs.y*=-1,hs.z*=-1,A.isCubeTexture&&A.isRenderTargetTexture===!1&&(hs.y*=-1,hs.z*=-1),h.material.uniforms.envMap.value=A,h.material.uniforms.flipEnvMap.value=A.isCubeTexture&&A.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=_.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(Kg.makeRotationFromEuler(hs)),h.material.toneMapped=ee.getTransfer(A.colorSpace)!==re,(u!==A||f!==A.version||d!==i.toneMapping)&&(h.material.needsUpdate=!0,u=A,f=A.version,d=i.toneMapping),h.layers.enableAll(),y.unshift(h,h.geometry,h.material,0,0,null)):A&&A.isTexture&&(c===void 0&&(c=new j(new en(2,2),new Se({name:"BackgroundMaterial",uniforms:cs(jn.background.uniforms),vertexShader:jn.background.vertexShader,fragmentShader:jn.background.fragmentShader,side:hi,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=A,c.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,c.material.toneMapped=ee.getTransfer(A.colorSpace)!==re,A.matrixAutoUpdate===!0&&A.updateMatrix(),c.material.uniforms.uvTransform.value.copy(A.matrix),(u!==A||f!==A.version||d!==i.toneMapping)&&(c.material.needsUpdate=!0,u=A,f=A.version,d=i.toneMapping),c.layers.enableAll(),y.unshift(c,c.geometry,c.material,0,0,null))}function p(y,_){y.getRGB(Cl,oh(i)),n.buffers.color.setClear(Cl.r,Cl.g,Cl.b,_,o)}function E(){h!==void 0&&(h.geometry.dispose(),h.material.dispose(),h=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return a},setClearColor:function(y,_=1){a.set(y),l=_,p(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(y){l=y,p(a,l)},render:x,addToRenderList:g,dispose:E}}function jg(i,t){let e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=f(null),r=s,o=!1;function a(S,D,B,I,U){let k=!1,z=u(I,B,D);r!==z&&(r=z,c(r.object)),k=d(S,I,B,U),k&&m(S,I,B,U),U!==null&&t.update(U,i.ELEMENT_ARRAY_BUFFER),(k||o)&&(o=!1,_(S,D,B,I),U!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(U).buffer))}function l(){return i.createVertexArray()}function c(S){return i.bindVertexArray(S)}function h(S){return i.deleteVertexArray(S)}function u(S,D,B){let I=B.wireframe===!0,U=n[S.id];U===void 0&&(U={},n[S.id]=U);let k=U[D.id];k===void 0&&(k={},U[D.id]=k);let z=k[I];return z===void 0&&(z=f(l()),k[I]=z),z}function f(S){let D=[],B=[],I=[];for(let U=0;U<e;U++)D[U]=0,B[U]=0,I[U]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:D,enabledAttributes:B,attributeDivisors:I,object:S,attributes:{},index:null}}function d(S,D,B,I){let U=r.attributes,k=D.attributes,z=0,O=B.getAttributes();for(let N in O)if(O[N].location>=0){let Q=U[N],ht=k[N];if(ht===void 0&&(N==="instanceMatrix"&&S.instanceMatrix&&(ht=S.instanceMatrix),N==="instanceColor"&&S.instanceColor&&(ht=S.instanceColor)),Q===void 0||Q.attribute!==ht||ht&&Q.data!==ht.data)return!0;z++}return r.attributesNum!==z||r.index!==I}function m(S,D,B,I){let U={},k=D.attributes,z=0,O=B.getAttributes();for(let N in O)if(O[N].location>=0){let Q=k[N];Q===void 0&&(N==="instanceMatrix"&&S.instanceMatrix&&(Q=S.instanceMatrix),N==="instanceColor"&&S.instanceColor&&(Q=S.instanceColor));let ht={};ht.attribute=Q,Q&&Q.data&&(ht.data=Q.data),U[N]=ht,z++}r.attributes=U,r.attributesNum=z,r.index=I}function x(){let S=r.newAttributes;for(let D=0,B=S.length;D<B;D++)S[D]=0}function g(S){p(S,0)}function p(S,D){let B=r.newAttributes,I=r.enabledAttributes,U=r.attributeDivisors;B[S]=1,I[S]===0&&(i.enableVertexAttribArray(S),I[S]=1),U[S]!==D&&(i.vertexAttribDivisor(S,D),U[S]=D)}function E(){let S=r.newAttributes,D=r.enabledAttributes;for(let B=0,I=D.length;B<I;B++)D[B]!==S[B]&&(i.disableVertexAttribArray(B),D[B]=0)}function y(S,D,B,I,U,k,z){z===!0?i.vertexAttribIPointer(S,D,B,U,k):i.vertexAttribPointer(S,D,B,I,U,k)}function _(S,D,B,I){x();let U=I.attributes,k=B.getAttributes(),z=D.defaultAttributeValues;for(let O in k){let N=k[O];if(N.location>=0){let Z=U[O];if(Z===void 0&&(O==="instanceMatrix"&&S.instanceMatrix&&(Z=S.instanceMatrix),O==="instanceColor"&&S.instanceColor&&(Z=S.instanceColor)),Z!==void 0){let Q=Z.normalized,ht=Z.itemSize,Mt=t.get(Z);if(Mt===void 0)continue;let _t=Mt.buffer,Ut=Mt.type,rt=Mt.bytesPerElement,H=Ut===i.INT||Ut===i.UNSIGNED_INT||Z.gpuType===Ya;if(Z.isInterleavedBufferAttribute){let Y=Z.data,at=Y.stride,ut=Z.offset;if(Y.isInstancedInterleavedBuffer){for(let et=0;et<N.locationSize;et++)p(N.location+et,Y.meshPerAttribute);S.isInstancedMesh!==!0&&I._maxInstanceCount===void 0&&(I._maxInstanceCount=Y.meshPerAttribute*Y.count)}else for(let et=0;et<N.locationSize;et++)g(N.location+et);i.bindBuffer(i.ARRAY_BUFFER,_t);for(let et=0;et<N.locationSize;et++)y(N.location+et,ht/N.locationSize,Ut,Q,at*rt,(ut+ht/N.locationSize*et)*rt,H)}else{if(Z.isInstancedBufferAttribute){for(let Y=0;Y<N.locationSize;Y++)p(N.location+Y,Z.meshPerAttribute);S.isInstancedMesh!==!0&&I._maxInstanceCount===void 0&&(I._maxInstanceCount=Z.meshPerAttribute*Z.count)}else for(let Y=0;Y<N.locationSize;Y++)g(N.location+Y);i.bindBuffer(i.ARRAY_BUFFER,_t);for(let Y=0;Y<N.locationSize;Y++)y(N.location+Y,ht/N.locationSize,Ut,Q,ht*rt,ht/N.locationSize*Y*rt,H)}}else if(z!==void 0){let Q=z[O];if(Q!==void 0)switch(Q.length){case 2:i.vertexAttrib2fv(N.location,Q);break;case 3:i.vertexAttrib3fv(N.location,Q);break;case 4:i.vertexAttrib4fv(N.location,Q);break;default:i.vertexAttrib1fv(N.location,Q)}}}}E()}function A(){L();for(let S in n){let D=n[S];for(let B in D){let I=D[B];for(let U in I)h(I[U].object),delete I[U];delete D[B]}delete n[S]}}function T(S){if(n[S.id]===void 0)return;let D=n[S.id];for(let B in D){let I=D[B];for(let U in I)h(I[U].object),delete I[U];delete D[B]}delete n[S.id]}function C(S){for(let D in n){let B=n[D];if(B[S.id]===void 0)continue;let I=B[S.id];for(let U in I)h(I[U].object),delete I[U];delete B[S.id]}}function L(){M(),o=!0,r!==s&&(r=s,c(r.object))}function M(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:L,resetDefaultState:M,dispose:A,releaseStatesOfGeometry:T,releaseStatesOfProgram:C,initAttributes:x,enableAttribute:g,disableUnusedAttributes:E}}function tx(i,t,e){let n;function s(c){n=c}function r(c,h){i.drawArrays(n,c,h),e.update(h,n,1)}function o(c,h,u){u!==0&&(i.drawArraysInstanced(n,c,h,u),e.update(h,n,u))}function a(c,h,u){if(u===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,h,0,u);let d=0;for(let m=0;m<u;m++)d+=h[m];e.update(d,n,1)}function l(c,h,u,f){if(u===0)return;let d=t.get("WEBGL_multi_draw");if(d===null)for(let m=0;m<c.length;m++)o(c[m],h[m],f[m]);else{d.multiDrawArraysInstancedWEBGL(n,c,0,h,0,f,0,u);let m=0;for(let x=0;x<u;x++)m+=h[x]*f[x];e.update(m,n,1)}}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function ex(i,t,e,n){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){let C=t.get("EXT_texture_filter_anisotropic");s=i.getParameter(C.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(C){return!(C!==Rn&&n.convert(C)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(C){let L=C===pn&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(C!==Hn&&n.convert(C)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&C!==zn&&!L)}function l(C){if(C==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";C="mediump"}return C==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp",h=l(c);h!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);let u=e.logarithmicDepthBuffer===!0,f=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control"),d=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),m=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=i.getParameter(i.MAX_TEXTURE_SIZE),g=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),p=i.getParameter(i.MAX_VERTEX_ATTRIBS),E=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),y=i.getParameter(i.MAX_VARYING_VECTORS),_=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),A=m>0,T=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:u,reversedDepthBuffer:f,maxTextures:d,maxVertexTextures:m,maxTextureSize:x,maxCubemapSize:g,maxAttributes:p,maxVertexUniforms:E,maxVaryings:y,maxFragmentUniforms:_,vertexTextures:A,maxSamples:T}}function nx(i){let t=this,e=null,n=0,s=!1,r=!1,o=new qn,a=new Jt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,f){let d=u.length!==0||f||n!==0||s;return s=f,n=u.length,d},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,f){e=h(u,f,0)},this.setState=function(u,f,d){let m=u.clippingPlanes,x=u.clipIntersection,g=u.clipShadows,p=i.get(u);if(!s||m===null||m.length===0||r&&!g)r?h(null):c();else{let E=r?0:n,y=E*4,_=p.clippingState||null;l.value=_,_=h(m,f,y,d);for(let A=0;A!==y;++A)_[A]=e[A];p.clippingState=_,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=E}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(u,f,d,m){let x=u!==null?u.length:0,g=null;if(x!==0){if(g=l.value,m!==!0||g===null){let p=d+x*4,E=f.matrixWorldInverse;a.getNormalMatrix(E),(g===null||g.length<p)&&(g=new Float32Array(p));for(let y=0,_=d;y!==x;++y,_+=4)o.copy(u[y]).applyMatrix4(E,a),o.normal.toArray(g,_),g[_+3]=o.constant}l.value=g,l.needsUpdate=!0}return t.numPlanes=x,t.numIntersection=0,g}}function ix(i){let t=new WeakMap;function e(o,a){return a===Wa?o.mapping=as:a===Xa&&(o.mapping=ls),o}function n(o){if(o&&o.isTexture){let a=o.mapping;if(a===Wa||a===Xa)if(t.has(o)){let l=t.get(o).texture;return e(l,o.mapping)}else{let l=o.image;if(l&&l.height>0){let c=new ca(l.height);return c.fromEquirectangularTexture(i,o),t.set(o,c),o.addEventListener("dispose",s),e(c.texture,o.mapping)}else return null}}return o}function s(o){let a=o.target;a.removeEventListener("dispose",s);let l=t.get(a);l!==void 0&&(t.delete(a),l.dispose())}function r(){t=new WeakMap}return{get:n,dispose:r}}var ir=4,ud=[.125,.215,.35,.446,.526,.582],fs=20,uh=new os,dd=new vt,dh=null,fh=0,ph=0,mh=!1,ds=(1+Math.sqrt(5))/2,nr=1/ds,fd=[new R(-ds,nr,0),new R(ds,nr,0),new R(-nr,0,ds),new R(nr,0,ds),new R(0,ds,-nr),new R(0,ds,nr),new R(-1,1,-1),new R(1,1,-1),new R(-1,1,1),new R(1,1,1)],sx=new R,rr=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,s=100,r={}){let{size:o=256,position:a=sx}=r;dh=this._renderer.getRenderTarget(),fh=this._renderer.getActiveCubeFace(),ph=this._renderer.getActiveMipmapLevel(),mh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);let l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(t,n,s,l,a),e>0&&this._blur(l,0,0,e),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=gd(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=md(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(dh,fh,ph),this._renderer.xr.enabled=mh,t.scissorTest=!1,Pl(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===as||t.mapping===ls?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),dh=this._renderer.getRenderTarget(),fh=this._renderer.getActiveCubeFace(),ph=this._renderer.getActiveMipmapLevel(),mh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:Un,minFilter:Un,generateMipmaps:!1,type:pn,format:Rn,colorSpace:Zi,depthBuffer:!1},s=pd(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=pd(t,e,n);let{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=rx(r)),this._blurMaterial=ox(r,t,e)}return s}_compileMaterial(t){let e=new j(this._lodPlanes[0],t);this._renderer.compile(e,uh)}_sceneToCubeUV(t,e,n,s,r){let l=new $e(90,1,e,n),c=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],u=this._renderer,f=u.autoClear,d=u.toneMapping;u.getClearColor(dd),u.toneMapping=fi,u.autoClear=!1,u.state.buffers.depth.getReversed()&&(u.setRenderTarget(s),u.clearDepth(),u.setRenderTarget(null));let x=new yn({name:"PMREM.Background",side:nn,depthWrite:!1,depthTest:!1}),g=new j(new Le,x),p=!1,E=t.background;E?E.isColor&&(x.color.copy(E),t.background=null,p=!0):(x.color.copy(dd),p=!0);for(let y=0;y<6;y++){let _=y%3;_===0?(l.up.set(0,c[y],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x+h[y],r.y,r.z)):_===1?(l.up.set(0,0,c[y]),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y+h[y],r.z)):(l.up.set(0,c[y],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y,r.z+h[y]));let A=this._cubeSize;Pl(s,_*A,y>2?A:0,A,A),u.setRenderTarget(s),p&&u.render(g,l),u.render(t,l)}g.geometry.dispose(),g.material.dispose(),u.toneMapping=d,u.autoClear=f,t.background=E}_textureToCubeUV(t,e){let n=this._renderer,s=t.mapping===as||t.mapping===ls;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=gd()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=md());let r=s?this._cubemapMaterial:this._equirectMaterial,o=new j(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=t;let l=this._cubeSize;Pl(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(o,uh)}_applyPMREM(t){let e=this._renderer,n=e.autoClear;e.autoClear=!1;let s=this._lodPlanes.length;for(let r=1;r<s;r++){let o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=fd[(s-r-1)%fd.length];this._blur(t,r-1,r,o,a)}e.autoClear=n}_blur(t,e,n,s,r){let o=this._pingPongRenderTarget;this._halfBlur(t,o,e,n,s,"latitudinal",r),this._halfBlur(o,t,n,n,s,"longitudinal",r)}_halfBlur(t,e,n,s,r,o,a){let l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let h=3,u=new j(this._lodPlanes[s],c),f=c.uniforms,d=this._sizeLods[n]-1,m=isFinite(r)?Math.PI/(2*d):2*Math.PI/(2*fs-1),x=r/m,g=isFinite(r)?1+Math.floor(h*x):fs;g>fs&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${g} samples when the maximum is set to ${fs}`);let p=[],E=0;for(let C=0;C<fs;++C){let L=C/x,M=Math.exp(-L*L/2);p.push(M),C===0?E+=M:C<g&&(E+=2*M)}for(let C=0;C<p.length;C++)p[C]=p[C]/E;f.envMap.value=t.texture,f.samples.value=g,f.weights.value=p,f.latitudinal.value=o==="latitudinal",a&&(f.poleAxis.value=a);let{_lodMax:y}=this;f.dTheta.value=m,f.mipInt.value=y-n;let _=this._sizeLods[s],A=3*_*(s>y-ir?s-y+ir:0),T=4*(this._cubeSize-_);Pl(e,A,T,3*_,2*_),l.setRenderTarget(e),l.render(u,uh)}};function rx(i){let t=[],e=[],n=[],s=i,r=i-ir+1+ud.length;for(let o=0;o<r;o++){let a=Math.pow(2,s);e.push(a);let l=1/a;o>i-ir?l=ud[o-i+ir-1]:o===0&&(l=0),n.push(l);let c=1/(a-2),h=-c,u=1+c,f=[h,h,u,h,u,u,h,h,u,u,h,u],d=6,m=6,x=3,g=2,p=1,E=new Float32Array(x*m*d),y=new Float32Array(g*m*d),_=new Float32Array(p*m*d);for(let T=0;T<d;T++){let C=T%3*2/3-1,L=T>2?0:-1,M=[C,L,0,C+2/3,L,0,C+2/3,L+1,0,C,L,0,C+2/3,L+1,0,C,L+1,0];E.set(M,x*m*T),y.set(f,g*m*T);let S=[T,T,T,T,T,T];_.set(S,p*m*T)}let A=new ie;A.setAttribute("position",new Me(E,x)),A.setAttribute("uv",new Me(y,g)),A.setAttribute("faceIndex",new Me(_,p)),t.push(A),s>ir&&s--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function pd(i,t,e){let n=new Je(i,t,e);return n.texture.mapping=ao,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Pl(i,t,e,n,s){i.viewport.set(t,e,n,s),i.scissor.set(t,e,n,s)}function ox(i,t,e){let n=new Float32Array(fs),s=new R(0,1,0);return new Se({name:"SphericalGaussianBlur",defines:{n:fs,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Th(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:On,depthTest:!1,depthWrite:!1})}function md(){return new Se({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Th(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:On,depthTest:!1,depthWrite:!1})}function gd(){return new Se({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Th(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:On,depthTest:!1,depthWrite:!1})}function Th(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function ax(i){let t=new WeakMap,e=null;function n(a){if(a&&a.isTexture){let l=a.mapping,c=l===Wa||l===Xa,h=l===as||l===ls;if(c||h){let u=t.get(a),f=u!==void 0?u.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==f)return e===null&&(e=new rr(i)),u=c?e.fromEquirectangular(a,u):e.fromCubemap(a,u),u.texture.pmremVersion=a.pmremVersion,t.set(a,u),u.texture;if(u!==void 0)return u.texture;{let d=a.image;return c&&d&&d.height>0||h&&d&&s(d)?(e===null&&(e=new rr(i)),u=c?e.fromEquirectangular(a):e.fromCubemap(a),u.texture.pmremVersion=a.pmremVersion,t.set(a,u),a.addEventListener("dispose",r),u.texture):null}}}return a}function s(a){let l=0,c=6;for(let h=0;h<c;h++)a[h]!==void 0&&l++;return l===c}function r(a){let l=a.target;l.removeEventListener("dispose",r);let c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function o(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:o}}function lx(i){let t={};function e(n){if(t[n]!==void 0)return t[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){let s=e(n);return s===null&&Hs("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function cx(i,t,e,n){let s={},r=new WeakMap;function o(u){let f=u.target;f.index!==null&&t.remove(f.index);for(let m in f.attributes)t.remove(f.attributes[m]);f.removeEventListener("dispose",o),delete s[f.id];let d=r.get(f);d&&(t.remove(d),r.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,e.memory.geometries--}function a(u,f){return s[f.id]===!0||(f.addEventListener("dispose",o),s[f.id]=!0,e.memory.geometries++),f}function l(u){let f=u.attributes;for(let d in f)t.update(f[d],i.ARRAY_BUFFER)}function c(u){let f=[],d=u.index,m=u.attributes.position,x=0;if(d!==null){let E=d.array;x=d.version;for(let y=0,_=E.length;y<_;y+=3){let A=E[y+0],T=E[y+1],C=E[y+2];f.push(A,T,T,C,C,A)}}else if(m!==void 0){let E=m.array;x=m.version;for(let y=0,_=E.length/3-1;y<_;y+=3){let A=y+0,T=y+1,C=y+2;f.push(A,T,T,C,C,A)}}else return;let g=new(rh(f)?Hr:Or)(f,1);g.version=x;let p=r.get(u);p&&t.remove(p),r.set(u,g)}function h(u){let f=r.get(u);if(f){let d=u.index;d!==null&&f.version<d.version&&c(u)}else c(u);return r.get(u)}return{get:a,update:l,getWireframeAttribute:h}}function hx(i,t,e){let n;function s(f){n=f}let r,o;function a(f){r=f.type,o=f.bytesPerElement}function l(f,d){i.drawElements(n,d,r,f*o),e.update(d,n,1)}function c(f,d,m){m!==0&&(i.drawElementsInstanced(n,d,r,f*o,m),e.update(d,n,m))}function h(f,d,m){if(m===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,d,0,r,f,0,m);let g=0;for(let p=0;p<m;p++)g+=d[p];e.update(g,n,1)}function u(f,d,m,x){if(m===0)return;let g=t.get("WEBGL_multi_draw");if(g===null)for(let p=0;p<f.length;p++)c(f[p]/o,d[p],x[p]);else{g.multiDrawElementsInstancedWEBGL(n,d,0,r,f,0,x,0,m);let p=0;for(let E=0;E<m;E++)p+=d[E]*x[E];e.update(p,n,1)}}this.setMode=s,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function ux(i){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(e.calls++,o){case i.TRIANGLES:e.triangles+=a*(r/3);break;case i.LINES:e.lines+=a*(r/2);break;case i.LINE_STRIP:e.lines+=a*(r-1);break;case i.LINE_LOOP:e.lines+=a*r;break;case i.POINTS:e.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function dx(i,t,e){let n=new WeakMap,s=new fe;function r(o,a,l){let c=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,u=h!==void 0?h.length:0,f=n.get(a);if(f===void 0||f.count!==u){let M=function(){C.dispose(),n.delete(a),a.removeEventListener("dispose",M)};f!==void 0&&f.texture.dispose();let d=a.morphAttributes.position!==void 0,m=a.morphAttributes.normal!==void 0,x=a.morphAttributes.color!==void 0,g=a.morphAttributes.position||[],p=a.morphAttributes.normal||[],E=a.morphAttributes.color||[],y=0;d===!0&&(y=1),m===!0&&(y=2),x===!0&&(y=3);let _=a.attributes.position.count*y,A=1;_>t.maxTextureSize&&(A=Math.ceil(_/t.maxTextureSize),_=t.maxTextureSize);let T=new Float32Array(_*A*4*u),C=new Nr(T,_,A,u);C.type=zn,C.needsUpdate=!0;let L=y*4;for(let S=0;S<u;S++){let D=g[S],B=p[S],I=E[S],U=_*A*4*S;for(let k=0;k<D.count;k++){let z=k*L;d===!0&&(s.fromBufferAttribute(D,k),T[U+z+0]=s.x,T[U+z+1]=s.y,T[U+z+2]=s.z,T[U+z+3]=0),m===!0&&(s.fromBufferAttribute(B,k),T[U+z+4]=s.x,T[U+z+5]=s.y,T[U+z+6]=s.z,T[U+z+7]=0),x===!0&&(s.fromBufferAttribute(I,k),T[U+z+8]=s.x,T[U+z+9]=s.y,T[U+z+10]=s.z,T[U+z+11]=I.itemSize===4?s.w:1)}}f={count:u,texture:C,size:new nt(_,A)},n.set(a,f),a.addEventListener("dispose",M)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",o.morphTexture,e);else{let d=0;for(let x=0;x<c.length;x++)d+=c[x];let m=a.morphTargetsRelative?1:1-d;l.getUniforms().setValue(i,"morphTargetBaseInfluence",m),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",f.texture,e),l.getUniforms().setValue(i,"morphTargetsTextureSize",f.size)}return{update:r}}function fx(i,t,e,n){let s=new WeakMap;function r(l){let c=n.render.frame,h=l.geometry,u=t.get(l,h);if(s.get(u)!==c&&(t.update(u),s.set(u,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),s.get(l)!==c&&(e.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,i.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){let f=l.skeleton;s.get(f)!==c&&(f.update(),s.set(f,c))}return u}function o(){s=new WeakMap}function a(l){let c=l.target;c.removeEventListener("dispose",a),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:r,dispose:o}}var Nd=new un,xd=new Wr(1,1),Fd=new Nr,Bd=new aa,Od=new kr,_d=[],yd=[],vd=new Float32Array(16),Md=new Float32Array(9),Sd=new Float32Array(4);function or(i,t,e){let n=i[0];if(n<=0||n>0)return i;let s=t*e,r=_d[s];if(r===void 0&&(r=new Float32Array(s),_d[s]=r),t!==0){n.toArray(r,0);for(let o=1,a=0;o!==t;++o)a+=e,i[o].toArray(r,a)}return r}function Xe(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function qe(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function Dl(i,t){let e=yd[t];e===void 0&&(e=new Int32Array(t),yd[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function px(i,t){let e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function mx(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Xe(e,t))return;i.uniform2fv(this.addr,t),qe(e,t)}}function gx(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Xe(e,t))return;i.uniform3fv(this.addr,t),qe(e,t)}}function xx(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Xe(e,t))return;i.uniform4fv(this.addr,t),qe(e,t)}}function _x(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(Xe(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),qe(e,t)}else{if(Xe(e,n))return;Sd.set(n),i.uniformMatrix2fv(this.addr,!1,Sd),qe(e,n)}}function yx(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(Xe(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),qe(e,t)}else{if(Xe(e,n))return;Md.set(n),i.uniformMatrix3fv(this.addr,!1,Md),qe(e,n)}}function vx(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(Xe(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),qe(e,t)}else{if(Xe(e,n))return;vd.set(n),i.uniformMatrix4fv(this.addr,!1,vd),qe(e,n)}}function Mx(i,t){let e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function Sx(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Xe(e,t))return;i.uniform2iv(this.addr,t),qe(e,t)}}function Ex(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Xe(e,t))return;i.uniform3iv(this.addr,t),qe(e,t)}}function bx(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Xe(e,t))return;i.uniform4iv(this.addr,t),qe(e,t)}}function Tx(i,t){let e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function wx(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Xe(e,t))return;i.uniform2uiv(this.addr,t),qe(e,t)}}function Ax(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Xe(e,t))return;i.uniform3uiv(this.addr,t),qe(e,t)}}function Rx(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Xe(e,t))return;i.uniform4uiv(this.addr,t),qe(e,t)}}function Cx(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(xd.compareFunction=eh,r=xd):r=Nd,e.setTexture2D(t||r,s)}function Px(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||Bd,s)}function Ix(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTextureCube(t||Od,s)}function Lx(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||Fd,s)}function Dx(i){switch(i){case 5126:return px;case 35664:return mx;case 35665:return gx;case 35666:return xx;case 35674:return _x;case 35675:return yx;case 35676:return vx;case 5124:case 35670:return Mx;case 35667:case 35671:return Sx;case 35668:case 35672:return Ex;case 35669:case 35673:return bx;case 5125:return Tx;case 36294:return wx;case 36295:return Ax;case 36296:return Rx;case 35678:case 36198:case 36298:case 36306:case 35682:return Cx;case 35679:case 36299:case 36307:return Px;case 35680:case 36300:case 36308:case 36293:return Ix;case 36289:case 36303:case 36311:case 36292:return Lx}}function Ux(i,t){i.uniform1fv(this.addr,t)}function Nx(i,t){let e=or(t,this.size,2);i.uniform2fv(this.addr,e)}function Fx(i,t){let e=or(t,this.size,3);i.uniform3fv(this.addr,e)}function Bx(i,t){let e=or(t,this.size,4);i.uniform4fv(this.addr,e)}function Ox(i,t){let e=or(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function Hx(i,t){let e=or(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function zx(i,t){let e=or(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function kx(i,t){i.uniform1iv(this.addr,t)}function Vx(i,t){i.uniform2iv(this.addr,t)}function Gx(i,t){i.uniform3iv(this.addr,t)}function Wx(i,t){i.uniform4iv(this.addr,t)}function Xx(i,t){i.uniform1uiv(this.addr,t)}function qx(i,t){i.uniform2uiv(this.addr,t)}function Yx(i,t){i.uniform3uiv(this.addr,t)}function Zx(i,t){i.uniform4uiv(this.addr,t)}function $x(i,t,e){let n=this.cache,s=t.length,r=Dl(e,s);Xe(n,r)||(i.uniform1iv(this.addr,r),qe(n,r));for(let o=0;o!==s;++o)e.setTexture2D(t[o]||Nd,r[o])}function Jx(i,t,e){let n=this.cache,s=t.length,r=Dl(e,s);Xe(n,r)||(i.uniform1iv(this.addr,r),qe(n,r));for(let o=0;o!==s;++o)e.setTexture3D(t[o]||Bd,r[o])}function Kx(i,t,e){let n=this.cache,s=t.length,r=Dl(e,s);Xe(n,r)||(i.uniform1iv(this.addr,r),qe(n,r));for(let o=0;o!==s;++o)e.setTextureCube(t[o]||Od,r[o])}function Qx(i,t,e){let n=this.cache,s=t.length,r=Dl(e,s);Xe(n,r)||(i.uniform1iv(this.addr,r),qe(n,r));for(let o=0;o!==s;++o)e.setTexture2DArray(t[o]||Fd,r[o])}function jx(i){switch(i){case 5126:return Ux;case 35664:return Nx;case 35665:return Fx;case 35666:return Bx;case 35674:return Ox;case 35675:return Hx;case 35676:return zx;case 5124:case 35670:return kx;case 35667:case 35671:return Vx;case 35668:case 35672:return Gx;case 35669:case 35673:return Wx;case 5125:return Xx;case 36294:return qx;case 36295:return Yx;case 36296:return Zx;case 35678:case 36198:case 36298:case 36306:case 35682:return $x;case 35679:case 36299:case 36307:return Jx;case 35680:case 36300:case 36308:case 36293:return Kx;case 36289:case 36303:case 36311:case 36292:return Qx}}var xh=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=Dx(e.type)}},_h=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=jx(e.type)}},yh=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){let s=this.seq;for(let r=0,o=s.length;r!==o;++r){let a=s[r];a.setValue(t,e[a.id],n)}}},gh=/(\w+)(\])?(\[|\.)?/g;function Ed(i,t){i.seq.push(t),i.map[t.id]=t}function t_(i,t,e){let n=i.name,s=n.length;for(gh.lastIndex=0;;){let r=gh.exec(n),o=gh.lastIndex,a=r[1],l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===s){Ed(e,c===void 0?new xh(a,i,t):new _h(a,i,t));break}else{let u=e.map[a];u===void 0&&(u=new yh(a),Ed(e,u)),e=u}}}var sr=class{constructor(t,e){this.seq=[],this.map={};let n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){let r=t.getActiveUniform(e,s),o=t.getUniformLocation(e,r.name);t_(r,o,this)}}setValue(t,e,n,s){let r=this.map[e];r!==void 0&&r.setValue(t,n,s)}setOptional(t,e,n){let s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let r=0,o=e.length;r!==o;++r){let a=e[r],l=n[a.id];l.needsUpdate!==!1&&a.setValue(t,l.value,s)}}static seqWithValue(t,e){let n=[];for(let s=0,r=t.length;s!==r;++s){let o=t[s];o.id in e&&n.push(o)}return n}};function bd(i,t,e){let n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}var e_=37297,n_=0;function i_(i,t){let e=i.split(`
`),n=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let o=s;o<r;o++){let a=o+1;n.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return n.join(`
`)}var Td=new Jt;function s_(i){ee._getMatrix(Td,ee.workingColorSpace,i);let t=`mat3( ${Td.elements.map(e=>e.toFixed(4))} )`;switch(ee.getTransfer(i)){case Lr:return[t,"LinearTransferOETF"];case re:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function wd(i,t,e){let n=i.getShaderParameter(t,i.COMPILE_STATUS),r=(i.getShaderInfoLog(t)||"").trim();if(n&&r==="")return"";let o=/ERROR: 0:(\d+)/.exec(r);if(o){let a=parseInt(o[1]);return e.toUpperCase()+`

`+r+`

`+i_(i.getShaderSource(t),a)}else return r}function r_(i,t){let e=s_(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function o_(i,t){let e;switch(t){case Oa:e="Linear";break;case Ha:e="Reinhard";break;case za:e="Cineon";break;case Ks:e="ACESFilmic";break;case Va:e="AgX";break;case Ga:e="Neutral";break;case ka:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}var Il=new R;function a_(){ee.getLuminanceCoefficients(Il);let i=Il.x.toFixed(4),t=Il.y.toFixed(4),e=Il.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function l_(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(po).join(`
`)}function c_(i){let t=[];for(let e in i){let n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function h_(i,t){let e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(t,s),o=r.name,a=1;r.type===i.FLOAT_MAT2&&(a=2),r.type===i.FLOAT_MAT3&&(a=3),r.type===i.FLOAT_MAT4&&(a=4),e[o]={type:r.type,location:i.getAttribLocation(t,o),locationSize:a}}return e}function po(i){return i!==""}function Ad(i,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Rd(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var u_=/^[ \t]*#include +<([\w\d./]+)>/gm;function vh(i){return i.replace(u_,f_)}var d_=new Map;function f_(i,t){let e=Qt[t];if(e===void 0){let n=d_.get(t);if(n!==void 0)e=Qt[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return vh(e)}var p_=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Cd(i){return i.replace(p_,m_)}function m_(i,t,e,n){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Pd(i){let t=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?t+=`
#define HIGH_PRECISION`:i.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function g_(i){let t="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===Wc?t="SHADOWMAP_TYPE_PCF":i.shadowMapType===Ca?t="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===Kn&&(t="SHADOWMAP_TYPE_VSM"),t}function x_(i){let t="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case as:case ls:t="ENVMAP_TYPE_CUBE";break;case ao:t="ENVMAP_TYPE_CUBE_UV";break}return t}function __(i){let t="ENVMAP_MODE_REFLECTION";return i.envMap&&i.envMapMode===ls&&(t="ENVMAP_MODE_REFRACTION"),t}function y_(i){let t="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case Ba:t="ENVMAP_BLENDING_MULTIPLY";break;case Gu:t="ENVMAP_BLENDING_MIX";break;case Wu:t="ENVMAP_BLENDING_ADD";break}return t}function v_(i){let t=i.envMapCubeUVHeight;if(t===null)return null;let e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:n,maxMip:e}}function M_(i,t,e,n){let s=i.getContext(),r=e.defines,o=e.vertexShader,a=e.fragmentShader,l=g_(e),c=x_(e),h=__(e),u=y_(e),f=v_(e),d=l_(e),m=c_(r),x=s.createProgram(),g,p,E=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(g=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m].filter(po).join(`
`),g.length>0&&(g+=`
`),p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m].filter(po).join(`
`),p.length>0&&(p+=`
`)):(g=[Pd(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(po).join(`
`),p=[Pd(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+u:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==fi?"#define TONE_MAPPING":"",e.toneMapping!==fi?Qt.tonemapping_pars_fragment:"",e.toneMapping!==fi?o_("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Qt.colorspace_pars_fragment,r_("linearToOutputTexel",e.outputColorSpace),a_(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(po).join(`
`)),o=vh(o),o=Ad(o,e),o=Rd(o,e),a=vh(a),a=Ad(a,e),a=Rd(a,e),o=Cd(o),a=Cd(a),e.isRawShaderMaterial!==!0&&(E=`#version 300 es
`,g=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,p=["#define varying in",e.glslVersion===ih?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===ih?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);let y=E+g+o,_=E+p+a,A=bd(s,s.VERTEX_SHADER,y),T=bd(s,s.FRAGMENT_SHADER,_);s.attachShader(x,A),s.attachShader(x,T),e.index0AttributeName!==void 0?s.bindAttribLocation(x,0,e.index0AttributeName):e.morphTargets===!0&&s.bindAttribLocation(x,0,"position"),s.linkProgram(x);function C(D){if(i.debug.checkShaderErrors){let B=s.getProgramInfoLog(x)||"",I=s.getShaderInfoLog(A)||"",U=s.getShaderInfoLog(T)||"",k=B.trim(),z=I.trim(),O=U.trim(),N=!0,Z=!0;if(s.getProgramParameter(x,s.LINK_STATUS)===!1)if(N=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,x,A,T);else{let Q=wd(s,A,"vertex"),ht=wd(s,T,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(x,s.VALIDATE_STATUS)+`

Material Name: `+D.name+`
Material Type: `+D.type+`

Program Info Log: `+k+`
`+Q+`
`+ht)}else k!==""?console.warn("THREE.WebGLProgram: Program Info Log:",k):(z===""||O==="")&&(Z=!1);Z&&(D.diagnostics={runnable:N,programLog:k,vertexShader:{log:z,prefix:g},fragmentShader:{log:O,prefix:p}})}s.deleteShader(A),s.deleteShader(T),L=new sr(s,x),M=h_(s,x)}let L;this.getUniforms=function(){return L===void 0&&C(this),L};let M;this.getAttributes=function(){return M===void 0&&C(this),M};let S=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return S===!1&&(S=s.getProgramParameter(x,e_)),S},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(x),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=n_++,this.cacheKey=t,this.usedTimes=1,this.program=x,this.vertexShader=A,this.fragmentShader=T,this}var S_=0,Mh=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){let e=t.vertexShader,n=t.fragmentShader,s=this._getShaderStage(e),r=this._getShaderStage(n),o=this._getShaderCacheForMaterial(t);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){let e=this.shaderCache,n=e.get(t);return n===void 0&&(n=new Sh(t),e.set(t,n)),n}},Sh=class{constructor(t){this.id=S_++,this.code=t,this.usedTimes=0}};function E_(i,t,e,n,s,r,o){let a=new Br,l=new Mh,c=new Set,h=[],u=s.logarithmicDepthBuffer,f=s.vertexTextures,d=s.precision,m={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function x(M){return c.add(M),M===0?"uv":`uv${M}`}function g(M,S,D,B,I){let U=B.fog,k=I.geometry,z=M.isMeshStandardMaterial?B.environment:null,O=(M.isMeshStandardMaterial?e:t).get(M.envMap||z),N=O&&O.mapping===ao?O.image.height:null,Z=m[M.type];M.precision!==null&&(d=s.getMaxPrecision(M.precision),d!==M.precision&&console.warn("THREE.WebGLProgram.getParameters:",M.precision,"not supported, using",d,"instead."));let Q=k.morphAttributes.position||k.morphAttributes.normal||k.morphAttributes.color,ht=Q!==void 0?Q.length:0,Mt=0;k.morphAttributes.position!==void 0&&(Mt=1),k.morphAttributes.normal!==void 0&&(Mt=2),k.morphAttributes.color!==void 0&&(Mt=3);let _t,Ut,rt,H;if(Z){let le=jn[Z];_t=le.vertexShader,Ut=le.fragmentShader}else _t=M.vertexShader,Ut=M.fragmentShader,l.update(M),rt=l.getVertexShaderID(M),H=l.getFragmentShaderID(M);let Y=i.getRenderTarget(),at=i.state.buffers.depth.getReversed(),ut=I.isInstancedMesh===!0,et=I.isBatchedMesh===!0,Tt=!!M.map,Pt=!!M.matcap,P=!!O,tt=!!M.aoMap,it=!!M.lightMap,ot=!!M.bumpMap,st=!!M.normalMap,wt=!!M.displacementMap,yt=!!M.emissiveMap,q=!!M.metalnessMap,ft=!!M.roughnessMap,St=M.anisotropy>0,w=M.clearcoat>0,v=M.dispersion>0,V=M.iridescence>0,X=M.sheen>0,lt=M.transmission>0,J=St&&!!M.anisotropyMap,Ft=w&&!!M.clearcoatMap,Et=w&&!!M.clearcoatNormalMap,Rt=w&&!!M.clearcoatRoughnessMap,Nt=V&&!!M.iridescenceMap,pt=V&&!!M.iridescenceThicknessMap,Ct=X&&!!M.sheenColorMap,kt=X&&!!M.sheenRoughnessMap,Bt=!!M.specularMap,At=!!M.specularColorMap,Yt=!!M.specularIntensityMap,F=lt&&!!M.transmissionMap,dt=lt&&!!M.thicknessMap,mt=!!M.gradientMap,gt=!!M.alphaMap,xt=M.alphaTest>0,ct=!!M.alphaHash,zt=!!M.extensions,$t=fi;M.toneMapped&&(Y===null||Y.isXRRenderTarget===!0)&&($t=i.toneMapping);let ve={shaderID:Z,shaderType:M.type,shaderName:M.name,vertexShader:_t,fragmentShader:Ut,defines:M.defines,customVertexShaderID:rt,customFragmentShaderID:H,isRawShaderMaterial:M.isRawShaderMaterial===!0,glslVersion:M.glslVersion,precision:d,batching:et,batchingColor:et&&I._colorsTexture!==null,instancing:ut,instancingColor:ut&&I.instanceColor!==null,instancingMorph:ut&&I.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:Y===null?i.outputColorSpace:Y.isXRRenderTarget===!0?Y.texture.colorSpace:Zi,alphaToCoverage:!!M.alphaToCoverage,map:Tt,matcap:Pt,envMap:P,envMapMode:P&&O.mapping,envMapCubeUVHeight:N,aoMap:tt,lightMap:it,bumpMap:ot,normalMap:st,displacementMap:f&&wt,emissiveMap:yt,normalMapObjectSpace:st&&M.normalMapType===Zu,normalMapTangentSpace:st&&M.normalMapType===Rl,metalnessMap:q,roughnessMap:ft,anisotropy:St,anisotropyMap:J,clearcoat:w,clearcoatMap:Ft,clearcoatNormalMap:Et,clearcoatRoughnessMap:Rt,dispersion:v,iridescence:V,iridescenceMap:Nt,iridescenceThicknessMap:pt,sheen:X,sheenColorMap:Ct,sheenRoughnessMap:kt,specularMap:Bt,specularColorMap:At,specularIntensityMap:Yt,transmission:lt,transmissionMap:F,thicknessMap:dt,gradientMap:mt,opaque:M.transparent===!1&&M.blending===qi&&M.alphaToCoverage===!1,alphaMap:gt,alphaTest:xt,alphaHash:ct,combine:M.combine,mapUv:Tt&&x(M.map.channel),aoMapUv:tt&&x(M.aoMap.channel),lightMapUv:it&&x(M.lightMap.channel),bumpMapUv:ot&&x(M.bumpMap.channel),normalMapUv:st&&x(M.normalMap.channel),displacementMapUv:wt&&x(M.displacementMap.channel),emissiveMapUv:yt&&x(M.emissiveMap.channel),metalnessMapUv:q&&x(M.metalnessMap.channel),roughnessMapUv:ft&&x(M.roughnessMap.channel),anisotropyMapUv:J&&x(M.anisotropyMap.channel),clearcoatMapUv:Ft&&x(M.clearcoatMap.channel),clearcoatNormalMapUv:Et&&x(M.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Rt&&x(M.clearcoatRoughnessMap.channel),iridescenceMapUv:Nt&&x(M.iridescenceMap.channel),iridescenceThicknessMapUv:pt&&x(M.iridescenceThicknessMap.channel),sheenColorMapUv:Ct&&x(M.sheenColorMap.channel),sheenRoughnessMapUv:kt&&x(M.sheenRoughnessMap.channel),specularMapUv:Bt&&x(M.specularMap.channel),specularColorMapUv:At&&x(M.specularColorMap.channel),specularIntensityMapUv:Yt&&x(M.specularIntensityMap.channel),transmissionMapUv:F&&x(M.transmissionMap.channel),thicknessMapUv:dt&&x(M.thicknessMap.channel),alphaMapUv:gt&&x(M.alphaMap.channel),vertexTangents:!!k.attributes.tangent&&(st||St),vertexColors:M.vertexColors,vertexAlphas:M.vertexColors===!0&&!!k.attributes.color&&k.attributes.color.itemSize===4,pointsUvs:I.isPoints===!0&&!!k.attributes.uv&&(Tt||gt),fog:!!U,useFog:M.fog===!0,fogExp2:!!U&&U.isFogExp2,flatShading:M.flatShading===!0&&M.wireframe===!1,sizeAttenuation:M.sizeAttenuation===!0,logarithmicDepthBuffer:u,reversedDepthBuffer:at,skinning:I.isSkinnedMesh===!0,morphTargets:k.morphAttributes.position!==void 0,morphNormals:k.morphAttributes.normal!==void 0,morphColors:k.morphAttributes.color!==void 0,morphTargetsCount:ht,morphTextureStride:Mt,numDirLights:S.directional.length,numPointLights:S.point.length,numSpotLights:S.spot.length,numSpotLightMaps:S.spotLightMap.length,numRectAreaLights:S.rectArea.length,numHemiLights:S.hemi.length,numDirLightShadows:S.directionalShadowMap.length,numPointLightShadows:S.pointShadowMap.length,numSpotLightShadows:S.spotShadowMap.length,numSpotLightShadowsWithMaps:S.numSpotLightShadowsWithMaps,numLightProbes:S.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:M.dithering,shadowMapEnabled:i.shadowMap.enabled&&D.length>0,shadowMapType:i.shadowMap.type,toneMapping:$t,decodeVideoTexture:Tt&&M.map.isVideoTexture===!0&&ee.getTransfer(M.map.colorSpace)===re,decodeVideoTextureEmissive:yt&&M.emissiveMap.isVideoTexture===!0&&ee.getTransfer(M.emissiveMap.colorSpace)===re,premultipliedAlpha:M.premultipliedAlpha,doubleSided:M.side===pe,flipSided:M.side===nn,useDepthPacking:M.depthPacking>=0,depthPacking:M.depthPacking||0,index0AttributeName:M.index0AttributeName,extensionClipCullDistance:zt&&M.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(zt&&M.extensions.multiDraw===!0||et)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:M.customProgramCacheKey()};return ve.vertexUv1s=c.has(1),ve.vertexUv2s=c.has(2),ve.vertexUv3s=c.has(3),c.clear(),ve}function p(M){let S=[];if(M.shaderID?S.push(M.shaderID):(S.push(M.customVertexShaderID),S.push(M.customFragmentShaderID)),M.defines!==void 0)for(let D in M.defines)S.push(D),S.push(M.defines[D]);return M.isRawShaderMaterial===!1&&(E(S,M),y(S,M),S.push(i.outputColorSpace)),S.push(M.customProgramCacheKey),S.join()}function E(M,S){M.push(S.precision),M.push(S.outputColorSpace),M.push(S.envMapMode),M.push(S.envMapCubeUVHeight),M.push(S.mapUv),M.push(S.alphaMapUv),M.push(S.lightMapUv),M.push(S.aoMapUv),M.push(S.bumpMapUv),M.push(S.normalMapUv),M.push(S.displacementMapUv),M.push(S.emissiveMapUv),M.push(S.metalnessMapUv),M.push(S.roughnessMapUv),M.push(S.anisotropyMapUv),M.push(S.clearcoatMapUv),M.push(S.clearcoatNormalMapUv),M.push(S.clearcoatRoughnessMapUv),M.push(S.iridescenceMapUv),M.push(S.iridescenceThicknessMapUv),M.push(S.sheenColorMapUv),M.push(S.sheenRoughnessMapUv),M.push(S.specularMapUv),M.push(S.specularColorMapUv),M.push(S.specularIntensityMapUv),M.push(S.transmissionMapUv),M.push(S.thicknessMapUv),M.push(S.combine),M.push(S.fogExp2),M.push(S.sizeAttenuation),M.push(S.morphTargetsCount),M.push(S.morphAttributeCount),M.push(S.numDirLights),M.push(S.numPointLights),M.push(S.numSpotLights),M.push(S.numSpotLightMaps),M.push(S.numHemiLights),M.push(S.numRectAreaLights),M.push(S.numDirLightShadows),M.push(S.numPointLightShadows),M.push(S.numSpotLightShadows),M.push(S.numSpotLightShadowsWithMaps),M.push(S.numLightProbes),M.push(S.shadowMapType),M.push(S.toneMapping),M.push(S.numClippingPlanes),M.push(S.numClipIntersection),M.push(S.depthPacking)}function y(M,S){a.disableAll(),S.supportsVertexTextures&&a.enable(0),S.instancing&&a.enable(1),S.instancingColor&&a.enable(2),S.instancingMorph&&a.enable(3),S.matcap&&a.enable(4),S.envMap&&a.enable(5),S.normalMapObjectSpace&&a.enable(6),S.normalMapTangentSpace&&a.enable(7),S.clearcoat&&a.enable(8),S.iridescence&&a.enable(9),S.alphaTest&&a.enable(10),S.vertexColors&&a.enable(11),S.vertexAlphas&&a.enable(12),S.vertexUv1s&&a.enable(13),S.vertexUv2s&&a.enable(14),S.vertexUv3s&&a.enable(15),S.vertexTangents&&a.enable(16),S.anisotropy&&a.enable(17),S.alphaHash&&a.enable(18),S.batching&&a.enable(19),S.dispersion&&a.enable(20),S.batchingColor&&a.enable(21),S.gradientMap&&a.enable(22),M.push(a.mask),a.disableAll(),S.fog&&a.enable(0),S.useFog&&a.enable(1),S.flatShading&&a.enable(2),S.logarithmicDepthBuffer&&a.enable(3),S.reversedDepthBuffer&&a.enable(4),S.skinning&&a.enable(5),S.morphTargets&&a.enable(6),S.morphNormals&&a.enable(7),S.morphColors&&a.enable(8),S.premultipliedAlpha&&a.enable(9),S.shadowMapEnabled&&a.enable(10),S.doubleSided&&a.enable(11),S.flipSided&&a.enable(12),S.useDepthPacking&&a.enable(13),S.dithering&&a.enable(14),S.transmission&&a.enable(15),S.sheen&&a.enable(16),S.opaque&&a.enable(17),S.pointsUvs&&a.enable(18),S.decodeVideoTexture&&a.enable(19),S.decodeVideoTextureEmissive&&a.enable(20),S.alphaToCoverage&&a.enable(21),M.push(a.mask)}function _(M){let S=m[M.type],D;if(S){let B=jn[S];D=pi.clone(B.uniforms)}else D=M.uniforms;return D}function A(M,S){let D;for(let B=0,I=h.length;B<I;B++){let U=h[B];if(U.cacheKey===S){D=U,++D.usedTimes;break}}return D===void 0&&(D=new M_(i,S,M,r),h.push(D)),D}function T(M){if(--M.usedTimes===0){let S=h.indexOf(M);h[S]=h[h.length-1],h.pop(),M.destroy()}}function C(M){l.remove(M)}function L(){l.dispose()}return{getParameters:g,getProgramCacheKey:p,getUniforms:_,acquireProgram:A,releaseProgram:T,releaseShaderCache:C,programs:h,dispose:L}}function b_(){let i=new WeakMap;function t(o){return i.has(o)}function e(o){let a=i.get(o);return a===void 0&&(a={},i.set(o,a)),a}function n(o){i.delete(o)}function s(o,a,l){i.get(o)[a]=l}function r(){i=new WeakMap}return{has:t,get:e,remove:n,update:s,dispose:r}}function T_(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.z!==t.z?i.z-t.z:i.id-t.id}function Id(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function Ld(){let i=[],t=0,e=[],n=[],s=[];function r(){t=0,e.length=0,n.length=0,s.length=0}function o(u,f,d,m,x,g){let p=i[t];return p===void 0?(p={id:u.id,object:u,geometry:f,material:d,groupOrder:m,renderOrder:u.renderOrder,z:x,group:g},i[t]=p):(p.id=u.id,p.object=u,p.geometry=f,p.material=d,p.groupOrder=m,p.renderOrder=u.renderOrder,p.z=x,p.group=g),t++,p}function a(u,f,d,m,x,g){let p=o(u,f,d,m,x,g);d.transmission>0?n.push(p):d.transparent===!0?s.push(p):e.push(p)}function l(u,f,d,m,x,g){let p=o(u,f,d,m,x,g);d.transmission>0?n.unshift(p):d.transparent===!0?s.unshift(p):e.unshift(p)}function c(u,f){e.length>1&&e.sort(u||T_),n.length>1&&n.sort(f||Id),s.length>1&&s.sort(f||Id)}function h(){for(let u=t,f=i.length;u<f;u++){let d=i[u];if(d.id===null)break;d.id=null,d.object=null,d.geometry=null,d.material=null,d.group=null}}return{opaque:e,transmissive:n,transparent:s,init:r,push:a,unshift:l,finish:h,sort:c}}function w_(){let i=new WeakMap;function t(n,s){let r=i.get(n),o;return r===void 0?(o=new Ld,i.set(n,[o])):s>=r.length?(o=new Ld,r.push(o)):o=r[s],o}function e(){i=new WeakMap}return{get:t,dispose:e}}function A_(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new R,color:new vt};break;case"SpotLight":e={position:new R,direction:new R,color:new vt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new R,color:new vt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new R,skyColor:new vt,groundColor:new vt};break;case"RectAreaLight":e={color:new vt,position:new R,halfWidth:new R,halfHeight:new R};break}return i[t.id]=e,e}}}function R_(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new nt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new nt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new nt,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}var C_=0;function P_(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function I_(i){let t=new A_,e=R_(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new R);let s=new R,r=new ne,o=new ne;function a(c){let h=0,u=0,f=0;for(let M=0;M<9;M++)n.probe[M].set(0,0,0);let d=0,m=0,x=0,g=0,p=0,E=0,y=0,_=0,A=0,T=0,C=0;c.sort(P_);for(let M=0,S=c.length;M<S;M++){let D=c[M],B=D.color,I=D.intensity,U=D.distance,k=D.shadow&&D.shadow.map?D.shadow.map.texture:null;if(D.isAmbientLight)h+=B.r*I,u+=B.g*I,f+=B.b*I;else if(D.isLightProbe){for(let z=0;z<9;z++)n.probe[z].addScaledVector(D.sh.coefficients[z],I);C++}else if(D.isDirectionalLight){let z=t.get(D);if(z.color.copy(D.color).multiplyScalar(D.intensity),D.castShadow){let O=D.shadow,N=e.get(D);N.shadowIntensity=O.intensity,N.shadowBias=O.bias,N.shadowNormalBias=O.normalBias,N.shadowRadius=O.radius,N.shadowMapSize=O.mapSize,n.directionalShadow[d]=N,n.directionalShadowMap[d]=k,n.directionalShadowMatrix[d]=D.shadow.matrix,E++}n.directional[d]=z,d++}else if(D.isSpotLight){let z=t.get(D);z.position.setFromMatrixPosition(D.matrixWorld),z.color.copy(B).multiplyScalar(I),z.distance=U,z.coneCos=Math.cos(D.angle),z.penumbraCos=Math.cos(D.angle*(1-D.penumbra)),z.decay=D.decay,n.spot[x]=z;let O=D.shadow;if(D.map&&(n.spotLightMap[A]=D.map,A++,O.updateMatrices(D),D.castShadow&&T++),n.spotLightMatrix[x]=O.matrix,D.castShadow){let N=e.get(D);N.shadowIntensity=O.intensity,N.shadowBias=O.bias,N.shadowNormalBias=O.normalBias,N.shadowRadius=O.radius,N.shadowMapSize=O.mapSize,n.spotShadow[x]=N,n.spotShadowMap[x]=k,_++}x++}else if(D.isRectAreaLight){let z=t.get(D);z.color.copy(B).multiplyScalar(I),z.halfWidth.set(D.width*.5,0,0),z.halfHeight.set(0,D.height*.5,0),n.rectArea[g]=z,g++}else if(D.isPointLight){let z=t.get(D);if(z.color.copy(D.color).multiplyScalar(D.intensity),z.distance=D.distance,z.decay=D.decay,D.castShadow){let O=D.shadow,N=e.get(D);N.shadowIntensity=O.intensity,N.shadowBias=O.bias,N.shadowNormalBias=O.normalBias,N.shadowRadius=O.radius,N.shadowMapSize=O.mapSize,N.shadowCameraNear=O.camera.near,N.shadowCameraFar=O.camera.far,n.pointShadow[m]=N,n.pointShadowMap[m]=k,n.pointShadowMatrix[m]=D.shadow.matrix,y++}n.point[m]=z,m++}else if(D.isHemisphereLight){let z=t.get(D);z.skyColor.copy(D.color).multiplyScalar(I),z.groundColor.copy(D.groundColor).multiplyScalar(I),n.hemi[p]=z,p++}}g>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=It.LTC_FLOAT_1,n.rectAreaLTC2=It.LTC_FLOAT_2):(n.rectAreaLTC1=It.LTC_HALF_1,n.rectAreaLTC2=It.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=u,n.ambient[2]=f;let L=n.hash;(L.directionalLength!==d||L.pointLength!==m||L.spotLength!==x||L.rectAreaLength!==g||L.hemiLength!==p||L.numDirectionalShadows!==E||L.numPointShadows!==y||L.numSpotShadows!==_||L.numSpotMaps!==A||L.numLightProbes!==C)&&(n.directional.length=d,n.spot.length=x,n.rectArea.length=g,n.point.length=m,n.hemi.length=p,n.directionalShadow.length=E,n.directionalShadowMap.length=E,n.pointShadow.length=y,n.pointShadowMap.length=y,n.spotShadow.length=_,n.spotShadowMap.length=_,n.directionalShadowMatrix.length=E,n.pointShadowMatrix.length=y,n.spotLightMatrix.length=_+A-T,n.spotLightMap.length=A,n.numSpotLightShadowsWithMaps=T,n.numLightProbes=C,L.directionalLength=d,L.pointLength=m,L.spotLength=x,L.rectAreaLength=g,L.hemiLength=p,L.numDirectionalShadows=E,L.numPointShadows=y,L.numSpotShadows=_,L.numSpotMaps=A,L.numLightProbes=C,n.version=C_++)}function l(c,h){let u=0,f=0,d=0,m=0,x=0,g=h.matrixWorldInverse;for(let p=0,E=c.length;p<E;p++){let y=c[p];if(y.isDirectionalLight){let _=n.directional[u];_.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),_.direction.sub(s),_.direction.transformDirection(g),u++}else if(y.isSpotLight){let _=n.spot[d];_.position.setFromMatrixPosition(y.matrixWorld),_.position.applyMatrix4(g),_.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),_.direction.sub(s),_.direction.transformDirection(g),d++}else if(y.isRectAreaLight){let _=n.rectArea[m];_.position.setFromMatrixPosition(y.matrixWorld),_.position.applyMatrix4(g),o.identity(),r.copy(y.matrixWorld),r.premultiply(g),o.extractRotation(r),_.halfWidth.set(y.width*.5,0,0),_.halfHeight.set(0,y.height*.5,0),_.halfWidth.applyMatrix4(o),_.halfHeight.applyMatrix4(o),m++}else if(y.isPointLight){let _=n.point[f];_.position.setFromMatrixPosition(y.matrixWorld),_.position.applyMatrix4(g),f++}else if(y.isHemisphereLight){let _=n.hemi[x];_.direction.setFromMatrixPosition(y.matrixWorld),_.direction.transformDirection(g),x++}}}return{setup:a,setupView:l,state:n}}function Dd(i){let t=new I_(i),e=[],n=[];function s(h){c.camera=h,e.length=0,n.length=0}function r(h){e.push(h)}function o(h){n.push(h)}function a(){t.setup(e)}function l(h){t.setupView(e,h)}let c={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:s,state:c,setupLights:a,setupLightsView:l,pushLight:r,pushShadow:o}}function L_(i){let t=new WeakMap;function e(s,r=0){let o=t.get(s),a;return o===void 0?(a=new Dd(i),t.set(s,[a])):r>=o.length?(a=new Dd(i),o.push(a)):a=o[r],a}function n(){t=new WeakMap}return{get:e,dispose:n}}var D_=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,U_=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function N_(i,t,e){let n=new Ws,s=new nt,r=new nt,o=new fe,a=new xa({depthPacking:Yu}),l=new _a,c={},h=e.maxTextureSize,u={[hi]:nn,[nn]:hi,[pe]:pe},f=new Se({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new nt},radius:{value:4}},vertexShader:D_,fragmentShader:U_}),d=f.clone();d.defines.HORIZONTAL_PASS=1;let m=new ie;m.setAttribute("position",new Me(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let x=new j(m,f),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Wc;let p=this.type;this.render=function(T,C,L){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||T.length===0)return;let M=i.getRenderTarget(),S=i.getActiveCubeFace(),D=i.getActiveMipmapLevel(),B=i.state;B.setBlending(On),B.buffers.depth.getReversed()===!0?B.buffers.color.setClear(0,0,0,0):B.buffers.color.setClear(1,1,1,1),B.buffers.depth.setTest(!0),B.setScissorTest(!1);let I=p!==Kn&&this.type===Kn,U=p===Kn&&this.type!==Kn;for(let k=0,z=T.length;k<z;k++){let O=T[k],N=O.shadow;if(N===void 0){console.warn("THREE.WebGLShadowMap:",O,"has no shadow.");continue}if(N.autoUpdate===!1&&N.needsUpdate===!1)continue;s.copy(N.mapSize);let Z=N.getFrameExtents();if(s.multiply(Z),r.copy(N.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/Z.x),s.x=r.x*Z.x,N.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/Z.y),s.y=r.y*Z.y,N.mapSize.y=r.y)),N.map===null||I===!0||U===!0){let ht=this.type!==Kn?{minFilter:fn,magFilter:fn}:{};N.map!==null&&N.map.dispose(),N.map=new Je(s.x,s.y,ht),N.map.texture.name=O.name+".shadowMap",N.camera.updateProjectionMatrix()}i.setRenderTarget(N.map),i.clear();let Q=N.getViewportCount();for(let ht=0;ht<Q;ht++){let Mt=N.getViewport(ht);o.set(r.x*Mt.x,r.y*Mt.y,r.x*Mt.z,r.y*Mt.w),B.viewport(o),N.updateMatrices(O,ht),n=N.getFrustum(),_(C,L,N.camera,O,this.type)}N.isPointLightShadow!==!0&&this.type===Kn&&E(N,L),N.needsUpdate=!1}p=this.type,g.needsUpdate=!1,i.setRenderTarget(M,S,D)};function E(T,C){let L=t.update(x);f.defines.VSM_SAMPLES!==T.blurSamples&&(f.defines.VSM_SAMPLES=T.blurSamples,d.defines.VSM_SAMPLES=T.blurSamples,f.needsUpdate=!0,d.needsUpdate=!0),T.mapPass===null&&(T.mapPass=new Je(s.x,s.y)),f.uniforms.shadow_pass.value=T.map.texture,f.uniforms.resolution.value=T.mapSize,f.uniforms.radius.value=T.radius,i.setRenderTarget(T.mapPass),i.clear(),i.renderBufferDirect(C,null,L,f,x,null),d.uniforms.shadow_pass.value=T.mapPass.texture,d.uniforms.resolution.value=T.mapSize,d.uniforms.radius.value=T.radius,i.setRenderTarget(T.map),i.clear(),i.renderBufferDirect(C,null,L,d,x,null)}function y(T,C,L,M){let S=null,D=L.isPointLight===!0?T.customDistanceMaterial:T.customDepthMaterial;if(D!==void 0)S=D;else if(S=L.isPointLight===!0?l:a,i.localClippingEnabled&&C.clipShadows===!0&&Array.isArray(C.clippingPlanes)&&C.clippingPlanes.length!==0||C.displacementMap&&C.displacementScale!==0||C.alphaMap&&C.alphaTest>0||C.map&&C.alphaTest>0||C.alphaToCoverage===!0){let B=S.uuid,I=C.uuid,U=c[B];U===void 0&&(U={},c[B]=U);let k=U[I];k===void 0&&(k=S.clone(),U[I]=k,C.addEventListener("dispose",A)),S=k}if(S.visible=C.visible,S.wireframe=C.wireframe,M===Kn?S.side=C.shadowSide!==null?C.shadowSide:C.side:S.side=C.shadowSide!==null?C.shadowSide:u[C.side],S.alphaMap=C.alphaMap,S.alphaTest=C.alphaToCoverage===!0?.5:C.alphaTest,S.map=C.map,S.clipShadows=C.clipShadows,S.clippingPlanes=C.clippingPlanes,S.clipIntersection=C.clipIntersection,S.displacementMap=C.displacementMap,S.displacementScale=C.displacementScale,S.displacementBias=C.displacementBias,S.wireframeLinewidth=C.wireframeLinewidth,S.linewidth=C.linewidth,L.isPointLight===!0&&S.isMeshDistanceMaterial===!0){let B=i.properties.get(S);B.light=L}return S}function _(T,C,L,M,S){if(T.visible===!1)return;if(T.layers.test(C.layers)&&(T.isMesh||T.isLine||T.isPoints)&&(T.castShadow||T.receiveShadow&&S===Kn)&&(!T.frustumCulled||n.intersectsObject(T))){T.modelViewMatrix.multiplyMatrices(L.matrixWorldInverse,T.matrixWorld);let I=t.update(T),U=T.material;if(Array.isArray(U)){let k=I.groups;for(let z=0,O=k.length;z<O;z++){let N=k[z],Z=U[N.materialIndex];if(Z&&Z.visible){let Q=y(T,Z,M,S);T.onBeforeShadow(i,T,C,L,I,Q,N),i.renderBufferDirect(L,null,I,Q,T,N),T.onAfterShadow(i,T,C,L,I,Q,N)}}}else if(U.visible){let k=y(T,U,M,S);T.onBeforeShadow(i,T,C,L,I,k,null),i.renderBufferDirect(L,null,I,k,T,null),T.onAfterShadow(i,T,C,L,I,k,null)}}let B=T.children;for(let I=0,U=B.length;I<U;I++)_(B[I],C,L,M,S)}function A(T){T.target.removeEventListener("dispose",A);for(let L in c){let M=c[L],S=T.target.uuid;S in M&&(M[S].dispose(),delete M[S])}}}var F_={[Pa]:Ia,[La]:Na,[Da]:Fa,[Yi]:Ua,[Ia]:Pa,[Na]:La,[Fa]:Da,[Ua]:Yi};function B_(i,t){function e(){let F=!1,dt=new fe,mt=null,gt=new fe(0,0,0,0);return{setMask:function(xt){mt!==xt&&!F&&(i.colorMask(xt,xt,xt,xt),mt=xt)},setLocked:function(xt){F=xt},setClear:function(xt,ct,zt,$t,ve){ve===!0&&(xt*=$t,ct*=$t,zt*=$t),dt.set(xt,ct,zt,$t),gt.equals(dt)===!1&&(i.clearColor(xt,ct,zt,$t),gt.copy(dt))},reset:function(){F=!1,mt=null,gt.set(-1,0,0,0)}}}function n(){let F=!1,dt=!1,mt=null,gt=null,xt=null;return{setReversed:function(ct){if(dt!==ct){let zt=t.get("EXT_clip_control");ct?zt.clipControlEXT(zt.LOWER_LEFT_EXT,zt.ZERO_TO_ONE_EXT):zt.clipControlEXT(zt.LOWER_LEFT_EXT,zt.NEGATIVE_ONE_TO_ONE_EXT),dt=ct;let $t=xt;xt=null,this.setClear($t)}},getReversed:function(){return dt},setTest:function(ct){ct?Y(i.DEPTH_TEST):at(i.DEPTH_TEST)},setMask:function(ct){mt!==ct&&!F&&(i.depthMask(ct),mt=ct)},setFunc:function(ct){if(dt&&(ct=F_[ct]),gt!==ct){switch(ct){case Pa:i.depthFunc(i.NEVER);break;case Ia:i.depthFunc(i.ALWAYS);break;case La:i.depthFunc(i.LESS);break;case Yi:i.depthFunc(i.LEQUAL);break;case Da:i.depthFunc(i.EQUAL);break;case Ua:i.depthFunc(i.GEQUAL);break;case Na:i.depthFunc(i.GREATER);break;case Fa:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}gt=ct}},setLocked:function(ct){F=ct},setClear:function(ct){xt!==ct&&(dt&&(ct=1-ct),i.clearDepth(ct),xt=ct)},reset:function(){F=!1,mt=null,gt=null,xt=null,dt=!1}}}function s(){let F=!1,dt=null,mt=null,gt=null,xt=null,ct=null,zt=null,$t=null,ve=null;return{setTest:function(le){F||(le?Y(i.STENCIL_TEST):at(i.STENCIL_TEST))},setMask:function(le){dt!==le&&!F&&(i.stencilMask(le),dt=le)},setFunc:function(le,ni,Xn){(mt!==le||gt!==ni||xt!==Xn)&&(i.stencilFunc(le,ni,Xn),mt=le,gt=ni,xt=Xn)},setOp:function(le,ni,Xn){(ct!==le||zt!==ni||$t!==Xn)&&(i.stencilOp(le,ni,Xn),ct=le,zt=ni,$t=Xn)},setLocked:function(le){F=le},setClear:function(le){ve!==le&&(i.clearStencil(le),ve=le)},reset:function(){F=!1,dt=null,mt=null,gt=null,xt=null,ct=null,zt=null,$t=null,ve=null}}}let r=new e,o=new n,a=new s,l=new WeakMap,c=new WeakMap,h={},u={},f=new WeakMap,d=[],m=null,x=!1,g=null,p=null,E=null,y=null,_=null,A=null,T=null,C=new vt(0,0,0),L=0,M=!1,S=null,D=null,B=null,I=null,U=null,k=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),z=!1,O=0,N=i.getParameter(i.VERSION);N.indexOf("WebGL")!==-1?(O=parseFloat(/^WebGL (\d)/.exec(N)[1]),z=O>=1):N.indexOf("OpenGL ES")!==-1&&(O=parseFloat(/^OpenGL ES (\d)/.exec(N)[1]),z=O>=2);let Z=null,Q={},ht=i.getParameter(i.SCISSOR_BOX),Mt=i.getParameter(i.VIEWPORT),_t=new fe().fromArray(ht),Ut=new fe().fromArray(Mt);function rt(F,dt,mt,gt){let xt=new Uint8Array(4),ct=i.createTexture();i.bindTexture(F,ct),i.texParameteri(F,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(F,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let zt=0;zt<mt;zt++)F===i.TEXTURE_3D||F===i.TEXTURE_2D_ARRAY?i.texImage3D(dt,0,i.RGBA,1,1,gt,0,i.RGBA,i.UNSIGNED_BYTE,xt):i.texImage2D(dt+zt,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,xt);return ct}let H={};H[i.TEXTURE_2D]=rt(i.TEXTURE_2D,i.TEXTURE_2D,1),H[i.TEXTURE_CUBE_MAP]=rt(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),H[i.TEXTURE_2D_ARRAY]=rt(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),H[i.TEXTURE_3D]=rt(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),Y(i.DEPTH_TEST),o.setFunc(Yi),ot(!1),st(Gc),Y(i.CULL_FACE),tt(On);function Y(F){h[F]!==!0&&(i.enable(F),h[F]=!0)}function at(F){h[F]!==!1&&(i.disable(F),h[F]=!1)}function ut(F,dt){return u[F]!==dt?(i.bindFramebuffer(F,dt),u[F]=dt,F===i.DRAW_FRAMEBUFFER&&(u[i.FRAMEBUFFER]=dt),F===i.FRAMEBUFFER&&(u[i.DRAW_FRAMEBUFFER]=dt),!0):!1}function et(F,dt){let mt=d,gt=!1;if(F){mt=f.get(dt),mt===void 0&&(mt=[],f.set(dt,mt));let xt=F.textures;if(mt.length!==xt.length||mt[0]!==i.COLOR_ATTACHMENT0){for(let ct=0,zt=xt.length;ct<zt;ct++)mt[ct]=i.COLOR_ATTACHMENT0+ct;mt.length=xt.length,gt=!0}}else mt[0]!==i.BACK&&(mt[0]=i.BACK,gt=!0);gt&&i.drawBuffers(mt)}function Tt(F){return m!==F?(i.useProgram(F),m=F,!0):!1}let Pt={[Ai]:i.FUNC_ADD,[wu]:i.FUNC_SUBTRACT,[Au]:i.FUNC_REVERSE_SUBTRACT};Pt[Ru]=i.MIN,Pt[Cu]=i.MAX;let P={[Pu]:i.ZERO,[Iu]:i.ONE,[Lu]:i.SRC_COLOR,[ta]:i.SRC_ALPHA,[Ou]:i.SRC_ALPHA_SATURATE,[Fu]:i.DST_COLOR,[Uu]:i.DST_ALPHA,[Du]:i.ONE_MINUS_SRC_COLOR,[ea]:i.ONE_MINUS_SRC_ALPHA,[Bu]:i.ONE_MINUS_DST_COLOR,[Nu]:i.ONE_MINUS_DST_ALPHA,[Hu]:i.CONSTANT_COLOR,[zu]:i.ONE_MINUS_CONSTANT_COLOR,[ku]:i.CONSTANT_ALPHA,[Vu]:i.ONE_MINUS_CONSTANT_ALPHA};function tt(F,dt,mt,gt,xt,ct,zt,$t,ve,le){if(F===On){x===!0&&(at(i.BLEND),x=!1);return}if(x===!1&&(Y(i.BLEND),x=!0),F!==Tu){if(F!==g||le!==M){if((p!==Ai||_!==Ai)&&(i.blendEquation(i.FUNC_ADD),p=Ai,_=Ai),le)switch(F){case qi:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Qn:i.blendFunc(i.ONE,i.ONE);break;case Xc:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case qc:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",F);break}else switch(F){case qi:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Qn:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case Xc:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case qc:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",F);break}E=null,y=null,A=null,T=null,C.set(0,0,0),L=0,g=F,M=le}return}xt=xt||dt,ct=ct||mt,zt=zt||gt,(dt!==p||xt!==_)&&(i.blendEquationSeparate(Pt[dt],Pt[xt]),p=dt,_=xt),(mt!==E||gt!==y||ct!==A||zt!==T)&&(i.blendFuncSeparate(P[mt],P[gt],P[ct],P[zt]),E=mt,y=gt,A=ct,T=zt),($t.equals(C)===!1||ve!==L)&&(i.blendColor($t.r,$t.g,$t.b,ve),C.copy($t),L=ve),g=F,M=!1}function it(F,dt){F.side===pe?at(i.CULL_FACE):Y(i.CULL_FACE);let mt=F.side===nn;dt&&(mt=!mt),ot(mt),F.blending===qi&&F.transparent===!1?tt(On):tt(F.blending,F.blendEquation,F.blendSrc,F.blendDst,F.blendEquationAlpha,F.blendSrcAlpha,F.blendDstAlpha,F.blendColor,F.blendAlpha,F.premultipliedAlpha),o.setFunc(F.depthFunc),o.setTest(F.depthTest),o.setMask(F.depthWrite),r.setMask(F.colorWrite);let gt=F.stencilWrite;a.setTest(gt),gt&&(a.setMask(F.stencilWriteMask),a.setFunc(F.stencilFunc,F.stencilRef,F.stencilFuncMask),a.setOp(F.stencilFail,F.stencilZFail,F.stencilZPass)),yt(F.polygonOffset,F.polygonOffsetFactor,F.polygonOffsetUnits),F.alphaToCoverage===!0?Y(i.SAMPLE_ALPHA_TO_COVERAGE):at(i.SAMPLE_ALPHA_TO_COVERAGE)}function ot(F){S!==F&&(F?i.frontFace(i.CW):i.frontFace(i.CCW),S=F)}function st(F){F!==Eu?(Y(i.CULL_FACE),F!==D&&(F===Gc?i.cullFace(i.BACK):F===bu?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):at(i.CULL_FACE),D=F}function wt(F){F!==B&&(z&&i.lineWidth(F),B=F)}function yt(F,dt,mt){F?(Y(i.POLYGON_OFFSET_FILL),(I!==dt||U!==mt)&&(i.polygonOffset(dt,mt),I=dt,U=mt)):at(i.POLYGON_OFFSET_FILL)}function q(F){F?Y(i.SCISSOR_TEST):at(i.SCISSOR_TEST)}function ft(F){F===void 0&&(F=i.TEXTURE0+k-1),Z!==F&&(i.activeTexture(F),Z=F)}function St(F,dt,mt){mt===void 0&&(Z===null?mt=i.TEXTURE0+k-1:mt=Z);let gt=Q[mt];gt===void 0&&(gt={type:void 0,texture:void 0},Q[mt]=gt),(gt.type!==F||gt.texture!==dt)&&(Z!==mt&&(i.activeTexture(mt),Z=mt),i.bindTexture(F,dt||H[F]),gt.type=F,gt.texture=dt)}function w(){let F=Q[Z];F!==void 0&&F.type!==void 0&&(i.bindTexture(F.type,null),F.type=void 0,F.texture=void 0)}function v(){try{i.compressedTexImage2D(...arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function V(){try{i.compressedTexImage3D(...arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function X(){try{i.texSubImage2D(...arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function lt(){try{i.texSubImage3D(...arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function J(){try{i.compressedTexSubImage2D(...arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Ft(){try{i.compressedTexSubImage3D(...arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Et(){try{i.texStorage2D(...arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Rt(){try{i.texStorage3D(...arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Nt(){try{i.texImage2D(...arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function pt(){try{i.texImage3D(...arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Ct(F){_t.equals(F)===!1&&(i.scissor(F.x,F.y,F.z,F.w),_t.copy(F))}function kt(F){Ut.equals(F)===!1&&(i.viewport(F.x,F.y,F.z,F.w),Ut.copy(F))}function Bt(F,dt){let mt=c.get(dt);mt===void 0&&(mt=new WeakMap,c.set(dt,mt));let gt=mt.get(F);gt===void 0&&(gt=i.getUniformBlockIndex(dt,F.name),mt.set(F,gt))}function At(F,dt){let gt=c.get(dt).get(F);l.get(dt)!==gt&&(i.uniformBlockBinding(dt,gt,F.__bindingPointIndex),l.set(dt,gt))}function Yt(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),o.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),h={},Z=null,Q={},u={},f=new WeakMap,d=[],m=null,x=!1,g=null,p=null,E=null,y=null,_=null,A=null,T=null,C=new vt(0,0,0),L=0,M=!1,S=null,D=null,B=null,I=null,U=null,_t.set(0,0,i.canvas.width,i.canvas.height),Ut.set(0,0,i.canvas.width,i.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:Y,disable:at,bindFramebuffer:ut,drawBuffers:et,useProgram:Tt,setBlending:tt,setMaterial:it,setFlipSided:ot,setCullFace:st,setLineWidth:wt,setPolygonOffset:yt,setScissorTest:q,activeTexture:ft,bindTexture:St,unbindTexture:w,compressedTexImage2D:v,compressedTexImage3D:V,texImage2D:Nt,texImage3D:pt,updateUBOMapping:Bt,uniformBlockBinding:At,texStorage2D:Et,texStorage3D:Rt,texSubImage2D:X,texSubImage3D:lt,compressedTexSubImage2D:J,compressedTexSubImage3D:Ft,scissor:Ct,viewport:kt,reset:Yt}}function O_(i,t,e,n,s,r,o){let a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new nt,h=new WeakMap,u,f=new WeakMap,d=!1;try{d=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function m(w,v){return d?new OffscreenCanvas(w,v):Ur("canvas")}function x(w,v,V){let X=1,lt=St(w);if((lt.width>V||lt.height>V)&&(X=V/Math.max(lt.width,lt.height)),X<1)if(typeof HTMLImageElement<"u"&&w instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&w instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&w instanceof ImageBitmap||typeof VideoFrame<"u"&&w instanceof VideoFrame){let J=Math.floor(X*lt.width),Ft=Math.floor(X*lt.height);u===void 0&&(u=m(J,Ft));let Et=v?m(J,Ft):u;return Et.width=J,Et.height=Ft,Et.getContext("2d").drawImage(w,0,0,J,Ft),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+lt.width+"x"+lt.height+") to ("+J+"x"+Ft+")."),Et}else return"data"in w&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+lt.width+"x"+lt.height+")."),w;return w}function g(w){return w.generateMipmaps}function p(w){i.generateMipmap(w)}function E(w){return w.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:w.isWebGL3DRenderTarget?i.TEXTURE_3D:w.isWebGLArrayRenderTarget||w.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function y(w,v,V,X,lt=!1){if(w!==null){if(i[w]!==void 0)return i[w];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+w+"'")}let J=v;if(v===i.RED&&(V===i.FLOAT&&(J=i.R32F),V===i.HALF_FLOAT&&(J=i.R16F),V===i.UNSIGNED_BYTE&&(J=i.R8)),v===i.RED_INTEGER&&(V===i.UNSIGNED_BYTE&&(J=i.R8UI),V===i.UNSIGNED_SHORT&&(J=i.R16UI),V===i.UNSIGNED_INT&&(J=i.R32UI),V===i.BYTE&&(J=i.R8I),V===i.SHORT&&(J=i.R16I),V===i.INT&&(J=i.R32I)),v===i.RG&&(V===i.FLOAT&&(J=i.RG32F),V===i.HALF_FLOAT&&(J=i.RG16F),V===i.UNSIGNED_BYTE&&(J=i.RG8)),v===i.RG_INTEGER&&(V===i.UNSIGNED_BYTE&&(J=i.RG8UI),V===i.UNSIGNED_SHORT&&(J=i.RG16UI),V===i.UNSIGNED_INT&&(J=i.RG32UI),V===i.BYTE&&(J=i.RG8I),V===i.SHORT&&(J=i.RG16I),V===i.INT&&(J=i.RG32I)),v===i.RGB_INTEGER&&(V===i.UNSIGNED_BYTE&&(J=i.RGB8UI),V===i.UNSIGNED_SHORT&&(J=i.RGB16UI),V===i.UNSIGNED_INT&&(J=i.RGB32UI),V===i.BYTE&&(J=i.RGB8I),V===i.SHORT&&(J=i.RGB16I),V===i.INT&&(J=i.RGB32I)),v===i.RGBA_INTEGER&&(V===i.UNSIGNED_BYTE&&(J=i.RGBA8UI),V===i.UNSIGNED_SHORT&&(J=i.RGBA16UI),V===i.UNSIGNED_INT&&(J=i.RGBA32UI),V===i.BYTE&&(J=i.RGBA8I),V===i.SHORT&&(J=i.RGBA16I),V===i.INT&&(J=i.RGBA32I)),v===i.RGB&&(V===i.UNSIGNED_INT_5_9_9_9_REV&&(J=i.RGB9_E5),V===i.UNSIGNED_INT_10F_11F_11F_REV&&(J=i.R11F_G11F_B10F)),v===i.RGBA){let Ft=lt?Lr:ee.getTransfer(X);V===i.FLOAT&&(J=i.RGBA32F),V===i.HALF_FLOAT&&(J=i.RGBA16F),V===i.UNSIGNED_BYTE&&(J=Ft===re?i.SRGB8_ALPHA8:i.RGBA8),V===i.UNSIGNED_SHORT_4_4_4_4&&(J=i.RGBA4),V===i.UNSIGNED_SHORT_5_5_5_1&&(J=i.RGB5_A1)}return(J===i.R16F||J===i.R32F||J===i.RG16F||J===i.RG32F||J===i.RGBA16F||J===i.RGBA32F)&&t.get("EXT_color_buffer_float"),J}function _(w,v){let V;return w?v===null||v===Li||v===js?V=i.DEPTH24_STENCIL8:v===zn?V=i.DEPTH32F_STENCIL8:v===Qs&&(V=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):v===null||v===Li||v===js?V=i.DEPTH_COMPONENT24:v===zn?V=i.DEPTH_COMPONENT32F:v===Qs&&(V=i.DEPTH_COMPONENT16),V}function A(w,v){return g(w)===!0||w.isFramebufferTexture&&w.minFilter!==fn&&w.minFilter!==Un?Math.log2(Math.max(v.width,v.height))+1:w.mipmaps!==void 0&&w.mipmaps.length>0?w.mipmaps.length:w.isCompressedTexture&&Array.isArray(w.image)?v.mipmaps.length:1}function T(w){let v=w.target;v.removeEventListener("dispose",T),L(v),v.isVideoTexture&&h.delete(v)}function C(w){let v=w.target;v.removeEventListener("dispose",C),S(v)}function L(w){let v=n.get(w);if(v.__webglInit===void 0)return;let V=w.source,X=f.get(V);if(X){let lt=X[v.__cacheKey];lt.usedTimes--,lt.usedTimes===0&&M(w),Object.keys(X).length===0&&f.delete(V)}n.remove(w)}function M(w){let v=n.get(w);i.deleteTexture(v.__webglTexture);let V=w.source,X=f.get(V);delete X[v.__cacheKey],o.memory.textures--}function S(w){let v=n.get(w);if(w.depthTexture&&(w.depthTexture.dispose(),n.remove(w.depthTexture)),w.isWebGLCubeRenderTarget)for(let X=0;X<6;X++){if(Array.isArray(v.__webglFramebuffer[X]))for(let lt=0;lt<v.__webglFramebuffer[X].length;lt++)i.deleteFramebuffer(v.__webglFramebuffer[X][lt]);else i.deleteFramebuffer(v.__webglFramebuffer[X]);v.__webglDepthbuffer&&i.deleteRenderbuffer(v.__webglDepthbuffer[X])}else{if(Array.isArray(v.__webglFramebuffer))for(let X=0;X<v.__webglFramebuffer.length;X++)i.deleteFramebuffer(v.__webglFramebuffer[X]);else i.deleteFramebuffer(v.__webglFramebuffer);if(v.__webglDepthbuffer&&i.deleteRenderbuffer(v.__webglDepthbuffer),v.__webglMultisampledFramebuffer&&i.deleteFramebuffer(v.__webglMultisampledFramebuffer),v.__webglColorRenderbuffer)for(let X=0;X<v.__webglColorRenderbuffer.length;X++)v.__webglColorRenderbuffer[X]&&i.deleteRenderbuffer(v.__webglColorRenderbuffer[X]);v.__webglDepthRenderbuffer&&i.deleteRenderbuffer(v.__webglDepthRenderbuffer)}let V=w.textures;for(let X=0,lt=V.length;X<lt;X++){let J=n.get(V[X]);J.__webglTexture&&(i.deleteTexture(J.__webglTexture),o.memory.textures--),n.remove(V[X])}n.remove(w)}let D=0;function B(){D=0}function I(){let w=D;return w>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+w+" texture units while this GPU supports only "+s.maxTextures),D+=1,w}function U(w){let v=[];return v.push(w.wrapS),v.push(w.wrapT),v.push(w.wrapR||0),v.push(w.magFilter),v.push(w.minFilter),v.push(w.anisotropy),v.push(w.internalFormat),v.push(w.format),v.push(w.type),v.push(w.generateMipmaps),v.push(w.premultiplyAlpha),v.push(w.flipY),v.push(w.unpackAlignment),v.push(w.colorSpace),v.join()}function k(w,v){let V=n.get(w);if(w.isVideoTexture&&q(w),w.isRenderTargetTexture===!1&&w.isExternalTexture!==!0&&w.version>0&&V.__version!==w.version){let X=w.image;if(X===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(X.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{H(V,w,v);return}}else w.isExternalTexture&&(V.__webglTexture=w.sourceTexture?w.sourceTexture:null);e.bindTexture(i.TEXTURE_2D,V.__webglTexture,i.TEXTURE0+v)}function z(w,v){let V=n.get(w);if(w.isRenderTargetTexture===!1&&w.version>0&&V.__version!==w.version){H(V,w,v);return}e.bindTexture(i.TEXTURE_2D_ARRAY,V.__webglTexture,i.TEXTURE0+v)}function O(w,v){let V=n.get(w);if(w.isRenderTargetTexture===!1&&w.version>0&&V.__version!==w.version){H(V,w,v);return}e.bindTexture(i.TEXTURE_3D,V.__webglTexture,i.TEXTURE0+v)}function N(w,v){let V=n.get(w);if(w.version>0&&V.__version!==w.version){Y(V,w,v);return}e.bindTexture(i.TEXTURE_CUBE_MAP,V.__webglTexture,i.TEXTURE0+v)}let Z={[Bs]:i.REPEAT,[wi]:i.CLAMP_TO_EDGE,[na]:i.MIRRORED_REPEAT},Q={[fn]:i.NEAREST,[Xu]:i.NEAREST_MIPMAP_NEAREST,[lo]:i.NEAREST_MIPMAP_LINEAR,[Un]:i.LINEAR,[qa]:i.LINEAR_MIPMAP_NEAREST,[Ii]:i.LINEAR_MIPMAP_LINEAR},ht={[$u]:i.NEVER,[ed]:i.ALWAYS,[Ju]:i.LESS,[eh]:i.LEQUAL,[Ku]:i.EQUAL,[td]:i.GEQUAL,[Qu]:i.GREATER,[ju]:i.NOTEQUAL};function Mt(w,v){if(v.type===zn&&t.has("OES_texture_float_linear")===!1&&(v.magFilter===Un||v.magFilter===qa||v.magFilter===lo||v.magFilter===Ii||v.minFilter===Un||v.minFilter===qa||v.minFilter===lo||v.minFilter===Ii)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(w,i.TEXTURE_WRAP_S,Z[v.wrapS]),i.texParameteri(w,i.TEXTURE_WRAP_T,Z[v.wrapT]),(w===i.TEXTURE_3D||w===i.TEXTURE_2D_ARRAY)&&i.texParameteri(w,i.TEXTURE_WRAP_R,Z[v.wrapR]),i.texParameteri(w,i.TEXTURE_MAG_FILTER,Q[v.magFilter]),i.texParameteri(w,i.TEXTURE_MIN_FILTER,Q[v.minFilter]),v.compareFunction&&(i.texParameteri(w,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(w,i.TEXTURE_COMPARE_FUNC,ht[v.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(v.magFilter===fn||v.minFilter!==lo&&v.minFilter!==Ii||v.type===zn&&t.has("OES_texture_float_linear")===!1)return;if(v.anisotropy>1||n.get(v).__currentAnisotropy){let V=t.get("EXT_texture_filter_anisotropic");i.texParameterf(w,V.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(v.anisotropy,s.getMaxAnisotropy())),n.get(v).__currentAnisotropy=v.anisotropy}}}function _t(w,v){let V=!1;w.__webglInit===void 0&&(w.__webglInit=!0,v.addEventListener("dispose",T));let X=v.source,lt=f.get(X);lt===void 0&&(lt={},f.set(X,lt));let J=U(v);if(J!==w.__cacheKey){lt[J]===void 0&&(lt[J]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,V=!0),lt[J].usedTimes++;let Ft=lt[w.__cacheKey];Ft!==void 0&&(lt[w.__cacheKey].usedTimes--,Ft.usedTimes===0&&M(v)),w.__cacheKey=J,w.__webglTexture=lt[J].texture}return V}function Ut(w,v,V){return Math.floor(Math.floor(w/V)/v)}function rt(w,v,V,X){let J=w.updateRanges;if(J.length===0)e.texSubImage2D(i.TEXTURE_2D,0,0,0,v.width,v.height,V,X,v.data);else{J.sort((pt,Ct)=>pt.start-Ct.start);let Ft=0;for(let pt=1;pt<J.length;pt++){let Ct=J[Ft],kt=J[pt],Bt=Ct.start+Ct.count,At=Ut(kt.start,v.width,4),Yt=Ut(Ct.start,v.width,4);kt.start<=Bt+1&&At===Yt&&Ut(kt.start+kt.count-1,v.width,4)===At?Ct.count=Math.max(Ct.count,kt.start+kt.count-Ct.start):(++Ft,J[Ft]=kt)}J.length=Ft+1;let Et=i.getParameter(i.UNPACK_ROW_LENGTH),Rt=i.getParameter(i.UNPACK_SKIP_PIXELS),Nt=i.getParameter(i.UNPACK_SKIP_ROWS);i.pixelStorei(i.UNPACK_ROW_LENGTH,v.width);for(let pt=0,Ct=J.length;pt<Ct;pt++){let kt=J[pt],Bt=Math.floor(kt.start/4),At=Math.ceil(kt.count/4),Yt=Bt%v.width,F=Math.floor(Bt/v.width),dt=At,mt=1;i.pixelStorei(i.UNPACK_SKIP_PIXELS,Yt),i.pixelStorei(i.UNPACK_SKIP_ROWS,F),e.texSubImage2D(i.TEXTURE_2D,0,Yt,F,dt,mt,V,X,v.data)}w.clearUpdateRanges(),i.pixelStorei(i.UNPACK_ROW_LENGTH,Et),i.pixelStorei(i.UNPACK_SKIP_PIXELS,Rt),i.pixelStorei(i.UNPACK_SKIP_ROWS,Nt)}}function H(w,v,V){let X=i.TEXTURE_2D;(v.isDataArrayTexture||v.isCompressedArrayTexture)&&(X=i.TEXTURE_2D_ARRAY),v.isData3DTexture&&(X=i.TEXTURE_3D);let lt=_t(w,v),J=v.source;e.bindTexture(X,w.__webglTexture,i.TEXTURE0+V);let Ft=n.get(J);if(J.version!==Ft.__version||lt===!0){e.activeTexture(i.TEXTURE0+V);let Et=ee.getPrimaries(ee.workingColorSpace),Rt=v.colorSpace===kn?null:ee.getPrimaries(v.colorSpace),Nt=v.colorSpace===kn||Et===Rt?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,v.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,v.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Nt);let pt=x(v.image,!1,s.maxTextureSize);pt=ft(v,pt);let Ct=r.convert(v.format,v.colorSpace),kt=r.convert(v.type),Bt=y(v.internalFormat,Ct,kt,v.colorSpace,v.isVideoTexture);Mt(X,v);let At,Yt=v.mipmaps,F=v.isVideoTexture!==!0,dt=Ft.__version===void 0||lt===!0,mt=J.dataReady,gt=A(v,pt);if(v.isDepthTexture)Bt=_(v.format===tr,v.type),dt&&(F?e.texStorage2D(i.TEXTURE_2D,1,Bt,pt.width,pt.height):e.texImage2D(i.TEXTURE_2D,0,Bt,pt.width,pt.height,0,Ct,kt,null));else if(v.isDataTexture)if(Yt.length>0){F&&dt&&e.texStorage2D(i.TEXTURE_2D,gt,Bt,Yt[0].width,Yt[0].height);for(let xt=0,ct=Yt.length;xt<ct;xt++)At=Yt[xt],F?mt&&e.texSubImage2D(i.TEXTURE_2D,xt,0,0,At.width,At.height,Ct,kt,At.data):e.texImage2D(i.TEXTURE_2D,xt,Bt,At.width,At.height,0,Ct,kt,At.data);v.generateMipmaps=!1}else F?(dt&&e.texStorage2D(i.TEXTURE_2D,gt,Bt,pt.width,pt.height),mt&&rt(v,pt,Ct,kt)):e.texImage2D(i.TEXTURE_2D,0,Bt,pt.width,pt.height,0,Ct,kt,pt.data);else if(v.isCompressedTexture)if(v.isCompressedArrayTexture){F&&dt&&e.texStorage3D(i.TEXTURE_2D_ARRAY,gt,Bt,Yt[0].width,Yt[0].height,pt.depth);for(let xt=0,ct=Yt.length;xt<ct;xt++)if(At=Yt[xt],v.format!==Rn)if(Ct!==null)if(F){if(mt)if(v.layerUpdates.size>0){let zt=hh(At.width,At.height,v.format,v.type);for(let $t of v.layerUpdates){let ve=At.data.subarray($t*zt/At.data.BYTES_PER_ELEMENT,($t+1)*zt/At.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,xt,0,0,$t,At.width,At.height,1,Ct,ve)}v.clearLayerUpdates()}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,xt,0,0,0,At.width,At.height,pt.depth,Ct,At.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,xt,Bt,At.width,At.height,pt.depth,0,At.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else F?mt&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,xt,0,0,0,At.width,At.height,pt.depth,Ct,kt,At.data):e.texImage3D(i.TEXTURE_2D_ARRAY,xt,Bt,At.width,At.height,pt.depth,0,Ct,kt,At.data)}else{F&&dt&&e.texStorage2D(i.TEXTURE_2D,gt,Bt,Yt[0].width,Yt[0].height);for(let xt=0,ct=Yt.length;xt<ct;xt++)At=Yt[xt],v.format!==Rn?Ct!==null?F?mt&&e.compressedTexSubImage2D(i.TEXTURE_2D,xt,0,0,At.width,At.height,Ct,At.data):e.compressedTexImage2D(i.TEXTURE_2D,xt,Bt,At.width,At.height,0,At.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):F?mt&&e.texSubImage2D(i.TEXTURE_2D,xt,0,0,At.width,At.height,Ct,kt,At.data):e.texImage2D(i.TEXTURE_2D,xt,Bt,At.width,At.height,0,Ct,kt,At.data)}else if(v.isDataArrayTexture)if(F){if(dt&&e.texStorage3D(i.TEXTURE_2D_ARRAY,gt,Bt,pt.width,pt.height,pt.depth),mt)if(v.layerUpdates.size>0){let xt=hh(pt.width,pt.height,v.format,v.type);for(let ct of v.layerUpdates){let zt=pt.data.subarray(ct*xt/pt.data.BYTES_PER_ELEMENT,(ct+1)*xt/pt.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,ct,pt.width,pt.height,1,Ct,kt,zt)}v.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,pt.width,pt.height,pt.depth,Ct,kt,pt.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,Bt,pt.width,pt.height,pt.depth,0,Ct,kt,pt.data);else if(v.isData3DTexture)F?(dt&&e.texStorage3D(i.TEXTURE_3D,gt,Bt,pt.width,pt.height,pt.depth),mt&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,pt.width,pt.height,pt.depth,Ct,kt,pt.data)):e.texImage3D(i.TEXTURE_3D,0,Bt,pt.width,pt.height,pt.depth,0,Ct,kt,pt.data);else if(v.isFramebufferTexture){if(dt)if(F)e.texStorage2D(i.TEXTURE_2D,gt,Bt,pt.width,pt.height);else{let xt=pt.width,ct=pt.height;for(let zt=0;zt<gt;zt++)e.texImage2D(i.TEXTURE_2D,zt,Bt,xt,ct,0,Ct,kt,null),xt>>=1,ct>>=1}}else if(Yt.length>0){if(F&&dt){let xt=St(Yt[0]);e.texStorage2D(i.TEXTURE_2D,gt,Bt,xt.width,xt.height)}for(let xt=0,ct=Yt.length;xt<ct;xt++)At=Yt[xt],F?mt&&e.texSubImage2D(i.TEXTURE_2D,xt,0,0,Ct,kt,At):e.texImage2D(i.TEXTURE_2D,xt,Bt,Ct,kt,At);v.generateMipmaps=!1}else if(F){if(dt){let xt=St(pt);e.texStorage2D(i.TEXTURE_2D,gt,Bt,xt.width,xt.height)}mt&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,Ct,kt,pt)}else e.texImage2D(i.TEXTURE_2D,0,Bt,Ct,kt,pt);g(v)&&p(X),Ft.__version=J.version,v.onUpdate&&v.onUpdate(v)}w.__version=v.version}function Y(w,v,V){if(v.image.length!==6)return;let X=_t(w,v),lt=v.source;e.bindTexture(i.TEXTURE_CUBE_MAP,w.__webglTexture,i.TEXTURE0+V);let J=n.get(lt);if(lt.version!==J.__version||X===!0){e.activeTexture(i.TEXTURE0+V);let Ft=ee.getPrimaries(ee.workingColorSpace),Et=v.colorSpace===kn?null:ee.getPrimaries(v.colorSpace),Rt=v.colorSpace===kn||Ft===Et?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,v.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,v.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Rt);let Nt=v.isCompressedTexture||v.image[0].isCompressedTexture,pt=v.image[0]&&v.image[0].isDataTexture,Ct=[];for(let ct=0;ct<6;ct++)!Nt&&!pt?Ct[ct]=x(v.image[ct],!0,s.maxCubemapSize):Ct[ct]=pt?v.image[ct].image:v.image[ct],Ct[ct]=ft(v,Ct[ct]);let kt=Ct[0],Bt=r.convert(v.format,v.colorSpace),At=r.convert(v.type),Yt=y(v.internalFormat,Bt,At,v.colorSpace),F=v.isVideoTexture!==!0,dt=J.__version===void 0||X===!0,mt=lt.dataReady,gt=A(v,kt);Mt(i.TEXTURE_CUBE_MAP,v);let xt;if(Nt){F&&dt&&e.texStorage2D(i.TEXTURE_CUBE_MAP,gt,Yt,kt.width,kt.height);for(let ct=0;ct<6;ct++){xt=Ct[ct].mipmaps;for(let zt=0;zt<xt.length;zt++){let $t=xt[zt];v.format!==Rn?Bt!==null?F?mt&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ct,zt,0,0,$t.width,$t.height,Bt,$t.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ct,zt,Yt,$t.width,$t.height,0,$t.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):F?mt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ct,zt,0,0,$t.width,$t.height,Bt,At,$t.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ct,zt,Yt,$t.width,$t.height,0,Bt,At,$t.data)}}}else{if(xt=v.mipmaps,F&&dt){xt.length>0&&gt++;let ct=St(Ct[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,gt,Yt,ct.width,ct.height)}for(let ct=0;ct<6;ct++)if(pt){F?mt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ct,0,0,0,Ct[ct].width,Ct[ct].height,Bt,At,Ct[ct].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ct,0,Yt,Ct[ct].width,Ct[ct].height,0,Bt,At,Ct[ct].data);for(let zt=0;zt<xt.length;zt++){let ve=xt[zt].image[ct].image;F?mt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ct,zt+1,0,0,ve.width,ve.height,Bt,At,ve.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ct,zt+1,Yt,ve.width,ve.height,0,Bt,At,ve.data)}}else{F?mt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ct,0,0,0,Bt,At,Ct[ct]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ct,0,Yt,Bt,At,Ct[ct]);for(let zt=0;zt<xt.length;zt++){let $t=xt[zt];F?mt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ct,zt+1,0,0,Bt,At,$t.image[ct]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ct,zt+1,Yt,Bt,At,$t.image[ct])}}}g(v)&&p(i.TEXTURE_CUBE_MAP),J.__version=lt.version,v.onUpdate&&v.onUpdate(v)}w.__version=v.version}function at(w,v,V,X,lt,J){let Ft=r.convert(V.format,V.colorSpace),Et=r.convert(V.type),Rt=y(V.internalFormat,Ft,Et,V.colorSpace),Nt=n.get(v),pt=n.get(V);if(pt.__renderTarget=v,!Nt.__hasExternalTextures){let Ct=Math.max(1,v.width>>J),kt=Math.max(1,v.height>>J);lt===i.TEXTURE_3D||lt===i.TEXTURE_2D_ARRAY?e.texImage3D(lt,J,Rt,Ct,kt,v.depth,0,Ft,Et,null):e.texImage2D(lt,J,Rt,Ct,kt,0,Ft,Et,null)}e.bindFramebuffer(i.FRAMEBUFFER,w),yt(v)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,X,lt,pt.__webglTexture,0,wt(v)):(lt===i.TEXTURE_2D||lt>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&lt<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,X,lt,pt.__webglTexture,J),e.bindFramebuffer(i.FRAMEBUFFER,null)}function ut(w,v,V){if(i.bindRenderbuffer(i.RENDERBUFFER,w),v.depthBuffer){let X=v.depthTexture,lt=X&&X.isDepthTexture?X.type:null,J=_(v.stencilBuffer,lt),Ft=v.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Et=wt(v);yt(v)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Et,J,v.width,v.height):V?i.renderbufferStorageMultisample(i.RENDERBUFFER,Et,J,v.width,v.height):i.renderbufferStorage(i.RENDERBUFFER,J,v.width,v.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,Ft,i.RENDERBUFFER,w)}else{let X=v.textures;for(let lt=0;lt<X.length;lt++){let J=X[lt],Ft=r.convert(J.format,J.colorSpace),Et=r.convert(J.type),Rt=y(J.internalFormat,Ft,Et,J.colorSpace),Nt=wt(v);V&&yt(v)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,Nt,Rt,v.width,v.height):yt(v)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Nt,Rt,v.width,v.height):i.renderbufferStorage(i.RENDERBUFFER,Rt,v.width,v.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function et(w,v){if(v&&v.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(i.FRAMEBUFFER,w),!(v.depthTexture&&v.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");let X=n.get(v.depthTexture);X.__renderTarget=v,(!X.__webglTexture||v.depthTexture.image.width!==v.width||v.depthTexture.image.height!==v.height)&&(v.depthTexture.image.width=v.width,v.depthTexture.image.height=v.height,v.depthTexture.needsUpdate=!0),k(v.depthTexture,0);let lt=X.__webglTexture,J=wt(v);if(v.depthTexture.format===Os)yt(v)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,lt,0,J):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,lt,0);else if(v.depthTexture.format===tr)yt(v)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,lt,0,J):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,lt,0);else throw new Error("Unknown depthTexture format")}function Tt(w){let v=n.get(w),V=w.isWebGLCubeRenderTarget===!0;if(v.__boundDepthTexture!==w.depthTexture){let X=w.depthTexture;if(v.__depthDisposeCallback&&v.__depthDisposeCallback(),X){let lt=()=>{delete v.__boundDepthTexture,delete v.__depthDisposeCallback,X.removeEventListener("dispose",lt)};X.addEventListener("dispose",lt),v.__depthDisposeCallback=lt}v.__boundDepthTexture=X}if(w.depthTexture&&!v.__autoAllocateDepthBuffer){if(V)throw new Error("target.depthTexture not supported in Cube render targets");let X=w.texture.mipmaps;X&&X.length>0?et(v.__webglFramebuffer[0],w):et(v.__webglFramebuffer,w)}else if(V){v.__webglDepthbuffer=[];for(let X=0;X<6;X++)if(e.bindFramebuffer(i.FRAMEBUFFER,v.__webglFramebuffer[X]),v.__webglDepthbuffer[X]===void 0)v.__webglDepthbuffer[X]=i.createRenderbuffer(),ut(v.__webglDepthbuffer[X],w,!1);else{let lt=w.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,J=v.__webglDepthbuffer[X];i.bindRenderbuffer(i.RENDERBUFFER,J),i.framebufferRenderbuffer(i.FRAMEBUFFER,lt,i.RENDERBUFFER,J)}}else{let X=w.texture.mipmaps;if(X&&X.length>0?e.bindFramebuffer(i.FRAMEBUFFER,v.__webglFramebuffer[0]):e.bindFramebuffer(i.FRAMEBUFFER,v.__webglFramebuffer),v.__webglDepthbuffer===void 0)v.__webglDepthbuffer=i.createRenderbuffer(),ut(v.__webglDepthbuffer,w,!1);else{let lt=w.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,J=v.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,J),i.framebufferRenderbuffer(i.FRAMEBUFFER,lt,i.RENDERBUFFER,J)}}e.bindFramebuffer(i.FRAMEBUFFER,null)}function Pt(w,v,V){let X=n.get(w);v!==void 0&&at(X.__webglFramebuffer,w,w.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),V!==void 0&&Tt(w)}function P(w){let v=w.texture,V=n.get(w),X=n.get(v);w.addEventListener("dispose",C);let lt=w.textures,J=w.isWebGLCubeRenderTarget===!0,Ft=lt.length>1;if(Ft||(X.__webglTexture===void 0&&(X.__webglTexture=i.createTexture()),X.__version=v.version,o.memory.textures++),J){V.__webglFramebuffer=[];for(let Et=0;Et<6;Et++)if(v.mipmaps&&v.mipmaps.length>0){V.__webglFramebuffer[Et]=[];for(let Rt=0;Rt<v.mipmaps.length;Rt++)V.__webglFramebuffer[Et][Rt]=i.createFramebuffer()}else V.__webglFramebuffer[Et]=i.createFramebuffer()}else{if(v.mipmaps&&v.mipmaps.length>0){V.__webglFramebuffer=[];for(let Et=0;Et<v.mipmaps.length;Et++)V.__webglFramebuffer[Et]=i.createFramebuffer()}else V.__webglFramebuffer=i.createFramebuffer();if(Ft)for(let Et=0,Rt=lt.length;Et<Rt;Et++){let Nt=n.get(lt[Et]);Nt.__webglTexture===void 0&&(Nt.__webglTexture=i.createTexture(),o.memory.textures++)}if(w.samples>0&&yt(w)===!1){V.__webglMultisampledFramebuffer=i.createFramebuffer(),V.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,V.__webglMultisampledFramebuffer);for(let Et=0;Et<lt.length;Et++){let Rt=lt[Et];V.__webglColorRenderbuffer[Et]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,V.__webglColorRenderbuffer[Et]);let Nt=r.convert(Rt.format,Rt.colorSpace),pt=r.convert(Rt.type),Ct=y(Rt.internalFormat,Nt,pt,Rt.colorSpace,w.isXRRenderTarget===!0),kt=wt(w);i.renderbufferStorageMultisample(i.RENDERBUFFER,kt,Ct,w.width,w.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Et,i.RENDERBUFFER,V.__webglColorRenderbuffer[Et])}i.bindRenderbuffer(i.RENDERBUFFER,null),w.depthBuffer&&(V.__webglDepthRenderbuffer=i.createRenderbuffer(),ut(V.__webglDepthRenderbuffer,w,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(J){e.bindTexture(i.TEXTURE_CUBE_MAP,X.__webglTexture),Mt(i.TEXTURE_CUBE_MAP,v);for(let Et=0;Et<6;Et++)if(v.mipmaps&&v.mipmaps.length>0)for(let Rt=0;Rt<v.mipmaps.length;Rt++)at(V.__webglFramebuffer[Et][Rt],w,v,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+Et,Rt);else at(V.__webglFramebuffer[Et],w,v,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+Et,0);g(v)&&p(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(Ft){for(let Et=0,Rt=lt.length;Et<Rt;Et++){let Nt=lt[Et],pt=n.get(Nt),Ct=i.TEXTURE_2D;(w.isWebGL3DRenderTarget||w.isWebGLArrayRenderTarget)&&(Ct=w.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(Ct,pt.__webglTexture),Mt(Ct,Nt),at(V.__webglFramebuffer,w,Nt,i.COLOR_ATTACHMENT0+Et,Ct,0),g(Nt)&&p(Ct)}e.unbindTexture()}else{let Et=i.TEXTURE_2D;if((w.isWebGL3DRenderTarget||w.isWebGLArrayRenderTarget)&&(Et=w.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(Et,X.__webglTexture),Mt(Et,v),v.mipmaps&&v.mipmaps.length>0)for(let Rt=0;Rt<v.mipmaps.length;Rt++)at(V.__webglFramebuffer[Rt],w,v,i.COLOR_ATTACHMENT0,Et,Rt);else at(V.__webglFramebuffer,w,v,i.COLOR_ATTACHMENT0,Et,0);g(v)&&p(Et),e.unbindTexture()}w.depthBuffer&&Tt(w)}function tt(w){let v=w.textures;for(let V=0,X=v.length;V<X;V++){let lt=v[V];if(g(lt)){let J=E(w),Ft=n.get(lt).__webglTexture;e.bindTexture(J,Ft),p(J),e.unbindTexture()}}}let it=[],ot=[];function st(w){if(w.samples>0){if(yt(w)===!1){let v=w.textures,V=w.width,X=w.height,lt=i.COLOR_BUFFER_BIT,J=w.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Ft=n.get(w),Et=v.length>1;if(Et)for(let Nt=0;Nt<v.length;Nt++)e.bindFramebuffer(i.FRAMEBUFFER,Ft.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Nt,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,Ft.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Nt,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,Ft.__webglMultisampledFramebuffer);let Rt=w.texture.mipmaps;Rt&&Rt.length>0?e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Ft.__webglFramebuffer[0]):e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Ft.__webglFramebuffer);for(let Nt=0;Nt<v.length;Nt++){if(w.resolveDepthBuffer&&(w.depthBuffer&&(lt|=i.DEPTH_BUFFER_BIT),w.stencilBuffer&&w.resolveStencilBuffer&&(lt|=i.STENCIL_BUFFER_BIT)),Et){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,Ft.__webglColorRenderbuffer[Nt]);let pt=n.get(v[Nt]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,pt,0)}i.blitFramebuffer(0,0,V,X,0,0,V,X,lt,i.NEAREST),l===!0&&(it.length=0,ot.length=0,it.push(i.COLOR_ATTACHMENT0+Nt),w.depthBuffer&&w.resolveDepthBuffer===!1&&(it.push(J),ot.push(J),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,ot)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,it))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),Et)for(let Nt=0;Nt<v.length;Nt++){e.bindFramebuffer(i.FRAMEBUFFER,Ft.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Nt,i.RENDERBUFFER,Ft.__webglColorRenderbuffer[Nt]);let pt=n.get(v[Nt]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,Ft.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Nt,i.TEXTURE_2D,pt,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Ft.__webglMultisampledFramebuffer)}else if(w.depthBuffer&&w.resolveDepthBuffer===!1&&l){let v=w.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[v])}}}function wt(w){return Math.min(s.maxSamples,w.samples)}function yt(w){let v=n.get(w);return w.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&v.__useRenderToTexture!==!1}function q(w){let v=o.render.frame;h.get(w)!==v&&(h.set(w,v),w.update())}function ft(w,v){let V=w.colorSpace,X=w.format,lt=w.type;return w.isCompressedTexture===!0||w.isVideoTexture===!0||V!==Zi&&V!==kn&&(ee.getTransfer(V)===re?(X!==Rn||lt!==Hn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",V)),v}function St(w){return typeof HTMLImageElement<"u"&&w instanceof HTMLImageElement?(c.width=w.naturalWidth||w.width,c.height=w.naturalHeight||w.height):typeof VideoFrame<"u"&&w instanceof VideoFrame?(c.width=w.displayWidth,c.height=w.displayHeight):(c.width=w.width,c.height=w.height),c}this.allocateTextureUnit=I,this.resetTextureUnits=B,this.setTexture2D=k,this.setTexture2DArray=z,this.setTexture3D=O,this.setTextureCube=N,this.rebindTextures=Pt,this.setupRenderTarget=P,this.updateRenderTargetMipmap=tt,this.updateMultisampleRenderTarget=st,this.setupDepthRenderbuffer=Tt,this.setupFrameBufferTexture=at,this.useMultisampledRTT=yt}function H_(i,t){function e(n,s=kn){let r,o=ee.getTransfer(s);if(n===Hn)return i.UNSIGNED_BYTE;if(n===Za)return i.UNSIGNED_SHORT_4_4_4_4;if(n===$a)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Jc)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Kc)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===Zc)return i.BYTE;if(n===$c)return i.SHORT;if(n===Qs)return i.UNSIGNED_SHORT;if(n===Ya)return i.INT;if(n===Li)return i.UNSIGNED_INT;if(n===zn)return i.FLOAT;if(n===pn)return i.HALF_FLOAT;if(n===Qc)return i.ALPHA;if(n===jc)return i.RGB;if(n===Rn)return i.RGBA;if(n===Os)return i.DEPTH_COMPONENT;if(n===tr)return i.DEPTH_STENCIL;if(n===Ja)return i.RED;if(n===Ka)return i.RED_INTEGER;if(n===th)return i.RG;if(n===Qa)return i.RG_INTEGER;if(n===ja)return i.RGBA_INTEGER;if(n===co||n===ho||n===uo||n===fo)if(o===re)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===co)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===ho)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===uo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===fo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===co)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===ho)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===uo)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===fo)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===tl||n===el||n===nl||n===il)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===tl)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===el)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===nl)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===il)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===sl||n===rl||n===ol)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===sl||n===rl)return o===re?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===ol)return o===re?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===al||n===ll||n===cl||n===hl||n===ul||n===dl||n===fl||n===pl||n===ml||n===gl||n===xl||n===_l||n===yl||n===vl)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===al)return o===re?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===ll)return o===re?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===cl)return o===re?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===hl)return o===re?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===ul)return o===re?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===dl)return o===re?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===fl)return o===re?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===pl)return o===re?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===ml)return o===re?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===gl)return o===re?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===xl)return o===re?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===_l)return o===re?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===yl)return o===re?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===vl)return o===re?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Ml||n===Sl||n===El)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===Ml)return o===re?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Sl)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===El)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===bl||n===Tl||n===wl||n===Al)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===bl)return r.COMPRESSED_RED_RGTC1_EXT;if(n===Tl)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===wl)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Al)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===js?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}var z_=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,k_=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`,Eh=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){let n=new Xr(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=n}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,n=new Se({vertexShader:z_,fragmentShader:k_,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new j(new en(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},bh=class extends ui{constructor(t,e){super();let n=this,s=null,r=1,o=null,a="local-floor",l=1,c=null,h=null,u=null,f=null,d=null,m=null,x=typeof XRWebGLBinding<"u",g=new Eh,p={},E=e.getContextAttributes(),y=null,_=null,A=[],T=[],C=new nt,L=null,M=new $e;M.viewport=new fe;let S=new $e;S.viewport=new fe;let D=[M,S],B=new Ra,I=null,U=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(H){let Y=A[H];return Y===void 0&&(Y=new ks,A[H]=Y),Y.getTargetRaySpace()},this.getControllerGrip=function(H){let Y=A[H];return Y===void 0&&(Y=new ks,A[H]=Y),Y.getGripSpace()},this.getHand=function(H){let Y=A[H];return Y===void 0&&(Y=new ks,A[H]=Y),Y.getHandSpace()};function k(H){let Y=T.indexOf(H.inputSource);if(Y===-1)return;let at=A[Y];at!==void 0&&(at.update(H.inputSource,H.frame,c||o),at.dispatchEvent({type:H.type,data:H.inputSource}))}function z(){s.removeEventListener("select",k),s.removeEventListener("selectstart",k),s.removeEventListener("selectend",k),s.removeEventListener("squeeze",k),s.removeEventListener("squeezestart",k),s.removeEventListener("squeezeend",k),s.removeEventListener("end",z),s.removeEventListener("inputsourceschange",O);for(let H=0;H<A.length;H++){let Y=T[H];Y!==null&&(T[H]=null,A[H].disconnect(Y))}I=null,U=null,g.reset();for(let H in p)delete p[H];t.setRenderTarget(y),d=null,f=null,u=null,s=null,_=null,rt.stop(),n.isPresenting=!1,t.setPixelRatio(L),t.setSize(C.width,C.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(H){r=H,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(H){a=H,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(H){c=H},this.getBaseLayer=function(){return f!==null?f:d},this.getBinding=function(){return u===null&&x&&(u=new XRWebGLBinding(s,e)),u},this.getFrame=function(){return m},this.getSession=function(){return s},this.setSession=async function(H){if(s=H,s!==null){if(y=t.getRenderTarget(),s.addEventListener("select",k),s.addEventListener("selectstart",k),s.addEventListener("selectend",k),s.addEventListener("squeeze",k),s.addEventListener("squeezestart",k),s.addEventListener("squeezeend",k),s.addEventListener("end",z),s.addEventListener("inputsourceschange",O),E.xrCompatible!==!0&&await e.makeXRCompatible(),L=t.getPixelRatio(),t.getSize(C),x&&"createProjectionLayer"in XRWebGLBinding.prototype){let at=null,ut=null,et=null;E.depth&&(et=E.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,at=E.stencil?tr:Os,ut=E.stencil?js:Li);let Tt={colorFormat:e.RGBA8,depthFormat:et,scaleFactor:r};u=this.getBinding(),f=u.createProjectionLayer(Tt),s.updateRenderState({layers:[f]}),t.setPixelRatio(1),t.setSize(f.textureWidth,f.textureHeight,!1),_=new Je(f.textureWidth,f.textureHeight,{format:Rn,type:Hn,depthTexture:new Wr(f.textureWidth,f.textureHeight,ut,void 0,void 0,void 0,void 0,void 0,void 0,at),stencilBuffer:E.stencil,colorSpace:t.outputColorSpace,samples:E.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}else{let at={antialias:E.antialias,alpha:!0,depth:E.depth,stencil:E.stencil,framebufferScaleFactor:r};d=new XRWebGLLayer(s,e,at),s.updateRenderState({baseLayer:d}),t.setPixelRatio(1),t.setSize(d.framebufferWidth,d.framebufferHeight,!1),_=new Je(d.framebufferWidth,d.framebufferHeight,{format:Rn,type:Hn,colorSpace:t.outputColorSpace,stencilBuffer:E.stencil,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1})}_.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await s.requestReferenceSpace(a),rt.setContext(s),rt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return g.getDepthTexture()};function O(H){for(let Y=0;Y<H.removed.length;Y++){let at=H.removed[Y],ut=T.indexOf(at);ut>=0&&(T[ut]=null,A[ut].disconnect(at))}for(let Y=0;Y<H.added.length;Y++){let at=H.added[Y],ut=T.indexOf(at);if(ut===-1){for(let Tt=0;Tt<A.length;Tt++)if(Tt>=T.length){T.push(at),ut=Tt;break}else if(T[Tt]===null){T[Tt]=at,ut=Tt;break}if(ut===-1)break}let et=A[ut];et&&et.connect(at)}}let N=new R,Z=new R;function Q(H,Y,at){N.setFromMatrixPosition(Y.matrixWorld),Z.setFromMatrixPosition(at.matrixWorld);let ut=N.distanceTo(Z),et=Y.projectionMatrix.elements,Tt=at.projectionMatrix.elements,Pt=et[14]/(et[10]-1),P=et[14]/(et[10]+1),tt=(et[9]+1)/et[5],it=(et[9]-1)/et[5],ot=(et[8]-1)/et[0],st=(Tt[8]+1)/Tt[0],wt=Pt*ot,yt=Pt*st,q=ut/(-ot+st),ft=q*-ot;if(Y.matrixWorld.decompose(H.position,H.quaternion,H.scale),H.translateX(ft),H.translateZ(q),H.matrixWorld.compose(H.position,H.quaternion,H.scale),H.matrixWorldInverse.copy(H.matrixWorld).invert(),et[10]===-1)H.projectionMatrix.copy(Y.projectionMatrix),H.projectionMatrixInverse.copy(Y.projectionMatrixInverse);else{let St=Pt+q,w=P+q,v=wt-ft,V=yt+(ut-ft),X=tt*P/w*St,lt=it*P/w*St;H.projectionMatrix.makePerspective(v,V,X,lt,St,w),H.projectionMatrixInverse.copy(H.projectionMatrix).invert()}}function ht(H,Y){Y===null?H.matrixWorld.copy(H.matrix):H.matrixWorld.multiplyMatrices(Y.matrixWorld,H.matrix),H.matrixWorldInverse.copy(H.matrixWorld).invert()}this.updateCamera=function(H){if(s===null)return;let Y=H.near,at=H.far;g.texture!==null&&(g.depthNear>0&&(Y=g.depthNear),g.depthFar>0&&(at=g.depthFar)),B.near=S.near=M.near=Y,B.far=S.far=M.far=at,(I!==B.near||U!==B.far)&&(s.updateRenderState({depthNear:B.near,depthFar:B.far}),I=B.near,U=B.far),B.layers.mask=H.layers.mask|6,M.layers.mask=B.layers.mask&3,S.layers.mask=B.layers.mask&5;let ut=H.parent,et=B.cameras;ht(B,ut);for(let Tt=0;Tt<et.length;Tt++)ht(et[Tt],ut);et.length===2?Q(B,M,S):B.projectionMatrix.copy(M.projectionMatrix),Mt(H,B,ut)};function Mt(H,Y,at){at===null?H.matrix.copy(Y.matrixWorld):(H.matrix.copy(at.matrixWorld),H.matrix.invert(),H.matrix.multiply(Y.matrixWorld)),H.matrix.decompose(H.position,H.quaternion,H.scale),H.updateMatrixWorld(!0),H.projectionMatrix.copy(Y.projectionMatrix),H.projectionMatrixInverse.copy(Y.projectionMatrixInverse),H.isPerspectiveCamera&&(H.fov=$i*2*Math.atan(1/H.projectionMatrix.elements[5]),H.zoom=1)}this.getCamera=function(){return B},this.getFoveation=function(){if(!(f===null&&d===null))return l},this.setFoveation=function(H){l=H,f!==null&&(f.fixedFoveation=H),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=H)},this.hasDepthSensing=function(){return g.texture!==null},this.getDepthSensingMesh=function(){return g.getMesh(B)},this.getCameraTexture=function(H){return p[H]};let _t=null;function Ut(H,Y){if(h=Y.getViewerPose(c||o),m=Y,h!==null){let at=h.views;d!==null&&(t.setRenderTargetFramebuffer(_,d.framebuffer),t.setRenderTarget(_));let ut=!1;at.length!==B.cameras.length&&(B.cameras.length=0,ut=!0);for(let P=0;P<at.length;P++){let tt=at[P],it=null;if(d!==null)it=d.getViewport(tt);else{let st=u.getViewSubImage(f,tt);it=st.viewport,P===0&&(t.setRenderTargetTextures(_,st.colorTexture,st.depthStencilTexture),t.setRenderTarget(_))}let ot=D[P];ot===void 0&&(ot=new $e,ot.layers.enable(P),ot.viewport=new fe,D[P]=ot),ot.matrix.fromArray(tt.transform.matrix),ot.matrix.decompose(ot.position,ot.quaternion,ot.scale),ot.projectionMatrix.fromArray(tt.projectionMatrix),ot.projectionMatrixInverse.copy(ot.projectionMatrix).invert(),ot.viewport.set(it.x,it.y,it.width,it.height),P===0&&(B.matrix.copy(ot.matrix),B.matrix.decompose(B.position,B.quaternion,B.scale)),ut===!0&&B.cameras.push(ot)}let et=s.enabledFeatures;if(et&&et.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&x){u=n.getBinding();let P=u.getDepthInformation(at[0]);P&&P.isValid&&P.texture&&g.init(P,s.renderState)}if(et&&et.includes("camera-access")&&x){t.state.unbindTexture(),u=n.getBinding();for(let P=0;P<at.length;P++){let tt=at[P].camera;if(tt){let it=p[tt];it||(it=new Xr,p[tt]=it);let ot=u.getCameraImage(tt);it.sourceTexture=ot}}}}for(let at=0;at<A.length;at++){let ut=T[at],et=A[at];ut!==null&&et!==void 0&&et.update(ut,Y,c||o)}_t&&_t(H,Y),Y.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:Y}),m=null}let rt=new Ud;rt.setAnimationLoop(Ut),this.setAnimationLoop=function(H){_t=H},this.dispose=function(){}}},us=new Ke,V_=new ne;function G_(i,t){function e(g,p){g.matrixAutoUpdate===!0&&g.updateMatrix(),p.value.copy(g.matrix)}function n(g,p){p.color.getRGB(g.fogColor.value,oh(i)),p.isFog?(g.fogNear.value=p.near,g.fogFar.value=p.far):p.isFogExp2&&(g.fogDensity.value=p.density)}function s(g,p,E,y,_){p.isMeshBasicMaterial||p.isMeshLambertMaterial?r(g,p):p.isMeshToonMaterial?(r(g,p),u(g,p)):p.isMeshPhongMaterial?(r(g,p),h(g,p)):p.isMeshStandardMaterial?(r(g,p),f(g,p),p.isMeshPhysicalMaterial&&d(g,p,_)):p.isMeshMatcapMaterial?(r(g,p),m(g,p)):p.isMeshDepthMaterial?r(g,p):p.isMeshDistanceMaterial?(r(g,p),x(g,p)):p.isMeshNormalMaterial?r(g,p):p.isLineBasicMaterial?(o(g,p),p.isLineDashedMaterial&&a(g,p)):p.isPointsMaterial?l(g,p,E,y):p.isSpriteMaterial?c(g,p):p.isShadowMaterial?(g.color.value.copy(p.color),g.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(g,p){g.opacity.value=p.opacity,p.color&&g.diffuse.value.copy(p.color),p.emissive&&g.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(g.map.value=p.map,e(p.map,g.mapTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,e(p.alphaMap,g.alphaMapTransform)),p.bumpMap&&(g.bumpMap.value=p.bumpMap,e(p.bumpMap,g.bumpMapTransform),g.bumpScale.value=p.bumpScale,p.side===nn&&(g.bumpScale.value*=-1)),p.normalMap&&(g.normalMap.value=p.normalMap,e(p.normalMap,g.normalMapTransform),g.normalScale.value.copy(p.normalScale),p.side===nn&&g.normalScale.value.negate()),p.displacementMap&&(g.displacementMap.value=p.displacementMap,e(p.displacementMap,g.displacementMapTransform),g.displacementScale.value=p.displacementScale,g.displacementBias.value=p.displacementBias),p.emissiveMap&&(g.emissiveMap.value=p.emissiveMap,e(p.emissiveMap,g.emissiveMapTransform)),p.specularMap&&(g.specularMap.value=p.specularMap,e(p.specularMap,g.specularMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest);let E=t.get(p),y=E.envMap,_=E.envMapRotation;y&&(g.envMap.value=y,us.copy(_),us.x*=-1,us.y*=-1,us.z*=-1,y.isCubeTexture&&y.isRenderTargetTexture===!1&&(us.y*=-1,us.z*=-1),g.envMapRotation.value.setFromMatrix4(V_.makeRotationFromEuler(us)),g.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,g.reflectivity.value=p.reflectivity,g.ior.value=p.ior,g.refractionRatio.value=p.refractionRatio),p.lightMap&&(g.lightMap.value=p.lightMap,g.lightMapIntensity.value=p.lightMapIntensity,e(p.lightMap,g.lightMapTransform)),p.aoMap&&(g.aoMap.value=p.aoMap,g.aoMapIntensity.value=p.aoMapIntensity,e(p.aoMap,g.aoMapTransform))}function o(g,p){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,p.map&&(g.map.value=p.map,e(p.map,g.mapTransform))}function a(g,p){g.dashSize.value=p.dashSize,g.totalSize.value=p.dashSize+p.gapSize,g.scale.value=p.scale}function l(g,p,E,y){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,g.size.value=p.size*E,g.scale.value=y*.5,p.map&&(g.map.value=p.map,e(p.map,g.uvTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,e(p.alphaMap,g.alphaMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest)}function c(g,p){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,g.rotation.value=p.rotation,p.map&&(g.map.value=p.map,e(p.map,g.mapTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,e(p.alphaMap,g.alphaMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest)}function h(g,p){g.specular.value.copy(p.specular),g.shininess.value=Math.max(p.shininess,1e-4)}function u(g,p){p.gradientMap&&(g.gradientMap.value=p.gradientMap)}function f(g,p){g.metalness.value=p.metalness,p.metalnessMap&&(g.metalnessMap.value=p.metalnessMap,e(p.metalnessMap,g.metalnessMapTransform)),g.roughness.value=p.roughness,p.roughnessMap&&(g.roughnessMap.value=p.roughnessMap,e(p.roughnessMap,g.roughnessMapTransform)),p.envMap&&(g.envMapIntensity.value=p.envMapIntensity)}function d(g,p,E){g.ior.value=p.ior,p.sheen>0&&(g.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),g.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(g.sheenColorMap.value=p.sheenColorMap,e(p.sheenColorMap,g.sheenColorMapTransform)),p.sheenRoughnessMap&&(g.sheenRoughnessMap.value=p.sheenRoughnessMap,e(p.sheenRoughnessMap,g.sheenRoughnessMapTransform))),p.clearcoat>0&&(g.clearcoat.value=p.clearcoat,g.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(g.clearcoatMap.value=p.clearcoatMap,e(p.clearcoatMap,g.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,e(p.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(g.clearcoatNormalMap.value=p.clearcoatNormalMap,e(p.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===nn&&g.clearcoatNormalScale.value.negate())),p.dispersion>0&&(g.dispersion.value=p.dispersion),p.iridescence>0&&(g.iridescence.value=p.iridescence,g.iridescenceIOR.value=p.iridescenceIOR,g.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(g.iridescenceMap.value=p.iridescenceMap,e(p.iridescenceMap,g.iridescenceMapTransform)),p.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=p.iridescenceThicknessMap,e(p.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),p.transmission>0&&(g.transmission.value=p.transmission,g.transmissionSamplerMap.value=E.texture,g.transmissionSamplerSize.value.set(E.width,E.height),p.transmissionMap&&(g.transmissionMap.value=p.transmissionMap,e(p.transmissionMap,g.transmissionMapTransform)),g.thickness.value=p.thickness,p.thicknessMap&&(g.thicknessMap.value=p.thicknessMap,e(p.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=p.attenuationDistance,g.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(g.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(g.anisotropyMap.value=p.anisotropyMap,e(p.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=p.specularIntensity,g.specularColor.value.copy(p.specularColor),p.specularColorMap&&(g.specularColorMap.value=p.specularColorMap,e(p.specularColorMap,g.specularColorMapTransform)),p.specularIntensityMap&&(g.specularIntensityMap.value=p.specularIntensityMap,e(p.specularIntensityMap,g.specularIntensityMapTransform))}function m(g,p){p.matcap&&(g.matcap.value=p.matcap)}function x(g,p){let E=t.get(p).light;g.referencePosition.value.setFromMatrixPosition(E.matrixWorld),g.nearDistance.value=E.shadow.camera.near,g.farDistance.value=E.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function W_(i,t,e,n){let s={},r={},o=[],a=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(E,y){let _=y.program;n.uniformBlockBinding(E,_)}function c(E,y){let _=s[E.id];_===void 0&&(m(E),_=h(E),s[E.id]=_,E.addEventListener("dispose",g));let A=y.program;n.updateUBOMapping(E,A);let T=t.render.frame;r[E.id]!==T&&(f(E),r[E.id]=T)}function h(E){let y=u();E.__bindingPointIndex=y;let _=i.createBuffer(),A=E.__size,T=E.usage;return i.bindBuffer(i.UNIFORM_BUFFER,_),i.bufferData(i.UNIFORM_BUFFER,A,T),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,y,_),_}function u(){for(let E=0;E<a;E++)if(o.indexOf(E)===-1)return o.push(E),E;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(E){let y=s[E.id],_=E.uniforms,A=E.__cache;i.bindBuffer(i.UNIFORM_BUFFER,y);for(let T=0,C=_.length;T<C;T++){let L=Array.isArray(_[T])?_[T]:[_[T]];for(let M=0,S=L.length;M<S;M++){let D=L[M];if(d(D,T,M,A)===!0){let B=D.__offset,I=Array.isArray(D.value)?D.value:[D.value],U=0;for(let k=0;k<I.length;k++){let z=I[k],O=x(z);typeof z=="number"||typeof z=="boolean"?(D.__data[0]=z,i.bufferSubData(i.UNIFORM_BUFFER,B+U,D.__data)):z.isMatrix3?(D.__data[0]=z.elements[0],D.__data[1]=z.elements[1],D.__data[2]=z.elements[2],D.__data[3]=0,D.__data[4]=z.elements[3],D.__data[5]=z.elements[4],D.__data[6]=z.elements[5],D.__data[7]=0,D.__data[8]=z.elements[6],D.__data[9]=z.elements[7],D.__data[10]=z.elements[8],D.__data[11]=0):(z.toArray(D.__data,U),U+=O.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,B,D.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function d(E,y,_,A){let T=E.value,C=y+"_"+_;if(A[C]===void 0)return typeof T=="number"||typeof T=="boolean"?A[C]=T:A[C]=T.clone(),!0;{let L=A[C];if(typeof T=="number"||typeof T=="boolean"){if(L!==T)return A[C]=T,!0}else if(L.equals(T)===!1)return L.copy(T),!0}return!1}function m(E){let y=E.uniforms,_=0,A=16;for(let C=0,L=y.length;C<L;C++){let M=Array.isArray(y[C])?y[C]:[y[C]];for(let S=0,D=M.length;S<D;S++){let B=M[S],I=Array.isArray(B.value)?B.value:[B.value];for(let U=0,k=I.length;U<k;U++){let z=I[U],O=x(z),N=_%A,Z=N%O.boundary,Q=N+Z;_+=Z,Q!==0&&A-Q<O.storage&&(_+=A-Q),B.__data=new Float32Array(O.storage/Float32Array.BYTES_PER_ELEMENT),B.__offset=_,_+=O.storage}}}let T=_%A;return T>0&&(_+=A-T),E.__size=_,E.__cache={},this}function x(E){let y={boundary:0,storage:0};return typeof E=="number"||typeof E=="boolean"?(y.boundary=4,y.storage=4):E.isVector2?(y.boundary=8,y.storage=8):E.isVector3||E.isColor?(y.boundary=16,y.storage=12):E.isVector4?(y.boundary=16,y.storage=16):E.isMatrix3?(y.boundary=48,y.storage=48):E.isMatrix4?(y.boundary=64,y.storage=64):E.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",E),y}function g(E){let y=E.target;y.removeEventListener("dispose",g);let _=o.indexOf(y.__bindingPointIndex);o.splice(_,1),i.deleteBuffer(s[y.id]),delete s[y.id],delete r[y.id]}function p(){for(let E in s)i.deleteBuffer(s[E]);o=[],s={},r={}}return{bind:l,update:c,dispose:p}}var Ll=class{constructor(t={}){let{canvas:e=nd(),context:n=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reversedDepthBuffer:f=!1}=t;this.isWebGLRenderer=!0;let d;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");d=n.getContextAttributes().alpha}else d=o;let m=new Uint32Array(4),x=new Int32Array(4),g=null,p=null,E=[],y=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=fi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let _=this,A=!1;this._outputColorSpace=je;let T=0,C=0,L=null,M=-1,S=null,D=new fe,B=new fe,I=null,U=new vt(0),k=0,z=e.width,O=e.height,N=1,Z=null,Q=null,ht=new fe(0,0,z,O),Mt=new fe(0,0,z,O),_t=!1,Ut=new Ws,rt=!1,H=!1,Y=new ne,at=new R,ut=new fe,et={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Tt=!1;function Pt(){return L===null?N:1}let P=n;function tt(b,G){return e.getContext(b,G)}try{let b={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${"180"}`),e.addEventListener("webglcontextlost",mt,!1),e.addEventListener("webglcontextrestored",gt,!1),e.addEventListener("webglcontextcreationerror",xt,!1),P===null){let G="webgl2";if(P=tt(G,b),P===null)throw tt(G)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(b){throw console.error("THREE.WebGLRenderer: "+b.message),b}let it,ot,st,wt,yt,q,ft,St,w,v,V,X,lt,J,Ft,Et,Rt,Nt,pt,Ct,kt,Bt,At,Yt;function F(){it=new lx(P),it.init(),Bt=new H_(P,it),ot=new ex(P,it,t,Bt),st=new B_(P,it),ot.reversedDepthBuffer&&f&&st.buffers.depth.setReversed(!0),wt=new ux(P),yt=new b_,q=new O_(P,it,st,yt,ot,Bt,wt),ft=new ix(_),St=new ax(_),w=new xm(P),At=new jg(P,w),v=new cx(P,w,wt,At),V=new fx(P,v,w,wt),pt=new dx(P,ot,q),Et=new nx(yt),X=new E_(_,ft,St,it,ot,At,Et),lt=new G_(_,yt),J=new w_,Ft=new L_(it),Nt=new Qg(_,ft,St,st,V,d,l),Rt=new N_(_,V,ot),Yt=new W_(P,wt,ot,st),Ct=new tx(P,it,wt),kt=new hx(P,it,wt),wt.programs=X.programs,_.capabilities=ot,_.extensions=it,_.properties=yt,_.renderLists=J,_.shadowMap=Rt,_.state=st,_.info=wt}F();let dt=new bh(_,P);this.xr=dt,this.getContext=function(){return P},this.getContextAttributes=function(){return P.getContextAttributes()},this.forceContextLoss=function(){let b=it.get("WEBGL_lose_context");b&&b.loseContext()},this.forceContextRestore=function(){let b=it.get("WEBGL_lose_context");b&&b.restoreContext()},this.getPixelRatio=function(){return N},this.setPixelRatio=function(b){b!==void 0&&(N=b,this.setSize(z,O,!1))},this.getSize=function(b){return b.set(z,O)},this.setSize=function(b,G,$=!0){if(dt.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}z=b,O=G,e.width=Math.floor(b*N),e.height=Math.floor(G*N),$===!0&&(e.style.width=b+"px",e.style.height=G+"px"),this.setViewport(0,0,b,G)},this.getDrawingBufferSize=function(b){return b.set(z*N,O*N).floor()},this.setDrawingBufferSize=function(b,G,$){z=b,O=G,N=$,e.width=Math.floor(b*$),e.height=Math.floor(G*$),this.setViewport(0,0,b,G)},this.getCurrentViewport=function(b){return b.copy(D)},this.getViewport=function(b){return b.copy(ht)},this.setViewport=function(b,G,$,K){b.isVector4?ht.set(b.x,b.y,b.z,b.w):ht.set(b,G,$,K),st.viewport(D.copy(ht).multiplyScalar(N).round())},this.getScissor=function(b){return b.copy(Mt)},this.setScissor=function(b,G,$,K){b.isVector4?Mt.set(b.x,b.y,b.z,b.w):Mt.set(b,G,$,K),st.scissor(B.copy(Mt).multiplyScalar(N).round())},this.getScissorTest=function(){return _t},this.setScissorTest=function(b){st.setScissorTest(_t=b)},this.setOpaqueSort=function(b){Z=b},this.setTransparentSort=function(b){Q=b},this.getClearColor=function(b){return b.copy(Nt.getClearColor())},this.setClearColor=function(){Nt.setClearColor(...arguments)},this.getClearAlpha=function(){return Nt.getClearAlpha()},this.setClearAlpha=function(){Nt.setClearAlpha(...arguments)},this.clear=function(b=!0,G=!0,$=!0){let K=0;if(b){let W=!1;if(L!==null){let bt=L.texture.format;W=bt===ja||bt===Qa||bt===Ka}if(W){let bt=L.texture.type,Lt=bt===Hn||bt===Li||bt===Qs||bt===js||bt===Za||bt===$a,Ht=Nt.getClearColor(),Ot=Nt.getClearAlpha(),Xt=Ht.r,qt=Ht.g,Vt=Ht.b;Lt?(m[0]=Xt,m[1]=qt,m[2]=Vt,m[3]=Ot,P.clearBufferuiv(P.COLOR,0,m)):(x[0]=Xt,x[1]=qt,x[2]=Vt,x[3]=Ot,P.clearBufferiv(P.COLOR,0,x))}else K|=P.COLOR_BUFFER_BIT}G&&(K|=P.DEPTH_BUFFER_BIT),$&&(K|=P.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),P.clear(K)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",mt,!1),e.removeEventListener("webglcontextrestored",gt,!1),e.removeEventListener("webglcontextcreationerror",xt,!1),Nt.dispose(),J.dispose(),Ft.dispose(),yt.dispose(),ft.dispose(),St.dispose(),V.dispose(),At.dispose(),Yt.dispose(),X.dispose(),dt.dispose(),dt.removeEventListener("sessionstart",Xn),dt.removeEventListener("sessionend",zh),Hi.stop()};function mt(b){b.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),A=!0}function gt(){console.log("THREE.WebGLRenderer: Context Restored."),A=!1;let b=wt.autoReset,G=Rt.enabled,$=Rt.autoUpdate,K=Rt.needsUpdate,W=Rt.type;F(),wt.autoReset=b,Rt.enabled=G,Rt.autoUpdate=$,Rt.needsUpdate=K,Rt.type=W}function xt(b){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",b.statusMessage)}function ct(b){let G=b.target;G.removeEventListener("dispose",ct),zt(G)}function zt(b){$t(b),yt.remove(b)}function $t(b){let G=yt.get(b).programs;G!==void 0&&(G.forEach(function($){X.releaseProgram($)}),b.isShaderMaterial&&X.releaseShaderCache(b))}this.renderBufferDirect=function(b,G,$,K,W,bt){G===null&&(G=et);let Lt=W.isMesh&&W.matrixWorld.determinant()<0,Ht=zf(b,G,$,K,W);st.setMaterial(K,Lt);let Ot=$.index,Xt=1;if(K.wireframe===!0){if(Ot=v.getWireframeAttribute($),Ot===void 0)return;Xt=2}let qt=$.drawRange,Vt=$.attributes.position,jt=qt.start*Xt,ge=(qt.start+qt.count)*Xt;bt!==null&&(jt=Math.max(jt,bt.start*Xt),ge=Math.min(ge,(bt.start+bt.count)*Xt)),Ot!==null?(jt=Math.max(jt,0),ge=Math.min(ge,Ot.count)):Vt!=null&&(jt=Math.max(jt,0),ge=Math.min(ge,Vt.count));let De=ge-jt;if(De<0||De===1/0)return;At.setup(W,K,Ht,$,Ot);let Ee,_e=Ct;if(Ot!==null&&(Ee=w.get(Ot),_e=kt,_e.setIndex(Ee)),W.isMesh)K.wireframe===!0?(st.setLineWidth(K.wireframeLinewidth*Pt()),_e.setMode(P.LINES)):_e.setMode(P.TRIANGLES);else if(W.isLine){let Wt=K.linewidth;Wt===void 0&&(Wt=1),st.setLineWidth(Wt*Pt()),W.isLineSegments?_e.setMode(P.LINES):W.isLineLoop?_e.setMode(P.LINE_LOOP):_e.setMode(P.LINE_STRIP)}else W.isPoints?_e.setMode(P.POINTS):W.isSprite&&_e.setMode(P.TRIANGLES);if(W.isBatchedMesh)if(W._multiDrawInstances!==null)Hs("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),_e.renderMultiDrawInstances(W._multiDrawStarts,W._multiDrawCounts,W._multiDrawCount,W._multiDrawInstances);else if(it.get("WEBGL_multi_draw"))_e.renderMultiDraw(W._multiDrawStarts,W._multiDrawCounts,W._multiDrawCount);else{let Wt=W._multiDrawStarts,Ce=W._multiDrawCounts,se=W._multiDrawCount,mn=Ot?w.get(Ot).bytesPerElement:1,_s=yt.get(K).currentProgram.getUniforms();for(let gn=0;gn<se;gn++)_s.setValue(P,"_gl_DrawID",gn),_e.render(Wt[gn]/mn,Ce[gn])}else if(W.isInstancedMesh)_e.renderInstances(jt,De,W.count);else if($.isInstancedBufferGeometry){let Wt=$._maxInstanceCount!==void 0?$._maxInstanceCount:1/0,Ce=Math.min($.instanceCount,Wt);_e.renderInstances(jt,De,Ce)}else _e.render(jt,De)};function ve(b,G,$){b.transparent===!0&&b.side===pe&&b.forceSinglePass===!1?(b.side=nn,b.needsUpdate=!0,To(b,G,$),b.side=hi,b.needsUpdate=!0,To(b,G,$),b.side=pe):To(b,G,$)}this.compile=function(b,G,$=null){$===null&&($=b),p=Ft.get($),p.init(G),y.push(p),$.traverseVisible(function(W){W.isLight&&W.layers.test(G.layers)&&(p.pushLight(W),W.castShadow&&p.pushShadow(W))}),b!==$&&b.traverseVisible(function(W){W.isLight&&W.layers.test(G.layers)&&(p.pushLight(W),W.castShadow&&p.pushShadow(W))}),p.setupLights();let K=new Set;return b.traverse(function(W){if(!(W.isMesh||W.isPoints||W.isLine||W.isSprite))return;let bt=W.material;if(bt)if(Array.isArray(bt))for(let Lt=0;Lt<bt.length;Lt++){let Ht=bt[Lt];ve(Ht,$,W),K.add(Ht)}else ve(bt,$,W),K.add(bt)}),p=y.pop(),K},this.compileAsync=function(b,G,$=null){let K=this.compile(b,G,$);return new Promise(W=>{function bt(){if(K.forEach(function(Lt){yt.get(Lt).currentProgram.isReady()&&K.delete(Lt)}),K.size===0){W(b);return}setTimeout(bt,10)}it.get("KHR_parallel_shader_compile")!==null?bt():setTimeout(bt,10)})};let le=null;function ni(b){le&&le(b)}function Xn(){Hi.stop()}function zh(){Hi.start()}let Hi=new Ud;Hi.setAnimationLoop(ni),typeof self<"u"&&Hi.setContext(self),this.setAnimationLoop=function(b){le=b,dt.setAnimationLoop(b),b===null?Hi.stop():Hi.start()},dt.addEventListener("sessionstart",Xn),dt.addEventListener("sessionend",zh),this.render=function(b,G){if(G!==void 0&&G.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(A===!0)return;if(b.matrixWorldAutoUpdate===!0&&b.updateMatrixWorld(),G.parent===null&&G.matrixWorldAutoUpdate===!0&&G.updateMatrixWorld(),dt.enabled===!0&&dt.isPresenting===!0&&(dt.cameraAutoUpdate===!0&&dt.updateCamera(G),G=dt.getCamera()),b.isScene===!0&&b.onBeforeRender(_,b,G,L),p=Ft.get(b,y.length),p.init(G),y.push(p),Y.multiplyMatrices(G.projectionMatrix,G.matrixWorldInverse),Ut.setFromProjectionMatrix(Y,Dn,G.reversedDepth),H=this.localClippingEnabled,rt=Et.init(this.clippingPlanes,H),g=J.get(b,E.length),g.init(),E.push(g),dt.enabled===!0&&dt.isPresenting===!0){let bt=_.xr.getDepthSensingMesh();bt!==null&&nc(bt,G,-1/0,_.sortObjects)}nc(b,G,0,_.sortObjects),g.finish(),_.sortObjects===!0&&g.sort(Z,Q),Tt=dt.enabled===!1||dt.isPresenting===!1||dt.hasDepthSensing()===!1,Tt&&Nt.addToRenderList(g,b),this.info.render.frame++,rt===!0&&Et.beginShadows();let $=p.state.shadowsArray;Rt.render($,b,G),rt===!0&&Et.endShadows(),this.info.autoReset===!0&&this.info.reset();let K=g.opaque,W=g.transmissive;if(p.setupLights(),G.isArrayCamera){let bt=G.cameras;if(W.length>0)for(let Lt=0,Ht=bt.length;Lt<Ht;Lt++){let Ot=bt[Lt];Vh(K,W,b,Ot)}Tt&&Nt.render(b);for(let Lt=0,Ht=bt.length;Lt<Ht;Lt++){let Ot=bt[Lt];kh(g,b,Ot,Ot.viewport)}}else W.length>0&&Vh(K,W,b,G),Tt&&Nt.render(b),kh(g,b,G);L!==null&&C===0&&(q.updateMultisampleRenderTarget(L),q.updateRenderTargetMipmap(L)),b.isScene===!0&&b.onAfterRender(_,b,G),At.resetDefaultState(),M=-1,S=null,y.pop(),y.length>0?(p=y[y.length-1],rt===!0&&Et.setGlobalState(_.clippingPlanes,p.state.camera)):p=null,E.pop(),E.length>0?g=E[E.length-1]:g=null};function nc(b,G,$,K){if(b.visible===!1)return;if(b.layers.test(G.layers)){if(b.isGroup)$=b.renderOrder;else if(b.isLOD)b.autoUpdate===!0&&b.update(G);else if(b.isLight)p.pushLight(b),b.castShadow&&p.pushShadow(b);else if(b.isSprite){if(!b.frustumCulled||Ut.intersectsSprite(b)){K&&ut.setFromMatrixPosition(b.matrixWorld).applyMatrix4(Y);let Lt=V.update(b),Ht=b.material;Ht.visible&&g.push(b,Lt,Ht,$,ut.z,null)}}else if((b.isMesh||b.isLine||b.isPoints)&&(!b.frustumCulled||Ut.intersectsObject(b))){let Lt=V.update(b),Ht=b.material;if(K&&(b.boundingSphere!==void 0?(b.boundingSphere===null&&b.computeBoundingSphere(),ut.copy(b.boundingSphere.center)):(Lt.boundingSphere===null&&Lt.computeBoundingSphere(),ut.copy(Lt.boundingSphere.center)),ut.applyMatrix4(b.matrixWorld).applyMatrix4(Y)),Array.isArray(Ht)){let Ot=Lt.groups;for(let Xt=0,qt=Ot.length;Xt<qt;Xt++){let Vt=Ot[Xt],jt=Ht[Vt.materialIndex];jt&&jt.visible&&g.push(b,Lt,jt,$,ut.z,Vt)}}else Ht.visible&&g.push(b,Lt,Ht,$,ut.z,null)}}let bt=b.children;for(let Lt=0,Ht=bt.length;Lt<Ht;Lt++)nc(bt[Lt],G,$,K)}function kh(b,G,$,K){let W=b.opaque,bt=b.transmissive,Lt=b.transparent;p.setupLightsView($),rt===!0&&Et.setGlobalState(_.clippingPlanes,$),K&&st.viewport(D.copy(K)),W.length>0&&bo(W,G,$),bt.length>0&&bo(bt,G,$),Lt.length>0&&bo(Lt,G,$),st.buffers.depth.setTest(!0),st.buffers.depth.setMask(!0),st.buffers.color.setMask(!0),st.setPolygonOffset(!1)}function Vh(b,G,$,K){if(($.isScene===!0?$.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[K.id]===void 0&&(p.state.transmissionRenderTarget[K.id]=new Je(1,1,{generateMipmaps:!0,type:it.has("EXT_color_buffer_half_float")||it.has("EXT_color_buffer_float")?pn:Hn,minFilter:Ii,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:ee.workingColorSpace}));let bt=p.state.transmissionRenderTarget[K.id],Lt=K.viewport||D;bt.setSize(Lt.z*_.transmissionResolutionScale,Lt.w*_.transmissionResolutionScale);let Ht=_.getRenderTarget(),Ot=_.getActiveCubeFace(),Xt=_.getActiveMipmapLevel();_.setRenderTarget(bt),_.getClearColor(U),k=_.getClearAlpha(),k<1&&_.setClearColor(16777215,.5),_.clear(),Tt&&Nt.render($);let qt=_.toneMapping;_.toneMapping=fi;let Vt=K.viewport;if(K.viewport!==void 0&&(K.viewport=void 0),p.setupLightsView(K),rt===!0&&Et.setGlobalState(_.clippingPlanes,K),bo(b,$,K),q.updateMultisampleRenderTarget(bt),q.updateRenderTargetMipmap(bt),it.has("WEBGL_multisampled_render_to_texture")===!1){let jt=!1;for(let ge=0,De=G.length;ge<De;ge++){let Ee=G[ge],_e=Ee.object,Wt=Ee.geometry,Ce=Ee.material,se=Ee.group;if(Ce.side===pe&&_e.layers.test(K.layers)){let mn=Ce.side;Ce.side=nn,Ce.needsUpdate=!0,Gh(_e,$,K,Wt,Ce,se),Ce.side=mn,Ce.needsUpdate=!0,jt=!0}}jt===!0&&(q.updateMultisampleRenderTarget(bt),q.updateRenderTargetMipmap(bt))}_.setRenderTarget(Ht,Ot,Xt),_.setClearColor(U,k),Vt!==void 0&&(K.viewport=Vt),_.toneMapping=qt}function bo(b,G,$){let K=G.isScene===!0?G.overrideMaterial:null;for(let W=0,bt=b.length;W<bt;W++){let Lt=b[W],Ht=Lt.object,Ot=Lt.geometry,Xt=Lt.group,qt=Lt.material;qt.allowOverride===!0&&K!==null&&(qt=K),Ht.layers.test($.layers)&&Gh(Ht,G,$,Ot,qt,Xt)}}function Gh(b,G,$,K,W,bt){b.onBeforeRender(_,G,$,K,W,bt),b.modelViewMatrix.multiplyMatrices($.matrixWorldInverse,b.matrixWorld),b.normalMatrix.getNormalMatrix(b.modelViewMatrix),W.onBeforeRender(_,G,$,K,b,bt),W.transparent===!0&&W.side===pe&&W.forceSinglePass===!1?(W.side=nn,W.needsUpdate=!0,_.renderBufferDirect($,G,K,W,b,bt),W.side=hi,W.needsUpdate=!0,_.renderBufferDirect($,G,K,W,b,bt),W.side=pe):_.renderBufferDirect($,G,K,W,b,bt),b.onAfterRender(_,G,$,K,W,bt)}function To(b,G,$){G.isScene!==!0&&(G=et);let K=yt.get(b),W=p.state.lights,bt=p.state.shadowsArray,Lt=W.state.version,Ht=X.getParameters(b,W.state,bt,G,$),Ot=X.getProgramCacheKey(Ht),Xt=K.programs;K.environment=b.isMeshStandardMaterial?G.environment:null,K.fog=G.fog,K.envMap=(b.isMeshStandardMaterial?St:ft).get(b.envMap||K.environment),K.envMapRotation=K.environment!==null&&b.envMap===null?G.environmentRotation:b.envMapRotation,Xt===void 0&&(b.addEventListener("dispose",ct),Xt=new Map,K.programs=Xt);let qt=Xt.get(Ot);if(qt!==void 0){if(K.currentProgram===qt&&K.lightsStateVersion===Lt)return Xh(b,Ht),qt}else Ht.uniforms=X.getUniforms(b),b.onBeforeCompile(Ht,_),qt=X.acquireProgram(Ht,Ot),Xt.set(Ot,qt),K.uniforms=Ht.uniforms;let Vt=K.uniforms;return(!b.isShaderMaterial&&!b.isRawShaderMaterial||b.clipping===!0)&&(Vt.clippingPlanes=Et.uniform),Xh(b,Ht),K.needsLights=Vf(b),K.lightsStateVersion=Lt,K.needsLights&&(Vt.ambientLightColor.value=W.state.ambient,Vt.lightProbe.value=W.state.probe,Vt.directionalLights.value=W.state.directional,Vt.directionalLightShadows.value=W.state.directionalShadow,Vt.spotLights.value=W.state.spot,Vt.spotLightShadows.value=W.state.spotShadow,Vt.rectAreaLights.value=W.state.rectArea,Vt.ltc_1.value=W.state.rectAreaLTC1,Vt.ltc_2.value=W.state.rectAreaLTC2,Vt.pointLights.value=W.state.point,Vt.pointLightShadows.value=W.state.pointShadow,Vt.hemisphereLights.value=W.state.hemi,Vt.directionalShadowMap.value=W.state.directionalShadowMap,Vt.directionalShadowMatrix.value=W.state.directionalShadowMatrix,Vt.spotShadowMap.value=W.state.spotShadowMap,Vt.spotLightMatrix.value=W.state.spotLightMatrix,Vt.spotLightMap.value=W.state.spotLightMap,Vt.pointShadowMap.value=W.state.pointShadowMap,Vt.pointShadowMatrix.value=W.state.pointShadowMatrix),K.currentProgram=qt,K.uniformsList=null,qt}function Wh(b){if(b.uniformsList===null){let G=b.currentProgram.getUniforms();b.uniformsList=sr.seqWithValue(G.seq,b.uniforms)}return b.uniformsList}function Xh(b,G){let $=yt.get(b);$.outputColorSpace=G.outputColorSpace,$.batching=G.batching,$.batchingColor=G.batchingColor,$.instancing=G.instancing,$.instancingColor=G.instancingColor,$.instancingMorph=G.instancingMorph,$.skinning=G.skinning,$.morphTargets=G.morphTargets,$.morphNormals=G.morphNormals,$.morphColors=G.morphColors,$.morphTargetsCount=G.morphTargetsCount,$.numClippingPlanes=G.numClippingPlanes,$.numIntersection=G.numClipIntersection,$.vertexAlphas=G.vertexAlphas,$.vertexTangents=G.vertexTangents,$.toneMapping=G.toneMapping}function zf(b,G,$,K,W){G.isScene!==!0&&(G=et),q.resetTextureUnits();let bt=G.fog,Lt=K.isMeshStandardMaterial?G.environment:null,Ht=L===null?_.outputColorSpace:L.isXRRenderTarget===!0?L.texture.colorSpace:Zi,Ot=(K.isMeshStandardMaterial?St:ft).get(K.envMap||Lt),Xt=K.vertexColors===!0&&!!$.attributes.color&&$.attributes.color.itemSize===4,qt=!!$.attributes.tangent&&(!!K.normalMap||K.anisotropy>0),Vt=!!$.morphAttributes.position,jt=!!$.morphAttributes.normal,ge=!!$.morphAttributes.color,De=fi;K.toneMapped&&(L===null||L.isXRRenderTarget===!0)&&(De=_.toneMapping);let Ee=$.morphAttributes.position||$.morphAttributes.normal||$.morphAttributes.color,_e=Ee!==void 0?Ee.length:0,Wt=yt.get(K),Ce=p.state.lights;if(rt===!0&&(H===!0||b!==S)){let cn=b===S&&K.id===M;Et.setState(K,b,cn)}let se=!1;K.version===Wt.__version?(Wt.needsLights&&Wt.lightsStateVersion!==Ce.state.version||Wt.outputColorSpace!==Ht||W.isBatchedMesh&&Wt.batching===!1||!W.isBatchedMesh&&Wt.batching===!0||W.isBatchedMesh&&Wt.batchingColor===!0&&W.colorTexture===null||W.isBatchedMesh&&Wt.batchingColor===!1&&W.colorTexture!==null||W.isInstancedMesh&&Wt.instancing===!1||!W.isInstancedMesh&&Wt.instancing===!0||W.isSkinnedMesh&&Wt.skinning===!1||!W.isSkinnedMesh&&Wt.skinning===!0||W.isInstancedMesh&&Wt.instancingColor===!0&&W.instanceColor===null||W.isInstancedMesh&&Wt.instancingColor===!1&&W.instanceColor!==null||W.isInstancedMesh&&Wt.instancingMorph===!0&&W.morphTexture===null||W.isInstancedMesh&&Wt.instancingMorph===!1&&W.morphTexture!==null||Wt.envMap!==Ot||K.fog===!0&&Wt.fog!==bt||Wt.numClippingPlanes!==void 0&&(Wt.numClippingPlanes!==Et.numPlanes||Wt.numIntersection!==Et.numIntersection)||Wt.vertexAlphas!==Xt||Wt.vertexTangents!==qt||Wt.morphTargets!==Vt||Wt.morphNormals!==jt||Wt.morphColors!==ge||Wt.toneMapping!==De||Wt.morphTargetsCount!==_e)&&(se=!0):(se=!0,Wt.__version=K.version);let mn=Wt.currentProgram;se===!0&&(mn=To(K,G,W));let _s=!1,gn=!1,mr=!1,Pe=mn.getUniforms(),bn=Wt.uniforms;if(st.useProgram(mn.program)&&(_s=!0,gn=!0,mr=!0),K.id!==M&&(M=K.id,gn=!0),_s||S!==b){st.buffers.depth.getReversed()&&b.reversedDepth!==!0&&(b._reversedDepth=!0,b.updateProjectionMatrix()),Pe.setValue(P,"projectionMatrix",b.projectionMatrix),Pe.setValue(P,"viewMatrix",b.matrixWorldInverse);let dn=Pe.map.cameraPosition;dn!==void 0&&dn.setValue(P,at.setFromMatrixPosition(b.matrixWorld)),ot.logarithmicDepthBuffer&&Pe.setValue(P,"logDepthBufFC",2/(Math.log(b.far+1)/Math.LN2)),(K.isMeshPhongMaterial||K.isMeshToonMaterial||K.isMeshLambertMaterial||K.isMeshBasicMaterial||K.isMeshStandardMaterial||K.isShaderMaterial)&&Pe.setValue(P,"isOrthographic",b.isOrthographicCamera===!0),S!==b&&(S=b,gn=!0,mr=!0)}if(W.isSkinnedMesh){Pe.setOptional(P,W,"bindMatrix"),Pe.setOptional(P,W,"bindMatrixInverse");let cn=W.skeleton;cn&&(cn.boneTexture===null&&cn.computeBoneTexture(),Pe.setValue(P,"boneTexture",cn.boneTexture,q))}W.isBatchedMesh&&(Pe.setOptional(P,W,"batchingTexture"),Pe.setValue(P,"batchingTexture",W._matricesTexture,q),Pe.setOptional(P,W,"batchingIdTexture"),Pe.setValue(P,"batchingIdTexture",W._indirectTexture,q),Pe.setOptional(P,W,"batchingColorTexture"),W._colorsTexture!==null&&Pe.setValue(P,"batchingColorTexture",W._colorsTexture,q));let Tn=$.morphAttributes;if((Tn.position!==void 0||Tn.normal!==void 0||Tn.color!==void 0)&&pt.update(W,$,mn),(gn||Wt.receiveShadow!==W.receiveShadow)&&(Wt.receiveShadow=W.receiveShadow,Pe.setValue(P,"receiveShadow",W.receiveShadow)),K.isMeshGouraudMaterial&&K.envMap!==null&&(bn.envMap.value=Ot,bn.flipEnvMap.value=Ot.isCubeTexture&&Ot.isRenderTargetTexture===!1?-1:1),K.isMeshStandardMaterial&&K.envMap===null&&G.environment!==null&&(bn.envMapIntensity.value=G.environmentIntensity),gn&&(Pe.setValue(P,"toneMappingExposure",_.toneMappingExposure),Wt.needsLights&&kf(bn,mr),bt&&K.fog===!0&&lt.refreshFogUniforms(bn,bt),lt.refreshMaterialUniforms(bn,K,N,O,p.state.transmissionRenderTarget[b.id]),sr.upload(P,Wh(Wt),bn,q)),K.isShaderMaterial&&K.uniformsNeedUpdate===!0&&(sr.upload(P,Wh(Wt),bn,q),K.uniformsNeedUpdate=!1),K.isSpriteMaterial&&Pe.setValue(P,"center",W.center),Pe.setValue(P,"modelViewMatrix",W.modelViewMatrix),Pe.setValue(P,"normalMatrix",W.normalMatrix),Pe.setValue(P,"modelMatrix",W.matrixWorld),K.isShaderMaterial||K.isRawShaderMaterial){let cn=K.uniformsGroups;for(let dn=0,ic=cn.length;dn<ic;dn++){let zi=cn[dn];Yt.update(zi,mn),Yt.bind(zi,mn)}}return mn}function kf(b,G){b.ambientLightColor.needsUpdate=G,b.lightProbe.needsUpdate=G,b.directionalLights.needsUpdate=G,b.directionalLightShadows.needsUpdate=G,b.pointLights.needsUpdate=G,b.pointLightShadows.needsUpdate=G,b.spotLights.needsUpdate=G,b.spotLightShadows.needsUpdate=G,b.rectAreaLights.needsUpdate=G,b.hemisphereLights.needsUpdate=G}function Vf(b){return b.isMeshLambertMaterial||b.isMeshToonMaterial||b.isMeshPhongMaterial||b.isMeshStandardMaterial||b.isShadowMaterial||b.isShaderMaterial&&b.lights===!0}this.getActiveCubeFace=function(){return T},this.getActiveMipmapLevel=function(){return C},this.getRenderTarget=function(){return L},this.setRenderTargetTextures=function(b,G,$){let K=yt.get(b);K.__autoAllocateDepthBuffer=b.resolveDepthBuffer===!1,K.__autoAllocateDepthBuffer===!1&&(K.__useRenderToTexture=!1),yt.get(b.texture).__webglTexture=G,yt.get(b.depthTexture).__webglTexture=K.__autoAllocateDepthBuffer?void 0:$,K.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(b,G){let $=yt.get(b);$.__webglFramebuffer=G,$.__useDefaultFramebuffer=G===void 0};let Gf=P.createFramebuffer();this.setRenderTarget=function(b,G=0,$=0){L=b,T=G,C=$;let K=!0,W=null,bt=!1,Lt=!1;if(b){let Ot=yt.get(b);if(Ot.__useDefaultFramebuffer!==void 0)st.bindFramebuffer(P.FRAMEBUFFER,null),K=!1;else if(Ot.__webglFramebuffer===void 0)q.setupRenderTarget(b);else if(Ot.__hasExternalTextures)q.rebindTextures(b,yt.get(b.texture).__webglTexture,yt.get(b.depthTexture).__webglTexture);else if(b.depthBuffer){let Vt=b.depthTexture;if(Ot.__boundDepthTexture!==Vt){if(Vt!==null&&yt.has(Vt)&&(b.width!==Vt.image.width||b.height!==Vt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");q.setupDepthRenderbuffer(b)}}let Xt=b.texture;(Xt.isData3DTexture||Xt.isDataArrayTexture||Xt.isCompressedArrayTexture)&&(Lt=!0);let qt=yt.get(b).__webglFramebuffer;b.isWebGLCubeRenderTarget?(Array.isArray(qt[G])?W=qt[G][$]:W=qt[G],bt=!0):b.samples>0&&q.useMultisampledRTT(b)===!1?W=yt.get(b).__webglMultisampledFramebuffer:Array.isArray(qt)?W=qt[$]:W=qt,D.copy(b.viewport),B.copy(b.scissor),I=b.scissorTest}else D.copy(ht).multiplyScalar(N).floor(),B.copy(Mt).multiplyScalar(N).floor(),I=_t;if($!==0&&(W=Gf),st.bindFramebuffer(P.FRAMEBUFFER,W)&&K&&st.drawBuffers(b,W),st.viewport(D),st.scissor(B),st.setScissorTest(I),bt){let Ot=yt.get(b.texture);P.framebufferTexture2D(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_CUBE_MAP_POSITIVE_X+G,Ot.__webglTexture,$)}else if(Lt){let Ot=G;for(let Xt=0;Xt<b.textures.length;Xt++){let qt=yt.get(b.textures[Xt]);P.framebufferTextureLayer(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0+Xt,qt.__webglTexture,$,Ot)}}else if(b!==null&&$!==0){let Ot=yt.get(b.texture);P.framebufferTexture2D(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_2D,Ot.__webglTexture,$)}M=-1},this.readRenderTargetPixels=function(b,G,$,K,W,bt,Lt,Ht=0){if(!(b&&b.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ot=yt.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&Lt!==void 0&&(Ot=Ot[Lt]),Ot){st.bindFramebuffer(P.FRAMEBUFFER,Ot);try{let Xt=b.textures[Ht],qt=Xt.format,Vt=Xt.type;if(!ot.textureFormatReadable(qt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!ot.textureTypeReadable(Vt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}G>=0&&G<=b.width-K&&$>=0&&$<=b.height-W&&(b.textures.length>1&&P.readBuffer(P.COLOR_ATTACHMENT0+Ht),P.readPixels(G,$,K,W,Bt.convert(qt),Bt.convert(Vt),bt))}finally{let Xt=L!==null?yt.get(L).__webglFramebuffer:null;st.bindFramebuffer(P.FRAMEBUFFER,Xt)}}},this.readRenderTargetPixelsAsync=async function(b,G,$,K,W,bt,Lt,Ht=0){if(!(b&&b.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ot=yt.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&Lt!==void 0&&(Ot=Ot[Lt]),Ot)if(G>=0&&G<=b.width-K&&$>=0&&$<=b.height-W){st.bindFramebuffer(P.FRAMEBUFFER,Ot);let Xt=b.textures[Ht],qt=Xt.format,Vt=Xt.type;if(!ot.textureFormatReadable(qt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!ot.textureTypeReadable(Vt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let jt=P.createBuffer();P.bindBuffer(P.PIXEL_PACK_BUFFER,jt),P.bufferData(P.PIXEL_PACK_BUFFER,bt.byteLength,P.STREAM_READ),b.textures.length>1&&P.readBuffer(P.COLOR_ATTACHMENT0+Ht),P.readPixels(G,$,K,W,Bt.convert(qt),Bt.convert(Vt),0);let ge=L!==null?yt.get(L).__webglFramebuffer:null;st.bindFramebuffer(P.FRAMEBUFFER,ge);let De=P.fenceSync(P.SYNC_GPU_COMMANDS_COMPLETE,0);return P.flush(),await id(P,De,4),P.bindBuffer(P.PIXEL_PACK_BUFFER,jt),P.getBufferSubData(P.PIXEL_PACK_BUFFER,0,bt),P.deleteBuffer(jt),P.deleteSync(De),bt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(b,G=null,$=0){let K=Math.pow(2,-$),W=Math.floor(b.image.width*K),bt=Math.floor(b.image.height*K),Lt=G!==null?G.x:0,Ht=G!==null?G.y:0;q.setTexture2D(b,0),P.copyTexSubImage2D(P.TEXTURE_2D,$,0,0,Lt,Ht,W,bt),st.unbindTexture()};let Wf=P.createFramebuffer(),Xf=P.createFramebuffer();this.copyTextureToTexture=function(b,G,$=null,K=null,W=0,bt=null){bt===null&&(W!==0?(Hs("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),bt=W,W=0):bt=0);let Lt,Ht,Ot,Xt,qt,Vt,jt,ge,De,Ee=b.isCompressedTexture?b.mipmaps[bt]:b.image;if($!==null)Lt=$.max.x-$.min.x,Ht=$.max.y-$.min.y,Ot=$.isBox3?$.max.z-$.min.z:1,Xt=$.min.x,qt=$.min.y,Vt=$.isBox3?$.min.z:0;else{let Tn=Math.pow(2,-W);Lt=Math.floor(Ee.width*Tn),Ht=Math.floor(Ee.height*Tn),b.isDataArrayTexture?Ot=Ee.depth:b.isData3DTexture?Ot=Math.floor(Ee.depth*Tn):Ot=1,Xt=0,qt=0,Vt=0}K!==null?(jt=K.x,ge=K.y,De=K.z):(jt=0,ge=0,De=0);let _e=Bt.convert(G.format),Wt=Bt.convert(G.type),Ce;G.isData3DTexture?(q.setTexture3D(G,0),Ce=P.TEXTURE_3D):G.isDataArrayTexture||G.isCompressedArrayTexture?(q.setTexture2DArray(G,0),Ce=P.TEXTURE_2D_ARRAY):(q.setTexture2D(G,0),Ce=P.TEXTURE_2D),P.pixelStorei(P.UNPACK_FLIP_Y_WEBGL,G.flipY),P.pixelStorei(P.UNPACK_PREMULTIPLY_ALPHA_WEBGL,G.premultiplyAlpha),P.pixelStorei(P.UNPACK_ALIGNMENT,G.unpackAlignment);let se=P.getParameter(P.UNPACK_ROW_LENGTH),mn=P.getParameter(P.UNPACK_IMAGE_HEIGHT),_s=P.getParameter(P.UNPACK_SKIP_PIXELS),gn=P.getParameter(P.UNPACK_SKIP_ROWS),mr=P.getParameter(P.UNPACK_SKIP_IMAGES);P.pixelStorei(P.UNPACK_ROW_LENGTH,Ee.width),P.pixelStorei(P.UNPACK_IMAGE_HEIGHT,Ee.height),P.pixelStorei(P.UNPACK_SKIP_PIXELS,Xt),P.pixelStorei(P.UNPACK_SKIP_ROWS,qt),P.pixelStorei(P.UNPACK_SKIP_IMAGES,Vt);let Pe=b.isDataArrayTexture||b.isData3DTexture,bn=G.isDataArrayTexture||G.isData3DTexture;if(b.isDepthTexture){let Tn=yt.get(b),cn=yt.get(G),dn=yt.get(Tn.__renderTarget),ic=yt.get(cn.__renderTarget);st.bindFramebuffer(P.READ_FRAMEBUFFER,dn.__webglFramebuffer),st.bindFramebuffer(P.DRAW_FRAMEBUFFER,ic.__webglFramebuffer);for(let zi=0;zi<Ot;zi++)Pe&&(P.framebufferTextureLayer(P.READ_FRAMEBUFFER,P.COLOR_ATTACHMENT0,yt.get(b).__webglTexture,W,Vt+zi),P.framebufferTextureLayer(P.DRAW_FRAMEBUFFER,P.COLOR_ATTACHMENT0,yt.get(G).__webglTexture,bt,De+zi)),P.blitFramebuffer(Xt,qt,Lt,Ht,jt,ge,Lt,Ht,P.DEPTH_BUFFER_BIT,P.NEAREST);st.bindFramebuffer(P.READ_FRAMEBUFFER,null),st.bindFramebuffer(P.DRAW_FRAMEBUFFER,null)}else if(W!==0||b.isRenderTargetTexture||yt.has(b)){let Tn=yt.get(b),cn=yt.get(G);st.bindFramebuffer(P.READ_FRAMEBUFFER,Wf),st.bindFramebuffer(P.DRAW_FRAMEBUFFER,Xf);for(let dn=0;dn<Ot;dn++)Pe?P.framebufferTextureLayer(P.READ_FRAMEBUFFER,P.COLOR_ATTACHMENT0,Tn.__webglTexture,W,Vt+dn):P.framebufferTexture2D(P.READ_FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_2D,Tn.__webglTexture,W),bn?P.framebufferTextureLayer(P.DRAW_FRAMEBUFFER,P.COLOR_ATTACHMENT0,cn.__webglTexture,bt,De+dn):P.framebufferTexture2D(P.DRAW_FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_2D,cn.__webglTexture,bt),W!==0?P.blitFramebuffer(Xt,qt,Lt,Ht,jt,ge,Lt,Ht,P.COLOR_BUFFER_BIT,P.NEAREST):bn?P.copyTexSubImage3D(Ce,bt,jt,ge,De+dn,Xt,qt,Lt,Ht):P.copyTexSubImage2D(Ce,bt,jt,ge,Xt,qt,Lt,Ht);st.bindFramebuffer(P.READ_FRAMEBUFFER,null),st.bindFramebuffer(P.DRAW_FRAMEBUFFER,null)}else bn?b.isDataTexture||b.isData3DTexture?P.texSubImage3D(Ce,bt,jt,ge,De,Lt,Ht,Ot,_e,Wt,Ee.data):G.isCompressedArrayTexture?P.compressedTexSubImage3D(Ce,bt,jt,ge,De,Lt,Ht,Ot,_e,Ee.data):P.texSubImage3D(Ce,bt,jt,ge,De,Lt,Ht,Ot,_e,Wt,Ee):b.isDataTexture?P.texSubImage2D(P.TEXTURE_2D,bt,jt,ge,Lt,Ht,_e,Wt,Ee.data):b.isCompressedTexture?P.compressedTexSubImage2D(P.TEXTURE_2D,bt,jt,ge,Ee.width,Ee.height,_e,Ee.data):P.texSubImage2D(P.TEXTURE_2D,bt,jt,ge,Lt,Ht,_e,Wt,Ee);P.pixelStorei(P.UNPACK_ROW_LENGTH,se),P.pixelStorei(P.UNPACK_IMAGE_HEIGHT,mn),P.pixelStorei(P.UNPACK_SKIP_PIXELS,_s),P.pixelStorei(P.UNPACK_SKIP_ROWS,gn),P.pixelStorei(P.UNPACK_SKIP_IMAGES,mr),bt===0&&G.generateMipmaps&&P.generateMipmap(Ce),st.unbindTexture()},this.initRenderTarget=function(b){yt.get(b).__webglFramebuffer===void 0&&q.setupRenderTarget(b)},this.initTexture=function(b){b.isCubeTexture?q.setTextureCube(b,0):b.isData3DTexture?q.setTexture3D(b,0):b.isDataArrayTexture||b.isCompressedArrayTexture?q.setTexture2DArray(b,0):q.setTexture2D(b,0),st.unbindTexture()},this.resetState=function(){T=0,C=0,L=null,st.reset(),At.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Dn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorSpace=ee._getDrawingBufferColorSpace(t),e.unpackColorSpace=ee._getUnpackColorSpace()}};var ar={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform float opacity;

		uniform sampler2D tDiffuse;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );
			gl_FragColor = opacity * texel;


		}`};var Sn=class{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}},X_=new os(-1,1,1,-1,0,1),wh=class extends ie{constructor(){super(),this.setAttribute("position",new Gt([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new Gt([0,2,0,0,2,0],2))}},q_=new wh,Di=class{constructor(t){this._mesh=new j(q_,t)}dispose(){this._mesh.geometry.dispose()}render(t){t.render(this._mesh,X_)}get material(){return this._mesh.material}set material(t){this._mesh.material=t}};var Ul=class extends Sn{constructor(t,e="tDiffuse"){super(),this.textureID=e,this.uniforms=null,this.material=null,t instanceof Se?(this.uniforms=t.uniforms,this.material=t):t&&(this.uniforms=pi.clone(t.uniforms),this.material=new Se({name:t.name!==void 0?t.name:"unspecified",defines:Object.assign({},t.defines),uniforms:this.uniforms,vertexShader:t.vertexShader,fragmentShader:t.fragmentShader})),this._fsQuad=new Di(this.material)}render(t,e,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this._fsQuad.material=this.material,this.renderToScreen?(t.setRenderTarget(null),this._fsQuad.render(t)):(t.setRenderTarget(e),this.clear&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),this._fsQuad.render(t))}dispose(){this.material.dispose(),this._fsQuad.dispose()}};var mo=class extends Sn{constructor(t,e){super(),this.scene=t,this.camera=e,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(t,e,n){let s=t.getContext(),r=t.state;r.buffers.color.setMask(!1),r.buffers.depth.setMask(!1),r.buffers.color.setLocked(!0),r.buffers.depth.setLocked(!0);let o,a;this.inverse?(o=0,a=1):(o=1,a=0),r.buffers.stencil.setTest(!0),r.buffers.stencil.setOp(s.REPLACE,s.REPLACE,s.REPLACE),r.buffers.stencil.setFunc(s.ALWAYS,o,4294967295),r.buffers.stencil.setClear(a),r.buffers.stencil.setLocked(!0),t.setRenderTarget(n),this.clear&&t.clear(),t.render(this.scene,this.camera),t.setRenderTarget(e),this.clear&&t.clear(),t.render(this.scene,this.camera),r.buffers.color.setLocked(!1),r.buffers.depth.setLocked(!1),r.buffers.color.setMask(!0),r.buffers.depth.setMask(!0),r.buffers.stencil.setLocked(!1),r.buffers.stencil.setFunc(s.EQUAL,1,4294967295),r.buffers.stencil.setOp(s.KEEP,s.KEEP,s.KEEP),r.buffers.stencil.setLocked(!0)}},Nl=class extends Sn{constructor(){super(),this.needsSwap=!1}render(t){t.state.buffers.stencil.setLocked(!1),t.state.buffers.stencil.setTest(!1)}};var Fl=class{constructor(t,e){if(this.renderer=t,this._pixelRatio=t.getPixelRatio(),e===void 0){let n=t.getSize(new nt);this._width=n.width,this._height=n.height,e=new Je(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:pn}),e.texture.name="EffectComposer.rt1"}else this._width=e.width,this._height=e.height;this.renderTarget1=e,this.renderTarget2=e.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new Ul(ar),this.copyPass.material.blending=On,this.clock=new oo}swapBuffers(){let t=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=t}addPass(t){this.passes.push(t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(t,e){this.passes.splice(e,0,t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(t){let e=this.passes.indexOf(t);e!==-1&&this.passes.splice(e,1)}isLastEnabledPass(t){for(let e=t+1;e<this.passes.length;e++)if(this.passes[e].enabled)return!1;return!0}render(t){t===void 0&&(t=this.clock.getDelta());let e=this.renderer.getRenderTarget(),n=!1;for(let s=0,r=this.passes.length;s<r;s++){let o=this.passes[s];if(o.enabled!==!1){if(o.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(s),o.render(this.renderer,this.writeBuffer,this.readBuffer,t,n),o.needsSwap){if(n){let a=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(a.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,t),l.setFunc(a.EQUAL,1,4294967295)}this.swapBuffers()}mo!==void 0&&(o instanceof mo?n=!0:o instanceof Nl&&(n=!1))}}this.renderer.setRenderTarget(e)}reset(t){if(t===void 0){let e=this.renderer.getSize(new nt);this._pixelRatio=this.renderer.getPixelRatio(),this._width=e.width,this._height=e.height,t=this.renderTarget1.clone(),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=t,this.renderTarget2=t.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(t,e){this._width=t,this._height=e;let n=this._width*this._pixelRatio,s=this._height*this._pixelRatio;this.renderTarget1.setSize(n,s),this.renderTarget2.setSize(n,s);for(let r=0;r<this.passes.length;r++)this.passes[r].setSize(n,s)}setPixelRatio(t){this._pixelRatio=t,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}};var Bl=class extends Sn{constructor(t,e,n=null,s=null,r=null){super(),this.scene=t,this.camera=e,this.overrideMaterial=n,this.clearColor=s,this.clearAlpha=r,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new vt}render(t,e,n){let s=t.autoClear;t.autoClear=!1;let r,o;this.overrideMaterial!==null&&(o=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(t.getClearColor(this._oldClearColor),t.setClearColor(this.clearColor,t.getClearAlpha())),this.clearAlpha!==null&&(r=t.getClearAlpha(),t.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&t.clearDepth(),t.setRenderTarget(this.renderToScreen?null:n),this.clear===!0&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),t.render(this.scene,this.camera),this.clearColor!==null&&t.setClearColor(this._oldClearColor),this.clearAlpha!==null&&t.setClearAlpha(r),this.overrideMaterial!==null&&(this.scene.overrideMaterial=o),t.autoClear=s}};var Hd={name:"LuminosityHighPassShader",uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new vt(0)},defaultOpacity:{value:0}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform sampler2D tDiffuse;
		uniform vec3 defaultColor;
		uniform float defaultOpacity;
		uniform float luminosityThreshold;
		uniform float smoothWidth;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );

			float v = luminance( texel.xyz );

			vec4 outputColor = vec4( defaultColor.rgb, defaultOpacity );

			float alpha = smoothstep( luminosityThreshold, luminosityThreshold + smoothWidth, v );

			gl_FragColor = mix( outputColor, texel, alpha );

		}`};var lr=class i extends Sn{constructor(t,e=1,n,s){super(),this.strength=e,this.radius=n,this.threshold=s,this.resolution=t!==void 0?new nt(t.x,t.y):new nt(256,256),this.clearColor=new vt(0,0,0),this.needsSwap=!1,this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let r=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);this.renderTargetBright=new Je(r,o,{type:pn}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let h=0;h<this.nMips;h++){let u=new Je(r,o,{type:pn});u.texture.name="UnrealBloomPass.h"+h,u.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(u);let f=new Je(r,o,{type:pn});f.texture.name="UnrealBloomPass.v"+h,f.texture.generateMipmaps=!1,this.renderTargetsVertical.push(f),r=Math.round(r/2),o=Math.round(o/2)}let a=Hd;this.highPassUniforms=pi.clone(a.uniforms),this.highPassUniforms.luminosityThreshold.value=s,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new Se({uniforms:this.highPassUniforms,vertexShader:a.vertexShader,fragmentShader:a.fragmentShader}),this.separableBlurMaterials=[];let l=[3,5,7,9,11];r=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);for(let h=0;h<this.nMips;h++)this.separableBlurMaterials.push(this._getSeparableBlurMaterial(l[h])),this.separableBlurMaterials[h].uniforms.invSize.value=new nt(1/r,1/o),r=Math.round(r/2),o=Math.round(o/2);this.compositeMaterial=this._getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=e,this.compositeMaterial.uniforms.bloomRadius.value=.1;let c=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=c,this.bloomTintColors=[new R(1,1,1),new R(1,1,1),new R(1,1,1),new R(1,1,1),new R(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,this.copyUniforms=pi.clone(ar.uniforms),this.blendMaterial=new Se({uniforms:this.copyUniforms,vertexShader:ar.vertexShader,fragmentShader:ar.fragmentShader,blending:Qn,depthTest:!1,depthWrite:!1,transparent:!0}),this._oldClearColor=new vt,this._oldClearAlpha=1,this._basic=new yn,this._fsQuad=new Di(null)}dispose(){for(let t=0;t<this.renderTargetsHorizontal.length;t++)this.renderTargetsHorizontal[t].dispose();for(let t=0;t<this.renderTargetsVertical.length;t++)this.renderTargetsVertical[t].dispose();this.renderTargetBright.dispose();for(let t=0;t<this.separableBlurMaterials.length;t++)this.separableBlurMaterials[t].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this._basic.dispose(),this._fsQuad.dispose()}setSize(t,e){let n=Math.round(t/2),s=Math.round(e/2);this.renderTargetBright.setSize(n,s);for(let r=0;r<this.nMips;r++)this.renderTargetsHorizontal[r].setSize(n,s),this.renderTargetsVertical[r].setSize(n,s),this.separableBlurMaterials[r].uniforms.invSize.value=new nt(1/n,1/s),n=Math.round(n/2),s=Math.round(s/2)}render(t,e,n,s,r){t.getClearColor(this._oldClearColor),this._oldClearAlpha=t.getClearAlpha();let o=t.autoClear;t.autoClear=!1,t.setClearColor(this.clearColor,0),r&&t.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this._fsQuad.material=this._basic,this._basic.map=n.texture,t.setRenderTarget(null),t.clear(),this._fsQuad.render(t)),this.highPassUniforms.tDiffuse.value=n.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this._fsQuad.material=this.materialHighPassFilter,t.setRenderTarget(this.renderTargetBright),t.clear(),this._fsQuad.render(t);let a=this.renderTargetBright;for(let l=0;l<this.nMips;l++)this._fsQuad.material=this.separableBlurMaterials[l],this.separableBlurMaterials[l].uniforms.colorTexture.value=a.texture,this.separableBlurMaterials[l].uniforms.direction.value=i.BlurDirectionX,t.setRenderTarget(this.renderTargetsHorizontal[l]),t.clear(),this._fsQuad.render(t),this.separableBlurMaterials[l].uniforms.colorTexture.value=this.renderTargetsHorizontal[l].texture,this.separableBlurMaterials[l].uniforms.direction.value=i.BlurDirectionY,t.setRenderTarget(this.renderTargetsVertical[l]),t.clear(),this._fsQuad.render(t),a=this.renderTargetsVertical[l];this._fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,t.setRenderTarget(this.renderTargetsHorizontal[0]),t.clear(),this._fsQuad.render(t),this._fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,r&&t.state.buffers.stencil.setTest(!0),this.renderToScreen?(t.setRenderTarget(null),this._fsQuad.render(t)):(t.setRenderTarget(n),this._fsQuad.render(t)),t.setClearColor(this._oldClearColor,this._oldClearAlpha),t.autoClear=o}_getSeparableBlurMaterial(t){let e=[];for(let n=0;n<t;n++)e.push(.39894*Math.exp(-.5*n*n/(t*t))/t);return new Se({defines:{KERNEL_RADIUS:t},uniforms:{colorTexture:{value:null},invSize:{value:new nt(.5,.5)},direction:{value:new nt(.5,.5)},gaussianCoefficients:{value:e}},vertexShader:`varying vec2 vUv;
				void main() {
					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
				}`,fragmentShader:`#include <common>
				varying vec2 vUv;
				uniform sampler2D colorTexture;
				uniform vec2 invSize;
				uniform vec2 direction;
				uniform float gaussianCoefficients[KERNEL_RADIUS];

				void main() {
					float weightSum = gaussianCoefficients[0];
					vec3 diffuseSum = texture2D( colorTexture, vUv ).rgb * weightSum;
					for( int i = 1; i < KERNEL_RADIUS; i ++ ) {
						float x = float(i);
						float w = gaussianCoefficients[i];
						vec2 uvOffset = direction * invSize * x;
						vec3 sample1 = texture2D( colorTexture, vUv + uvOffset ).rgb;
						vec3 sample2 = texture2D( colorTexture, vUv - uvOffset ).rgb;
						diffuseSum += (sample1 + sample2) * w;
						weightSum += 2.0 * w;
					}
					gl_FragColor = vec4(diffuseSum/weightSum, 1.0);
				}`})}_getCompositeMaterial(t){return new Se({defines:{NUM_MIPS:t},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`varying vec2 vUv;
				void main() {
					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
				}`,fragmentShader:`varying vec2 vUv;
				uniform sampler2D blurTexture1;
				uniform sampler2D blurTexture2;
				uniform sampler2D blurTexture3;
				uniform sampler2D blurTexture4;
				uniform sampler2D blurTexture5;
				uniform float bloomStrength;
				uniform float bloomRadius;
				uniform float bloomFactors[NUM_MIPS];
				uniform vec3 bloomTintColors[NUM_MIPS];

				float lerpBloomFactor(const in float factor) {
					float mirrorFactor = 1.2 - factor;
					return mix(factor, mirrorFactor, bloomRadius);
				}

				void main() {
					gl_FragColor = bloomStrength * ( lerpBloomFactor(bloomFactors[0]) * vec4(bloomTintColors[0], 1.0) * texture2D(blurTexture1, vUv) +
						lerpBloomFactor(bloomFactors[1]) * vec4(bloomTintColors[1], 1.0) * texture2D(blurTexture2, vUv) +
						lerpBloomFactor(bloomFactors[2]) * vec4(bloomTintColors[2], 1.0) * texture2D(blurTexture3, vUv) +
						lerpBloomFactor(bloomFactors[3]) * vec4(bloomTintColors[3], 1.0) * texture2D(blurTexture4, vUv) +
						lerpBloomFactor(bloomFactors[4]) * vec4(bloomTintColors[4], 1.0) * texture2D(blurTexture5, vUv) );
				}`})}};lr.BlurDirectionX=new nt(1,0);lr.BlurDirectionY=new nt(0,1);var go={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
		precision highp float;

		uniform mat4 modelViewMatrix;
		uniform mat4 projectionMatrix;

		attribute vec3 position;
		attribute vec2 uv;

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		precision highp float;

		uniform sampler2D tDiffuse;

		#include <tonemapping_pars_fragment>
		#include <colorspace_pars_fragment>

		varying vec2 vUv;

		void main() {

			gl_FragColor = texture2D( tDiffuse, vUv );

			// tone mapping

			#ifdef LINEAR_TONE_MAPPING

				gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );

			#elif defined( REINHARD_TONE_MAPPING )

				gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );

			#elif defined( CINEON_TONE_MAPPING )

				gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );

			#elif defined( ACES_FILMIC_TONE_MAPPING )

				gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );

			#elif defined( AGX_TONE_MAPPING )

				gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );

			#elif defined( NEUTRAL_TONE_MAPPING )

				gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );

			#elif defined( CUSTOM_TONE_MAPPING )

				gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );

			#endif

			// color space

			#ifdef SRGB_TRANSFER

				gl_FragColor = sRGBTransferOETF( gl_FragColor );

			#endif

		}`};var Ol=class extends Sn{constructor(){super(),this.uniforms=pi.clone(go.uniforms),this.material=new eo({name:go.name,uniforms:this.uniforms,vertexShader:go.vertexShader,fragmentShader:go.fragmentShader}),this._fsQuad=new Di(this.material),this._outputColorSpace=null,this._toneMapping=null}render(t,e,n){this.uniforms.tDiffuse.value=n.texture,this.uniforms.toneMappingExposure.value=t.toneMappingExposure,(this._outputColorSpace!==t.outputColorSpace||this._toneMapping!==t.toneMapping)&&(this._outputColorSpace=t.outputColorSpace,this._toneMapping=t.toneMapping,this.material.defines={},ee.getTransfer(this._outputColorSpace)===re&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===Oa?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===Ha?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===za?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===Ks?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===Va?this.material.defines.AGX_TONE_MAPPING="":this._toneMapping===Ga?this.material.defines.NEUTRAL_TONE_MAPPING="":this._toneMapping===ka&&(this.material.defines.CUSTOM_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(t.setRenderTarget(null),this._fsQuad.render(t)):(t.setRenderTarget(e),this.clear&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),this._fsQuad.render(t))}dispose(){this.material.dispose(),this._fsQuad.dispose()}};var Hl=class extends Ji{constructor(){super();let t=new Le;t.deleteAttribute("uv");let e=new oe({side:nn}),n=new oe,s=new rs(16777215,900,28,2);s.position.set(.418,16.199,.3),this.add(s);let r=new j(t,e);r.position.set(-.757,13.219,.717),r.scale.set(31.713,28.305,28.591),this.add(r);let o=new on(t,n,6),a=new ce;a.position.set(-10.906,2.009,1.846),a.rotation.set(0,-.195,0),a.scale.set(2.328,7.905,4.651),a.updateMatrix(),o.setMatrixAt(0,a.matrix),a.position.set(-5.607,-.754,-.758),a.rotation.set(0,.994,0),a.scale.set(1.97,1.534,3.955),a.updateMatrix(),o.setMatrixAt(1,a.matrix),a.position.set(6.167,.857,7.803),a.rotation.set(0,.561,0),a.scale.set(3.927,6.285,3.687),a.updateMatrix(),o.setMatrixAt(2,a.matrix),a.position.set(-2.017,.018,6.124),a.rotation.set(0,.333,0),a.scale.set(2.002,4.566,2.064),a.updateMatrix(),o.setMatrixAt(3,a.matrix),a.position.set(2.291,-.756,-2.621),a.rotation.set(0,-.286,0),a.scale.set(1.546,1.552,1.496),a.updateMatrix(),o.setMatrixAt(4,a.matrix),a.position.set(-2.193,-.369,-5.547),a.rotation.set(0,.516,0),a.scale.set(3.875,3.487,2.986),a.updateMatrix(),o.setMatrixAt(5,a.matrix),this.add(o);let l=new j(t,cr(50));l.position.set(-16.116,14.37,8.208),l.scale.set(.1,2.428,2.739),this.add(l);let c=new j(t,cr(50));c.position.set(-16.109,18.021,-8.207),c.scale.set(.1,2.425,2.751),this.add(c);let h=new j(t,cr(17));h.position.set(14.904,12.198,-1.832),h.scale.set(.15,4.265,6.331),this.add(h);let u=new j(t,cr(43));u.position.set(-.462,8.89,14.52),u.scale.set(4.38,5.441,.088),this.add(u);let f=new j(t,cr(20));f.position.set(3.235,11.486,-12.541),f.scale.set(2.5,2,.1),this.add(f);let d=new j(t,cr(100));d.position.set(0,20,0),d.scale.set(1,.1,1),this.add(d)}dispose(){let t=new Set;this.traverse(e=>{e.isMesh&&(t.add(e.geometry),t.add(e.material))});for(let e of t)e.dispose()}};function cr(i){return new no({color:0,emissive:16777215,emissiveIntensity:i})}var Dt=Math.PI*2,ae=i=>i*Math.PI/180,Fe=(i,t=0,e=1)=>Math.min(e,Math.max(t,i)),te=(i,t,e)=>i+(t-i)*e,ti=(i,t,e)=>{let n=Fe((e-i)/(t-i));return n*n*(3-2*n)},me={linear:i=>i,in:i=>i*i*i,out:i=>1-Math.pow(1-i,3),inOut:i=>i<.5?4*i*i*i:1-Math.pow(-2*i+2,3)/2,inOutSine:i=>-(Math.cos(Math.PI*i)-1)/2,outBack:i=>1+2.70158*Math.pow(i-1,3)+1.70158*Math.pow(i-1,2),outElastic:i=>{if(i===0||i===1)return i;let t=2*Math.PI/3;return Math.pow(2,-10*i)*Math.sin((i*10-.75)*t)+1}};function xe(i){let t=i>>>0;return function(){t=t+1831565813>>>0;let e=t;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}}var zl=class{constructor(){this.items=[]}tween(t,e,n=me.inOut,s=0){return new Promise(r=>{this.items.push({duration:Math.max(1e-4,t),fn:e,easing:n,t:-s,resolve:r})})}wait(t){return this.tween(t,null,me.linear)}clear(){this.items.length=0}update(t){if(!this.items.length)return;let e=[];for(let n of this.items.slice()){if(n.t+=t,n.t<0)continue;let s=Math.min(1,n.t/n.duration);n.fn&&n.fn(n.easing(s),s),s>=1&&e.push(n)}if(e.length){this.items=this.items.filter(n=>!e.includes(n));for(let n of e)n.resolve()}}};var Y_=()=>/Android|iPhone|iPad|iPod|Mobile/i.test(navigator.userAgent)||navigator.maxTouchPoints>1&&innerWidth<900;function zd(i){let t=Y_(),e=new URLSearchParams(location.search).has("fast"),n={dpr:e?1:Math.min(window.devicePixelRatio||1,t?1.75:2),shadow:e||t?1024:2048,msaa:e||t?0:4,bloom:!0},s=new Ll({canvas:i,antialias:!1,powerPreference:"high-performance"});s.setPixelRatio(n.dpr),s.shadowMap.enabled=!0,s.shadowMap.type=Ca,s.toneMapping=Ks,s.toneMappingExposure=.9,s.outputColorSpace=je;let r=new Ji,o=new vt("#12061a");r.background=o;let a=new rr(s);r.environment=a.fromScene(new Hl,.04).texture,r.environmentIntensity=.2;let l=new $e(32,1,.1,120),c={target:new R(0,1.2,0),dir:new R(0,.36,1).normalize(),w:6.4,h:5.6,roll:0},h=new nt,u=new nt,f={amp:0},d=0,m=new Fl(s,new Je(4,4,{type:pn,samples:n.msaa})),x=new Bl(r,l),g=new lr(new nt(512,512),.4,.6,1),p=new Ol;m.addPass(x),m.addPass(g),m.addPass(p);function E(){let M=Math.max(1,i.clientWidth||window.innerWidth),S=Math.max(1,i.clientHeight||window.innerHeight);s.setPixelRatio(n.dpr),s.setSize(M,S,!1),m.setPixelRatio(n.dpr),m.setSize(M,S),l.aspect=M/S,l.fov=l.aspect<.8?40:l.aspect<1.2?36:32,l.updateProjectionMatrix()}function y(){let M=Math.tan(l.fov*Math.PI/360),S=c.h/(2*M),D=c.w/(2*M*l.aspect),B=Math.max(S,D);l.position.copy(c.target).addScaledVector(c.dir,B);let I=f.amp;l.position.x+=h.x*.45+Math.sin(d*.35)*.06+(Math.random()-.5)*I,l.position.y+=h.y*.25+Math.sin(d*.27+1)*.04+(Math.random()-.5)*I,l.lookAt(c.target),c.roll&&l.rotateZ(c.roll)}function _(M){d+=M,h.lerp(u,1-Math.pow(.001,M)),y()}function A(){y(),m.render()}function T(M){M.target&&c.target.set(...M.target),M.dir&&c.dir.set(...M.dir).normalize(),M.w!==void 0&&(c.w=M.w),M.h!==void 0&&(c.h=M.h)}function C(){return{target:c.target.toArray(),dir:c.dir.toArray(),w:c.w,h:c.h}}function L(M){M===1?(n.dpr=Math.min(n.dpr,1.25),g.enabled=!1):M===2&&(n.dpr=1),E()}return E(),window.addEventListener("resize",E),window.addEventListener("pointermove",M=>{u.set((M.clientX/window.innerWidth-.5)*2,-(M.clientY/window.innerHeight-.5)*2)}),{renderer:s,scene:r,camera:l,composer:m,bloom:g,q:n,shot:c,shake:f,bgColor:o,resize:E,update:_,render:A,setShot:T,getShot:C,lowerQuality:L,viewportScale:()=>s.domElement.height/(2*Math.tan(l.fov*Math.PI/360))}}function kd(i,t,e){let n=(s,r)=>[te(s[0],r[0],e),te(s[1],r[1],e),te(s[2],r[2],e)];return{target:n(i.target,t.target),dir:n(i.dir,t.dir),w:te(i.w,t.w,e),h:te(i.h,t.h,e)}}function we(i,t){let e=document.createElement("canvas");return e.width=i,e.height=t,e}function Be(i,{srgb:t=!0,repeat:e=null,wrap:n=!1,aniso:s=8}={}){let r=new Gr(i);return r.colorSpace=t?je:kn,r.anisotropy=s,n&&(r.wrapS=r.wrapT=Bs),e&&r.repeat.set(e[0],e[1]),r.needsUpdate=!0,r}function Ui(i,t,e,n,s,r=3){let o=xe(s),a=i.getImageData(0,0,t,e),l=a.data;for(let c=0;c<l.length;c+=4){let h=(o()-.5)*n;l[c]+=h,r===3?(l[c+1]+=h,l[c+2]+=h):(l[c+1]=l[c],l[c+2]=l[c])}i.putImageData(a,0,0)}function Z_(i,t,e=i/2,n=i/2,s=0){let r=[0],o=[0];e<s&&r.push(i),e>i-s&&r.push(-i),n<s&&o.push(i),n>i-s&&o.push(-i);for(let a of r)for(let l of o)t(a,l)}function Vd(i){let e=xe(11),n=we(512,512),s=n.getContext("2d"),r=we(512,512),o=r.getContext("2d");s.fillStyle="#f8eee3",s.fillRect(0,0,512,512),o.fillStyle="#808080",o.fillRect(0,0,512,512),s.lineCap=o.lineCap="round";for(let a=0;a<700;a++){let l=e()*512,c=e()*512,h=50+e()*170,u=3+e()*12,f=Math.PI/2+(e()-.5)*.3,d=e()>.5,m=.05+e()*.08,x=Math.cos(f)*h,g=Math.sin(f)*h;Z_(512,(p,E)=>{s.strokeStyle=d?`rgba(255,252,246,${m*1.2})`:`rgba(214,184,160,${m*.9})`,s.lineWidth=u,s.beginPath(),s.moveTo(l+p,c+E),s.lineTo(l+p+x,c+E+g),s.stroke(),o.strokeStyle=d?`rgba(255,255,255,${m*1.6})`:`rgba(0,0,0,${m*1.6})`,o.lineWidth=u,o.beginPath(),o.moveTo(l+p,c+E),o.lineTo(l+p+x,c+E+g),o.stroke()},l,c,200)}return Ui(s,512,512,7,3),Ui(o,512,512,10,4,1),{map:Be(n,{wrap:!0,aniso:i}),bump:Be(r,{srgb:!1,wrap:!0,aniso:i})}}function Gd(i){let n=xe(77),s=we(1024,640),r=s.getContext("2d"),o=we(1024,640),a=o.getContext("2d"),l=[{k:"frost",h:.06},{k:"sponge",h:.235},{k:"cream",h:.052},{k:"jam",h:.03},{k:"cream",h:.04},{k:"sponge",h:.235},{k:"cream",h:.052},{k:"jam",h:.03},{k:"cream",h:.04},{k:"sponge",h:.2},{k:"frost",h:.025}],c=l.reduce((y,_)=>y+_.h,0),h=0;for(let y of l)y.y0=h/c*640,h+=y.h,y.y1=h/c*640;let u=(y,_)=>Math.sin(_*.011+y*1.7)*2.2+Math.sin(_*.037+y*4.1)*1.2+Math.sin(_*.09+y)*.5,f=(y,_,A)=>{y.beginPath(),y.moveTo(0,_.y0+u(A,0));for(let T=0;T<=1024;T+=8)y.lineTo(T,_.y0+u(A,T));for(let T=1024;T>=0;T-=8)y.lineTo(T,_.y1+u(A+1,T));y.closePath()};a.fillStyle="#808080",a.fillRect(0,0,1024,640),r.fillStyle="#e8c477",r.fillRect(0,0,1024,640);let d=we(1024,640),m=d.getContext("2d"),x=we(1024,640),g=x.getContext("2d");g.fillStyle="rgba(128,128,128,0)";for(let y=0;y<9e3;y++){let _=n()*1024,A=n()*640,T=.6+n()*n()*3.2;m.fillStyle=`rgba(150,96,34,${.1+n()*.22})`,m.beginPath(),m.ellipse(_,A,T*1.25,T,n()*3,0,Dt),m.fill(),m.fillStyle=`rgba(255,243,200,${.18+n()*.3})`,m.beginPath(),m.arc(_-T*.5,A+T*.7,T*.45,0,Dt),m.fill(),g.fillStyle=`rgba(0,0,0,${.22+n()*.3})`,g.beginPath(),g.ellipse(_,A,T*1.25,T,n()*3,0,Dt),g.fill()}for(let y=0;y<520;y++){let _=n()*1024,A=n()*640,T=3+n()*5;m.fillStyle="rgba(140,86,30,0.22)",m.beginPath(),m.ellipse(_,A,T*1.4,T,n()*3,0,Dt),m.fill(),g.fillStyle="rgba(0,0,0,0.45)",g.beginPath(),g.ellipse(_,A,T*1.4,T,n()*3,0,Dt),g.fill()}l.forEach((y,_)=>{r.save(),f(r,y,_),r.clip(),a.save(),f(a,y,_),a.clip();let A=y.y0-6,T=y.y1+6;if(y.k==="sponge"){let C=r.createLinearGradient(0,A,0,T);C.addColorStop(0,"#f4d98f"),C.addColorStop(.5,"#f0cf7e"),C.addColorStop(1,"#e8bd66"),r.fillStyle=C,r.fillRect(0,A,1024,T-A);let L=r.createLinearGradient(0,A,0,T);L.addColorStop(0,"rgba(196,132,52,0.55)"),L.addColorStop(.12,"rgba(196,132,52,0)"),L.addColorStop(.88,"rgba(196,132,52,0)"),L.addColorStop(1,"rgba(196,132,52,0.5)"),r.fillStyle=L,r.fillRect(0,A,1024,T-A),r.drawImage(d,0,0),a.drawImage(x,0,0)}else if(y.k==="cream"){let C=r.createLinearGradient(0,A,0,T);C.addColorStop(0,"#fff6ea"),C.addColorStop(1,"#fffaf2"),r.fillStyle=C,r.fillRect(0,A,1024,T-A),a.fillStyle="#8a8a8a",a.fillRect(0,A,1024,T-A)}else if(y.k==="jam"){let C=r.createLinearGradient(0,A,0,T);C.addColorStop(0,"#d8284a"),C.addColorStop(.5,"#b81432"),C.addColorStop(1,"#8e0f28"),r.fillStyle=C,r.fillRect(0,A,1024,T-A);for(let L=0;L<150;L++){let M=n()*1024,S=A+n()*(T-A),D=1+n()*3.5;r.fillStyle=n()>.5?"rgba(255,120,140,0.5)":"rgba(80,0,16,0.45)",r.beginPath(),r.ellipse(M,S,D*1.8,D,0,0,Dt),r.fill()}for(let L=0;L<60;L++)r.fillStyle="rgba(255,224,130,0.8)",r.fillRect(n()*1024,A+n()*(T-A),1.4,1.4);a.fillStyle="#767676",a.fillRect(0,A,1024,T-A)}else r.fillStyle="#f8ede2",r.fillRect(0,A,1024,T-A),a.fillStyle="#909090",a.fillRect(0,A,1024,T-A);r.restore(),a.restore()});let p=1024*.052;r.save(),r.beginPath(),r.moveTo(1024-p,0);for(let y=0;y<=640;y+=6)r.lineTo(1024-p+Math.sin(y*.05)*3+Math.sin(y*.17)*1.5,y);r.lineTo(1024,640),r.lineTo(1024,0),r.closePath();let E=r.createLinearGradient(0,0,0,640);return E.addColorStop(0,"#f8eee3"),E.addColorStop(.45,"#f6e2d8"),E.addColorStop(1,"#eeb0bd"),r.fillStyle=E,r.fill(),r.strokeStyle="rgba(190,150,120,0.35)",r.lineWidth=2,r.stroke(),r.restore(),a.fillStyle="#909090",a.fillRect(1024-p,0,p,640),Ui(r,1024,640,8,9),Ui(a,1024,640,14,10,1),{map:Be(s,{aniso:i}),bump:Be(o,{srgb:!1,aniso:i}),layers:l.map(y=>({k:y.k,a:y.y0/640,b:y.y1/640}))}}function Wd(i){let n=xe(5),s=we(512,512),r=s.getContext("2d"),o=we(512,512),a=o.getContext("2d"),l=r.createLinearGradient(0,512,0,0);l.addColorStop(0,"#d11a2e"),l.addColorStop(.45,"#c8102e"),l.addColorStop(.85,"#b00c26"),l.addColorStop(1,"#8c1a22"),r.fillStyle=l,r.fillRect(0,0,512,512),a.fillStyle="#9a9a9a",a.fillRect(0,0,512,512);for(let u=0;u<4500;u++)r.fillStyle=`rgba(255,120,120,${n()*.07})`,r.fillRect(n()*512,n()*512,2+n()*6,2+n()*6);let c=17,h=22;for(let u=0;u<c;u++)for(let f=0;f<h;f++){let d=(f+u%2*.5)/h*512,m=(u+.7)/c*512,x=d+(n()-.5)*5,g=m+(n()-.5)*5;r.fillStyle="rgba(110,0,16,0.55)",r.beginPath(),r.ellipse(x,g,5.2,7.4,0,0,Dt),r.fill(),r.fillStyle="#f4d77a",r.beginPath(),r.ellipse(x,g-.5,2.2,3.6,0,0,Dt),r.fill(),r.fillStyle="rgba(255,248,210,0.9)",r.fillRect(x-.6,g-2.6,1,2),a.fillStyle="rgba(0,0,0,0.7)",a.beginPath(),a.ellipse(x,g,5.2,7.4,0,0,Dt),a.fill()}return{map:Be(s,{wrap:!0,aniso:i}),bump:Be(o,{srgb:!1,wrap:!0,aniso:i})}}var kl=null;function Xd(i,t){if(kl)return kl;let e=128,n=256,s=we(e,n),r=s.getContext("2d"),o=r.createLinearGradient(0,0,e,0);o.addColorStop(0,"#f3e6d4"),o.addColorStop(.5,"#fffaf2"),o.addColorStop(1,"#f3e6d4"),r.fillStyle=o,r.fillRect(0,0,e,n),r.fillStyle="#d9ad55";let a=44;for(let l=-4;l<12;l++)r.beginPath(),r.moveTo(0,l*a),r.lineTo(e,l*a-90),r.lineTo(e,l*a-90+6),r.lineTo(0,l*a+6),r.closePath(),r.fill();return kl=Be(s,{wrap:!0,aniso:t}),kl}function qd(i){let e=we(512,512),n=e.getContext("2d"),s=we(512,512),r=s.getContext("2d");n.fillStyle="#f4ead9",n.fillRect(0,0,512,512),r.fillStyle="#808080",r.fillRect(0,0,512,512);for(let[o,a]of[[512/2,512/2],[0,0],[512,0],[0,512],[512,512]])hr(n,o,a,1.55,"rgba(214,190,150,0.28)"),hr(r,o,a,1.55,"rgba(255,255,255,0.35)");for(let[o,a]of[[512/2,0],[512/2,512],[0,512/2],[512,512/2]])hr(n,o,a,.7,"rgba(214,190,150,0.2)");for(let o=0;o<512;o+=2)n.fillStyle=`rgba(255,255,255,${o/2%2?.05:0})`,n.fillRect(0,o,512,1);return Ui(n,512,512,6,21),{map:Be(e,{wrap:!0,repeat:[7,7],aniso:i}),bump:Be(s,{srgb:!1,wrap:!0,repeat:[7,7],aniso:i})}}function hr(i,t,e,n,s){i.save(),i.translate(t,e),i.scale(n,n),i.fillStyle=s,i.strokeStyle=s,i.lineWidth=3;for(let r of[1,-1])i.save(),i.scale(r,1),i.beginPath(),i.moveTo(0,-78),i.bezierCurveTo(10,-58,26,-40,14,-18),i.bezierCurveTo(30,-8,30,18,10,30),i.bezierCurveTo(22,46,14,64,0,80),i.lineTo(0,-78),i.fill(),i.beginPath(),i.moveTo(14,-18),i.bezierCurveTo(44,-40,66,-20,56,2),i.bezierCurveTo(50,16,34,12,38,0),i.stroke(),i.beginPath(),i.moveTo(10,30),i.bezierCurveTo(44,34,62,58,46,74),i.bezierCurveTo(36,82,26,70,34,62),i.stroke(),i.beginPath(),i.ellipse(46,-46,7,18,-.7,0,Math.PI*2),i.fill(),i.beginPath(),i.ellipse(30,52,5,13,.6,0,Math.PI*2),i.fill(),i.beginPath(),i.arc(60,28,4,0,Math.PI*2),i.fill(),i.restore();i.beginPath(),i.arc(0,-90,6,0,Math.PI*2),i.fill(),i.restore()}function Yd(i,t){let s=we(1024,560),r=s.getContext("2d");r.clearRect(0,0,1024,560),r.textAlign="center",r.textBaseline="alphabetic";let o='"Great Vibes", "Snell Roundhand", "Apple Chancery", "Brush Script MT", cursive',a=r.createLinearGradient(0,40,0,520);a.addColorStop(0,"#fff2b0"),a.addColorStop(.35,"#e9bd4e"),a.addColorStop(.6,"#b8862a"),a.addColorStop(.8,"#f3d37a"),a.addColorStop(1,"#c79a35"),r.fillStyle=a,r.strokeStyle=a,r.lineJoin="round",r.font=`150px ${o}`,r.lineWidth=7,r.strokeText("Happy Birthday",1024/2,190),r.fillText("Happy Birthday",1024/2,190);let l=300;for(r.font=`${l}px ${o}`;r.measureText(i).width>1024*.9&&l>120;)l-=10,r.font=`${l}px ${o}`;r.lineWidth=9,r.strokeText(i,1024/2,440),r.fillText(i,1024/2,440),r.lineWidth=12,r.lineCap="round",r.beginPath(),r.moveTo(1024*.14,485),r.bezierCurveTo(1024*.35,515,1024*.65,515,1024*.86,480),r.stroke(),r.lineWidth=7,r.beginPath(),r.moveTo(1024*.5,160),r.lineTo(1024*.5,360),r.stroke();let c=(h,u,f)=>{r.beginPath();for(let d=0;d<10;d++){let m=d%2?f*.42:f,x=d/10*Dt-Math.PI/2;r.lineTo(h+Math.cos(x)*m,u+Math.sin(x)*m)}r.closePath(),r.fill()};return c(1024*.1,80,26),c(1024*.92,130,20),c(1024*.06,300,14),Be(s,{aniso:t})}function Zd(){let t=we(128,128),e=t.getContext("2d"),n=e.createRadialGradient(128/2,128/2,0,128/2,128/2,128/2);return n.addColorStop(0,"rgba(255,255,255,1)"),n.addColorStop(.18,"rgba(255,255,255,0.55)"),n.addColorStop(.5,"rgba(255,255,255,0.12)"),n.addColorStop(1,"rgba(255,255,255,0)"),e.fillStyle=n,e.fillRect(0,0,128,128),Be(t,{srgb:!0})}function $d(){let t=we(128,128),e=t.getContext("2d"),n=e.createRadialGradient(128/2,128/2,0,128/2,128/2,128/2);return n.addColorStop(0,"rgba(255,255,255,0.35)"),n.addColorStop(.75,"rgba(255,255,255,0.5)"),n.addColorStop(.92,"rgba(255,255,255,0.95)"),n.addColorStop(1,"rgba(255,255,255,0)"),e.fillStyle=n,e.beginPath(),e.arc(128/2,128/2,128/2,0,Dt),e.fill(),Be(t,{srgb:!0})}function Jd(){let t=we(128,128),e=t.getContext("2d");e.translate(128/2,128/2);let n=e.createRadialGradient(0,0,0,0,0,128/2);n.addColorStop(0,"rgba(255,255,255,1)"),n.addColorStop(.25,"rgba(255,255,255,0.35)"),n.addColorStop(1,"rgba(255,255,255,0)"),e.fillStyle=n,e.fillRect(-128/2,-128/2,128,128),e.fillStyle="rgba(255,255,255,0.95)";for(let s of[0,Math.PI/2])e.save(),e.rotate(s),e.beginPath(),e.moveTo(-128/2,0),e.quadraticCurveTo(0,-3,128/2,0),e.quadraticCurveTo(0,3,-128/2,0),e.fill(),e.restore();return Be(t,{srgb:!0})}function Kd(){let t=xe(3),e=we(128,128),n=e.getContext("2d");for(let s=0;s<14;s++){let r=64+(t()-.5)*40,o=128/2+(t()-.5)*40,a=18+t()*26,l=n.createRadialGradient(r,o,0,r,o,a);l.addColorStop(0,"rgba(255,255,255,0.28)"),l.addColorStop(1,"rgba(255,255,255,0)"),n.fillStyle=l,n.fillRect(0,0,128,128)}return Be(e,{srgb:!0})}function Qd(){let t=xe(8),e=we(256,256),n=e.getContext("2d");n.fillStyle="#f7ebe0",n.fillRect(0,0,256,256);for(let s=0;s<260;s++)n.fillStyle=t()>.5?"rgba(238,176,189,0.16)":"rgba(255,250,240,0.3)",n.beginPath(),n.ellipse(t()*256,t()*256,4+t()*22,3+t()*10,t()*3,0,Dt),n.fill();return Ui(n,256,256,10,2),Be(e,{wrap:!0})}function jd(i){let e=we(512,512),n=e.getContext("2d");n.fillStyle="#4a1722",n.fillRect(0,0,512,512);for(let[s,r]of[[512/2,512/2],[0,0],[512,0],[0,512],[512,512]])hr(n,s,r,1.5,"rgba(120,40,52,0.55)");for(let[s,r]of[[512/2,512/2],[0,0],[512,0],[0,512],[512,512]])hr(n,s,r,1.5,"rgba(214,170,90,0.10)");for(let[s,r]of[[512/2,0],[512/2,512],[0,512/2],[512,512/2]])hr(n,s,r,.65,"rgba(214,170,90,0.12)");return Ui(n,512,512,8,31),{map:Be(e,{wrap:!0,repeat:[9,5],aniso:i})}}function tf(i){let n=xe(17),s=we(512,512),r=s.getContext("2d"),o=we(512,512),a=o.getContext("2d");a.fillStyle="#808080",a.fillRect(0,0,512,512);let l=64;for(let c=0;c<512;c+=l){let h=.85+n()*.3,u=[Math.floor(112*h),Math.floor(64*h),Math.floor(38*h)];r.fillStyle=`rgb(${u})`,r.fillRect(0,c,512,l);for(let d=0;d<40;d++){let m=c+n()*l;r.strokeStyle=`rgba(${n()>.5?"60,30,14":"170,110,70"},${.08+n()*.12})`,r.lineWidth=.5+n()*1.5,r.beginPath(),r.moveTo(0,m);for(let x=0;x<=512;x+=16)r.lineTo(x,m+Math.sin(x*.02+d)*2+Math.sin(x*.07+m)*.8);r.stroke()}let f=Math.floor(n()*512);r.fillStyle="rgba(30,14,6,0.8)",r.fillRect(0,c,512,2),r.fillRect(f,c,2,l),a.fillStyle="#202020",a.fillRect(0,c,512,2),a.fillRect(f,c,2,l)}return Ui(r,512,512,10,3),{map:Be(s,{wrap:!0,repeat:[10,10],aniso:i}),bump:Be(o,{srgb:!1,wrap:!0,repeat:[10,10],aniso:i})}}var Ah=new Map;function ef(i,t,e){let n=i+t+e;if(Ah.has(n))return Ah.get(n);let s=128,r=168,o=we(s,r),a=o.getContext("2d");a.beginPath(),a.moveTo(4,4),a.lineTo(s-4,4),a.lineTo(s-4,r*.62),a.lineTo(s/2,r-4),a.lineTo(4,r*.62),a.closePath();let l=a.createLinearGradient(0,0,0,r);l.addColorStop(0,t),l.addColorStop(1,Rh(t,-18)),a.fillStyle=l,a.fill(),a.lineWidth=4,a.strokeStyle="#d9ad55",a.stroke(),a.fillStyle=e,a.textAlign="center",a.textBaseline="middle",a.font='600 76px "Cormorant Garamond", Georgia, serif',a.fillText(i,s/2,r*.4);let c=Be(o);return Ah.set(n,c),c}function Rh(i,t){let e=parseInt(i.slice(1),16),n=Math.max(0,Math.min(255,(e>>16)+t)),s=Math.max(0,Math.min(255,(e>>8&255)+t)),r=Math.max(0,Math.min(255,(e&255)+t));return`rgb(${n},${s},${r})`}function nf(i="#5a3520"){let n=xe(4),s=we(128,128),r=s.getContext("2d"),o=r.createLinearGradient(0,128,0,0);o.addColorStop(0,"#050302"),o.addColorStop(.3,"#050302"),o.addColorStop(.36,Rh(i,40)),o.addColorStop(.7,i),o.addColorStop(.9,Rh(i,-40)),o.addColorStop(1,"#1a0d08"),r.fillStyle=o,r.fillRect(0,0,128,128);for(let a=0;a<220;a++){let l=n()*128;r.strokeStyle=n()>.5?"rgba(220,170,110,0.25)":"rgba(30,14,6,0.3)",r.lineWidth=.6+n(),r.beginPath(),r.moveTo(l,128*(.12+n()*.1)),r.lineTo(l+(n()-.5)*4,128*(.55+n()*.1)),r.stroke()}return Be(s)}function sf(i){let n=xe(12),s=we(256,256),r=s.getContext("2d");r.fillStyle="#808080",r.fillRect(0,0,256,256);for(let o=0;o<900;o++){let a=n()*256;r.strokeStyle=n()>.5?`rgba(255,255,255,${.1+n()*.2})`:`rgba(0,0,0,${.1+n()*.25})`,r.lineWidth=.5+n()*1.2,r.beginPath(),r.moveTo(a,0),r.bezierCurveTo(a+(n()-.5)*10,256*.33,a+(n()-.5)*10,256*.66,a+(n()-.5)*6,256),r.stroke()}return{bump:Be(s,{srgb:!1,wrap:!0,aniso:i})}}function rf(i){let n=we(128,128),s=n.getContext("2d");s.fillStyle="#808080",s.fillRect(0,0,128,128);for(let[r,o]of[[0,1],[128/2,-1]]){let a=s.createLinearGradient(0,r,0,r+64);a.addColorStop(0,"rgba(0,0,0,0.65)"),a.addColorStop(.5,"rgba(255,255,255,0.45)"),a.addColorStop(1,"rgba(0,0,0,0.65)"),s.fillStyle=a,s.beginPath(),s.moveTo(0,r),s.quadraticCurveTo(128*.5,r+(o>0?128*.12:128*.38),128,r),s.lineTo(128,r+128/2),s.quadraticCurveTo(128*.5,r+(o>0?128*.62:128*.88),0,r+128/2),s.closePath(),s.fill()}for(let r=0;r<300;r++){s.strokeStyle=`rgba(${Math.random()>.5?"255,255,255":"0,0,0"},0.15)`,s.beginPath();let o=Math.random()*128,a=Math.random()*128;s.moveTo(o,a),s.lineTo(o+18,a+10),s.stroke()}return{bump:Be(n,{srgb:!1,wrap:!0,aniso:i})}}var of=new en(1,1);of.translate(0,.5,0);var ur=class{constructor(t,e=0){this.seed=e,this.life=1,this.blow=0,this.group=new Zt,this.mat=new Se({transparent:!0,depthWrite:!1,blending:Qn,uniforms:{uTime:{value:0},uSeed:{value:e},uLife:{value:1},uBlow:{value:0},uSize:{value:new nt(.085,.215)}},vertexShader:`
        uniform float uTime, uSeed, uLife, uBlow; uniform vec2 uSize;
        varying vec2 vUv;
        void main(){
          vUv = uv;
          vec4 mv = modelViewMatrix * vec4(0.0, 0.0, 0.0, 1.0);
          float h = position.y;
          float flick = sin(uTime*7.0 + uSeed*6.28)*0.5 + sin(uTime*13.0 + uSeed*3.1)*0.35;
          float lean = flick*0.05*h*h + uBlow*1.15*h*h;
          float stretch = 0.9 + 0.12*sin(uTime*9.0 + uSeed*5.0) - abs(uBlow)*0.35;
          vec2 off = vec2(position.x*uSize.x*(1.0 + abs(uBlow)*0.5) + lean*uSize.y, position.y*uSize.y*stretch) * uLife;
          mv.xy += off;
          gl_Position = projectionMatrix * mv;
        }`,fragmentShader:`
        uniform float uTime, uSeed, uLife;
        varying vec2 vUv;
        float hash(vec2 p){ return fract(sin(dot(p, vec2(127.1,311.7))) * 43758.5453); }
        float noise(vec2 p){
          vec2 i = floor(p), f = fract(p); f = f*f*(3.0-2.0*f);
          return mix(mix(hash(i), hash(i+vec2(1,0)), f.x), mix(hash(i+vec2(0,1)), hash(i+vec2(1,1)), f.x), f.y);
        }
        void main(){
          float y = vUv.y; float x = (vUv.x - 0.5) * 2.0;
          float n = noise(vec2(x*2.5 + uSeed*10.0, y*3.0 - uTime*2.6));
          x += (n - 0.5) * 0.5 * y;
          float w = pow(max(sin(3.14159*pow(y, 0.55)), 0.0), 0.85) * (1.0 - 0.25*y);
          float d = abs(x) / max(w, 0.001);
          float body = smoothstep(1.0, 0.2, d) * smoothstep(0.0, 0.06, y) * (1.0 - smoothstep(0.86, 1.0, y));
          vec3 hot  = vec3(1.0, 0.96, 0.78);
          vec3 mid  = vec3(1.0, 0.58, 0.14);
          vec3 tip  = vec3(0.85, 0.28, 0.05);
          vec3 cool = vec3(0.22, 0.42, 1.0);
          vec3 col = mix(mid, hot, smoothstep(0.6, 0.0, d) * (1.0 - y*0.55));
          col = mix(col, tip, smoothstep(0.55, 1.0, y));
          col = mix(cool, col, smoothstep(0.02, 0.28, y));
          gl_FragColor = vec4(col * 1.7, body * uLife);
        }`}),this.mesh=new j(of,this.mat),this.mesh.frustumCulled=!1,this.mesh.renderOrder=6,this.glow=new Ki(new Ri({map:t,color:16751164,blending:Qn,transparent:!0,depthWrite:!1,opacity:.3})),this.glow.position.y=.1,this.glow.scale.setScalar(.4),this.glow.renderOrder=5,this.group.add(this.mesh,this.glow)}update(t){let e=this.mat.uniforms;e.uTime.value=t,e.uLife.value=this.life,e.uBlow.value=this.blow,this.glow.material.opacity=this.life*(.3+.05*Math.sin(t*11+this.seed*9)+.03*Math.sin(t*23+this.seed)),this.glow.scale.setScalar(.4*(.4+.6*this.life)),this.group.visible=this.life>.002}},Vl=class{constructor(t,e,n=70){this.puffs=[],this.R=xe(41);for(let s=0;s<n;s++){let r=new Ki(new Ri({map:e,color:14472168,transparent:!0,depthWrite:!1,opacity:0}));r.visible=!1,r.renderOrder=4,t.add(r),this.puffs.push({s:r,life:0,max:1,vx:0,vy:0,vz:0,grow:1,spin:0})}this.next=0}emit(t,e=5){for(let n=0;n<e;n++){let s=this.puffs[this.next++%this.puffs.length];s.s.position.copy(t),s.s.position.x+=(this.R()-.5)*.03,s.max=s.life=2.2+this.R()*1.8,s.vx=.05+this.R()*.12,s.vy=.35+this.R()*.3,s.vz=(this.R()-.5)*.06,s.grow=.35+this.R()*.3,s.s.scale.setScalar(.06),s.s.material.rotation=this.R()*Dt,s.spin=(this.R()-.5)*.8,s.s.visible=!0}}update(t,e){for(let n of this.puffs){if(n.life<=0)continue;if(n.life-=t,n.life<=0){n.s.visible=!1;continue}let s=1-n.life/n.max;n.s.position.x+=(n.vx+Math.sin(e*2+n.max*3)*.04)*t,n.s.position.y+=n.vy*t*(1-s*.5),n.s.position.z+=n.vz*t,n.s.scale.setScalar(.06+n.grow*Math.pow(s,.6)),n.s.material.rotation+=n.spin*t,n.s.material.opacity=.34*Math.sin(Math.min(1,s*6)*Math.PI*.5)*(1-s)}}},Gl=class{constructor(t,e=160){this.n=e,this.R=xe(99),this.mesh=new on(new Le(1,1,1),new oe({roughness:.85,metalness:0}),e),this.mesh.instanceMatrix.setUsage(nh),this.mesh.frustumCulled=!1,this.mesh.castShadow=!0,t.add(this.mesh),this.p=Array.from({length:e},()=>({pos:new R,vel:new R,rot:new Ke,spin:new R,size:0,floor:0,alive:!1,rest:!1})),this.dummy=new ce,this.next=0;let n=new ne().makeScale(0,0,0);for(let s=0;s<e;s++)this.mesh.setMatrixAt(s,n),this.mesh.setColorAt(s,new vt(1,1,1))}emit(t,e,{spread:n=.25,speed:s=.9,up:r=1.4,floor:o=.8,palette:a=null,size:l=[.012,.03],dir:c=null}={}){let h=a||["#f2cf86","#e9bd68","#fbe9bd","#f3a3b8","#fff5ea"];for(let u=0;u<e;u++){let f=this.p[this.next++%this.n];f.alive=!0,f.rest=!1,f.pos.set(t.x+(this.R()-.5)*n,t.y+this.R()*.05,t.z+(this.R()-.5)*n),f.vel.set((this.R()-.5)*s,r*(.35+this.R()*.65),(this.R()-.5)*s),c&&f.vel.addScaledVector(c,s*(.4+this.R())),f.rot.set(this.R()*Dt,this.R()*Dt,this.R()*Dt),f.spin.set((this.R()-.5)*12,(this.R()-.5)*12,(this.R()-.5)*12),f.size=l[0]+this.R()*(l[1]-l[0]),f.floor=o+f.size*.4,this.mesh.setColorAt(this.p.indexOf(f),new vt(h[Math.floor(this.R()*h.length)]))}this.mesh.instanceColor&&(this.mesh.instanceColor.needsUpdate=!0)}update(t){let e=this.dummy,n=!1;this.p.forEach((s,r)=>{!s.alive||s.rest||(n=!0,s.vel.y-=5.2*t,s.pos.addScaledVector(s.vel,t),s.rot.x+=s.spin.x*t,s.rot.y+=s.spin.y*t,s.rot.z+=s.spin.z*t,s.pos.y<=s.floor&&(s.pos.y=s.floor,s.rest=!0),e.position.copy(s.pos),e.rotation.copy(s.rot),e.scale.set(s.size*1.3,s.size*.8,s.size),e.updateMatrix(),this.mesh.setMatrixAt(r,e.matrix))}),n&&(this.mesh.instanceMatrix.needsUpdate=!0)}clear(){let t=new ne().makeScale(0,0,0);this.p.forEach((e,n)=>{e.alive=!1,this.mesh.setMatrixAt(n,t)}),this.mesh.instanceMatrix.needsUpdate=!0}},dr=class{constructor({positions:t,sizes:e,colors:n,texture:s,twinkle:r=.4,speed:o=1.6,opacity:a=1,seed:l=1,blending:c=Qn}){let h=t.length,u=xe(l),f=new Float32Array(h*3),d=new Float32Array(h*3),m=new Float32Array(h),x=new Float32Array(h),g=new vt;t.forEach((E,y)=>{f.set(E,y*3),g.set(n[y%n.length]),d.set([g.r,g.g,g.b],y*3),m[y]=e[y%e.length]*(.8+u()*.4),x[y]=u()*Dt});let p=new ie;p.setAttribute("position",new Me(f,3)),p.setAttribute("aColor",new Me(d,3)),p.setAttribute("aSize",new Me(m,1)),p.setAttribute("aPhase",new Me(x,1)),this.mat=new Se({transparent:!0,depthWrite:!1,blending:c,uniforms:{uMap:{value:s},uTime:{value:0},uScale:{value:600},uTwinkle:{value:r},uSpeed:{value:o},uOpacity:{value:a}},vertexShader:`
        attribute float aSize; attribute float aPhase; attribute vec3 aColor;
        uniform float uTime, uScale, uTwinkle, uSpeed;
        varying vec3 vColor; varying float vTw;
        void main(){
          vec4 mv = modelViewMatrix * vec4(position, 1.0);
          vTw = 1.0 - uTwinkle + uTwinkle * (0.5 + 0.5*sin(uTime*uSpeed + aPhase));
          vColor = aColor;
          gl_PointSize = max(1.0, aSize * uScale / -mv.z);
          gl_Position = projectionMatrix * mv;
        }`,fragmentShader:`
        uniform sampler2D uMap; uniform float uOpacity;
        varying vec3 vColor; varying float vTw;
        void main(){
          vec4 t = texture2D(uMap, gl_PointCoord);
          gl_FragColor = vec4(vColor * vTw * uOpacity, t.a);
        }`}),this.points=new Xs(p,this.mat),this.points.frustumCulled=!1}update(t,e){this.mat.uniforms.uTime.value=t,this.mat.uniforms.uScale.value=e}},Wl=class{constructor(t,e,n=90){this.n=n,this.R=xe(123),this.pos=new Float32Array(n*3),this.vel=new Float32Array(n*3),this.life=new Float32Array(n),this.max=new Float32Array(n),this.size=new Float32Array(n),this.col=new Float32Array(n*3);let s=new ie;s.setAttribute("position",new Me(this.pos,3)),s.setAttribute("aSize",new Me(this.size,1)),s.setAttribute("aColor",new Me(this.col,3)),s.setAttribute("aLife",new Me(new Float32Array(n),1)),this.mat=new Se({transparent:!0,depthWrite:!1,blending:Qn,uniforms:{uMap:{value:e},uScale:{value:600}},vertexShader:`
        attribute float aSize; attribute float aLife; attribute vec3 aColor;
        uniform float uScale; varying vec3 vColor; varying float vLife;
        void main(){
          vec4 mv = modelViewMatrix * vec4(position, 1.0);
          vLife = aLife; vColor = aColor;
          gl_PointSize = max(0.0, aSize * uScale / -mv.z * (0.4 + 0.6*aLife));
          gl_Position = projectionMatrix * mv;
        }`,fragmentShader:`
        uniform sampler2D uMap; varying vec3 vColor; varying float vLife;
        void main(){
          vec4 t = texture2D(uMap, gl_PointCoord);
          gl_FragColor = vec4(vColor * vLife * 1.4, t.a * vLife);
        }`}),this.points=new Xs(s,this.mat),this.points.frustumCulled=!1,t.add(this.points),this.next=0}burst(t,e,n=.6,s=1.2){let r=["#ffe9a8","#ffc4d6","#ffffff","#ffd27a","#f8b4ff"],o=new vt;for(let a=0;a<e;a++){let l=this.next++%this.n,c=this.R()*Dt,h=Math.acos(2*this.R()-1),u=Math.cbrt(this.R())*n;this.pos[l*3]=t.x+Math.sin(h)*Math.cos(c)*u,this.pos[l*3+1]=t.y+Math.cos(h)*u*.7,this.pos[l*3+2]=t.z+Math.sin(h)*Math.sin(c)*u,this.vel[l*3]=Math.sin(h)*Math.cos(c)*s*.3,this.vel[l*3+1]=.2+this.R()*s*.5,this.vel[l*3+2]=Math.sin(h)*Math.sin(c)*s*.3,this.max[l]=this.life[l]=1.2+this.R()*1.6,this.size[l]=.1+this.R()*.2,o.set(r[Math.floor(this.R()*r.length)]),this.col.set([o.r,o.g,o.b],l*3)}this.points.geometry.attributes.aColor.needsUpdate=!0,this.points.geometry.attributes.aSize.needsUpdate=!0}update(t,e){this.mat.uniforms.uScale.value=e;let n=this.points.geometry.attributes.aLife;for(let s=0;s<this.n;s++){if(this.life[s]<=0){n.array[s]=0;continue}this.life[s]-=t,this.pos[s*3]+=this.vel[s*3]*t,this.pos[s*3+1]+=this.vel[s*3+1]*t,this.pos[s*3+2]+=this.vel[s*3+2]*t,this.vel[s*3+1]-=.12*t;let r=Math.max(0,this.life[s]/this.max[s]);n.array[s]=Math.sin(r*Math.PI)**.6*(.6+.4*Math.sin(this.life[s]*25+s))}n.needsUpdate=!0,this.points.geometry.attributes.position.needsUpdate=!0}},Xl=class{constructor(t,e,n=46){this.R=xe(7),this.puffs=[];for(let s=0;s<n;s++){let r=new Ki(new Ri({map:e,color:16777215,transparent:!0,depthWrite:!1,opacity:0}));r.visible=!1,r.renderOrder=7,t.add(r),this.puffs.push({s:r,life:0,max:1,vel:new R,grow:1})}this.next=0}emit(t,e,n=6){let s=this.puffs[this.next++%this.puffs.length];s.s.position.copy(t),s.max=s.life=.55+this.R()*.4,s.vel.copy(e).multiplyScalar(n*(.8+this.R()*.5)),s.vel.x+=(this.R()-.5)*.6,s.vel.y+=(this.R()-.5)*.6,s.vel.z+=(this.R()-.5)*.6,s.grow=.5+this.R()*.5,s.s.scale.setScalar(.15),s.s.material.rotation=this.R()*Dt,s.s.visible=!0}update(t){for(let e of this.puffs){if(e.life<=0)continue;if(e.life-=t,e.life<=0){e.s.visible=!1;continue}let n=1-e.life/e.max;e.s.position.addScaledVector(e.vel,t),e.s.scale.setScalar(.15+e.grow*n),e.s.material.opacity=.32*Math.sin(Math.min(1,n*4)*Math.PI*.5)*(1-n)}}};var Ve=1.45,ue=1.3,ps=.07,Oe=.7,xo=.04,gi=-6.25,Qe=ae(-135),ln=ae(-95),xi=(Qe+ln)/2,Ni=(ln-Qe)/2,Ge={cx:0,cz:.5,rx:3.6,rz:4.1},Fi={x:-1.45,z:2.55},_o={blade:1.65,bladeH:.34,handle:.95},yo={len:1.15,wid:.44,handle:.9};function lf(i,t=!1){let e=i[0].index!==null,n=new Set(Object.keys(i[0].attributes)),s=new Set(Object.keys(i[0].morphAttributes)),r={},o={},a=i[0].morphTargetsRelative,l=new ie,c=0;for(let h=0;h<i.length;++h){let u=i[h],f=0;if(e!==(u.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(let d in u.attributes){if(!n.has(d))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have compatible attributes; make sure "'+d+'" attribute exists among all geometries, or in none of them.'),null;r[d]===void 0&&(r[d]=[]),r[d].push(u.attributes[d]),f++}if(f!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of attributes."),null;if(a!==u.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(let d in u.morphAttributes){if(!s.has(d))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+".  .morphAttributes must be consistent throughout all geometries."),null;o[d]===void 0&&(o[d]=[]),o[d].push(u.morphAttributes[d])}if(t){let d;if(e)d=u.index.count;else if(u.attributes.position!==void 0)d=u.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". The geometry must have either an index or a position attribute"),null;l.addGroup(c,d,h),c+=d}}if(e){let h=0,u=[];for(let f=0;f<i.length;++f){let d=i[f].index;for(let m=0;m<d.count;++m)u.push(d.getX(m)+h);h+=i[f].attributes.position.count}l.setIndex(u)}for(let h in r){let u=af(r[h]);if(!u)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" attribute."),null;l.setAttribute(h,u)}for(let h in o){let u=o[h][0].length;if(u===0)break;l.morphAttributes=l.morphAttributes||{},l.morphAttributes[h]=[];for(let f=0;f<u;++f){let d=[];for(let x=0;x<o[h].length;++x)d.push(o[h][x][f]);let m=af(d);if(!m)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" morphAttribute."),null;l.morphAttributes[h].push(m)}}return l}function af(i){let t,e,n,s=-1,r=0;for(let c=0;c<i.length;++c){let h=i[c];if(t===void 0&&(t=h.array.constructor),t!==h.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(e===void 0&&(e=h.itemSize),e!==h.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=h.normalized),n!==h.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(s===-1&&(s=h.gpuType),s!==h.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=h.count*e}let o=new t(r),a=new Me(o,e,n),l=0;for(let c=0;c<i.length;++c){let h=i[c];if(h.isInterleavedBufferAttribute){let u=l/e;for(let f=0,d=h.count;f<d;f++)for(let m=0;m<e;m++){let x=h.getComponent(f,m);a.setComponent(f+u,m,x)}}else o.set(h.array,l);l+=h.count*e}return s!==void 0&&(a.gpuType=s),a}var Ye=(i,t,e)=>new R(i*Math.sin(e),t,i*Math.cos(e)),cf=i=>new R(Math.cos(i),0,-Math.sin(i));function hf(i,t,e){for(let n=0;n<i.length;n+=3){let s=i[n]*3,r=i[n+1]*3,o=i[n+2]*3,a=t[r]-t[s],l=t[r+1]-t[s+1],c=t[r+2]-t[s+2],h=t[o]-t[s],u=t[o+1]-t[s+1],f=t[o+2]-t[s+2],d=l*f-c*u,m=c*h-a*f,x=a*u-l*h,g=e[s]+e[r]+e[o],p=e[s+1]+e[r+1]+e[o+1],E=e[s+2]+e[r+2]+e[o+2];if(d*g+m*p+x*E<0){let y=i[n+1];i[n+1]=i[n+2],i[n+2]=y}}}function J_(i,t,e,n){let s=[{r:0,y:0},{r:i,y:0},{r:i,y:t-e}];for(let r=1;r<=n;r++){let o=r/n*(Math.PI/2);s.push({r:i-e+e*Math.cos(o),y:t-e+e*Math.sin(o)})}return s.push({r:0,y:t}),s}function ql({R:i,H:t,cr:e=.09,a0:n=0,a1:s=Dt,uvScale:r=3.2}){let o=s-n>=Dt-1e-4,a=Math.max(2,Math.ceil((s-n)/(Dt/128))),l=7,c=[],h=[],u=[],f=[],d=[],m=(E,y)=>{let _=c.length/3,A=0,T=E.map((L,M)=>(M&&(A+=Math.hypot(L.r-E[M-1].r,L.y-E[M-1].y)),A));for(let L=0;L<=a;L++){let M=n+(s-n)*L/a,S=Math.sin(M),D=Math.cos(M);E.forEach((B,I)=>{c.push(B.r*S,B.y,B.r*D),h.push(B.nr*S,B.ny,B.nr*D),y==="wall"?u.push(M*i/r,(T[I]+0)/r):u.push(B.r*S/r,B.r*D/r)})}let C=E.length;for(let L=0;L<a;L++)for(let M=0;M<C-1;M++){let S=_+L*C+M,D=_+(L+1)*C+M,B=_+(L+1)*C+M+1,I=_+L*C+M+1;f.push(S,D,B,S,B,I)}},x=[{r:i,y:0,nr:1,ny:0},{r:i,y:t-e,nr:1,ny:0}];for(let E=1;E<=l;E++){let y=E/l*(Math.PI/2);x.push({r:i-e+e*Math.cos(y),y:t-e+e*Math.sin(y),nr:Math.cos(y),ny:Math.sin(y)})}if(m(x,"wall"),m([{r:i-e,y:t,nr:0,ny:1},{r:0,y:t,nr:0,ny:1}],"flat"),m([{r:i,y:0,nr:0,ny:-1},{r:0,y:0,nr:0,ny:-1}],"flat"),!o){let E=J_(i,t,e,l);for(let[y,_]of[[n,-1],[s,1]]){let A=c.length/3,T=cf(y);E.forEach(C=>{let L=Ye(C.r,C.y,y);c.push(L.x,L.y,L.z),h.push(T.x*_,0,T.z*_),u.push(C.r/i,C.y/t)});for(let C=1;C<E.length-1;C++)d.push(A,A+C,A+C+1)}}let g=f.concat(d);hf(g,c,h);let p=new ie;return p.setAttribute("position",new Gt(c,3)),p.setAttribute("normal",new Gt(h,3)),p.setAttribute("uv",new Gt(u,2)),p.setIndex(g),p.addGroup(0,f.length,0),d.length&&p.addGroup(f.length,d.length,1),p.computeBoundingSphere(),p}function uf({R:i,H:t,cr:e=.09,phi:n,width:s=.034,r0:r=.08,lift:o=.022}){let l=[{r,y:t,nr:0,ny:1}];l.push({r:i-e,y:t,nr:0,ny:1});for(let y=1;y<=6;y++){let _=y/6*(Math.PI/2);l.push({r:i-e+e*Math.cos(_),y:t-e+e*Math.sin(_),nr:Math.cos(_),ny:Math.sin(_)})}let c=l.splice(2).reverse();l.push(...c);let h=8;for(let y=1;y<=h;y++)l.push({r:i,y:(t-e)*(1-y/h)+.015,nr:1,ny:0});let u=0,f=l.map((y,_)=>(_&&(u+=Math.hypot(y.r-l[_-1].r,y.y-l[_-1].y)),u)),d=cf(n),m=[],x=[],g=[],p=[];l.forEach((y,_)=>{let A=Ye(y.r,y.y,n),T=new R(y.nr*Math.sin(n),y.ny,y.nr*Math.cos(n));A.addScaledVector(T,o);for(let C of[-1,1]){let L=A.clone().addScaledVector(d,C*s/2);m.push(L.x,L.y,L.z),x.push(C),g.push(f[_]/u)}if(_<l.length-1){let C=_*2;p.push(C,C+2,C+3,C,C+3,C+1)}});let E=new ie;return E.setAttribute("position",new Gt(m,3)),E.setAttribute("aAcross",new Gt(x,1)),E.setAttribute("aAlong",new Gt(g,1)),E.setIndex(p),E}function df(i){return new Se({transparent:!0,depthWrite:!1,side:pe,polygonOffset:!0,polygonOffsetFactor:-2,polygonOffsetUnits:-2,uniforms:{uDepth:{value:0},uH:{value:i}},vertexShader:`
      attribute float aAcross; attribute float aAlong;
      varying float vAcross; varying float vAlong; varying float vY;
      void main(){
        vAcross = aAcross; vAlong = aAlong; vY = position.y;
        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
      }`,fragmentShader:`
      uniform float uDepth; uniform float uH;
      varying float vAcross; varying float vAlong; varying float vY;
      void main(){
        float cutY = uH * (1.0 - uDepth);
        if (vY < cutY - 0.004) discard;
        float edge = 1.0 - smoothstep(0.35, 1.0, abs(vAcross));
        float a = edge * smoothstep(0.0, 0.07, vAlong) * smoothstep(0.0, 0.05, uDepth);
        vec3 col = mix(vec3(0.30,0.10,0.14), vec3(0.075,0.02,0.035), edge);
        gl_FragColor = vec4(col, a * 0.94);
      }`})}function Ch({radius:i=.17,height:t=.19,flutes:e=11,coils:n=2.6,rows:s=40,cols:r=44}={}){let o=[],a=[];for(let c=0;c<=s;c++){let h=c/s,u=Math.pow(1-Math.pow(h,1.35),.7),f=1+.2*Math.sin(h*Dt*n-.6)*(1-h*.6),d=i*u*f,m=t*Math.pow(h,.82);for(let x=0;x<r;x++){let g=x/r*Dt,p=1+.13*(1-h*.7)*Math.cos(e*g+3.2*h);o.push(Math.cos(g)*d*p,m,Math.sin(g)*d*p)}}for(let c=0;c<s;c++)for(let h=0;h<r;h++){let u=c*r+h,f=c*r+(h+1)%r,d=(c+1)*r+(h+1)%r,m=(c+1)*r+h;a.push(u,m,d,u,d,f)}let l=new ie;return l.setAttribute("position",new Gt(o,3)),l.setIndex(a),l.computeVertexNormals(),l}function ff(i=.4){let t=[[0,0],[.07,.025],[.17,.11],[.27,.27],[.345,.47],[.37,.64],[.35,.82],[.28,.94],[.16,.99],[0,1]].map(([s,r])=>new nt(s*i*.78,r*i)),n=new ji(t).getPoints(40).map(s=>new nt(Math.max(0,s.x),s.y));return n[0].x=0,n[n.length-1].x=0,new Bn(n,40)}function vo(i=.2,t=.07){let e=new Fn;e.moveTo(0,0),e.quadraticCurveTo(i*.35,t,i,0),e.quadraticCurveTo(i*.35,-t,0,0);let n=new es(e,6),s=n.attributes.position;for(let r=0;r<s.count;r++){let o=s.getX(r);s.setZ(r,-((o/i)**2)*i*.5)}return n.computeVertexNormals(),n}function pf({R:i,H:t,seed:e=9,avoid:n=[],margin:s=.08}){let r=xe(e),o=[],a=34;for(let l=0;l<a;l++){let c=l/a*Dt+(r()-.5)*.12;n.some(u=>Math.abs(Math.atan2(Math.sin(c-u),Math.cos(c-u)))<s)||o.push({phi:c,A:t*(.08+r()*r()*.42),w:.028+r()*.02})}return o}var mf=(i,t)=>{let e=.03;for(let n of t){let s=Math.atan2(Math.sin(i-n.phi),Math.cos(i-n.phi))/n.w;e=Math.max(e,.03+n.A*Math.exp(-s*s))}return e};function Ph({R:i,H:t,cr:e,a0:n,a1:s,lumps:r,off:o=.013,topIn:a=.1}){let l=Math.max(8,Math.ceil((s-n)/.005)),c=6,h=10,u=[],f=[],d=[],m=0;for(let g=0;g<=l;g++){let p=n+(s-n)*g/l,E=Math.sin(p),y=Math.cos(p),_=mf(p,r),A=[];A.push([i-e-a,t+o*.5,0,1]),A.push([i-e,t+o,0,1]);for(let T=1;T<=c;T++){let C=T/c*(Math.PI/2);A.push([i-e+(e+o)*Math.sin(C),t-e+(e+o)*Math.cos(C),Math.sin(C),Math.cos(C)])}for(let T=1;T<=h;T++){let C=t-e-_*(T/h),L=T===h?.55:1;A.push([i+o*L,C,1,0])}A.push([i+.002,t-e-_-.006,.4,-.9]),m=A.length;for(let[T,C,L,M]of A)u.push(T*E,C,T*y),f.push(L*E,M,L*y)}for(let g=0;g<l;g++)for(let p=0;p<m-1;p++){let E=g*m+p,y=(g+1)*m+p;d.push(E,y,y+1,E,y+1,E+1)}hf(d,u,f);let x=new ie;return x.setAttribute("position",new Gt(u,3)),x.setIndex(d),x.computeVertexNormals(),x}function gf({R:i,H:t,cr:e,lumps:n,off:s=.013}){return n.map(r=>{let o=mf(r.phi,n),a=Math.min(.03,r.w*i*.55);return{phi:r.phi,r:a,pos:Ye(i+s*.4,t-e-o+a*.5,r.phi)}})}function K_(i,t,e,n){let o=[],a=[];for(let c=0;c<=7;c++){let h=c/7,u=i*Math.sin(Math.PI*(.12+.82*Math.pow(h,.75)));for(let f=0;f<=8;f++){let d=f/8*2-1,m=d*u,x=h*t,g=e*d*d*u-n*h*h*t+.04*t*Math.sin(d*3+h*5)*h;o.push(m,x,g)}}for(let c=0;c<7;c++)for(let h=0;h<8;h++){let u=c*9+h,f=u+8+1;a.push(u,f,u+1,u+1,f,f+1)}let l=new ie;return l.setAttribute("position",new Gt(o,3)),l.setIndex(a),l.computeVertexNormals(),l}function Yl(i=15,t=3){let e=xe(t),n=[],s=new ne,r=new tn;for(let l=0;l<i;l++){let c=l/(i-1),h=K_(.16+.24*c,.32+.16*c,.55-.25*c,.08+.4*c*c),u=l*2.39996+e()*.2,f=.02+.2*c,d=.05+1.05*Math.pow(c,1.3);r.setFromEuler(new Ke(-d,u+Math.PI,0,"YXZ")),s.compose(new R(Math.sin(u)*f,-.06*c,Math.cos(u)*f),r,new R(1,1,1)),h.applyMatrix4(s),n.push(h)}let o=new Ue(.07,10,8);o.scale(1,1.4,1),o.translate(0,.16,0),o.deleteAttribute("uv"),n.push(o);let a=lf(n.map(l=>(l.index,l)),!1);return a.computeVertexNormals(),a}function Zl(i,t,e,n,s=1){let r=i.computeFrenetFrames(t,!1),o=[],a=[],l=[],c=new R;for(let u=0;u<=t;u++){let f=u/t;i.getPointAt(f,c);let d=r.normals[u],m=r.binormals[u];for(let x=0;x<=e;x++){let g=x/e*Dt,p=n(f,g),E=-Math.cos(g),y=Math.sin(g);o.push(c.x+p*(E*d.x+y*m.x),c.y+p*(E*d.y+y*m.y),c.z+p*(E*d.z+y*m.z)),a.push(f*s,x/e)}}for(let u=0;u<t;u++)for(let f=0;f<e;f++){let d=u*(e+1)+f,m=d+e+1;l.push(d,m,d+1,m,m+1,d+1)}let h=new ie;return h.setAttribute("position",new Gt(o,3)),h.setAttribute("uv",new Gt(a,2)),h.setIndex(l),h.computeVertexNormals(),h}function xf(i,t,e=9,n=.28,s=.32,r=1){let o=new en(i,t,140,30),a=o.attributes.position,c=xe(r)()*6;for(let h=0;h<a.count;h++){let u=a.getX(h),f=a.getY(h),d=(f+t/2)/t,m=1-.5*Math.exp(-(((d-s)/.14)**2)),x=u/i,g=(x+.5)*m-.5*m+(1-m)*.32*Math.sign(-.5),p=n*Math.sin(x*e*Dt+c)*(.55+.45*m)+n*.3*Math.sin(x*e*2.3*Dt+c*2);a.setXYZ(h,g*i,f,p)}return o.computeVertexNormals(),o}var Ae={name:"Kaviya",pet:"girl",signedBy:"Dharani",kicker:"a little surprise for",wishInbox:"",lyrics:["Happy birthday to you","Happy birthday to you","Happy birthday dear Kaviya","Happy birthday to you"],letter:{title:"To my girl,",paragraphs:["Not every sister is given to us at birth. Some arrive later, quietly, and fill a place in our hearts we never knew was waiting for them. That is what you did, girl.","You have laughed with me until we could barely breathe, stood beside me on the hard days without ever being asked, and turned the most ordinary moments into memories I will keep forever.","Watching you grow into the kind, brave and beautiful person you are has been one of the quiet joys of my life. I am so proud of you, and so grateful that you are my sister.","Today, may your heart feel as loved as you make everyone around you feel. Make your wish, hold on to your dreams, and know that I will always be right here, cheering for you the loudest."],closing:"Happy Birthday girl. With all my love. \u{1F382}"}};var $l=(i,t=96)=>new Bn(i.map(([e,n])=>new nt(e,n)),t),Bi=-8.6;function _f(i,t){let{scene:e}=i,n=e.environment,s=new Zt;e.add(s),e.background=new vt("#140a09");let r=xe(4242),o=new he({color:"#f3ece3",roughness:.18,clearcoat:1,clearcoatRoughness:.08,sheen:.3,sheenColor:new vt("#ffe9ee")}),a=new oe({color:"#e2b45a",metalness:1,roughness:.24,envMap:n,envMapIntensity:1.3}),l=[],c=[],h=new so(16769740,3807762,.25);e.add(h);let u=new $s(16768181,0,0,.55,1,2);u.position.set(-3.2,11.5,6),u.target.position.set(.2,1,.3),u.castShadow=!0,u.shadow.mapSize.set(i.q.shadow,i.q.shadow),u.shadow.camera.near=6,u.shadow.camera.far=24,u.shadow.bias=-25e-5,u.shadow.normalBias=.02,e.add(u,u.target);let f=new $s(16763296,0,0,.95,1,1.4);f.position.set(0,9.5,3),f.target.position.set(0,3.5,Bi),e.add(f,f.target);let d=new Js(16758686,.3);d.position.set(5,6,-7),e.add(d);let m=new Js(16769224,.5);m.position.set(-3,7,12),e.add(m);let x=new rs(16752718,0,0,2);e.add(x);let g=new j(new en(60,40),new oe({map:t.wood.map,bumpMap:t.wood.bump,bumpScale:.8,roughness:.45,metalness:0}));g.rotation.x=-Math.PI/2,g.position.set(0,gi,-2),g.receiveShadow=!0,s.add(g);let p=new oe({map:t.wall.map,roughness:.85,metalness:.05,emissive:new vt("#ffffff"),emissiveMap:t.wall.map,emissiveIntensity:.12}),E=new j(new en(36,22),p);E.position.set(0,gi+11,Bi),s.add(E);let y=new j(new Le(36,.14,.1),a);y.position.set(0,.2,Bi+.05),s.add(y);let _=new j(new en(36,6.4),new oe({color:"#3a1119",roughness:.7}));_.position.set(0,gi+3.2,Bi+.02),s.add(_);{let O=new he({color:"#5e1426",roughness:.72,sheen:1,sheenColor:new vt("#ff8fa6"),sheenRoughness:.32,side:pe});for(let N of[-1,1]){let Z=new j(xf(5.2,21,10,.32,.36,N>0?3:7),O);Z.position.set(N*9.6,gi+10.5,Bi+.45),Z.scale.x=-N,s.add(Z);let Q=new j(new ye(.06,.06,5.6,12),a);Q.rotation.z=Math.PI/2,Q.position.set(N*9.6,gi+20.6,Bi+.55),s.add(Q)}}{let O=new An([[-7.6,-2.2,-7.5],[-7.2,2.6,-7.6],[-5.6,6.4,-7.8],[-2.8,8.4,-7.9],[0,8.95,-7.9],[2.8,8.4,-7.9],[5.6,6.4,-7.8],[7.2,2.6,-7.6],[7.6,-2.2,-7.5]].map(Ut=>new R(...Ut))),N=[],Z=[],Q=[{c:"#f2c7cf",metal:!1},{c:"#fbf1e6",metal:!1},{c:"#e7b7a6",metal:!1},{c:"#d98b9c",metal:!1},{c:"#e9cf9e",metal:!0},{c:"#e3a98f",metal:!0}],ht=120;for(let Ut=0;Ut<ht;Ut++){let rt=(Ut+r()*.8)/ht,H=O.getPointAt(Math.min(1,rt)),Y=.32+r()*r()*.5,at=new R((r()-.5)*1.2,(r()-.5)*1.2,(r()-.3)*.9),ut=Q[Math.floor(r()*Q.length)];(ut.metal?Z:N).push({pos:H.add(at),s:Y,c:ut.c})}let Mt=new Ue(1,28,20);Mt.scale(.92,1,.92);let _t=(Ut,rt)=>{let H=new on(Mt,rt,Ut.length),Y=new ce;return Ut.forEach((at,ut)=>{Y.position.copy(at.pos),Y.rotation.set(r()*.4,r()*Dt,r()*.4),Y.scale.setScalar(at.s),Y.updateMatrix(),H.setMatrixAt(ut,Y.matrix),H.setColorAt(ut,new vt(at.c))}),s.add(H),H};_t(N,new he({roughness:.35,clearcoat:.8,clearcoatRoughness:.2,sheen:.6,sheenColor:new vt("#ffffff")})),_t(Z,new oe({metalness:1,roughness:.18,envMap:n,envMapIntensity:1.6}))}let A=[];{let O=`HAPPY BIRTHDAY ${Ae.name.toUpperCase()}`,N=Math.min(12.6,O.length*.58),Z=-N/2,Q=6.55,ht=.85,Mt=[];for(let H=0;H<=40;H++){let Y=H/40;Mt.push(new R(Z+N*Y,Q-ht*(1-(2*Y-1)**2),Bi+.35))}let _t=new An(Mt);s.add(new j(new ns(_t,60,.012,5,!1),a));let Ut=["#f6ebdc","#efb6c4","#e9cf9e"],rt=new en(.5,.66);rt.translate(0,-.33,0),[...O].forEach((H,Y)=>{if(H===" ")return;let at=(Y+.5)/O.length,ut=_t.getPointAt(at),et=new j(rt,new oe({map:ef(H,Ut[Y%3],"#7a1d35"),transparent:!0,alphaTest:.5,side:pe,roughness:.6})),Tt=new Zt;Tt.position.copy(ut);let Pt=_t.getTangentAt(at);Tt.rotation.z=Math.atan2(Pt.y,Pt.x),Tt.add(et),s.add(Tt),A.push({m:et,ph:Y*.7})})}{let O=[];for(let ht=0;ht<23;ht++){let Mt=-7.2+ht*.65,_t=8.3-Math.abs(Mt)*.12,Ut=4.5+r()*2.5;for(let rt=0;rt<11;rt++)O.push([Mt+(r()-.5)*.08,_t-rt/10*Ut,Bi+.12])}let N=["#ffd9a0","#ffc77a","#ffe7c2","#ffcfa8"],Z=new dr({positions:O,sizes:[.08],colors:N,texture:t.glow,twinkle:.45,speed:1.3,opacity:2,seed:3}),Q=new dr({positions:O,sizes:[.55],colors:N,texture:t.glow,twinkle:.3,speed:.9,opacity:.28,seed:4});s.add(Z.points,Q.points),l.push(Z,Q)}{let O=new yn({color:new vt(2.2,1.35,.6)}),N=new yn({color:"#2a1612"}),Z=[[-5.2,7.2,-3.2],[-3.4,8,-1.8],[3.6,7.8,-2],[5.4,7,-3.4],[-6.2,8.4,.6],[6.3,8.2,.4]],Q=[];for(let[Mt,_t,Ut]of Z){let rt=new j(new Ue(.11,16,12),O);rt.scale.set(1,1.3,1),rt.position.set(Mt,_t,Ut);let H=new j(new ye(.008,.008,6,4),N);H.position.set(Mt,_t+3.1,Ut);let Y=new j(new ye(.05,.06,.1,10),a);Y.position.set(Mt,_t+.16,Ut),s.add(rt,H,Y),Q.push([Mt,_t,Ut])}let ht=new dr({positions:Q,sizes:[1.4],colors:["#ffcf8a"],texture:t.glow,twinkle:.08,speed:.6,opacity:.5,seed:8});s.add(ht.points),l.push(ht)}let T=new he({map:t.cloth.map,bumpMap:t.cloth.bump,bumpScale:.8,roughness:.6,metalness:0,sheen:.6,sheenColor:new vt("#fff4e2"),sheenRoughness:.5}),C=new j(new Jn(1,96),T);C.rotation.x=-Math.PI/2,C.scale.set(Ge.rx,Ge.rz,1),C.position.set(Ge.cx,0,Ge.cz),C.receiveShadow=!0,s.add(C);{let O=-gi,N=new ye(1,1,O,160,14,!0),Z=N.attributes.position;for(let _t=0;_t<Z.count;_t++){let Ut=Math.atan2(Z.getZ(_t),Z.getX(_t)),rt=(O/2-Z.getY(_t))/O,H=1+.035*rt*Math.sin(Ut*36)+.02*rt*Math.sin(Ut*17+1);Z.setX(_t,Z.getX(_t)*H*(1+rt*.05)),Z.setZ(_t,Z.getZ(_t)*H*(1+rt*.05))}N.computeVertexNormals();let Q=new j(N,T.clone());Q.material.side=pe,Q.scale.set(Ge.rx,1,Ge.rz),Q.position.set(Ge.cx,-O/2,Ge.cz),Q.receiveShadow=!0,s.add(Q);let ht=new j(new Ne(1,.012,6,160),a);ht.rotation.x=Math.PI/2,ht.scale.set(Ge.rx+.01,Ge.rz+.01,1),ht.position.set(Ge.cx,-.01,Ge.cz),s.add(ht);let Mt=new j(new en(Ge.rx*1.98,1.25),new he({color:"#e8aebb",roughness:.32,sheen:1,sheenColor:new vt("#ffe1e8"),sheenRoughness:.25}));Mt.rotation.x=-Math.PI/2,Mt.position.set(0,.004,-.6),Mt.receiveShadow=!0,s.add(Mt)}let L=[[0,0],[.98,0],[1.04,.02],[1.05,.05],[.98,.085],[.75,.13],[.48,.19],[.27,.26],[.18,.33],[.15,.39],[.21,.43],[.16,.47],[.15,.53],[.23,.58],[.45,.61],[1,.63],[1.8,.65],[2.04,.67],[2.1,Oe-.01],[2.08,Oe+.02],[2.02,Oe+.012],[1.95,Oe],[0,Oe]],M=new j($l(L),o);M.castShadow=!0,M.receiveShadow=!0,s.add(M);for(let[O,N,Z]of[[2.07,Oe+.016,.014],[1.03,.04,.012],[.18,.43,.014]]){let Q=new j(new Ne(O,Z,10,140),a);Q.rotation.x=Math.PI/2,Q.position.y=N,s.add(Q)}let S=new Zt;S.position.set(Fi.x,0,Fi.z);{let O=new j($l([[0,0],[1.25,0],[1.3,.02],[1.27,.03],[0,.02]],96),a);O.receiveShadow=!0;let N=new j($l([[0,.02],[.75,.02],[.95,.035],[1.06,.07],[1.1,.09],[1.08,.1],[1,.08],[.85,xo+.004],[0,xo]],96),o);N.castShadow=!0,N.receiveShadow=!0;let Z=new j(new Ne(1.095,.01,8,120),a);Z.rotation.x=Math.PI/2,Z.position.y=.094,S.add(O,N,Z);let Q=new Zt,ht=new j(new Le(.06,.02,.9),a);ht.position.z=.25,Q.add(ht);for(let Mt=-1.5;Mt<=1.5;Mt++){let _t=new j(new Le(.015,.015,.25),a);_t.position.set(Mt*.025,0,-.32),Q.add(_t)}Q.position.set(1.45,.015,.1),Q.rotation.y=.15,S.add(Q)}s.add(S);{let O=Yl(15,11),N=new he({roughness:.55,sheen:1,sheenColor:new vt("#ffe3e8"),sheenRoughness:.5,side:pe}),Z=new oe({color:"#4c7a46",roughness:.55,side:pe}),Q=[[0,0],[.2,0],[.24,.05],[.18,.2],[.15,.4],[.2,.58],[.27,.66],[.28,.7],[.25,.7]],ht=[],Mt=[],_t=new ce,Ut=["#f2b3c2","#fbeee6","#d9768f","#f7d5dc","#e9cf9e"];for(let[ut,et]of[[-2.15,-2.05],[2.25,-2.15]]){let Tt=new j($l(Q,40),a);Tt.position.set(ut,0,et),Tt.castShadow=!0,s.add(Tt);for(let Pt=0;Pt<13;Pt++){let P=r()*Dt,tt=Math.acos(1-r()*.9),it=.48;_t.position.set(ut+Math.sin(tt)*Math.cos(P)*it,.78+Math.cos(tt)*it*.75,et+Math.sin(tt)*Math.sin(P)*it),_t.lookAt(ut+Math.sin(tt)*Math.cos(P)*3,.78+Math.cos(tt)*3,et+Math.sin(tt)*Math.sin(P)*3),_t.rotateX(Math.PI/2),_t.scale.setScalar(.3+r()*.12),_t.updateMatrix(),ht.push({m:_t.matrix.clone(),c:Ut[Math.floor(r()*Ut.length)]})}for(let Pt=0;Pt<10;Pt++){let P=Pt/10*Dt;_t.position.set(ut+Math.cos(P)*.42,.72+r()*.12,et+Math.sin(P)*.42),_t.rotation.set(-.2,-P,-.6),_t.scale.setScalar(1.6),_t.updateMatrix(),Mt.push(_t.matrix.clone())}}let rt=new on(O,N,ht.length);ht.forEach((ut,et)=>{rt.setMatrixAt(et,ut.m),rt.setColorAt(et,new vt(ut.c))}),rt.castShadow=!0,s.add(rt);let H=new on(vo(.2,.07),Z,Mt.length);Mt.forEach((ut,et)=>H.setMatrixAt(et,ut)),s.add(H);let Y=new Jn(.07,8);Y.scale(1,1.4,1);let at=new on(Y,new he({roughness:.5,sheen:1,sheenColor:new vt("#ffe0e8"),side:pe}),46);for(let ut=0;ut<46;ut++){let et,Tt;do{let Pt=r()*Dt,P=2.3+r()*1.1;et=Math.cos(Pt)*P*(Ge.rx/3.6),Tt=Ge.cz+Math.sin(Pt)*P*(Ge.rz/3.6)*.95}while((et-Fi.x)**2+(Tt-Fi.z)**2<1.7||(et/Ge.rx)**2+((Tt-Ge.cz)/Ge.rz)**2>.9);_t.position.set(et,.008,Tt),_t.rotation.set(-Math.PI/2+(r()-.5)*.3,0,r()*Dt),_t.scale.setScalar(.8+r()*.5),_t.updateMatrix(),at.setMatrixAt(ut,_t.matrix),at.setColorAt(ut,new vt(Ut[Math.floor(r()*3)]))}s.add(at)}{let O=new he({color:"#ffd9a8",transparent:!0,opacity:.35,roughness:.08,clearcoat:1,side:pe,depthWrite:!1}),N=new oe({color:"#fff4e4",roughness:.5,emissive:new vt("#ff9a3c"),emissiveIntensity:.25});[[-3,.2],[-2.6,1.6],[3,.1],[2.75,1.7],[.9,3.2],[-.4,-2.9],[1.2,-2.8]].forEach(([Q,ht],Mt)=>{let _t=new Zt,Ut=new j(new ye(.13,.11,.22,20,1,!0),O);Ut.position.y=.11;let rt=new j(new ye(.09,.09,.08,16),N);rt.position.y=.04;let H=new ur(t.glow,3+Mt*.7);H.group.position.y=.09,H.group.scale.setScalar(.6),_t.add(Ut,rt,H.group),_t.position.set(Q,0,ht),s.add(_t),c.push(H)})}let D=(O,N,Z,Q,ht)=>{let Mt=new Zt,_t=new j(new Le(O,N,Z),new he({color:Q,roughness:.45,sheen:.5,sheenColor:new vt("#ffffff")}));_t.position.y=N/2,_t.castShadow=_t.receiveShadow=!0;let Ut=new he({color:ht,roughness:.28,sheen:1,sheenColor:new vt("#ffffff"),metalness:.2}),rt=new j(new Le(O*1.02,N*1.02,Z*.14),Ut),H=new j(new Le(O*.14,N*1.02,Z*1.02),Ut);rt.position.y=H.position.y=N/2,Mt.add(_t,rt,H);for(let Y of[-1,1]){let at=new j(new Ne(O*.16,O*.04,10,24),Ut);at.position.set(Y*O*.14,N+O*.09,0),at.rotation.set(0,0,Y*.9),at.scale.set(1,1.2,1),Mt.add(at)}return Mt},B=D(.85,.7,.85,"#fbf1e6","#c9963e");B.position.set(2.75,0,-.75),B.rotation.y=.5;let I=D(.62,.5,.62,"#efb6c4","#fbf1e6");I.position.set(2.45,0,.45),I.rotation.y=-.3,s.add(B,I);let U={room:0,candle:0};function k(O){let N=U.room;u.intensity=230*N,f.intensity=te(18,90,N),h.intensity=te(.22,.42,N),d.intensity=te(.3,.7,N),m.intensity=te(.45,.8,N),e.environmentIntensity=te(.18,.38,N),p.emissiveIntensity=te(.1,.05,N),i.bloom.strength=te(.55,.32,N);let Z=1+.06*Math.sin(O*13)+.05*Math.sin(O*29.3)+.03*Math.sin(O*7.1);x.intensity=12*U.candle*Z}k(0);function z(O){k(O);for(let N of l)N.update(O,i.viewportScale());for(let N of c)N.update(O);for(let N of A)N.m.rotation.x=Math.sin(O*1.3+N.ph)*.08}return{stage:s,mood:U,spot:u,hemi:h,rim:d,candle:x,fill:m,porcelain:o,gold:a,update:z,plateGroup:S}}var yf=i=>(i%Dt+Dt)%Dt,Ih=i=>yf(i-Qe)<Ni*2,Jl=(i,t=ae(5))=>{let e=yf(i-Qe);return e<t||e>Dt-t||Math.abs(e-Ni*2)<t};function Q_(i,t){return i.onBeforeCompile=e=>{e.uniforms.uH={value:ue},e.uniforms.uBlush={value:new vt(t)},e.vertexShader=e.vertexShader.replace("#include <common>",`#include <common>
varying float vObjY;`).replace("#include <begin_vertex>",`#include <begin_vertex>
vObjY = position.y;`),e.fragmentShader=e.fragmentShader.replace("#include <common>",`#include <common>
varying float vObjY;
uniform float uH;
uniform vec3 uBlush;`).replace("#include <map_fragment>",`#include <map_fragment>
{ float t = 1.0 - smoothstep(0.0, uH * 0.78, vObjY); diffuseColor.rgb = mix(diffuseColor.rgb, uBlush * (0.85 + 0.15 * diffuseColor.r), t * t * 0.9); }`)},i.customProgramCacheKey=()=>"ombre",i}function Lh({scene:i,T:t,engine:e,stage:n}){let s=e.renderer.capabilities.getMaxAnisotropy(),r=xe(2024),o=new Zt;o.position.y=Oe,i.add(o);let a=new Zt;o.add(a);let l=2*Ve*Math.sin(Ni)/(3*Ni),c=Ye(l,0,xi),h=new Zt;h.position.set(c.x,Oe,c.z),i.add(h);let u=new Zt;u.position.set(-c.x,0,-c.z),h.add(u);let f=Q_(new he({map:t.frosting.map,bumpMap:t.frosting.bump,bumpScale:1.1,roughness:.5,metalness:0,sheen:.7,sheenColor:new vt("#fff2e6"),sheenRoughness:.5}),"#eaa6b5"),d=new he({map:t.section.map,bumpMap:t.section.bump,bumpScale:1.8,roughness:.86,metalness:0,sheen:.4,sheenColor:new vt("#ffe8b0"),sheenRoughness:.8}),m=new he({color:"#fff8ef",roughness:.42,sheen:1,sheenColor:new vt("#ffe9dc"),sheenRoughness:.4}),x=new he({color:"#f6c9d1",roughness:.42,sheen:1,sheenColor:new vt("#ffd6df"),sheenRoughness:.4}),g=new he({map:t.berry.map,bumpMap:t.berry.bump,bumpScale:1.4,roughness:.3,clearcoat:.8,clearcoatRoughness:.22}),p=new oe({color:"#3f8a4a",roughness:.5,side:pe}),E=new he({color:"#fffaf4",roughness:.18,metalness:.1,clearcoat:1,iridescence:.7,iridescenceIOR:1.4}),y=new oe({color:"#e2b45a",metalness:1,roughness:.2,side:pe,envMap:i.environment,envMapIntensity:1.6}),_=new he({color:"#d9a94e",metalness:1,roughness:.16,clearcoat:1,clearcoatRoughness:.08,envMap:i.environment,envMapIntensity:1.8}),A=new j(ql({R:Ve,H:ue,cr:ps,a0:ln,a1:Qe+Dt,uvScale:2.4}),[f,d]);A.castShadow=A.receiveShadow=!0,a.add(A);let T=new j(ql({R:Ve,H:ue,cr:ps,a0:Qe,a1:ln,uvScale:2.4}),[f,d]);T.castShadow=T.receiveShadow=!0,u.add(T);let C=H=>Ih(H)?u:a;{let H=pf({R:Ve,H:ue,seed:9,avoid:[Qe,ln],margin:ae(5)}),Y=new j(Ph({R:Ve,H:ue,cr:ps,a0:ln,a1:Qe+Dt,lumps:H}),_),at=new j(Ph({R:Ve,H:ue,cr:ps,a0:Qe,a1:ln,lumps:H}),_);Y.castShadow=at.castShadow=!0,a.add(Y),u.add(at);let ut=new Ue(1,14,10);for(let et of gf({R:Ve,H:ue,cr:ps,lumps:H})){let Tt=new j(ut,_);Tt.scale.set(et.r,et.r*1.25,et.r*.8),Tt.position.copy(et.pos),Tt.rotation.y=et.phi,C(et.phi).add(Tt)}}let L=Ch({radius:.12,height:.15}),M=Ch({radius:.08,height:.1,flutes:9,coils:2.2});for(let H=0;H<18;H++){let Y=Qe+ae(10)+ae(20)*H,at=new j(L,H%2?m:x);at.position.copy(Ye(Ve-.15,ue-.01,Y)),at.rotation.y=r()*Dt,at.castShadow=!0,C(Y).add(at)}for(let H=0;H<9;H++){let Y=xi+ae(20)+ae(40)*H;if(Jl(Y,ae(9)))continue;let at=new j(M,m);at.position.copy(Ye(.9,ue-.01,Y)),at.rotation.y=r()*Dt,C(Y).add(at)}let S=ff(.3),D=vo(.11,.04),B=-Math.PI/2+.35,I=new R(-Math.sin(B),Math.cos(B),0);for(let H=0;H<9;H++){let Y=xi+ae(40)*H;if(Math.abs(Math.atan2(Math.sin(Y-Math.PI),Math.cos(Y-Math.PI)))<ae(50))continue;let ut=new Zt,et=new j(S,g);et.castShadow=!0,et.rotation.z=B,et.position.copy(I).multiplyScalar(-.15),ut.add(et);let Tt=new Zt;Tt.rotation.z=B,Tt.position.copy(I).multiplyScalar(.148);for(let Pt=0;Pt<7;Pt++){let P=new Zt,tt=new j(D,p);tt.rotation.x=-Math.PI/2,P.rotation.y=Pt/7*Dt+H,P.rotation.z=.12,P.add(tt),Tt.add(P)}ut.add(Tt),ut.position.copy(Ye(.9,ue+.07,Y)),ut.rotation.y=Y-Math.PI/2,C(Y).add(ut)}{let H=Yl(15,5),Y=new he({roughness:.55,sheen:1,sheenColor:new vt("#ffe0e6"),sheenRoughness:.5,side:pe}),at=[{r:.55,phi:ae(150),s:.42,c:"#f2b3c2"},{r:.7,phi:ae(178),s:.48,c:"#fbeee6"},{r:.56,phi:ae(206),s:.4,c:"#d9768f"},{r:.9,phi:ae(160),s:.3,c:"#fbeee6"},{r:.92,phi:ae(197),s:.32,c:"#f2b3c2"},{r:.36,phi:ae(178),s:.3,c:"#f7d5dc"}],ut=new on(H,Y,at.length),et=new ce;at.forEach((Pt,P)=>{et.position.copy(Ye(Pt.r,ue+.01,Pt.phi)),et.rotation.set((r()-.5)*.4,r()*Dt,(r()-.5)*.4),et.scale.setScalar(Pt.s),et.updateMatrix(),ut.setMatrixAt(P,et.matrix),ut.setColorAt(P,new vt(Pt.c))}),ut.castShadow=!0,a.add(ut);let Tt=new on(vo(.2,.07),new oe({color:"#4d7d4a",roughness:.55,side:pe}),8);for(let Pt=0;Pt<8;Pt++){let P=ae(140)+Pt*ae(10);et.position.copy(Ye(.62+Pt%2*.3,ue+.03,P)),et.rotation.set(-.3,P+(r()-.5),0),et.scale.setScalar(1),et.updateMatrix(),Tt.setMatrixAt(Pt,et.matrix)}a.add(Tt)}let U=(H,Y,at,ut=!1)=>{for(let[et,Tt]of[[a,at.filter(Pt=>!Ih(Pt.phi))],[u,at.filter(Pt=>Ih(Pt.phi))]]){if(!Tt.length)continue;let Pt=new on(H,Y,Tt.length),P=new ce;Tt.forEach((tt,it)=>{P.position.copy(tt.pos),P.quaternion.copy(tt.quat||new tn),P.scale.setScalar(tt.s||1),P.updateMatrix(),Pt.setMatrixAt(it,P.matrix),tt.color&&Pt.setColorAt(it,new vt(tt.color))}),Pt.castShadow=ut,et.add(Pt)}};{let H=[];for(let et=0;et<84;et++){let Tt=Qe+Dt*(et+.5)/84;Jl(Tt,ae(2.6))||H.push({phi:Tt,pos:Ye(Ve+.004,.055,Tt),s:1})}U(new Ue(.036,14,10),E,H,!0);let at=[];for(let et=0;et<60;et++){let Tt=.2+Math.sqrt(r())*(Ve-.55),Pt=r()*Dt;Jl(Pt,ae(6))||at.push({phi:Pt,pos:Ye(Tt,ue+.012,Pt),s:.6+r()*.6,color:r()>.55?"#e8c27a":"#fff6ee"})}U(new Ue(.022,10,8),E,at);let ut=[];for(let et=0;et<40;et++){let Tt=.25+Math.sqrt(r())*(Ve-.6),Pt=r()*Dt;if(Jl(Pt,ae(6)))continue;let P=new tn().setFromEuler(new Ke(-Math.PI/2+(r()-.5)*.7,r()*Dt,(r()-.5)*.7));ut.push({phi:Pt,pos:Ye(Tt,ue+.016,Pt),quat:P,s:.5+r()*.7})}U(new Jn(.026,5),y,ut)}let k=new Zt,z=new oe({map:t.topper,transparent:!0,alphaTest:.45,metalness:.6,roughness:.32,side:pe,emissive:new vt("#ffcf6a"),emissiveMap:t.topper,emissiveIntensity:.35}),O=new j(new en(1.45,.79),z);O.position.y=.78,O.castShadow=!0;let N=new j(new ye(.012,.012,.8,8),y);N.position.y=.24,k.add(O,N),k.position.copy(Ye(.62,ue-.02,ae(178))),o.add(k);let Z=[],Q=new Zt;o.add(Q);let ht=Xd(null,s);for(let H=0;H<7;H++){let Y=ae(-118)+ae(36)*H,at=H%2?.42:.62,ut=.46+H%3*.04,et=new Zt,Tt=new j(new ye(.028,.03,ut,20),new he({map:ht,roughness:.38,sheen:.5,sheenColor:new vt("#fff2dc"),transparent:!0}));Tt.position.y=ut/2,Tt.castShadow=!0;let Pt=new j(new ye(.024,.028,.01,16),new oe({color:"#fff3e0",roughness:.4,transparent:!0}));Pt.position.y=ut;let P=new j(new ye(.004,.005,.06,6),new oe({color:"#1b1210",roughness:.8}));P.position.y=ut+.03;let tt=new ur(t.glow,H*.37+.11);tt.group.position.y=ut+.06,tt.group.scale.setScalar(.8),et.add(Tt,Pt,P,tt.group),et.position.copy(Ye(at,ue-.01,Y)),Q.add(et),Z.push({g:et,flame:tt,h:ut,mats:[Tt.material,Pt.material],base:et.position.clone()})}let Mt=new R(0,Oe+ue+.8,.2);n.candle.position.copy(Mt);let _t=[ln,Qe].map(H=>{let Y=df(ue),at=new j(uf({R:Ve,H:ue,cr:ps,phi:H}),Y);return at.renderOrder=3,o.add(at),{mesh:at,mat:Y,phi:H}}),Ut=new oe({map:t.smear,roughness:.55,transparent:!0,opacity:0}),rt=new j(ql({R:Ve-.05,H:.01,cr:.003,a0:Qe+ae(2),a1:ln-ae(2),uvScale:1.2}),[Ut,Ut]);return rt.visible=!1,rt.receiveShadow=!0,o.add(rt),{root:o,body:a,rig:h,slice:u,candles:Z,slits:_t,topper:k,smear:rt,H:ue,R:Ve,C:c,candleLightPos:Mt,setCandlesVisible(H){Q.visible=H},update(H){for(let Y of Z)Y.flame.update(H)},showSmear(){rt.visible=!0,Ut.opacity=1},hideSlits(){_t.forEach(H=>H.mesh.visible=!1)}}}var bf=new R(0,1,0),Bh=new R(0,0,1),We=new R,Wn=new R,ms=new R,j_=new R,Dh=new tn,vf=new tn,Kl=.46,Mf=1.88,fr={x:.46,y:1.48},ze=(i,t={})=>new he({color:i,roughness:.6,metalness:0,...t}),Uh=new Map;function ty(i=20){return Uh.has(i)||Uh.set(i,new Ue(1,i,Math.max(8,Math.round(i*.75)))),Uh.get(i)}function He(i,t,e,n,s=20){let r=new j(ty(s),i);return r.scale.set(t,e,n),r}var Sf=(i,t=48)=>new Bn(i.map(([e,n])=>new nt(e,n)),t);function Nh(i,t){let e=new ye(i,t,1,20,1,!0);return e.translate(0,.5,0),e}function Fh(i,t,e){We.subVectors(e,t);let n=We.length()||1e-4;i.position.copy(t),i.quaternion.setFromUnitVectors(bf,We.multiplyScalar(1/n)),i.scale.set(1,n,1)}function ey(i,t,e,n,s,r){We.subVectors(t,i);let o=We.length(),a=e+n-.01;o>a&&(t.copy(i).addScaledVector(We,a/o),o=a),o=Math.max(o,.3),Wn.copy(We).normalize();let l=(e*e-n*n+o*o)/(2*o),c=Math.sqrt(Math.max(e*e-l*l,0));ms.copy(s).addScaledVector(Wn,-s.dot(Wn)),ms.lengthSq()<1e-6&&ms.set(0,-1,0),ms.normalize(),r.copy(i).addScaledVector(Wn,l).addScaledVector(ms,c)}function ny(i,t,e,n){let s=Math.exp(-e*n);We.subVectors(i.x,t),Wn.copy(i.v).addScaledVector(We,e).multiplyScalar(n),i.v.addScaledVector(Wn,-e).multiplyScalar(s),i.x.copy(t).add(We.add(Wn).multiplyScalar(s))}function Vn(i,t,e,n){let s=Math.exp(-e*n),r=i.x-t,o=(i.v+e*r)*n;return i.v=(i.v-e*o)*s,i.x=t+(r+o)*s,i.x}var Gn=(i=0)=>({x:i,v:0});function Tf(i,t,e=!0){let n=i.y/t;if(i.x*=.9,i.y*=1.05,i.z*=.95,e){let s=ti(.05,-.95,n);if(i.x*=1-.2*s,i.z*=1-.06*s,i.z>0&&(i.z+=.028*t*ti(-.55,-.95,n)),i.z>0&&(i.x*=1+.035*Math.exp(-(((n+.12)/.22)**2))),i.z>.2){let r=.05*ti(.07,-.075,i.y)*ti(-.13,-.088,i.y),o=.02+.02*ti(.02,-.085,i.y);i.z+=r*Math.exp(-((i.x/o)**2));for(let a of[-1,1])i.z+=.012*Math.exp(-(((i.x-a*.028)/.016)**2)-((i.y+.093)/.014)**2);for(let a of[-1,1])i.z-=.016*Math.exp(-(((i.x-a*.152)/.075)**2)-((i.y-.04)/.055)**2);i.z+=.012*Math.exp(-((i.x/.06)**2)-((i.y+.19)/.03)**2)}}return i}function iy(){let i=new Ue(Kl,150,110),t=i.attributes.position,e=new R;for(let n=0;n<t.count;n++)e.fromBufferAttribute(t,n),Tf(e,Kl),t.setXYZ(n,e.x,e.y,e.z);return i.computeVertexNormals(),i}function Ef({scale:i=1.065,thetaLen:t=1.8,window:e=.64,hairline:n=.48,drop:s=0,part:r=!0}){let o=Kl*i,a=new Ue(o,110,64,0,Dt,0,t),l=a.attributes.position,c=new R,h=new R;for(let u=0;u<l.count;u++){c.fromBufferAttribute(l,u),h.copy(c).normalize();let f=n-.4*h.x*h.x+(r?.05*Math.exp(-((h.x/.08)**2)):0),d=ti(.1,-.06,Math.abs(h.x)-e)*ti(-.1,.08,f-h.y)*ti(-.3,.12,h.z);if(c.multiplyScalar(te(1,.55,d)),c.multiplyScalar(1+.025*ti(.3,1,h.y)),Tf(c,o,!0),s>0&&h.y<-.05){let m=(-.05-h.y)*(1-d);c.y-=s*m,c.x*=1+.18*m}l.setXYZ(u,c.x,c.y,c.z)}return a.computeVertexNormals(),a}function sy(i,t=1.07){let e=Kl*t,n=Fe(i/(e*1.05),-.99,.99),s=Math.sqrt(1-n*n);return{x:e*.9*s,z:e*.95*s}}function ry(i,t){let e=new Zt,n=He(i,.068,.095,.034,16);n.position.y=.08;let s=He(i,.06,.075,.03,16);s.position.set(0,.165,.012),s.rotation.x=.3;let r=new j(new qr(.02,.055,4,8),i);return r.position.set(t*.058,.07,.03),r.rotation.set(.35,0,-t*.65),e.add(n,s,r),e.traverse(o=>o.isMesh&&(o.castShadow=!0)),e}function oy(i,t,e,n){i.position.copy(t),Dh.setFromUnitVectors(bf,e),i.quaternion.copy(Dh);let s=We.copy(Bh).applyQuaternion(Dh),r=Wn.copy(n).addScaledVector(e,-n.dot(e));if(r.lengthSq()<1e-6)return;r.normalize();let o=Math.atan2(ms.crossVectors(s,r).dot(e),s.dot(r));vf.setFromAxisAngle(e,o),i.quaternion.premultiply(vf)}var Oi={kaviya:{kind:"girl",scale:1.3,y:.5,skin:"#f0c9b0",lip:"#cf7b84",blush:"#f19ca6",hair:"#2a1813",top:"#efb6c4",skirt:"#f2bfcb",sleeve:"elbow",hairStyle:"braid",tiara:!0,bindi:!0,jewels:!0,bangles:!0},mom:{kind:"mom",scale:1.3,y:.5,skin:"#f0ccb4",lip:"#b75a66",blush:"#ee9aa0",hair:"#24140f",top:"#8e1e3c",skirt:"#8e1e3c",sleeve:"short",hairStyle:"bun",bindi:!0,jewels:!0,bangles:!0,saree:!0},dad:{kind:"dad",scale:1.4,y:.52,skin:"#ecc4aa",lip:"#b98078",blush:"#e8a08c",hair:"#26170f",top:"#2f3d5e",pants:"#2a2422",sleeve:"long",hairStyle:"short",glasses:!0,mustache:!0,stole:"#8e1e3c"},sister:{kind:"sis",scale:1.18,y:.46,skin:"#f7d9c6",lip:"#d8838b",blush:"#f3a2aa",hair:"#2d1a14",top:"#a98bc9",pants:"#8d70b0",sleeve:"elbow",hairStyle:"long",jewels:!0,bangles:!0}},Mo={pos:[-3.95,Oi.kaviya.y,-1.2],yaw:er.degToRad(62)},pr=class{constructor(t,e,n=""){this.spec=t,this.T=e,this.name=n,this.root=new Zt,this.root.scale.setScalar(t.scale),this.body=new Zt,this.root.add(this.body),this.rng=xe(n.length*977+13),this.female=t.kind!=="dad",this.mode="idle",this.voice=0,this.eyesClosed=0,this.smileAmt=.7,this.mouthOpenTarget=0,this.pucker=0,this.lookTarget=null,this.grip=null,this.gripHand="R",this.gripW=0,this.leanTarget=0,this.beatHz=84/60,this.phase=this.rng()*Dt,this.t=0,this.lean=Gn(),this.bounce=Gn(),this.headYaw=Gn(),this.headPitch=Gn(),this.headRoll=Gn(),this.eyeYaw=Gn(),this.eyePitch=Gn(),this.lid=Gn(),this.open=Gn(),this.smile=Gn(.7),this.puck=Gn(),this.blinkT=1+this.rng()*3,this.blink=0,this.saccade={t:0,x:0,y:0},this.walkSpeed=0,this.walkPhase=0,this.lastPos=new R,this.firstFrame=!0,this.hands={L:{x:new R(.15,.4,.45),v:new R},R:{x:new R(-.15,.4,.45),v:new R}},this.elbows={L:new R,R:new R},this.armLen={a:1.15,b:1},this.build(t)}build(t){let e=this.T,n=ze(t.skin,{roughness:.5,sheen:.6,sheenColor:new vt("#ffc4b0"),sheenRoughness:.55,clearcoat:.05}),s=ze(t.hair,{roughness:.38,sheen:1,sheenColor:new vt("#8a6050"),sheenRoughness:.35,bumpMap:e.hair.bump,bumpScale:1.2}),r=ze(t.top,{roughness:.48,sheen:1,sheenColor:new vt(t.top).lerp(new vt("#ffffff"),.5),sheenRoughness:.45}),o=new oe({color:"#e2b45a",metalness:1,roughness:.24}),a=ze(t.lip,{roughness:.36,clearcoat:.35,clearcoatRoughness:.4});this.mats={skin:n,hairM:s,cloth:r,gold:o};let l=this.body,c=this.female,h=c?[[.001,-.7],[.46,-.7],[.47,-.25],[.4,.25],[.37,.5],[.43,.9],[.46,1.12],[.47,1.36],[.45,1.52],[.35,1.62],[.16,1.7],[.001,1.7]]:[[.001,-.7],[.5,-.7],[.5,-.2],[.46,.3],[.5,.85],[.53,1.1],[.53,1.36],[.5,1.53],[.38,1.63],[.17,1.7],[.001,1.7]];this.torso=new j(Sf(h,56),r),this.torso.scale.set(1,1,.72),this.torso.castShadow=!0,l.add(this.torso);let u=new j(new ye(c?.105:.125,c?.12:.14,.5,20),n);u.position.y=1.78,l.add(u);let f=r;for(let I of[-1,1]){let U=He(f,c?.14:.16,c?.13:.15,c?.13:.15,18);U.position.set(I*fr.x,fr.y,0),l.add(U)}this.lower=new Zt,this.root.add(this.lower);let d=(t.y-gi)/t.scale;if(t.skirt){let I=Sf([[.001,.1],[.42,.1],[.47,-.4],[.7,-d*.35],[.98,-d*.7],[1.22,-d+.01],[.001,-d]],72),U=I.attributes.position;for(let O=0;O<U.count;O++){let N=U.getX(O),Z=U.getY(O),Q=U.getZ(O),ht=Math.atan2(Q,N),Mt=Fe(-Z/d),_t=1+.05*Mt*Math.sin(ht*22)+.02*Mt*Math.sin(ht*9+1);U.setXYZ(O,N*_t,Z,Q*_t)}I.computeVertexNormals();let k=ze(t.skirt,{roughness:.42,sheen:1,sheenColor:new vt("#ffffff"),sheenRoughness:.4,side:pe});this.skirt=new j(I,k),this.skirt.scale.set(1,1,.9),this.lower.add(this.skirt);let z=new j(new Ne(1.2,.05,8,72),o);z.rotation.x=Math.PI/2,z.position.y=-d+.22,z.scale.set(1,.9,1),this.skirt.add(z)}else{let I=new j(new ye(.46,.5,d,24),ze(t.pants||"#3b302c",{roughness:.7}));I.position.y=-d/2,I.scale.z=.8,this.lower.add(I)}if(t.kind==="girl"){let I=new j(new Ne(.25,.022,8,48),o);I.rotation.x=Math.PI/2,I.position.set(0,1.56,.03),I.scale.set(1,.74,1),l.add(I);let U=new j(new Ne(.385,.035,8,56),o);U.rotation.x=Math.PI/2,U.position.y=.42,U.scale.set(1,.73,1),l.add(U)}if(t.saree){let I=new An([[.4,1.52,.08],[.3,1.25,.33],[.02,.85,.36],[-.28,.48,.34],[-.44,.1,.3]].map(z=>new R(...z))),U=new j(new ns(I,40,.085,8,!1),o);U.scale.set(1,1,.75),l.add(U);let k=new j(new ye(.26,.32,1.5,18),r);k.scale.z=.14,k.position.set(.14,.82,-.36),l.add(k)}if(t.kind==="dad"){let I=new j(new ye(.15,.17,.1,24,1,!0),r);I.position.y=1.66,l.add(I);for(let z=0;z<4;z++){let O=He(o,.022,.022,.012,10);O.position.set(0,1.5-z*.2,.37-z*.004),l.add(O)}let U=ze(t.stole,{roughness:.5,sheen:1,sheenColor:new vt("#ff9aa8"),sheenRoughness:.4});for(let z of[-1,1]){let O=new j(new Le(.17,1.25,.03),U);O.position.set(z*.24,.93,.37),O.rotation.set(-.06,0,z*.04),l.add(O);let N=new j(new Le(.17,.05,.035),o);N.position.set(z*.24,.33,.405),l.add(N)}let k=new j(new Ne(.3,.04,8,32,Math.PI),U);k.rotation.set(Math.PI/2,0,Math.PI),k.position.set(0,1.58,0),k.scale.set(1,1.2,.7),l.add(k)}if(t.jewels){let I=new j(new Ne(.17,.012,6,40),o);I.position.set(0,1.64,.05),I.rotation.x=Math.PI/2+.45,l.add(I);let U=He(ze("#c8325f",{roughness:.1,clearcoat:1}),.03,.04,.02,12);U.position.set(0,1.5,.17),l.add(U)}this.neckPivot=new Zt,this.neckPivot.position.set(0,Mf,0),this.neckPivot.rotation.order="YXZ",l.add(this.neckPivot);let m=new Zt;m.position.set(0,.55,.03),this.neckPivot.add(m),this.head=m;let x=new j(iy(),n);x.castShadow=!0,m.add(x);for(let I of[-1,1]){let U=He(n,.045,.085,.03,14);if(U.position.set(I*.385,0,-.03),U.rotation.y=I*.3,m.add(U),t.jewels){let k=new j(new Qi(.03,.04,12,1,!0),o);k.position.set(I*.395,-.13,0);let z=He(o,.012,.012,.012,8);z.position.set(I*.395,-.16,0),m.add(k,z)}}let g=ze("#f7f0ea",{roughness:.15,clearcoat:1,clearcoatRoughness:.05}),p=new he({map:e.iris,roughness:.1,clearcoat:1,clearcoatRoughness:.03}),E=ze("#140a08",{roughness:.5}),y=new yn({color:"#ffffff"});this.eyes=[];let _=.058;for(let I of[-1,1]){let U=new Zt;U.position.set(I*.152,.045,.352);let k=new Zt;k.rotation.order="YXZ",k.add(new j(new Ue(_,24,18),g));let z=new j(new Ue(_*1.006,32,10,0,Dt,0,.6),p);z.rotation.x=Math.PI/2,k.add(z),U.add(k);let O=He(y,.009,.009,.004,8);O.position.set(.018,.022,_*.97),U.add(O);let N=new Zt;N.add(new j(new Ue(_*1.09,28,10,0,Dt,0,Math.PI/2),n));let Z=new j(new Ne(_*1.1,c?.0075:.004,6,24,Math.PI),E);Z.rotation.x=Math.PI/2,c&&Z.scale.set(1.06,1,1),N.add(Z),U.add(N);let Q=new j(new Ue(_*1.07,28,8,0,Dt,Math.PI/2,Math.PI/2),n);Q.rotation.x=.78,U.add(Q),m.add(U),this.eyes.push({eg:U,ball:k,upper:N,shine:O,sx:I})}this.brows=[];for(let I of[-1,1]){let U=new An([new R(I*.07,.15,.405),new R(I*.16,.18,.395),new R(I*.245,.15,.35)]),k=new j(Zl(U,16,6,z=>(c?.011:.016)*(1-.55*z)),s);m.add(k),this.brows.push({m:k,sx:I})}let A=ze("#9c675a",{roughness:.8});for(let I of[-1,1]){let U=He(A,.009,.005,.006,8);U.position.set(I*.017,-.108,.432),U.rotation.x=.5,m.add(U)}let T=new yn({color:t.blush,transparent:!0,opacity:.16,depthWrite:!1});for(let I of[-1,1]){let U=He(T,.085,.055,.02,14);U.position.set(I*.215,-.075,.37),U.rotation.y=I*.55,m.add(U)}let C=new Zt;C.position.set(0,-.19,.372),m.add(C);let L=He(ze("#5a1c24",{roughness:.7}),.06,.004,.024,14);L.position.set(0,-.012,-.006);let M=He(ze("#fbf6f0",{roughness:.3}),.046,.011,.014,14);M.position.set(0,-.004,.004),C.add(L,M);let S={upper:[],lower:[]};for(let I of[-1,1]){let U=He(a,.042,.011,.017,14);U.position.set(I*.03,.003,0);let k=He(a,.038,.015,.019,14);k.position.set(I*.026,-.024,0),C.add(U,k),S.upper.push({m:U,sx:I}),S.lower.push({m:k,sx:I})}this.mouth={g:C,inner:L,teeth:M,lips:S};let D=t.hairStyle;if(D==="short"){if(m.add(new j(Ef({scale:1.04,thetaLen:1.68,window:.74,hairline:.62,part:!0}),s)),t.mustache){let I=new An([new R(-.1,-.165,.37),new R(-.04,-.142,.408),new R(0,-.145,.412),new R(.04,-.142,.408),new R(.1,-.165,.37)]);m.add(new j(Zl(I,24,8,U=>.012+.012*Math.sin(U*Math.PI)),s))}}else{let I=D==="long"?.75:.25;m.add(new j(Ef({scale:1.07,thetaLen:D==="long"?2.35:2.15,window:.62,hairline:.5,drop:I}),s))}if(D==="long"){let I=new ye(.36,.44,1.35,40,10,!0,Math.PI-1.35,2.7),U=I.attributes.position;for(let N=0;N<U.count;N++){let Z=U.getY(N);Z<-.5&&U.setY(N,Z+.05*Math.sin(U.getX(N)*18))}I.computeVertexNormals();let k=s.clone();k.side=pe;let z=new j(I,k);z.position.set(0,1.52,-.05),l.add(z);let O=new j(new Ne(.06,.016,8,16),o);O.position.set(.3,.32,.18),O.rotation.y=.9,m.add(O)}if(D==="bun"){let I=He(s,.24,.2,.22,24);I.position.set(0,.06,-.5),m.add(I);let U=ze("#fffaf0",{roughness:.4});for(let k=0;k<16;k++){let z=k/16*Dt,O=He(U,.035,.035,.028,10);O.position.set(Math.cos(z)*.27,.06+Math.sin(z)*.23,-.47),m.add(O)}}if(this.braid=null,D==="braid"){let I=new An([[-.05,2.28,-.38],[-.32,1.96,-.3],[-.52,1.58,.02],[-.44,1.15,.3],[-.37,.62,.36],[-.34,.15,.34]].map(Mt=>new R(...Mt))),U=ze(t.hair,{roughness:.4,sheen:1,sheenColor:new vt("#8a6050"),sheenRoughness:.35,bumpMap:e.braid.bump,bumpScale:3}),k=16,z=Zl(I,140,18,Mt=>(.115*(1-.5*Mt)+.012)*(1+.16*Math.abs(Math.sin(Mt*k*Math.PI))),k);this.braid=new j(z,U),this.braid.castShadow=!0,l.add(this.braid);let O=ze("#fffaf0",{roughness:.4});for(let Mt=0;Mt<14;Mt++){let _t=.03+Mt*.024,Ut=I.getPointAt(_t),rt=He(O,.034,.034,.03,10);rt.position.copy(Ut).add(new R(.05*Math.sin(Mt*2.3),.07,.05*Math.cos(Mt*2.3))),l.add(rt)}let N=I.getPointAt(1),Z=new j(new Qi(.05,.14,14),o);Z.position.copy(N).add(new R(0,-.08,0)),Z.rotation.x=Math.PI,l.add(Z);let Q=He(o,.03,.03,.03,10);Q.position.copy(N).add(new R(0,-.18,0)),l.add(Q);let ht=He(ze("#e9788f",{roughness:.5}),.06,.06,.05,12);ht.position.set(.37,.18,-.12),m.add(ht)}if(t.tiara){let U=sy(.37,1.09),k=new Zt;k.position.y=.37,k.scale.set(U.x,U.x,U.z);let z=new j(new Ne(1,.06,8,48,Math.PI),o);z.rotation.x=Math.PI/2,k.add(z),m.add(k);for(let N=-3;N<=3;N++){let Z=N*.24,Q=.1-Math.abs(N)*.018,ht=new j(new Qi(.02,Q,6),o);ht.position.set(Math.sin(Z)*U.x,.37+Q/2+.01,Math.cos(Z)*U.z),m.add(ht)}let O=He(ze("#ff8fb6",{roughness:.05,clearcoat:1,emissive:new vt("#ff4f93"),emissiveIntensity:.35}),.026,.034,.02,12);O.position.set(0,.37+.03,U.z+.01),m.add(O)}if(t.bindi){let I=t.kind==="mom",U=He(ze("#b0122c",{roughness:.3}),I?.017:.012,I?.017:.014,.006,10);U.position.set(0,.2,.428),m.add(U)}if(t.glasses){let I=ze("#b38a3c",{roughness:.25,metalness:.9});for(let k of[-1,1]){let z=new j(new Ne(.078,.007,8,32),I);z.position.set(k*.152,.045,.428),z.scale.set(1.1,.85,1),m.add(z);let O=new j(new Jn(.078,24),new he({color:"#e8f2ff",transparent:!0,opacity:.1,roughness:.05,clearcoat:1}));O.position.copy(z.position),O.scale.set(1.1,.85,1),m.add(O);let N=new j(new ye(.005,.005,.38,6),I);N.rotation.x=Math.PI/2,N.position.set(k*.33,.06,.24),N.rotation.z=k*.12,m.add(N)}let U=new j(new ye(.006,.006,.07,6),I);U.rotation.z=Math.PI/2,U.position.set(0,.06,.435),m.add(U)}let B=t.sleeve==="long"?r:n;this.arm={};for(let I of["L","R"]){let U=I==="L"?1:-1,k=new j(Nh(c?.125:.145,c?.1:.115),t.sleeve==="short"?n:f),z=new j(Nh(c?.092:.105,c?.068:.08),B),O=He(t.sleeve==="long"?r:n,c?.097:.112,c?.097:.112,c?.097:.112,14),N=ry(n,U);k.castShadow=z.castShadow=!0,this.root.add(k,z,O,N);let Z={upper:k,fore:z,elbow:O,hand:N,sx:U};t.sleeve==="elbow"&&(Z.cuff=new j(new Ne(.104,.013,6,20),o),this.root.add(Z.cuff)),t.sleeve==="short"&&(Z.sleeve=new j(Nh(.145,.13),r),this.root.add(Z.sleeve)),t.bangles&&(Z.bangles=[0,1,2].map(Q=>{let ht=new j(new Ne(.068,.009,6,20),Q===1?ze("#c8325f",{roughness:.2,clearcoat:1}):o);return this.root.add(ht),ht})),this.arm[I]=Z}}setMode(t){this.mode=t}lookAt(t){this.lookTarget=t?t.clone():null}update(t,e){if(e<=0)return;this.t=t;let n=this.mode;this.root.updateWorldMatrix(!0,!1),this.firstFrame&&(this.lastPos.copy(this.root.position),this.firstFrame=!1);let s=this.root.position.distanceTo(this.lastPos)/e;this.lastPos.copy(this.root.position),this.walkSpeed+=(s-this.walkSpeed)*(1-Math.exp(-6*e));let r=Fe(this.walkSpeed/1);this.walkPhase+=e*(2.2+2.5*r)*r*Math.PI;let o=Math.sin(t*1.55+this.phase),a=0,l=this.leanTarget;n==="cheer"&&(a=.04*Math.max(0,Math.sin(t*Dt*1.6+this.phase))),(n==="sing"||n==="clap")&&(a=.012*Math.sin(t*Dt*this.beatHz)),n==="wish"&&(l+=.04),n==="cut"&&(l=Fe(l,0,.16)),Vn(this.bounce,a,10,e),Vn(this.lean,Fe(l,-.15,.3),3.5,e);let c=Math.sin(t*.42+this.phase)*.018+Math.sin(t*.21+this.phase*2)*.01+r*Math.sin(this.walkPhase)*.035;this.body.position.set(Math.sin(t*.37+this.phase)*.018,this.bounce.x+r*Math.abs(Math.sin(this.walkPhase))*.045,0),this.body.rotation.set(this.lean.x+o*.006,Math.sin(t*.3+this.phase)*.02,c),this.torso.scale.set(1+o*.006,1+o*.003,.72*(1+o*.012)),this.skirt&&(this.skirt.rotation.z=r*Math.sin(this.walkPhase)*.025+Math.sin(t*.5+this.phase)*.004),this.body.updateMatrix();let h=0,u=0;this.lookTarget&&(We.copy(this.lookTarget),this.body.updateWorldMatrix(!0,!1),this.body.worldToLocal(We),We.sub(Wn.set(0,Mf+.55,0)),h=Math.atan2(We.x,We.z),u=-Math.atan2(We.y,Math.hypot(We.x,We.z))),n==="wish"&&(u+=.22),n==="sing"&&(u+=Math.sin(t*Dt*this.beatHz*.5+this.phase)*.035),Vn(this.headYaw,Fe(h*.8,-1,1),4.5,e),Vn(this.headPitch,Fe(u*.75,-.35,.42),4.5,e),Vn(this.headRoll,n==="cheer"||n==="joy"?Math.sin(t*2+this.phase)*.08:Math.sin(t*.6+this.phase)*.025,4,e);let f=Math.sin(t*.83+this.phase)*.018+Math.sin(t*1.9+this.phase*3)*.008,d=Math.sin(t*.67+this.phase*2)*.014;this.neckPivot.rotation.set(this.headPitch.x+d,this.headYaw.x+f,this.headRoll.x),this.saccade.t-=e,this.saccade.t<0&&(this.saccade.t=.6+this.rng()*2.2,this.saccade.x=(this.rng()-.5)*.12,this.saccade.y=(this.rng()-.5)*.06),Vn(this.eyeYaw,Fe(h-this.headYaw.x,-.38,.38)+this.saccade.x,28,e),Vn(this.eyePitch,Fe(u-this.headPitch.x,-.3,.3)+this.saccade.y,28,e),this.blinkT-=e,this.blinkT<0&&(this.blink=1,this.blinkT=this.rng()<.2?.25:2+this.rng()*4),this.blink=Math.max(0,this.blink-e/.16);let m=Math.sin(this.blink*Math.PI),x=n==="cheer"||n==="joy"?.3:0;Vn(this.lid,Math.max(this.eyesClosed,m,x),m>.05?60:14,e);let g=te(-.5,.5,this.lid.x);for(let M of this.eyes)M.ball.rotation.set(this.eyePitch.x,this.eyeYaw.x,0),M.upper.rotation.x=g+this.eyePitch.x*.4,M.shine.visible=this.lid.x<.6;let p=this.mouthOpenTarget;n==="sing"&&(p=this.voice*.75),n==="cheer"&&(p=.5+.15*Math.sin(t*7+this.phase)),n==="joy"&&(p=.35),Vn(this.open,p,18,e),Vn(this.smile,n==="blow"?.1:this.smileAmt+(n==="cheer"||n==="joy"?.25:0),6,e),Vn(this.puck,n==="blow"?this.pucker:0,10,e);let E=Math.max(0,this.open.x),y=Fe(this.smile.x,0,1.1),_=Fe(this.puck.x),A=this.mouth;for(let{m:M,sx:S}of A.lips.upper)M.rotation.z=S*(y*.24-_*.1),M.position.set(S*(.03-_*.012),.003+E*.008+_*.004,_*.012);for(let{m:M,sx:S}of A.lips.lower)M.rotation.z=S*(y*.18-_*.1),M.position.set(S*(.026-_*.01),-.024-E*.055-_*.012,_*.012);A.inner.scale.set(.058*(1-_*.45),.004+E*.03+_*.012,.024),A.inner.position.y=-.012-E*.026-_*.006,A.teeth.visible=E>.12&&_<.3;let T=n==="cheer"||n==="joy"?.016:n==="wish"?-.006:0;for(let M of this.brows)M.m.position.y=T;this.braid&&(this.braid.rotation.z=Math.sin(t*1.1+this.phase)*.012-this.lean.x*.15);let C=this.body.matrix,L=this.handTargets(t,n);this.gripW+=((this.grip?1:0)-this.gripW)*(1-Math.exp(-5*e));for(let M of["L","R"]){let S=M==="L"?1:-1,D=j_.set(S*fr.x,fr.y,0).applyMatrix4(C).clone(),B=L[M].pos.clone().applyMatrix4(C),I=this.hands[M];ny(I,B,L[M].omega,e);let U=I.x.clone(),k=L[M].palm.clone();if(this.grip&&M===this.gripHand){let Q=this.root.worldToLocal(ms.copy(this.grip)).clone();U.lerp(Q,this.gripW),k.lerp(Wn.set(-S*.4,-1,.2),this.gripW),this.lastReach={want:Q.distanceTo(D),max:this.armLen.a+this.armLen.b}}let z=this.elbows[M];ey(D,U,this.armLen.a,this.armLen.b,We.set(S*.8,-1,-.55),z);let O=this.arm[M];Fh(O.upper,D,z),Fh(O.fore,z,U),O.elbow.position.copy(z);let N=new R().subVectors(U,z).normalize();oy(O.hand,U,N,k);let Z=new R().subVectors(z,D).normalize();O.cuff&&(O.cuff.position.copy(z).addScaledVector(Z,-.03),O.cuff.quaternion.setFromUnitVectors(Bh,Z)),O.sleeve&&Fh(O.sleeve,D,Wn.copy(D).addScaledVector(Z,.42)),O.bangles&&O.bangles.forEach((Q,ht)=>{Q.position.copy(U).addScaledVector(N,-.03-ht*.03),Q.quaternion.setFromUnitVectors(Bh,N)})}}handTargets(t,e){let n={},s=t*Dt*this.beatHz;for(let r of["L","R"]){let o=r==="L"?1:-1,a=new R,l=new R(-o,.2,.3),c=9;switch(e){case"sing":case"clap":{let h=((e==="sing"?s:t*Dt*1.8)+this.phase*.1)/Dt,u=h-Math.floor(h),f=u<.18?.02:.02+.17*Math.sin((u-.18)/.82*Math.PI);a.set(o*f,1+.02*Math.sin(s),.5),l.set(-o,.15,.1),c=22;break}case"cheer":{let h=(t*2.4+this.phase*.1)%1,u=h<.2?.02:.02+.19*Math.sin((h-.2)/.8*Math.PI);a.set(o*u,1.28,.48),l.set(-o,.2,.1),c=24;break}case"wish":a.set(o*.035,1.28,.42),l.set(-o,.1,0),c=6;break;case"blow":a.set(o*.2,.62,.5),l.set(0,-1,.2),c=6;break;case"joy":a.set(o*.05,1.5,.48),l.set(-o,.2,0),c=7;break;case"heart":a.set(o*.05,1.12,.36),l.set(0,0,-1),c=6;break;case"wave":r==="L"?(a.set(.62+.06*Math.sin(t*7),2.35,.25),l.set(0,.1,1),c=12):a.set(-.12,.45,.45);break;case"cut":a.set(o*.28,.6,.55),l.set(0,-1,.1),c=6;break;default:a.set(o*(.065+.01*Math.sin(t*.7+this.phase)),.4+.015*Math.sin(t*.9+this.phase),.46),l.set(-o,.3,.2),c=5}n[r]={pos:a,palm:l,omega:c}}return n}mouthWorld(t=new R){return this.mouth.g.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.mouth.g.matrixWorld)}headWorld(t=new R){return this.head.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.head.matrixWorld)}shoulderWorld(t){return this.body.updateWorldMatrix(!0,!1),new R((t==="L"?1:-1)*fr.x,fr.y,0).applyMatrix4(this.body.matrixWorld)}};function wf(i,t){let e=new pr(Oi.kaviya,t,"kaviya"),n=new pr(Oi.mom,t,"mom"),s=new pr(Oi.dad,t,"dad"),r=new pr(Oi.sister,t,"sister");e.root.position.set(...Mo.pos),e.root.rotation.y=Mo.yaw,n.root.position.set(4.35,Oi.mom.y,.75),n.root.rotation.y=er.degToRad(-62),s.root.position.set(-1.85,Oi.dad.y,-4.35),s.root.rotation.y=er.degToRad(12),r.root.position.set(2.2,Oi.sister.y,-4.35),r.root.rotation.y=er.degToRad(-16);let o=[e,n,s,r];o.forEach(u=>i.add(u.root));let a=[n,s,r],l=new R(0,2.3,0),c=new R(-3.95,4,-1.2),h=new R(-1.5,3.6,14);return{kaviya:e,mom:n,dad:s,sister:r,all:o,others:a,cakeLook:l,camLook:h,setOthers(u,f={}){a.forEach(d=>{d.setMode(u),f.smile!==void 0&&(d.smileAmt=f.smile)})},othersLookAtKaviya(){a.forEach(u=>u.lookAt(c))},othersLookAtCake(){a.forEach(u=>u.lookAt(l))},update(u,f){o.forEach(d=>d.update(u,f))}}}var ay=(i,t=28)=>new Bn(i.map(([e,n])=>new nt(e,n)),t);function Af(i,t,e){let n=new Zt,s=[[.001,0],[.048,0],[.058,.05],[.055,.25],[.064,i*.55],[.072,i*.78],[.062,i*.93],[.038,i-.03],[.001,i]],r=new j(ay(s),e);r.rotation.z=-Math.PI/2,r.castShadow=!0,n.add(r);for(let a of[.05,i*.5,i*.9]){let l=new j(new Ne(.068+(a>i*.4?.005:-.01),.01,8,28),t);l.rotation.y=Math.PI/2,l.position.x=a,n.add(l)}let o=new j(new Ue(.056,16,12),t);return o.position.x=i,n.add(o),n}function Rf(i){let t=new oe({color:"#dde3ec",metalness:1,roughness:.16,envMap:i.scene.environment,envMapIntensity:1.1}),e=new oe({color:"#e6b85c",metalness:1,roughness:.24,envMap:i.scene.environment,envMapIntensity:1.4}),n=new he({color:"#fff4ea",roughness:.22,clearcoat:1,sheen:.8,sheenColor:new vt("#ffc0d6")}),s=new Zt,r=new Zt;s.add(r);let o=new Zt;r.add(o);let a=_o.blade,l=_o.bladeH;{let d=new Fn;d.moveTo(.24,0),d.lineTo(a,0),d.lineTo(a,l),d.lineTo(.48,l*.93),d.quadraticCurveTo(.07,l*.8,0,l*.24),d.quadraticCurveTo(.025,0,.24,0);let m=new Zs(d,{depth:.01,bevelEnabled:!0,bevelThickness:.006,bevelSize:.006,bevelSegments:2,curveSegments:18});m.translate(0,0,-.005);let x=new j(m,t);x.castShadow=!0,o.add(x);let g=new j(new Le(a*.62,.01,.026),e);g.position.set(a*.62,l*.78,0),o.add(g);let p=new j(new Le(.13,l*1.12,.045),e);p.position.set(a+.06,l*.5,0),o.add(p);let E=Af(_o.handle,e,n);E.position.set(a+.12,l*.6,0),o.add(E)}s.userData.grip=new R(a+.12+_o.handle*.52,l*.6,0),s.visible=!1;let c=new Zt,h=new Zt;c.add(h);let u=yo.len,f=yo.wid;{let d=new Fn;d.moveTo(0,0),d.lineTo(u-.1,-f),d.quadraticCurveTo(u+.02,-f-.02,u+.02,-f+.11),d.lineTo(u+.02,f-.11),d.quadraticCurveTo(u+.02,f+.02,u-.1,f),d.closePath();let m=new Zs(d,{depth:.018,bevelEnabled:!0,bevelThickness:.005,bevelSize:.005,bevelSegments:2,curveSegments:14});m.rotateX(-Math.PI/2);let x=new j(m,t);x.castShadow=!0,h.add(x);let g=new Fn;g.moveTo(u*.32,0),g.lineTo(u*.78,-f*.45),g.lineTo(u*.78,f*.45),g.closePath();let p=new j(new es(g),e);p.rotation.x=-Math.PI/2,p.position.y=.03,h.add(p);let E=new j(new ye(.028,.04,.6,10),t);E.position.set(u+.26,.16,0),E.rotation.z=-Math.PI/2+.62,h.add(E);let y=Af(yo.handle,e,n);y.position.set(u+.5,.34,0),h.add(y)}return c.userData.grip=new R(u+.5+yo.handle*.5,.34,0),c.visible=!1,{knife:s,knifePitch:r,knifeModel:o,server:c,serverModel:h,steel:t,gold:e,pearl:n,poseKnife({phi:d,base:m,r0:x=0,y:g=3,along:p=0,pitchAngle:E=.1,roll:y=0}){s.position.set(m.x+(x+p)*Math.sin(d),g,m.z+(x+p)*Math.cos(d)),s.rotation.set(0,d-Math.PI/2,0),r.rotation.set(0,0,E),o.rotation.set(y,0,0)},gripWorld(d,m=new R){let x=d===s?o:h;return d.updateWorldMatrix(!0,!0),m.copy(d.userData.grip).applyMatrix4(x.matrixWorld)}}}function Cf(i){let t=zd(i),e=t.renderer.capabilities.getMaxAnisotropy(),n=(m,x)=>x(),s={frosting:n("frosting",()=>Vd(e)),section:n("section",()=>Gd(e)),berry:n("berry",()=>Wd(e)),cloth:n("cloth",()=>qd(e)),topper:n("topper",()=>Yd(Ae.name,e)),glow:Zd(),bokeh:$d(),star:Jd(),smoke:n("smoke",()=>Kd()),smear:n("smear",()=>Qd()),iris:nf("#5a3720"),hair:sf(e),braid:rf(e),wall:jd(e),wood:tf(e)},r=_f(t,s),o=Lh({scene:t.scene,T:s,engine:t,stage:r}),a=wf(t.scene,s),l=Rf(t);t.scene.add(l.knife,l.server);let c=new Vl(t.scene,s.smoke),h=new Gl(t.scene),u=new Wl(t.scene,s.star),f=new Xl(t.scene,s.smoke),d=new zl;return{engine:t,T:s,stage:r,cake:o,family:a,tools:l,smoke:c,crumbs:h,sparkler:u,breath:f,timeline:d,time:0,updaters:[]}}function Ql(i,t){i.time+=t,i.timeline.update(t);for(let e of i.updaters)e(i.time,t);i.engine.update(t),i.stage.update(i.time,t),i.cake.update(i.time),i.family.update(i.time,t),i.smoke.update(t,i.time),i.crumbs.update(t),i.breath.update(t),i.sparkler.update(t,i.engine.viewportScale())}function Pf(i){i.cake.root.removeFromParent(),i.cake.rig.removeFromParent(),i.cake=Lh({scene:i.engine.scene,T:i.T,engine:i.engine,stage:i.stage}),i.crumbs.clear()}var Re=i=>document.getElementById(i),_i=(i,t=!0)=>i.classList.toggle("hidden",!t);function ly(){return!!Ae.wishInbox&&/^https?:$/.test(location.protocol)&&!/claude/i.test(location.hostname)}async function If(i,t=0){try{let e=await fetch(Ae.wishInbox,{method:"POST",headers:{"Content-Type":"application/json",Accept:"application/json"},body:JSON.stringify({_subject:`${Ae.name}'s birthday wish \u{1F48C}`,wish:i,from:Ae.name,sentAt:new Date().toString()})});if(!e.ok)throw new Error(`HTTP ${e.status}`);return!0}catch(e){return t<2?(await new Promise(n=>setTimeout(n,4e3*(t+1))),If(i,t+1)):(console.warn("Could not send the wish:",e),!1)}}function Oh(){let i={intro:Re("intro"),openBtn:Re("openBtn"),headline:Re("headline"),lyrics:Re("lyrics"),prompt:Re("prompt"),promptText:Re("promptText"),promptBtns:Re("promptBtns"),wish:Re("wish"),wishInput:Re("wishInput"),wishDone:Re("wishDone"),wishFloat:Re("wishFloat"),cutHint:Re("cutHint"),big:Re("bigGreeting"),endBar:Re("endBar"),readNote:Re("readNote"),replay:Re("replay"),letter:Re("letter"),letterBack:Re("letterBack"),mute:Re("mute"),wishNote:Re("wishNote")};document.title=`Happy Birthday ${Ae.name} \u{1F382}`,document.querySelectorAll(".script-name").forEach(n=>n.textContent=Ae.name),i.intro.querySelector(".kicker").textContent=Ae.kicker,i.intro.querySelector(".intro-sub").textContent=`Today is all about you, ${Ae.pet}.`,Re("letterTitle").textContent=Ae.letter.title,Re("letterBody").innerHTML=Ae.letter.paragraphs.map(n=>`<p>${n.replace(/</g,"&lt;")}</p>`).join(""),Re("letterClose").textContent=Ae.letter.closing,Re("letterSign").textContent=`\u2014 ${Ae.signedBy}`;let t=(n,s)=>new Promise(r=>n.addEventListener(s,r,{once:!0})),e=0;return{el:i,waitOpen(){return t(i.openBtn,"click").then(()=>{i.intro.classList.add("hidden")})},headline(n){_i(i.headline,n)},lyric(n){clearTimeout(e),i.lyrics.innerHTML=n?`<span>${n}</span>`:""},ask(n,s,r="bottom"){return i.prompt.classList.toggle("top",r==="top"),i.promptText.textContent=n||"",i.promptBtns.innerHTML="",_i(i.prompt,!0),new Promise(o=>{s.forEach(a=>{let l=document.createElement("button");l.className=`btn ${a.kind||"primary"}`,l.textContent=a.label,l.addEventListener("click",()=>{o(a.id)}),i.promptBtns.appendChild(l)})})},hidePrompt(){_i(i.prompt,!1)},wish(){let n=ly();return i.wishNote.textContent=n?`Think of the one thing your heart wants most this year, and whisper it here. Your wish will be sent to ${Ae.signedBy} \u{1F48C}`:"Think of the one thing your heart wants most this year. You can whisper it here; it never leaves this page.",i.wishInput.value="",_i(i.wish,!0),setTimeout(()=>i.wishInput.focus({preventScroll:!0}),700),t(i.wishDone,"click").then(()=>{_i(i.wish,!1);let s=i.wishInput.value.trim();return n&&s&&If(s),s})},floatWish(n){i.wishFloat.firstElementChild.textContent=n||"\u2728 your wish is on its way \u2728",i.wishFloat.classList.remove("hidden","go"),i.wishFloat.offsetWidth,i.wishFloat.classList.add("go")},cutHint(n){_i(i.cutHint,n)},bigGreeting(n){if(_i(i.big,n),n){let s=i.big.querySelector("h2");s.style.animation="none",s.offsetWidth,s.style.animation=""}},endBar(n){_i(i.endBar,n)},letter(n){_i(i.letter,n)},onReadNote(n){i.readNote.addEventListener("click",n)},onLetterBack(n){i.letterBack.addEventListener("click",n)},onReplay(n){i.replay.addEventListener("click",n)}}}var Te=.7142857142857143,cy=i=>{let t=/^([A-G])(#|b)?(-?\d)$/.exec(i),e={C:0,D:2,E:4,F:5,G:7,A:9,B:11}[t[1]];return 12*(parseInt(t[3],10)+1)+e+(t[2]==="#"?1:t[2]==="b"?-1:0)},En=i=>440*Math.pow(2,(cy(i)-69)/12),Lf=[["G4",.75],["G4",.25],["A4",1],["G4",1],["C5",1],["B4",2],["G4",.75],["G4",.25],["A4",1],["G4",1],["D5",1],["C5",2],["G4",.75],["G4",.25],["G5",1],["E5",1],["C5",1],["B4",1],["A4",1],["F5",.75],["F5",.25],["E5",1],["C5",1],["D5",1],["C5",3]],Df=2,So=27,Uf=[2,8,14,20],Nf=(()=>{let i=Df;return Lf.map(([,t])=>{let e={b:i,d:t};return i+=t,e})})(),gs={C:{bass:"C3",tones:["E3","G3","C4"],pad:["C3","G3","E4"]},C7:{bass:"C3",tones:["E3","Bb3","C4"],pad:["C3","Bb3","E4"]},G7:{bass:"G2",tones:["F3","B3","D4"],pad:["G2","F3","B3"]},F:{bass:"F2",tones:["A3","C4","F4"],pad:["F2","C4","A4"]},Am:{bass:"A2",tones:["C4","E4","A3"],pad:["A2","E3","C4"]},Em:{bass:"E2",tones:["G3","B3","E4"],pad:["E2","B3","G4"]},Dm7:{bass:"D3",tones:["F3","A3","C4"],pad:["D3","A3","F4"]},G:{bass:"G2",tones:["G3","B3","D4"],pad:["G2","D3","B3"]}},jl=class{constructor(){this.ctx=null,this.muted=!1,this.scrapeNode=null,this.music=new Hh(this)}init(){if(this.ctx){this.ctx.state==="suspended"&&this.ctx.resume();return}let t=window.AudioContext||window.webkitAudioContext;if(!t)return;let e=this.ctx=new t;this.master=e.createGain(),this.master.gain.value=this.muted?0:.85;let n=e.createDynamicsCompressor();n.threshold.value=-16,n.ratio.value=3.5,this.master.connect(n).connect(e.destination),this.reverb=e.createConvolver(),this.reverb.buffer=this.makeIR(3,2.4),this.wet=e.createGain(),this.wet.gain.value=.34,this.reverb.connect(this.wet).connect(this.master),this.bus=e.createGain(),this.bus.connect(this.master),this.bus.connect(this.reverb),this.noise=e.createBuffer(1,e.sampleRate*2,e.sampleRate);let s=this.noise.getChannelData(0);for(let r=0;r<s.length;r++)s[r]=Math.random()*2-1}makeIR(t,e){let n=this.ctx,s=Math.floor(n.sampleRate*t),r=n.createBuffer(2,s,n.sampleRate);for(let o=0;o<2;o++){let a=r.getChannelData(o);for(let l=0;l<s;l++)a[l]=(Math.random()*2-1)*Math.pow(1-l/s,e)}return r}setMuted(t){this.muted=t,this.ctx&&this.master.gain.setTargetAtTime(t?0:.85,this.ctx.currentTime,.05)}bell(t,e,n=1.6,s=.2,r=this.bus){let o=this.ctx,a=o.createGain();a.gain.setValueAtTime(1e-4,e),a.gain.linearRampToValueAtTime(s,e+.004),a.gain.exponentialRampToValueAtTime(5e-4,e+n),a.connect(r),[[1,1],[2,.32],[4.01,.09],[5.4,.04]].forEach(([l,c])=>{let h=o.createOscillator(),u=o.createGain();h.type="sine",h.frequency.value=t*l,u.gain.value=c,h.connect(u).connect(a),h.start(e),h.stop(e+n+.05)})}noiseBurst({dur:t=.5,f0:e=1e3,f1:n=e,q:s=1,type:r="bandpass",gain:o=.3,attack:a=.02,when:l=0,dest:c=this.bus}){if(!this.ctx)return;let h=this.ctx,u=h.currentTime+l,f=h.createBufferSource();f.buffer=this.noise,f.loop=!0;let d=h.createBiquadFilter();d.type=r,d.Q.value=s,d.frequency.setValueAtTime(e,u),d.frequency.exponentialRampToValueAtTime(Math.max(20,n),u+t);let m=h.createGain();m.gain.setValueAtTime(1e-4,u),m.gain.linearRampToValueAtTime(o,u+a),m.gain.exponentialRampToValueAtTime(5e-4,u+t),f.connect(d).connect(m).connect(c),f.start(u,Math.random()),f.stop(u+t+.05)}inhale(){this.noiseBurst({dur:.7,f0:500,f1:1500,q:.8,gain:.1,attack:.5})}blow(){this.noiseBurst({dur:1.5,f0:1100,f1:380,q:.6,gain:.42,attack:.12}),this.noiseBurst({dur:1.2,f0:300,f1:200,q:.5,type:"lowpass",gain:.2,attack:.1})}poof(){this.noiseBurst({dur:.18,f0:2600,f1:900,q:.7,gain:.06,attack:.005})}applause(t=4){if(!this.ctx)return;let e=Math.floor(t*55);for(let n=0;n<e;n++){let s=Math.random()*t,r=Math.sin(Math.min(1,s/t)*Math.PI*.9+.15);this.noiseBurst({dur:.05+Math.random()*.05,f0:1500+Math.random()*3500,q:1.2,gain:.06*r,attack:.002,when:s})}}pop(){this.noiseBurst({dur:.25,f0:5e3,f1:300,q:.5,gain:.28,attack:.002}),this.noiseBurst({dur:.2,f0:160,f1:60,type:"lowpass",gain:.28,attack:.002})}thunk(){if(!this.ctx)return;let t=this.ctx,e=t.currentTime,n=t.createOscillator(),s=t.createGain();n.type="sine",n.frequency.setValueAtTime(95,e),n.frequency.exponentialRampToValueAtTime(52,e+.18),s.gain.setValueAtTime(.28,e),s.gain.exponentialRampToValueAtTime(.001,e+.22),n.connect(s).connect(this.master),n.start(e),n.stop(e+.25),this.noiseBurst({dur:.12,f0:900,f1:300,type:"lowpass",gain:.18,attack:.003})}slide(){this.noiseBurst({dur:.7,f0:1800,f1:900,q:1.1,gain:.1,attack:.15})}clink(){if(!this.ctx)return;let t=this.ctx.currentTime;this.bell(2637,t,.6,.06),this.bell(3951,t+.01,.4,.04)}sparkle(t=9){if(!this.ctx)return;let e=this.ctx.currentTime,n=["C6","E6","G6","C7","G6","E6","A6","C7","D6"].map(En);for(let s=0;s<t;s++)this.bell(n[s%n.length],e+s*.075,1.4,.06)}wishMagic(){if(!this.ctx)return;let t=this.ctx.currentTime;["C5","E5","G5","C6","E6","G6","C7"].map(En).forEach((e,n)=>this.bell(e,t+n*.12,2.2,.08))}scrape(t){if(!this.ctx)return;let e=this.ctx;if(!this.scrapeNode){let s=e.createBufferSource();s.buffer=this.noise,s.loop=!0;let r=e.createBiquadFilter();r.type="bandpass",r.frequency.value=900,r.Q.value=.6;let o=e.createGain();o.gain.value=0,s.connect(r).connect(o).connect(this.bus),s.start(),this.scrapeNode={src:s,f:r,g:o}}let n=this.scrapeNode;n.g.gain.setTargetAtTime(Math.min(1,t)*.1,e.currentTime,.06),n.f.frequency.setTargetAtTime(600+t*900,e.currentTime,.08)}},Hh=class{constructor(t){this.s=t,this.on=!1,this.order=["song","inter","soft","inter"]}start(){let t=this.s.ctx;return!t||this.on?null:(this.on=!0,this.bus=t.createGain(),this.bus.gain.value=1e-4,this.bus.connect(this.s.bus),this.secStart=t.currentTime+.15,this.oi=0,this.cur=this.build(this.order[0]),this.ei=0,this.pending=null,this.timer=setInterval(()=>this.tick(),50),this.tick(),this.setLevel(1,.3),this.secStart)}setLevel(t,e=1){if(!this.on)return;let n=this.s.ctx;this.bus.gain.cancelScheduledValues(n.currentTime),this.bus.gain.setTargetAtTime(Math.max(1e-4,t*.9),n.currentTime,e/3)}jumpToSong(){if(!this.on)return null;let e=(this.s.ctx.currentTime+.3-this.secStart)/Te,n=this.secStart+Math.ceil(e/3)*3*Te;return this.pending={name:"song",at:n},n}tick(){let t=this.s.ctx,e=t.currentTime+.4;for(let n=0;n<400;n++){if(this.pending){let o=this.cur.events[this.ei];if((o?this.secStart+o.b*Te:1/0)>=this.pending.at){this.secStart=this.pending.at,this.cur=this.build(this.pending.name),this.ei=0,this.oi=0,this.pending=null;continue}}if(this.ei>=this.cur.events.length){if(this.secStart+=this.cur.len*Te,this.oi=(this.oi+1)%this.order.length,this.cur=this.build(this.order[this.oi]),this.ei=0,this.secStart>e)break;continue}let s=this.cur.events[this.ei],r=this.secStart+s.b*Te;if(r>e)break;r>t.currentTime-.05&&s.fn(r),this.ei++}}piano(t,e,n,s){let r=this.s.ctx,o=r.createGain(),a=r.createBiquadFilter();a.type="lowpass",a.frequency.setValueAtTime(Math.min(9e3,t*9),e),a.frequency.exponentialRampToValueAtTime(Math.max(380,t*2.4),e+n*.8),o.gain.setValueAtTime(1e-4,e),o.gain.linearRampToValueAtTime(s,e+.006),o.gain.exponentialRampToValueAtTime(s*.32,e+.3),o.gain.exponentialRampToValueAtTime(4e-4,e+n),a.connect(o).connect(this.bus),[["triangle",1,1],["sine",2,.42],["sine",3,.1],["sine",1.0035,.5]].forEach(([l,c,h])=>{let u=r.createOscillator(),f=r.createGain();u.type=l,u.frequency.value=t*c,f.gain.value=h,u.connect(f).connect(a),u.start(e),u.stop(e+n+.05)})}pad(t,e,n,s){let r=this.s.ctx,o=r.createGain(),a=r.createBiquadFilter();a.type="lowpass",a.frequency.value=950,a.Q.value=.4,o.gain.setValueAtTime(1e-4,e),o.gain.linearRampToValueAtTime(s,e+Math.min(.9,n*.4)),o.gain.setValueAtTime(s,e+n*.75),o.gain.exponentialRampToValueAtTime(4e-4,e+n+.9),a.connect(o).connect(this.bus);for(let l of t)for(let c of[-7,7]){let h=r.createOscillator();h.type="sawtooth",h.frequency.value=En(l),h.detune.value=c,h.connect(a),h.start(e),h.stop(e+n+1)}}bass(t,e,n,s){let r=this.s.ctx,o=r.createGain();o.gain.setValueAtTime(1e-4,e),o.gain.linearRampToValueAtTime(s,e+.015),o.gain.exponentialRampToValueAtTime(4e-4,e+n),o.connect(this.bus),[["sine",1,1],["triangle",2,.18]].forEach(([a,l,c])=>{let h=r.createOscillator(),u=r.createGain();h.type=a,h.frequency.value=t*l,u.gain.value=c,h.connect(u).connect(o),h.start(e),h.stop(e+n+.05)})}build(t){let e=[],n=(a,l)=>e.push({b:a,fn:l}),s=(a,l,c=1)=>{let h=gs[l];n(a,u=>this.bass(En(h.bass),u,Te*2.6,.2*c));for(let u of[1,2])n(a+u,f=>h.tones.forEach(d=>this.piano(En(d),f,Te*1.4,.045*c)));n(a,u=>this.pad(h.pad,u,Te*3,.018*c))};if(t==="song"||t==="soft"){let a=t==="soft",l=["C","C","G7","G7","C","C7","F","C","C"];n(0,h=>["C3","G3","C4","E4","G4"].forEach((u,f)=>this.piano(En(u),h+f*.09,Te*3,.05))),n(0,h=>this.pad(gs.C.pad,h,Te*3,.016)),l.forEach((h,u)=>{if(u!==0){if(u===7){let f=u*3;n(f,d=>this.bass(En("G2"),d,Te*1.8,.2)),n(f+1,d=>gs.C.tones.forEach(m=>this.piano(En(m),d,Te,.045))),n(f+2,d=>gs.G7.tones.forEach(m=>this.piano(En(m),d,Te,.045))),n(f,d=>this.pad(gs.G7.pad,d,Te*3,.018));return}s(u*3,h,a?.75:1)}});let c=Df;for(let[h,u]of Lf){let f=En(h),d=c;a?(n(d,m=>this.s.bell(f*2,m,1.8,.07,this.bus)),n(d,m=>this.piano(f,m,Te*u+.6,.05))):(n(d,m=>this.piano(f,m,Te*u+.9,.16)),n(d,m=>this.s.bell(f*2,m,1.6,.045,this.bus))),c+=u}return{len:So,events:e.sort((h,u)=>h.b-u.b)}}let r=["C","Am","F","G","Em","Am","Dm7","C"],o=[["G5","E5","C5"],["A5","E5","C5"],["A5","F5","C5"],["B5","G5","D5"],["G5","E5","B4"],["C6","A5","E5"],["F5","D5","B4"],["E5","G5","C6"]];return r.forEach((a,l)=>{let c=l*3,h=gs[a];n(c,f=>this.bass(En(h.bass),f,Te*2.8,.17)),n(c,f=>this.pad(h.pad,f,Te*3,.02)),[h.bass.replace(/\d/,f=>String(+f+1)),...h.tones,h.tones[1],h.tones[0]].forEach((f,d)=>n(c+d*.5,m=>this.piano(En(f),m,Te*1.6,.038))),o[l].forEach((f,d)=>n(c+d,m=>this.s.bell(En(f),m,1.8,.05,this.bus))),l===6&&n(c+2,f=>this.pad(gs.G7.pad,f,Te,.016))}),{len:24,events:e.sort((a,l)=>a.b-l.b)}}};var tc=["#ecc987","#f2b8c6","#fff6ea","#d9a85a","#e78fa6","#f7dcc0","#c97a8e","#ffe7b0"],ec=class{constructor(t){this.canvas=t,this.ctx=t.getContext("2d"),this.p=[],this.R=xe(5),this.rain=0,this.resize(),window.addEventListener("resize",()=>this.resize())}resize(){this.dpr=Math.min(window.devicePixelRatio||1,2),this.w=window.innerWidth,this.h=window.innerHeight,this.canvas.width=this.w*this.dpr,this.canvas.height=this.h*this.dpr}burst(t,e,n=90,{angle:s=-Math.PI/2,spread:r=Math.PI*.9,speed:o=900,gravity:a=1100}={}){window.matchMedia&&window.matchMedia("(prefers-reduced-motion: reduce)").matches&&(n=Math.floor(n*.3));for(let c=0;c<n;c++){let h=s+(this.R()-.5)*r,u=o*(.35+this.R()*.8),f=this.R();this.p.push({x:t,y:e,vx:Math.cos(h)*u,vy:Math.sin(h)*u,g:a*(.7+this.R()*.5),rot:this.R()*Dt,vr:(this.R()-.5)*14,flip:this.R()*Dt,vf:6+this.R()*10,size:6+this.R()*9,color:tc[Math.floor(this.R()*tc.length)],shape:f<.55?"rect":f<.75?"circle":f<.9?"heart":"star",life:4+this.R()*2.5,drag:.992})}}shower(t){this.rain=t}update(t){if(this.rain>0){this.rain-=t;let e=Math.ceil(t*70);for(let n=0;n<e;n++)this.p.push({x:this.R()*this.w,y:-20,vx:(this.R()-.5)*120,vy:120+this.R()*200,g:140+this.R()*120,rot:this.R()*Dt,vr:(this.R()-.5)*8,flip:this.R()*Dt,vf:4+this.R()*8,size:6+this.R()*8,color:tc[Math.floor(this.R()*tc.length)],shape:this.R()<.7?"rect":this.R()<.5?"heart":"circle",life:7,drag:.996})}for(let e of this.p)e.life-=t,e.vy+=e.g*t,e.vx*=e.drag,e.vy*=e.drag,e.x+=e.vx*t,e.y+=e.vy*t,e.rot+=e.vr*t,e.flip+=e.vf*t;this.p=this.p.filter(e=>e.life>0&&e.y<this.h+40)}draw(){let t=this.ctx;t.setTransform(this.dpr,0,0,this.dpr,0,0),t.clearRect(0,0,this.w,this.h);for(let e of this.p){let n=Math.min(1,e.life*1.2);t.save(),t.globalAlpha=n,t.translate(e.x,e.y),t.rotate(e.rot),t.fillStyle=e.color;let s=e.size;if(e.shape==="rect")t.scale(1,Math.cos(e.flip)),t.fillRect(-s/2,-s*.3,s,s*.6);else if(e.shape==="circle")t.beginPath(),t.arc(0,0,s*.38,0,Dt),t.fill();else if(e.shape==="heart")t.scale(1,.6+.4*Math.cos(e.flip)),t.beginPath(),t.moveTo(0,s*.35),t.bezierCurveTo(-s*.7,-s*.1,-s*.35,-s*.6,0,-s*.2),t.bezierCurveTo(s*.35,-s*.6,s*.7,-s*.1,0,s*.35),t.fill();else{t.beginPath();for(let r=0;r<10;r++){let o=r%2?s*.2:s*.55,a=r/10*Dt;t.lineTo(Math.cos(a)*o,Math.sin(a)*o)}t.closePath(),t.fill()}t.restore()}}};var hy={intro:{target:[0,2.7,-.6],dir:[0,.3,1],w:14.5,h:9,wp:8.6},family:{target:[0,2.55,-.7],dir:[0,.22,1],w:12.2,h:7.4,wp:7.2},wish:{target:[-2.3,3.1,-.9],dir:[.42,.1,1],w:7,h:4.4,wp:6},blow:{target:[-1.6,2.9,-.7],dir:[.36,.14,1],w:8.4,h:5.2,wp:7},cut:{target:[-1.25,2.55,-.5],dir:[.55,.36,1],w:8.4,h:5.3,wp:6.6},serve:{target:[-1.7,2.2,.6],dir:[.32,.32,1],w:9.4,h:5.9,wp:6.8},final:{target:[-.6,2.35,.2],dir:[-.04,.25,1],w:11.6,h:7.2,wp:7.4},panMom:{target:[2.4,2.6,-.2],dir:[-.18,.22,1],w:12,h:7.4,wp:6.4},panKaviya:{target:[-2.2,2.7,-.8],dir:[.12,.22,1],w:12,h:7.4,wp:6.4}};function Ff({world:i,sound:t,confetti:e,ui:n}){let{engine:s,stage:r,tools:o,family:a,smoke:l,crumbs:c,sparkler:h,breath:u,timeline:f}=i,d=a.kaviya,m=t.music,x={x:0,z:0},g=(q,ft,St)=>new R(q,ft,St),p=g(0,Oe+ue+.4,.05),E=g(Math.sin(xi),0,Math.cos(xi)),y="",_=null,A=0,T=null,C=[],L=0,M=g(0,0,0);function S(q){let ft=JSON.parse(JSON.stringify(hy[q])),St=window.innerWidth/window.innerHeight;return ft.w=te(ft.wp,ft.w,Fe((St-.5)/.9)),ft}function D(q){s.setShot(S(q))}function B(q,ft=2,St=me.inOutSine){let w=++A,v=s.getShot(),V=S(q);return f.tween(ft,X=>{w===A&&s.setShot(kd(v,V,X))},St)}let I=q=>f.wait(q),U=(q,ft,St=me.inOutSine)=>f.tween(q,ft,St);function k(q){return d.shoulderWorld("L").distanceTo(q)<d.shoulderWorld("R").distanceTo(q)?"L":"R"}function z(q){_=q,q?(o.gripWorld(q,M),d.gripHand=k(M),d.grip=M):d.grip=null}let O=()=>{_&&o.gripWorld(_,M)},N=q=>{if(T===null)return;let ft=(q-T)/Te,St=0;if(ft>=0&&ft<So-1.5)for(let w of Nf)ft>=w.b&&ft<w.b+w.d&&(St=.35+.65*Math.exp(-(ft-w.b)*2.4));C.forEach((w,v)=>w.voice=St*(.85+.15*Math.sin(v*2.1)))};function Z(q=!0,ft=a.others){t.init();let St=.2;if(t.ctx){let v=m.on?m.jumpToSong():m.start();v!==null&&(St=Math.max(.05,v-t.ctx.currentTime))}T=i.time+St,C=ft,ft.forEach(v=>v.setMode("sing"));let w=++L;return q&&Uf.forEach((v,V)=>I(St+v*Te).then(()=>w===L&&n.lyric(Ae.lyrics[V]))),I(St+So*Te).then(()=>w===L&&n.lyric(null)),St+So*Te}function Q(){L++,n.lyric(null)}function ht(){_=null,d.grip=null,T=null,f.clear(),c.clear(),s.shake.amp=0,o.knife.visible=!1,o.server.visible=!1,r.mood.room=0,r.mood.candle=1,a.all.forEach(q=>{q.setMode("idle"),q.voice=0,q.eyesClosed=0,q.smileAmt=.8,q.leanTarget=0,q.mouthOpenTarget=0,q.pucker=0}),d.root.position.set(...Mo.pos),d.root.rotation.y=Mo.yaw,a.othersLookAtCake(),d.lookAt(a.camLook),n.cutHint(!1),n.bigGreeting(!1),n.endBar(!1),n.letter(!1),n.hidePrompt(),n.lyric(null),D("intro")}async function Mt(){n.headline(!0),d.setMode("clap"),d.smileAmt=1,d.lookAt(a.camLook),a.others.forEach(St=>St.smileAmt=1),a.othersLookAtKaviya();let q=Z(!0);window.innerWidth/window.innerHeight<.8?B("panMom",3.4,me.out).then(()=>B("family",q*.3)).then(()=>B("panKaviya",q*.3)):B("family",3.6,me.out),I(q*.45).then(()=>a.othersLookAtCake()),I(q*.7).then(()=>a.othersLookAtKaviya());let ft=I(4).then(()=>n.ask("",[{id:"wish",label:"Make a wish \u2728",kind:"primary"}]));await Promise.race([I(q+.6),ft]),T=null,Q(),n.hidePrompt(),m.setLevel(.5,2)}async function _t(){a.setOthers("idle",{smile:.95}),a.others.forEach(q=>q.voice=0),a.othersLookAtKaviya(),d.setMode("wish"),d.eyesClosed=1,d.lookAt(a.cakeLook),n.headline(!1),B("wish",2.6),await I(1.5),h.burst(d.headWorld().add(g(0,.7,0)),14,.8,.5),y=await n.wish(),t.wishMagic()}async function Ut(){d.eyesClosed=0,a.othersLookAtCake(),d.lookAt(p),d.setMode("blow"),d.leanTarget=0,d.pucker=0,B("blow",2.2),await I(1),await n.ask(`Take a deep breath, ${Ae.pet}\u2026 and blow out the candles \u{1F56F}\uFE0F`,[{id:"blow",label:"Blow the candles \u{1F4A8}",kind:"primary"}]),n.hidePrompt(),m.setLevel(.3,1),d.leanTarget=-.06,d.smileAmt=.6,t.inhale(),await I(.8),d.leanTarget=.16,d.pucker=1,d.mouthOpenTarget=.25,t.blow();let q={on:!0},ft=g(0,0,0),St=g(0,0,0),w=()=>{q.on&&(d.mouthWorld(ft),St.copy(p).sub(ft).normalize(),u.emit(ft.clone().addScaledVector(St,.12),St,5.5),u.emit(ft.clone().addScaledVector(St,.12),St,4.5))};i.updaters.push(w);let v=Fe(d.mouthWorld(ft).distanceTo(p)/5.5,.25,1),V=i.cake.candles.map(X=>({c:X,d:X.g.getWorldPosition(g(0,0,0)).distanceTo(ft)})).sort((X,lt)=>X.d-lt.d);await Promise.all(V.map(({c:X},lt)=>(async()=>{await I(v*.8+lt*.12),await U(.4,J=>X.flame.blow=J,me.out),await I(.12),await U(.22,J=>X.flame.life=1-J,me.in),X.flame.blow=0,l.emit(X.flame.group.getWorldPosition(g(0,0,0)),6),t.poof()})())),q.on=!1,i.updaters.splice(i.updaters.indexOf(w),1),d.pucker=0,d.mouthOpenTarget=0,d.leanTarget=0,U(1.2,X=>r.mood.candle=1-X,me.out),U(2.6,X=>r.mood.room=X,me.inOutSine),m.setLevel(.85,2),t.applause(4.5),t.pop(),I(.15).then(()=>t.sparkle()),a.setOthers("cheer",{smile:1}),a.othersLookAtKaviya(),d.setMode("joy"),d.lookAt(a.camLook),e.burst(0,window.innerHeight,70,{angle:-Math.PI*.32,spread:.9}),e.burst(window.innerWidth,window.innerHeight,70,{angle:-Math.PI*.68,spread:.9}),n.floatWish(y),h.burst(p.clone().add(g(0,.4,0)),40,1.1,1.4),await I(2.6),a.setOthers("clap",{smile:1}),d.setMode("heart"),await Promise.all(i.cake.candles.map((X,lt)=>I(lt*.1).then(()=>U(.9,J=>{X.g.position.y=X.base.y+J*.9,X.mats.forEach(Ft=>Ft.opacity=1-J)},me.in)))),i.cake.setCandlesVisible(!1),a.setOthers("idle",{smile:1}),a.othersLookAtCake(),await I(.5)}let rt={idx:0,phi:ln,pv:0,extraY:0,saw:{x:0,v:0},sawT:0,pitch:.1,roll:0,depthLock:-1},H=Oe+ue+.5,Y=Oe+0;function at(q){let ft=te(H,Y,rt.pv)+rt.extraY,St=Math.sin(q*8.5)*.028*rt.saw.x;return o.poseKnife({phi:rt.phi,base:x,r0:0,y:ft,along:St,pitchAngle:rt.pitch,roll:rt.roll}),Fe((Oe+ue-ft)/ue)}let ut=q=>{if(!o.knife.visible)return;let ft=at(q),St=i.cake.slits[rt.idx];St&&rt.depthLock<0&&(St.mat.uniforms.uDepth.value=ft)},et=(q,ft,St,w)=>{let v=Math.exp(-St*w),V=q.x-ft,X=(q.v+St*V)*w;q.v=(q.v-St*X)*v,q.x=ft+(V+X)*v},Tt=q=>Ye(Ve*.55,ue,q).add(g(0,Oe,0));async function Pt(){d.setMode("cut"),d.lookAt(Tt(ln)),d.leanTarget=.04,o.knife.visible=!0,rt.phi=ln,rt.idx=0,rt.pv=0,rt.saw={x:0,v:0},rt.depthLock=-1,rt.extraY=1.6,rt.roll=.35,at(i.time),z(o.knife),t.clink(),B("cut",2.4),m.setLevel(.6,2),await U(1.4,q=>{rt.extraY=1.6*(1-q),rt.roll=.35*(1-q)},me.out),await I(.3)}function P(q,ft){for(let w=0;w<ft;w++){let v=Ye(.3+Math.random()*(Ve-.4),ue,q);v.y+=Oe,c.emit(v,1,{spread:.06,speed:.35,up:.45,floor:Oe+ue,size:[.008,.018]})}let St=Ye(Ve+.02,ue*Math.random(),q);St.y+=Oe,c.emit(St,1,{spread:.04,speed:.3,up:.2,floor:Oe,dir:new R(Math.sin(q),0,Math.cos(q)),size:[.01,.02]})}function tt(q,ft){return new Promise(St=>{rt.phi=ft,rt.idx=q,rt.depthLock=-1,rt.pv=0;let w={x:0,v:0},v=0,V=null,X=!1,lt=0,J=0,Ft=!1,Et=0,Rt=Fe(window.innerHeight*.38,160,300);d.lookAt(Tt(ft));let Nt=dt=>{dt.target.closest&&dt.target.closest("button, .modal, textarea")||(V=dt.clientY,t.init())},pt=dt=>{V===null||X||(v=Fe((dt.clientY-V)/Rt))},Ct=()=>{V!==null&&(V=null,!X&&v<.96&&(v=0))},kt=dt=>{["Space","Enter","ArrowDown"].includes(dt.code)&&(dt.preventDefault(),Bt())},Bt=()=>{X||(X=!0,J=v,lt=0)},At=[["pointerdown",Nt],["pointermove",pt],["pointerup",Ct],["pointercancel",Ct],["keydown",kt]];At.forEach(([dt,mt])=>window.addEventListener(dt,mt)),i.autoCut=Bt;let Yt=(dt,mt)=>{if(Ft)return;X&&(lt+=mt/2.4,v=te(J,1,me.inOutSine(Fe(lt))));let gt=w.x;et(w,v,X?7:9,mt),rt.pv=Fe(w.x);let xt=Math.abs(w.x-gt)/Math.max(mt,1e-4),ct=rt.pv>.28&&rt.pv<.995;et(rt.saw,ct&&xt>.04?1:0,6,mt),t.scrape(ct?Fe(xt*1.4):0),ct&&xt>.05&&dt-Et>.09&&(Et=dt,P(ft,1)),d.leanTarget=.04+.1*rt.pv,rt.pv>.985&&v>.95&&F()},F=async()=>{Ft=!0,At.forEach(([mt,gt])=>window.removeEventListener(mt,gt)),i.autoCut=null,n.cutHint(!1),t.scrape(0),rt.pv=1,rt.depthLock=1,i.cake.slits[q].mat.uniforms.uDepth.value=1,t.thunk(),P(ft,8);let dt=rt.saw.x;U(.4,mt=>rt.saw.x=dt*(1-mt),me.out),U(.6,mt=>{let gt=Math.sin(mt*Math.PI*2)*(1-mt)*.006;i.cake.root.scale.set(1+gt,1-gt*1.5,1+gt)},me.linear),await I(.4),await U(1.1,mt=>rt.pv=1-mt,me.inOutSine),rt.pv=0,i.updaters.splice(i.updaters.indexOf(Yt),1),St()};i.updaters.push(Yt)})}async function it(){await Pt(),n.cutHint(!0),n.ask(`Now cut the cake, ${Ae.pet} \u{1F52A}`,[{id:"auto",label:"Tap here to cut",kind:"ghost"}],"top").then(()=>i.autoCut&&i.autoCut()),await tt(0,ln),a.setOthers("clap",{smile:1}),I(1.6).then(()=>a.setOthers("idle",{smile:1})),t.applause(1.4),n.hidePrompt(),d.lookAt(Tt(Qe));let q=d.root.position.clone();U(1.6,ft=>{d.root.position.x=te(q.x,-3.6,ft),d.root.position.z=te(q.z,-1.75,ft)},me.inOutSine),await U(1.6,ft=>{rt.phi=te(ln,Qe,ft),rt.extraY=Math.sin(ft*Math.PI)*.35},me.inOutSine),rt.extraY=0,n.cutHint(!0),n.ask("One more \u2014 a perfect slice for you \u2728",[{id:"auto",label:"Tap here to cut",kind:"ghost"}],"top").then(()=>i.autoCut&&i.autoCut()),await tt(1,Qe),n.hidePrompt(),t.applause(1.6),a.setOthers("clap",{smile:1}),await U(1,ft=>{rt.extraY=ft*1.2,rt.roll=ft*.3},me.inOutSine),z(null),o.knife.visible=!1,a.setOthers("idle",{smile:1})}async function ot(){let q=i.cake,ft=o.server,St=g(0,1,0),w=E.clone(),v=Oe+.045,V=g(Fi.x,xo,Fi.z),X=-.2,lt=2*Ve*Math.sin(Ni)/(3*Ni),J=.3,Ft=lt-J,Et=q.rig.position.clone();ft.visible=!0;let Rt=g(0,0,0),Nt=0,pt=0,Ct=()=>{if(ft.position.copy(Rt),ft.rotation.y=xi-Math.PI/2+pt,Nt>0){let gt=w.clone().multiplyScalar(Ft).applyAxisAngle(St,pt);q.rig.position.set(te(Et.x,Rt.x+gt.x,Nt),te(Et.y,Rt.y+.035,Nt),te(Et.z,Rt.z+gt.z,Nt)),q.rig.rotation.y=pt}};i.updaters.push(Ct),Rt.copy(w).multiplyScalar(2.7).setY(v),Ct(),z(ft),d.setMode("cut"),d.lookAt(q.rig.position.clone().add(g(0,.5,0))),B("serve",2.6),m.setLevel(.7,2),t.slide(),q.hideSlits(),await U(1.4,gt=>Rt.copy(w).multiplyScalar(te(2.7,J,gt)).setY(v),me.inOutSine),t.clink(),await U(.45,gt=>Nt=gt,me.inOutSine);let kt=Rt.clone(),Bt=V.clone().sub(w.clone().multiplyScalar(Ft).applyAxisAngle(St,X)).setY(V.y+.1),At=d.root.position.clone(),Yt=d.root.rotation.y;q.showSmear(),P(xi,10),t.sparkle(5),d.lookAt(V.clone().add(g(0,.4,0))),U(2.8,gt=>{d.root.position.x=te(At.x,-4.15,gt),d.root.position.z=te(At.z,1.55,gt),d.root.rotation.y=te(Yt,ae(78),gt)},me.inOutSine),await U(2.8,gt=>{Rt.x=te(kt.x,Bt.x,gt),Rt.z=te(kt.z,Bt.z,gt),Rt.y=te(kt.y,Bt.y,gt)+Math.sin(gt*Math.PI)*.75,pt=X*gt},me.inOutSine),await U(.6,gt=>Rt.y=te(Bt.y,V.y+.004,gt),me.inOutSine),t.thunk(),t.slide(),Nt=0;let F=Rt.clone();await U(1.2,gt=>{let xt=w.clone().multiplyScalar(gt*2.4).applyAxisAngle(St,pt);Rt.set(F.x+xt.x,F.y,F.z+xt.z)},me.inOutSine);let dt=q.rig.position.clone();await U(.2,gt=>q.rig.position.y=te(dt.y,V.y,gt),me.in),q.rig.position.y=V.y,t.clink(),z(null);let mt=Rt.clone();await U(.8,gt=>Rt.set(mt.x+w.x*gt*1.5,mt.y+gt*.9,mt.z+w.z*gt*1.5),me.in),i.updaters.splice(i.updaters.indexOf(Ct),1),ft.visible=!1,d.setMode("idle")}async function st(){let q=i.cake;B("final",3.4,me.inOutSine),a.setOthers("cheer",{smile:1}),a.othersLookAtKaviya(),d.setMode("joy"),d.lookAt(a.camLook),n.headline(!1),n.bigGreeting(!0),m.setLevel(1,1.5),t.applause(6),t.sparkle(12),t.pop();for(let St=0;St<4;St++)I(St*.45).then(()=>{e.burst(window.innerWidth*(.15+.23*St),window.innerHeight*.95,60,{angle:-Math.PI/2+(St-1.5)*.12,spread:1,speed:1100}),t.pop()});e.shower(9);let ft=q.rig.position.clone().add(g(0,.7,0));h.burst(ft,50,1,1.2),I(.8).then(()=>h.burst(ft,30,1.2,1.2)),await I(3.6),n.bigGreeting(!1),d.setMode("heart"),Z(!0,a.others),n.endBar(!0),await I(1)}async function wt({skipIntro:q=!1}={}){ht(),q||await n.waitOpen(),t.init(),await Mt(),await _t(),await Ut(),await it(),await ot(),await st()}function yt(){n.letter(!1),n.endBar(!1),n.bigGreeting(!1),e.p.length=0,rt.depthLock=-1,i.updaters.length=0,i.updaters.push(O,ut,N),Pf(i),i.cake.root.scale.set(1,1,1),wt({skipIntro:!0})}return i.updaters.push(O,ut,N),n.onReadNote(()=>n.letter(!0)),n.onLetterBack(()=>n.letter(!1)),n.onReplay(yt),{run:wt,restart:yt,kn:rt,K:d,shotFor:S,moveShot:B,setShot:D,wait:I}}var Eo=i=>document.getElementById(i),uy=new URLSearchParams(location.search),Bf=uy.has("test");function dy(i){console.warn(i);let t=Oh();t.el.intro.classList.add("hidden"),t.letter(!0),t.el.letterBack.style.display="none"}var yi;try{yi=Cf(Eo("gl"))}catch(i){throw dy(i),i}var Of=Oh(),ei=new jl,xs=new ec(Eo("fx")),Hf=Ff({world:yi,sound:ei,confetti:xs,ui:Of});Eo("mute").addEventListener("click",()=>{ei.init(),ei.setMuted(!ei.muted),Eo("mute").classList.toggle("off",ei.muted),Eo("mute").setAttribute("aria-label",ei.muted?"Turn sound on":"Turn sound off")});document.addEventListener("visibilitychange",()=>{ei.ctx&&(document.hidden?ei.ctx.suspend():ei.ctx.resume())});function fy(i){Ql(yi,i),xs.update(i),yi.engine.render(),xs.draw()}Bf&&(window.__bday={V3:(i,t,e)=>new R(i,t,e),world:yi,story:Hf,sound:ei,ui:Of,confetti:xs,CONFIG:Ae,step:i=>{Ql(yi,i),xs.update(i)},render:()=>{yi.engine.render(),xs.draw()},async advance(i,t=1/30){for(let e=0;e<i;e+=t)Ql(yi,t),xs.update(t),await new Promise(n=>setTimeout(n,0))}});if(!Bf){let i=performance.now(),t=0,e=0,n=0,s=r=>{let o=Math.min(.05,(r-i)/1e3);i=r,fy(o),e++,e>60&&n<2&&(t=t*.95+o*.05,e%120===0&&t>.042&&(n++,yi.engine.lowerQuality(n),t=.02)),requestAnimationFrame(s)};requestAnimationFrame(s)}Hf.run();})();
/*! Bundled license information:

three/build/three.core.js:
three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2025 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
