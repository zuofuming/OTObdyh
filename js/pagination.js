var goodsData,  //商品信息
	num,    //商品数量
    pageSize,   //分页大小
    pageMaxSize = 5,    //分页最大值
    pageNum = 10,   //每页显示商品数量
    currentPage = 1;	//默认显示第一页


pagination();

//分页功能函数
function pagination(){
	goodsData = data;
	num = data.length;
	pageSize = num>pageNum?num/pageNum:1;	//确定页数
	//设置分页效果
    var str = "<li><a href='#' onclick='laquo()'>&laquo;</a></li>"
    for(i=0;i<pageSize;i++){
        str += "<li><a href='#' onclick='page_jump("+(i+1)+")'>"+(i+1)+"</a></li>";
    }
    str += "<li><a href='#' onclick='raquo()'>&raquo;</a></li>";
    $(".pagination").html(str);
    //当前页面选中状态
    active_page(1); 
    //默认显示第一页
    goods_show(1);
}
//分页选中状态效果
function active_page(page){
    $(".pagination li").removeClass();
    $(".pagination li:nth-child("+(page+1)+")").addClass("active");
}
function goods_show(page){
    var str="";
    if(page<pageSize){
        for(i=0;i<pageNum;i++){
        	str +="<div class='row'><div class='col-xs-5'><div class='thumbnail'><img src='"+data[i].pic_src+"'></div></div><div class='col-xs-7'><h5>"+data[i].name+"</h5><p>"+data[i].num+"</p></div></div></div>";
            //str += "<div class='col-md-3 nb'><div class='row'><div class='col-md-6 newbook'><img src='../../admin/"+bookData[(page-1)*pageNum+i]["book_picture"]+"'></div><div class='col-md-6'><p><a href='bookInfo.php?id="+bookData[(page-1)*pageNum+i]["book_id"]+"'>"+bookData[(page-1)*pageNum+i]["book_name"]+"</a></p><p>作者："+bookData[(page-1)*pageNum+i]["book_author"]+"</p><p>售价："+bookData[(page-1)*pageNum+i]["book_price"]+"元</p><p>数量："+bookData[(page-1)*pageNum+i]["book_num"]+"</p></div></div></div>";
        }
    }else{
       for(i=0;i<num-pageNum*(page-1);i++){
       	str +="<div class='row'><div class='col-xs-5'><div class='thumbnail'><img src='"+data[i].pic_src+"'></div></div><div class='col-xs-7'><h5>"+data[i].name+"</h5><p>"+data[i].num+"</p></div></div></div>";
            //str += "<div class='col-md-3 nb'><div class='row'><div class='col-md-6 newbook'><img src='../../admin/"+bookData[(page-1)*pageNum+i]["book_picture"]+"'></div><div class='col-md-6'><p><a href='bookInfo.php?id="+bookData[(page-1)*pageNum+i]["book_id"]+"'>"+bookData[(page-1)*pageNum+i]["book_name"]+"</a></p><p>作者："+bookData[(page-1)*pageNum+i]["book_author"]+"</p><p>售价："+bookData[(page-1)*pageNum+i]["book_price"]+"元</p><p>数量："+bookData[(page-1)*pageNum+i]["book_num"]+"</p></div></div></div>";
        } 
    }
    $(".goods").html(str);
    active_page(page);
    currentPage = page;
}
//前一页
function laquo(){
    if(currentPage>1){
        goods_show(currentPage-1);
    }
}
//后一页
function raquo(){
    if(currentPage<pageSize){
        goods_show(currentPage+1);
    }
}