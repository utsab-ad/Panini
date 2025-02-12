// C programming tutorial content organized by sections
const sections = [
    {
        id: "general",
        title: "General",
        description: "Basic C programs to get started",
        programs: [
            {
                id: "hello-world",
                title: "Hello World Program",
                description: "Classic hello world program in C",
                code: `#include &lt;stdio.h&gt;

int main() {
    printf("Hello, World!\\n");
    return 0;
}`,
                output: "Hello, World!"
            }
        ]
    },
    {
        id: "operators",
        title: "Use of Operators",
        description: "Programs demonstrating different operators in C",
        programs: [
            {
                id: "arithmetic",
                title: "Arithmetic Operators",
                description: "Basic arithmetic operations in C",
                code: `#include &lt;stdio.h&gt;

int main() {
    int a = 10, b = 5;

    printf("Addition: %d\\n", a + b);
    printf("Subtraction: %d\\n", a - b);
    printf("Multiplication: %d\\n", a * b);
    printf("Division: %d\\n", a / b);
    printf("Modulus: %d\\n", a % b);

    return 0;
}`,
                output: "Addition: 15\nSubtraction: 5\nMultiplication: 50\nDivision: 2\nModulus: 0"
            }
        ]
    },
    {
        id: "simple",
        title: "Simple Programs",
        description: "Simple and General Programs in C",
        programs: [
            {
                id: "sprogram1",
                title: "Reading and Displaying Data",
                description: "Use of scanf(), printf() functions",
                code: `#include &lt;stdio.h&gt;

int main() {
    int num;
    float fnum;
 //declaration for character
    char character;
//variable declaration for string with maximum character length
    char name[20];

    //Taking input from user 
    printf(" Enter a Number:");
    scanf("%d", &num);
    printf(" Enter a fractional value:");
    scanf("%f", &fnum);
    printf("Enter a character:");
    scanf("%c", &character)
    printf("Enter Your Name:");
    scanf("%s", &name);

    //displaying 
    printf("Number:%d", num);
    printf("Fractional value:%f", fnum);
    printf("Character:%c", character);
    printf("Name:%s", name);

    return 0;
}`,
                output: "Enter a Number: 15\nEnter a fractiona;l value: 5.006\nEnter a character: u\nEnter Your Name: utsab\n\nNumber:15\nFractional value:5.006000\nCharacter:u\nName:utsab"
            }
        ]
    },
    {
        id: "loops",
        title: "Programs using Loops",
        description: "while, do-while and for loops",
        programs: [
            {
                id: "while",
                title: "Display number series of n to 1",
                description: "Use of while loop",
                code: `#include &ltstdio.h&gt;

int main() {
    int n;
    //Taking input from user 
    printf(" Enter a Number for terms:");
    scanf("%d", &n);
    printf("The series is:");
    //while loop
    while(n!=0) //while n is not equal to zero
            {
       printf("%d", n); 
       n=n-1; // decreasing the number by 1  
            }
    return 0;
    getch();
}`,
                output: "Enter a Number for terms: 5\nThe series is:\n5\t4\t3\t2\t1\t"
            },
            {
                id: "while2",
                title: "Reversing a Three digit Number",
                description: "Use of while loop",
                code: `#include &ltstdio.h&gt;

int main() {
    int n, digit, rev=0;
    //rev=0 is the variable initialization
    //Taking input from user 
    printf(" Enter a three digit Number:");
    scanf("%d", &n);
    
    //while loop
    while(n!=0) //while n is not equal to zero
            {
        digit = n%10;
        rev = rev*10 + digit;
        n = n/10;  
            }
    printf("The reverse of given number is:%d", rev);
    return 0;
    getch();
}`,
                output: "Enter a three digit Number: 123\nThe reverse of given number is:321"
            },
            {
                id: "while3",
                title: "Number is Armstrong Or Not",
                description: "Use of while loop",
                code: `#include &ltstdio.h&gt;

int main() {
    int n, digit, arm=0;
    //arm=0 is the variable initialization
    //Taking input from user 
    printf(" Enter a three digit Number:");
    scanf("%d", &n);
    c=n;
    
    //while loop
    while(n!=0) //while n is not equal to zero
            {
        digit = n%10;
        arm = arm + (digit*digit*digit);
        n = n/10;  
            }
    if(c==arm)
            {
            printf("Yes, The given number is Armstrong");    
            }
    else
            {
            printf("No, The given number is Not Armstrong")
            }
    return 0;
    getch();
}`,
                output: "Enter a three digit Number: 153\nYes, The given number is Armstrong"
            },
            {
                id: "while4",
                title: "Number is Palindrome Or Not",
                description: "Use of while loop",
                code: `#include &ltstdio.h&gt;

int main() {
    int n, digit, rev=0;
    //rev=0 is the variable initialization
    //Taking input from user 
    printf(" Enter a three digit Number:");
    scanf("%d", &n);
    c=n;
    
    //while loop
    while(n!=0) //while n is not equal to zero
            {
        digit = n%10;
        rev= rev*10 + digit;
        n = n/10;  
            }
    if(c==rev)
            {
            printf("Yes, The given number is Palindrome");    
            }
    else
            {
            printf("No, The given number is Not Palindrome")
            }
    return 0;
    getch();
}`,
                output: "Enter a three digit Number: 151\nYes, The given number is Palindrome"
            },
     
        ]
    }
];
