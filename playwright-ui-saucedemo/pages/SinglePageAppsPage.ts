import { Page, Locator } from '@playwright/test';

export class SinglePageAppsPage {
    readonly page: Page;


    constructor(page: Page) {
        this.page = page;

    }

    async navigate() {
        await this.page.goto('/inventory.html#');
    }
}
