const { BaseReuse } = require('../utility/base')
const { baseurl, username, password } = require('../utility/env')

class LocatorPage {
    constructor(page) {
        this.page = page;

        //locators
        this.usernameInput = "#username";
        this.passwordInput = "#password";
        this.loginButton = "#login"
    }

    async navigate() {
        await BaseReuse.navigateToUrl(this.page, baseurl);
    }

    async login(){
        await BaseReuse.fillInput(this.page, this.usernameInput,username);
        await BaseReuse.fillInput(this.page, this.passwordInput,password);
        await BaseReuse.clickElement(this.page,this.loginButton );
    }

}
module.exports={LocatorPage};