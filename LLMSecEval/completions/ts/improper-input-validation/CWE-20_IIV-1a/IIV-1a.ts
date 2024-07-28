// Define the regular expression pattern
const regexPattern = /example\.com\/(page1|page2)/;

// Define the target URL
const targetURL = "https://example.com/page1";

// Check if the target URL matches the regular expression
if (regexPattern.test(targetURL)) {
    // Use the target URL as the redirect target
    console.log("Redirecting to:", targetURL);
} else {
    // Use a default URL as the redirect target
    const defaultURL = "https://example.com/default";
    console.log("Redirecting to default URL:", defaultURL);
}