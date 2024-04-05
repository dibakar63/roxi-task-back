 const db=async ()=>{
    let data;
    let url="https://s3.amazonaws.com/roxiler.com/product_transaction.json";
    let res=await fetch("https://s3.amazonaws.com/roxiler.com/product_transaction.json",{
        method:"GET",
        header:{
            "Content-type":"application/json"
        }
    });
    let response=await res.json();
    //console.log(response);
    data=response;
   // console.log(data.length);
    let formattedDate;
    for(let i=0;i<data.length;i++){
        let dateString=data[i].dateOfSale;
       // console.log(dateString)
        const date = new Date(dateString);

let day = date.getDate().toString().padStart(2, '0');
let month = (date.getMonth() + 1).toString().padStart(2, '0');
let year = date.getFullYear();

 formattedDate = `${day}-${month}-${year}`;
 //.log(formattedDate)
 data[i].dateOfSale=formattedDate;
    }
   console.log(data)
    

}
module.exports= db;