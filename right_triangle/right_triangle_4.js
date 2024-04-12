for (let i = 1; i <= 5 ; i++) {
    for (let j = 1; j <= 5; j++) {
        if (j<i) {
            document.write("&nbsp; ");
        } else document.write("*");
    }
    document.write("<br>");
}