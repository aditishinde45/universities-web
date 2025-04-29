let btn=document.querySelector("button");
let box=document.querySelector(".box");
let inp=document.querySelector("input");
let ul=document.querySelector("ul");
let h1=document.querySelector("h1");
let arrow=document.querySelector("span");
let url="http://universities.hipolabs.com/search?name=";

btn.addEventListener("click",async function() {
        getinfo();
    });

arrow.addEventListener("click",async function(){
    getinfo();
});

async function getinfo() {
    ul.innerText=""
    h1.innerText="";
    inp.placeholder=""
    let country=inp.value;
    let colgs= await getcollege(country);
    printCols(colgs);
   let lis=ul.children
   for(li of lis){
    li.addEventListener("click",function(){
        pritData(li,country);
        
    });
   }
}

async function getcollege(country) {
     try{
    let res= await axios.get(url+country);
    return res.data;
     }catch(err){
        console.log("ERROR IS : ",err);
        return [];
     }
}

 function printCols(colgs) {
    for (clg of colgs){
        let li=document.createElement("li");
       li.innerText=clg.name;
       ul.appendChild(li);
    }
}

async function pritData(li,country) {

    ul.innerText="";
    let datas= await getcollege(country);
    for(col of datas){
        if(col.name==li.innerText){
            h1.innerText=`Information about ${col.name}`;
            let li1=document.createElement("li");
            let li2=document.createElement("li");
            let li3=document.createElement("li");
            let li4=document.createElement("li");
            let li5=document.createElement("li");
            let li6=document.createElement("li");
            li1.innerText=`alpha_two_code : ${col.alpha_two_code}`;
            li2.innerText=`country : ${col.country}`;
            li3.innerText=`domains : ${col.domains}`;
            li4.innerText=`name : ${col.name}`;
            li6.innerText=`Web-page : ${col.web_pages}`;
            ul.appendChild(li1);
            ul.appendChild(li2);
            ul.appendChild(li3);
            ul.appendChild(li4);
            ul.appendChild(li6);
            
        }
    }
}