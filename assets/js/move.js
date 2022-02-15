    function rightfun() {
        var Image_Id = document.getElementById('chang');
        var link=document.getElementById('ch');
        var name=document.getElementById("name");
        var txt =document.getElementById("txt");
        if (Image_Id.src.match("assets/img/vang.png")) {
            Image_Id.src = "assets/img/fashion.png";
            link.href="portfolio/fashion/index.html";
            name.innerHTML="Snazzy Fashion";
            txt.innerHTML="A web page for a fashion retailer with a background video that plays in a continuous loop.";
        }
        else if(Image_Id.src.match("assets/img/fashion.png")) {
            Image_Id.src = "assets/img/smoothies.png";
            link.href="portfolio/smoothies/index.html";
            name.innerHTML="Smooth Smoothies";
            txt.innerHTML="A multi-column, flexbox-based page layout and hero image with a tinted overlay.";
        }
        else if(Image_Id.src.match("assets/img/smoothies.png")){
            Image_Id.src = "assets/img/crypto.png";
            link.href="portfolio/crypto-wallet/index.html";
            name.innerHTML="Crypto-wallet";
            txt.innerHTML="Send, receive & exchange 100+ cryptocurrencies with ease.";
        }
        else{
            Image_Id.src = "assets/img/vang.png";
            link.href="portfolio/van-gogh/index.html";
            name.innerHTML="Vincent Van Gogh";
            txt.innerHTML="A summary of the life and work of Dutch artist Vincent van Gogh with an embeded video from YouTube.";
        }
    }        


    function leftfun() {
        var Image_Id = document.getElementById('chang');
        var link=document.getElementById('ch');
        var name=document.getElementById("name");
        if (Image_Id.src.match("assets/img/vang.png")) {
            Image_Id.src = "assets/img/crypto.png";
            link.href="portfolio/crypto-wallet/index.html";
            name.innerHTML="Crypto-wallet";
            txt.innerHTML="Send, receive & exchange 100+ cryptocurrencies with ease.";
        }
        else if(Image_Id.src.match("assets/img/crypto.png")) {
            Image_Id.src = "assets/img/smoothies.png";
            link.href="portfolio/smoothies/index.html";
            name.innerHTML="Smooth Smoothies";
            txt.innerHTML="A multi-column, flexbox-based page layout and hero image with a tinted overlay.";
        }
        else if(Image_Id.src.match("assets/img/smoothies.png")){
            
            Image_Id.src = "assets/img/fashion.png";
            link.href="portfolio/fashion/index.html";
            name.innerHTML="Snazzy Fashion";
            txt.innerHTML="A web page for a fashion retailer with a background video that plays in a continuous loop.";
        }
        else{
            Image_Id.src = "assets/img/vang.png";
            link.href="portfolio/van-gogh/index.html";
            name.innerHTML="Vincent Van Gogh";
            txt.innerHTML="A summary of the life and work of Dutch artist Vincent van Gogh with an embeded video from YouTube.";
        }
    }       