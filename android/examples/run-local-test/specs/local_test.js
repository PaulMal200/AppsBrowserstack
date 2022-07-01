var assert = require('assert');

describe('login Verification', () => {
    //Privacy Screen
  it('test1 ', async () => {
  console.log ("HELOOOOOOOOOOOOOOOOOOOO");
    if (driver.isKeyboardShown()) {
          driver.hideKeyboard();
        }
    var privacyScreenButton = await $('android.widget.FrameLayout');
    await privacyScreenButton.waitForDisplayed({ timeout: 30000 });
    await privacyScreenButton.click();

    //Coronavirus Update Screen
    var CoronavirusUpdateScreen = await $('//android.widget.TextView[@resource-id="com.whitbread.premierinn.stage:id/tv_call_to_action_button_text"]');
    await CoronavirusUpdateScreen.waitForDisplayed({ timeout: 30000 });
    await CoronavirusUpdateScreen.click();

    //My account screen
    var accountScreenButton = await $('//android.widget.TextView[@text="Account"]');
    await accountScreenButton.waitForDisplayed({ timeout: 30000 });
    await accountScreenButton.click();

    var accountScreenButton = await $('//android.widget.TextView[@resource-id="com.whitbread.premierinn.stage:id/tv_call_to_action_button_text"]');
    await accountScreenButton.waitForDisplayed({ timeout: 30000 });
    await accountScreenButton.click();

    // login account screen

    var loginUserName = await $('//android.widget.EditText[@resource-id="com.whitbread.premierinn.stage:id/account_login_email_input"]');
    await loginUserName.waitForDisplayed({ timeout: 30000 });
    await loginUserName.click()
    await loginUserName.addValue("ali.celik@whitbread.com");

    var loginPassword = await $('//android.widget.EditText[@resource-id="com.whitbread.premierinn.stage:id/account_login_password_input"]');
    await loginPassword.waitForDisplayed({ timeout: 30000 });
    await loginPassword.click()
    await loginPassword.addValue("Premier1");
    await browser.pause(10000);


    var loginButton = await $('//android.widget.TextView[@resource-id="com.whitbread.premierinn.stage:id/tv_call_to_action_button_text"]');
    await loginButton.waitForDisplayed({ timeout: 30000 });
    await loginButton.click();

    // var textOutput = await $('~Text Output');
    // await textOutput.waitForDisplayed({ timeout: 30000 });
    // var value = await textOutput.getText();

    // if (value === "ali.celik@whitbread.com")
    //   assert(true)
    // else
    //   assert(false)
  });
});
