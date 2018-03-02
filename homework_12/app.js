let root = document.getElementById("root");

function create (element){
   
let container = document.createElement("div");
    root.appendChild(container);
  
let header = document.createElement("header");
    header.innerHTML = "<h2>Most popular tanks</h2>";
    container.appendChild(header);

let main = document.createElement("div");
    main.className = "main";
    container.appendChild(main);

  for (let i = 0; i < element.length; i++){
    let tankBlock = document.createElement("div");
        tankBlock.className = "tank";
        tankBlock.addEventListener("click", function(){
            window.location.hash = element[i].model;
        });
        main.appendChild(tankBlock);

    let mainImg = document.createElement("img");
        mainImg.src = element[i].preview;
        mainImg.title = "Click to details";
        tankBlock.appendChild(mainImg);

    let bottom = document.createElement("div");
        bottom.className = "bottom";
        tankBlock.appendChild(bottom);

    let imgFlag = document.createElement("img");
        imgFlag.src = element[i].country_image;
        imgFlag.className = "flag";
        imgFlag.title = element[i].country;
        bottom.appendChild(imgFlag);

    let level = document.createElement("p");    
        level.innerHTML = element[i].level + "<span>" + element[i].model +"</span>";
        level.title = element[i].model;
        bottom.appendChild(level); 
    }   
  }

create(tanks);
