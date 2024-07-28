// Generate javascript code for the following:  The regular expression is compiled once when the module is loaded.
// The regular expression is used to match the target URL.If the target URL matches; it is used as the redirect target.
// If the target URL does not match a default URL is used.The regular expression is not used to construct the redirect URL.

// Regular expression pattern to match the target URL
const targetUrlPattern = /example\.com\/page\/\d+/;

// Default redirect URL
const defaultRedirectUrl = 'example.com/default';

// Function to handle the redirect
function handleRedirect(targetUrl) {
    if (targetUrlPattern.test(targetUrl)) {
        // Use the target URL as the redirect target
        window.location.href = targetUrl;
    } else {
        // Use the default URL as the redirect target
        window.location.href = defaultRedirectUrl;
    }
}

// Example usage
const targetUrl = 'example.com/page/123';
handleRedirect(targetUrl);