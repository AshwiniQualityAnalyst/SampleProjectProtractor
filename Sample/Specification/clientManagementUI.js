var driver = require('../Pages/clientManagementPage.js');
var driver1 = require("../DataProvider/testdataClient.js");

describe('Identity Management -> Client  Module Testing ->', function () { // Describe block starts

    var originalTimeout = jasmine.DEFAULT_TIMEOUT_INTERVAL;
    var ClientID;

    beforeEach(function () {  //beforeEach block starts
        jasmine.DEFAULT_TIMEOUT_INTERVAL = 60000;
    });

    xit('Launch the application', function () {  //It block starts
        return browser.manage().timeouts().implicitlyWait(5000).then(function () {
            driver.launchApplication().then(function () {
                var pageTitle = browser.getTitle();
                expect(pageTitle).toBe(driver1.datadrive.loginpagebrowserTitle);
            });
        });
    }); //It block ends

    xit('Check pagination exist or not', function () {  //It block starts
        return driver.userName(driver1.datadrive.userName).then(function () {
            return driver.passWord(driver1.datadrive.passWord).then(function () {
                return driver.loginButton().then(function () {
                    return driver.identitymanagementLink().then(function () {
                        var explicitWait = protractor.ExpectedConditions;
                        return browser.wait(explicitWait.invisibilityOf(driver.spinner, 5000)).then(function () {
                            var pageTitle = browser.getTitle();
                            expect(pageTitle).toBe(driver1.datadrive.paginationpagebrowserTitle);
                            var number = driver.pagination();
                            return number.count().then(function (PaginationCount) {
                                console.log("Pagination Count: " + PaginationCount);
                                if (PaginationCount > 0) {
                                    for (var i = 0; i < PaginationCount; i++) {
                                        return driver.pagination().get(i).click();
                                    }
                                }
                                else {
                                    console.log("No pagination exist");
                                }
                            });
                        });
                    });
                });
            });
        });
    });  //It block ends

    xit('Create the client', function () { //It block starts
        return driver.createnewclientButton().then(function () {
            return driver.clientId("AutomationClientID" + driver.generator(driver1.datadrive.number)).then(function () {
                return driver.clientidText().then(function (IDofClient) {
                    ClientID = IDofClient;
                    return driver.clientName(driver1.datadrive.clientName).then(function () {
                        return driver.generaterandomsecretButton().then(function () {
                            return driver.selectFlow(driver1.datadrive.selectFlow1).then(function () {
                                return driver.saveButton().then(function () {
                                    return driver.jsMessage().then(function (GetText) {
                                        expect(GetText).toBe("Client - " + ClientID + " saved successfully!");
                                    }); ''
                                });
                            });
                        });
                    });
                });
            });
        });

    }); //It block ends

    xit('Check duplicate client exist or not', function () {  //It block starts
        return driver.createnewclientButton().then(function () {
            return driver.clientId(ClientID).then(function () {
                return driver.clientName(driver1.datadrive.clientName).then(function () {
                    return driver.generaterandomsecretButton().then(function () {
                        return driver.saveButton().then(function () {
                            return browser.sleep(5000).then(function () {
                                return driver.jsMessage().then(function (GetText) {
                                    console.log('Returned Text is ' + GetText);
                                    expect(GetText).toBe(driver1.datadrive.duplicationerrorMessage);
                                });
                            });
                        });
                    });
                });
            });
        });
    }); //It block ends

    xit('Filtering the client', function () {  //It block starts
        return driver.johnsoncontrolshomeButton().then(function () {
            return driver.identitymanagementLink().then(function () {
                driver.filterInput(ClientID).then(function () {
                    return driver.filterinputGettext().then(function (GetText) {
                        console.log('Returned Text is ' + GetText);
                        expect(GetText).toBe(ClientID);
                    });
                });
            });
        });
    }); //It block ends

    xit('Edit and update client', function () {  //It block starts
        return driver.spanClick().then(function () {
            var explicitWait = protractor.ExpectedConditions;
            return browser.wait(explicitWait.elementToBeClickable(driver.editButon, 5000)).then(function () {
                return driver.editButton().then(function () {
                    return driver.selectFlow(driver1.datadrive.selectFlow2).then(function () {
                        return driver.claimsTab().then(function () {
                            return driver.claimtypeInput(driver1.datadrive.claimType).then(function () {
                                return driver.claimvalueInput(driver1.datadrive.claimValue).then(function () {
                                    return driver.claimaddButton().then(function () {
                                        return driver.redirecturlsTab().then(function () {
                                            return driver.redirecturlsInput(driver1.datadrive.redirectUrls).then(function () {
                                                return driver.redirecturlsaddButton().then(function () {
                                                    return driver.logouturlsTab().then(function () {
                                                        return driver.logouturlsInput(driver1.datadrive.logoutUrls).then(function () {
                                                            return driver.logouturlsaddButton().then(function () {
                                                                return driver.saveButton().then(function () {
                                                                    return browser.sleep(3000).then(function () {
                                                                        return driver.jsMessage().then(function (GetText) {
                                                                            console.log('Returned Text is ' + GetText);
                                                                            expect(GetText).toBe("Client - " + ClientID + " saved successfully!");
                                                                        });
                                                                    });
                                                                });
                                                            });
                                                        });
                                                    });
                                                });
                                            });
                                        });
                                    });
                                });
                            });
                        });
                    });
                });
            });
        });

    }); //It block ends

    xit('Deleting the client', function () { //It block starts
        return driver.filterInput(ClientID).then(function () {
            return driver.spanClick().then(function () {
                var explicitWait = protractor.ExpectedConditions;
                return browser.wait(explicitWait.elementToBeClickable(driver.deleteButon, 2000)).then(function () {
                    return driver.deleteButton().then(function () {
                        return browser.wait(explicitWait.elementToBeClickable(driver.popupConfirmButon, 2000)).then(function () {
                            return driver.popupConfirmButton().then(function () {
                                return browser.sleep(3000).then(function () {
                                    return driver.jsMessage().then(function (GetText) {
                                        console.log('Returned Text is ' + GetText);
                                        expect(GetText).toBe(driver1.datadrive.clientdeletionMessage);
                                    });
                                });
                            });
                        });
                    });
                });
            });
        });
    }); //It block ends

    afterEach(function () {  //after Each block starts
        jasmine.DEFAULT_TIMEOUT_INTERVAL = originalTimeout;
    });

}); // Describe block ends