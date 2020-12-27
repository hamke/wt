var IMP = window.IMP;
IMP.init('imp21028697'); // hello@wp-talk.com (카카오페이)
// IMP.init('imp14840138'); // leden_online@naver.com ( 카카오페이 / 테스트 )
// IMP.init('imp94339910'); // mutualwide@163.com ( 카카오페이 / 테스트 )

function pay() {

  var product_name = 'RSS API Generator : 파일 다운로드';
  var product_price = document.getElementById('price');
  var product_option = document.getElementById('selectBox');

  if ( product_price !== null ) {
    var product_amount = product_price.innerHTML;
  } else if ( product_price == null && product_option !== null ) {
    var product_amount = product_option.options[selectBox.selectedIndex].value;
  } else {
    var product_amount = 100;
  }

  IMP.request_pay({
    // amount : 10000,
    amount : product_amount,
  	buyer_name : '게스트(비회원)',
  	name : product_name
    // pg: 'inicis', // version 1.1.0부터 지원.
    // pay_method: 'card',
    // merchant_uid: 'merchant_' + new Date().getTime(),
    // buyer_email: 'iamport@siot.do',
    // buyer_tel: '010-1234-5678',
    // buyer_addr: '서울특별시 강남구 삼성동',
    // buyer_postcode: '123-456',
    // m_redirect_url: 'https://www.yourdomain.com/payments/complete'
  }, function(rsp) {

    if ( rsp.success ) {

      jQuery(".ajax-return").html(
        "<div class=\"py-5 text-center\">" +
          "<div class=\"spinner-grow loader\" id=\"loader\" role=\"status\">" +
            "<span class=\"sr-only\">Please Wait ...</span>" +
          "</div>" +
          "<div class=\"loader\">잠시만 기다려 주세요 ...</div>" +
        "</div>"
      );

      var message = '결제가 성공적으로 완료되었습니다';
      var data = {
        message: message,
        product_name: product_name,
        product_amount: product_amount,
        imp_uid: rsp.imp_uid,
        pg_tid: rsp.pg_tid,
        receipt_url: rsp.receipt_url
      };

      jQuery.ajax({
        url: "https://www.ttmkt.com/server/wp-talk-item/rss-api-generator/process-after-payment-success.php",
        type: 'POST',
        data: data,
        success: function(res) {

          window.location = res;

          jQuery(".ajax-return").html(
            "<div class=\"py-5 text-center\">" +
              "<div class=\"\"><i class=\"fas fa-check\"></i> 파일이 다운로드되었습니다</div>" +
            "</div>"
          );

        }
      });

    } else { // if ( !rsp.success )

      var message = '결제가 안전하게 취소/중단되었습니다.';
      var data = {
        message: message,
        product_name: product_name
      };

      jQuery.ajax({
        url: "https://www.ttmkt.com/server/wp-talk-item/rss-api-generator/process-after-payment-failure.php",
        type: 'POST',
        data: data
      });

      alert( message );
      // console.log( message );
    }
  });

};
