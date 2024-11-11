// class BankAccount {
//     constructor(username, password) {
//       this.username = username;
//       this.password = password;
//       this.balance = 0;
//       this.history = [];
//     }
  
//     deposit(amount) {
//       this.balance += amount;
//       this.addToHistory(`Deposited $${amount}`);
//     }
  
//     withdraw(amount) {
//       if (amount > this.balance) {
//         alert("Insufficient funds.");
//         return;
//       }
//       this.balance -= amount;
//       this.addToHistory(`Withdrew $${amount}`);
//     }
  
//     transfer(amount, recipient) {
//       if (amount > this.balance) {
//         alert("Insufficient funds.");
//         return;
//       }
//       this.balance -= amount;
//       recipient.deposit(amount);
//       this.addToHistory(`Transferred $${amount} to ${recipient.username}`);
//     }
  
//     addToHistory(action) {
//       const timestamp = new Date().toLocaleString();
//       this.history.push(`${timestamp}: ${action}`);
//       updateTransactionHistory();
//     }
  
//     searchHistory(term) {
//       return this.history.filter(entry => entry.toLowerCase().includes(term.toLowerCase()));
//     }
//   }
  
//   let accounts = {};
//   let currentAccount = null;
  
//   function createAccount() {
//     const username = document.getElementById('username').value;
//     const password = document.getElementById('password').value;
  
//     if (accounts[username]) {
//       alert("Username already taken.");
//       return;
//     }
  
//     accounts[username] = new BankAccount(username, password);
//     alert("Account created successfully! Please log in.");
  
//     // Reset input fields after creating the account
//     document.getElementById('username').value = '';
//     document.getElementById('password').value = '';
//   }
  
//   function authenticate() {
//     const username = document.getElementById('username').value;
//     const password = document.getElementById('password').value;
  
//     const account = accounts[username];
//     if (account && account.password === password) {
//       currentAccount = account;
//       document.querySelector('.auth-section').style.display = 'none';
//       document.querySelector('.account-section').style.display = 'block';
//       updateBalance();
//     } else {
//       alert("Invalid credentials. Please try again.");
//     }
//   }
  
//   function deposit() {
//     const amount = parseFloat(document.getElementById('amount').value);
//     if (amount > 0) {
//       currentAccount.deposit(amount);
//       updateBalance();
//       document.getElementById('amount').value = ''; // Clear the input after deposit
//     } else {
//       alert("Please enter a valid amount.");
//     }
//   }
  
//   function withdraw() {
//     const amount = parseFloat(document.getElementById('amount').value);
//     if (amount > 0) {
//       currentAccount.withdraw(amount);
//       updateBalance();
//       document.getElementById('amount').value = ''; // Clear the input after withdrawal
//     } else {
//       alert("Please enter a valid amount.");
//     }
//   }
  
//   function transfer() {
//     const amount = parseFloat(document.getElementById('amount').value);
//     const recipientName = document.getElementById('recipient').value;
  
//     if (!accounts[recipientName]) {
//       alert("Recipient not found.");
//       return;
//     }
  
//     const recipient = accounts[recipientName];
//     if (amount > 0 && recipient) {
//       currentAccount.transfer(amount, recipient);
//       updateBalance();
//       document.getElementById('amount').value = ''; // Clear the input after transfer
//       document.getElementById('recipient').value = ''; // Clear the recipient field
//     } else {
//       alert("Please enter a valid amount and recipient.");
//     }
//   }
  
//   function updateBalance() {
//     document.getElementById('balance').innerText = `Balance: $${currentAccount.balance.toFixed(2)}`;
//   }
  
//   function updateTransactionHistory() {
//     const historyList = document.getElementById('transaction-history');
//     historyList.innerHTML = '';
//     currentAccount.history.forEach(entry => {
//       const listItem = document.createElement('li');
//       listItem.textContent = entry;
//       historyList.appendChild(listItem);
//     });
//   }
  
//   function searchHistory() {
//     const term = document.getElementById('search').value;
//     const results = currentAccount.searchHistory(term);
//     const historyList = document.getElementById('transaction-history');
//     historyList.innerHTML = '';
//     results.forEach(entry => {
//       const listItem = document.createElement('li');
//       listItem.textContent = entry;
//       historyList.appendChild(listItem);
//     });
//   }
  

// object to store accounts(for now, we are using a simple in-memory object)
let accounts = {};

// function to create a new account
function createAccount() {
    const username = document.getElementById('new-username').value;
    const password = document.getElementById('new-password').value;

    // check if username is taken
    if (accounts[username]) {
        alert("Username already taken. Please choose a different username.");
        return;

    }
    // create and store the new account
    accounts[username] = {password, balance: 0, history: []};
    alert("Account created successfully!");

    // clear input fields
    document.getElementById('new-username').value ='';
    document.getElementById('new-password').value ='';
}