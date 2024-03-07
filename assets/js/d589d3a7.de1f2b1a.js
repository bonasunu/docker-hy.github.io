"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[162],{3905:(e,t,o)=>{o.d(t,{Zo:()=>u,kt:()=>m});var r=o(7294);function n(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function i(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,r)}return o}function a(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?i(Object(o),!0).forEach((function(t){n(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):i(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function s(e,t){if(null==e)return{};var o,r,n=function(e,t){if(null==e)return{};var o,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)o=i[r],t.indexOf(o)>=0||(n[o]=e[o]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)o=i[r],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(n[o]=e[o])}return n}var l=r.createContext({}),c=function(e){var t=r.useContext(l),o=t;return e&&(o="function"==typeof e?e(t):a(a({},t),e)),o},u=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var o=e.components,n=e.mdxType,i=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=c(o),h=n,m=d["".concat(l,".").concat(h)]||d[h]||p[h]||i;return o?r.createElement(m,a(a({ref:t},u),{},{components:o})):r.createElement(m,a({ref:t},u))}));function m(e,t){var o=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=o.length,a=new Array(i);a[0]=h;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[d]="string"==typeof e?e:n,a[1]=s;for(var c=2;c<i;c++)a[c]=o[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,o)}h.displayName="MDXCreateElement"},9390:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>p,frontMatter:()=>i,metadata:()=>s,toc:()=>c});var r=o(7462),n=(o(7294),o(3905));const i={sidebar_position:2},a="Getting Started",s={unversionedId:"getting-started",id:"getting-started",title:"Getting Started",description:"Welcome to the DevOps with Docker course! This course is designed to be completed sequentially, from start to finish. Each part builds on the previous one, so it's important to read the material carefully and complete the exercises in order to develop the necessary skills.",source:"@site/docs/getting-started.md",sourceDirName:".",slug:"/getting-started",permalink:"/getting-started",draft:!1,editUrl:"https://github.com/docker-hy/docker-hy.github.io/blob/master/docs/getting-started.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"materialSidebar",previous:{title:"DevOps with Docker",permalink:"/"},next:{title:"Frequently Asked Questions",permalink:"/faq"}},l={},c=[{value:"Updating of the material for the 2024 edition",id:"updating-of-the-material-for-the-2024-edition",level:3},{value:"About different architectures and contributing",id:"about-different-architectures-and-contributing",level:3},{value:"Grading",id:"grading",level:3},{value:"Learning objectives",id:"learning-objectives",level:3},{value:"Where to find information about the course?",id:"where-to-find-information-about-the-course",level:3},{value:"Discord",id:"discord",level:3},{value:"Installing Docker",id:"installing-docker",level:2},{value:"Deadline",id:"deadline",level:2},{value:"General guidance",id:"general-guidance",level:2},{value:"How to submit the exercises",id:"how-to-submit-the-exercises",level:2},{value:"Completing",id:"completing",level:2}],u={toc:c},d="wrapper";function p(e){let{components:t,...i}=e;return(0,n.kt)(d,(0,r.Z)({},u,i,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"getting-started"},"Getting Started"),(0,n.kt)("p",null,"Welcome to the DevOps with Docker course! This course is designed to be completed sequentially, from start to finish. Each part builds on the previous one, so it's important to read the material carefully and complete the exercises in order to develop the necessary skills."),(0,n.kt)("p",null,"To pass the course, you will need to complete all of the exercises. However, one exercise can be skipped per part, except for the exercises marked as mandatory. The mandatory exercises cannot be skipped."),(0,n.kt)("p",null,"The exercises are designed to reinforce the material covered in each part, and are placed at strategic points in the course to ensure that you have learned the necessary skills prior to attempting each exercise. You can complete the exercises at your own pace, and there is no deadline for submission outside of the last date, when the entire course ends."),(0,n.kt)("p",null,"When submitting your exercises, please follow the instructions provided in the course material. Exercises should be submitted in a specific format, which will be outlined in the instructions for each exercise."),(0,n.kt)("p",null,"We hope that you enjoy the course and find it informative and engaging. Good luck!"),(0,n.kt)("h3",{id:"updating-of-the-material-for-the-2024-edition"},"Updating of the material for the 2024 edition"),(0,n.kt)("p",null,"The 2024 edition of the course starts officially on 11th March. The material is currently being updated. At the time of writing (7th March) the following parts are already updated"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Part 1, up to and including section ",(0,n.kt)("em",{parentName:"li"},"Defining start conditions for the container"))),(0,n.kt)("p",null,"You may continue already beyond the updated material but beware, there might be some outdated content!"),(0,n.kt)("h3",{id:"about-different-architectures-and-contributing"},"About different architectures and contributing"),(0,n.kt)("p",null,"Please note that while Docker runs on all major operating systems and even on ARM architecture, this course material may not cover platform-specific details for all operating systems. However, we've had students successfully complete the course using a variety of machines and operating systems."),(0,n.kt)("p",null,"If you encounter any issues while working through the course material on your particular system, we recommend consulting the Docker documentation or seeking help on the course forums. Our community is here to support you and help you succeed in the course!"),(0,n.kt)("p",null,"We welcome contributions to the course material from students and other members of the DevOps community! If you notice any mistakes, typos, or errors in the material, please consider submitting a pull request to the course repository on GitHub."),(0,n.kt)("p",null,"Thank you in advance for your contributions to this open source project!"),(0,n.kt)("h3",{id:"grading"},"Grading"),(0,n.kt)("p",null,"Passing this course requires you to do the exercises for each part. This means generally every exercise, but you are allowed to skip one non-mandatory exercise in each part. Some of the exercises are mandatory and can not be skipped."),(0,n.kt)("p",null,"This course is worth 1-3 credits depending on the completed parts. Completing part 1 gives you 1 credit. Completing parts 1 and 2 is worth 2 credits. Completing all of the parts will grant you 3 credits."),(0,n.kt)("p",null,"There are additional instructions for completion after each part and at the end of this page."),(0,n.kt)("h3",{id:"learning-objectives"},"Learning objectives"),(0,n.kt)("p",null,"Part 1: DevOps with Docker (",(0,n.kt)("a",{parentName:"p",href:"https://studies.helsinki.fi/kurssit/toteutus/otm-4bd45ab8-8b23-4973-a918-a6b6f7bbb347/TKT21036"},"TKT21036"),")"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Understand the fundamental concepts of Docker, including images and containers."),(0,n.kt)("li",{parentName:"ul"},"Learn how to build Docker images for existing projects and run them."),(0,n.kt)("li",{parentName:"ul"},"Understand how Docker can simplify the development process.")),(0,n.kt)("p",null,"Part 2: DevOps with Docker: docker-compose (",(0,n.kt)("a",{parentName:"p",href:"https://studies.helsinki.fi/kurssit/toteutus/otm-c73ef1c6-8fb0-42e8-9052-ef59b01cb409/TKT21037"},"TKT21037"),")"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Learn how to manage complex multi-container applications with Docker Compose."),(0,n.kt)("li",{parentName:"ul"},"Understand the role of Docker Compose in container orchestration"),(0,n.kt)("li",{parentName:"ul"},"Practice deploying and managing real-world applications using Docker Compose.")),(0,n.kt)("p",null,"Part 3: DevOps with Docker: security and optimization (",(0,n.kt)("a",{parentName:"p",href:"https://studies.helsinki.fi/kurssit/opintojakso/hy-CU-142971306-2020-08-01/TKT21038"},"TKT21038"),")"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Learn how to optimize Docker images for production, including reducing image size and improving security."),(0,n.kt)("li",{parentName:"ul"},"Understand the limitations of using Docker Compose in production environments and the need for more advanced orchestration tools."),(0,n.kt)("li",{parentName:"ul"},"Explore alternative container orchestration solutions, including Kubernetes.")),(0,n.kt)("h3",{id:"where-to-find-information-about-the-course"},"Where to find information about the course?"),(0,n.kt)("p",null,"All of the details you need to complete the course should be found on this page. If something is missing or unclear after reading this page, please contact ",(0,n.kt)("a",{parentName:"p",href:"mailto:matti.luukkainen@helsinki.fi"},"matti.luukkainen@helsinki.fi")," or get in touch through Discord."),(0,n.kt)("h3",{id:"discord"},"Discord"),(0,n.kt)("p",null,"This course has a Discord group where we discuss everything about the course. Support is available almost 24/7, with the discussion being in both English and Finnish."),(0,n.kt)("p",null,"Join our discord group ",(0,n.kt)("a",{parentName:"p",href:"https://study.cs.helsinki.fi/discord/join/docker"},"here"),"."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"All")," inappropriate, degrading or discriminating comments on the channel are prohibited and will lead to action taken against the commenter."),(0,n.kt)("h1",{id:"warning-before-installing-docker"},"Warning: Before installing Docker"),(0,n.kt)("p",null,"Containers leverage the power of your own operating system. As such ",(0,n.kt)("strong",{parentName:"p"},"by default")," any containerized application, or user who has external access to your container, would have super user privileges to your computer."),(0,n.kt)("p",null,"I will try my best to alert you of potential risks as we encounter them, but due to the structure of the course we will focus on security in part 3."),(0,n.kt)("p",null,"Please keep this in mind as you move through the installation and exercises. If you ever feel unsure about what you're doing, come to the Discord channel and have a chat with us."),(0,n.kt)("h2",{id:"installing-docker"},"Installing Docker"),(0,n.kt)("p",null,"Use the official documentation to find download instructions for docker-ce for the platform of your choice:"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://docs.docker.com/install/linux/docker-ce/ubuntu/"},"Ubuntu")),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://docs.docker.com/docker-for-mac/install/"},"MacOS")),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://docs.docker.com/docker-for-windows/install/"},"Windows")),(0,n.kt)("p",null,"Confirm that Docker installed correctly by opening a terminal and running ",(0,n.kt)("inlineCode",{parentName:"p"},"docker -v")," to see the installed version."),(0,n.kt)("admonition",{title:"Docker group",type:"tip"},(0,n.kt)("p",{parentName:"admonition"},"To avoid writing sudos you may consider ",(0,n.kt)("a",{parentName:"p",href:"https://docs.docker.com/install/linux/linux-postinstall/"},"adding yourself to docker group")),(0,n.kt)("p",{parentName:"admonition"},"Keep in mind that if you do so, you can now run containers without sudo and containers give you super user access to the computer.")),(0,n.kt)("h2",{id:"deadline"},"Deadline"),(0,n.kt)("p",null,"The sign up for ECTS credits and the course ends 16.6.2024! After that course is locked and submissions can no longer be made or credits earned. As the certificate is received through submissions, you have to submit everything before the course ends. More details under completion and after each part."),(0,n.kt)("h2",{id:"general-guidance"},"General guidance"),(0,n.kt)("p",null,(0,n.kt)("em",{parentName:"p"},"Do not alter the code of the projects, unless by pull-requests to the original projects")),(0,n.kt)("p",null,"You do not need to touch Ruby, Java, Javascript or Python code during this course. You may have to read their error messages."),(0,n.kt)("p",null,"Visit the Discord channel if you are stuck!"),(0,n.kt)("h2",{id:"how-to-submit-the-exercises"},"How to submit the exercises"),(0,n.kt)("p",null,"Make a repository to GitHub and publish your solutions in clearly ordered files / folders. If you need help publishing using Git you should refer to their ",(0,n.kt)("a",{parentName:"p",href:"https://guides.github.com/activities/hello-world/"},"guide"),". Make sure that the repository is available to us, either by using a public repository or a private repository and adding Jakousa and mluukkai as collaborators."),(0,n.kt)("p",null,"Most of the exercises will be focused on a Dockerfile and/or docker-compose.yml. In those cases, submitting the file is enough. In other cases, a picture or copy-paste from your command line or a link to Docker Hub and/or project inside the repository is enough. For the command line exercises at start the command ",(0,n.kt)("a",{parentName:"p",href:"https://linux.die.net/man/1/script"},"script")," may be helpful."),(0,n.kt)("p",null,"Because the course exercises are designed to build upon each other, it's more important that you document the exercises for yourself. We will be looking at the submissions of the later exercises as they are more demanding."),(0,n.kt)("p",null,"When you have completed a part, use the ",(0,n.kt)("a",{parentName:"p",href:"https://studies.cs.helsinki.fi/stats/courses/docker2024"},"submission application")," to mark your exercises. You can ",(0,n.kt)("strong",{parentName:"p"},"not")," edit a submission, so make sure you have completed enough exercises for a part before submitting."),(0,n.kt)("h2",{id:"completing"},"Completing"),(0,n.kt)("p",null,"The certificate is available from the small icon beneath your submissions!"),(0,n.kt)("p",null,'After you have returned all of the required exercises and wish to end your course completion and want the ECTS credits press the following button in the submission application (ignore the message about an "exam" as there is no exam in this course):'),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Incomplete course",src:o(6795).Z,width:"874",height:"188"})),(0,n.kt)("p",null,'After that, double-check that the application has the message "Course marked as completed" and the date. If the date is not visible, we have not been notified.'),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Completed course",src:o(38).Z,width:"482",height:"469"})))}p.isMDXComponent=!0},38:(e,t,o)=>{o.d(t,{Z:()=>r});const r=o.p+"assets/images/completed_course-1c9c27f6aefc0214cb0b511b6358980c.png"},6795:(e,t,o)=>{o.d(t,{Z:()=>r});const r=o.p+"assets/images/incomplete_course-8a93bc802c0307b99b884cb844e664ff.png"}}]);