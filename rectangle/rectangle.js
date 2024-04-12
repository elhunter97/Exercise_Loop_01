for (let i = 1; i <= 7; i++) {
    for (let j = 1; j <= 21; j++) {
        if (i==1 || i==7 || j==1 || j==21){
            document.write("*");
        } else document.write("&nbsp; ");
    }
    document.write("<br>");
}