import{r as p,c as m,a as r,b as o,u as _,n as d,q as f,o as v,s as b,v as g}from"./CsrzELu6.js";import{_ as x}from"./BkF2PHNZ.js";import"./3NNwcD0d.js";import"./zjdVGI5d.js";const q={class:"flex justify-end q-mt-md flex-col gap-1"},h={__name:"forgetpassword",setup(y){const e=p(""),t=f(),l=()=>{t.notify({color:"primary",position:"top",message:"Recuperando contraseña, por favor revise su correo electrónico",icon:"email"}),console.log(e.value)},n=()=>{b().push("/access/login")};return(c,s)=>{const u=x,a=g;return v(),m("form",null,[r("div",null,[o(u,{class:"bg-white",style:{"border-radius":"5px"},modelValue:_(e),"onUpdate:modelValue":s[0]||(s[0]=i=>d(e)?e.value=i:null),label:"Email",outlined:""},null,8,["modelValue"])]),r("div",q,[o(a,{label:"Regresar",flat:"",onClick:n,color:"white"}),o(a,{label:"Recuperar",onClick:l,class:"",color:"primary"})])])}}};export{h as default};