├── .gitignore
└── Portfolio-profile
    ├── imageprofile.jpeg
    ├── script.js
    ├── style.css
    └── index.html


/.gitignore:
--------------------------------------------------------------------------------
1 | 


--------------------------------------------------------------------------------
/Portfolio-profile/imageprofile.jpeg:
--------------------------------------------------------------------------------
https://raw.githubusercontent.com/bhanups1/PORTFOLIO/HEAD/Portfolio-profile/imageprofile.jpeg


--------------------------------------------------------------------------------
/Portfolio-profile/script.js:
--------------------------------------------------------------------------------
 1 | document.addEventListener("DOMContentLoaded", () => {
 2 |     const modal = document.getElementById("certModal");
 3 |     const openBtn = document.getElementById("openCertBtn");
 4 |     const closeBtn = document.getElementById("closeCertBtn");
 5 | 
 6 |     if (!modal || !openBtn || !closeBtn) return;
 7 | 
 8 |     openBtn.addEventListener("click", () => {
 9 |         modal.style.display = "block";
10 |     });
11 | 
12 |     closeBtn.addEventListener("click", () => {
13 |         modal.style.display = "none";
14 |     });
15 | 
16 |     // Close modal when clicking outside iframe
17 |     modal.addEventListener("click", (e) => {
18 |         if (e.target === modal) {
19 |             modal.style.display = "none";
20 |         }
21 |     });
22 | 
23 |     // Close modal on ESC key
24 |     document.addEventListener("keydown", (e) => {
25 |         if (e.key === "Escape") {
26 |             modal.style.display = "none";
27 |         }
28 |     });
29 | });
30 | 


--------------------------------------------------------------------------------
/Portfolio-profile/style.css:
--------------------------------------------------------------------------------
  1 | *{
  2 |     padding: 0;
  3 |     margin: 0;
  4 |     box-sizing: border-box;
  5 | }
  6 | 
  7 | body{
  8 |     background-color: #1e1e1e;
  9 |     font-family: sans-serif;
 10 |     color: #a0a0a0;
 11 |     line-height: 1.6;
 12 | }
 13 | 
 14 | .main-container{
 15 |     display: grid;
 16 |     max-width: 1200px;
 17 |     grid-template-columns: 350px 1fr;
 18 |     gap: 50px;
 19 |     padding-top: 40px;
 20 |     margin: auto;
 21 | }
 22 | 
 23 | .sidebar{
 24 |     height: 90vh;
 25 |     background-color:#2a2a2a;
 26 |     border: 1px solid #3a3a3a;
 27 |     border-radius: 16px;
 28 |     padding: 40px;
 29 |     position: sticky;
 30 |     top: 40px;
 31 | }
 32 | 
 33 | .main-content{
 34 |     background-color:#2a2a2a;
 35 |     border: 1px solid #3a3a3a;
 36 |     border-radius: 16px;
 37 |     padding: 40px;
 38 | }
 39 | 
 40 | 
 41 | /* Profile section */
 42 | 
 43 | .profile{
 44 |     text-align: center;
 45 | }
 46 | 
 47 | 
 48 | .profile img{
 49 |     height: 140px;
 50 |     width: 140px;
 51 |     border-radius: 50%;
 52 |     border: 1px solid #3a3a3a;
 53 | }
 54 | 
 55 | 
 56 | .profile h2{
 57 |     font-size: 1.5rem;
 58 |     font-weight: 700;
 59 |     margin-top: 20px;
 60 |     color: #e0e0e0;
 61 | }
 62 | 
 63 | .profile p{
 64 |     background-color: #1e1e1e;
 65 |     padding: 5px 15px;
 66 |     color: #FFBF00;
 67 |     border: 1px solid #3a3a3a;
 68 |     font-size: 0.8rem;
 69 |     border-radius: 8px;
 70 |     display: inline-block;
 71 |     margin-top: 10px;
 72 | }
 73 | 
 74 | 
 75 | 
 76 | /* contact information */
 77 | 
 78 | .contact{
 79 |     margin-top: 30px;
 80 |     border-top: 2px solid #3a3a3a;
 81 |     padding-top:20px;
 82 | }
 83 | 
 84 | .label{
 85 |     font-weight: 500;
 86 |     font-size: 0.8rem;
 87 |     color: #a0a0a0;
 88 | }
 89 | 
 90 | .value{
 91 |     color: #e0e0e0;
 92 |     text-decoration: none;
 93 | }
 94 | 
 95 | .email,.phone{
 96 |     margin-bottom: 15px;
 97 | }
 98 | 
 99 | /* social media */
