var  API = 'https://makeup-api.herokuapp.com/api/v1/products.json'

// Display the brand and the name of the product.
// Display the price of the product.
// Also display the image and product link.
// Display the description of the product.
async function fetchingFun (apiURL) {
        v1 = await fetch(apiURL)//response
        checkv1 = await v1.json()//promise
        return checkv1
}
async function makeup (){
    try{
        c1 = await fetchingFun(API)
        console.log("makeup_api");
        var wholeparent = document.querySelector('.parent')
        console.log(c1);
        for(let i of c1){
            var praentContainer = document.createElement('div')
             praentContainer.classList.add("super")
            try{
                console.log("brand name :",i.brand);
                console.log("product type:",i.product_type);
                console.log("price : $",i.price);
                console.log("img url :",i.image_link);
                console.log("description :", i.description);
                console.log("*".repeat(35));
                obj = {
                    "brand name ":i.brand,"product":i.product_type, "price":i.price, "image url":i.image_link, "discription":i.description
                } 
                for(let j of Object.keys(obj)){
                    if(obj[j].includes('.image_link')){
                        var imgdata = document.createElement('img url')
                        imgdata.setAttribute('src',obj[j])
                        praentContainer.append(imgdata)
                        continue
                    }
                    var para = document.createElement('p')
                    para.innerHTML=`<b>${j}</b> : ${obj[j]}`  
                    praentContainer.append(para)//impartent 

                }
                wholeparent.append(praentContainer)
                console.log(praentContainer);
                
            }catch{
                console.log("error catched");

            }  
        }
    } catch{
        console.log("err");
    }

}makeup () 