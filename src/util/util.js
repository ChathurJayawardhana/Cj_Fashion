export const priceValuFormat = (value)=>{
   return value
   ?" LKR: "+
   value.toString().replace(/\B(?=(\d{3})+(?!\d))/g,",")+
   ".00" : " "
}

export const getProductType = (imagenumber) => {
         switch(imagenumber){
               case 1 :
               return "frock";
               case 2 :
               return "T_shirt";
               case 3 :
               return "skinny";
               case 4 :
               return "blows";
               case 5 :
               return "shirt";
               case 6 :
               return "skirt"; 
               default:
                  return "dress";   
         }
}