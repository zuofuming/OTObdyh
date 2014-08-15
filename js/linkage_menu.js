//大类
var str_l = "";
for(i=0;i<class_large.length;i++){
	str_l += "<option>"+class_large[i].large_name+"</option>";
}
$(".class_large").append(str_l);
//小类
var str_s = "";
for(i=0;i<class_data.class_large_1.length;i++){
	str_s += "<option>"+class_data.class_large_1[i].class_small+"</option>";
	//alert(class_data.class_large_1[i].class_small);
}
$(".class_small").append(str_s);
$(".class_large").change(function(){
	var selected_val = $(".class_large").val();
	var str_change = "";
	var i = 1;
	alert(eval(class_data[0].class_small_i));
	alert("dd");
	//for(i=0;i<class_data.selected_val)
	str_change += "<option>"+class_data.selected_val+"</option>"; 
});

//alert(class_data.class_large_1[0].class_small_1);