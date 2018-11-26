var IdentityManagementPage = function () {

    this.launchApplication = function () {
        return browser.get('https://qa-adminportal.digitalvault.cloud/');
    };

    this.userName = function (EnterText) {
        return element(by.id('username')).sendKeys(EnterText);
    };

    this.passWord = function (EnterText) {
        return element(by.name('password')).sendKeys(EnterText);
    };

    this.loginButton = function () {
        return element(by.xpath('//strong')).click();
    };

    this.dropdownUser = function () {
        return element(by.id('dropdownUser')).click();
    };

    this.logoutButton = function () {
        return element(by.xpath('//li[3]/a')).click();
    };

    // this.identitymanagementLink = function () {
    //     return element(by.xpath('//div/div/div/mat-icon')).click();
    // };

    this.identitymanagementLink = function () {
        return element(by.xpath('//*[contains(text(),"Identity Management")]')).click();
    };

    this.createnewclientButton = function () {
        return element(by.css('button[name="btnAddUser"]')).click();
    };

    this.clientId = function (EnterText) {
        return element(by.css('#clientid')).sendKeys(EnterText);
    };

    this.clientidText = function () {
        return element(by.css('#clientid')).getAttribute('ng-reflect-model');
    };

    this.clientName = function (EnterText) {
        return element(by.css('#clientname')).sendKeys(EnterText);
    };

    // this.generaterandomsecretButton = function () {
    //     return element(by.xpath('//button[@type="button"]')).click();
    // };

    this.generaterandomsecretButton = function () {
        return element(by.xpath('//*[contains(text(),"Generate Random Secret")]')).click();
    };

    this.saveButton = function () {
        return element(by.xpath('//button[@type="submit"]')).click();
    };

    this.spinner = element(by.css('div.spinner'));

    this.filterInput = function (EnterText) {
        return element(by.xpath('//input[@name="search"]')).click().then(function () {
            return element(by.xpath('//input[@name="search"]')).sendKeys(EnterText);
        });
    };

    this.filterinputGettext = function () {
        return element(by.xpath('//mat-row/mat-cell[1]')).getText();
    };

    this.jsMessage = function () {
        return element(by.xpath('//span[@class="toast-message ng-star-inserted"]')).getText();
        //return element(by.xpath('//*[@id="toast-container"]/div/div[2]/span')).getText();
    };

    this.spanClick = function () {
        return element(by.xpath('//mat-cell[4]/button/span/mat-icon')).click();
    };

    this.editButon = element(by.xpath('//div/button[1]/span'));

    this.editButton = function () {
        return element(by.xpath('//div/button[1]/span')).click();
    };

    this.deleteButon = element(by.xpath('//button[2]/span'));

    this.deleteButton = function () {
        return element(by.xpath('//button[2]/span')).click();
    };

    this.claimsTab = function () {
        return element(by.xpath('//a[@id="Claims"]')).click();
    };

    this.claimtypeInput = function (EnterText) {
        return element(by.css('input[name="claimType"]')).sendKeys(EnterText);
    };

    this.claimvalueInput = function (EnterText) {
        return element(by.css('input[name="claimValue"]')).sendKeys(EnterText);
    };

    this.claimaddButton = function () {
        return element(by.xpath('//div[3]/button')).click();
    };

    this.redirecturlsTab = function () {
        return element(by.xpath('//a[@id="RedirectUrls"]')).click();
    };

    this.redirecturlsInput = function (EnterText) {
        return element(by.css('input[name="redirectUrl"]')).sendKeys(EnterText);
    };

    this.redirecturlsaddButton = function () {
        return element(by.xpath('//div[2]/button')).click();
    };

    this.logouturlsTab = function () {
        return element(by.xpath('//a[@id="LogoutUrls"]')).click();
    };

    this.logouturlsInput = function (EnterText) {
        return element(by.xpath('//input[@name="redirectUrl"]')).sendKeys(EnterText);
    };

    this.logouturlsaddButton = function () {
        return element(by.xpath('//div[2]/button')).click();
    };

    this.saveButton = function () {
        return element(by.xpath('//button[@type="submit"]')).click();
    };

    this.popupConfirmButon = element(by.xpath('(//button[@type="button"])[3]'));

    this.popupConfirmButton = function () {
        return element(by.xpath('(//button[@type="button"])[3]')).click();
    };

    this.johnsoncontrolshomeButton = function () {
        return element(by.css('img.image-logo')).click();
    };

    this.pagination = function () {
        return element.all(by.xpath('//ul[@class="pagination"]/descendant::a[@class="page-link ng-star-inserted"]'));
    };

    this.generator = function (EnterMax) {
        return Math.floor(Math.random() * Math.floor(EnterMax));
    };

    this.selectFlow = function (EnterValue) {
        return element.all(by.tagName('option')).each(function (DropDowns) {
            return DropDowns.getAttribute('value').then(function (DropDownTexts) {
                if (DropDownTexts == EnterValue) {
                    return DropDowns.click();
                }
            });
        });
    }

}
module.exports = new IdentityManagementPage();