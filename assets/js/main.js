$(document).ready(function() {
(function(){
        console.log("Load");
        var dribbbleURL = "https://api.dribbble.com/v1/users/hpw11a/shots/?access_token=21f8c2e10f4681af08218a362c36f90ede0e9bfe4edd4fcf307fe2dfc3d9281d";
        $.getJSON(dribbbleURL, function(data){
        console.log(data);
        console.log(data.html_url);
        data.forEach(function(element){
        console.log(element.title);
        console.log(element.description);
});