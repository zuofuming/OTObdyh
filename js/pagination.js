var goodsData,  //商品信息
	num,    //商品数量
    pageSize,   //分页大小
    pageNum = 5,   //每页显示商品数量
    currentPage = 1;	//默认显示第一页


pagination();

//分页功能函数
function pagination(){
	goodsData = data;
	num = data.length;
	pageSize = num>pageNum?Math.ceil(num/pageNum):1;	//确定页数
    
	//设置分页效果
    var str = "<div class='col-xs-3'><a href='#scrollspy_goods' onclick='laquo()'><button class='btn btn-default btn-sm'>上一页</button></a></div><div class='col-xs-5'><select class='form-control input-sm'>";
    for(i=0;i<pageSize;i++){
        str += "<option value='"+(i+1)+"'>第 "+(i+1)+"/"+pageSize+" 页</option>";
    }
   
    str += "</select></div><div class='col-xs-3'><a href='#scrollspy_goods' onclick='raquo()'><button class='btn btn-default btn-sm'>下一页</button></a>";
    $(".pagination").html(str);
    //默认显示第一页
    goods_show(currentPage);
}

function goods_show(page){
    //alert(page);
    var str="";
    if(page<pageSize){
        for(i=0;i<pageNum;i++){
        	str +="<div class='row'><div class='col-xs-5'><div class='thumbnail'><img src='"+data[pageNum*(page-1)+i].pic_src+"'></div></div><div class='col-xs-7'><h5>"+data[pageNum*(page-1)+i].name+"</h5><p>"+data[pageNum*(page-1)+i].num+"</p></div></div></div>";
        }
    }else{
       for(i=0;i<num-pageNum*(page-1);i++){
       	str +="<div class='row'><div class='col-xs-5'><div class='thumbnail'><img src='"+data[pageNum*(page-1)+i].pic_src+"'></div></div><div class='col-xs-7'><h5>"+data[pageNum*(page-1)+i].name+"</h5><p>"+data[pageNum*(page-1)+i].num+"</p></div></div></div>";
        } 
    }
    $(".goods").html(str);
    //active_page(page);
    currentPage = page;
}
//前一页
function laquo(){
    if(currentPage>1){
        $("select").get(0).selectedIndex=currentPage-2; 
        goods_show(currentPage-1);
    }
}
//后一页
function raquo(){
    if(currentPage<pageSize){
        $("select").get(0).selectedIndex=currentPage; 
        goods_show(1+parseInt(currentPage));
    }
}

$("select").change(function(){
    var option_val = $("select").val();
    goods_show(option_val);
    $("select").get(0).selectedIndex=option_val-1;
});