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
        str += "<li><a href='#' onclick='goods_show("+(i+1)+")'>"+(i+1)+"</a></li>";
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
        }
    }else{
       for(i=0;i<num-pageNum*(page-1);i++){
       	str +="<div class='row'><div class='col-xs-5'><div class='thumbnail'><img src='"+data[i].pic_src+"'></div></div><div class='col-xs-7'><h5>"+data[i].name+"</h5><p>"+data[i].num+"</p></div></div></div>";
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