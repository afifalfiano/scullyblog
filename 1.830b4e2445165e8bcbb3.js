(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{"93Dy":function(t,e,i){"use strict";i.d(e,"a",function(){return o});var n=i("fXoL");let o=(()=>{class t{transform(t){const e=Math.ceil(t/200);return console.log(e),e+" minute read"}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275pipe=n.Mb({name:"readTime",type:t,pure:!0}),t})()},"9vUh":function(t,e,i){"use strict";i.d(e,"a",function(){return S});var n=i("oW/4"),o=i("R0Ic"),s=i("ELNm"),r=i.n(s),a=i("fXoL"),c=i("sbAP"),l=i("tyNb"),u=i("ofXK");const b=["home"],p=["aboutme"],d=["experience"],h=["portfolio"],m=["blog"],f=["contact"],g=["myName"];function y(t,e){if(1&t&&(a.Sb(0,"div",93),a.Sb(1,"span"),a.sc(2),a.Rb(),a.Rb()),2&t){const t=e.$implicit;a.Cb(1),a.Eb("btn ",t.style," m-2"),a.Cb(1),a.tc(t.tech)}}function v(t,e){if(1&t){const t=a.Tb();a.Sb(0,"div",94),a.Sb(1,"div",95),a.Yb("mouseenter",function(){a.mc(t);const i=e.index;return a.ac().changeMouseState("hover",i)})("mouseleave",function(){a.mc(t);const i=e.index;return a.ac().changeMouseState("rest",i)}),a.Ob(2,"img",96),a.Sb(3,"h4",97),a.sc(4),a.Sb(5,"span",98),a.sc(6),a.Rb(),a.Rb(),a.Sb(7,"p"),a.sc(8,"Post on "),a.Sb(9,"span",99),a.sc(10),a.bc(11,"date"),a.Rb(),a.sc(12," by "),a.Sb(13,"span",99),a.sc(14),a.Rb(),a.Rb(),a.Sb(15,"p"),a.Sb(16,"span",100),a.Sb(17,"em"),a.sc(18),a.bc(19,"readTime"),a.Rb(),a.Rb(),a.Rb(),a.Sb(20,"div",101),a.Sb(21,"p",102),a.sc(22),a.bc(23,"caption"),a.Rb(),a.Rb(),a.Sb(24,"a",103),a.Yb("click",function(){return a.mc(t),a.ac().sendSlug()}),a.sc(25,"Read..."),a.Rb(),a.Rb(),a.Rb()}if(2&t){const t=e.$implicit,i=e.index,n=a.ac();a.Cb(1),a.gc("@changeState",n.currentState[i]),a.Cb(1),a.hc("src",t.image,a.nc),a.hc("alt",t.title),a.Cb(2),a.uc("",t.title," "),a.Cb(2),a.tc(t.categories),a.Cb(4),a.tc(a.cc(11,10,t.publishedAt)),a.Cb(4),a.tc(t.authors),a.Cb(4),a.tc(a.cc(19,12,t.wordCount)),a.Cb(4),a.tc(a.cc(23,14,t.thumbnailText)),a.Cb(2),a.hc("href",t.route,a.nc)}}let S=(()=>{class t{constructor(t,e,i,n){this.scullySvc=t,this.router=e,this.error=i,this.location=n,this.currentState=[],this.links$=this.scullySvc.available$,this.myStack=[{tech:"php",style:"btn-outline-primary"},{tech:"html",style:"btn-outline-success"},{tech:"css",style:"btn-outline-danger"},{tech:"javascript",style:"btn-outline-warning"},{tech:"typescript",style:"btn-outline-primary"},{tech:"wordpress",style:"btn-outline-info"},{tech:"laravel",style:"btn-outline-danger"},{tech:"Figma",style:"btn-outline-primary"},{tech:"Adobe Xd",style:"btn-outline-dark"},{tech:"Inkscape",style:"btn-outline-secondary"},{tech:"Gimp",style:"btn-outline-success"}],this.pureBlog=[],this.project=[{name:"UI Design",height:"200px",card:"",image:"../../assets/img.jpg"},{name:"PWA Native",height:"300px",card:"",image:"../../assets/img.jpg"},{name:"Angular Bazel",height:"200px",card:"",image:"../../assets/img.jpg"},{name:"Angular Bazel",height:"400px",card:"margin-top: -4em",image:"../../assets/img.jpg"},{name:"Angular Bazel",height:"300px",card:"margin-top: 2em",image:"../../assets/img.jpg"},{name:"Angular Bazel",height:"400px",card:"margin-top: -4em",image:"../../assets/img.jpg"}],this.thumbnailArticle=[]}ngOnInit(){void 0!==history.state.data?this.pureBlog=history.state.data:this.getBlog(),this.runnerText(),console.log(this.pureBlog)}runnerText(){new r.a(".element",{strings:["","^1000 <strong>Hello friends!</strong> ^1000","<strong>My Name is Afif Alfiano</strong> ^1000","<strong>Nice to meet you!</strong>","<strong>Afif Alfiano</strong>"],typeSpeed:60,backSpeed:30,showCursor:!1,backDelay:700})}getBlog(){this.links$.subscribe(t=>{t.forEach(t=>{this.thumbnailArticle.push(t),this.pureBlog.push(t)}),this.pureBlog.shift(),this.pureBlog.shift(),this.pureBlog.pop(),this.pureBlog.pop(),this.pureBlog.pop(),this.pureBlog.pop(),console.log(this.pureBlog)},t=>{this.error.handleError(t)})}sendSlug(){}scrollSmooth(t){var e,i,n,o,s,r,a;console.log(t);const c=t.target.className,l=t.target.computedName.replace(" ","").toLowerCase();console.log(l),"home"===l?(null===(e=this.home)||void 0===e||e.nativeElement.scrollIntoView({behavior:"smooth",block:"start",inline:"nearest"}),this.router.navigateByUrl("/#home")):"aboutme"===l?(null===(i=this.aboutme)||void 0===i||i.nativeElement.scrollIntoView({behavior:"smooth",block:"start",inline:"nearest"}),this.router.navigateByUrl("/#aboutme")):"experience"===l?(null===(n=this.experience)||void 0===n||n.nativeElement.scrollIntoView({behavior:"smooth",block:"start",inline:"nearest"}),this.router.navigateByUrl("/#experience")):"portfolio"===l?(null===(o=this.portfolio)||void 0===o||o.nativeElement.scrollIntoView({behavior:"smooth",block:"start",inline:"nearest"}),this.router.navigateByUrl("/#portfolio")):"blog"===l?null===(s=this.blog)||void 0===s||s.nativeElement.scrollIntoView({behavior:"smooth",block:"start",inline:"nearest"}):"contact"===l?(null===(r=this.contact)||void 0===r||r.nativeElement.scrollIntoView({behavior:"smooth",block:"start",inline:"nearest"}),this.router.navigateByUrl("/#contact")):"navbar-toggler-icon"===c||(null===(a=this.home)||void 0===a||a.nativeElement.scrollIntoView({behavior:"smooth",block:"start",inline:"nearest"}),this.location.back())}goToTop(){window.scrollTo({top:0,behavior:"smooth"})}goToBlogs(){const t=this.thumbnailArticle;t.shift(),t.shift(),t.pop(),t.pop(),this.router.navigate(["/myblogs"],{state:{data:t}}),window.scrollTo({top:0,behavior:"auto"})}goToPortfolios(){this.router.navigateByUrl("/myportfolios")}changeMouseState(t,e){this.currentState[e]=t}}return t.\u0275fac=function(e){return new(e||t)(a.Nb(c.c),a.Nb(l.d),a.Nb(a.p),a.Nb(u.n))},t.\u0275cmp=a.Hb({type:t,selectors:[["app-home"]],viewQuery:function(t,e){if(1&t&&(a.wc(b,!0),a.wc(p,!0),a.wc(d,!0),a.wc(h,!0),a.wc(m,!0),a.wc(f,!0),a.wc(g,!0)),2&t){let t;a.kc(t=a.Zb())&&(e.home=t.first),a.kc(t=a.Zb())&&(e.aboutme=t.first),a.kc(t=a.Zb())&&(e.experience=t.first),a.kc(t=a.Zb())&&(e.portfolio=t.first),a.kc(t=a.Zb())&&(e.blog=t.first),a.kc(t=a.Zb())&&(e.contact=t.first),a.kc(t=a.Zb())&&(e.myName=t.first)}},hostVars:1,hostBindings:function(t,e){2&t&&a.qc("@fadeInAnimation",void 0)},decls:193,vars:2,consts:[[3,"click"],[1,"jumbotron","jumbotron-fluid"],[1,"container"],["id","header-jumbo",1,"row","mt-5",2,"height","400px"],[1,"col-md-6","col-sm-12","mt-4"],["id","home"],["home",""],["id","myName",1,"mt-3","display-4","name","element"],[1,"job"],[2,"list-style-type","none","padding-left","0"],["aria-hidden","true",1,"fa","fa-envelope"],["aria-hidden","true",1,"fa","fa-phone-square"],["aria-hidden","true",1,"fa","fa-globe"],[1,"row"],[1,"col-sm-12"],["href","https://www.facebook.com/alfiano.hermasyah/","target","blank"],["aria-hidden","true",1,"fa","fa-facebook-square","fa-2x","m-2","text-primary"],["href","https://dribbble.com/afifalfiano","target","blank"],["aria-hidden","true",1,"fa","fa-dribbble","fa-2x","m-2","text-danger"],["href","https://github.com/afifalfiano","target","blank"],["aria-hidden","true",1,"fa","fa-github-square","fa-2x","m-2","text-dark"],["href","https://twitter.com/afifalfiano8","target","blank"],["aria-hidden","true",1,"fa","fa-twitter-square","fa-2x","m-2","text-info"],[1,"col-md-6","col-sm-12","mt-3"],[1,"text-center"],["src","../../assets/profile.jpg","alt","Afif Alfiaon","width","350",1,"img-fluid","rounded-circle","p-4","bg-dark","profile"],[1,"container","mt-5","mb-5"],["id","hidden",1,"col-md-6","col-sm-12"],["src","../../assets/images/home/code.png","width","450","alt","code",1,"img-fluid"],["href","https://www.freepik.com/vectors/banner",2,"visibility","hidden"],[1,"col-md-6","col-sm-12"],["id","aboutme"],["aboutme",""],["style","display: inline;",4,"ngFor","ngForOf"],[1,"col","mt-4"],[1,"row","mt-4"],[1,"col-md-4","col-lg-4","col-sm-12","mt-2","mb-2"],[1,"card"],["aria-hidden","true",1,"fa","fa-paint-brush","fa-5x","pr-3","pt-3","pb-3","pl-3","text-warning","text-center"],[1,"card-title","pl-3","pr-3","text-center"],[1,"card-body","pt-0"],[1,"card-text"],["aria-hidden","true",1,"fa","fa-file-code-o","fa-5x","pr-3","pt-3","pb-3","pl-3","text-primary","text-center"],["aria-hidden","true",1,"fa","fa-rocket","fa-5x","pr-3","pt-3","pb-3","pl-3","text-success","text-center"],[1,"col"],["id","experience",1,"text-center"],["experience",""],[1,"col-md-6","offset-md-3","col-lg-6","col-sm-6","mr-3"],[1,"timeline"],["target","_blank","href","#"],["href","#",1,"float-right"],["href","#"],["id","portfolio",1,"text-center"],["portfolio",""],[1,"row","mt-4","mb-5"],[1,"col-md-4","col-lg-4","col-sm-12"],[1,"card","border","port",2,"height","400px"],[1,"card-body"],["src","../../assets/img.jpg","alt","...","height","auto",1,"card-img-top"],[1,"mt-3"],[1,"card-title","text-center"],[1,"card","border","port",2,"height","500px"],["src","../../assets/img.jpg","alt","...","width","auto","height","410",1,"card-img-top"],["src","../../assets/img.jpg","alt","...","height","","width","auto",1,"card-img-top"],[1,"col","text-center"],[1,"btn","btn-success",3,"click"],[1,"row","mb-5"],["id","blog",1,"text-center"],["blog",""],["style","display: inline-block;","class","col-md-4",4,"ngFor","ngForOf"],["id","contact",1,"text-center"],["contact",""],[1,"row","mt-5","mb-5"],[1,"col-lg-6"],[1,"form-row"],[1,"form-group","col-md-6"],["for","inputFirstName4"],["type","text","id","inputFirstName4",1,"form-control"],["for","inputLastName4"],["type","text","id","inputLastName4",1,"form-control"],[1,"form-group"],["for","inputAddress"],["type","email","id","inputAddress","placeholder","username@mail.xyz",1,"form-control"],["for","inputAddress2"],["name","","id","","cols","30","rows","10","placeholder","Your message",1,"form-control"],["type","submit",1,"btn","btn-primary","btn-block"],["id","feedback",1,"col-lg-6"],[1,"text-center","ml-4"],["src","../../assets/images/home/feedback.png","alt","Feedback","width","500",1,"img-fluid","ml-4"],["href","https://www.freepik.com/vectors/star",2,"visibility","hidden"],[1,"container-fluid","pb-4"],["data-spy","affix",1,"float-right","float-right","d-absolute"],[1,"btn","btn-outline-success","float-right",3,"click"],[2,"display","inline"],[1,"col-md-4",2,"display","inline-block"],[1,"card","shadow","p-3","mb-5","bg-white","rounded",2,"height","auto","width","auto",3,"mouseenter","mouseleave"],[1,"card-img-top",3,"src","alt"],[1,"card-title","mt-3"],[1,"btn","btn-sm","btn-success","float-right","text-white","position-absolute",2,"top","15px","right","15px"],[1,"text-primary"],[1,"text-secondary",2,"font-weight","500"],[1,"card-body","reformat"],[1,"card-text","text-secondary"],[1,"btn","btn-primary","stretched-link",3,"href","click"]],template:function(t,e){1&t&&(a.Sb(0,"app-navigation",0),a.Yb("click",function(t){return e.scrollSmooth(t)}),a.Rb(),a.Sb(1,"div",1),a.Sb(2,"div",2),a.Sb(3,"div",3),a.Sb(4,"div",4),a.Sb(5,"p",5,6),a.sc(7,"Hello!"),a.Rb(),a.Ob(8,"h1",7),a.Sb(9,"h2",8),a.sc(10,"Frontend Developer"),a.Rb(),a.Sb(11,"ul",9),a.Sb(12,"li"),a.Ob(13,"i",10),a.sc(14," \xa0 afifalfiano2@gmail.com"),a.Rb(),a.Sb(15,"li"),a.Ob(16,"i",11),a.sc(17," \xa0 +628112636768"),a.Rb(),a.Sb(18,"li"),a.Ob(19,"i",12),a.sc(20," \xa0 Yogyakarta, Indonesia"),a.Rb(),a.Rb(),a.Sb(21,"div",13),a.Sb(22,"div",14),a.Sb(23,"a",15),a.Ob(24,"i",16),a.Rb(),a.Sb(25,"a",17),a.Ob(26,"i",18),a.Rb(),a.Sb(27,"a",19),a.Ob(28,"i",20),a.Rb(),a.Sb(29,"a",21),a.Ob(30,"i",22),a.Rb(),a.Rb(),a.Rb(),a.Rb(),a.Sb(31,"div",23),a.Sb(32,"div",24),a.Ob(33,"img",25),a.Rb(),a.Rb(),a.Rb(),a.Rb(),a.Rb(),a.Sb(34,"div",26),a.Sb(35,"div",13),a.Sb(36,"div",27),a.Sb(37,"div",24),a.Ob(38,"img",28),a.Sb(39,"a",29),a.sc(40,"Banner vector created by katemangostar - www.freepik.com"),a.Rb(),a.Rb(),a.Rb(),a.Sb(41,"div",30),a.Sb(42,"h2",31,32),a.sc(44,"About Me"),a.Rb(),a.Sb(45,"p"),a.sc(46,"Hello, I'm a Afif Alfiano, web developer based on Indonesia. I have rich experiecnce in web site design like using figma, adobe xd and build from scratch."),a.Rb(),a.rc(47,y,3,4,"div",33),a.Rb(),a.Rb(),a.Rb(),a.Sb(48,"div",26),a.Sb(49,"div",13),a.Sb(50,"div",34),a.Sb(51,"h2",24),a.sc(52,"What I Do"),a.Rb(),a.Rb(),a.Rb(),a.Sb(53,"div",35),a.Sb(54,"div",36),a.Sb(55,"div",37),a.Ob(56,"i",38),a.Sb(57,"h5",39),a.sc(58,"UI Design"),a.Rb(),a.Sb(59,"div",40),a.Sb(60,"p",41),a.sc(61," Some quick example text to build on the card title and make up the bulk of the card's content. Some quick example text to build on the card title and make up the bulk of the card's content. Some quick example text to build on the card title and make up the bulk of the card's content. "),a.Rb(),a.Rb(),a.Rb(),a.Rb(),a.Sb(62,"div",36),a.Sb(63,"div",37),a.Ob(64,"i",42),a.Sb(65,"h5",39),a.sc(66,"Web Design"),a.Rb(),a.Sb(67,"div",40),a.Sb(68,"p",41),a.sc(69," Some quick example text to build on the card title and make up the bulk of the card's content. Some quick example text to build on the card title and make up the bulk of the card's content. Some quick example text to build on the card title and make up the bulk of the card's content. "),a.Rb(),a.Rb(),a.Rb(),a.Rb(),a.Sb(70,"div",36),a.Sb(71,"div",37),a.Ob(72,"i",43),a.Sb(73,"h5",39),a.sc(74,"Web Development"),a.Rb(),a.Sb(75,"div",40),a.Sb(76,"p",41),a.sc(77," Some quick example text to build on the card title and make up the bulk of the card's content. Some quick example text to build on the card title and make up the bulk of the card's content. Some quick example text to build on the card title and make up the bulk of the card's content. "),a.Rb(),a.Rb(),a.Rb(),a.Rb(),a.Rb(),a.Rb(),a.Sb(78,"div",26),a.Sb(79,"div",13),a.Sb(80,"div",44),a.Sb(81,"h2",45,46),a.sc(83,"Experience"),a.Rb(),a.Rb(),a.Rb(),a.Sb(84,"div",13),a.Sb(85,"div",47),a.Sb(86,"ul",48),a.Sb(87,"li"),a.Sb(88,"a",49),a.sc(89,"Frontend Developer"),a.Rb(),a.Sb(90,"a",50),a.sc(91,"20 August, 2020"),a.Rb(),a.Sb(92,"p"),a.sc(93,"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque scelerisque diam non nisi semper, et elementum lorem ornare. Maecenas placerat facilisis mollis. Duis sagittis ligula in sodales vehicula...."),a.Rb(),a.Rb(),a.Sb(94,"li"),a.Sb(95,"a",51),a.sc(96,"UI/UX Designer"),a.Rb(),a.Sb(97,"a",50),a.sc(98,"20 February, 2020"),a.Rb(),a.Sb(99,"p"),a.sc(100,"Curabitur purus sem, malesuada eu luctus eget, suscipit sed turpis. Nam pellentesque felis vitae justo accumsan, sed semper nisi sollicitudin..."),a.Rb(),a.Rb(),a.Sb(101,"li"),a.Sb(102,"a",51),a.sc(103,"IT Support"),a.Rb(),a.Sb(104,"a",50),a.sc(105,"1 January, 2019"),a.Rb(),a.Sb(106,"p"),a.sc(107,"Fusce ullamcorper ligula sit amet quam accumsan aliquet. Sed nulla odio, tincidunt vitae nunc vitae, mollis pharetra velit. Sed nec tempor nibh..."),a.Rb(),a.Rb(),a.Rb(),a.Rb(),a.Rb(),a.Rb(),a.Sb(108,"div",26),a.Sb(109,"div",13),a.Sb(110,"div",44),a.Sb(111,"h2",52,53),a.sc(113,"Recent Portfolio"),a.Rb(),a.Rb(),a.Rb(),a.Sb(114,"div",54),a.Sb(115,"div",55),a.Sb(116,"div",56),a.Sb(117,"div",57),a.Ob(118,"img",58),a.Sb(119,"div",59),a.Sb(120,"h5",60),a.sc(121,"UI Design"),a.Rb(),a.Rb(),a.Rb(),a.Rb(),a.Rb(),a.Sb(122,"div",55),a.Sb(123,"div",61),a.Sb(124,"div",57),a.Ob(125,"img",62),a.Sb(126,"div",59),a.Sb(127,"h5",60),a.sc(128,"UI Design"),a.Rb(),a.Rb(),a.Rb(),a.Rb(),a.Rb(),a.Sb(129,"div",55),a.Sb(130,"div",56),a.Sb(131,"div",57),a.Ob(132,"img",63),a.Sb(133,"div",59),a.Sb(134,"h5",60),a.sc(135,"UI Design"),a.Rb(),a.Rb(),a.Rb(),a.Rb(),a.Rb(),a.Rb(),a.Sb(136,"div",13),a.Sb(137,"div",64),a.Sb(138,"a",65),a.Yb("click",function(){return e.goToPortfolios()}),a.sc(139,"View More Portfolio"),a.Rb(),a.Rb(),a.Rb(),a.Rb(),a.Sb(140,"div",2),a.Sb(141,"div",66),a.Ob(142,"div",44),a.Rb(),a.Rb(),a.Sb(143,"div",26),a.Sb(144,"div",13),a.Sb(145,"div",44),a.Sb(146,"h2",67,68),a.sc(148,"Featured Posts"),a.Rb(),a.Rb(),a.Rb(),a.Sb(149,"div",35),a.rc(150,v,26,16,"div",69),a.Rb(),a.Sb(151,"div",13),a.Sb(152,"div",64),a.Sb(153,"a",65),a.Yb("click",function(){return e.goToBlogs()}),a.sc(154,"View More Post"),a.Rb(),a.Rb(),a.Rb(),a.Rb(),a.Sb(155,"div",26),a.Sb(156,"div",13),a.Sb(157,"div",44),a.Sb(158,"h2",70,71),a.sc(160,"Give Me Feedback"),a.Rb(),a.Rb(),a.Rb(),a.Sb(161,"div",72),a.Sb(162,"div",73),a.Sb(163,"form"),a.Sb(164,"div",74),a.Sb(165,"div",75),a.Sb(166,"label",76),a.sc(167,"FirstName"),a.Rb(),a.Ob(168,"input",77),a.Rb(),a.Sb(169,"div",75),a.Sb(170,"label",78),a.sc(171,"LastName"),a.Rb(),a.Ob(172,"input",79),a.Rb(),a.Rb(),a.Sb(173,"div",80),a.Sb(174,"label",81),a.sc(175,"Email"),a.Rb(),a.Ob(176,"input",82),a.Rb(),a.Sb(177,"div",80),a.Sb(178,"label",83),a.sc(179,"Message"),a.Rb(),a.Ob(180,"textarea",84),a.Rb(),a.Sb(181,"button",85),a.sc(182,"Send"),a.Rb(),a.Rb(),a.Rb(),a.Sb(183,"div",86),a.Sb(184,"div",87),a.Ob(185,"img",88),a.Sb(186,"a",89),a.sc(187,"Star vector created by vectorjuice - www.freepik.com"),a.Rb(),a.Rb(),a.Rb(),a.Rb(),a.Rb(),a.Sb(188,"div",90),a.Sb(189,"div",91),a.Sb(190,"button",92),a.Yb("click",function(){return e.goToTop()}),a.sc(191,"Top"),a.Rb(),a.Rb(),a.Rb(),a.Ob(192,"app-footer")),2&t&&(a.Cb(47),a.gc("ngForOf",e.myStack),a.Cb(103),a.gc("ngForOf",e.pureBlog))},styles:['html[_ngcontent-%COMP%]{scroll-behavior:smooth}ul.timeline[_ngcontent-%COMP%]{list-style-type:none;position:relative}ul.timeline[_ngcontent-%COMP%]:before{content:" ";background:#d4d9df;display:inline-block;position:absolute;left:29px;width:2px;height:100%;z-index:400}ul.timeline[_ngcontent-%COMP%] > li[_ngcontent-%COMP%]{margin:20px 0;padding-left:20px}ul.timeline[_ngcontent-%COMP%] > li[_ngcontent-%COMP%]:before{content:" ";background:#fff;display:inline-block;position:absolute;border-radius:50%;border:3px solid #22c0e8;left:20px;width:20px;height:20px;z-index:400}#home[_ngcontent-%COMP%]{background-color:#0bceaf;font-size:14px;line-height:24px;letter-spacing:1px;font-weight:700;padding:10px 30px;display:inline;border-top-left-radius:20px;border-top-right-radius:20px;border-bottom-right-radius:20px;border-bottom-left-radius:0;color:#fff}.reformat[_ngcontent-%COMP%]{padding-left:0!important;padding-right:0!important;padding-top:0!important}@media only screen and (min-width:601px){#header-jumbo[_ngcontent-%COMP%]{height:400px!important}}@media only screen and (max-width:600px){.profile[_ngcontent-%COMP%]{display:none!important}#header-jumbo[_ngcontent-%COMP%]{height:320px!important;margin-top:3em!important}#feedback[_ngcontent-%COMP%], #hidden[_ngcontent-%COMP%]{display:none!important}.timeline[_ngcontent-%COMP%]{margin-left:-20px}.name[_ngcontent-%COMP%]{font-size:3em!important}.job[_ngcontent-%COMP%]{font-size:1.5em!important}.port[_ngcontent-%COMP%]{margin-top:10px!important;margin-bottom:10px!important}#aboutme[_ngcontent-%COMP%]{text-align:center!important;margin-top:-10px;margin-bottom:20px}}'],data:{animation:[n.a,Object(o.j)("changeState",[Object(o.g)("rest",Object(o.h)({transform:"scale(1)"})),Object(o.g)("hover",Object(o.h)({transform:"scale(1.1)"})),Object(o.i)("rest => hover",Object(o.e)("400ms ease-in")),Object(o.i)("hover => rest",Object(o.e)("200ms ease-out"))])]}}),t})()},ELNm:function(t,e,i){var n;n=function(){return function(t){var e={};function i(n){if(e[n])return e[n].exports;var o=e[n]={exports:{},id:n,loaded:!1};return t[n].call(o.exports,o,o.exports,i),o.loaded=!0,o.exports}return i.m=t,i.c=e,i.p="",i(0)}([function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=function(){function t(t,e){for(var i=0;i<e.length;i++){var n=e[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(e,i,n){return i&&t(e.prototype,i),n&&t(e,n),e}}(),o=i(1),s=i(3),r=function(){function t(e,i){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),o.initializer.load(this,i,e),this.begin()}return n(t,[{key:"toggle",value:function(){this.pause.status?this.start():this.stop()}},{key:"stop",value:function(){this.typingComplete||this.pause.status||(this.toggleBlinking(!0),this.pause.status=!0,this.options.onStop(this.arrayPos,this))}},{key:"start",value:function(){this.typingComplete||this.pause.status&&(this.pause.status=!1,this.pause.typewrite?this.typewrite(this.pause.curString,this.pause.curStrPos):this.backspace(this.pause.curString,this.pause.curStrPos),this.options.onStart(this.arrayPos,this))}},{key:"destroy",value:function(){this.reset(!1),this.options.onDestroy(this)}},{key:"reset",value:function(){var t=arguments.length<=0||void 0===arguments[0]||arguments[0];clearInterval(this.timeout),this.replaceText(""),this.cursor&&this.cursor.parentNode&&(this.cursor.parentNode.removeChild(this.cursor),this.cursor=null),this.strPos=0,this.arrayPos=0,this.curLoop=0,t&&(this.insertCursor(),this.options.onReset(this),this.begin())}},{key:"begin",value:function(){var t=this;this.options.onBegin(this),this.typingComplete=!1,this.shuffleStringsIfNeeded(this),this.insertCursor(),this.bindInputFocusEvents&&this.bindFocusEvents(),this.timeout=setTimeout(function(){t.currentElContent&&0!==t.currentElContent.length?t.backspace(t.currentElContent,t.currentElContent.length):t.typewrite(t.strings[t.sequence[t.arrayPos]],t.strPos)},this.startDelay)}},{key:"typewrite",value:function(t,e){var i=this;this.fadeOut&&this.el.classList.contains(this.fadeOutClass)&&(this.el.classList.remove(this.fadeOutClass),this.cursor&&this.cursor.classList.remove(this.fadeOutClass));var n=this.humanizer(this.typeSpeed),o=1;!0!==this.pause.status?this.timeout=setTimeout(function(){e=s.htmlParser.typeHtmlChars(t,e,i);var n=0,r=t.substr(e);if("^"===r.charAt(0)&&/^\^\d+/.test(r)){var a=1;a+=(r=/\d+/.exec(r)[0]).length,n=parseInt(r),i.temporaryPause=!0,i.options.onTypingPaused(i.arrayPos,i),t=t.substring(0,e)+t.substring(e+a),i.toggleBlinking(!0)}if("`"===r.charAt(0)){for(;"`"!==t.substr(e+o).charAt(0)&&(o++,!(e+o>t.length)););var c=t.substring(0,e),l=t.substring(c.length+1,e+o),u=t.substring(e+o+1);t=c+l+u,o--}i.timeout=setTimeout(function(){i.toggleBlinking(!1),e>=t.length?i.doneTyping(t,e):i.keepTyping(t,e,o),i.temporaryPause&&(i.temporaryPause=!1,i.options.onTypingResumed(i.arrayPos,i))},n)},n):this.setPauseStatus(t,e,!0)}},{key:"keepTyping",value:function(t,e,i){0===e&&(this.toggleBlinking(!1),this.options.preStringTyped(this.arrayPos,this));var n=t.substr(0,e+=i);this.replaceText(n),this.typewrite(t,e)}},{key:"doneTyping",value:function(t,e){var i=this;this.options.onStringTyped(this.arrayPos,this),this.toggleBlinking(!0),this.arrayPos===this.strings.length-1&&(this.complete(),!1===this.loop||this.curLoop===this.loopCount)||(this.timeout=setTimeout(function(){i.backspace(t,e)},this.backDelay))}},{key:"backspace",value:function(t,e){var i=this;if(!0!==this.pause.status){if(this.fadeOut)return this.initFadeOut();this.toggleBlinking(!1);var n=this.humanizer(this.backSpeed);this.timeout=setTimeout(function(){e=s.htmlParser.backSpaceHtmlChars(t,e,i);var n=t.substr(0,e);if(i.replaceText(n),i.smartBackspace){var o=i.strings[i.arrayPos+1];i.stopNum=o&&n===o.substr(0,e)?e:0}e>i.stopNum?(e--,i.backspace(t,e)):e<=i.stopNum&&(i.arrayPos++,i.arrayPos===i.strings.length?(i.arrayPos=0,i.options.onLastStringBackspaced(),i.shuffleStringsIfNeeded(),i.begin()):i.typewrite(i.strings[i.sequence[i.arrayPos]],e))},n)}else this.setPauseStatus(t,e,!0)}},{key:"complete",value:function(){this.options.onComplete(this),this.loop?this.curLoop++:this.typingComplete=!0}},{key:"setPauseStatus",value:function(t,e,i){this.pause.typewrite=i,this.pause.curString=t,this.pause.curStrPos=e}},{key:"toggleBlinking",value:function(t){this.cursor&&(this.pause.status||this.cursorBlinking!==t&&(this.cursorBlinking=t,t?this.cursor.classList.add("typed-cursor--blink"):this.cursor.classList.remove("typed-cursor--blink")))}},{key:"humanizer",value:function(t){return Math.round(Math.random()*t/2)+t}},{key:"shuffleStringsIfNeeded",value:function(){this.shuffle&&(this.sequence=this.sequence.sort(function(){return Math.random()-.5}))}},{key:"initFadeOut",value:function(){var t=this;return this.el.className+=" "+this.fadeOutClass,this.cursor&&(this.cursor.className+=" "+this.fadeOutClass),setTimeout(function(){t.arrayPos++,t.replaceText(""),t.strings.length>t.arrayPos?t.typewrite(t.strings[t.sequence[t.arrayPos]],0):(t.typewrite(t.strings[0],0),t.arrayPos=0)},this.fadeOutDelay)}},{key:"replaceText",value:function(t){this.attr?this.el.setAttribute(this.attr,t):this.isInput?this.el.value=t:"html"===this.contentType?this.el.innerHTML=t:this.el.textContent=t}},{key:"bindFocusEvents",value:function(){var t=this;this.isInput&&(this.el.addEventListener("focus",function(e){t.stop()}),this.el.addEventListener("blur",function(e){t.el.value&&0!==t.el.value.length||t.start()}))}},{key:"insertCursor",value:function(){this.showCursor&&(this.cursor||(this.cursor=document.createElement("span"),this.cursor.className="typed-cursor",this.cursor.innerHTML=this.cursorChar,this.el.parentNode&&this.el.parentNode.insertBefore(this.cursor,this.el.nextSibling)))}}]),t}();e.default=r,t.exports=e.default},function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n,o=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var i=arguments[e];for(var n in i)Object.prototype.hasOwnProperty.call(i,n)&&(t[n]=i[n])}return t},s=function(){function t(t,e){for(var i=0;i<e.length;i++){var n=e[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(e,i,n){return i&&t(e.prototype,i),n&&t(e,n),e}}(),r=(n=i(2))&&n.__esModule?n:{default:n},a=function(){function t(){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t)}return s(t,[{key:"load",value:function(t,e,i){if(t.el="string"==typeof i?document.querySelector(i):i,t.options=o({},r.default,e),t.isInput="input"===t.el.tagName.toLowerCase(),t.attr=t.options.attr,t.bindInputFocusEvents=t.options.bindInputFocusEvents,t.showCursor=!t.isInput&&t.options.showCursor,t.cursorChar=t.options.cursorChar,t.cursorBlinking=!0,t.elContent=t.attr?t.el.getAttribute(t.attr):t.el.textContent,t.contentType=t.options.contentType,t.typeSpeed=t.options.typeSpeed,t.startDelay=t.options.startDelay,t.backSpeed=t.options.backSpeed,t.smartBackspace=t.options.smartBackspace,t.backDelay=t.options.backDelay,t.fadeOut=t.options.fadeOut,t.fadeOutClass=t.options.fadeOutClass,t.fadeOutDelay=t.options.fadeOutDelay,t.isPaused=!1,t.strings=t.options.strings.map(function(t){return t.trim()}),t.stringsElement="string"==typeof t.options.stringsElement?document.querySelector(t.options.stringsElement):t.options.stringsElement,t.stringsElement){t.strings=[],t.stringsElement.style.display="none";var n=Array.prototype.slice.apply(t.stringsElement.children),s=n.length;if(s)for(var a=0;a<s;a+=1)t.strings.push(n[a].innerHTML.trim())}for(var a in t.strPos=0,t.arrayPos=0,t.stopNum=0,t.loop=t.options.loop,t.loopCount=t.options.loopCount,t.curLoop=0,t.shuffle=t.options.shuffle,t.sequence=[],t.pause={status:!1,typewrite:!0,curString:"",curStrPos:0},t.typingComplete=!1,t.strings)t.sequence[a]=a;t.currentElContent=this.getCurrentElContent(t),t.autoInsertCss=t.options.autoInsertCss,this.appendAnimationCss(t)}},{key:"getCurrentElContent",value:function(t){return t.attr?t.el.getAttribute(t.attr):t.isInput?t.el.value:"html"===t.contentType?t.el.innerHTML:t.el.textContent}},{key:"appendAnimationCss",value:function(t){var e="data-typed-js-css";if(t.autoInsertCss&&(t.showCursor||t.fadeOut)&&!document.querySelector("["+e+"]")){var i=document.createElement("style");i.type="text/css",i.setAttribute(e,!0);var n="";t.showCursor&&(n+="\n        .typed-cursor{\n          opacity: 1;\n        }\n        .typed-cursor.typed-cursor--blink{\n          animation: typedjsBlink 0.7s infinite;\n          -webkit-animation: typedjsBlink 0.7s infinite;\n                  animation: typedjsBlink 0.7s infinite;\n        }\n        @keyframes typedjsBlink{\n          50% { opacity: 0.0; }\n        }\n        @-webkit-keyframes typedjsBlink{\n          0% { opacity: 1; }\n          50% { opacity: 0.0; }\n          100% { opacity: 1; }\n        }\n      "),t.fadeOut&&(n+="\n        .typed-fade-out{\n          opacity: 0;\n          transition: opacity .25s;\n        }\n        .typed-cursor.typed-cursor--blink.typed-fade-out{\n          -webkit-animation: 0;\n          animation: 0;\n        }\n      "),0!==i.length&&(i.innerHTML=n,document.body.appendChild(i))}}}]),t}();e.default=a;var c=new a;e.initializer=c},function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={strings:["These are the default values...","You know what you should do?","Use your own!","Have a great day!"],stringsElement:null,typeSpeed:0,startDelay:0,backSpeed:0,smartBackspace:!0,shuffle:!1,backDelay:700,fadeOut:!1,fadeOutClass:"typed-fade-out",fadeOutDelay:500,loop:!1,loopCount:1/0,showCursor:!0,cursorChar:"|",autoInsertCss:!0,attr:null,bindInputFocusEvents:!1,contentType:"html",onBegin:function(t){},onComplete:function(t){},preStringTyped:function(t,e){},onStringTyped:function(t,e){},onLastStringBackspaced:function(t){},onTypingPaused:function(t,e){},onTypingResumed:function(t,e){},onReset:function(t){},onStop:function(t,e){},onStart:function(t,e){},onDestroy:function(t){}},t.exports=e.default},function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=function(){function t(t,e){for(var i=0;i<e.length;i++){var n=e[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(e,i,n){return i&&t(e.prototype,i),n&&t(e,n),e}}(),n=function(){function t(){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t)}return i(t,[{key:"typeHtmlChars",value:function(t,e,i){if("html"!==i.contentType)return e;var n=t.substr(e).charAt(0);if("<"===n||"&"===n){var o;for(o="<"===n?">":";";t.substr(e+1).charAt(0)!==o&&!(1+ ++e>t.length););e++}return e}},{key:"backSpaceHtmlChars",value:function(t,e,i){if("html"!==i.contentType)return e;var n=t.substr(e).charAt(0);if(">"===n||";"===n){var o;for(o=">"===n?"<":"&";t.substr(e-1).charAt(0)!==o&&!(--e<0););e--}return e}}]),t}();e.default=n;var o=new n;e.htmlParser=o}])},t.exports=n()},OAPv:function(t,e,i){"use strict";i.d(e,"a",function(){return o});var n=i("fXoL");let o=(()=>{class t{transform(t){return t.slice(0,100)+" ..."}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275pipe=n.Mb({name:"caption",type:t,pure:!0}),t})()}}]);