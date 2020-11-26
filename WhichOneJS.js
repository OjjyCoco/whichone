const tendances = document.getElementById("tendances");
const tendances_btn = document.getElementById("tendances_btn");

const notifications = document.getElementById("notifs");
const notif_btn = document.getElementById("notif_btn");

const categories = document.getElementById("categories");
const categories_btn = document.getElementById("categories_btn");

const cross = document.querySelectorAll(".apparition h2");

const barre_droite = document.querySelectorAll(".apparition");

const header = document.querySelector("header");
const logo = document.querySelector("h1");



/* On peut pas vraiment faire de fonction plus propre car les boutons de gauche ne font pas tous la même action (même si on pourrait créer un array avec nos boutons qui affichent des categ OU ajouter une class à chaque bouton affichant une classe)*/
(function categ_apparition_onclick(){

    tendances_btn.addEventListener("click", function(){
        for(var barre of barre_droite){
            barre.style.display = "none";
        };
        tendances.style.display = "block";
    });

    notif_btn.addEventListener("click", function(){
        for(var barre of barre_droite){
            barre.style.display = "none";
        };
        notifications.style.display = "block";
    });

    categories_btn.addEventListener("click", function(){
        for(var barre of barre_droite){
            barre.style.display = "none";
        };
        categories.style.display = "block";
    });

    for(croix of cross){
        croix.addEventListener("click", function(){
            for(var barre of barre_droite){
                barre.style.display = "none";
            };
        });
    }

})();



(function header_border_au_scroll(){
    window.addEventListener("scroll", function(){
        if(window.scrollY > header.offsetTop){
            header.style.borderBottomColor = "#BDBDBD";
            header.style.height = "50px";
        }
        else{
            header.style.borderBottomColor = "transparent";
            header.style.height = "100px";
        }
    });
})();


function header_border_on_scroll(){
    window.addEventListener("scroll", function(){
        if(window.scrollY > header.offsetTop){
            header.style.borderBottomColor = "#BDBDBD";
            header.style.height = "50px";
        }
        else{
            header.style.borderBottomColor = "transparent";
            header.style.height = "100px";
        }
    });
}


(function add_section_on_header_click(){
    header.addEventListener("click", function(){
        newPubli("test3.png", "js.png", "Frozer");
    });
})();


function newPubli(img1, img2, UserName){
    let newPub = document.createElement("div");
    newPub.className = "container";
    document.body.appendChild(newPub);

    let resp = document.createElement("div");
    resp.className = "réponses";
    let spanResp = document.createElement("span");
    spanResp.id = "txt_results";
    let icon_resp = document.createElement("i");
    icon_resp.className = "fas fa-percentage";
    spanResp.appendChild(icon_resp);
    resp.appendChild(spanResp);
    newPub.appendChild(resp);


    let sec = document.createElement("div");
    sec.id = "center";
    let p_sec = document.createElement("p");
    p_sec.id = "username";
    p_sec.textContent = UserName;
    sec.appendChild(p_sec);
    let aside_sec = document.createElement("div");
    aside_sec.id = "images_n_coin";
    let aside_sec_div1 = document.createElement("div");
    aside_sec_div1.className = "img";
    aside_sec_div1.id = "img1";
    aside_sec_div1.style.background = "url("+img1+")"
    aside_sec_div1.style.backgroundSize = "cover";
    aside_sec_div1.style.backgroundPosition = "center";
    aside_sec_div1.style.backgroundRepeat = "no-repeat";
    aside_sec.appendChild(aside_sec_div1);
    let aside_sec_i = document.createElement("i");
    aside_sec_i.className = "fas fa-coins";
    aside_sec.appendChild(aside_sec_i);
    let aside_sec_div2 = document.createElement("div");
    aside_sec_div2.className = "img";
    aside_sec_div2.id = "img2";
    aside_sec_div2.style.background = "url("+img2+")"
    aside_sec_div2.style.backgroundSize = "cover";
    aside_sec_div2.style.backgroundPosition = "center";
    aside_sec_div2.style.backgroundRepeat = "no-repeat";
    aside_sec.appendChild(aside_sec_div2);
    sec.appendChild(aside_sec);

    newPub.appendChild(sec);



    let com = document.createElement("div");
    com.className = "commentaires";
    let spanCom = document.createElement("span");
    spanCom.id = "txt_comments";
    spanCom.style.right = "0";
    let icon_com = document.createElement("i");
    icon_com.className = "far fa-comments";
    spanCom.appendChild(icon_com);
    com.appendChild(spanCom);
    newPub.appendChild(com);

    (function image_effects_onclick(){
        aside_sec_div1.addEventListener("click", function(){
            aside_sec_div1.style.opacity = "0.5";
            aside_sec_div2.style.opacity = "0.5";
            aside_sec_i.style.transform = "translateY(-70px)";
            aside_sec_i.style.opacity = "0"
        });
        aside_sec_div2.addEventListener("click", function(){
            aside_sec_div1.style.opacity = "0.5";
            aside_sec_div2.style.opacity = "0.5";
            aside_sec_i.style.transform = "translateY(-70px)";
            aside_sec_i.style.opacity = "0"
        });
    })(); 
}

