export const createPaginationArray = (currentPage,totalPages) => {
    let loopableArray = [];
    let countOfDotItems = 0;

    if(1===totalPages){
        return loopableArray;
    }

    if(0 < currentPage - 2){
        loopableArray.push(currentPage - 2);
    }

    if(0 < currentPage - 1){
        loopableArray.push(currentPage - 1);
    }

    loopableArray.push(currentPage);

    if( totalPages >= currentPage + 1 ){
        loopableArray.push(currentPage + 1);
    }
    
    if( totalPages >= currentPage + 2 ){
        loopableArray.push(currentPage + 2);
    }

    if(1 < loopableArray[0] - 1){
        loopableArray.unshift('...');
        countOfDotItems +=1;
    }
    
    if(1 < totalPages - loopableArray[loopableArray.length - (2-countOfDotItems)]){
        loopableArray.push('...');
    }

    if(-1 === loopableArray.indexOf(1)){
        loopableArray.unshift(1);
    }

    if(-1 === loopableArray.indexOf(totalPages)){
        loopableArray.push(totalPages);
    }

    return loopableArray;
}