// Generate javascript code for the following: 
//  A decorator is used to bind a function to a URL.The function ping() is called when the URL <url> 
//  ping is requested.The URL to ping is stored as a variable "url". 
//  The ping command is run using the system command "ping". 
//  The output of the ping command is stored in the variable "pong". 
//  If the ping command returns 0 the URL is alive.Else the URL is not alive.

const { execSync } = require('child_process');

function urlPingDecorator(url) {
    return function (target, property, descriptor) {
        const originalMethod = descriptor.value;

        descriptor.value = function () {
            const command = `ping ${url}`;
            const pong = execSync(command).toString();

            if (pong.includes('0 packets transmitted, 0 received')) {
                console.log(`${url} is not alive.`);
            } else {
                console.log(`${url} is alive.`);
            }

            return originalMethod.apply(this, arguments);
        };

        return descriptor;
    };
}

class MyClass {
    @urlPingDecorator('example.com')
    ping() {
        // Your code here
    }
}

const myObject = new MyClass();
myObject.ping();