module.exports = {
    'Should display an error message when you enter a wrong login information' : function (client) {
            client
            .url ('https://www.netflix.com/')
            .waitForElementVisible('body', 1000)
            .useXpath().click('//a[@href="/login"]')
        .useCss().setValue('#id_userLoginId', 'test@gmail.com')
        .setValue('#id_password' ,'1234')
        .useXpath().click('//button[text()="Sign In"]')
        .useCss().assert.visible('.ui-message-contents')
        .end();

    }
};
