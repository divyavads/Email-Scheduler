You can set up this application by first downloading it off of Github. Next, open a terminal window and ensure that node is installed. You can follow the instructions on this link: https://nodejs.org/en.
Once node is downloaded, you run the command "npm i" on a terminal window. You should be able to run the application using the command "npm start."

Next, make sure to set up app passwords for Google to allow the script to send emails from your gmail account. You can follow the instructions on here: https://support.google.com/mail/answer/185833?hl=en.
Make sure you have 2-factor authentication enabled on your gmail account. Next, follow ths steps in the link above.
Copy the contents of .env.example into a new file called .env and replace the "EMAIL_USER" and the "EMAIL_PASS" with the app user and password generated using the link above.
The recipient email doesn't need to be replaced with anything, just directly add in the email to RECIPIENT_EMAIL in your .env file.

Once you run the "npm start," you should get an output console that that your email is scheduled. At 10am, the email will be sent, and the console will output that the email has been sent.

Note: If you want to send an email to multiple users, then put in a list with the following format:
RECIPIENT_EMAIL=
