// Start ptty
var $ptty = $('#terminal').Ptty(
    TrendTalk.terminalSettingsObject
);

// Register a command.
for (var i = 0; i < TrendTalk.terminalCommandsObject.length; i++) {
    $ptty.register('command', TrendTalk.terminalCommandsObject[i]);
}
TrendTalk.RegisterCommandClickEvent();

// Check Private Menu
// TrendTalk.CheckPrivateMenuAvailable();
