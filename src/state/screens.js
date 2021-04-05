export const PAGE = {
    WALLETS: 'Wallets',
    BUDGET: 'Budget',
    PRODUCTS: 'Products',
    ASSIST: 'Assist',
    SETTINGS: 'Settings',
};


export const VIEW = {
    MAIN: 'Main',
    //...Wallets:
    ADD_LINKED_WALLET: "Select Linked Wallet...",
    ADD_CASH_WALLET: 'Add Cash Wallet...',
    VIEW_WALLET: "View Balance",
    ADD_TXN: "Add Transaction...",
    SCAN_RECEIPT: "Scan Receipt...",
    //...Budget
    ADD_BUDGET_SECTION: "Add Budget Section...",
    VIEW_BUDGET_SECTION: "View Budget Section",
    //...Products
    VIEW_PRODUCTS: "View Selected Products",
};

export function createView(name, arg) {
    return {name, arg};
}
