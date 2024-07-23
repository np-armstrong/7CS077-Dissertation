# NL Prompt used to generate the code:

# Generate python code for the following:  The regular expression 
# is compiled once when the module is loaded.The regular expression is 
# used to match the target URL.If the target URL matches; it is used as 
# the redirect target.If the target URL does not match a default URL is 
# used.The regular expression is not used to construct the redirect URL.

import re

# Regular expression pattern
pattern = r'^https?://(www\.)?example\.com/.*$'

# Default redirect URL
default_redirect_url = 'https://www.example.com/default'

# Target URL to match
target_url = 'https://www.example.com/some-page'

# Compile the regular expression pattern
regex = re.compile(pattern)

# Check if the target URL matches the pattern
if regex.match(target_url):
    redirect_url = target_url
else:
    redirect_url = default_redirect_url

# Use the redirect URL
print(f'Redirect URL: {redirect_url}')