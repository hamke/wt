function pay() {

  var post_slug = 'daum-smartwork-add-users';
  var product_name = '마케팅톡: 다음 스마트워크 회원 추가';

  var data = {
    product_url: 'https://news.mkttalk.com/entry/' + post_slug + '/',
    product_name: product_name,
    product_amount: 0,
    imp_uid: 'N/A',
    pg_tid: 'N/A',
    receipt_url: './',
    message: '테스트용 로그입니다 ( ~/process-iamport-without-pay.js )'
  };

  jQuery.ajax({
    url: "./process-after-payment-success.php",
    type: 'POST',
    data: data,
    success: function(res) {

      jQuery(".read-more-after-pay").hide();

      jQuery(".ajax-return").html(
        // "<div class=\"py-5 text-center\">" +
        //   "<div class=\"\"><i class=\"fas fa-check\"></i> 파일이 다운로드되었습니다</div>" +
        // "</div>"
        res
      );

    }
  });

}
