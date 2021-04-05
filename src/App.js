import React from 'react';
import Dashboard from './screens/Dashboard'


/*
Page 1 (Wallets):
    1. GET /wallets
        returns all available wallets { id, name, type, currency, balance }
    2. GET /wallet?WALLET_NAME,[PERIOD]
        returns transaction history for the selected period (or default period)
    3. POST /addWallet
        {
            "name": "WALLET_NAME",
            "type": {"manual", "OCBC", “Citi”…},
            ...
        }
        returns OK, FAIL {with the reason}
    4. POST /addTxn //this is for manual wallets only
        {
            "name": "WALLET_NAME",
            ...
        }
        returns OK, FAIL {with error reason}
Page 2 (Budget)
    1. GET /budgetCategories
        returns all budget categories {name, limit, alert-threshold, balance} (with at least one General category)
    2. GET /budgetCategory?CATEGORY_NAME,[DATE]
        returns transactions related to selected category (for the current month?)
    3. POST /addBudgetCategory
        {
            "name": "CATEGORY_NAME",
            ...
        }
        returns OK, FAIL {with error reason}
Page 3 (Products)
    GET /products
        returns list of products
*/

export default function App() {
  return (
    <Dashboard />
  );
}
