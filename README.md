Users can put in their expected transactions, like rent, payment for electricy, their daily coffee at Starbucks, etc.

By setting an initial monthly budget, the user can inspect how much money they can spend each month, and how much they have left by the end of each month.

**Extra**  
- The user can create custom categories.  

- Users can assign one or more categories to their transactions.  

- By assigning categories to the transactions, the users will gain extra insight as they can see per category how strong the money flow is and can quickly view which category they have to manage better to prevent additional spendings.

# User
- id: number
- name: string
- email: string
- budget: number
- transactions: Transaction[]

# Transaction
- title: string
- user_id: number
- amount: number
- type: string
- categories: string[]
- repetition: string

# Category
- title: string

## Repetitions
- Incidental / once
- Daily
- Weekly
- Monthly
- Yearly

