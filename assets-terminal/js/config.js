var TrendTalk = {};
TrendTalk.terminalSettingsObject = {
  ps: '[user@wp-talk.com]$',
  i18n: {
    welcome: '<span class="title"><i class="fab fa-wordpress"></i> Welcome to <a href="./"><span class="point">WP-TALK.COM</span> - <span class="point">www.wp-talk.com</span></a></span>' +
      '\n' +
      '---' +
      '\n' +
      'Please Input or Click Commands.' +
      '\n' +
      '<span class="ko">메뉴 명령어를 입력 또는 클릭해 주세요.</span>' +
      '\n' +
      '---' +
      '\n' +
      // 'Executable Commands (Menu) :' +
      // '\n' +
      '> Service : ' +
      '<span class="command_guide point">news</span>, ' +
      '<span class="command_guide point">school</span>, ' +
      '<span class="command_guide point">119</span>, ' +
      '<span class="command_guide point">lesson</span>, ' +
      '<span class="command_guide point">hosting</span>, ' +
      '<span class="command_guide point">kakao</span>' +
      '\n' +
      '> App : ' +
      '<span class="command_guide point">analytics</span>, ' +
      '<span class="command_guide point">child-theme-builder</span> ' +
      '\n' +
      '> Log : ' +
      '<span class="command_guide point">help</span>, ' +
      '<span class="command_guide point">history</span>, ' +
      '<span class="command_guide point">clear</span>' +
      // '<span class="command_guide">bot</span>\n' +
      // '<span class="command_guide_onlytype">plogin</span>, ' +
      // '<span class="command_guide">pmenu</span>\n'
      '\n' +
      '---' +
      '\n'
  }
};
TrendTalk.makePublicPageObject = function(keyword) {
  return {
    name: keyword,
    method: function(cmd) {
      cmd.out = 'Please wait. Opening new window...';
      // location.href = 'https://' + keyword + '.wp-talk.com/';
      window.open('https://' + keyword + '.wp-talk.com/');
      return cmd;
    },
    help: 'Go to ' + keyword + ' page.'
  }
};
TrendTalk.makePublicPageObjectNew = function(keyword) {
  return {
    name: keyword,
    method: function(cmd) {
      cmd.out = 'Please wait. Opening new window...';
      // location.href = 'https://' + 'www.wp-talk.com/' + keyword + '/';
      window.open('https://' + 'www.wp-talk.com/' + keyword + '/');
      return cmd;
    },
    help: 'Go to ' + keyword + ' page.'
  }
};
TrendTalk.makePublicPageObjectApp = function(keyword) {
  return {
    name: keyword,
    method: function(cmd) {
      cmd.out = 'Please wait. Opening new window...';
      // location.href = 'https://' + 'www.wp-talk.com/' + keyword + '/';
      window.open('https://' + 'www.wp-talk.com/app/' + keyword + '/');
      return cmd;
    },
    help: 'Go to ' + keyword + ' page.'
  }
};
// TrendTalk.PublicCommands = ['news', 'bot', 'plogin', 'pmenu'];
TrendTalk.PublicCommands = ['news', 'school', '119', 'lesson', 'hosting', 'kakao', 'analytics', 'child-theme-builder'];
TrendTalk.terminalCommandsObject = [
  TrendTalk.makePublicPageObject('news'),
  TrendTalk.makePublicPageObject('school'),
  TrendTalk.makePublicPageObjectNew('119'),
  TrendTalk.makePublicPageObjectNew('lesson'),
  TrendTalk.makePublicPageObjectNew('hosting'),
  TrendTalk.makePublicPageObjectNew('kakao'),
  TrendTalk.makePublicPageObjectApp('analytics'),
  TrendTalk.makePublicPageObjectApp('child-theme-builder'),
  // {
  //   name: 'plogin',
  //   method: function(cmd) {
  //     var last = $ptty.get_command_option('last');
  //     var args = last.split(' ');
  //     var arg1 = args[1];
  //     var arg2 = args[2];
  //
  //     if (!(arg1 && arg2)) {
  //       cmd.out = 'Error: needs 2 variables.';
  //       return cmd;
  //     }
  //
  //     var url = "https://p.TrendTalk.com/do_login";
  //     var values = {
  //       username: arg1,
  //       password: arg2,
  //       return_page: 'https://p.TrendTalk.com/summary'
  //     };
  //     var form = createElement("form", {
  //       action: url,
  //       method: "POST",
  //       style: 'display: none',
  //       target: 'hidden_iframe'
  //     });
  //     for (var property in values) {
  //       if (values.hasOwnProperty(property)) {
  //         var value = values[property];
  //         if (value instanceof Array) {
  //           for (var i = 0, l = value.length; i < l; i++) {
  //             form.appendChild(createElement("input", {
  //               type: "hidden",
  //               name: property,
  //               value: value[i]
  //             }));
  //           }
  //         } else {
  //           form.appendChild(createElement("input", {
  //             type: "hidden",
  //             name: property,
  //             value: value
  //           }));
  //         }
  //       }
  //     }
  //     document.body.appendChild(form);
  //     form.submit();
  //     document.body.removeChild(form);
  //
  //     cmd.out = 'Signing In...'
  //     setTimeout(function() {
  //       TrendTalk.CheckPrivateMenuAvailable();
  //     }, 2000);
  //     return cmd;
  //   },
  //   help: 'Private login'
  // }, {
  //   name: 'pmenu',
  //   method: function(cmd) {
  //     cmd.out = 'Fetching more menus if it is available...';
  //     TrendTalk.CheckPrivateMenuAvailable();
  //     return cmd;
  //   },
  //   help: 'Fetching Private Menu'
  // },
];

TrendTalk.RegisterCommandClickEvent = function() {
  $('.command_guide').on('click', function() {
    var string_guide = $(this).html();
    $('.input').html(string_guide); // This is terminal's prompt!
    $('.input').trigger({
      type: 'keydown',
      which: 13,
      keyCode: 13
    });
  });
  $('.command_guide_onlytype').on('click', function() {
    var string_guide = $(this).html();
    $('.input').html(string_guide + ' '); // This is terminal's prompt!
  });
}

// TrendTalk.CheckPrivateMenuAvailable = function() {
//   fetch("https://t.TrendTalk.com/menu", {
//     method: "GET",
//     mode: 'cors',
//     credentials: 'include'
//   }).then(function(response) {
//     return response.json();
//   }).then(function(data) {
//     if (data.commands.length > 0) {
//       var guide = 'TrendTalk<br>' +
//         '-<br>' +
//         'No.1 Cross-border Business & Marketing Solution Provider<br>' +
//         '<a href="https://www.trendtalk.kr/" target="_blank">https://www.trendtalk.kr/</a><br><br>' +
//         'Executable Commands:<br>' +
//         '<span class="command_guide">help</span>, ';
//
//       for (var j = 0; j < TrendTalk.PublicCommands.length; j++) {
//         $ptty.unregister('command', TrendTalk.PublicCommands[j]);
//       }
//
//       for (var i = 0; i < data.commands.length; i++) {
//         guide += '<span class="command_guide">' + data.commands[i].name + '</span>, ';
//         $ptty.register('command', {
//           name: data.commands[i].name,
//           method: eval(data.commands[i].function.replace(/\n/gi, '')),
//           help: data.commands[i].help,
//         });
//       }
//       guide += '<br>';
//       $ptty.run_command('clear');
//       $('#terminal .content').append(guide);
//       TrendTalk.RegisterCommandClickEvent();
//       $ptty.run_command('hello');
//     }
//   });
// };
