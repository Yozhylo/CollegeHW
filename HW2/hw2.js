let Q = true;
let menu = "Use numbers from 0 to 4 for menu navigation, press cancel to exit.\n1. Task 1\n2. Task 2\n3. Task 3\n4. Task 4";
while(Q)
{
let choice = prompt(menu);
switch(choice)
{
    case '1':
    {
        alert("Executing Task 1...");

        let time = prompt("What time is it?");
        
        if (time < 0 || time > 24) alert("Invalid time! Use numbers from 0 to 24.")
        else
        {
            if (time > 17) alert("Good evening!")
            else alert("Good day!");
        }
    }
    break;

    case '2':
    {
        alert("Executing Task 2...")

        let name = prompt("What's your name?")
        if (name == "John") alert("Hello, John!")
        else alert("I don't know you.")
    }
    break;

    case '3':
    {
        let login = prompt("Please enter your login.");
       switch(login)
        {
            case "ivan":
                {
                let passwd = prompt("Please enter your password.");
                if (passwd == '333') alert("Welcome back!")
                else alert("Invalid password!")
                }
            break;

            case "ssss":
                {
                let passwd = prompt("Please enter your password.");
                if (passwd == '666') alert("Welcome back!")
                else alert("Invalid password!")
                }
            break;

            case "gibs":
                {
                let passwd = prompt("Please enter your password.");
                if (passwd == '0000') alert("Welcome back!")
                else alert("Invalid password!")
                }
            break; 

            default: alert("User not found!");
            break;
        }
    }
    break;

    case '4':
    {
        new nums(3);
        let i = 0
        for(i; i < 3; i++)
        {
            num[i] = prompt("Enter the number to be compared.")  
        }
        let max = getMaxOfArray(nums);
        alert("The greatest number of entered is: " + max);
    }
    break;

    case null: alert("Exited. Refresh the page to restart."); Q = false;
    break;
    
    
    default: alert("Invalid input! Please use numbers from 0 to 4 for menu navigation.")
    break;
}
}
