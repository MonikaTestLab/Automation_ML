import { Page } from '@playwright/test'

export class addToCart {
    readonly searchBox;
    readonly newpage;

    constructor(private page: Page) {

        this.searchBox = this.page.locator(`input[class='nw1UBF v1zwn26']`);
        this.newpage = this.page.locator(`div[class="RG5Slk"]`);

    }
}
