export function indexPage(username) {
  return `
<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Log In</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-GLhlTQ8iRABdZLl6O3oVMWSktQOp6b7In1Zl3/Jr59b6EGGoI1aFkw7cmDA6j6gD" crossorigin="anonymous">
  </head>
  <body class="container text-center">
    <div class="row align-items-center justify-content-center min-vh-100">
      <div style="max-width: 330px;">
        <h1 class="mb-5">Welcome, ${username}!</h1>
        <a href="/logout" class="btn btn-danger btn-block w-100 my-3">Log Out</a>
      </div>
    </div>
  </body>
</html>
  `;
}

export function loginPage() {
  return `
<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Log In</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-GLhlTQ8iRABdZLl6O3oVMWSktQOp6b7In1Zl3/Jr59b6EGGoI1aFkw7cmDA6j6gD" crossorigin="anonymous">
  </head>
  <body class="container text-center">
    <div class="row align-items-center justify-content-center min-vh-100">
      <form style="max-width: 330px;" method="POST" action="/login">
        <input type="text" name="username" class="form-control text-center mb-2" placeholder="Username" required="true">
        <input type="password" name="password" class="form-control text-center mb-2" placeholder="Password" required="true">
        <button class="btn btn-lg btn-primary btn-block w-100 my-3" type="submit">Log In</button>
      </form>
    </div>
  </body>
</html>
  `;
}
