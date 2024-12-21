let AttackTab = []; //data of player for Chimie
let MiddlekTab = [];
let DefenseTab = [];
let Goolkiper;
let arryTo = [];
let WhereGo;
let playerInField = 0;

const visiblGk = document.getElementById("cGK");
const visiblDL = document.getElementById("cDefense-L");
const visiblDR = document.getElementById("cDefense-R");
const visiblDM = document.getElementById("cDefense-M");
const visiblDM2 = document.getElementById("cDefense-M2");
const visiblMR = document.getElementById("cMiddle-R");
const visiblMM = document.getElementById("cMiddle-M");
const visiblML = document.getElementById("cMiddle-L");
const visiblAR = document.getElementById("cAttack-R");
const visiblAM = document.getElementById("cAttack-M");
const visiblAL = document.getElementById("cAttack-L");

function visiHiden(val) {
    //attack
    if (AttackTab[0]) visiblAL.style.visibility = val;

    if (AttackTab[1]) visiblAM.style.visibility = val;

    if (AttackTab[2]) visiblAR.style.visibility = val;

    //middle
    if (MiddlekTab[0]) visiblML.style.visibility = val;

    if (MiddlekTab[1]) visiblMM.style.visibility = val;

    if (MiddlekTab[2]) visiblMR.style.visibility = val;

    //Defense
    if (DefenseTab[0]) visiblDL.style.visibility = val;

    if (DefenseTab[1]) visiblDM.style.visibility = val;

    if (DefenseTab[2]) visiblDM2.style.visibility = val;

    if (DefenseTab[3]) visiblDR.style.visibility = val;

    //gk
    if (Goolkiper) visiblGk.style.visibility = val;

    //val to cart
    let arryCarts = document.querySelectorAll(".player-cart");

    // let k;
    for (let k = 0; k < arryCarts.length; k++) {
        console.log(arryCarts[k]);
        arryCarts[k].style.visibility = val;
    }

    //
    if (val == "visible")
        Allsheang.style.visibility = "hidden";
    else
    Allsheang.style.visibility = "visible";

    if (document.querySelector(".placeAttackM"))
        document.querySelector(".placeAttackM").style.visibility = val;
    if(document.querySelector(".placeAttackL"))
        document.querySelector(".placeAttackL").style.visibility = val;
    if(document.querySelector(".placeAttackR"))
        document.querySelector(".placeAttackR").style.visibility = val;
    if(document.querySelector(".placeMiddleM"))
        document.querySelector(".placeMiddleM").style.visibility = val;
    if(document.querySelector(".placeMiddleL"))
        document.querySelector(".placeMiddleL").style.visibility = val;
    if(document.querySelector(".placeMiddleR"))
        document.querySelector(".placeMiddleR").style.visibility = val;
    if(document.querySelector(".placeDefenseL"))
        document.querySelector(".placeDefenseL").style.visibility = val;
    if(document.querySelector(".placeDefenseM"))
        document.querySelector(".placeDefenseM").style.visibility = val;
    if(document.querySelector(".placeDefenseM2"))
        document.querySelector(".placeDefenseM2").style.visibility = val;
    if(document.querySelector(".placeDefenseR"))
        document.querySelector(".placeDefenseR").style.visibility = val;
    if(document.querySelector(".GK"))
        document.querySelector(".GK").style.visibility = val;
}

const OpenField = document.querySelector(".goField"); //change place to field

const Field = document.querySelector(".field");
const RigthSide = document.querySelector(".RigthSide");
const Allsheang = document.querySelector(".AllPlyerBehinde");

OpenField.onclick = () => {
    Field.style.visibility = "visible"; //hidden
    visiHiden("visible");
    RigthSide.style.visibility = "visible";
};

const CloseField = document.querySelector(".AllPlyer"); //change place to plyer

CloseField.onclick = () => {
    Field.style.visibility = "hidden"; //visible
    visiHiden("hidden");
    RigthSide.style.visibility = "hidden";
    Allsheang.style.visibility = "visible";
};

