fetch("https://api.giphy.com/v1/gifs/random?api_key=qfdukymihll0EeQ8SfA7AJ32t719U8Yv&tag=space+cat&rating=g")
.then(
    function(response){
        return response.json();
    }
).then(
    function(jsonData){
        console.log(jsonData);
        var gifUrl =jsonData.data.images.original.url;
        console.log(gifUrl);
        var image=document.createElement("img");
        image.setAttribute("src", gifUrl);
        document.body.appendChild(image);

        
        var caption=jsonData.data.title;
        var title=document.createElement("h3");
        title.innerHTML=caption;
        document.body.appendChild(title);
    }
)