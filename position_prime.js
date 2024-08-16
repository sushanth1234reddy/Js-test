function cap(str){
res="";

for(i in str){
    if(i>1){
        prime=true;
        for(j=2;j<i;j++){
            if(i%j==0){
                prime=false;
                res=res+str[i];
                break;
            }

        }
        if(prime==true){
            res=res+str[i].toUpperCase();
        }
        
    }

    else{
        res=res+str[i];
    }
}
console.log(res);
}
cap("vinod")
cap("ironman")
cap("vivek")
cap("sushanth")
cap("vinodchoudhary")