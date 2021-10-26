
async function fetchresults() {

  // let input = koopId ? koopId : '';
    let input = document.getElementById("input").value;
   let button = document.getElementById("button");
      // let nocert = document.getElementById("nocert");

       let cid = document.getElementById("cid");
       let gimage = document.getElementById("gimage");
       let gname = document.getElementById("gname");
       let gweight = document.getElementById("gweight");
       let gtype = document.getElementById("gtype");
       let gcuttype = document.getElementById("gcuttype");
       let gcolor = document.getElementById("gcolor");
       let on = document.getElementById("on");
       let by = document.getElementById("by");

       let result = document.getElementById("result");

      // nocert.classList.add("is-hidden");
       //result.classList.add("is-hidden");

       if (!input) {
           alert("input required");
           return;
       }
       let BASE_URL = "https://ggtl.in/api/certificate/get/";

//  button.classList.add("is-loading");

       const response = await fetch(BASE_URL + input);
//button.classList.remove("is-loading");
       const json = await response.json();
       //console.log(json.data[0]);

       if (json.status === "success") {
           if(json.data[0].is_diamond == 0){
               result.classList.remove("is-hidden");
               result.classList.add("p3");
               result.classList.add("columns");

               cid.innerText = ` ${json.data[0].certificate_id}`;
               gimage.src = json.data[0].gem_image;
               gname.innerText = `${json.data[0].gem_name}`;
               gweight.innerText = `${json.data[0].gem_weight}`;
               gtype.innerText = `${json.data[0].gem_type}`;
               gtype.innerText = `${json.data[0].gem_type}`;
               gcuttype.innerText = `${json.data[0].gem_cut_type}`;
               gcolor.innerText = `${json.data[0].gem_color}`;
               on.innerText = `${json.data[0].localtime}`;
               by.innerText = `GGTL.IN`;
               document.getElementById('colourScale').style.display = "none";
               document.getElementById('clarityScale').style.display = "none";

               
               document.getElementById('colorGradingScale').style.display = "none";
               document.getElementById('clarityGradingScale').style.display = "none";

              // document.getElementById("footer-address").style.marginTop = "0px";

          
           
           }

           else{
               result.classList.remove("is-hidden");
               result.classList.add("p3");
               result.classList.add("columns");
             
               
               colour_scale.innerText = ` ${json.data[0].colour_scale}`;
             
               clarity_scale.innerText = ` ${json.data[0].clarity_scale}`;
             
               cid.innerText = ` ${json.data[0].certificate_id}`;
               gimage.src = json.data[0].gem_image;
               gname.innerText = `${json.data[0].gem_name}`;
               gweight.innerText = `${json.data[0].gem_weight}`;
               gtype.innerText = `${json.data[0].gem_type}`;
               gtype.innerText = `${json.data[0].gem_type}`;
               gcuttype.innerText = `${json.data[0].gem_cut_type}`;
               gcolor.innerText = `${json.data[0].gem_color}`;
               on.innerText = `${json.data[0].localtime}`;
               by.innerText = `GGTL.IN`;

               // dynamic font size 


           
         //  document.getElementById("footer-address").style.marginTop = "-2px";
           

               // dynamic font size end
           }

       } else {
           nocert.classList.add("show");
           nocert.classList.add("message");
           nocert.classList.add("is-danger");
       }
   } 

function imageLoaderror() {
   let gimage = document.getElementById("gimage");
   gimage.src =
       "https://1080motion.com/wp-content/uploads/2018/06/NoImageFound.jpg.png";
}