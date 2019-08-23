const sumOf = function(list) {
  let i;
  let len = list;
  for (i=-1;i<len+1;i++){
    console.log(`${len} have jumped over the fence.`);
    len = len-1;
    if (len == 0){
      console.log('All the sheep have jumped over the fence.')
    }
  };
};

let lst = 3;
sumOf(lst)
