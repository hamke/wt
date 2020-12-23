function pay() {

  var post_slug = 'daum-smartwork-add-users';
  var product_name = 'RSS API Generator : 파일 다운로드';

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
    url: "https://www.ttmkt.com/server/wp-talk-item/rss-api-generator-without-pay/process-after-payment-success.php",
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

}
