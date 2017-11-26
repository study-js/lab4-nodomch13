function minimal (pirveli,meore,mesame){
    
        var result = pirveli;
    
        if (meore < result) result = meore;
        if (mesame < result) result = mesame;
        return result;    
    }
    
    var pirveli = prompt("პირველი რიცხვი: ");
    var meore = prompt("მეორე რიცხვი: ");
    var mesame = prompt("მესამე რიცხვი: ");
    
    
    document.write(minimal(pirveli,meore,mesame));