100 | 
101 | .social{
102 |     margin-top: 30px;
103 |     border-top: 2px solid #3a3a3a;
104 |     padding-top:20px;
105 |     text-align: center;
106 | }
107 | 
108 | .social img{
109 |     height: 24px;
110 |     width: 24px;
111 |     margin-left: 5px;
112 |     filter: grayscale(1) invert(0.7);
113 |     transition: filter 0.3s ease;
114 | }
115 | 
116 | .social img:hover{
117 |     filter: grayscale(0) invert(0);
118 | }
119 | 
120 | 
121 | /* main content */
122 | 
123 | /* Navigation ko  */
124 | 
125 | 
126 | #navigation{
127 |     border-bottom: 2px solid #3a3a3a;
128 |     margin-bottom: 20px;
129 |     padding-bottom: 20px;
130 | }
131 | 
132 | nav{
133 |     display: flex;
134 |     justify-content: flex-end;
135 |     gap: 20px;
136 | }
137 | 
138 | nav a{
139 |     text-decoration: none;
140 |     color: #a0a0a0;
141 |     font-weight: 500;
142 |     transition: color 0.3s ease;
143 | }
144 | 
145 | .active, nav a:hover{
146 |     color: #FFBF00;
147 | }
148 | 
149 | 
150 | /* about me */
151 | 
152 | .heading{
153 |     color: #e0e0e0;
154 |     font-size: 2rem;
155 |     margin-bottom: 15px;
156 | }
157 | 
158 | .line{
159 |     width: 60px;
160 |     height: 5px;
161 |     background-color: #FFBF00;
162 |     margin-bottom: 15px;
163 | }
164 | 
165 | .content{
166 |     text-align: justify;
167 |     color: #a0a0a0;
168 | }
169 | 
170 | #about{
171 |     margin-bottom: 40px;
172 | }
173 | 
174 | 
175 | /* skills section */
176 | 
177 | .grid-container{
178 |     display: grid;
179 |     grid-template-columns: repeat(auto-fit , minmax(120px,1fr));
180 |     gap: 30px;
181 | }
182 | 
183 | .item{
184 |     padding: 20px;
185 |     border-radius: 10px;
186 |     border: 2px solid #3a3a3a;
187 |     background-color: #1e1e1e;
188 |     text-align: center;
189 |     margin-top: 20px;
190 |     transition: transform 0.3s ease, box-shadow 0.3s ease;
191 | }
192 | 
193 | .item img{
194 |     height: 48px;
195 |     width: 48px;
196 |     filter: invert(75%) sepia(50%) saturate(1000%) hue-rotate(350deg) brightness(110%) contrast(101%);
197 |     margin-bottom: 15px;
198 | }
199 | 
200 | .item h3{
201 |     font-size: 1rem;
202 |     font-weight: 500;
203 | }
204 | 
205 | .item:hover{
206 |     transform: scale(1.1);
207 |     box-shadow: 0px 0px 10px 5px rgba(0, 0, 0, 0.3);
208 | }
209 | 
210 | 
211 | /* Education */
212 | #education{
213 |     margin-top: 30px;
214 | }
215 | 
216 | .edtech{
217 |     position: relative;
218 |     margin-top: 20px;
219 | }
220 | 
221 | .year{
222 |     font-size: 0.9rem;
223 |     color: #a0a0a0;
224 |     margin-bottom: 5px;
225 | }
226 | 
227 | .degree{
228 |     color: #e0e0e0;
229 |     font-size: 1.2rem;
230 |     font-weight: 500;
231 |     margin-bottom: 5px;
232 | }
233 | 
234 | .college{
235 |     font-style: italic;
236 |     color: #a0a0a0;
237 |     margin-bottom: 10px;
238 | }
239 | 
240 | .work{
241 |     color: #a0a0a0;
242 | }
243 | 
244 | .edfirst, .edsecond{
245 |     margin-bottom: 30px;
246 |     padding-left: 25px;
247 |     position: relative;
248 | }
249 | 
250 | .goal{
251 |     height: 15px;
252 |     width: 15px;
253 |     border: 3px solid #FFBF00;
254 |     border-radius: 50%;
255 |     position: absolute;
256 |     top:5px;
257 |     left: 0px;
258 |     z-index: 5;
259 | }
260 | 
261 | .liner{
262 |     position: absolute;
263 |     width: 2px;
264 |     top:0px;
265 |     bottom: 0px;
266 |     left: 5px;
267 |     border: 2px solid #3a3a3a;
268 | }
269 | 
270 | 
271 | /* Portfolio */
272 | 
273 | .project-container{
274 |     margin-top: 30px;
275 |     display: grid;
276 |     grid-template-columns: 1fr 1fr;
277 |     gap:25px;
278 | }
279 | 
280 | .project{
281 |     background-color: #1e1e1e;
282 |     border-radius: 12px;
283 |     border: 1px solid #3a3a3a;
284 |     overflow: hidden;
285 |     transition: transform 0.5s ease, box-shadow 0.5s ease;
286 | }
287 | 
288 | .project:hover{
289 |     transform: translateY(-10px);
290 |     box-shadow: 0px 0px 10px 5px rgba(0, 0, 0, 0.3);;
291 | }
292 | 
293 | .project img{
294 |     height: 180px;
295 |     width: 100%;
296 |     object-fit: cover;
297 | }
298 | 
299 | .card{
300 |     padding: 20px;
301 | }
302 | 
303 | .card h3{
304 |     color: #e0e0e0;
305 |     margin-bottom: 10px;
306 | }
307 | 
308 | .card p{
309 |     color: #a0a0a0;
310 |     line-height: 1.6;
311 |     margin-bottom: 15px;
312 | }
313 | 
314 | .card span{
315 |     background-color: rgba(255, 191, 0, 0.1);
316 |     color: #FFBF00;
317 |     padding: 4px 8px;
318 |     border-radius: 5px;
319 |     font-size: 0.75rem;
320 |     margin-right: 5px;
321 | }
322 | 
323 | @media screen and (max-width:1200px) {
324 |     .main-container{
325 |         grid-template-columns: 1fr;
326 |         padding: 20px;
327 |     }
328 | 
329 |     .sidebar{
330 |         position: static;
331 |         height: auto;
332 |     }
333 | }
334 | 
335 | @media screen and (max-width:750px) {
336 |     .project-container{
337 |         grid-template-columns: 1fr;
338 |     }
339 | 
340 |     #navigation nav {
341 |         /* Adjust nav for smaller screens */
342 |         justify-content: center;
343 |         flex-wrap: wrap;
344 |     }
345 | 
346 |     .sidebar{
347 |         display: flex;
348 |         justify-content: center;
349 |         gap: 40px;
350 |     }
351 | }
352 | 
353 | /* Certification Clean Style */
354 | 
355 | #Certification{
356 |     margin-top: 20px;
357 | }
358 | 
359 | .cert-list{
360 |     margin-top: 20px;
361 | }
362 | 
363 | .cert-item{
364 |     display: flex;
365 |     align-items: center;
366 |     gap: 12px;
367 |     cursor: pointer;
368 |     font-size: 0.95rem;
369 |     margin-bottom: 15px;
370 | }
371 | 
372 | .cert-item img{
373 |     height: 20px;
374 |     width: 20px;
375 |     filter: invert(75%) sepia(50%) saturate(1000%) hue-rotate(350deg);
376 | }
377 | 
378 | .cert-title{
379 |     color: #e0e0e0;
380 |     text-decoration: underline;
381 | }
382 | .active, .cert-title:hover{
383 |     color: #FFBF00;
384 | }
385 | 
386 | 
387 | .cert-org{
388 |     color: #FFBF00;
389 |     font-size: 0.85rem;
390 | }
391 | 
392 | /* Modal */
393 | 
394 | .cert-modal{
395 |     display: none;
396 |     position: fixed;
397 |     inset: 0;
398 |     background-color: rgba(0,0,0,0.85);
399 |     z-index: 999;
400 |     padding: 40px;
401 | }
402 | 
403 | .cert-modal iframe{
404 |     width: 100%;
405 |     height: 100%;
406 |     border-radius: 10px;
407 | }
408 | 
409 | .close-btn{
410 |     position: absolute;
411 |     top: 20px;
412 |     right: 30px;
413 |     font-size: 30px;
414 |     color: #FFBF00;
415 |     cursor: pointer;
416 | }
417 | 
418 | 
419 | 


