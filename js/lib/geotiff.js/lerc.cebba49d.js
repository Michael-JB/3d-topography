parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"WwHM":[function(require,module,exports) {
var define;
var e;!function(){var t,r,i,a,n,s,l,f,o=(t={defaultNoDataValue:-3.4027999387901484e38,decode:function(e,s){var l=(s=s||{}).encodedMaskData||null===s.encodedMaskData,f=n(e,s.inputOffset||0,l),o=null!==s.noDataValue?s.noDataValue:t.defaultNoDataValue,u=r(f,s.pixelType||Float32Array,s.encodedMaskData,o,s.returnMask),c={width:f.width,height:f.height,pixelData:u.resultPixels,minValue:u.minValue,maxValue:f.pixels.maxValue,noDataValue:o};return u.resultMask&&(c.maskData=u.resultMask),s.returnEncodedMask&&f.mask&&(c.encodedMaskData=f.mask.bitset?f.mask.bitset:null),s.returnFileInfo&&(c.fileInfo=i(f),s.computeUsedBitDepths&&(c.fileInfo.bitDepths=a(f))),c}},r=function(e,t,r,i,a){var n,l,f,o=0,u=e.pixels.numBlocksX,c=e.pixels.numBlocksY,d=Math.floor(e.width/u),h=Math.floor(e.height/c),m=2*e.maxZError,p=Number.MAX_VALUE;r=r||(e.mask?e.mask.bitset:null),l=new t(e.width*e.height),a&&r&&(f=new Uint8Array(e.width*e.height));for(var g,x,w=new Float32Array(d*h),k=0;k<=c;k++){var y=k!==c?h:e.height%c;if(0!==y)for(var v=0;v<=u;v++){var b=v!==u?d:e.width%u;if(0!==b){var U,I,V,M,D=k*e.width*h+v*d,A=e.width-b,B=e.pixels.blocks[o];if(B.encoding<2?(0===B.encoding?U=B.rawData:(s(B.stuffedData,B.bitsPerPixel,B.numValidPixels,B.offset,m,w,e.pixels.maxValue),U=w),I=0):V=2===B.encoding?0:B.offset,r)for(x=0;x<y;x++){for(7&D&&(M=r[D>>3],M<<=7&D),g=0;g<b;g++)7&D||(M=r[D>>3]),128&M?(f&&(f[D]=1),p=p>(n=B.encoding<2?U[I++]:V)?n:p,l[D++]=n):(f&&(f[D]=0),l[D++]=i),M<<=1;D+=A}else if(B.encoding<2)for(x=0;x<y;x++){for(g=0;g<b;g++)p=p>(n=U[I++])?n:p,l[D++]=n;D+=A}else for(p=p>V?V:p,x=0;x<y;x++){for(g=0;g<b;g++)l[D++]=V;D+=A}if(1===B.encoding&&I!==B.numValidPixels)throw"Block and Mask do not match";o++}}}return{resultPixels:l,resultMask:f,minValue:p}},i=function(e){return{fileIdentifierString:e.fileIdentifierString,fileVersion:e.fileVersion,imageType:e.imageType,height:e.height,width:e.width,maxZError:e.maxZError,eofOffset:e.eofOffset,mask:e.mask?{numBlocksX:e.mask.numBlocksX,numBlocksY:e.mask.numBlocksY,numBytes:e.mask.numBytes,maxValue:e.mask.maxValue}:null,pixels:{numBlocksX:e.pixels.numBlocksX,numBlocksY:e.pixels.numBlocksY,numBytes:e.pixels.numBytes,maxValue:e.pixels.maxValue,noDataValue:e.noDataValue}}},a=function(e){for(var t=e.pixels.numBlocksX*e.pixels.numBlocksY,r={},i=0;i<t;i++){var a=e.pixels.blocks[i];0===a.encoding?r.float32=!0:1===a.encoding?r[a.bitsPerPixel]=!0:r[0]=!0}return Object.keys(r)},n=function(e,t,r){var i={},a=new Uint8Array(e,t,10);if(i.fileIdentifierString=String.fromCharCode.apply(null,a),"CntZImage"!==i.fileIdentifierString.trim())throw"Unexpected file identifier string: "+i.fileIdentifierString;t+=10;var n=new DataView(e,t,24);if(i.fileVersion=n.getInt32(0,!0),i.imageType=n.getInt32(4,!0),i.height=n.getUint32(8,!0),i.width=n.getUint32(12,!0),i.maxZError=n.getFloat64(16,!0),t+=24,!r)if(n=new DataView(e,t,16),i.mask={},i.mask.numBlocksY=n.getUint32(0,!0),i.mask.numBlocksX=n.getUint32(4,!0),i.mask.numBytes=n.getUint32(8,!0),i.mask.maxValue=n.getFloat32(12,!0),t+=16,i.mask.numBytes>0){var s=new Uint8Array(Math.ceil(i.width*i.height/8)),l=(n=new DataView(e,t,i.mask.numBytes)).getInt16(0,!0),f=2,o=0;do{if(l>0)for(;l--;)s[o++]=n.getUint8(f++);else{var u=n.getUint8(f++);for(l=-l;l--;)s[o++]=u}l=n.getInt16(f,!0),f+=2}while(f<i.mask.numBytes);if(-32768!==l||o<s.length)throw"Unexpected end of mask RLE encoding";i.mask.bitset=s,t+=i.mask.numBytes}else 0==(i.mask.numBytes|i.mask.numBlocksY|i.mask.maxValue)&&(i.mask.bitset=new Uint8Array(Math.ceil(i.width*i.height/8)));n=new DataView(e,t,16),i.pixels={},i.pixels.numBlocksY=n.getUint32(0,!0),i.pixels.numBlocksX=n.getUint32(4,!0),i.pixels.numBytes=n.getUint32(8,!0),i.pixels.maxValue=n.getFloat32(12,!0),t+=16;var c=i.pixels.numBlocksX,d=i.pixels.numBlocksY,h=c+(i.width%c>0?1:0),m=d+(i.height%d>0?1:0);i.pixels.blocks=new Array(h*m);for(var p=0,g=0;g<m;g++)for(var x=0;x<h;x++){var w=0,k=e.byteLength-t;n=new DataView(e,t,Math.min(10,k));var y={};i.pixels.blocks[p++]=y;var v=n.getUint8(0);if(w++,y.encoding=63&v,y.encoding>3)throw"Invalid block encoding ("+y.encoding+")";if(2!==y.encoding){if(0!==v&&2!==v){if(v>>=6,y.offsetType=v,2===v)y.offset=n.getInt8(1),w++;else if(1===v)y.offset=n.getInt16(1,!0),w+=2;else{if(0!==v)throw"Invalid block offset type";y.offset=n.getFloat32(1,!0),w+=4}if(1===y.encoding)if(v=n.getUint8(w),w++,y.bitsPerPixel=63&v,v>>=6,y.numValidPixelsType=v,2===v)y.numValidPixels=n.getUint8(w),w++;else if(1===v)y.numValidPixels=n.getUint16(w,!0),w+=2;else{if(0!==v)throw"Invalid valid pixel count type";y.numValidPixels=n.getUint32(w,!0),w+=4}}var b;if(t+=w,3!==y.encoding)if(0===y.encoding){var U=(i.pixels.numBytes-1)/4;if(U!==Math.floor(U))throw"uncompressed block has invalid length";b=new ArrayBuffer(4*U),new Uint8Array(b).set(new Uint8Array(e,t,4*U));var I=new Float32Array(b);y.rawData=I,t+=4*U}else if(1===y.encoding){var V=Math.ceil(y.numValidPixels*y.bitsPerPixel/8),M=Math.ceil(V/4);b=new ArrayBuffer(4*M),new Uint8Array(b).set(new Uint8Array(e,t,V)),y.stuffedData=new Uint32Array(b),t+=V}}else t++}return i.eofOffset=t,i},s=function(e,t,r,i,a,n,s){var l,f,o,u=(1<<t)-1,c=0,d=0,h=Math.ceil((s-i)/a),m=4*e.length-Math.ceil(t*r/8);for(e[e.length-1]<<=8*m,l=0;l<r;l++){if(0===d&&(o=e[c++],d=32),d>=t)f=o>>>d-t&u,d-=t;else{var p=t-d;f=(o&u)<<p&u,f+=(o=e[c++])>>>(d=32-p)}n[l]=f<h?i+f*a:s}return n},t),u=function(){"use strict";var e=function(e,t,r,i,a,n,s,l){var f,o,u,c,d,h=(1<<r)-1,m=0,p=0,g=4*e.length-Math.ceil(r*i/8);if(e[e.length-1]<<=8*g,a)for(f=0;f<i;f++)0===p&&(u=e[m++],p=32),p>=r?(o=u>>>p-r&h,p-=r):(o=(u&h)<<(c=r-p)&h,o+=(u=e[m++])>>>(p=32-c)),t[f]=a[o];else for(d=Math.ceil((l-n)/s),f=0;f<i;f++)0===p&&(u=e[m++],p=32),p>=r?(o=u>>>p-r&h,p-=r):(o=(u&h)<<(c=r-p)&h,o+=(u=e[m++])>>>(p=32-c)),t[f]=o<d?n+o*s:l},t=function(e,t,r,i,a,n){var s,l=(1<<t)-1,f=0,o=0,u=0,c=0,d=0,h=[],m=4*e.length-Math.ceil(t*r/8);e[e.length-1]<<=8*m;var p=Math.ceil((n-i)/a);for(o=0;o<r;o++)0===c&&(s=e[f++],c=32),c>=t?(d=s>>>c-t&l,c-=t):(d=(s&l)<<(u=t-c)&l,d+=(s=e[f++])>>>(c=32-u)),h[o]=d<p?i+d*a:n;return h.unshift(i),h},r=function(e,t,r,i,a,n,s,l){var f,o,u,c,d=(1<<r)-1,h=0,m=0,p=0;if(a)for(f=0;f<i;f++)0===m&&(u=e[h++],m=32,p=0),m>=r?(o=u>>>p&d,m-=r,p+=r):(o=u>>>p&d,m=32-(c=r-m),o|=((u=e[h++])&(1<<c)-1)<<r-c,p=c),t[f]=a[o];else{var g=Math.ceil((l-n)/s);for(f=0;f<i;f++)0===m&&(u=e[h++],m=32,p=0),m>=r?(o=u>>>p&d,m-=r,p+=r):(o=u>>>p&d,m=32-(c=r-m),o|=((u=e[h++])&(1<<c)-1)<<r-c,p=c),t[f]=o<g?n+o*s:l}return t},i=function(e,t,r,i,a,n){var s,l=(1<<t)-1,f=0,o=0,u=0,c=0,d=0,h=0,m=[],p=Math.ceil((n-i)/a);for(o=0;o<r;o++)0===c&&(s=e[f++],c=32,h=0),c>=t?(d=s>>>h&l,c-=t,h+=t):(d=s>>>h&l,c=32-(u=t-c),d|=((s=e[f++])&(1<<u)-1)<<t-u,h=u),m[o]=d<p?i+d*a:n;return m.unshift(i),m},a=function(e,t,r,i){var a,n,s,l,f=(1<<r)-1,o=0,u=0,c=4*e.length-Math.ceil(r*i/8);for(e[e.length-1]<<=8*c,a=0;a<i;a++)0===u&&(s=e[o++],u=32),u>=r?(n=s>>>u-r&f,u-=r):(n=(s&f)<<(l=r-u)&f,n+=(s=e[o++])>>>(u=32-l)),t[a]=n;return t},n=function(e,t,r,i){var a,n,s,l,f=(1<<r)-1,o=0,u=0,c=0;for(a=0;a<i;a++)0===u&&(s=e[o++],u=32,c=0),u>=r?(n=s>>>c&f,u-=r,c+=r):(n=s>>>c&f,u=32-(l=r-u),n|=((s=e[o++])&(1<<l)-1)<<r-l,c=l),t[a]=n;return t},s={HUFFMAN_LUT_BITS_MAX:12,computeChecksumFletcher32:function(e){for(var t=65535,r=65535,i=e.length,a=Math.floor(i/2),n=0;a;){var s=a>=359?359:a;a-=s;do{t+=e[n++]<<8,r+=t+=e[n++]}while(--s);t=(65535&t)+(t>>>16),r=(65535&r)+(r>>>16)}return 1&i&&(r+=t+=e[n]<<8),((r=(65535&r)+(r>>>16))<<16|(t=(65535&t)+(t>>>16)))>>>0},readHeaderInfo:function(e,t){var r=t.ptr,i=new Uint8Array(e,r,6),a={};if(a.fileIdentifierString=String.fromCharCode.apply(null,i),0!==a.fileIdentifierString.lastIndexOf("Lerc2",0))throw"Unexpected file identifier string (expect Lerc2 ): "+a.fileIdentifierString;r+=6;var n,s=new DataView(e,r,8),l=s.getInt32(0,!0);if(a.fileVersion=l,r+=4,l>=3&&(a.checksum=s.getUint32(4,!0),r+=4),s=new DataView(e,r,12),a.height=s.getUint32(0,!0),a.width=s.getUint32(4,!0),r+=8,l>=4?(a.numDims=s.getUint32(8,!0),r+=4):a.numDims=1,s=new DataView(e,r,40),a.numValidPixel=s.getUint32(0,!0),a.microBlockSize=s.getInt32(4,!0),a.blobSize=s.getInt32(8,!0),a.imageType=s.getInt32(12,!0),a.maxZError=s.getFloat64(16,!0),a.zMin=s.getFloat64(24,!0),a.zMax=s.getFloat64(32,!0),r+=40,t.headerInfo=a,t.ptr=r,l>=3&&(n=l>=4?52:48,this.computeChecksumFletcher32(new Uint8Array(e,r-n,a.blobSize-14))!==a.checksum))throw"Checksum failed.";return!0},checkMinMaxRanges:function(e,t){var r=t.headerInfo,i=this.getDataTypeArray(r.imageType),a=r.numDims*this.getDataTypeSize(r.imageType),n=this.readSubArray(e,t.ptr,i,a),s=this.readSubArray(e,t.ptr+a,i,a);t.ptr+=2*a;var l,f=!0;for(l=0;l<r.numDims;l++)if(n[l]!==s[l]){f=!1;break}return r.minValues=n,r.maxValues=s,f},readSubArray:function(e,t,r,i){var a;if(r===Uint8Array)a=new Uint8Array(e,t,i);else{var n=new ArrayBuffer(i);new Uint8Array(n).set(new Uint8Array(e,t,i)),a=new r(n)}return a},readMask:function(e,t){var r,i,a=t.ptr,n=t.headerInfo,s=n.width*n.height,l=n.numValidPixel,f=new DataView(e,a,4),o={};if(o.numBytes=f.getUint32(0,!0),a+=4,(0===l||s===l)&&0!==o.numBytes)throw"invalid mask";if(0===l)r=new Uint8Array(Math.ceil(s/8)),o.bitset=r,i=new Uint8Array(s),t.pixels.resultMask=i,a+=o.numBytes;else if(o.numBytes>0){r=new Uint8Array(Math.ceil(s/8));var u=(f=new DataView(e,a,o.numBytes)).getInt16(0,!0),c=2,d=0,h=0;do{if(u>0)for(;u--;)r[d++]=f.getUint8(c++);else for(h=f.getUint8(c++),u=-u;u--;)r[d++]=h;u=f.getInt16(c,!0),c+=2}while(c<o.numBytes);if(-32768!==u||d<r.length)throw"Unexpected end of mask RLE encoding";i=new Uint8Array(s);var m=0,p=0;for(p=0;p<s;p++)7&p?(m=r[p>>3],m<<=7&p):m=r[p>>3],128&m&&(i[p]=1);t.pixels.resultMask=i,o.bitset=r,a+=o.numBytes}return t.ptr=a,t.mask=o,!0},readDataOneSweep:function(e,t,r,i){var a,n=t.ptr,l=t.headerInfo,f=l.numDims,o=l.width*l.height,u=l.imageType,c=l.numValidPixel*s.getDataTypeSize(u)*f,d=t.pixels.resultMask;if(r===Uint8Array)a=new Uint8Array(e,n,c);else{var h=new ArrayBuffer(c);new Uint8Array(h).set(new Uint8Array(e,n,c)),a=new r(h)}if(a.length===o*f)t.pixels.resultPixels=i?s.swapDimensionOrder(a,o,f,r,!0):a;else{t.pixels.resultPixels=new r(o*f);var m=0,p=0,g=0,x=0;if(f>1){if(i){for(p=0;p<o;p++)if(d[p])for(x=p,g=0;g<f;g++,x+=o)t.pixels.resultPixels[x]=a[m++]}else for(p=0;p<o;p++)if(d[p])for(x=p*f,g=0;g<f;g++)t.pixels.resultPixels[x+g]=a[m++]}else for(p=0;p<o;p++)d[p]&&(t.pixels.resultPixels[p]=a[m++])}return n+=c,t.ptr=n,!0},readHuffmanTree:function(e,t){var r=this.HUFFMAN_LUT_BITS_MAX,i=new DataView(e,t.ptr,16);if(t.ptr+=16,i.getInt32(0,!0)<2)throw"unsupported Huffman version";var a=i.getInt32(4,!0),n=i.getInt32(8,!0),f=i.getInt32(12,!0);if(n>=f)return!1;var o=new Uint32Array(f-n);s.decodeBits(e,t,o);var u,c,d,h,m=[];for(u=n;u<f;u++)m[c=u-(u<a?0:a)]={first:o[u-n],second:null};var p=e.byteLength-t.ptr,g=Math.ceil(p/4),x=new ArrayBuffer(4*g);new Uint8Array(x).set(new Uint8Array(e,t.ptr,p));var w,k=new Uint32Array(x),y=0,v=0;for(w=k[0],u=n;u<f;u++)(h=m[c=u-(u<a?0:a)].first)>0&&(m[c].second=w<<y>>>32-h,32-y>=h?32===(y+=h)&&(y=0,w=k[++v]):(y+=h-32,w=k[++v],m[c].second|=w>>>32-y));var b=0,U=0,I=new l;for(u=0;u<m.length;u++)void 0!==m[u]&&(b=Math.max(b,m[u].first));U=b>=r?r:b;var V,M,D,A,B,P=[];for(u=n;u<f;u++)if((h=m[c=u-(u<a?0:a)].first)>0)if(V=[h,c],h<=U)for(M=m[c].second<<U-h,D=1<<U-h,d=0;d<D;d++)P[M|d]=V;else for(M=m[c].second,B=I,A=h-1;A>=0;A--)M>>>A&1?(B.right||(B.right=new l),B=B.right):(B.left||(B.left=new l),B=B.left),0!==A||B.val||(B.val=V[1]);return{decodeLut:P,numBitsLUTQick:U,numBitsLUT:b,tree:I,stuffedData:k,srcPtr:v,bitPos:y}},readHuffman:function(e,t,r,i){var a,n,l,f,o,u,c,d,h,m=t.headerInfo.numDims,p=t.headerInfo.height,g=t.headerInfo.width,x=g*p,w=this.readHuffmanTree(e,t),k=w.decodeLut,y=w.tree,v=w.stuffedData,b=w.srcPtr,U=w.bitPos,I=w.numBitsLUTQick,V=w.numBitsLUT,M=0===t.headerInfo.imageType?128:0,D=t.pixels.resultMask,A=0;U>0&&(b++,U=0);var B,P=v[b],T=1===t.encodeMode,S=new r(x*m),z=S;if(m<2||T){for(B=0;B<m;B++)if(m>1&&(z=new r(S.buffer,x*B,x),A=0),t.headerInfo.numValidPixel===g*p)for(d=0,u=0;u<p;u++)for(c=0;c<g;c++,d++){if(n=0,o=f=P<<U>>>32-I,32-U<I&&(o=f|=v[b+1]>>>64-U-I),k[o])n=k[o][1],U+=k[o][0];else for(o=f=P<<U>>>32-V,32-U<V&&(o=f|=v[b+1]>>>64-U-V),a=y,h=0;h<V;h++)if(!(a=f>>>V-h-1&1?a.right:a.left).left&&!a.right){n=a.val,U=U+h+1;break}U>=32&&(U-=32,P=v[++b]),l=n-M,T?(l+=c>0?A:u>0?z[d-g]:A,l&=255,z[d]=l,A=l):z[d]=l}else for(d=0,u=0;u<p;u++)for(c=0;c<g;c++,d++)if(D[d]){if(n=0,o=f=P<<U>>>32-I,32-U<I&&(o=f|=v[b+1]>>>64-U-I),k[o])n=k[o][1],U+=k[o][0];else for(o=f=P<<U>>>32-V,32-U<V&&(o=f|=v[b+1]>>>64-U-V),a=y,h=0;h<V;h++)if(!(a=f>>>V-h-1&1?a.right:a.left).left&&!a.right){n=a.val,U=U+h+1;break}U>=32&&(U-=32,P=v[++b]),l=n-M,T?(c>0&&D[d-1]?l+=A:u>0&&D[d-g]?l+=z[d-g]:l+=A,l&=255,z[d]=l,A=l):z[d]=l}}else for(d=0,u=0;u<p;u++)for(c=0;c<g;c++)if(d=u*g+c,!D||D[d])for(B=0;B<m;B++,d+=x){if(n=0,o=f=P<<U>>>32-I,32-U<I&&(o=f|=v[b+1]>>>64-U-I),k[o])n=k[o][1],U+=k[o][0];else for(o=f=P<<U>>>32-V,32-U<V&&(o=f|=v[b+1]>>>64-U-V),a=y,h=0;h<V;h++)if(!(a=f>>>V-h-1&1?a.right:a.left).left&&!a.right){n=a.val,U=U+h+1;break}U>=32&&(U-=32,P=v[++b]),l=n-M,z[d]=l}t.ptr=t.ptr+4*(b+1)+(U>0?4:0),t.pixels.resultPixels=S,m>1&&!i&&(t.pixels.resultPixels=s.swapDimensionOrder(S,x,m,r))},decodeBits:function(s,l,f,o,u){var c=l.headerInfo,d=c.fileVersion,h=0,m=s.byteLength-l.ptr>=5?5:s.byteLength-l.ptr,p=new DataView(s,l.ptr,m),g=p.getUint8(0);h++;var x=g>>6,w=0===x?4:3-x,k=(32&g)>0,y=31&g,v=0;if(1===w)v=p.getUint8(h),h++;else if(2===w)v=p.getUint16(h,!0),h+=2;else{if(4!==w)throw"Invalid valid pixel count type";v=p.getUint32(h,!0),h+=4}var b,U,I,V,M,D,A,B,P,T=2*c.maxZError,S=c.numDims>1?c.maxValues[u]:c.zMax;if(k){for(l.counter.lut++,B=p.getUint8(h),y,h++,V=Math.ceil((B-1)*y/8),M=Math.ceil(V/4),U=new ArrayBuffer(4*M),I=new Uint8Array(U),l.ptr+=h,I.set(new Uint8Array(s,l.ptr,V)),A=new Uint32Array(U),l.ptr+=V,P=0;B-1>>>P;)P++;V=Math.ceil(v*P/8),M=Math.ceil(V/4),U=new ArrayBuffer(4*M),(I=new Uint8Array(U)).set(new Uint8Array(s,l.ptr,V)),b=new Uint32Array(U),l.ptr+=V,D=d>=3?i(A,y,B-1,o,T,S):t(A,y,B-1,o,T,S),d>=3?r(b,f,P,v,D):e(b,f,P,v,D)}else l.counter.bitstuffer++,P=y,l.ptr+=h,P>0&&(V=Math.ceil(v*P/8),M=Math.ceil(V/4),U=new ArrayBuffer(4*M),(I=new Uint8Array(U)).set(new Uint8Array(s,l.ptr,V)),b=new Uint32Array(U),l.ptr+=V,d>=3?null==o?n(b,f,P,v):r(b,f,P,v,!1,o,T,S):null==o?a(b,f,P,v):e(b,f,P,v,!1,o,T,S))},readTiles:function(e,t,r,i){var a=t.headerInfo,n=a.width,l=a.height,f=n*l,o=a.microBlockSize,u=a.imageType,c=s.getDataTypeSize(u),d=Math.ceil(n/o),h=Math.ceil(l/o);t.pixels.numBlocksY=h,t.pixels.numBlocksX=d,t.pixels.ptr=0;var m,p,g,x,w,k,y,v,b,U,I=0,V=0,M=0,D=0,A=0,B=0,P=0,T=0,S=0,z=0,F=0,O=0,L=0,C=0,X=0,E=new r(o*o),Y=l%o||o,H=n%o||o,Z=a.numDims,_=t.pixels.resultMask,N=t.pixels.resultPixels,R=a.fileVersion>=5?14:15,Q=a.zMax;for(M=0;M<h;M++)for(A=M!==h-1?o:Y,D=0;D<d;D++)for(z=M*n*o+D*o,F=n-(B=D!==d-1?o:H),v=0;v<Z;v++){if(Z>1?(U=N,z=M*n*o+D*o,N=new r(t.pixels.resultPixels.buffer,f*v*c,f),Q=a.maxValues[v]):U=null,P=e.byteLength-t.ptr,p={},X=0,T=(m=new DataView(e,t.ptr,Math.min(10,P))).getUint8(0),X++,b=a.fileVersion>=5?4&T:0,S=T>>6&255,(T>>2&R)!==(D*o>>3&R))throw"integrity issue";if(b&&0===v)throw"integrity issue";if((w=3&T)>3)throw t.ptr+=X,"Invalid block encoding ("+w+")";if(2!==w)if(0===w){if(b)throw"integrity issue";if(t.counter.uncompressed++,t.ptr+=X,O=(O=A*B*c)<(L=e.byteLength-t.ptr)?O:L,g=new ArrayBuffer(O%c==0?O:O+c-O%c),new Uint8Array(g).set(new Uint8Array(e,t.ptr,O)),x=new r(g),C=0,_)for(I=0;I<A;I++){for(V=0;V<B;V++)_[z]&&(N[z]=x[C++]),z++;z+=F}else for(I=0;I<A;I++){for(V=0;V<B;V++)N[z++]=x[C++];z+=F}t.ptr+=C*c}else if(k=s.getDataTypeUsed(b&&u<6?4:u,S),y=s.getOnePixel(p,X,k,m),X+=s.getDataTypeSize(k),3===w)if(t.ptr+=X,t.counter.constantoffset++,_)for(I=0;I<A;I++){for(V=0;V<B;V++)_[z]&&(N[z]=b?Math.min(Q,U[z]+y):y),z++;z+=F}else for(I=0;I<A;I++){for(V=0;V<B;V++)N[z]=b?Math.min(Q,U[z]+y):y,z++;z+=F}else if(t.ptr+=X,s.decodeBits(e,t,E,y,v),X=0,b)if(_)for(I=0;I<A;I++){for(V=0;V<B;V++)_[z]&&(N[z]=E[X++]+U[z]),z++;z+=F}else for(I=0;I<A;I++){for(V=0;V<B;V++)N[z]=E[X++]+U[z],z++;z+=F}else if(_)for(I=0;I<A;I++){for(V=0;V<B;V++)_[z]&&(N[z]=E[X++]),z++;z+=F}else for(I=0;I<A;I++){for(V=0;V<B;V++)N[z++]=E[X++];z+=F}else{if(b)if(_)for(I=0;I<A;I++)for(V=0;V<B;V++)_[z]&&(N[z]=U[z]),z++;else for(I=0;I<A;I++)for(V=0;V<B;V++)N[z]=U[z],z++;t.counter.constant++,t.ptr+=X}}Z>1&&!i&&(t.pixels.resultPixels=s.swapDimensionOrder(t.pixels.resultPixels,f,Z,r))},formatFileInfo:function(e){return{fileIdentifierString:e.headerInfo.fileIdentifierString,fileVersion:e.headerInfo.fileVersion,imageType:e.headerInfo.imageType,height:e.headerInfo.height,width:e.headerInfo.width,numValidPixel:e.headerInfo.numValidPixel,microBlockSize:e.headerInfo.microBlockSize,blobSize:e.headerInfo.blobSize,maxZError:e.headerInfo.maxZError,pixelType:s.getPixelType(e.headerInfo.imageType),eofOffset:e.eofOffset,mask:e.mask?{numBytes:e.mask.numBytes}:null,pixels:{numBlocksX:e.pixels.numBlocksX,numBlocksY:e.pixels.numBlocksY,maxValue:e.headerInfo.zMax,minValue:e.headerInfo.zMin,noDataValue:e.noDataValue}}},constructConstantSurface:function(e,t){var r=e.headerInfo.zMax,i=e.headerInfo.zMin,a=e.headerInfo.maxValues,n=e.headerInfo.numDims,s=e.headerInfo.height*e.headerInfo.width,l=0,f=0,o=0,u=e.pixels.resultMask,c=e.pixels.resultPixels;if(u)if(n>1){if(t)for(l=0;l<n;l++)for(o=l*s,r=a[l],f=0;f<s;f++)u[f]&&(c[o+f]=r);else for(f=0;f<s;f++)if(u[f])for(o=f*n,l=0;l<n;l++)c[o+n]=a[l]}else for(f=0;f<s;f++)u[f]&&(c[f]=r);else if(n>1&&i!==r)if(t)for(l=0;l<n;l++)for(o=l*s,r=a[l],f=0;f<s;f++)c[o+f]=r;else for(f=0;f<s;f++)for(o=f*n,l=0;l<n;l++)c[o+l]=a[l];else for(f=0;f<s*n;f++)c[f]=r},getDataTypeArray:function(e){var t;switch(e){case 0:t=Int8Array;break;case 1:t=Uint8Array;break;case 2:t=Int16Array;break;case 3:t=Uint16Array;break;case 4:t=Int32Array;break;case 5:t=Uint32Array;break;case 6:t=Float32Array;break;case 7:t=Float64Array;break;default:t=Float32Array}return t},getPixelType:function(e){var t;switch(e){case 0:t="S8";break;case 1:t="U8";break;case 2:t="S16";break;case 3:t="U16";break;case 4:t="S32";break;case 5:t="U32";break;case 6:t="F32";break;case 7:t="F64";break;default:t="F32"}return t},isValidPixelValue:function(e,t){if(null==t)return!1;var r;switch(e){case 0:r=t>=-128&&t<=127;break;case 1:r=t>=0&&t<=255;break;case 2:r=t>=-32768&&t<=32767;break;case 3:r=t>=0&&t<=65536;break;case 4:r=t>=-2147483648&&t<=2147483647;break;case 5:r=t>=0&&t<=4294967296;break;case 6:r=t>=-3.4027999387901484e38&&t<=3.4027999387901484e38;break;case 7:r=t>=-1.7976931348623157e308&&t<=1.7976931348623157e308;break;default:r=!1}return r},getDataTypeSize:function(e){var t=0;switch(e){case 0:case 1:t=1;break;case 2:case 3:t=2;break;case 4:case 5:case 6:t=4;break;case 7:t=8;break;default:t=e}return t},getDataTypeUsed:function(e,t){var r=e;switch(e){case 2:case 4:r=e-t;break;case 3:case 5:r=e-2*t;break;case 6:r=0===t?e:1===t?2:1;break;case 7:r=0===t?e:e-2*t+1;break;default:r=e}return r},getOnePixel:function(e,t,r,i){var a=0;switch(r){case 0:a=i.getInt8(t);break;case 1:a=i.getUint8(t);break;case 2:a=i.getInt16(t,!0);break;case 3:a=i.getUint16(t,!0);break;case 4:a=i.getInt32(t,!0);break;case 5:a=i.getUInt32(t,!0);break;case 6:a=i.getFloat32(t,!0);break;case 7:a=i.getFloat64(t,!0);break;default:throw"the decoder does not understand this pixel type"}return a},swapDimensionOrder:function(e,t,r,i,a){var n=0,s=0,l=0,f=0,o=e;if(r>1)if(o=new i(t*r),a)for(n=0;n<t;n++)for(f=n,l=0;l<r;l++,f+=t)o[f]=e[s++];else for(n=0;n<t;n++)for(f=n,l=0;l<r;l++,f+=t)o[s++]=e[f];return o}},l=function(e,t,r){this.val=e,this.left=t,this.right=r};return{decode:function(e,t){var r=(t=t||{}).noDataValue,i=0,a={};if(a.ptr=t.inputOffset||0,a.pixels={},s.readHeaderInfo(e,a)){var n=a.headerInfo,l=n.fileVersion,f=s.getDataTypeArray(n.imageType);if(l>5)throw"unsupported lerc version 2."+l;s.readMask(e,a),n.numValidPixel===n.width*n.height||a.pixels.resultMask||(a.pixels.resultMask=t.maskData);var o=n.width*n.height;a.pixels.resultPixels=new f(o*n.numDims),a.counter={onesweep:0,uncompressed:0,lut:0,bitstuffer:0,constant:0,constantoffset:0};var u,c=!t.returnPixelInterleavedDims;if(0!==n.numValidPixel)if(n.zMax===n.zMin)s.constructConstantSurface(a,c);else if(l>=4&&s.checkMinMaxRanges(e,a))s.constructConstantSurface(a,c);else{var d=new DataView(e,a.ptr,2),h=d.getUint8(0);if(a.ptr++,h)s.readDataOneSweep(e,a,f,c);else if(l>1&&n.imageType<=1&&Math.abs(n.maxZError-.5)<1e-5){var m=d.getUint8(1);if(a.ptr++,a.encodeMode=m,m>2||l<4&&m>1)throw"Invalid Huffman flag "+m;m?s.readHuffman(e,a,f,c):s.readTiles(e,a,f,c)}else s.readTiles(e,a,f,c)}a.eofOffset=a.ptr,t.inputOffset?(u=a.headerInfo.blobSize+t.inputOffset-a.ptr,Math.abs(u)>=1&&(a.eofOffset=t.inputOffset+a.headerInfo.blobSize)):(u=a.headerInfo.blobSize-a.ptr,Math.abs(u)>=1&&(a.eofOffset=a.headerInfo.blobSize));var p={width:n.width,height:n.height,pixelData:a.pixels.resultPixels,minValue:n.zMin,maxValue:n.zMax,validPixelCount:n.numValidPixel,dimCount:n.numDims,dimStats:{minValues:n.minValues,maxValues:n.maxValues},maskData:a.pixels.resultMask};if(a.pixels.resultMask&&s.isValidPixelValue(n.imageType,r)){var g=a.pixels.resultMask;for(i=0;i<o;i++)g[i]||(p.pixelData[i]=r);p.noDataValue=r}return a.noDataValue=r,t.returnFileInfo&&(p.fileInfo=s.formatFileInfo(a)),p}},getBandCount:function(e){for(var t=0,r=0,i={ptr:0,pixels:{}};r<e.byteLength-58;)s.readHeaderInfo(e,i),r+=i.headerInfo.blobSize,t++,i.ptr=r;return t}}}(),c=(l=new ArrayBuffer(4),f=new Uint8Array(l),new Uint32Array(l)[0]=1,1===f[0]),d={decode:function(e,t){if(!c)throw"Big endian system is not supported.";var r,i,a=(t=t||{}).inputOffset||0,n=new Uint8Array(e,a,10),s=String.fromCharCode.apply(null,n);if("CntZImage"===s.trim())r=o,i=1;else{if("Lerc2"!==s.substring(0,5))throw"Unexpected file identifier string: "+s;r=u,i=2}for(var l,f,d,h,m,p,g=0,x=e.byteLength-10,w=[],k={width:0,height:0,pixels:[],pixelType:t.pixelType,mask:null,statistics:[]},y=0;a<x;){var v=r.decode(e,{inputOffset:a,encodedMaskData:l,maskData:d,returnMask:0===g,returnEncodedMask:0===g,returnFileInfo:!0,returnPixelInterleavedDims:t.returnPixelInterleavedDims,pixelType:t.pixelType||null,noDataValue:t.noDataValue||null});a=v.fileInfo.eofOffset,d=v.maskData,0===g&&(l=v.encodedMaskData,k.width=v.width,k.height=v.height,k.dimCount=v.dimCount||1,k.pixelType=v.pixelType||v.fileInfo.pixelType,k.mask=d),i>1&&(d&&w.push(d),v.fileInfo.mask&&v.fileInfo.mask.numBytes>0&&y++),g++,k.pixels.push(v.pixelData),k.statistics.push({minValue:v.minValue,maxValue:v.maxValue,noDataValue:v.noDataValue,dimStats:v.dimStats})}if(i>1&&y>1){for(p=k.width*k.height,k.bandMasks=w,(d=new Uint8Array(p)).set(w[0]),h=1;h<w.length;h++)for(f=w[h],m=0;m<p;m++)d[m]=d[m]&f[m];k.maskData=d}return k}};"function"==typeof e&&e.amd?e([],function(){return d}):"undefined"!=typeof module&&module.exports?module.exports=d:this.Lerc=d}();
},{}],"YN9V":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var e=s(require("@babel/runtime/helpers/classCallCheck")),r=s(require("@babel/runtime/helpers/createClass")),t=s(require("@babel/runtime/helpers/inherits")),n=s(require("@babel/runtime/helpers/possibleConstructorReturn")),a=s(require("@babel/runtime/helpers/getPrototypeOf")),i=require("pako"),o=s(require("lerc")),u=s(require("./basedecoder")),l=require("../globals");function s(e){return e&&e.__esModule?e:{default:e}}function c(e){var r=f();return function(){var t,i=(0,a.default)(e);if(r){var o=(0,a.default)(this).constructor;t=Reflect.construct(i,arguments,o)}else t=i.apply(this,arguments);return(0,n.default)(this,t)}}function f(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch(e){return!1}}var d=function(n){(0,t.default)(u,n);var a=c(u);function u(r){var t;return(0,e.default)(this,u),(t=a.call(this)).planarConfiguration=void 0!==r.PlanarConfiguration?r.PlanarConfiguration:1,t.samplesPerPixel=void 0!==r.SamplesPerPixel?r.SamplesPerPixel:1,t.addCompression=r.LercParameters[l.LercParameters.AddCompression],t}return(0,r.default)(u,[{key:"decodeBlock",value:function(e){switch(this.addCompression){case l.LercAddCompression.None:break;case l.LercAddCompression.Deflate:e=(0,i.inflate)(new Uint8Array(e)).buffer;break;default:throw new Error("Unsupported LERC additional compression method identifier: ".concat(this.addCompression))}return o.default.decode(e,{returnPixelInterleavedDims:1===this.planarConfiguration}).pixels[0].buffer}}]),u}(u.default);exports.default=d;
},{"@babel/runtime/helpers/classCallCheck":"fcMS","@babel/runtime/helpers/createClass":"P8NW","@babel/runtime/helpers/inherits":"d4H2","@babel/runtime/helpers/possibleConstructorReturn":"pxk2","@babel/runtime/helpers/getPrototypeOf":"UJE0","pako":"DDDl","lerc":"WwHM","./basedecoder":"FJDe","../globals":"j27V"}]},{},[], "GeoTIFF")