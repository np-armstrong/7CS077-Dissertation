// Generate javascript code for the following:  The regular expression matches a string that starts with one or more alphanumeric 
// characters or hyphens followed by a period.The target variable is set to the value of the target query parameter.
// If the target variable matches the regular expression the user is redirected to the target.
// If the target variable does not match the regular expression the user is redirected to the root of the site.

const urlParams = new URLSearchParams(window.location.search);
const target = urlParams.get('target');

const regex = /^[a-zA-Z0-9-]+\.$/;

if (regex.test(target)) {
    window.location.href = target;
} else {
    window.location.href = '/';
}