fetch("js/main.json")
    .then((response) => response.json())
    .then((obj) => {
        //start fetch
        const LB = document.getElementById("Defense-L");
        const CB = document.getElementById("Defense-M");
        const CB2 = document.getElementById("Defense-M2");
        const RB = document.getElementById("Defense-R");

        const LM = document.getElementById("Middle-L");
        const CM = document.getElementById("Middle-M");
        const RM = document.getElementById("Middle-R");

        const CF = document.getElementById("Attack-L");
        const ST = document.getElementById("Attack-M");
        const SS = document.getElementById("Attack-R");

        let i;
        GK.addEventListener("click", () => {
            i = -1;
            removechildrens();
            WhereGo = "GK";
            do {
                i++;
                const Posis = obj.players[i].position;

                if (Posis == "GK" && obj.players[i].name != Goolkiper)
                    divIn$sectionPlyers(
                        obj.players[i].passing,
                        obj.players[i].shooting,
                        obj.players[i].pace,
                        obj.players[i].dribbling,
                        obj.players[i].defending,
                        obj.players[i].physical,
                        obj.players[i].rating,
                        obj.players[i].photo,
                        obj.players[i].flag,
                        obj.players[i].logo,
                        obj.players[i].name,
                        obj.players[i].position
                    ); //, "GK"
            } while (obj.players[i].name != "Gianluigi Donnarumma");
        });

        LB.addEventListener("click", () => {
            i = -1;
            removechildrens();
            WhereGo = "placeDefenseL";
            do {
                i++;
                const Posis = obj.players[i].position;

                if (Posis == "LB")
                    divIn$sectionPlyers(
                        obj.players[i].passing,
                        obj.players[i].shooting,
                        obj.players[i].pace,
                        obj.players[i].dribbling,
                        obj.players[i].defending,
                        obj.players[i].physical,
                        obj.players[i].rating,
                        obj.players[i].photo,
                        obj.players[i].flag,
                        obj.players[i].logo,
                        obj.players[i].name,
                        obj.players[i].position
                    ); //, "placeDefenseL"
            } while (obj.players[i].name != "Gianluigi Donnarumma");
        });

        CB.addEventListener("click", () => {
            i = -1;
            removechildrens();
            WhereGo = "placeDefenseM";
            do {
                i++;
                const Posis = obj.players[i].position;
                if (Posis == "CB" && obj.players[i].name != DefenseTab[2])
                    divIn$sectionPlyers(
                        obj.players[i].passing,
                        obj.players[i].shooting,
                        obj.players[i].pace,
                        obj.players[i].dribbling,
                        obj.players[i].defending,
                        obj.players[i].physical,
                        obj.players[i].rating,
                        obj.players[i].photo,
                        obj.players[i].flag,
                        obj.players[i].logo,
                        obj.players[i].name,
                        obj.players[i].position
                    ); //, "placeDefenseM"
            } while (obj.players[i].name != "Gianluigi Donnarumma");
        });

        CB2.addEventListener("click", () => {
            i = -1;
            removechildrens();
            WhereGo = "placeDefenseM2";
            do {
                i++;
                const Posis = obj.players[i].position;
                if (Posis == "CB" && obj.players[i].name != DefenseTab[1])
                    divIn$sectionPlyers(
                        obj.players[i].passing,
                        obj.players[i].shooting,
                        obj.players[i].pace,
                        obj.players[i].dribbling,
                        obj.players[i].defending,
                        obj.players[i].physical,
                        obj.players[i].rating,
                        obj.players[i].photo,
                        obj.players[i].flag,
                        obj.players[i].logo,
                        obj.players[i].name,
                        obj.players[i].position
                    ); //, "placeDefenseM2"
            } while (obj.players[i].name != "Gianluigi Donnarumma");
        });

        RB.addEventListener("click", () => {
            i = -1;
            removechildrens();
            WhereGo = "placeDefenseR";
            do {
                i++;
                const Posis = obj.players[i].position;
                if (Posis == "RB")
                    divIn$sectionPlyers(
                        obj.players[i].passing,
                        obj.players[i].shooting,
                        obj.players[i].pace,
                        obj.players[i].dribbling,
                        obj.players[i].defending,
                        obj.players[i].physical,
                        obj.players[i].rating,
                        obj.players[i].photo,
                        obj.players[i].flag,
                        obj.players[i].logo,
                        obj.players[i].name,
                        obj.players[i].position
                    ); //, "placeDefenseR"
            } while (obj.players[i].name != "Gianluigi Donnarumma");
        });

        LM.addEventListener("click", () => {
            i = -1;
            removechildrens();
            WhereGo = "placeMiddleL";
            do {
                i++;
                const Posis = obj.players[i].position;

                if (
                    Posis == "CM" &&
                    obj.players[i].name != MiddlekTab[1] &&
                    obj.players[i].name != MiddlekTab[2]
                )
                    divIn$sectionPlyers(
                        obj.players[i].passing,
                        obj.players[i].shooting,
                        obj.players[i].pace,
                        obj.players[i].dribbling,
                        obj.players[i].defending,
                        obj.players[i].physical,
                        obj.players[i].rating,
                        obj.players[i].photo,
                        obj.players[i].flag,
                        obj.players[i].logo,
                        obj.players[i].name,
                        obj.players[i].position
                    ); //, "placeMiddleL"
            } while (obj.players[i].name != "Gianluigi Donnarumma");
        });

        CM.addEventListener("click", () => {
            i = -1;
            removechildrens();
            WhereGo = "placeMiddleM";
            do {
                i++;
                const Posis = obj.players[i].position;

                if (
                    (Posis == "CM" || Posis == "CDM") &&
                    obj.players[i].name != MiddlekTab[0] &&
                    obj.players[i].name != MiddlekTab[2]
                )
                    divIn$sectionPlyers(
                        obj.players[i].passing,
                        obj.players[i].shooting,
                        obj.players[i].pace,
                        obj.players[i].dribbling,
                        obj.players[i].defending,
                        obj.players[i].physical,
                        obj.players[i].rating,
                        obj.players[i].photo,
                        obj.players[i].flag,
                        obj.players[i].logo,
                        obj.players[i].name,
                        obj.players[i].position
                    ); //, "placeMiddleM"
            } while (obj.players[i].name != "Gianluigi Donnarumma");
        });

        RM.addEventListener("click", () => {
            i = -1;
            removechildrens();
            WhereGo = "placeMiddleR";
            do {
                i++;
                const Posis = obj.players[i].position;

                if (
                    Posis == "CM" &&
                    obj.players[i].name != MiddlekTab[0] &&
                    obj.players[i].name != MiddlekTab[1]
                )
                    divIn$sectionPlyers(
                        obj.players[i].passing,
                        obj.players[i].shooting,
                        obj.players[i].pace,
                        obj.players[i].dribbling,
                        obj.players[i].defending,
                        obj.players[i].physical,
                        obj.players[i].rating,
                        obj.players[i].photo,
                        obj.players[i].flag,
                        obj.players[i].logo,
                        obj.players[i].name,
                        obj.players[i].position
                    ); //, "placeMiddleR"
            } while (obj.players[i].name != "Gianluigi Donnarumma");
        });

        CF.addEventListener("click", () => {
            i = -1;
            removechildrens();
            WhereGo = "placeAttackL";
            do {
                i++;
                const Posis = obj.players[i].position;

                if (Posis == "LW")
                    divIn$sectionPlyers(
                        obj.players[i].passing,
                        obj.players[i].shooting,
                        obj.players[i].pace,
                        obj.players[i].dribbling,
                        obj.players[i].defending,
                        obj.players[i].physical,
                        obj.players[i].rating,
                        obj.players[i].photo,
                        obj.players[i].flag,
                        obj.players[i].logo,
                        obj.players[i].name,
                        obj.players[i].position
                    ); //, "placeAttackL"
            } while (obj.players[i].name != "Gianluigi Donnarumma");
        });

        ST.addEventListener("click", () => {
            i = -1;
            removechildrens();
            WhereGo = "placeAttackM";
            do {
                i++;
                const Posis = obj.players[i].position;

                if (Posis == "ST")
                    divIn$sectionPlyers(
                        obj.players[i].passing,
                        obj.players[i].shooting,
                        obj.players[i].pace,
                        obj.players[i].dribbling,
                        obj.players[i].defending,
                        obj.players[i].physical,
                        obj.players[i].rating,
                        obj.players[i].photo,
                        obj.players[i].flag,
                        obj.players[i].logo,
                        obj.players[i].name,
                        obj.players[i].position
                    ); //, "placeAttackM"
            } while (obj.players[i].name != "Gianluigi Donnarumma");
        });

        SS.addEventListener("click", () => {
            i = -1;
            removechildrens();
            WhereGo = "placeAttackR";
            do {
                i++;
                const Posis = obj.players[i].position;

                if (Posis == "RW")
                    divIn$sectionPlyers(
                        obj.players[i].passing,
                        obj.players[i].shooting,
                        obj.players[i].pace,
                        obj.players[i].dribbling,
                        obj.players[i].defending,
                        obj.players[i].physical,
                        obj.players[i].rating,
                        obj.players[i].photo,
                        obj.players[i].flag,
                        obj.players[i].logo,
                        obj.players[i].name,
                        obj.players[i].position
                    ); //, "placeAttackR"
            } while (obj.players[i].name != "Gianluigi Donnarumma");
        });

        // finde position indes plyer in json
        function FiPlyer(namePl) {
            i = -1;
            do {
                i++;
                // console.log(namePl);//-------------------------------------------------------------------------------->
            } while (obj.players[i].name != namePl);
            return i;
        }

        // calcel Chimie
        function calcelChimie(arryTo, namePlyer, nambrePlyerInTabl) {
            // console.log(namePlyer);  //----------------------------------------------------------------------------------------------------------->
            let indexMainPlyer = FiPlyer(namePlyer); //return i of plyer that i want calcule his chime
            // console.log("hnaaaaaaaaaaaaa ",indexMainPlyer);
            let indexPlyers; //index of chak player in arry
            let coron; //points chime 10 becose it's in corect position
            let memleague;
            // const vombrPlyerAround = arryP.lenght;
            coron = 0;
            for (i = 0; i < nambrePlyerInTabl; i++) {
                indexPlyers = FiPlyer(arryTo[i]);

                coron += 10;
                if (
                    obj.players[indexPlyers].league == obj.players[indexMainPlyer].league
                ) {
                    //is He mem league
                    memleague++;
                    if (memleague == 2) coron += 4;
                    if (memleague > 2) coron += 2;
                }
                if (obj.players[indexPlyers].club == obj.players[indexMainPlyer].club)
                    //is He meme club
                    coron += 3;
                if (
                    obj.players[indexPlyers].nationality ==
                    obj.players[indexMainPlyer].nationality
                )
                    coron += 1;
                if (obj.players[indexPlyers].rating >= 87) coron += 0.25;
                // console.log("fcdnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnla3ib", arryTo[i]);
            }

            // console.log(arryP.lenght);   / nambrePlyerInTabl
            return coron;
        }

        //calcel chemstri
        function FineField() {
            let Chimistry; //div go up
            let RestChimistry; //div reste

            Chimistry = 0;
            // console.log("nhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhh 0000000",Chimistry);
            arryTo = [
                AttackTab[0],
                AttackTab[2],
                MiddlekTab[0],
                MiddlekTab[1],
                MiddlekTab[2],
            ];
            Chimistry += calcelChimie(arryTo, AttackTab[1], 5);
            // console.log("nhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhh 1111",Chimistry);

            arryTo = [AttackTab[1], MiddlekTab[0], MiddlekTab[1]];
            Chimistry += calcelChimie(arryTo, AttackTab[0], 3);

            arryTo = [AttackTab[1], MiddlekTab[2], MiddlekTab[1]];
            Chimistry += calcelChimie(arryTo, AttackTab[2], 3);

            arryTo = [
                AttackTab[1],
                MiddlekTab[1],
                DefenseTab[0],
                DefenseTab[1],
                AttackTab[0],
            ];
            Chimistry += calcelChimie(arryTo, MiddlekTab[0], 5);

            arryTo = [
                AttackTab[1],
                MiddlekTab[1],
                DefenseTab[3],
                DefenseTab[2],
                AttackTab[2],
            ];
            Chimistry += calcelChimie(arryTo, MiddlekTab[2], 5);

            arryTo = [
                AttackTab[1],
                AttackTab[0],
                MiddlekTab[0],
                MiddlekTab[2],
                DefenseTab[3],
                DefenseTab[2],
                DefenseTab[1],
                DefenseTab[0],
                AttackTab[2],
            ];
            Chimistry += calcelChimie(arryTo, MiddlekTab[1]);

            arryTo = [
                DefenseTab[1],
                DefenseTab[3],
                MiddlekTab[2],
                MiddlekTab[1],
                Goolkiper,
            ];
            Chimistry += calcelChimie(arryTo, DefenseTab[2], 5);

            arryTo = [DefenseTab[1], MiddlekTab[0], MiddlekTab[1], Goolkiper];
            Chimistry += calcelChimie(arryTo, DefenseTab[0], 4);

            arryTo = [DefenseTab[2], MiddlekTab[2], MiddlekTab[1], Goolkiper];
            Chimistry += calcelChimie(arryTo, DefenseTab[3], 4);

            arryTo = [
                DefenseTab[2],
                DefenseTab[0],
                MiddlekTab[0],
                MiddlekTab[1],
                Goolkiper,
            ];
            Chimistry += calcelChimie(arryTo, DefenseTab[1], 5);

            arryTo = [
                DefenseTab[0],
                DefenseTab[1],
                DefenseTab[2],
                DefenseTab[3],
                Goolkiper,
            ];
            Chimistry += calcelChimie(arryTo, Goolkiper, 5);

            Chimistry /= 11;
            Chimistry *= 5;
            RestChimistry = 100 - Chimistry;

            document.querySelector(".porsontag").innerHTML = Chimistry.toFixed(2);
            document.documentElement.style.setProperty("--varGoUp", Chimistry);
            document.documentElement.style.setProperty("--varReste", RestChimistry);
        }

        const removechildrens = function () {
            const parentt = document.querySelector(".player");
            while (parentt.firstChild) {
                parentt.removeChild(parentt.firstChild);
            }
        };

        //creat div camla                    |T a 9 t e   l a 3 i b             |i m e g e s                    |...
        const replacePlayerToField = function (
            pac,
            sho,
            pas,
            dri,
            def,
            phy,
            rit,
            imgJoure,
            imgMontakhb,
            imgnadi,
            isme,
            posi
        ) {
            const div$parent = document.createElement("div");
            const h4$dom1 = document.createElement("h4");
            const p$dom2 = document.createElement("p");
            const p$dom3 = document.createElement("p");
            const img$dom4 = document.createElement("img");
            const p$dom5 = document.createElement("p");
            const p$dom6 = document.createElement("p");
            const p$dom7 = document.createElement("p");
            const p$dom8 = document.createElement("p");

            //get Field2
            const Field2$parent = document.querySelector(".field2");

            // value into elements
            h4$dom1.innerHTML = `${isme}`;
            p$dom2.innerHTML = `${posi}`;
            p$dom3.innerHTML = `${rit}`;
            img$dom4.src = imgJoure;
            img$dom4.alt = "joure";
            p$dom5.innerHTML = "PAC SHO PAS";
            p$dom6.innerHTML = `${pac} | ${sho} | ${pas}`;
            p$dom7.innerHTML = "DRI DEF PHY";
            p$dom8.innerHTML = `${dri} | ${def} | ${phy}`;

            //add classes
            div$parent.classList.add(WhereGo);
            h4$dom1.classList.add("nameJoure");
            p$dom2.classList.add("posi");
            p$dom3.classList.add("LG");
            p$dom5.classList.add("LevelJoure");
            p$dom6.classList.add("LevelJoure");
            p$dom7.classList.add("LevelJoure");
            p$dom8.classList.add("LevelJoure");

            //append into
            Field2$parent.appendChild(div$parent);
            div$parent.appendChild(h4$dom1);
            div$parent.appendChild(p$dom2);
            div$parent.appendChild(p$dom3);
            div$parent.appendChild(img$dom4);
            div$parent.appendChild(p$dom5);
            div$parent.appendChild(p$dom6);
            div$parent.appendChild(p$dom7);
            div$parent.appendChild(p$dom8);
            div$parent.style.visibility = "visible";

            removechildrens();

            switch (WhereGo) {
                case "placeAttackM":
                    AttackTab[1] = `${isme}`; //take name player with his position for Chimie
                    visiblAM.style.visibility = "visible";
                    playerInField++;
                    break;

                case "placeAttackL":
                    AttackTab[0] = `${isme}`;
                    visiblAL.style.visibility = "visible";
                    playerInField++;
                    break;

                case "placeAttackR":
                    AttackTab[2] = `${isme}`;
                    visiblAR.style.visibility = "visible";
                    playerInField++;
                    break;

                case "placeMiddleL":
                    MiddlekTab[0] = `${isme}`;
                    visiblML.style.visibility = "visible";
                    playerInField++;
                    break;

                case "placeMiddleR":
                    MiddlekTab[2] = `${isme}`;
                    visiblMR.style.visibility = "visible";
                    playerInField++;
                    break;

                case "placeMiddleM":
                    MiddlekTab[1] = `${isme}`;
                    visiblMM.style.visibility = "visible";
                    playerInField++;
                    break;

                case "placeDefenseL":
                    DefenseTab[0] = `${isme}`;
                    visiblDL.style.visibility = "visible";
                    playerInField++;
                    break;

                case "placeDefenseM":
                    DefenseTab[1] = `${isme}`;
                    visiblDM.style.visibility = "visible";
                    playerInField++;
                    break;

                case "placeDefenseM2":
                    DefenseTab[2] = `${isme}`;
                    visiblDM2.style.visibility = "visible";
                    playerInField++;
                    break;

                case "placeDefenseR":
                    DefenseTab[3] = `${isme}`;
                    visiblDR.style.visibility = "visible";
                    playerInField++;
                    break;

                case "GK":
                    Goolkiper = `${isme}`;
                    visiblGk.style.visibility = "visible";
                    playerInField++;
            }
            // check if field over
            if (playerInField == 11) {
                FineField();
            }
        };

        //creat div camla                    |T a 9 t e   l a 3 i b            |i m e g e s                    |...
        const divIn$sectionPlyers = function (
            pac,
            sho,
            pas,
            dri,
            def,
            phy,
            rit,
            imgJoure,
            imgMontakhb,
            imgnadi,
            isme,
            posi
        ) {
            //, WhereGo
            const div$Cart = document.createElement("div"); //this is cart
            const div$side_img = document.createElement("div"); // in cart
            const div$side_nel = document.createElement("div"); //in cart
            const img$ = document.createElement("img"); // in div$side_img
            const div$ = document.createElement("div"); //in div$side_img
            const img$1enterDiv = document.createElement("img"); // in div$
            const img$2enterDiv = document.createElement("img"); //in div$
            const p$enterDiv = document.createElement("p"); //in div$
            const h5$ = document.createElement("h5"); //in div$side_nel
            const p$ = document.createElement("div"); //in div$side_nel
            const button$enterNel = document.createElement("button"); //in div$side_nel
            //start
            const Section$Player = document.querySelector(".player");

            p$.innerHTML = `PAC:${pac}  SHO:${sho}  PAS:${pas}  DRI:${dri}  DEF:${def}  PHY:${phy}`;
            img$.src = imgJoure;
            img$.alt = "joure image";
            img$1enterDiv.src = imgMontakhb;
            img$1enterDiv.alt = "joure image";
            img$2enterDiv.src = imgnadi;
            img$2enterDiv.alt = "joure image";
            h5$.innerHTML = isme;
            p$enterDiv.innerHTML = posi;
            button$enterNel.innerHTML = "Add";

            //add class

            div$side_img.classList.add("player-NEL");
            div$side_img.classList.add("player-img");
            div$Cart.classList.add("player-cart");

            //add id
            button$enterNel.setAttribute("id", "addPlyerInto");

            //button eventListener
            button$enterNel.addEventListener("click", () => {
                replacePlayerToField(
                    pac,
                    sho,
                    pas,
                    dri,
                    def,
                    phy,
                    rit,
                    imgJoure,
                    imgMontakhb,
                    imgnadi,
                    isme,
                    posi
                );
            });

            //append
            div$side_nel.appendChild(h5$);
            div$side_nel.appendChild(p$);
            div$side_nel.appendChild(button$enterNel);
            div$side_img.appendChild(img$);
            div$.appendChild(img$1enterDiv);
            div$.appendChild(img$2enterDiv);
            div$.appendChild(p$enterDiv);
            div$side_img.appendChild(div$);
            div$Cart.appendChild(div$side_img);
            div$Cart.appendChild(div$side_nel);
            Section$Player.appendChild(div$Cart);
        };

        function PlyerInJsonGotoPlacePlyerHere (val){
            let Po = FiPlyer (val); //function for finde position plyer in json

            const parentOfAll = document.querySelector('.placePlyerHere');
            const Eizom = document.createElement('div');//3 div
            const Eimnm = document.createElement('div');//img p
            const Ei1pp = document.createElement('div');//p p
            const E2pp = document.createElement('div');//p p

            const Eimg = document.createElement('img');
            const Ep = document.createElement('p');
            const E1p = document.createElement('p');
            const E2p = document.createElement('p');
            const E3p = document.createElement('p');
            const E4p = document.createElement('p');

            E3p.innerHTML = "PAC  SHO PAS . DRI  DEF  PHY" ;
            E4p.innerHTML = `${obj.players[Po].pace} | ${obj.players[Po].shooting} | ${obj.players[Po].passing} | ${obj.players[Po].dribbling} | ${obj.players[Po].defending} | ${obj.players[Po].physical}`;

            E1p.innerHTML = `${obj.players[Po].position}`;
            E2p.innerHTML = `${obj.players[Po].rating}`;

            // console.log(obj.players[Po].position);

            Ep.innerHTML = `${obj.players[Po].name}`;
            Eimg.src = obj.players[Po].photo;

            //add classes
            Eizom.classList.add('zonPlyer');
            Eimnm.classList.add('imNm');

            //apend
            Eimnm.appendChild(Eimg);
            Eimnm.appendChild(Ep);

            Ei1pp.appendChild(E1p);
            Ei1pp.appendChild(E2p);

            E2pp.appendChild(E3p);
            E2pp.appendChild(E4p);

            Eizom.appendChild(Eimnm);
            Eizom.appendChild(Ei1pp);
            Eizom.appendChild(E2pp);

            parentOfAll.appendChild(Eizom);
        }

        const vlueToSearch = document.querySelector('.searchItem input');
        const iItem = document.querySelector('.searchItem i');
        iItem.onclick = ()=>{
            if (vlueToSearch.value){
                PlyerInJsonGotoPlacePlyerHere (vlueToSearch.value);
            }
            else
                console.log('eror at etap search', vlueToSearch.value);
        };

        const showallp = document.getElementById('showAll');
        showallp.onclick = ()=> {
            let o = -1;
            do{
                o++;
                PlyerInJsonGotoPlacePlyerHere (obj.players[o].name);
            } while (obj.players[i].name != "Gianluigi Donnarumma");
        }
    }); //fine fiche