//Load github api
//communication btwn local server and github server

const api = "http://api.github.com/users";

window
  .fetch(api)
  .then(data => {
    data
      .json()
      .then(users => {
        //print object
        var output = [];
        for (let user of users) {
          output += `
                    <div class = "conatiner">
                    <table class="table table-bordered mt-4">
                        <tr>
                            <th> ID </th>
                            <th> NAME </th>
                            <th> PHOTO </th>
                            <th> REPO </th>
                            <th> URL </th>
                        </tr>
                        <tr>
                            <td>${user.id}</td>
                            <td>${user.login}</td>
                            <td><img
                                src = "${user.avatar_url}"/></td>
                            <td>${user.repos_url}</td>
                            <td>${user.url}</td>
                        </tr>
                    </table>
                    </div>
                            `;

          document.getElementById("template").innerHTML = output;
          console.log(user.login);
        }
      })
      .catch(err => console.log(err));
  })
  .catch(err => console.log(err));
