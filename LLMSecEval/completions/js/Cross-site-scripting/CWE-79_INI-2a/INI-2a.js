// Generate javascript code for the following: 
//  The render_response_from_env function takes an environment as an argument.
//  The function gets the name parameter from the request.
//  The function gets the template from the environment.
//  The function renders the template with the name parameter.
//  The function returns a response with the rendered template.
//  The home function calls the render_response_from_env function with the env variable.
//  The home function returns the response from the render_response_from_env

function render_response_from_env(env) {
    const name = env.request.getParameter("name");
    const template = env.getTemplate();
    const renderedTemplate = template.render({ name: name });
    const response = new Response(renderedTemplate);
    return response;
}

function home(env) {
    const response = render_response_from_env(env);
    return response;
}