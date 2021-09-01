alert("hi");


$(function() {
    $("#api").click(function() {
        $.ajax({
            method : "GET",
            url: "http://localhost:3000",  //전송

            //data: { query: $("#bookName").val()},   //보낼 데이터
            //headers: { Authorization : "KakaoAK a974995883875e44e014f3b99b2b756d"}
        })
        .done(function(msg) {
            console.log(msg);
            //var a = msg;
            
            //document.getElementById("result").innerHTML = `
            //<h1> 책 검색 결과</h1>
            //<h4>제목 :   ${msg[0].name} </h4>
            
            
            //`;
            //<img height=200% src='${msg.documents[0].thumbnail}'>
            //<h4>제목 :   ${msg.documents[0].name} </h4>
            // <h4>작가 :   ${msg.documents[0].authors} </h4>
            // <h4>줄거리 :   ${msg.documents[0].contents} </h4>
            // <h4>가격 :   ${msg.documents[0].sale_price} </h4>
            // <h4>출판사 :   ${msg.documents[0].publisher} </h4>
        });
    })
});