--------------------------------------------------------------------------------
/Portfolio-profile/index.html:
--------------------------------------------------------------------------------
  1 | <!DOCTYPE html>
  2 | <html lang="en">
  3 | <head>
  4 |     <meta charset="UTF-8">
  5 |     <meta name="viewport" content="width=device-width, initial-scale=1.0">
  6 |     <title>Profile Portfolio</title>
  7 |     <link rel="stylesheet" href="./style.css">
  8 |     <script src="./script.js"></script>
  9 | </body>
 10 | </html>
 11 | 
 12 | </head>
 13 | <body>
 14 |     
 15 |     <div class="main-container">
 16 |         <!-- siderbar -->
 17 |         <div class="sidebar">
 18 | 
 19 |             <!-- profile -->
 20 |             <div class="profile">
 21 |                 <img src="./imageprofile.jpeg" alt="" >
 22 |                 <h2>BHANU PARTAP</h2>
 23 |                 <p>Frontend Developer</p>
 24 |             </div>
 25 |             
 26 | 
 27 |              <!--contact  -->
 28 | 
 29 |              <div class="contact">
 30 |                   <div class="email">
 31 |                     <h3 class="label">Email</h3>
 32 |                     <a href="mailto:bhanupartapsp1@gmail.com" class="value">bhanupartapsp1@gmail.com</a>
 33 |                   </div>
 34 |                   <div class="phone">
 35 |                     <h3 class="label">Phone</h3>
 36 |                     <a href="tel:9470701696" class="value">9470701696</a>
 37 |                   </div>
 38 |                   <div class="location">
 39 |                     <h3 class="label">Location</h3>
 40 |                     <p class="value">Bhopal,MP</p>
 41 |                   </div>
 42 |              </div>
 43 | 
 44 | 
 45 |              <!-- social -->
 46 | 
 47 | 
 48 |              <div class="social">
 49 |                 <a href="https://x.com/Bhanupratap__11"><img src="https://simpleicons.org/icons/x.svg" alt=""></a>
 50 |                 <a href="https://github.com/bhanups1"><img src="https://simpleicons.org/icons/git.svg" alt=""></a>
 51 |                 <a href="https://www.linkedin.com/in/bhanups1/"><img src="https://www.svgrepo.com/show/144030/linkedin-square-logo.svg" alt=""></a>
 52 |              </div>
 53 |         </div>
 54 | 
 55 |         
 56 |         <!-- main-content -->
 57 |         <div class="main-content">
 58 |           
 59 |             <!-- navigation -->
 60 |              <div id="navigation">
 61 |                 <nav>
 62 |                     <a href="#about" class="active">About</a>
 63 |                     <a href="#skills">Skills</a>
 64 |                     <a href="#education">Education</a>
 65 |                     <a href="#portfolio">Portfolio</a>
 66 |                     <a href="#Certification">Certification</a>
 67 |                 </nav>
 68 |              </div>
 69 | 
 70 |             <!-- about me -->
 71 |              <div id="about">
 72 |                 <h2 class="heading">About Me</h2>
 73 |                 <div class="line"></div>
 74 |                 <p class="content">I am a creative and passionate Frontend Developer with a keen eye for detail and a love for building beautiful, functional, and user-friendly web experiences. My journey in web development is driven by a desire to turn complex problems into simple, elegant solutions. I specialize in modern web technologies and am always eager to learn and adapt to the ever-evolving digital landscape.</p>
 75 |              </div>
 76 | 
 77 |             <!-- Skills -->
 78 |              <div id="skills">
 79 |                 <h2 class="heading">Skills</h2>
 80 |                 <div class="line"></div>
 81 |                 <div class="grid-container">
 82 |                     <div class="item">
 83 |                         <img src="https://simpleicons.org/icons/html5.svg" alt="">
 84 |                         <h3>HTML5</h3>
 85 |                     </div>
 86 |                     <div class="item">
 87 |                         <img src="https://simpleicons.org/icons/css.svg" alt="">
 88 |                         <h3>CSS3</h3>
 89 |                     </div>
 90 |                     <div class="item">
 91 |                         <img src="https://simpleicons.org/icons/javascript.svg" alt="">
 92 |                         <h3>Javascript</h3>
 93 |                     </div>
 94 |                     <div class="item">
 95 |                         <img src="https://simpleicons.org/icons/react.svg" alt="">
 96 |                         <h3>React</h3>
 97 |                     </div>
 98 |                     <div class="item">
 99 |                         <img src="https://simpleicons.org/icons/git.svg" alt="">
