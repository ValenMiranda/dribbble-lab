$(document).ready(function() {
    (function(){
        /*console.log("Load");*/
        var dribbbleURL = "https://api.dribbble.com/v1/users/hpw11a/shots/?access_token=21f8c2e10f4681af08218a362c36f90ede0e9bfe4edd4fcf307fe2dfc3d9281d";
        $.getJSON(dribbbleURL, function(data){
            /*console.log(data);
            console.log(data.html_url);*/
            data.forEach(function(element){
                /*console.log(element.title);
                console.log(element.description);
                console.log(element.avatar_url);*/
                $("#padre-shots").append('<a class="a-shots"><div class="col-lg-4 col-md-4 col-sm-6 col-xs-6 hijo-shots">'+
                    '<div class="contenedor-hover" style="position:relative"><div class="contenedor-imagen-shots"><p>'+element.title+'</p><p class="p-descripcion">'+element.description+'</p></div><img class="img-responsive" src="'+element.images.normal+'" alt=""></div>'+
                    '<p class="pull-right icon-shots"><i class="fa fa-eye" aria-hidden="true"></i>'+element.views_count+'<i class="fa fa-comment" aria-hidden="true"></i>'+element.comments_count+
                    '<i class="fa fa-heart" aria-hidden="true"></i>'+element.likes_count+'</p>'+
                    ' </div></a>');
                if(element.description == null){
                    $(".p-descripcion").remove();
                }
                $(".a-shots").click(function() {
                    window.open(element.html_url,'_blank');
                });
            });
        });
    })();

    var dribbbleURL = "https://api.dribbble.com/v1/users/hpw11a/?access_token=21f8c2e10f4681af08218a362c36f90ede0e9bfe4edd4fcf307fe2dfc3d9281d";
    $.getJSON(dribbbleURL, function(data){
            console.log(data.avatar_url);
            $(".perfil").append('<a href="#">' +
                '<img class="imgPerfil" alt="" src="'+data.avatar_url+'">'+
                '<center class="perfil-name">' + data.name + '</center>' +
                '</a>' +
                '<span class="locatizacion">' +
                '<a href="#" class="perfil-location">'+data.location+'</a>' +
                '</span>' +
                '<div>Living in Portland & available for freelance.</div>' +
                '<div class="mensaje">' +
                '<button class="btn"><i class="fa fa-envelope fa-lg" aria-hidden="true"></i> Hire Me</button>' +
                '</div>');
    });
});