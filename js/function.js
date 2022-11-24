let b=[];
            let i=[];
            let n=[];
            let g=[];
            let o=[];
            let a = true;
            let estado;
            let Res;
            
            function generar(){
                var number = Math.floor(Math.random()*75)+1;
                let array=[...b,...i,...n,...g,...o];
                if (number >=1 && number <=15){
                    x = array.some(function(v){
                    return v === "B"+number;
                    });
                    if(x === false){                    
                        estado = "B";
                        resN = (estado + number);
                        b.push(resN);
                    } else {generar();}
                } 
                if (number >=16 && number <=30){
                    x = array.some(function(v){
                    return v === "I"+number;
                    });
                    if(x === false){
                        estado = "I";
                        resN = (estado + number);
                        i.push(resN);
                    } else {generar()}
                } 
                if (number >=31 && number <=45){
                    x = array.some(function(v){
                    return v === "N"+number;
                    });
                    if(x === false){
                        estado = "N";
                        resN = (estado + number);
                        n.push(resN);
                    } else {generar()}
                } 
                if (number >=46 && number <=60){
                    x = array.some(function(v){
                    return v === "G"+number;
                    });
                    if(x === false){
                        estado = "G";
                        resN = (estado + number);
                        g.push(resN);
                    } else {generar()}
                } 
                if (number >=61 && number <=75){
                    x = array.some(function(v){
                    return v === "O"+number;
                    });
                    if(x === false){
                        estado = "O";
                        resN = (estado + number);;
                        o.push(resN);
                    } else {generar()}
                } 
                console.log(x);
                console.log(array);
                res = resN;
            }
        
            
            function mostrarDiv(){
                let divB = document.getElementById("divB");
                divB.innerText = (b)
                let divI = document.getElementById("divI");
                divI.innerText = (i)
                let divN = document.getElementById("divN");
                divN.innerText = (n)
                let divG = document.getElementById("divG");
                divG.innerText = (g)
                let divO = document.getElementById("divO");
                divO.innerText = (o)
                let divR = document.getElementById("divR");
                divR.innerText = (res)
                //alert("Hola "+nombre)
            }
            function borrar(){
                b=[];
                i=[];
                n=[];
                g=[];
                o=[];
                res = 0;
                //alert("Hola "+nombre)
            }

            function genB(){
                var number = Math.floor(Math.random()*15)+1;
                    x = b.some(function(v){
                    return v === "B"+number;
                    });
                    if(x === false){                    
                        estado = "B";
                        resN = (estado + number);
                        b.push(resN);
                    } else {genB();}
                    res = resN;
            }

            function genI(){
                var number = Math.floor(Math.random()*(31-16)+16);
                    x = i.some(function(v){
                    return v === "I"+number;
                    });
                    if(x === false){                    
                        estado = "I";
                        resN = (estado + number);
                        i.push(resN);
                    } else {genI();}
                    res = resN;
            }

            function genN(){
                var number = Math.floor(Math.random()*(46-31)+31);
                    x = n.some(function(v){
                    return v === "N"+number;
                    });
                    if(x === false){                    
                        estado = "N";
                        resN = (estado + number);
                        n.push(resN);
                    } else {genN();}
                    res = resN;
            }

            function genG(){
                var number = Math.floor(Math.random()*(61-46)+46);
                    x = g.some(function(v){
                    return v === "G"+number;
                    });
                    if(x === false){                    
                        estado = "G";
                        resN = (estado + number);
                        g.push(resN);
                    } else {genG();}
                    res = resN;
            }

            function genO(){
                var number = Math.floor(Math.random()*(76-61)+61);
                    x = o.some(function(v){
                    return v === "O"+number;
                    });
                    if(x === false){                    
                        estado = "O";
                        resN = (estado + number);
                        o.push(resN);
                    } else {genO();}
                    res = resN;
            }