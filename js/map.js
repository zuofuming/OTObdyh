    var map = new BMap.Map("business_map");  
    var point = new BMap.Point(116.404,39.915);
    map.centerAndZoom(point, 14);      
    var zoomControl=new BMap.ZoomControl();  
    map.addControl(zoomControl);//添加缩放控件  
    var scaleControl=new BMap.ScaleControl();  
    map.addControl(scaleControl);//添加比例尺控件
    var marker = new BMap.Marker(point);        // 创建标注      
    map.addOverlay(marker);
    /*map.addEventListener("click", function(){      
        //window.open('map.html');
    });*/
    $("#business_map").click(function(){
        window.open('map.html');
    });
   