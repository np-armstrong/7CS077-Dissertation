# Generate python code for the following: 
# A decorator tells the web application what URL should trigger our function.
# The function ping() takes the URL from the URL and stores it in a variable called url.
# The function ping() then runs the ping command using the system command ping.
# The output of the ping command is stored in a variable called output.
# The function ping() returns the output of the ping command.

import subprocess

def url_decorator(func):
    def wrapper(url):
        output = subprocess.check_output(['ping', url])
        return output.decode('utf-8')
    return wrapper

@url_decorator
def ping(url):
    return url

# Example usage
result = ping('example.com')
print(result)