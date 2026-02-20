
export const Api_Url = () => {
    
    if(typeof window !== 'undefined'){
        return 'http://localhost:3000';
    }else{
        return 'http://172.20.10.4:3000';
    }
    
};