100 |                         <h3>Git & Github</h3>
101 |                     </div>
102 |                     <div class="item">
103 |                         <img src="https://simpleicons.org/icons/typescript.svg" alt="">
104 |                         <h3>Typescript</h3>
105 |                     </div>
106 |                 </div>
107 |              </div>
108 | 
109 |             <!-- Education -->
110 |              <div id="education">
111 |                 <h2 class="heading">Education</h2>
112 |                 <div class="line"></div>
113 |                 <div class="edtech">
114 | 
115 |                     <div class="edsecond">
116 |                         <div class="year">2022-2026</div>
117 |                         <h3 class="degree">Bachelor of Technology in CSE</h3>
118 |                         <p class="college">IES COLLEGE OF TECHNOLOGY AND MANAGEMENT, BHOPAL</p>
119 |                         <p class="work">Focused on learning Algorithm, DBMS, Computer Network and Operating system.</p>
120 |                         <div class="goal"></div>
121 |                     </div>
122 | 
123 |                     <div class="liner"></div>
124 |                 </div>
125 |                
126 |                 
127 |             </div>
128 | 
129 |             <!-- Portfolio -->
130 |              <div id="portfolio">
131 |                 <h2 class="heading">Portfolio</h2>
132 |                 <div class="line"></div>
133 | 
134 |                 <div class="project-container">
135 |                     <div class="project">
136 |                         <img src="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDN8fGNvZGluZ3xlbnwwfHx8fDE2NTg0MjU5NjM&ixlib=rb-1.2.1&q=80&w=400" alt="">
137 |                         <div class="card">
138 |                             <h3>E-Commerce Website</h3>
139 |                             <p>A fully responsive online store built with modern design principles.</p>
140 |                             <span>HTML</span><span>CSS</span>
141 |                         </div>
142 |                     </div>
143 |                     <div class="project">
144 |                         <img src="https://images.unsplash.com/photo-1542744095-291d1f67b221?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDEyfHx3ZWJzaXRlJTIwZGVzaWdufGVufDB8fHx8MTY1ODQyNTk5OQ&ixlib=rb-1.2.1&q=80&w=400" alt="">
145 |                         <div class="card">
146 |                             <h3>Business Landing Page</h3>
147 |                             <p>A sleek, single-page site for a corporate client to generate leads.</p>
148 |                             <span>HTML</span><span>CSS</span><span>Flexbox</span>
149 |                         </div>
150 |                     </div>
151 |                     <div class="project">
152 |                         <img src="https://images.unsplash.com/photo-1509343256512-d77a5cb3791b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDE4fHxwb3J0Zm9saW98ZW58MHx8fHwxNjU4NDI2MDUx&ixlib=rb-1.2.1&q=80&w=400" alt="">
153 |                         <div class="card">
154 |                             <h3>Personal Blog Theme</h3>
155 |                             <p>A clean, content-focused blog theme designed for readability.</p>
156 |                             <span>HTML</span><span>CSS</span>
157 |                         </div>
158 |                     </div>
159 |                     <div class="project">
160 |                         <img src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDF8fGRhc2hib2FyZHxlbnwwfHx8fDE2NTg0MjYwMjM&ixlib=rb-1.2.1&q=80&w=400" alt="">
161 |                         <div class="card">
162 |                             <h3>Analytics Dashboard UI</h3>
163 |                             <p>A data visualization dashboard UI created with CSS Grid.</p>
164 |                             <span>Grid</span><span>Ui/Ux</span>
165 |                         </div>
166 |                     </div>
167 |                 </div>
168 |              </div>
169 | 
170 |             <!-- Certification-->
171 |             <div id="Certification">
172 |                 <h2 class="heading">Certification</h2>
173 |                 <div class="line"></div>
174 |                 
175 |                 <div class="cert-list">
176 |                     <div class="cert-item" id="openCertBtn">
177 |                         <img src="https://simpleicons.org/icons/academia.svg" alt="">
178 |                         <span class="cert-title">Full Stack Development</span>
179 |                         <span class="cert-org">APNA COLLEGE</span>
180 |                     </div>
181 |                 
182 |                 </div>
183 |             </div>
184 |             <!-- Certificate Modal -->
185 |              <div id="certModal" class="cert-modal">
186 |                 <span class="close-btn" id="closeCertBtn">&times;</span>
187 |                 <iframe src="https://drive.google.com/file/d/1CYl_N5P5LPa0r792HoRi_tI3q8Jtf8xM/preview"frameborder="0"></iframe>
188 |             </div>
189 | 
190 |              
191 | 
192 |         </div> 
193 |     </div>
194 | 
195 | </body>
196 | </html>


--------------------------------------------------------------------------------
