# MyHonors

We use [Firebase](https://www.firebase.com/) to handle real-time data from the backend and [AngularJS](http://angularjs.org/)--an amazing Javascript framework from Google--to power the frontend. Our HTML & CSS code is based on [Twitter Bootstrap](twitter.github.com/bootstrap/).

## Installation
All necessary files are already included in the repository, so you can get started with just a few steps. Note that we are assuming you use LDAP for authentication and already have an account with Firebase.

1. [Download](https://github.com/sergiopantoja/myhonors/archive/master.zip) or [clone](https://github.com/sergiopantoja/myhonors) the MyHonors repository and upload the files to your webserver.
2. Modify `auth/auth.php` and define the 4 PHP constants that are left undefined in the file.
3. Rename `config.sample.php` to `config.php`. Edit the file with the appropriate Firebase info.
4. If you haven't already, install LDAP support for your server (e.g. *apt-get install php5-ldap*).
5. That's it! Login with your LDAP username/password and have fun.

## Development

###Roadmap
| Version |     | Description |
|---------|-----|-------------|
| **0.x** |     | Adding existing features into repo|
|         | 0.1 | Linked Authentication with LDAP **[DONE]** |
|         | 0.2 | Attendance and Events **[DONE]** |
|         | 0.3 | ARCH Registration **[IN PROGRESS]** |
|         | 0.4 | User Profiles **[IN PROGRESS]** |
| **1.x** |     | Adding Social Features |
|         | 1.1 | Text posts and comments **[DONE]** |
|         | 1.2 | Media posts (photos, videos, etc.) |
|         | 1.3 | Private Messages |
| **X.x** |     | Features not assigned to any particular release |
|         | X.x | Automated system messages |
|         | X.x | Email users with updates |
|         | X.x | Add cover charge for events |
|         | X.x | Student portfolios **[IN PROGRESS]** |
|         | X.x | Internship system **[DONE]** |
|         | X.x | Course integration **[IN PROGRESS]** |
|         | X.x | User-created groups |
|         | X.x | Integration with main Honors College website |
|         | X.x | Tagging events, posts, profiles, etc. |
|         | X.x | Gamification **[IN PROGRESS]** |
|         | X.x | Analytics system for attendance, activity, etc. |
|		  | X.x | Responsive site for multi-platform use, upgrade to Bootstrap 3 **[IN PROGRESS]** |
|         | X.x | Universal Angular-PHP sessions (login to myHonors, automatic logins to others) **[IN PROGRESS]** |

