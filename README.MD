Diamond JIRA Custom Javascript Add-on
=====================================

This JIRA add-on allows adding custom Javascript to specific JIRA pages.
Currently its only use is to apply custom style sheets to selected JIRA Kanban boards and fix a minor display issue.

Setup from source
=================

1. wget https://marketplace.atlassian.com/download/plugins/atlassian-plugin-sdk-tgz -O - | tar xz
2. pushd atlassian-plugin-sdk-*/bin
3. export PATH=$PATH:$(pwd)
4. popd
5. git clone git@github.com:DiamondLightSource/jira-customjs.git
6. cd jira-customjs
7. module load java

Run on standalone development JIRA instance
-------------------------------------------

8. atlas-run

This will run for many minutes and start a JIRA instance.
To shut that down again press CTRL+D and wait for more minutes.

The development instance of JIRA, with the plugin included, can be accessed at http://localhost:2990/jira/
with the default Atlassian development credentials: username 'admin', password 'admin'.
On the first run a few questions need to be answered.

The plugin appears on the list of add-ons at http://localhost:2990/jira/plugins/servlet/upm
as 'Diamond Custom Javascript Plugin'.

To create a project with associated kanban board filled with sample data go to
http://localhost:2990/jira/secure/ManageRapidViews.jspa. Styling will then be
enabled for the board at http://localhost:2990/jira/secure/RapidBoard.jspa?rapidView=1.


Create a .jar file for deployment
---------------------------------

8. atlas-mvn package

This will run for fewer minutes than the above. A .jar file will materialize
in the target/ directory. Do not use the .obr file, JIRA does not like it.

Deploying a .jar file to a running JIRA instance
------------------------------------------------

Simply go to the _'Manage add-ons'_ page, click _'Upload add-on'_, select the
.jar file or point to a release URL and click _'Upload'_.
This will run for many seconds and install/replace/update the add-on as
desired.

Further
-------

Full documentation for the Atlassian Plugin SDK:

https://developer.atlassian.com/display/DOCS/Introduction+to+the+Atlassian+Plugin+SDK
