function e(e,t,r,o){Object.defineProperty(e,t,{get:r,set:o,enumerable:!0,configurable:!0})}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},r={},o={},i=t.parcelRequire94c2;null==i&&((i=function(e){if(e in r)return r[e].exports;if(e in o){var t=o[e];delete o[e];var i={id:e,exports:{}};return r[e]=i,t.call(i.exports,i,i.exports),i.exports}var a=Error("Cannot find module '"+e+"'");throw a.code="MODULE_NOT_FOUND",a}).register=function(e,t){o[e]=t},t.parcelRequire94c2=i),i.register("27Lyk",function(t,r){e(t.exports,"register",()=>o,e=>o=e),e(t.exports,"resolve",()=>i,e=>i=e);var o,i,a={};o=function(e){for(var t=Object.keys(e),r=0;r<t.length;r++)a[t[r]]=e[t[r]]},i=function(e){var t=a[e];if(null==t)throw Error("Could not resolve bundle with id "+e);return t}}),i("27Lyk").register(JSON.parse('{"aKnk5":"index.58f0d801.js","fM4Gy":"cubetexture.fb234566.jpg"}'));var a={};a=new URL(i("27Lyk").resolve("fM4Gy"),import.meta.url).toString();let n=0,l=0;//
// creates a shader of the given type, uploads the source and
// compiles it.
//
function u(e,t,r){let o=e.createShader(t);return(// See if it compiled successfully
(// Send the source to the shader object
e.shaderSource(o,r),// Compile the shader program
e.compileShader(o),e.getShaderParameter(o,e.COMPILE_STATUS))?o:(alert(`An error occurred compiling the shaders: ${e.getShaderInfoLog(o)}`),e.deleteShader(o),null))}!function(){var e;let t=document.querySelector("#glcanvas"),r=t.getContext("webgl");if(null===r){alert("Unable to initialize WebGL. Your browser or machine may not support it.");return}// Vertex shader program
let o=`
  attribute vec4 aVertexPosition;
  attribute vec3 aVertexNormal;
  attribute vec2 aTextureCoord;

  uniform mat4 uNormalMatrix;
  uniform mat4 uModelViewMatrix;
  uniform mat4 uProjectionMatrix;

  varying highp vec2 vTextureCoord;
  varying highp vec3 vLighting;

  void main(void) {
    gl_Position = uProjectionMatrix * uModelViewMatrix * aVertexPosition;
    vTextureCoord = aTextureCoord;

    // Apply lighting effect

    highp vec3 ambientLight = vec3(0.3, 0.3, 0.3);
    highp vec3 directionalLightColor = vec3(1, 1, 1);
    highp vec3 directionalVector = normalize(vec3(0.85, 0.8, 0.75));

    highp vec4 transformedNormal = uNormalMatrix * vec4(aVertexNormal, 1.0);

    highp float directional = max(dot(transformedNormal.xyz, directionalVector), 0.0);
    vLighting = ambientLight + (directionalLightColor * directional);
  }
`,i=`
  varying highp vec2 vTextureCoord;
  varying highp vec3 vLighting;

  uniform sampler2D uSampler;

  void main(void) {
    highp vec4 texelColor = texture2D(uSampler, vTextureCoord);

    gl_FragColor = vec4(texelColor.rgb * vLighting, texelColor.a);
  }
`,c=//
// Initialize a shader program, so WebGL knows how to draw our data
//
function(e,t,r){let o=u(e,e.VERTEX_SHADER,t),i=u(e,e.FRAGMENT_SHADER,r),a=e.createProgram();return(// If creating the shader program failed, alert
(e.attachShader(a,o),e.attachShader(a,i),e.linkProgram(a),e.getProgramParameter(a,e.LINK_STATUS))?a:(alert(`Unable to initialize the shader program: ${e.getProgramInfoLog(a)}`),null))}(r,o,i),f={program:c,attribLocations:{vertexPosition:r.getAttribLocation(c,"aVertexPosition"),vertexNormal:r.getAttribLocation(c,"aVertexNormal"),textureCoord:r.getAttribLocation(c,"aTextureCoord")},uniformLocations:{projectionMatrix:r.getUniformLocation(c,"uProjectionMatrix"),modelViewMatrix:r.getUniformLocation(c,"uModelViewMatrix"),normalMatrix:r.getUniformLocation(c,"uNormalMatrix"),uSampler:r.getUniformLocation(c,"uSampler")}},m=function(e){let t=function(e){// Create a buffer for the square's positions.
let t=e.createBuffer();return(// Select the positionBuffer as the one to apply buffer
// operations to from here out.
e.bindBuffer(e.ARRAY_BUFFER,t),// Now pass the list of positions into WebGL to build the
// shape. We do this by creating a Float32Array from the
// JavaScript array, then use it to fill the current buffer.
e.bufferData(e.ARRAY_BUFFER,new Float32Array([// Front face
-1,-1,1,1,-1,1,1,1,1,-1,1,1,// Back face
-1,-1,-1,-1,1,-1,1,1,-1,1,-1,-1,// Top face
-1,1,-1,-1,1,1,1,1,1,1,1,-1,// Bottom face
-1,-1,-1,1,-1,-1,1,-1,1,-1,-1,1,// Right face
1,-1,-1,1,1,-1,1,1,1,1,-1,1,// Left face
-1,-1,-1,-1,-1,1,-1,1,1,-1,1,-1]),e.STATIC_DRAW),t)}(e),r=function(e){let t=e.createBuffer();return e.bindBuffer(e.ARRAY_BUFFER,t),e.bufferData(e.ARRAY_BUFFER,new Float32Array([// Front
0,0,1,0,1,1,0,1,// Back
0,0,1,0,1,1,0,1,// Top
0,0,1,0,1,1,0,1,// Bottom
0,0,1,0,1,1,0,1,// Right
0,0,1,0,1,1,0,1,// Left
0,0,1,0,1,1,0,1]),e.STATIC_DRAW),t}(e),o=function(e){let t=e.createBuffer();return e.bindBuffer(e.ELEMENT_ARRAY_BUFFER,t),// Now send the element array to GL
e.bufferData(e.ELEMENT_ARRAY_BUFFER,new Uint16Array([0,1,2,0,2,3,4,5,6,4,6,7,8,9,10,8,10,11,12,13,14,12,14,15,16,17,18,16,18,19,20,21,22,20,22,23]),e.STATIC_DRAW),t}(e),i=function(e){let t=e.createBuffer();return e.bindBuffer(e.ARRAY_BUFFER,t),e.bufferData(e.ARRAY_BUFFER,new Float32Array([// Front
0,0,1,0,0,1,0,0,1,0,0,1,// Back
0,0,-1,0,0,-1,0,0,-1,0,0,-1,// Top
0,1,0,0,1,0,0,1,0,0,1,0,// Bottom
0,-1,0,0,-1,0,0,-1,0,0,-1,0,// Right
1,0,0,1,0,0,1,0,0,1,0,0,// Left
-1,0,0,-1,0,0,-1,0,0,-1,0,0]),e.STATIC_DRAW),t}(e);return{position:t,normal:i,textureCoord:r,indices:o}}(r),d=//
// Initialize a texture and load an image.
// When the image finished loading copy it into the texture.
//
function(e,t){let r=e.createTexture();e.bindTexture(e.TEXTURE_2D,r);let o=e.RGBA,i=e.RGBA,a=e.UNSIGNED_BYTE,n=new Uint8Array([0,0,255,255])// opaque blue
;e.texImage2D(e.TEXTURE_2D,0,o,1,1,0,i,a,n);let l=new Image;return l.onload=()=>{var t,n;e.bindTexture(e.TEXTURE_2D,r),e.texImage2D(e.TEXTURE_2D,0,o,i,a,l),((t=l.width)&t-1)==0&&((n=l.height)&n-1)==0?e.generateMipmap(e.TEXTURE_2D):(// No, it's not a power of 2. Turn off mips and set
// wrapping to clamp to edge
e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_S,e.CLAMP_TO_EDGE),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_T,e.CLAMP_TO_EDGE),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MIN_FILTER,e.LINEAR))},l.src=t,r}(r,(e=a)&&e.__esModule?e.default:e);// Flip image pixels into the bottom-to-top order that WebGL expects.
r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,!0);let g=0;requestAnimationFrame(// Draw the scene repeatedly
function e(t){t*=.001// convert to seconds
,l=t-g,g=t,function(e,t,r,o,i){e.clearColor(0,0,0,1)// Clear to black, fully opaque
,e.clearDepth(1)// Clear everything
,e.enable(e.DEPTH_TEST)// Enable depth testing
,e.depthFunc(e.LEQUAL)// Near things obscure far things
,// Clear the canvas before we start drawing on it.
e.clear(e.COLOR_BUFFER_BIT|e.DEPTH_BUFFER_BIT);let a=e.canvas.clientWidth/e.canvas.clientHeight,n=mat4.create();// note: glmatrix.js always has the first argument
// as the destination to receive the result.
mat4.perspective(n,45*Math.PI/180// in radians
,a,.1,100);// Set the drawing position to the "identity" point, which is
// the center of the scene.
let l=mat4.create();// Now move the drawing position a bit to where we want to
// start drawing the square.
mat4.translate(l,l,[-0,0,-6])// amount to translate
,mat4.rotate(l,l,i,[0,0,1])// axis to rotate around (Z)
,mat4.rotate(l,l,.7*i,[0,1,0])// axis to rotate around (Y)
,mat4.rotate(l,l,.3*i,[1,0,0])// axis to rotate around (X)
;let u=mat4.create();mat4.invert(u,l),mat4.transpose(u,u),// Tell WebGL how to pull out the positions from the position
// buffer into the vertexPosition attribute.
// Tell WebGL how to pull out the positions from the position
// buffer into the vertexPosition attribute.
function(e,t,r){let o=e.FLOAT// the data in the buffer is 32bit floats
;e.bindBuffer(e.ARRAY_BUFFER,t.position),e.vertexAttribPointer(r.attribLocations.vertexPosition,3,o,!1// don't normalize
,0// how many bytes to get from one set of values to the next
,0// how many bytes inside the buffer to start from
),e.enableVertexAttribArray(r.attribLocations.vertexPosition)}(e,r,t),// tell webgl how to pull out the texture coordinates from buffer
function(e,t,r){let o=e.FLOAT// the data in the buffer is 32-bit float
;e.bindBuffer(e.ARRAY_BUFFER,t.textureCoord),e.vertexAttribPointer(r.attribLocations.textureCoord,2// every coordinate composed of 2 values
,o,!1// don't normalize
,0// how many bytes to get from one set to the next
,0// how many bytes inside the buffer to start from
),e.enableVertexAttribArray(r.attribLocations.textureCoord)}(e,r,t),// Tell WebGL which indices to use to index the vertices
e.bindBuffer(e.ELEMENT_ARRAY_BUFFER,r.indices),// Tell WebGL how to pull out the normals from
// the normal buffer into the vertexNormal attribute.
function(e,t,r){let o=e.FLOAT;e.bindBuffer(e.ARRAY_BUFFER,t.normal),e.vertexAttribPointer(r.attribLocations.vertexNormal,3,o,!1,0,0),e.enableVertexAttribArray(r.attribLocations.vertexNormal)}(e,r,t),// Tell WebGL to use our program when drawing
e.useProgram(t.program),// Set the shader uniforms
e.uniformMatrix4fv(t.uniformLocations.projectionMatrix,!1,n),e.uniformMatrix4fv(t.uniformLocations.modelViewMatrix,!1,l),e.uniformMatrix4fv(t.uniformLocations.normalMatrix,!1,u),// Tell WebGL we want to affect texture unit 0
e.activeTexture(e.TEXTURE0),// Bind the texture to texture unit 0
e.bindTexture(e.TEXTURE_2D,o),// Tell the shader we bound the texture to texture unit 0
e.uniform1i(t.uniformLocations.uSampler,0);{let t=e.UNSIGNED_SHORT;e.drawElements(e.TRIANGLES,36,t,0)}}(r,f,m,d,n),n+=l,requestAnimationFrame(e)})}();//# sourceMappingURL=index.58f0d801.js.map

//# sourceMappingURL=index.58f0d801.js.map
