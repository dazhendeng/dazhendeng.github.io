(this.webpackJsonppersonalweb=this.webpackJsonppersonalweb||[]).push([[0],{23:function(e,a,t){e.exports=t(33)},33:function(e,a,t){"use strict";t.r(a);var i=t(0),n=t.n(i),r=t(9),c=t.n(r),l=t(49),o=t(50),s=t(48),m=t(51),p=Object(s.a)((function(e){return{gridContainer:{height:"130px",alignItems:"flex-start"},gridItem1:{textAlign:"right"},typoType1:{right:"0%"},timeLineElement:{verticalAlign:"middle",textAlign:"center"},circleBase:{margin:"auto",borderRadius:"50%",width:"20px",height:"20px",left:"50%",background:"#3f51b5",border:"0px solid red"},verticalLine:{display:"inline-block",height:"110px",borderLeft:"2px solid black"},avatarType:{display:"block",margin:"auto",width:"120px",height:"120px",alignContent:"center",position:"relative"}}}));function g(e){var a=p(),t=e.element;return n.a.createElement(l.a,{container:!0,className:a.gridContainer},n.a.createElement(l.a,{xs:3,item:!0,className:a.gridItem1},n.a.createElement(o.a,{variant:"h6",className:a.typoType1},t.duration),n.a.createElement(o.a,{variant:"h6",className:a.typoType1},t.city+", "+t.country)),n.a.createElement(l.a,{item:!0,xs:1,className:a.timeLineElement},n.a.createElement("div",{className:a.circleBase}),n.a.createElement("div",{className:a.verticalLine})),n.a.createElement(l.a,{item:!0,xs:6},n.a.createElement(o.a,{variant:"h5"},t.title),n.a.createElement(o.a,{variant:"h6"},t.affiliation),n.a.createElement(o.a,{variant:"h6"},t.description)),n.a.createElement(l.a,{item:!0,xs:2},n.a.createElement(m.a,{src:t.src,className:a.avatarType})))}var u=function(e){return e.experience.map((function(e,a){return n.a.createElement(g,{element:e,key:a})}))},d=Object(s.a)((function(e){return{gridContainer:{height:"240px",display:"flex",alignItems:"flex-center",paddingTop:"10px",paddingBottom:"30px"},gridItem1:{textAlign:"right",verticalAlign:"middle",margin:"auto",display:"flex"},avatarType:{display:"block",margin:"auto",width:"160px",height:"160px",alignContent:"center",position:"relative"},gridItem2:{verticalAlign:"middle"},typoType1:{fontSize:"1.3rem",textIndent:"2rem",lineHeight:"1.9em",textAlign:"justify",margin:"40px"}}}));var h=function(e){var a=d();return n.a.createElement(l.a,{container:!0,className:a.gridContainer},n.a.createElement(l.a,{item:!0,xs:2,className:a.gridItem1},n.a.createElement(m.a,{src:"./imgs/avatar.jpg",className:a.avatarType})),n.a.createElement(l.a,{item:!0,xs:10,className:a.gridItem2},n.a.createElement(o.a,{variant:"body1",className:a.typoType1},"I\u2019m a 2nd-year Computer Science Ph.D. candidate at State Key Lab of CAD&CG, Zhejiang University, supervised by Prof. Yingcai Wu. My research interest lies in the machine learning and visual analytic for sports data.")))},f=t(52),y=Object(s.a)((function(e){return{button:{margin:e.spacing(1)},gridContainer:{marginBottom:"30px",display:"flex",height:"190px",alignItems:"flex-start"},gridItem1:{position:"relative",height:"190px",textAlign:"left"},face:{objectFit:"fill",position:"relative",marginLeft:"5%",marginRight:"5%",width:"90%"},typoType1:{display:"flex"}}}));function E(e){var a=y(),t=e.element;return n.a.createElement(l.a,{container:!0,className:a.gridContainer},n.a.createElement(l.a,{xs:4,item:!0,className:a.gridItem1},n.a.createElement("img",{src:t.src,className:a.face})),n.a.createElement(l.a,{item:!0,xs:8,className:a.gridItem1},n.a.createElement(o.a,{variant:"h5",className:a.typoType1},t.title),n.a.createElement(o.a,{variant:"h6",className:a.typoType1},t.authors),n.a.createElement(o.a,{variant:"h6",className:a.typoType1},t.conference),n.a.createElement("div",null,n.a.createElement(f.a,{target:"_blank",href:t.paper_url,variant:"contained",color:"secondary",className:a.button},"Paper"),n.a.createElement(f.a,{target:"_blank",href:t.video_url,variant:"contained",color:"primary",className:a.button},"Video"))))}var v=function(e){return e.publications.map((function(e,a){return n.a.createElement(E,{element:e,key:a})}))},x=t(34),b={education:[{duration:"Sep. 2018 - Present",city:"Hangzhou",country:"China",title:"Ph.D. Candidate",affiliation:"State Key Lab of CAD&CG, Zhejiang University",description:"Under the supervision of Prof. Yingcai Wu",src:"./imgs/zju.png"},{duration:"Sep. 2014 - Jun. 2018",city:"Hangzhou",country:"China",title:"Undergraduate Student",affiliation:"School of Mathematical Sciences, Zhejiang University",description:"BSc of Applied Mathematics",src:"./imgs/zju.png"}],experience:[{duration:"Sep. 2018 - Present",city:"Hangzhou",country:"China",title:"Ph.D. Candidate",affiliation:"State Key Lab of CAD&CG, Zhejiang University",description:"Under the supervision of Prof. Yingcai Wu",src:"./imgs/zju.png"},{duration:"Sep. 2014 - Jun. 2018",city:"Hangzhou",country:"China",title:"Undergraduate Student",affiliation:"School of Mathematical Sciences, Zhejiang University",description:"BSc of Applied Mathematics",src:"./imgs/zju.png"}],publications:[{title:"Tac-Simur: Tactic-based Simulative Visual Analytics of Table Tennis",authors:"Jiachen Wang, Kejian Zhao, Dazhen Deng, Anqi Cao, Xiao Xie, Zheng Zhou, Hui Zhang, and Yingcai Wu",conference:"To appear in IEEE TVCG (IEEE VAST 2019)",paper_url:"https://zjuidg.org/files/Tac-Simur.pdf",video_url:"https://www.youtube.com/watch?v=_I6cne3Wd4U&feature=youtu.be",src:"./imgs/tac-simur.png"},{title:"ForVizor: Visualizing Spatio-Temporal Team Formations in Soccer",authors:"Yingcai Wu, Xiao Xie, Jiachen Wang, Dazhen Deng, Hongye Liang, Hui Zhang, Shoubin Cheng, and Wei Chen",conference:"IEEE TVCG, 25.1 (2019), 65-75.(IEEE VAST 2018)",paper_url:"https://zjuidg.org/files/forvizor.pdf",video_url:"https://www.youtube.com/watch?v=03U7PESGkOQ",src:"./imgs/forvizor.png"}]},C=Object(x.a)((function(e){return{gridContainer:{height:"80px",alignItems:"flex-center",marginTop:"20px"}}}));c.a.render(n.a.createElement((function(){var e=C();return n.a.createElement("div",{style:{marginLeft:400,marginRight:400},id:"main"},n.a.createElement("div",null,n.a.createElement(l.a,{container:!0,spacing:2,className:e.gridContainer},n.a.createElement(l.a,{item:!0,xs:8},n.a.createElement(o.a,{variant:"h3"},"Dazhen Deng (\u9093\u8fbe\u81fb)")),n.a.createElement(l.a,{item:!0,xs:2}),n.a.createElement(l.a,{item:!0,xs:2,style:{textAlign:"center"}},n.a.createElement("img",{src:"./imgs/zjuidg.png",width:"60px"})))),n.a.createElement("div",null,n.a.createElement(h,null)),n.a.createElement("div",{style:{marginBottom:"30px"}},n.a.createElement(o.a,{variant:"h4",style:{marginBottom:"30px"}},"Education"),n.a.createElement(u,{experience:b.education})),n.a.createElement("div",null,n.a.createElement(o.a,{variant:"h4",style:{marginBottom:"30px"}},"Publications"),n.a.createElement(v,{publications:b.publications})))}),null),document.getElementById("root"))}},[[23,1,2]]]);
//# sourceMappingURL=main.9504088a.chunk.js.map