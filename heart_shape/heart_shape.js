for (let i = 1; i <=4 ; i++) {
    for (let j = 1; j <=13; j++) {
        if (i==1){
            if (j==6 || j==7 || j==8){
                document.write("&nbsp; ");
            } else document.write("*");
        } else if (i==3){
            if (j==1 || j==2 || j==12 || j==13 ){
                document.write("&nbsp; ");
            } else document.write("*");
        } else if (i==4){
            if (j==1 || j==2 || j==3 || j==4 || j==5 || j==6 || j==8 || j==9 || j==10 || j==11 || j==12 || j==13 ){
                document.write("&nbsp; ");
            } else document.write("*");
        } else document.write("*");
    }
    document.write("<br>");
}