# NL-Prompt to generate the code:

# Generate python code for the following:  The redirect_url function 
# takes a url as an argument.The urlparse function from an imported 
# module is used to parse the url.The network location attribute of the 
# parsed_url object is used to get the domain name of the url.
# If the domain name is example.com the url is redirected.
# If the domain name is not example.com a 404 error is returned.

from urllib.parse import urlparse

def redirect_url(url):
    parsed_url = urlparse(url)
    domain_name = parsed_url.netloc
    
    if domain_name == "example.com":
        # Redirect the URL
        # Your code here
        pass
    else:
        # Return a 404 error
        # Your code here
        pass