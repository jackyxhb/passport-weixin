module.exports = profile => {
    console.log(JSON.stringify(profile));
    return {
        uid: profile.username || profile.id,
        mail: profile._json.email,
        cn: profile.displayName,
        displayName: profile.displayName,
        givenName: profile._json.name,
        sn: profile.last_name,
        o: profile._json.company,
        l: profile._json.location
    };
};


// passport-github:
// profile._json =
//     {
//         "login": "jackyxhb",
//         "id": 641058,
//         "node_id": "MDQ6VXNlcjY0MTA1OA==",
//         "avatar_url": "https://avatars0.githubusercontent.com/u/641058?v=4",
//         "gravatar_id": "",
//         "url": "https://api.github.com/users/jackyxhb",
//         "html_url": "https://github.com/jackyxhb",
//         "followers_url": "https://api.github.com/users/jackyxhb/followers",
//         "following_url": "https://api.github.com/users/jackyxhb/following{/other_user}",
//         "gists_url": "https://api.github.com/users/jackyxhb/gists{/gist_id}",
//         "starred_url": "https://api.github.com/users/jackyxhb/starred{/owner}{/repo}",
//         "subscriptions_url": "https://api.github.com/users/jackyxhb/subscriptions",
//         "organizations_url": "https://api.github.com/users/jackyxhb/orgs",
//         "repos_url": "https://api.github.com/users/jackyxhb/repos",
//         "events_url": "https://api.github.com/users/jackyxhb/events{/privacy}",
//         "received_events_url": "https://api.github.com/users/jackyxhb/received_events",
//         "type": "User",
//         "site_admin": false,
//         "name": "Jacky",
//         "company": "ABC",
//         "blog": "",
//         "location": "Beijing",
//         "email": "jackyxhb@gmail.com",
//         "hireable": null,
//         "bio": null,
//         "public_repos": 1,
//         "public_gists": 0,
//         "followers": 3,
//         "following": 2,
//         "created_at": "2011-02-27T17:18:41Z",
//         "updated_at": "2019-11-22T07:37:57Z"
//     }