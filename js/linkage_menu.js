//大类
var str_l = "";
for(i=0;i<class_data.length;i++){
	str_l += "<option>"+class_data[i].large_name+"</option>";
}
$(".class_large").append(str_l);
//小类(默认)
var str_s = "";
for(i=0;i<class_large_1.length;i++){
	str_s += "<option>"+class_large_1[i].small_name+"</option>";
}
$(".class_small").append(str_s);
$(".class_large").change(function(){
	var selected_val = $(".class_large").val();
	var str_change = "";
	for(i=0;i<eval(selected_val).length;i++){
		str_change += "<option>"+eval(selected_val)[i].small_name+"</option>";
	}
	$(".class_small").html(str_change);

	//alert(eval(class_large[0].large_name)[0].small_name);
	//for(i=0;i<class_data.selected_val)
	//str_change += "<option>"+class_data.selected_val+"</option>"; 
});

//alert(class_data.class_large_1[0].class_small_1);