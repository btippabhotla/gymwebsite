(this["webpackJsonpreact-gym-template"]=this["webpackJsonpreact-gym-template"]||[]).push([[0],[,,,,function(e,t,a){e.exports=a.p+"static/media/metamorphicLogo.223bffcb.png"},function(e,t,a){e.exports=a.p+"static/media/mainBackground.324772d3.jpg"},function(e,t,a){e.exports=a.p+"static/media/forGirl.66fe56f1.jpg"},function(e,t,a){e.exports=a.p+"static/media/healthyMeals.7e71f02c.jpg"},function(e,t,a){e.exports=a.p+"static/media/iconOne.d0f9843c.svg"},function(e,t,a){e.exports=a.p+"static/media/iconTwo.f8adc4e0.svg"},function(e,t,a){e.exports=a.p+"static/media/iconThree.c4c60cd2.svg"},function(e,t,a){e.exports=a.p+"static/media/iconFour.6205017e.svg"},function(e,t,a){e.exports=a.p+"static/media/offerBg.ce06d1b1.png"},function(e,t,a){e.exports=a.p+"static/media/galleryOne.dabd4b71.png"},function(e,t,a){e.exports=a.p+"static/media/galleryTwo.ee2b9bbb.png"},function(e,t,a){e.exports=a.p+"static/media/galleryThree.27bfe886.png"},function(e,t,a){e.exports=a.p+"static/media/galleryFour.7ee3bdc1.png"},function(e,t,a){e.exports=a.p+"static/media/galleryFive.688011ae.png"},function(e,t,a){e.exports=a.p+"static/media/gallerySix.11dc41bb.png"},function(e,t,a){e.exports=a.p+"static/media/secondBackground.12b8b36e.jpg"},function(e,t,a){e.exports=a.p+"static/media/aboutMe.2a2e2420.jpg"},function(e,t,a){e.exports=a.p+"static/media/bigOfferBg.b969262b.webp"},function(e,t,a){e.exports=a.p+"static/media/imageOne.6e875c11.jpg"},function(e,t,a){e.exports=a.p+"static/media/imageTwo.6863b64f.jpg"},function(e,t,a){e.exports=a.p+"static/media/imageThree.b182c13f.jpg"},function(e,t,a){e.exports=a(34)},,,,,function(e,t,a){},function(e,t,a){},,,function(e,t,a){"use strict";a.r(t);var i=a(1),n=a.n(i),o=a(3),r=a.n(o),c=(a(30),a(31),a(0));const l=c.a`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background: radial-gradient(
    ellipse at center,
    rgba(181, 8, 8, 0.38) 0%,
    rgba(0, 0, 0, 0.6) 100%
  );
`;var d=()=>Object(c.b)("div",{css:l,className:"overlay"});const s=c.a`
  width: 100%;
  max-width: 1140px;
  margin: 0 auto;
`;var p=e=>{let{children:t}=e;return Object(c.b)("div",{css:s,className:"container"},t)},m=a(4),b=a.n(m);var h=()=>n.a.createElement("img",{className:"logo",src:b.a,alt:"logo",height:"120",style:{borderRadius:"2.5rem"}});const x=c.a`
  a {
    text-decoration: none;
    text-transform: uppercase;
    display: inline-block;
    font-size: 15px;
    font-weight: 600;
    color: #fff;
    margin: 0 22px;
    position: relative;
    transition: color 700ms ease-in-out;
    &::after {
      position: absolute;
      content: "";
      background: #ff1414;
      width: 100%;
      height: 3px;
      bottom: -33px;
      left: 0;
      opacity: 0;
      transition: opacity 700ms ease-in-out;
    }
    &:hover {
      color: #ff1414;
      &::after {
        opacity: 1;
      }
    }
  }
  @media (max-width: 1225px) {
    padding: 80px 40px;
    z-index: 30;
    position: absolute;
    top: 0;
    left: 0;
    opacity: 1;
    min-height: 96vh;
    display: flex;
    flex-direction: column;
    width: 100%;
    max-width: 320px;
    background: #060706;
    transition: left 600ms ease-in-out, opacity 600ms ease-in-out;
    &.hidden {
      left: -500px;
      opacity: 0;
    }
    a {
      margin: 0 0 20px 0;
      font-size: 25px;
      text-align: left;
      user-select: none;
      &:hover {
        color: #fff;
        &::after {
          opacity: 0;
        }
      }
    }
  }
`;var f=e=>{let{openMenu:t}=e;return Object(c.b)("div",{css:x,className:t?"menu":"hidden"},Object(c.b)("a",{href:"#home"},"home"),Object(c.b)("a",{href:"#about"},"about"),Object(c.b)("a",{href:"#gallery"},"gallery"),Object(c.b)("a",{href:"#pages"},"pages"),Object(c.b)("a",{href:"#blog"},"blog"),Object(c.b)("a",{href:"#contact"},"contact"))};const g=c.a`
  text-decoration: none;
  display: inline-block;
  text-transform: uppercase;
  padding: 15px 44px;
  background: #ff1414;
  color: #fff;
  font-size: 14px;
  font-weight: 600;
  border: 1px solid transparent;
  transition: all 500ms ease-in-out;
`;var u=e=>{let{text:t}=e;return Object(c.b)("a",{href:"#/",css:g,className:"btn"},t)};const w=c.a`
  width: 100%;
  position: absolute;
  top: 0;
  padding: 40px 0;
  .container {
    max-width: 78%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    .logo {
      cursor: pointer;
    }
    #burgerMenu {
      cursor: pointer;
      display: none;
    }
  }
  @media (max-width: 1225px) {
    .container {
      max-width: 90%;
      .btn {
        display: none;
      }
      #burgerMenu {
        display: block;
      }
    }
  }
`;var y=()=>{const[e,t]=Object(i.useState)(!1);return Object(c.b)("nav",{css:w},Object(c.b)(p,null,Object(c.b)(h,null),Object(c.b)(f,{openMenu:e}),Object(c.b)("i",{onClick:()=>t(!e),id:"burgerMenu",className:e?"fas fa-times fa-lg":"fas fa-align-right fa-lg"})))};const v=c.a`
  h2 {
    font-size: 6rem;
    font-weight: 800;
    line-height: 1;
    text-transform: uppercase;
  }
  h1 {
    font-size: 150px;
    font-weight: 900;
    line-height: 1;
    margin: 24px 0;
    text-transform: uppercase;
  }
  p {
    font-size: 21px;
  }
  .btn {
    margin: 32px 0 0 0;
    padding: 15px 50px;
    &:hover {
      background: transparent;
      color: #ff1414;
      border: 1px solid #ff1414;
    }
  }
  @media (max-width: 640px) {
    h1 {
      font-size: 40px;
    }
    p {
      font-size: 18px;
    }
  }
  @media (min-width: 641px) and (max-width: 965px) {
    h1 {
      font-size: 80px;
    }
  }
`;var j=()=>Object(c.b)("div",{css:v,className:"mainInfo"},Object(c.b)("h2",null,"Your metamorphosis starts here"),Object(c.b)("p",null,"Change your life one rep at a time.")),O=a(5),k=a.n(O);const z=c.a`
  width: 100%;
  min-height: 96vh;
  background: url('${k.a}') no-repeat center/cover;
  display: flex;
  position: relative;
  .container {
    margin: auto;
    text-align: center;
    z-index: 2;
    color: #fff;
  }
  @media (max-width: 965px){
    .container{
      max-width: 90%;
    }
  }
`;var N=()=>Object(c.b)("section",{css:z,className:"main",id:"home"},Object(c.b)(d,null),Object(c.b)(y,null),Object(c.b)(p,null,Object(c.b)(j,null)));const I=c.a`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background: #000;
  opacity: 0.7;
`;var T=()=>Object(c.b)("div",{css:I,className:"imgOverlay"});const C=c.a`
  z-index: 3;
  color: #fff;
  position: relative;
  width: 100%;
  max-width: 380px;
  text-align: center;
  margin: 0 auto;
  h2 {
    font-size: 36px;
    font-weight: 800;
    line-height: 1;
  }
  p {
    font-size: 17px;
    font-weight: 300;
    line-height: 1.6;
    margin: 18px 0 26px 0;
  }
  .btn {
    &:hover {
      background: transparent;
      color: #ff1414;
      border: 1px solid #ff1414;
    }
  }
`;var B=e=>{let{title:t,description:a}=e;return Object(c.b)("div",{css:C,className:"cardInfo"},Object(c.b)("h2",null,t),Object(c.b)("p",null,a))};const E=c.a`
  width: 100%;
  max-width: 50%;
  padding: 200px 0;
  position: relative;
  background-size: 100% 100%;
  &:hover {
    background-size: 105% 105%;
  }
  @media(max-width: 1000px) {
    max-width: 100%;
  }
`;var M=e=>{let{title:t,description:a}=e;return Object(c.b)("div",{css:E,className:"card"},Object(c.b)(T,null),Object(c.b)(B,{title:t,description:a}))},S=a(6),D=a.n(S),$=a(7),A=a.n($);const W=c.a`
  width: 100%;
  .container {
    max-width: 100%;
    display: flex;
    .card {
      background: url('${D.a}') no-repeat center/cover;
      background-size: 100% 100%;
      transition: all 300ms ease-in-out;
      &:hover {
        background-size: 105% 105%;
      }
      &:last-of-type {
        background: url('${A.a}') no-repeat center/cover;
        background-size: 100% 100%;
        &:hover{
            background-size: 105% 105%;
        }
      }
    }
  }
  @media(max-width: 1000px){
    .container{
      flex-direction: column;
      align-items: center;
    }
  }
`;var F=()=>Object(c.b)("section",{css:W,className:"joinUs",id:"blog"},Object(c.b)(p,null,Object(c.b)(M,{title:"Personalized programs",description:"Professional guidance to help you achieve your fitness goals with tailored workouts for women of all ages."}),Object(c.b)(M,{title:"Nutritional guidance",description:"Expert advice on nutrition plans designed to complement your fitness routine and promote overall well-being."})));const G=c.a`
  text-align: center;
  width: 100%;
  max-width: 600px;
  margin: 0 auto;
  h2 {
    font-size: 40px;
    line-height: 1;
    color: #fff;
  }
  p {
    font-size: 16px;
    color: #aab1b7;
    line-height: 1.5;
    margin: 10px 0 0 0;
  }
`;var L=e=>{let{title:t,desc:a}=e;return Object(c.b)("div",{css:G,className:"title"},Object(c.b)("h2",null,t),Object(c.b)("p",null,a))};const P=c.a`
  width: 100%;
  max-width: 25%;
  color: #fff;
  text-align: center;
  padding: 0 20px;
  h3 {
    font-size: 24px;
    line-height: 1;
    margin: 24px 0 0 0;
  }
  p {
    margin: 12px 0 0 0;
    line-height: 1.6;
    color: #aab1b7;
  }
  @media(max-width: 579px){
    max-width: 100%;
    margin-bottom: 50px;
    p{
      font-size: 14px;
    }
  }
  @media (min-width: 580px) and (max-width: 1000px) {
    max-width: 47%;
    margin-bottom: 50px;
  }
`;var H=e=>{let{cardImg:t,cardTitle:a,cardDescription:i}=e;return Object(c.b)("div",{css:P,className:"featuresCard"},Object(c.b)("img",{src:t,alt:"icon"}),Object(c.b)("h3",null,a),Object(c.b)("p",null,i))},Y=a(8),J=a.n(Y),U=a(9),q=a.n(U),R=a(10),K=a.n(R),Q=a(11),V=a.n(Q);const X=[{cardImg:J.a,cardTitle:"Build strength",cardDescription:"The strength you build in the gym will begin to reflect in everyday life!"},{cardImg:q.a,cardTitle:"Build discipline",cardDescription:"Discipline is the bridge between goals and accomplishment."},{cardImg:K.a,cardTitle:"Build confidence",cardDescription:"Confidence comes not from always being right but from not fearing to be wrong."},{cardImg:V.a,cardTitle:"Build a new you",cardDescription:"You'll be amazed at how much transformation 1 year can bring! All it takes is that first step!"}],Z=c.a`
  width: 100%;
  padding: 170px 0;
  background: #000;
  .container {
    display: flex;
    padding: 80px 0 0 0;
  }
  @media (max-width: 579px) {
    .title {
      padding: 0 40px;
    }
    .container {
      flex-direction: column;
      align-items: center;
    }
  }
  @media (min-width: 580px) and (max-width: 1000px) {
    .title {
      padding: 0 40px;
    }
    .container {
      flex-wrap: wrap;
      justify-content: space-between;
      max-width: 640px;
    }
  }
`;var _=()=>Object(c.b)("section",{css:Z,className:"features",id:"about"},Object(c.b)(L,{title:"With me, you will..."}),Object(c.b)(p,null,X.map((e,t)=>Object(c.b)(H,{key:t,cardImg:e.cardImg,cardTitle:e.cardTitle,cardDescription:e.cardDescription}))));c.a`
  width: 100%;
  max-width: 560px;
  color: #fff;
  h3 {
    font-size: 42px;
    font-weight: 900;
    line-height: 1.3;
  }
  h2 {
    font-size: 80px;
    font-weight: 500;
    line-height: 1;
    color: #ff1414;
    margin: 20px 0 24px 0;
  }
  p {
    line-height: 1.7;
  }
  .btn {
    margin: 40px 0 0 0;
    &:hover {
      background: transparent;
      color: #ff1414;
      border: 1px solid #ff1414;
    }
  }
  @media (max-width: 800px) {
    p {
      font-size: 16px;
      br {
        display: none;
      }
    }
  }
`;var ee=a(12),te=a.n(ee);c.a`
  width: 100%;
  padding: 200px 0;
  background: url('${te.a}') no-repeat center/cover;
  .container {
    display: flex;
    justify-content: flex-end;
  }
  @media(max-width: 800px) {
    .container{
      justify-content: center;
      max-width: 90%;
    }
  }
`;c.a`
  padding-bottom: 30px;
  border-bottom: 1px solid #313131;
  h3 {
    font-size: 28px;
    color: #fff;
    line-height: 1;
  }
  h5 {
    color: #ff1414;
    font-size: 26px;
    margin: 14px 0 0 0;
    line-height: 1;
  }
`;c.a`
  padding-top: 30px;
  p {
    color: #fff;
    font-size: 15px;
    margin-bottom: 26px;
    &:nth-child(3),
    &:nth-child(4) {
      color: #7a838b;
    }
  }
  .btn {
    margin: 20px 0 0 0;
    &:hover {
      background: transparent;
      color: #ff1414;
      border: 1px solid #ff1414;
    }
  }
`;c.a`
  width: 100%;
  max-width: 32%;
  padding: 40px 0;
  background: #1a1a1a;
  border: 1px solid transparent;
  text-align: center;
  cursor: pointer;
  transition: border 600ms ease-in-out;
  &:hover {
    border: 1px solid #ff1414;
  }
  @media (max-width: 799px) {
    max-width: 520px;
    margin-bottom: 26px;
  }
  @media(min-width: 800px) and (max-width: 1189px) {
    max-width: 48%;
    margin-bottom: 26px;
  }
`;c.a`
  width: 100%;
  padding: 140px 0;
  background: #000;
  .container {
    display: flex;
    justify-content: space-between;
    padding: 80px 0 0 0;
  }
  @media (max-width: 650px) {
    .title {
      padding: 0 40px;
    }
  }
  @media (max-width: 799px) {
    .container {
      flex-direction: column;
      align-items: center;
    }
  }
  @media (min-width: 800px) and (max-width: 1189px) {
    .container {
      max-width: 90%;
      flex-wrap: wrap;
    }
  }
  @media (max-width: 1190px) {
    .container {
      max-width: 90%;
    }
  }
`;c.a`
  width: 100%;
  max-width: 35%;
  height: 480px;
  position: relative;
  cursor: pointer;
  &:hover {
    .overlay {
      opacity: 1;
      transition: opacity 700ms ease-in-out;
    }
  }
  .overlay {
    opacity: 0;
  }
  img {
    width: 100%;
    height: 100%;
    display: block;
  }
`;a(13),a(14),a(15),a(16),a(17),a(18);c.a`
  .container {
    max-width: 100%;
    display: flex;
    flex-wrap: wrap;
    .galleryImg {
      &:nth-child(3),
      &:nth-child(4) {
        width: 100%;
        max-width: 30%;
      }
    }
  }
  @media (max-width: 769px) {
    .container {
      .galleryImg {
        max-width: 100%;
        &:nth-child(3),
        &:nth-child(4) {
          max-width: 100%;
        }
      }
    }
  }
  @media (min-width: 770px) and (max-width: 1000px) {
    .container {
      .galleryImg {
        max-width: 50%;
        &:nth-child(3),
        &:nth-child(4) {
          max-width: 50%;
        }
      }
    }
  }
`;var ae=a(19),ie=a.n(ae);const ne=c.a`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  .icon {
    width: 40px;
    height: 40px;
    border: 1px solid #909294;
    border-radius: 50%;
    display: flex;
    margin: 0 8px;
    color: #909294;
    cursor: pointer;
    transition: background 600ms ease-in-out, color 600ms ease-in-out,
      border 600ms ease-in-out;
    &:hover {
      background: #ff1414;
      border: 1px solid #ff1414;
      color: #fff;
    }
    i {
      margin: auto;
    }
  }
`;var oe=()=>Object(c.b)("div",{css:ne,className:"socialIcons"},Object(c.b)("div",{className:"icon"},Object(c.b)("i",{className:"fab fa-facebook-f"})),Object(c.b)("div",{className:"icon"},Object(c.b)("i",{className:"fab fa-twitter"})),Object(c.b)("div",{className:"icon"},Object(c.b)("i",{className:"fab fa-instagram"})));const re=c.a`
  position: absolute;
  right: 0;
  bottom: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.5);
  opacity: 0;
  height: 90%;
`;var ce=()=>Object(c.b)("div",{css:re,className:"cardOverlay"},Object(c.b)(oe,null));const le=c.a`
  color: #fff;
  &:hover {
    .cardOverlay {
      opacity: 1;
      height: 100%;
      transition: opacity 400ms ease-in-out, height 400ms ease-in-out;
    }
  }
  .trainerImg {
    position: relative;
  }
  h2 {
    font-size: 26px;
    font-weight: 900;
    line-height: 1;
    margin: 14px 0 0 0;
  }
  p {
    font-size: 16px;
    margin: 16px 0 0 0;
  }
  img {
   -webkit-filter: grayscale(100%); /* Safari 6.0 - 9.0 */
  filter: grayscale(100%);
  }
  @media (max-width: 769px) {
    width: 100%;
    max-width: 500px;
    margin-bottom: 30px;
    .trainerImg {
      img {
        width: 100%;
      }
    }
  }
  @media (min-width: 770px) and (max-width: 1200px) {
    width: 100%;
    max-width: 47%;
    margin-bottom: 30px;
    .trainerImg {
      img {
        width: 100%;
      }
    }
  }
`;var de=e=>{let{trainerName:t,trainerGender:a,trainerImg:i}=e;return Object(c.b)("div",{css:le,className:"trainerCard"},Object(c.b)("div",{className:"trainerImg"},Object(c.b)(ce,null),Object(c.b)("img",{src:i,alt:"trainer",height:"450"})),Object(c.b)("h2",null,t),Object(c.b)("p",null,a))},se=a(20),pe=a.n(se);const me=c.a`
  width: 100%;
  padding: 160px 0;
  text-align: center;
  position: relative;
  background: url('${ie.a}') no-repeat center/cover;
  .title{
    position: relative;
    z-index: 5;
  }
  .container {
    display: flex;
    justify-content: space-between;
    z-index: 6;
    position: relative;
    padding: 80px 0 0 0;
  }
  @media(max-width: 650px) {
    .title{
      padding: 0 40px;
    }
  }
  @media(max-width: 769px) {
      .container{
        max-width: 90%;
        flex-direction: column;
        align-items: center;
      }
  }
  @media(min-width: 770px) and (max-width: 1200px) {
    .container{
        max-width: 90%;
        flex-wrap: wrap;
      }
  }
`;var be=()=>Object(c.b)("section",{css:me,className:"trainers",id:"pages"},Object(c.b)(T,null),Object(c.b)(p,null,Object(c.b)(L,{title:"About Me",desc:"A small hand full of years ago, I was in a place where a number of you may be in right now. I had found myself points away from being pre-diabetic and was nearly 200Lb at my heaviest. Barely into my mid-twenties, I knew I had to make a change. I had my whole life ahead of me! One day I stepped into the gym, no idea where to begin and quickly fell in love. My metamorphosis began in 2021. Shortly after, I knew with every fiber of my being I was meant to help others with their own! Let's get to work!"}),Object(c.b)(de,{trainerName:"Haylea Brown",trainerGender:"Personal trainer",trainerImg:pe.a}))),he=a(21),xe=a.n(he);c.a`
  width: 100%;
  padding: 240px 0;
  text-align: center;
  background: url('${xe.a}') no-repeat center/cover;
  color: #fff;
  h2{
    font-size: 50px;
    font-weight: 900;
  }
  .btn{
    margin: 30px 0 0 0;
    &:hover {
      background: transparent;
      color: #ff1414;
      border: 1px solid #ff1414;
    }
  }
`;const fe=c.a`
  width: 100%;
  max-width: 1140px;
  margin: 0 auto;
  padding: 140px 0;
  display: flex;
  justify-content: space-between;
  .footerCard {
    width: 100%;
    max-width: 24%;
    color: #aab1b7;
    &:nth-child(2),
    &:nth-child(3) {
      max-width: 28%;
      display: flex;
      flex-direction: column;
      a {
        margin-bottom: 18px;
      }
    }
    &:nth-child(3) {
      p {
        margin: 24px 0 0 0;
      }
    }
    h2 {
      font-size: 24px;
      margin-bottom: 40px;
      color: #ff1414;
    }
    p {
      line-height: 1.5;
      margin-bottom: 8px;
    }
    a {
      text-decoration: none;
      display: inline-block;
      color: #aab1b7;
      margin-bottom: 8px;
      transition: color 600ms ease-in-out;
      &:hover {
        color: #ff1414;
      }
    }
    .footerSocials {
      width: 100%;
      padding: 40px 0 0 0;
      display: flex;
      align-items: center;
      i {
        margin-right: 30px;
        cursor: pointer;
        transition: color 600ms ease-in-out;
        &:hover {
          color: #ff1414;
        }
      }
    }
    .inputWrap {
      display: flex;
      position: relative;
      input {
        padding: 16px 0 16px 16px;
        width: 100%;
        border-radius: 50px;
        border: none;
        outline: none;
      }
      .btn {
        padding: 10px 20px;
        border-radius: 50px;
        position: absolute;
        top: 50%;
        right: 6px;
        transform: translateY(-50%);
        color: #fff;
        font-size: 14px;
        text-transform: capitalize;
      }
    }
  }
  @media (max-width: 640px) {
    flex-direction: column;
    .footerCard {
      max-width: 450px;
      margin-bottom: 40px;
      &:nth-child(2),
      &:nth-child(3) {
        max-width: 450px;
      }
    }
  }
  @media (min-width: 641px) and (max-width: 915px) {
    flex-wrap: wrap;
    .footerCard {
      max-width: 45%;
      &:first-of-type {
        margin-bottom: 40px;
      }
      &:nth-child(2),
      &:nth-child(3) {
        max-width: 45%;
      }
    }
  }
  @media (max-width: 916px) {
    .footerCard {
      p {
        font-size: 14px;
      }
      &:first-of-type {
        display: flex;
        flex-direction: column;
      }
    }
  }
  @media (max-width: 1200px) {
    max-width: 90%;
  }
`;var ge=()=>Object(c.b)("div",{className:"wrap",css:fe},Object(c.b)("div",{className:"footerCard"},Object(c.b)("h2",null,"Personal training by Halyea"),Object(c.b)("p",null,"Text or call: ",Object(c.b)("a",{href:"#/"},"(214) 407-4724")),Object(c.b)("a",{href:"#/"},"getfitwithhaylea@gmail.com"),Object(c.b)("div",{className:"footerSocials"},Object(c.b)("a",{href:"https://www.instagram.com/haylea.brown/"},"Find me on Instagram"))),Object(c.b)("div",{className:"footerCard"},Object(c.b)("h2",null,"Useful Links"),Object(c.b)("a",{href:"#/"},"About"),Object(c.b)("a",{href:"#/"},"Gallery"),Object(c.b)("a",{href:"#/"},"Contact")),Object(c.b)("div",{className:"footerCard"},Object(c.b)("h2",null,"Subscribe"),Object(c.b)("div",{className:"inputWrap"},Object(c.b)("input",{type:"email",placeholder:"Enter your mail"}),Object(c.b)(u,{text:"Subscribe"}))));const ue=c.a`
  background: #000;
  .container {
    padding: 30px 0;
    border-top: 1px solid #1a1a1a;
    text-align: center;
    p {
      font-size: 15px;
      color: #aab1b7;
      a {
        text-decoration: none;
        color: #ff1414;
      }
    }
  }
  @media (max-width: 1200px) {
    .container {
      max-width: 90%;
    }
  }
`;var we=()=>Object(c.b)("footer",{css:ue,id:"contact"},Object(c.b)(ge,null),Object(c.b)(p,null,Object(c.b)("p",null,"Copyright 2025, All rights reserved to Halyea Brown"))),ye=a(22),ve=a.n(ye),je=a(23),Oe=a.n(je),ke=a(24),ze=a.n(ke);ve.a,Oe.a,ze.a;var Ne=()=>n.a.createElement("div",{className:"App"},n.a.createElement(N,null),n.a.createElement(F,null),n.a.createElement(_,null),n.a.createElement(be,null),n.a.createElement(we,null));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(n.a.createElement(n.a.StrictMode,null,n.a.createElement(Ne,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(e=>{e.unregister()}).catch(e=>{console.error(e.message)})}],[[25,1,2]]]);
//# sourceMappingURL=main.3323d05a.chunk.js.map